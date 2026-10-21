#!/usr/bin/env python3
"""Generate a lightweight, image-extracted version of original-menu.html."""
from pathlib import Path
import base64, io, re, hashlib
from PIL import Image, ImageOps

source=Path("original-menu.html").read_text(encoding="utf-8")
folder=Path("assets/menu-photos")
folder.mkdir(parents=True,exist_ok=True)
regex=re.compile(r'data:image/(?:jpeg|jpg|png|webp);base64,[A-Za-z0-9+/\r\n=]+',re.I)
cache={}
total=[0]

def convert(match):
    token=match.group(0)
    key=hashlib.sha256(token.encode("ascii")).hexdigest()[:16]
    if key in cache: return cache[key]
    try:
        encoded=token.split(",",1)[1]
        raw=base64.b64decode(encoded)
        image=Image.open(io.BytesIO(raw))
        image=ImageOps.exif_transpose(image)
        image.thumbnail((700,700),Image.Resampling.LANCZOS)
        if image.mode not in ("RGB","RGBA"): image=image.convert("RGBA" if "transparency" in image.info else "RGB")
        target=folder/(key+".webp")
        image.save(target,"WEBP",quality=76,method=6)
        path=target.as_posix()
        cache[key]=path
        total[0]+=len(raw)
        return path
    except Exception as exc:
        print("Skipping incompatible image:",str(exc)[:100])
        return token

output=regex.sub(convert,source)
if not cache:
    raise RuntimeError("No embedded menu photos found. Refusing to replace source.")
Path("optimized-menu.html").write_text(output,encoding="utf-8")
print(f"Extracted {len(cache)} photos; HTML: {len(source):,} -> {len(output):,} bytes; embedded image bytes: {total[0]:,}")
