/* Calma drinks menu approved list. Non-drink sections are preserved unchanged. */
(() => {
  const menu = [["hot","Espresso","إسبريسو"],["hot","Americano","أمريكانو"],["hot","American Coffee","قهوة أمريكية"],["hot","Flat White","فلات وايت"],["hot","Cortado","كورتادو"],["hot","Cappuccino","كابتشينو"],["hot","Latte","لاتيه"],["hot","Espresso Macchiato","إسبريسو ماكياتو"],["hot","Caramel Macchiato","كراميل ماكياتو"],["hot","Spanish Latte","سبانش لاتيه"],["hot","Mocha","موكا"],["hot","Vanilla Latte","فانيلا لاتيه"],["hot","Hazelnut Latte","هيزلنت لاتيه"],["hot","Caramel Latte","كراميل لاتيه"],["hot","V60","قهوة V60 (إثيوبي، كولومبي، برازيلي)"],["cold","Iced Americano","آيس أمريكانو"],["cold","Iced Spanish Latte","آيس سبانش لاتيه"],["cold","Iced Caramel Macchiato","آيس كراميل ماكياتو"],["cold","Iced Dark Mocha","آيس دارك موكا"],["cold","Iced Vanilla Latte","آيس فانيلا لاتيه"],["cold","Iced Hazelnut Latte","آيس هيزلنت لاتيه"],["cold","Iced V60","آيس V60 (إثيوبي، كولومبي، برازيلي)"],["frappes","Coffee Frappe","كوفي فرابيه"],["frappes","Caramel Frappe","كراميل فرابيه"],["frappes","Vanilla Frappe","فانيلا فرابيه"],["frappes","Mocha Frappe","موكا فرابيه"],["frappes","Chocolate Frappe","شوكولاتة فرابيه"],["frappes","Hazelnut Frappe","هيزلنت فرابيه"],["milkshakes","Vanilla Milkshake","فانيلا ميلك شيك"],["milkshakes","Chocolate Milkshake","شوكولاتة ميلك شيك"],["milkshakes","Strawberry Milkshake","فراولة ميلك شيك"],["milkshakes","Mango Milkshake","مانجا ميلك شيك"],["milkshakes","Caramel Milkshake","كراميل ميلك شيك"],["milkshakes","Banana Milkshake","موز ميلك شيك"],["milkshakes","Banana Chocolate Milkshake","موز شوكولاتة ميلك شيك"],["juices","Orange Juice","عصير برتقال"],["juices","Lemon Mint","ليمون ونعنع"],["juices","Strawberry Juice","عصير فراولة"],["juices","Mango Juice","عصير مانجا"],["juices","Mango Strawberry","مانجا وفراولة"],["juices","Banana Milk","موز بالحليب"],["juices","Strawberry Banana","فراولة وموز"],["juices","Orange Mango","برتقال ومانجا"],["juices","Avocado Juice with Honey & Nuts","عصير أفوكادو بالعسل والمكسرات"],["juices","Kiwi Lemon Mint","كيوي وليمون ونعنع"],["juices","Mango Smoothie","مانجا سموذي"],["juices","Strawberry Smoothie","فراولة سموذي"],["mojitos","Classic Mojito","موهيتو كلاسيك"],["mojitos","Passion Fruit Mojito","باشن فروت موهيتو"],["mojitos","Strawberry Mojito","فراولة موهيتو"],["mojitos","Blue Lagoon","بلو لاغون"],["mojitos","Mango Tango","مانجا تانجو"],["mojitos","Sunset","صن سيت"],["mojitos","Kiwi Mojito","كيوي موهيتو"],["mojitos","Strawberry Passion","فراولة باشن فروت"],["tea","Iced Hibiscus","كركديه بارد"],["tea","Lemon Iced Tea","آيس تي ليمون"],["tea","Classic Hot Chocolate","هوت تشوكليت"],["tea","Dark Hot Chocolate","دارك هوت تشوكليت"],["tea","Caramel Hot Chocolate","كراميل هوت تشوكليت"],["tea","Hazelnut Hot Chocolate","هيزلنت هوت تشوكليت"],["tea","Classic Nescafe","نسكافيه"],["tea","Nescafe with Milk","نسكافيه بالحليب"],["tea","Iced Nescafe","آيس نسكافيه"],["tea","Black Tea","شاي أحمر"],["tea","Green Tea","شاي أخضر"],["tea","Cardamom Tea","شاي هيل"],["tea","Karak Tea","شاي كرك"],["tea","Chamomile","بابونج"],["tea","Anise","يانسون"],["tea","Sage","ميرمية"],["tea","Zhourat","زهورات"],["tea","Hot Hibiscus","كركديه ساخن"],["tea","Ginger Tea","زنجبيل"],["tea","Honey Lemon","زنجبيل وليمون"],["others","Barbican","مشروب شعير (نكهات)"],["others","Matrix","ماتريكس"],["others","Energy Drink","مشروب طاقة"],["others","Water","مياه"]];
  const labels = [["hot","Hot Coffee","القهوة الساخنة"],["cold","Cold Coffee","القهوة الباردة"],["frappes","Frappes","فرابيه"],["milkshakes","Milkshakes","ميلك شيك"],["juices","Juices & Smoothies","عصائر وسموذي"],["mojitos","Mojitos","موهيتو"],["tea","Chocolate, Tea & Herbs","شوكولاتة وشاي وأعشاب"],["others","Other Drinks","مشروبات أخرى"]];
  const matching = {"Espresso":"Espresso Single","Mocha":"Dark Mocha","American Coffee":"American Filter Coffee","Latte":"Coffee Latte","Caramel Macchiato":"Hot Caramel Macchiato","V60":"Hot V60","Mango Strawberry":"Mango & Strawberry","Banana Milk":"Banana with Milk","Lemon Mint":"Lemon & Mint","Blue Lagoon":"Blue Lagoon Mojito","Mango Tango":"Mango Tango Mojito","Sunset":"Sunset Mojito","Classic Hot Chocolate":"Hot Chocolate","Zhourat":"Herbal Flower Tea","Hot Hibiscus":"Hibiscus"};
  const photoFallback = {"Cortado":"Flat White","Vanilla Latte":"Coffee Latte","Hazelnut Latte":"Coffee Latte","Caramel Latte":"Hot Caramel Macchiato","Iced Vanilla Latte":"Iced Latte","Iced Hazelnut Latte":"Iced Latte","Coffee Frappe":"Caramel Frappe","Mocha Frappe":"Black Forest Frappe","Chocolate Frappe":"Black Forest Frappe","Hazelnut Frappe":"Vanilla Frappe","Mango Milkshake":"Strawberry Milkshake","Caramel Milkshake":"Vanilla Milkshake","Banana Milkshake":"Vanilla Milkshake","Banana Chocolate Milkshake":"Chocolate Milkshake","Strawberry Banana":"Strawberry Juice","Orange Mango":"Mango Juice","Kiwi Lemon Mint":"Kiwi & Lemon","Mango Smoothie":"Mango Juice","Strawberry Smoothie":"Strawberry Juice","Classic Mojito":"Sunset Mojito","Passion Fruit Mojito":"Berry Breeze Mojito","Strawberry Mojito":"Berry Breeze Mojito","Kiwi Mojito":"Berry Breeze Mojito","Strawberry Passion":"Berry Breeze Mojito","Iced Hibiscus":"Iced Tea","Lemon Iced Tea":"Iced Tea","Dark Hot Chocolate":"Hot Chocolate","Caramel Hot Chocolate":"Hot Chocolate","Hazelnut Hot Chocolate":"Hot Chocolate","Classic Nescafe":"Nescafe with Milk","Iced Nescafe":"Iced Latte","Black Tea":"Tea Cup","Green Tea":"Tea Cup","Cardamom Tea":"Tea Cup","Milk Tea":"Karak Tea","Chamomile":"Herbs","Anise":"Herbs","Sage":"Herbs","Ginger Tea":"Herbs","Honey Lemon":"Herbs"};
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
    ['Avocado Juice with Honey & Nuts','3.50'],
    ['Classic Hot Chocolate','2.00'],
    ['Dark Hot Chocolate','2.00'],
    ['Caramel Hot Chocolate','2.00'],
    ['Hazelnut Hot Chocolate','2.00'],
    ['Lemon Iced Tea','1.75'],
    ['Barbican','1.75'],
    ['Matrix','1.25'],
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
    ['Honey Lemon','1.50'],
    ['Water','0.50']
  ]);
  const approvedPrice = (name, category) => {
    if (fixedPrices.has(name)) return fixedPrices.get(name);
    if (category === 'frappes') return '3.50';
    if (category === 'milkshakes' || category === 'juices') return '3.00';
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
  if ([...section.querySelectorAll('article.product-card')].length !== 79) {
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
