/* CALMA desserts: four selected items, JOD prices, original menu photos where available. */
(() => {
  const menu = [
    ['San Sebastian','سان سباستيان','3.95',['San Sebastian','San Sebastian Cheesecake','Basque Cheesecake','Cheesecake']],
    ['Matilda Cake','كيكة ماتيلدا','3.50',['Matilda Cake','Chocolate Cake','Matilda','Chocolate Fudge Cake']],
    ['Tiramisu Cake','تيراميسو','3.50',['Tiramisu Cake','Tiramisu']],
    ['Red Velvet','ريد فيلفيت','3.50',['Red Velvet','Red Velvet Cake']]
  ];
  const norm = t => (t||'').toLowerCase().replace(/\s+/g,' ').trim();
  const existing = [...document.querySelectorAll('article.product-card[data-menu-name]')];
  const originalImages = new Map(existing.map(card => [norm(card.dataset.menuName),card.querySelector('img')?.getAttribute('src')]).filter(x => x[1]));
  let root = ['dessertsMenu','dessertMenu','dessertsSection','dessertSection','desserts-menu','dessert-menu','desserts','dessert'].map(x=>document.getElementById(x)).find(Boolean);
  if (!root) {
    const heading = [...document.querySelectorAll('h1,h2,h3,h4')].find(x=>/^(desserts?|الحلويات)$/i.test((x.textContent||'').trim()));
    root = heading?.closest('section');
  }
  if (!root) {
    console.warn('CALMA desserts section not found');
    return;
  }
  const style = document.createElement('style');
  style.textContent = '.calma-desserts{color:#35261c}.calma-desserts .cd-title{font:bold 30px/1.3 Georgia,serif;margin:10px 0 18px;text-align:center}.calma-desserts .cd-title span{display:block;font:500 19px/1.5 Tajawal,Arial,sans-serif}.calma-desserts .cd-list{background:#fffaf6;border:1px solid #e5d3c3;border-radius:22px;overflow:hidden}.calma-desserts .cd-card{display:grid;grid-template-columns:140px minmax(0,1fr) auto;align-items:center;gap:18px;padding:14px;border-bottom:1px solid #e8d6c7}.calma-desserts .cd-card:last-child{border-bottom:0}.calma-desserts .cd-img{width:140px;height:115px;object-fit:cover;border-radius:12px;background:#eaded3}.calma-desserts .cd-name{font:bold 20px/1.3 Georgia,serif;color:#362418}.calma-desserts .cd-name span{display:block;font:500 17px/1.5 Tajawal,Arial,sans-serif;margin-top:5px;direction:rtl;text-align:left}.calma-desserts .cd-price{font:bold 23px Arial,sans-serif;color:#654631;white-space:nowrap}.calma-desserts .cd-price small{display:block;font:12px Arial,sans-serif;text-align:center;color:#8b6c58}@media(max-width:540px){.calma-desserts .cd-card{grid-template-columns:104px minmax(0,1fr) auto;gap:9px;padding:10px}.calma-desserts .cd-img{width:104px;height:95px}.calma-desserts .cd-name{font-size:15px}.calma-desserts .cd-name span{font-size:13px}.calma-desserts .cd-price{font-size:17px}.calma-desserts .cd-price small{font-size:10px}}';
  document.head.append(style);
  const title = document.createElement('h2');
  title.className = 'cd-title';
  title.append('DESSERTS');
  const arTitle = document.createElement('span');
  arTitle.textContent = 'الحلويات';
  title.append(arTitle);
  const list = document.createElement('div');
  list.className = 'cd-list';
  for (const [en,ar,price,candidates] of menu) {
    const card = document.createElement('article');
    card.className = 'product-card cd-card';
    card.dataset.menuName = en;
    const img = document.createElement('img');
    img.className='product-image cd-img';
    img.loading='lazy';
    img.alt=en+' | '+ar;
    img.src = en === 'Matilda Cake'
      ? 'https://thexocolatl.com/cdn/shop/files/JSH05240.jpg?v=1743242950&width=1000'
      : (candidates.map(x=>originalImages.get(norm(x))).find(Boolean) || 'assets/category-dessertsmenu.webp');
    img.onerror = () => {img.onerror=null;img.src='assets/category-dessertsmenu.webp'};
    const name = document.createElement('div');
    name.className='cd-name';
    name.append(en);
    const arName=document.createElement('span');
    arName.textContent=ar;
    name.append(arName);
    const amount=document.createElement('div');
    amount.className='cd-price';
    amount.append(price);
    const jod=document.createElement('small');jod.textContent='JOD';amount.append(jod);
    card.append(img,name,amount);
    list.append(card);
  }
  root.replaceChildren(title,list);
  root.classList.add('calma-desserts');
  root.hidden=false;
  root.removeAttribute('aria-hidden');
  root.style.removeProperty('display');
  console.info('CALMA: restored',menu.length,'desserts');
})();
