/* Updated Calma food menu: 25 approved items, no Wily's images. */
(() => {
  const categories = [
    ['flat','Flat Sandwiches','ساندويشات الفلات'],
    ['burger','Burgers','البرغر'],
    ['chicken','Chicken Sandwiches','ساندويشات الدجاج'],
    ['wrap','Wraps','الراب'],
    ['box','Chicken Boxes','بوكسات الدجاج'],
    ['rice','Rice Bowls','أطباق الأرز'],
    ['salad','Salads','السلطات'],
    ['side','Sides','الإضافات']
  ];
  // [group, name, Arabic name, price, meal price, photo references, suitable fallback photo]
  const items = [
    ['flat','Beef & Cheese Flat','فلات لحم وجبنة','2.50','3.50',['Cheese Flat','Classic Flat']],
    ['flat','Truffle Beef Flat','فلات لحم بالترافل','2.50','3.90',['Truffle Flat']],
    ['flat','Classic Beef Flat','فلات لحم كلاسيك','2.50','3.50',['Classic Flat']],
    ['burger','Double Beef & Cheese Burger','برغر لحم دبل بالجبنة','4.50','5.80',['Double Burger','Cheese Burger','Classic Burger']],
    ['burger','Truffle Beef Burger','برغر لحم بالترافل','4.50','5.90',['Truffle Burger']],
    ['burger','Classic Beef Burger','برغر لحم كلاسيك','4.50','5.80',['Classic Burger']],
    ['burger','Cheese-Stuffed Beef Burger','برغر لحم محشي بالجبنة','3.30','4.20',['Stuffed Burger']],
    ['chicken','Crispy Chicken & Cheese Toast','توست دجاج كرسبي بالجبنة','4.50','5.80',['Chicken Toast']],
    ['chicken','Classic Crispy Chicken Sandwich','ساندويش دجاج كرسبي','2.99','3.99',['Crispy Chicken']],
    ['chicken','Spicy Crispy Chicken Sandwich','ساندويش دجاج كرسبي حار','4.50','5.80',['Spicy Chicken']],
    ['wrap','Popcorn Chicken Wrap','راب دجاج بوب كورن','2.99','3.50',['Chicken Wrap']],
    ['wrap','Beef & Vegetables Wrap','راب لحم بالخضار','2.50','3.50',['Beef Wrap']],
    ['box','Nashville Chicken Box','بوكس دجاج ناشفيل','5.90',null,['Hot Chicken Box','Spicy Chicken Box']],
    ['box','Spicy Chicken Box','بوكس دجاج حار','5.90',null,['Spicy Chicken Box']],
    ['box','Classic Chicken Box','بوكس دجاج كلاسيك','5.30',null,['Classic Chicken Box']],
    ['box','Chicken Tenders Box','بوكس أصابع الدجاج المقرمشة','4.50',null,['Chicken Tenders']],
    ['rice','Crispy Chicken Rice Bowl','أرز بالدجاج المقرمش','3.50',null,['Chicken Rice Bowl','Rice Bowl'],'https://images.unsplash.com/photo-1603496987674-79600a000f55?w=420&auto=format&fit=crop&q=75'],
    ['salad','Chicken Tenders Salad','سلطة دجاج كرسبي','3.50',null,['Chicken Tenders Salad','Chicken Salad'],'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=420&auto=format&fit=crop&q=75'],
    ['salad','Caesar Salad','سلطة سيزر','2.50',null,['Caesar Salad'],'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=420&auto=format&fit=crop&q=75'],
    ['salad','Chicken Caesar Salad','سلطة سيزر بالدجاج','3.95',null,['Chicken Caesar Salad'],'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=420&auto=format&fit=crop&q=75'],
    ['side','Jalapeño Bites','كرات هالبينو مقرمشة','1.99',null,['Jalapeno Bites','Jalapeño Bites'],'https://images.unsplash.com/photo-1756652242630-5a90c89a99cd?auto=format&fit=crop&w=420&q=75'],
    ['side','Chicken Nuggets (6 Pieces)','ناجتس دجاج 6 قطع','2.00',null,['Nuggets','Chicken Nuggets'],'https://images.unsplash.com/photo-1696265498747-efc4c0dd7b98?auto=format&fit=crop&w=420&q=75'],
    ['side','Chicken Nuggets (9 Pieces)','ناجتس دجاج 9 قطع','3.00',null,['Nuggets','Chicken Nuggets'],'https://images.unsplash.com/photo-1696265498747-efc4c0dd7b98?auto=format&fit=crop&w=420&q=75'],
    ['side','French Fries','بطاطا مقلية','1.50',null,['French Fries','Fries'],'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=420&auto=format&fit=crop&q=75'],
    ['side','Potato Wedges','بطاطا ودجز','2.00',null,['Potato Wedges','Wedges'],'https://images.unsplash.com/photo-1773848948025-275cc700d34a?auto=format&fit=crop&w=420&q=75']
  ];
  const norm = value => (value||'').toLowerCase().trim().replace(/\s+/g,' ');
  const originalCards = [...document.querySelectorAll('article.product-card[data-menu-name]')];
  const photos = new Map(originalCards.map(card=>[norm(card.dataset.menuName),card.querySelector('img')]));
  const findImage = keys => keys.map(key=>photos.get(norm(key))).find(Boolean);
  const clue = ['Classic Flat','Truffle Flat','Classic Burger','Chicken Toast','Beef Wrap','Chicken Wrap'].map(key=>originalCards.find(card=>norm(card.dataset.menuName)===norm(key))).find(Boolean);
  let root = document.getElementById('foodMenu') || document.getElementById('foodSection') || document.getElementById('food-menu') || document.getElementById('food');
  if(!root && clue) {
    for(let ancestor=clue.parentElement;ancestor&&ancestor!==document.body;ancestor=ancestor.parentElement){
      const matches=[...ancestor.querySelectorAll('article.product-card[data-menu-name]')];
      const foodCount=matches.filter(card=>/flat|burger|chicken|wrap|tender/i.test(card.dataset.menuName)).length;
      if(ancestor.tagName==='SECTION' && foodCount>=5 && matches.length<=90){root=ancestor;break;}
    }
    if(!root) root=clue.closest('section');
  }
  if(!root){console.error('Calma food: existing food section not located');return;}
  const style=document.createElement('style');
  style.textContent='.calma-food .cf-title{font-size:32px;font-weight:700;margin:12px 0 0;color:#201913}.calma-food .cf-title-ar{color:#856750;font-size:16px;margin:4px 0 20px}.calma-food .cf-group{margin:0 0 25px}.calma-food .cf-group h3{font-size:22px;font-weight:700;color:#35241b;margin:12px 0}.calma-food .cf-group h3 span{display:block;color:#886b57;font-size:15px;font-weight:400;margin-top:3px}.calma-food .cf-grid{border:1px solid #eadccf;border-radius:20px;background:#fff;padding:0 17px;overflow:hidden}.calma-food .cf-card{display:grid;grid-template-columns:108px minmax(0,1fr) auto;align-items:center;gap:16px;padding:18px 0;border-bottom:1px solid #eee0d6}.calma-food .cf-card:last-child{border-bottom:0}.calma-food .cf-img{width:108px;height:108px;object-fit:cover;border-radius:14px;background:#f2e9e0;display:block}.calma-food .cf-name{font-size:17px;line-height:1.3;margin:0;font-weight:700;color:#1b1613}.calma-food .cf-name span{display:block;font-size:16px;line-height:1.6;color:#8a654c;font-weight:400;margin-top:5px}.calma-food .cf-prices{min-width:112px;text-align:right;white-space:nowrap}.calma-food .cf-price{display:flex;gap:7px;align-items:baseline;justify-content:flex-end;margin:5px 0}.calma-food .cf-price strong{color:#674630;font-size:17px}.calma-food .cf-price small{font-size:11px;color:#80644f}.calma-food .cf-price em{font-style:normal;color:#876d5b;font-size:11px}.calma-food .cf-credits{font-size:10px;color:#9b8376;line-height:1.6}.calma-food .cf-credits a{color:inherit}@media(max-width:580px){.calma-food .cf-grid{padding:0 13px}.calma-food .cf-card{grid-template-columns:88px minmax(0,1fr);gap:11px;padding:15px 0}.calma-food .cf-img{width:88px;height:88px}.calma-food .cf-name{font-size:15px}.calma-food .cf-name span{font-size:14px}.calma-food .cf-prices{grid-column:2;display:flex;flex-wrap:wrap;gap:12px;min-width:0;text-align:left}.calma-food .cf-price{justify-content:flex-start}.calma-food .cf-price strong{font-size:15px}}';
  document.head.append(style);
  const create=(tag,cl,text)=>{const el=document.createElement(tag);if(cl)el.className=cl;if(text!==undefined)el.textContent=text;return el;};
  const fragment=document.createDocumentFragment();
  fragment.append(create('h2','cf-title','Food Menu'));
  const sub=create('p','cf-title-ar','قائمة الطعام');
  sub.lang='ar';sub.dir='rtl';fragment.append(sub);
  for(const [cat,title,arTitle] of categories){
    const group=create('div','cf-group');
    const heading=create('h3','',title);
    const label=create('span','',arTitle);label.lang='ar';label.dir='rtl';
    heading.append(label);
    group.append(heading);
    const grid=create('div','cf-grid');
    for(const [kind,en,ar,price,meal,imageNames,fallback] of items.filter(item=>item[0]===cat)){
      const card=create('article','product-card cf-card');
      card.dataset.menuName=en;
      const image=create('img','product-image cf-img');
      image.alt=ar+' | '+en;image.loading='lazy';
      const orig=findImage(imageNames);
      const fromOld=orig&&(orig.getAttribute('src')||orig.getAttribute('data-src'));
      image.src=fromOld||fallback||'assets/category-foodmenu.webp';
      image.onerror=()=>{image.onerror=null;image.src=fallback||'assets/category-foodmenu.webp';};
      const name=create('h4','cf-name',en);
      const nameAr=create('span','', '('+ar+')');nameAr.lang='ar';nameAr.dir='rtl';name.append(nameAr);
      const prices=create('div','cf-prices');prices.dir='ltr';
      const line=(amount,desc)=>{
        const block=create('div','cf-price');
        block.append(create('strong','',amount),create('small','','JOD'));
        if(desc)block.append(create('em','',desc));
        return block;
      };
      prices.append(line(price,meal?'Sandwich':null));
      if(meal)prices.append(line(meal,'Meal'));
      card.append(image,name,prices);
      grid.append(card);
    }
    group.append(grid);fragment.append(group);
  }
  root.replaceChildren(fragment);
  root.classList.add('calma-food');
  root.dataset.calmaFoodUpdated='true';
  console.info('Calma: '+items.length+' approved food options added');
})();