/* CALMA shisha — verified order and prices, October 2026 */
(() => {
  const products=[
    ['Signature','Calma Signature','أرجيلة كالما سيجنتشر','5.50'],
    ['Special','Special 1','سبيشل 1','5.00'],
    ['Special','Special 2','سبيشل 2','5.00'],
    ['Special','Special 3','سبيشل 3','5.00'],
    ['Flavours','Double Apple Mazaya','تفاحتين مزايا','4.00'],
    ['Flavours','Licorice','سوس','4.00'],
    ['Flavours','Mastic','مستكة','4.00'],
    ['Flavours','Gum & Cinnamon','علكة وقرفة','4.00'],
    ['Flavours','Gum & Mint','علكة ونعنع','4.00'],
    ['Flavours','Sahm Gum','علكة سهم','4.00'],
    ['Flavours','Grape & Mint','عنب ونعنع','4.00'],
    ['Flavours','Grape & Berry','عنب وتوت','4.00'],
    ['Flavours','Orange & Mint','برتقال ونعنع','4.00'],
    ['Flavours','Blue Mist','بلوميست','4.00'],
    ['Flavours','Mango & Peach','مانجا ودراق','4.00'],
    ['Flavours','Lemon & Mint','ليمون ونعنع','4.00'],
    ['Flavours','Watermelon & Mint','بطيخ ونعنع','4.00'],
    ['Flavours','Love','لوف','4.00'],
    ['Flavours','Candy','كاندي','4.00'],
    ['Flavours','Ruby Crush','روبي كراش','4.00'],
    ['Flavours','Mango','مانجا','4.00'],
    ['Flavours','Cherry','كرز','4.00'],
    ['Flavours','Mixed Fruits','فواكه مشكلة','4.00'],
    ['Flavours','Double Apple Al Fakher','تفاحتين فاخر','4.50'],
    ['Flavours','Double Apple Nakhla','تفاحتين نخلة','4.50'],
    ['Extras','Head Replacement','تغيير رأس','2.00']
  ];
  // Water is a drink; keep its new price even if the shisha section cannot be found.
  const waterCards=[...document.querySelectorAll('article.product-card[data-menu-name]')]
    .filter(c=>(c.dataset.menuName||'').trim().toLowerCase()==='water');
  for(const card of waterCards){
    const price=card.querySelector('.price');
    if(price){
      price.textContent='0.50';
      price.setAttribute('data-price','0.50');
      price.setAttribute('aria-label','0.50 JOD');
    }else{
      const wrap=card.querySelector('.product-price');
      if(wrap)wrap.textContent='0.50 JOD';
    }
  }
  let root=['shishaMenu','shishaSection','shisha-menu','shisha','shishaProducts','shishaFlavours']
    .map(id=>document.getElementById(id)).find(Boolean);
  if(!root){
    root=[...document.querySelectorAll('[id]')].find(el=>
      /shisha/i.test(el.id) && el.tagName==='SECTION');
  }
  if(!root){
    const heading=[...document.querySelectorAll('h1,h2,h3,h4')]
      .find(el=>/shisha|الأراجيل|الاراجيل/i.test(el.textContent));
    if(heading)root=heading.closest('section');
  }
  if(!root){
    console.warn('Calma: shisha section not located; other sections left unchanged.');
    return;
  }
  const oldImage=root.querySelector('article.product-card img');
  const signatureImage=(oldImage && (oldImage.getAttribute('src')||oldImage.getAttribute('data-src'))) || 'assets/category-shishamenu.webp';
  const style=document.createElement('style');
  style.textContent='.calma-shisha .cs-title{font-size:32px;font-weight:700;margin:5px 0;color:#221a14}.calma-shisha .cs-sub{font-size:17px;color:#81634f;margin:2px 0 22px}.calma-shisha .cs-group{margin:0 0 24px}.calma-shisha .cs-heading{font-size:22px;font-weight:700;color:#47362b;margin:10px 0}.calma-shisha .cs-heading span{display:block;font-size:15px;font-weight:400;color:#93735d;margin-top:2px}.calma-shisha .cs-list{border:1px solid #edddd0;background:#fff;border-radius:20px;padding:0 16px;overflow:hidden}.calma-shisha .cs-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:15px 0;border-bottom:1px solid #eee0d4}.calma-shisha .cs-row:last-child{border-bottom:0}.calma-shisha .cs-row.cs-featured{grid-template-columns:82px minmax(0,1fr) auto}.calma-shisha .cs-img{width:82px;height:82px;border-radius:13px;object-fit:cover}.calma-shisha .cs-en{font-size:16px;font-weight:700;color:#231b15}.calma-shisha .cs-ar{font-size:16px;color:#84634c;line-height:1.5;margin-top:5px}.calma-shisha .cs-price{font-size:20px;font-weight:700;color:#694732;white-space:nowrap;text-align:right}.calma-shisha .cs-price small{display:block;font-size:11px;font-weight:400;color:#91745e}@media(max-width:500px){.calma-shisha .cs-row{gap:9px}.calma-shisha .cs-row.cs-featured{grid-template-columns:62px minmax(0,1fr) auto}.calma-shisha .cs-img{width:62px;height:62px}.calma-shisha .cs-en,.calma-shisha .cs-ar{font-size:14px}.calma-shisha .cs-price{font-size:17px}}';
  document.head.append(style);
  const el=(tag,cls,text)=>{
    const node=document.createElement(tag);
    if(cls)node.className=cls;
    if(text!==undefined)node.textContent=text;
    return node;
  };
  const fragment=document.createDocumentFragment();
  fragment.append(el('h2','cs-title','Shisha'));
  const arTitle=el('p','cs-sub','الأراجيل');
  arTitle.lang='ar';arTitle.dir='rtl';fragment.append(arTitle);
  const sections=[
    ['Signature','Signature','سيجنتشر'],
    ['Special','Special Shisha','أراجيل سبيشل'],
    ['Flavours','Flavours','النكهات'],
    ['Extras','Extras','الإضافات']
  ];
  for(const [type,en,ar] of sections){
    const block=el('div','cs-group');
    const heading=el('h3','cs-heading',en);
    const titleAr=el('span','',ar);titleAr.lang='ar';titleAr.dir='rtl';
    heading.append(titleAr);
    const list=el('div','cs-list');
    for(const [group,name,arabic,value] of products.filter(p=>p[0]===type)){
      const row=el('article','product-card cs-row'+(type==='Signature'?' cs-featured':''));
      row.dataset.menuName=name;
      if(type==='Signature'){
        const photo=el('img','cs-img');
        photo.src=signatureImage;photo.alt='أرجيلة كالما';photo.loading='lazy';
        photo.onerror=()=>{photo.onerror=null;photo.src='assets/category-shishamenu.webp';};
        row.append(photo);
      }
      const label=el('div','');
      label.append(el('div','cs-en',name));
      const arabicName=el('div','cs-ar','('+arabic+')');
      arabicName.lang='ar';arabicName.dir='rtl';label.append(arabicName);
      const price=el('div','cs-price',value);
      price.append(el('small','','JOD'));
      row.append(label,price);
      list.append(row);
    }
    block.append(heading,list);fragment.append(block);
  }
  root.replaceChildren(fragment);
  root.classList.add('calma-shisha');
  root.dataset.calmaShishaUpdated='true';
  // Keep the Shisha section ahead of Drinks in the visible menu order.
  const drinksSection=document.getElementById('hotDrinks');
  if(drinksSection && root.parentElement &&
     root!==drinksSection && !root.contains(drinksSection) && !drinksSection.contains(root)){
    // Find the Drinks ancestor sharing Shisha's parent; move the complete section,
    // not only its heading or product grid.
    let drinksSibling=drinksSection;
    while(drinksSibling && drinksSibling.parentElement!==root.parentElement){
      drinksSibling=drinksSibling.parentElement;
    }
    if(drinksSibling && drinksSibling!==root){
      root.parentElement.insertBefore(root,drinksSibling);
    }else if(drinksSection.parentElement && !drinksSection.parentElement.contains(root)){
      drinksSection.parentElement.insertBefore(root,drinksSection);
    }
  }
  console.info('Calma: shisha menu updated, '+products.length+' rows; water 0.50 JOD');
})();