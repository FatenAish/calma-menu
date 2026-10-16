/* CALMA honey add-on note: shown only within the Tea & Herbs category. */
(() => {
  const teaGrid = document.getElementById('teaProducts');
  if (!teaGrid) {
    console.warn('CALMA: Tea & Herbs product grid not found; honey note not placed.');
    return;
  }
  if (document.getElementById('calma-honey-extra')) return;

  const style = document.createElement('style');
  style.textContent = [
    '#teaProducts #calma-honey-extra{',
    'grid-column:1 / -1;flex-basis:100%;order:9999;',
    'display:block;box-sizing:border-box;width:100%;max-width:100%;',
    'margin:10px 0 4px;padding:12px 16px;',
    'border:1px solid #e9d9c8;border-radius:12px;',
    'background:#fffaf5;color:#60432e;',
    'text-align:center;direction:rtl;',
    'font:600 16px/1.6 Tajawal,Arial,sans-serif;',
    '}'
  ].join('');
  document.head.append(style);
  const note = document.createElement('div');
  note.id = 'calma-honey-extra';
  note.lang = 'ar';
  note.dir = 'rtl';
  note.setAttribute('role','note');
  note.textContent = 'إضافة عسل +0.50 دينار';
  teaGrid.append(note);
})();