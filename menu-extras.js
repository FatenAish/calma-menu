/* CALMA menu footer extras. Runs after all category overrides. */
(() => {
  if (document.getElementById('calma-honey-extra')) return;
  const note = document.createElement('div');
  note.id = 'calma-honey-extra';
  note.setAttribute('lang', 'ar');
  note.setAttribute('dir', 'rtl');
  note.setAttribute('role', 'note');
  note.textContent = 'إضافة عسل +0.50 دينار';
  const style = document.createElement('style');
  style.textContent = '#calma-honey-extra{box-sizing:border-box;width:calc(100% - 36px);max-width:720px;margin:20px auto 30px;padding:14px 20px;border:1px solid #e9d9c8;border-radius:14px;background:#fffaf5;color:#60432e;text-align:center;font-size:18px;font-weight:600;font-family:Tajawal,Arial,sans-serif;line-height:1.7}';
  document.head.append(style);

  // Footer note at the bottom of the menu, above the site footer if present.
  const footers = [...document.querySelectorAll('footer')];
  const footer = footers[footers.length-1];
  if (footer && footer.parentElement) footer.parentElement.insertBefore(note, footer);
  else {
    const main = document.querySelector('main') || document.body;
    main.append(note);
  }
})();