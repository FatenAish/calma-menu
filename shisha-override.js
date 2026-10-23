/* CALMA shisha — verified order and prices, October 2026 */
(() => {
  const products=[
    ['Signature','Calma Signature','كالما سجنتشر (فانيلا، كسترد، موز)','5.95'],
    ['Special','Calma Special Sunset Bliss','كالما سبيشل سنسيت بليس','4.95'],
    ['Special','Calma Special Velvet Berry','كالما سبيشل فيلفيت بيري','4.95'],
    ['Flavours','Double Apple Mazaya','تفاحتين مزايا','3.95'],
    ['Flavours','Licorice','سوس','3.95'],
    ['Flavours','Mastic','مستكة','3.95'],
    ['Flavours','Gum & Cinnamon','علكة وقرفة','3.95'],
    ['Flavours','Gum & Mint','علكة ونعنع','3.95'],
    ['Flavours','Sahm Gum','علكة سهم','3.95'],
    ['Flavours','Grape & Mint','عنب ونعنع','3.95'],
    ['Flavours','Grape & Berry','عنب وتوت','3.95'],
    ['Flavours','Orange & Mint','برتقال ونعنع','3.95'],
    ['Flavours','Blue Mist','بلوميست','3.95'],
    ['Flavours','Mango & Peach','مانجا ودراق','3.95'],
    ['Flavours','Lemon & Mint','ليمون ونعنع','3.95'],
    ['Flavours','Watermelon & Mint','بطيخ ونعنع','3.95'],
    ['Flavours','Love','لوف','3.95'],
    ['Flavours','Candy','كاندي','3.95'],
    ['Flavours','Ruby Crush','روبي كراش','3.95'],
    ['Flavours','Mango','مانجا','3.95'],
    ['Flavours','Cherry','كرز','3.95'],
    ['Flavours','Mixed Fruits','فواكه مشكلة','3.95'],
    ['Flavours','Tropical Fruits','الفواكه الاستوائية','3.95'],
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
  const style=document.createElement('style');
  style.textContent='.calma-shisha .cs-title{font-size:32px;font-weight:700;margin:5px 0;color:#221a14}.calma-shisha .cs-sub{font-size:17px;color:#81634f;margin:2px 0 22px}.calma-shisha .cs-group{margin:0 0 24px}.calma-shisha .cs-heading{font-size:22px;font-weight:700;color:#47362b;margin:10px 0}.calma-shisha .cs-heading span{display:block;font-size:15px;font-weight:400;color:#93735d;margin-top:2px}.calma-shisha .cs-list{border:1px solid #edddd0;background:#fff;border-radius:20px;padding:0 16px;overflow:hidden}.calma-shisha .cs-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:15px 0;border-bottom:1px solid #eee0d4}.calma-shisha .cs-row:last-child{border-bottom:0}.calma-shisha .cs-row.cs-featured{grid-template-columns:82px minmax(0,1fr) auto}.calma-shisha .cs-img{width:82px;height:82px;border-radius:13px;object-fit:cover}.calma-shisha .cs-en{font-size:16px;font-weight:700;color:#231b15}.calma-shisha .cs-ar{font-size:16px;color:#84634c;line-height:1.5;margin-top:5px}.calma-shisha .cs-price{font-size:20px;font-weight:700;color:#694732;white-space:nowrap;text-align:right}.calma-shisha .cs-price small{display:block;font-size:11px;font-weight:400;color:#91745e}@media(max-width:500px){.calma-shisha .cs-row{gap:9px}.calma-shisha .cs-row.cs-featured{grid-template-columns:62px minmax(0,1fr) auto}.calma-shisha .cs-img{width:62px;height:62px}.calma-shisha .cs-en,.calma-shisha .cs-ar{font-size:14px}.calma-shisha .cs-price{font-size:17px}}';
  // Arabic-only, one-line shisha rows: item on the right and price on the left.
  style.textContent += '.calma-shisha .cs-title{text-align:right;direction:rtl;margin-bottom:22px}.calma-shisha .cs-row{direction:rtl;grid-template-columns:minmax(0,1fr) auto}.calma-shisha .cs-row .cs-ar{font-size:17px;font-weight:500;color:#291e19;text-align:right;direction:rtl;margin-top:0}.calma-shisha .cs-row .cs-price{direction:ltr;text-align:left;justify-self:start}.calma-shisha .cs-row .cs-price small{text-align:left}.calma-shisha .cs-sub{display:none}';
  document.head.append(style);
  const el=(tag,cls,text)=>{
    const node=document.createElement(tag);
    if(cls)node.className=cls;
    if(text!==undefined)node.textContent=text;
    return node;
  };
  const fragment=document.createDocumentFragment();
  const arTitle=el('h2','cs-title','الأراجيل');
  arTitle.lang='ar';arTitle.dir='rtl';fragment.append(arTitle);
  // One continuous box: signature, one special, all flavours, head replacement.
  const list=el('div','cs-list');
  for(const [group,name,arabic,value] of products){
    const row=el('article','product-card cs-row');
    row.dataset.menuName=name;
    const label=el('div','');
    const arabicName=el('div','cs-ar',arabic);
    arabicName.lang='ar';arabicName.dir='rtl';label.append(arabicName);
    const price=el('div','cs-price',value);
    price.append(el('small','','JOD'));
    row.append(label,price);
    list.append(row);
  }
  fragment.append(list);
  root.replaceChildren(fragment);
  root.classList.add('calma-shisha');
  root.dataset.calmaShishaUpdated='true';
  // Reorder the physical menu section to appear before beverages.
  const drinksSection=document.getElementById('hotDrinks');
  if(drinksSection && root!==drinksSection &&
     !root.contains(drinksSection) && !drinksSection.contains(root)){
    const shishaAncestors=[];
    for(let node=root;node;node=node.parentElement) shishaAncestors.push(node);
    const common=shishaAncestors.find(node=>node.contains(drinksSection));
    if(common && common!==document.body && common!==document.documentElement){
      let shishaBranch=root;
      let drinksBranch=drinksSection;
      while(shishaBranch.parentElement!==common) shishaBranch=shishaBranch.parentElement;
      while(drinksBranch.parentElement!==common) drinksBranch=drinksBranch.parentElement;
      if(shishaBranch!==drinksBranch) common.insertBefore(shishaBranch,drinksBranch);
    }else if(root.parentElement===drinksSection.parentElement){
      root.parentElement.insertBefore(root,drinksSection);
    }
  }

  // The Main Menu has separate image tiles, so move its SHISHA tile
  // ahead of BEVERAGES as well (do not remove the Main Menu tile image).
  const tileText=node=>(node.textContent||'').replace(/\s+/g,' ').trim();
  const shishaTileText=text=>/shisha/i.test(text) && /الأراجيل/.test(text);
  const beverageTileText=text=>/beverages/i.test(text) && /المشروبات/.test(text);
  const foodTileText=text=>/food/i.test(text) && /الطعام/.test(text);
  const grids=[...document.querySelectorAll('div,nav,section,ul')].filter(container=>{
    const children=[...container.children];
    if(children.length<3 || children.length>10) return false;
    const contents=children.map(tileText);
    return contents.some(shishaTileText)&&contents.some(beverageTileText)&&contents.some(foodTileText)
      && contents.every(text=>text.length<220);
  });
  if(grids.length){
    grids.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    const grid=grids[0];
    const shishaCard=[...grid.children].find(card=>shishaTileText(tileText(card)));
    const beveragesCard=[...grid.children].find(card=>beverageTileText(tileText(card)));
    if(shishaCard && beveragesCard) grid.insertBefore(shishaCard,beveragesCard);
  }else{
    // Fallback: matching category cards as links inside a shared grid.
    const nav=[...document.querySelectorAll('a,button,[role="button"]')];
    const shishaCard=nav.find(card=>shishaTileText(tileText(card))&&tileText(card).length<150);
    const beveragesCard=nav.find(card=>beverageTileText(tileText(card))&&tileText(card).length<150);
    if(shishaCard && beveragesCard && shishaCard.parentElement===beveragesCard.parentElement){
      shishaCard.parentElement.insertBefore(shishaCard,beveragesCard);
    }
  }
  console.info('Calma: shisha menu updated, '+products.length+' rows; water 0.50 JOD');
})();