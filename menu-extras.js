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
/* Drink add-ons: one shared block at the end of the full Beverages section, outside all drink tabs. */
(() => {
  const beverages = document.getElementById('hotDrinks');
  if (!beverages) { console.warn('CALMA: Beverages section unavailable'); return; }
  // Remove any previous tab-specific add-ons, avoiding duplicates.
  for (const card of beverages.querySelectorAll('.calma-drink-addon')) card.remove();
  const addonGrid=document.createElement('div');
  addonGrid.id='calmaDrinkAddons';
  addonGrid.className='product-grid calma-drink-addons';
  addonGrid.style.marginTop='24px';
  const heading=document.createElement('h3');
  heading.textContent='Add-ons (الإضافات)';
  heading.style.margin='28px 0 12px';
  beverages.append(heading,addonGrid);
  const extras = [
    ['Milk Add-on','إضافة حليب','0.50'],
    ['Flavor Add-on','إضافة نكهة','0.50'],
    ['Lactose-Free Milk Add-on','إضافة حليب لاكتوز فري','0.75']
  ];
  for (const [en,ar,amount] of extras) {
    if ([...addonGrid.querySelectorAll('article[data-menu-name]')].some(el => el.dataset.menuName===en)) continue;
    const card=document.createElement('article');
    card.className='product-card calma-drink-addon';
    card.dataset.menuName=en;
    const media=document.createElement('div');
    media.className='product-image-wrap';
    const image=document.createElement('img');
    image.className='product-image';
    image.src='assets/category-hotdrinks.webp';
    image.alt=ar;
    image.loading='lazy';
    media.append(image);
    const copy=document.createElement('div');
    copy.className='product-copy';
    const heading=document.createElement('h3');
    heading.append(document.createTextNode(en));
    const nameAr=document.createElement('bdi');
    nameAr.className='product-name-ar';
    nameAr.lang='ar';
    nameAr.dir='rtl';
    nameAr.textContent='('+ar+')';
    heading.append(nameAr);
    copy.append(heading);
    const cost=document.createElement('div');
    cost.className='product-price';
    cost.dir='ltr';
    const price=document.createElement('span');
    price.className='price';
    price.textContent=amount;
    price.dataset.price=amount;
    price.setAttribute('aria-label',amount+' JOD');
    cost.append(price);
    card.append(media,copy,cost);
    addonGrid.append(card);
  }
})();
