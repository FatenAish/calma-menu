/* Calma drinks menu approved list. Non-drink sections are preserved unchanged. */
(() => {
  const menu = [["hot","Espresso","إسبريسو"],["hot","Americano","أمريكانو"],["hot","American Coffee","قهوة أمريكية"],["hot","Flat White","فلات وايت"],["hot","Cortado","كورتادو"],["hot","Cappuccino","كابتشينو"],["hot","Latte","لاتيه"],["hot","Espresso Macchiato","إسبريسو ماكياتو"],["hot","Caramel Macchiato","كراميل ماكياتو"],["hot","Spanish Latte","سبانش لاتيه"],["hot","Mocha","موكا"],["hot","Vanilla Latte","فانيلا لاتيه"],["hot","Hazelnut Latte","هيزلنت لاتيه"],["hot","Caramel Latte","كراميل لاتيه"],["hot","V60","قهوة V60 (إثيوبي، كولومبي، برازيلي)"],["cold","Iced Americano","آيس أمريكانو"],["cold","Iced Spanish Latte","آيس سبانش لاتيه"],["cold","Iced Caramel Macchiato","آيس كراميل ماكياتو"],["cold","Iced Dark Mocha","آيس دارك موكا"],["cold","Iced Vanilla Latte","آيس فانيلا لاتيه"],["cold","Iced Hazelnut Latte","آيس هيزلنت لاتيه"],["cold","Iced V60","آيس V60 (إثيوبي، كولومبي، برازيلي)"],["frappes","Coffee Frappe","كوفي فرابيه"],["frappes","Caramel Frappe","كراميل فرابيه"],["frappes","Vanilla Frappe","فانيلا فرابيه"],["frappes","Mocha Frappe","موكا فرابيه"],["frappes","Chocolate Frappe","شوكولاتة فرابيه"],["frappes","Hazelnut Frappe","هيزلنت فرابيه"],["milkshakes","Vanilla Milkshake","فانيلا ميلك شيك"],["milkshakes","Chocolate Milkshake","شوكولاتة ميلك شيك"],["milkshakes","Strawberry Milkshake","فراولة ميلك شيك"],["milkshakes","Mango Milkshake","مانجا ميلك شيك"],["milkshakes","Caramel Milkshake","كراميل ميلك شيك"],["milkshakes","Banana Milkshake","موز ميلك شيك"],["milkshakes","Banana Chocolate Milkshake","موز شوكولاتة ميلك شيك"],["juices","Orange Juice","عصير برتقال"],["juices","Lemon Mint","ليمون ونعنع"],["juices","Strawberry Juice","عصير فراولة"],["juices","Mango Juice","عصير مانجا"],["juices","Mango Strawberry","مانجا وفراولة"],["juices","Banana Milk","موز بالحليب"],["juices","Strawberry Banana","فراولة وموز"],["juices","Orange Mango","برتقال ومانجا"],["juices","Avocado Juice with Honey & Nuts","عصير أفوكادو بالعسل والمكسرات"],["juices","Kiwi Lemon Mint","كيوي وليمون ونعنع"],["juices","Mango Smoothie","مانجا سموذي"],["juices","Strawberry Smoothie","فراولة سموذي"],["mojitos","Classic Mojito","موهيتو كلاسيك"],["mojitos","Passion Fruit Mojito","باشن فروت موهيتو"],["mojitos","Strawberry Mojito","فراولة موهيتو"],["mojitos","Blue Lagoon","بلو لاغون"],["mojitos","Mango Tango","مانجا تانجو"],["mojitos","Sunset","صن سيت"],["mojitos","Kiwi Mojito","كيوي موهيتو"],["mojitos","Strawberry Passion","فراولة باشن فروت"],["tea","Iced Hibiscus","كركديه بارد"],["others","Iced Tea","شاي مثلج"],["tea","Hot Chocolate","هوت تشوكليت"],["tea","Nescafe","نسكافيه"],["tea","Black Tea","شاي أحمر"],["tea","Green Tea","شاي أخضر"],["tea","Cardamom Tea","شاي هيل"],["tea","Karak Tea","شاي كرك"],["tea","Chamomile","بابونج"],["tea","Anise","يانسون"],["tea","Sage","ميرمية"],["tea","Zhourat","زهورات"],["tea","Hot Hibiscus","كركديه ساخن"],["tea","Ginger Tea","زنجبيل"],["tea","Honey Lemon","زنجبيل وليمون"],["others","Barbican","مشروب شعير (نكهات)"],["others","Matrix","ماتريكس"],["others","Energy Drink","مشروب طاقة"],["others","Water","مياه"]];
  const labels = [["hot","Hot Coffee","القهوة الساخنة"],["cold","Cold Coffee","القهوة الباردة"],["frappes","Frappes","فرابيه"],["milkshakes","Milkshakes","ميلك شيك"],["juices","Juices & Smoothies","عصائر وسموذي"],["mojitos","Mojitos","موهيتو"],["tea","Chocolate, Tea & Herbs","شوكولاتة وشاي وأعشاب"],["others","Other Drinks","مشروبات أخرى"]];
  const matching = {"Espresso":"Espresso Single","Mocha":"Dark Mocha","American Coffee":"American Filter Coffee","Latte":"Coffee Latte","Caramel Macchiato":"Hot Caramel Macchiato","V60":"Hot V60","Mango Strawberry":"Mango & Strawberry","Banana Milk":"Banana with Milk","Lemon Mint":"Lemon & Mint","Blue Lagoon":"Blue Lagoon Mojito","Mango Tango":"Mango Tango Mojito","Sunset":"Sunset Mojito","Nescafe":"Nescafe with Milk","Zhourat":"Herbal Flower Tea","Hot Hibiscus":"Hibiscus"};
  const photoFallback = {"Cortado":"Flat White","Vanilla Latte":"Coffee Latte","Hazelnut Latte":"Coffee Latte","Caramel Latte":"Hot Caramel Macchiato","Iced Vanilla Latte":"Iced Latte","Iced Hazelnut Latte":"Iced Latte","Coffee Frappe":"Caramel Frappe","Mocha Frappe":"Black Forest Frappe","Chocolate Frappe":"Black Forest Frappe","Hazelnut Frappe":"Vanilla Frappe","Mango Milkshake":"Strawberry Milkshake","Caramel Milkshake":"Vanilla Milkshake","Banana Milkshake":"Vanilla Milkshake","Banana Chocolate Milkshake":"Chocolate Milkshake","Strawberry Banana":"Strawberry Juice","Orange Mango":"Mango Juice","Kiwi Lemon Mint":"Kiwi & Lemon","Mango Smoothie":"Mango Juice","Strawberry Smoothie":"Strawberry Juice","Classic Mojito":"Sunset Mojito","Passion Fruit Mojito":"Berry Breeze Mojito","Strawberry Mojito":"Berry Breeze Mojito","Kiwi Mojito":"Berry Breeze Mojito","Strawberry Passion":"Berry Breeze Mojito","Iced Hibiscus":"Iced Tea","Black Tea":"Tea Cup","Green Tea":"Tea Cup","Cardamom Tea":"Tea Cup","Milk Tea":"Karak Tea","Chamomile":"Herbs","Anise":"Herbs","Sage":"Herbs","Ginger Tea":"Herbs","Honey Lemon":"Herbs"};
  // Prices in Jordanian dinars. Categories with no approved new pricing retain
  // their existing prices; explicit items override their category defaults.
  const fixedPrices = new Map([
    ['Americano','2.00'],
    ['American Coffee','2.00'],
    ['Espresso','1.75'],
    ['Cappuccino','2.25'],
    ['Latte','2.75'],
    ['Mocha','3.00'],
    ['Cortado','2.25'],
    ['Caramel Macchiato','2.75'],
    ['Vanilla Latte','3.00'],
    ['Hazelnut Latte','3.00'],
    ['Caramel Latte','3.00'],
    ['V60','3.50'],
    ['Iced V60','3.75'],
    ['Iced Americano','2.25'],
    ['Iced Spanish Latte','3.25'],
    ['Iced Caramel Macchiato','3.50'],
    ['Iced Dark Mocha','3.25'],
    ['Iced Vanilla Latte','3.25'],
    ['Iced Hazelnut Latte','3.25'],
    ['Iced American Coffee','2.50'],
    ['Avocado Juice with Honey & Nuts','4.00'],
    ['Hot Chocolate','2.75'],
    ['Nescafe','2.50'],
    ['Iced Tea','1.75'],
    ['Barbican','2.00'],
    ['Matrix','1.50'],
    ['Energy Drink','2.00'],
    ['Black Tea','1.50'],
    ['Green Tea','1.50'],
    ['Cardamom Tea','1.50'],
    ['Karak Tea','2.00'],
    ['Milk Tea','2.00'],
    ['Chamomile','1.50'],
    ['Anise','1.50'],
    ['Sage','1.50'],
    ['Zhourat','1.50'],
    ['Hot Hibiscus','1.50'],
    ['Iced Hibiscus','1.50'],
    ['Ginger Tea','1.50'],
    ['Honey Lemon','2.00'],
    ['Water','0.50']
  ]);
  const regularTeaSizes = new Set(['Black Tea','Green Tea','Cardamom Tea']);
  // Served by cup or pot; Karak tea and herbs keep their own prices.
  const teaSizes = [['كاسة','1.50'],['إبريق','3.00']];
  const teaStyle = document.createElement('style');
  teaStyle.textContent = "\n/* Tea rows get their own three-column layout so the two prices never leave\n   the product card, instead of offsetting the original price with left/right. */\n.product-card.calma-tea-card {\n  display: grid !important;\n  grid-template-columns: 108px minmax(0,1fr) 126px !important;\n  column-gap: 16px !important;\n  align-items: center !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n  min-width: 0 !important;\n  overflow: visible !important;\n}\n.product-card.calma-tea-card .product-image-wrap {\n  grid-column: 1 !important;\n  grid-row: 1 !important;\n  min-width: 0 !important;\n  max-width: 108px !important;\n  margin: 0 !important;\n}\n.product-card.calma-tea-card .product-copy {\n  grid-column: 2 !important;\n  grid-row: 1 !important;\n  min-width: 0 !important;\n  margin: 0 !important;\n  overflow-wrap: break-word;\n}\n.product-card.calma-tea-card .product-price.calma-tea-prices {\n  grid-column: 3 !important;\n  grid-row: 1 !important;\n  position: static !important;\n  inset: auto !important;\n  left: auto !important;\n  right: auto !important;\n  transform: none !important;\n  float: none !important;\n  display: flex !important;\n  flex-direction: column !important;\n  justify-self: stretch !important;\n  align-items: stretch !important;\n  gap: 8px !important;\n  width: 100% !important;\n  min-width: 0 !important;\n  max-width: none !important;\n  box-sizing: border-box !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  text-align: right !important;\n  overflow: visible !important;\n}\n.product-card.calma-tea-card .calma-tea-option {\n  display: grid !important;\n  grid-template-columns: minmax(0,1fr) 50px !important;\n  align-items: center !important;\n  column-gap: 6px !important;\n  width: 100% !important;\n  min-width: 0 !important;\n  box-sizing: border-box !important;\n  white-space: nowrap !important;\n}\n.product-card.calma-tea-card .calma-tea-size {\n  font-size: 13px !important;\n  color: #866751 !important;\n  text-align: right !important;\n  direction: rtl !important;\n}\n.product-card.calma-tea-card .calma-tea-option .price {\n  display: block !important;\n  position: static !important;\n  width: 50px !important;\n  min-width: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: right !important;\n  color: #60432e !important;\n  font-size: 18px !important;\n  font-weight: 700 !important;\n  line-height: 1.35 !important;\n  font-variant-numeric: tabular-nums !important;\n  white-space: nowrap !important;\n}\n@media (max-width: 620px) {\n  .product-card.calma-tea-card {\n    grid-template-columns: 76px minmax(0,1fr) 100px !important;\n    column-gap: 9px !important;\n  }\n  .product-card.calma-tea-card .product-image-wrap {max-width:76px !important;}\n  .product-card.calma-tea-card .calma-tea-option {\n    grid-template-columns: minmax(0,1fr) 42px !important;\n    column-gap: 3px !important;\n  }\n  .product-card.calma-tea-card .calma-tea-option .price {\n    width: 42px !important;\n    font-size: 16px !important;\n  }\n  .product-card.calma-tea-card .calma-tea-size {font-size: 12px !important;}\n}\n@media (max-width: 365px) {\n  .product-card.calma-tea-card {\n    grid-template-columns: 62px minmax(0,1fr) 95px !important;\n    column-gap: 7px !important;\n  }\n  .product-card.calma-tea-card .product-image-wrap {max-width:62px !important;}\n}";
  document.head.append(teaStyle);
  const approvedPrice = (name, category) => {
    if (fixedPrices.has(name)) return fixedPrices.get(name);
    if (category === 'frappes') return '3.50';
    if (category === 'mojitos') return '3.00';
    if (category === 'milkshakes') return '3.50';
    if (category === 'juices') return '3.00';
    if (category === 'hot') return '2.50';
    if (category === 'cold') return '3.00';
    if (category === 'tea' && (name.includes('Nescafe') || name.includes('Hot Chocolate'))) return name.includes('Hot Chocolate') ? '2.00' : name.startsWith('Iced') ? '3.00' : '2.50';
    return null;
  };
  const section = document.getElementById('hotDrinks');
  if (!section) return;
  const originals = new Map(
    [...section.querySelectorAll('article.product-card')].map(card => [card.getAttribute('data-menu-name'), card])
  );
  // Validate images before replacing any visible content.
  for (const [tab, name] of menu) {
    const photoKey = matching[name] || name;
    if (name !== 'Avocado Juice with Honey & Nuts' && !originals.has(photoKey) && !originals.has(photoFallback[name])) {
      console.warn('Calma: image missing for', name);
    }
    if (!document.getElementById(tab + 'Products')) {
      console.error('Calma: missing product section', tab);
      return;
    }
  }
  const createCard = (name, ar, category) => {
    const source = originals.get(matching[name] || name);
    const photo = source || originals.get(photoFallback[name]);
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.menuName = name;
    const media = document.createElement('div');
    media.className = 'product-image-wrap';
    if (name === 'Avocado Juice with Honey & Nuts') {
      const image = document.createElement('img');
      image.className = 'product-image';
      image.src = 'assets/avocado-honey-nuts.webp';
      image.alt = ar + ' | ' + name;
      image.loading = 'lazy';
      media.append(image);
    } else if (photo?.querySelector('img')) {
      const image = photo.querySelector('img').cloneNode(true);
      image.alt = ar + ' | ' + name;
      image.loading = 'lazy';
      media.append(image);
    } else {
      const image = document.createElement('img');
      image.className = 'product-image';
      image.src = 'assets/category-hotdrinks.webp';
      image.alt = ar + ' | ' + name;
      image.loading = 'lazy';
      media.append(image);
    }
    const copy = document.createElement('div');
    copy.className = 'product-copy';
    const h3 = document.createElement('h3');
    h3.append(document.createTextNode(name));
    const bdi = document.createElement('bdi');
    bdi.className = 'product-name-ar';
    bdi.lang = 'ar';
    bdi.dir = 'rtl';
    bdi.textContent = '(' + ar + ')';
    h3.append(bdi);
    copy.append(h3);
    const cost = document.createElement('div');
    cost.className = 'product-price';
    cost.dir = 'ltr';
    if (regularTeaSizes.has(name)) {
      card.classList.add('calma-tea-card');
      cost.classList.add('calma-tea-prices');
      for (const [size, amount] of teaSizes) {
        const option = document.createElement('div');
        option.className = 'calma-tea-option';
        const label = document.createElement('span');
        label.className = 'calma-tea-size';
        label.lang = 'ar';
        label.dir = 'rtl';
        label.textContent = size;
        const price = document.createElement('span');
        price.className = 'price';
        price.textContent = amount;
        price.setAttribute('data-price', amount);
        price.setAttribute('aria-label', size + ' ' + amount + ' JOD');
        option.append(label, price);
        cost.append(option);
      }
    } else {
      const approved = approvedPrice(name, category);
      const sourcePrice = source?.querySelector('.price');
      const priceNode = sourcePrice?.cloneNode(true) || document.createElement('span');
      priceNode.classList.add('price');
      if (approved !== null) {
        priceNode.textContent = approved;
        priceNode.setAttribute('data-price', approved);
        priceNode.setAttribute('aria-label', approved + ' JOD');
      } else if (!sourcePrice) {
        priceNode.setAttribute('data-price', '');
        priceNode.setAttribute('aria-label', 'Price to be announced');
        priceNode.textContent = '—';
      }
      cost.append(priceNode);
    }
    card.append(media, copy, cost);
    return card;
  };
  const groups = new Map(labels.map(([id]) => [id, document.getElementById(id + 'Products')]));
  for (const [tab, grid] of groups) {
    const fragment = document.createDocumentFragment();
    for (const [category, name, ar] of menu) {
      if (category === tab) fragment.append(createCard(name, ar, category));
    }
    grid.replaceChildren(fragment);
  }
  const tabsContainer = document.getElementById('drinkTabs');
  for (const [id, english, arabic] of labels) {
    const tab = tabsContainer?.querySelector('[data-tab="' + id + '"]');
    if (!tab) continue;
    tab.replaceChildren(document.createTextNode(english));
    const span = document.createElement('span');
    span.className = 'tab-name-ar';
    span.lang = 'ar';
    span.dir = 'rtl';
    span.textContent = arabic;
    tab.append(span);
    tabsContainer.append(tab);
  }
  // This beverage category does not appear in the approved spreadsheet.
  tabsContainer?.querySelector('[data-tab="matcha"]')?.remove();
  document.getElementById('matchaProducts')?.remove();
  if ([...section.querySelectorAll('article.product-card')].length !== 74) {
    console.error('Calma drink list count did not match the approved file');
  }

  // Snacks: keep popcorn only, priced at exactly 1.00 JOD.
  const snackItems = new Map(
    [...document.querySelectorAll('article.product-card[data-menu-name]')]
      .filter(card => ['Popcorn', 'Mixed Nuts', 'Chips', 'Corn'].includes(card.dataset.menuName))
      .map(card => [card.dataset.menuName, card])
  );
  const popcorn = snackItems.get('Popcorn');
  if (popcorn) {
    const price = popcorn.querySelector('.price');
    if (price) {
      price.textContent = '1.00';
      price.setAttribute('data-price', '1.00');
      price.setAttribute('aria-label', '1.00 JOD');
    }
    for (const extra of ['Mixed Nuts', 'Chips', 'Corn']) {
      snackItems.get(extra)?.remove();
    }
  } else {
    console.warn('Calma: could not find popcorn in Snacks');
  }
})();
