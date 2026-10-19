/* CALMA food menu reactivated 2026-10-19: 12 approved items, previous photos reused. */
(() => {
  const categories = [
    [
        "meals",
        "Meals",
        "الوجبات"
    ],
    [
        "fries",
        "Fries",
        "البطاطا"
    ],
    [
        "nuggets",
        "Nuggets",
        "الناجتس"
    ],
    [
        "salads",
        "Salads",
        "السلطات"
    ]
];
  // [group, English name, Arabic name, JOD price, meal alternative, previous photo names, previous fallback photo]
  const items = [
    [
        "meals",
        "Beef Burger Meal",
        "وجبة برغر لحمة",
        "4.50",
        null,
        [
            "Classic Burger",
            "Classic Beef Burger",
            "Double Burger",
            "Cheese Burger"
        ]
    ],
    [
        "meals",
        "Chicken Burger Meal",
        "وجبة برغر دجاج",
        "4.50",
        null,
        [
            "Chicken Burger",
            "Crispy Chicken",
            "Classic Crispy Chicken Sandwich",
            "Chicken Toast"
        ]
    ],
    [
        "meals",
        "Chicken Tenders Meal",
        "وجبة تندر",
        "4.50",
        null,
        [
            "Chicken Tenders Plate",
            "Chicken Tenders",
            "Tenders"
        ],
        "https://images.pexels.com/photos/37228290/pexels-photo-37228290/free-photo-of-crispy-chicken-tenders-and-fries-with-sauces.jpeg?auto=compress&fit=crop&w=420&h=420"
    ],
    [
        "meals",
        "Zinger Meal",
        "وجبة زنجر",
        "4.50",
        null,
        [
            "Zinger",
            "Spicy Chicken",
            "Spicy Crispy Chicken Sandwich",
            "Crispy Chicken"
        ]
    ],
    [
        "fries",
        "French Fries",
        "بطاطا عادية",
        "2.00",
        null,
        [
            "French Fries",
            "Fries"
        ],
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=420&auto=format&fit=crop&q=75"
    ],
    [
        "fries",
        "Potato Wedges",
        "بطاطا ويجز",
        "2.25",
        null,
        [
            "Potato Wedges",
            "Wedges"
        ],
        "https://images.unsplash.com/photo-1773848948025-275cc700d34a?auto=format&fit=crop&w=420&q=75"
    ],
    [
        "fries",
        "Curly Fries",
        "بطاطا كيرلي",
        "2.50",
        null,
        [
            "Curly Fries",
            "Curly Potatoes",
            "Curly Wedges",
            "Curly"
        ],
        "assets/category-foodmenu.webp"
    ],
    [
        "nuggets",
        "Chicken Nuggets (6 Pieces)",
        "ناجتس دجاج 6 حبات",
        "2.25",
        null,
        [
            "Nuggets",
            "Chicken Nuggets"
        ],
        "https://images.unsplash.com/photo-1696265498747-efc4c0dd7b98?auto=format&fit=crop&w=420&q=75"
    ],
    [
        "nuggets",
        "Chicken Nuggets (9 Pieces)",
        "ناجتس دجاج 9 حبات",
        "3.25",
        null,
        [
            "Nuggets",
            "Chicken Nuggets"
        ],
        "https://images.unsplash.com/photo-1696265498747-efc4c0dd7b98?auto=format&fit=crop&w=420&q=75"
    ],
    [
        "salads",
        "Chicken Tenders Salad",
        "سلطة تندر",
        "4.00",
        null,
        [
            "Chicken Tenders Salad",
            "Chicken Salad"
        ],
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=420&auto=format&fit=crop&q=75"
    ],
    [
        "salads",
        "Caesar Salad",
        "سلطة سيزر",
        "3.00",
        null,
        [
            "Caesar Salad"
        ],
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=420&auto=format&fit=crop&q=75"
    ],
    [
        "salads",
        "Chicken Caesar Salad",
        "سلطة سيزر مع دجاج",
        "4.50",
        null,
        [
            "Chicken Caesar Salad"
        ],
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=420&auto=format&fit=crop&q=75"
    ]
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
  style.textContent="\n.calma-food {color:#3c3029;}\n.calma-food .cf-title {font:700 clamp(27px,4vw,34px)/1.3 Arial,sans-serif;color:#241d17;margin:18px 0 4px;}\n.calma-food .cf-title-ar {font-size:16px;color:#927361;margin:0 0 22px;text-align:right;}\n.calma-food .cf-group {margin-bottom:30px;}\n.calma-food .cf-group > h3 {font-size:21px;line-height:1.3;font-weight:700;color:#36281f;margin:14px 0 13px;}\n.calma-food .cf-group > h3 span {display:block;font-size:15px;line-height:1.6;font-weight:400;color:#8c6c57;margin-top:2px;text-align:right;}\n.calma-food .cf-grid {background:#fff;border:1px solid #eadbcf;border-radius:22px;overflow:hidden;padding:0 19px;}\n.calma-food .cf-card {display:grid;grid-template-columns:104px minmax(0,1fr) 156px;gap:17px;align-items:center;min-width:0;padding:19px 0;border-bottom:1px solid #ede0d7;}\n.calma-food .cf-card:last-child {border-bottom:0;}\n.calma-food .cf-img {display:block;width:104px;height:104px;border-radius:15px;object-fit:cover;background:#f6eee8;}\n.calma-food .cf-name {margin:0;min-width:0;text-align:left;font:700 16px/1.45 Arial,sans-serif;color:#241c16;overflow-wrap:break-word;}\n.calma-food .cf-name span {display:block;direction:rtl;text-align:left;font:400 15px/1.5 Tajawal,Arial,sans-serif;color:#926b50;margin-top:6px;}\n.calma-food .cf-prices {min-width:0;display:flex;flex-direction:column;gap:7px;direction:ltr;}\n.calma-food .cf-price {min-width:0;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 10px;border:1px solid #eee0d5;background:#fbf8f5;border-radius:10px;margin:0;box-sizing:border-box;}\n.calma-food .cf-price-label {display:block;font-size:11px;font-weight:500;line-height:1.25;color:#876954;white-space:normal;order:0;}\n.calma-food .cf-amount {display:flex;align-items:baseline;gap:4px;white-space:nowrap;order:1;}\n.calma-food .cf-amount strong {font:700 17px/1.2 Arial,sans-serif;color:#63452f;font-variant-numeric:tabular-nums;}\n.calma-food .cf-amount small {font:400 10px/1 Arial,sans-serif;color:#977663;}\n.calma-food .cf-price-only {justify-content:flex-end;background:transparent;border-color:transparent;padding-right:0;}\n@media(max-width:820px) {\n  .calma-food .cf-grid {padding:0 17px;}\n  .calma-food .cf-card {grid-template-columns:100px minmax(0,1fr);column-gap:16px;row-gap:10px;padding:17px 0;}\n  .calma-food .cf-img {width:100px;height:100px;grid-row:1 / span 2;align-self:start;}\n  .calma-food .cf-prices {grid-column:2;grid-row:2;flex-direction:row;flex-wrap:wrap;gap:8px;}\n  .calma-food .cf-price {flex:0 1 auto;min-width:104px;gap:7px;padding:7px 10px;}\n  .calma-food .cf-price-only {min-width:105px;justify-content:flex-start;padding-left:0;}\n}\n@media(max-width:480px) {\n  .calma-food .cf-grid {padding:0 12px;border-radius:17px;}\n  .calma-food .cf-card {grid-template-columns:78px minmax(0,1fr);column-gap:11px;row-gap:8px;padding:14px 0;}\n  .calma-food .cf-img {width:78px;height:78px;border-radius:11px;}\n  .calma-food .cf-name {font-size:14px;line-height:1.4;}\n  .calma-food .cf-name span {font-size:13px;margin-top:3px;}\n  .calma-food .cf-prices {gap:6px;}\n  .calma-food .cf-price {padding:6px 8px;min-width:90px;gap:5px;}\n  .calma-food .cf-price-label {font-size:10px;}\n  .calma-food .cf-amount strong {font-size:15px;}\n  .calma-food .cf-amount small {font-size:9px;}\n}";
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
      // Plate dishes must show food on plates, not the old branded takeaway boxes.
      image.src=(en==='Chicken Tenders Meal' && fallback) ? fallback : (fromOld||fallback||'assets/category-foodmenu.webp');
      image.onerror=()=>{image.onerror=null;image.src='assets/category-foodmenu.webp';};
      const name=create('h4','cf-name',en);
      const nameAr=create('span','', '('+ar+')');nameAr.lang='ar';nameAr.dir='rtl';name.append(nameAr);
      const prices=create('div','cf-prices');prices.dir='ltr';
      const line=(amount,desc)=>{
        const block=create('div','cf-price'+(desc?'':' cf-price-only'));
        if(desc){
          block.append(create('span','cf-price-label',desc==='Sandwich'?'Sandwich':'Meal'));
        }
        const amountBox=create('div','cf-amount');
        amountBox.append(create('strong','',amount),create('small','','JOD'));
        block.append(amountBox);
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