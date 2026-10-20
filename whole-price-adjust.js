/* CALMA pricing: subtract 0.05 JOD from whole-dinar prices only.
   Existing fractional prices stay unchanged. Reversible: remove this script from index.html. */
(() => {
  const adjust = value => {
    const raw=(value||'').trim();
    const match=raw.match(/^(\d+)(?:\.00)?$/);
    if(!match)return null;
    const integer=Number(match[1]);
    if(!Number.isSafeInteger(integer)||integer<1)return null;
    return (integer-0.05).toFixed(2);
  };
  let updated=0;
  for(const node of document.querySelectorAll('.product-card .price,.calma-food .cf-amount strong,.calma-shisha .cs-price')){
    if(node.closest('[data-menu-name="Espresso"]'))continue; // Explicitly approved 1.00 / 1.75 prices
    const old=node.classList.contains('cs-price') ? (node.firstChild?.nodeValue||'').trim() : (node.textContent||'').trim();
    const next=adjust(old);
    if(next===null)continue;
    if(node.classList.contains('cs-price'))node.firstChild.nodeValue=next;
    else node.textContent=next;
    if(node.hasAttribute('data-price'))node.setAttribute('data-price',next);
    if(node.hasAttribute('aria-label'))node.setAttribute('aria-label',node.getAttribute('aria-label').replace(old,next));
    updated++;
  }
  console.info('CALMA: whole-dinar prices reduced by 0.05 JOD:',updated);
})();
