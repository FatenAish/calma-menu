/* Calma drinks menu approved list. Non-drink sections are preserved unchanged. */
(() => {
  const menu = [["hot","Espresso Single","إسبريسو سنجل"],["hot","Espresso Double","إسبريسو دبل"],["hot","Americano","أمريكانو"],["hot","American Coffee","قهوة أمريكية"],["hot","Flat White","فلات وايت"],["hot","Cortado","كورتادو"],["hot","Cappuccino","كابتشينو"],["hot","Latte","لاتيه"],["hot","Espresso Macchiato","إسبريسو ماكياتو"],["hot","Caramel Macchiato","كراميل ماكياتو"],["hot","Spanish Latte","سبانش لاتيه"],["hot","Dark Mocha","دارك موكا"],["hot","Vanilla Latte","فانيلا لاتيه"],["hot","Hazelnut Latte","هيزلنت لاتيه"],["hot","Caramel Latte","كراميل لاتيه"],["hot","Honey Latte","هوني لاتيه"],["hot","V60","قهوة V60"],["cold","Iced Americano","آيس أمريكانو"],["cold","Iced Latte","آيس لاتيه"],["cold","Iced Spanish Latte","آيس سبانش لاتيه"],["cold","Iced Caramel Macchiato","آيس كراميل ماكياتو"],["cold","Iced Dark Mocha","آيس دارك موكا"],["cold","Iced Vanilla Latte","آيس فانيلا لاتيه"],["cold","Iced Hazelnut Latte","آيس هيزلنت لاتيه"],["cold","Iced V60","آيس V60"],["cold","Iced Shaken Espresso","شيكن إسبريسو"],["cold","Affogato","أفوغاتو"],["frappes","Coffee Frappe","كوفي فرابيه"],["frappes","Caramel Frappe","كراميل فرابيه"],["frappes","Vanilla Frappe","فانيلا فرابيه"],["frappes","Mocha Frappe","موكا فرابيه"],["frappes","Chocolate Frappe","شوكولاتة فرابيه"],["frappes","Hazelnut Frappe","هيزلنت فرابيه"],["milkshakes","Vanilla Milkshake","فانيلا ميلك شيك"],["milkshakes","Chocolate Milkshake","شوكولاتة ميلك شيك"],["milkshakes","Strawberry Milkshake","فراولة ميلك شيك"],["milkshakes","Mango Milkshake","مانجا ميلك شيك"],["milkshakes","Caramel Milkshake","كراميل ميلك شيك"],["milkshakes","Banana Milkshake","موز ميلك شيك"],["milkshakes","Banana Chocolate Milkshake","موز شوكولاتة ميلك شيك"],["juices","Orange Juice","عصير برتقال"],["juices","Lemon Mint","ليمون نعنع"],["juices","Strawberry Juice","عصير فراولة"],["juices","Mango Juice","عصير مانجا"],["juices","Mango Strawberry","مانجا فراولة"],["juices","Banana Milk","موز بالحليب"],["juices","Strawberry Banana","فراولة موز"],["juices","Orange Mango","برتقال مانجا"],["juices","Kiwi Lemon Mint","كيوي ليمون نعنع"],["juices","Mango Smoothie","مانجا سموذي"],["juices","Strawberry Smoothie","فراولة سموذي"],["mojitos","Classic Mojito","موهيتو كلاسيك"],["mojitos","Passion Fruit Mojito","باشن فروت موهيتو"],["mojitos","Strawberry Mojito","فراولة موهيتو"],["mojitos","Blue Lagoon","بلو لاغون"],["mojitos","Mango Tango","مانجا تانجو"],["mojitos","Sunset","صن سيت"],["mojitos","Kiwi Mojito","كيوي موهيتو"],["mojitos","Strawberry Passion","فراولة باشن فروت"],["tea","Iced Hibiscus","كركديه بارد"],["tea","Lemon Iced Tea","آيس تي ليمون"],["tea","Classic Hot Chocolate","هوت تشوكليت"],["tea","Dark Hot Chocolate","دارك هوت تشوكليت"],["tea","Caramel Hot Chocolate","كراميل هوت تشوكليت"],["tea","Hazelnut Hot Chocolate","هيزلنت هوت تشوكليت"],["tea","Classic Nescafe","نسكافيه"],["tea","Nescafe with Milk","نسكافيه بالحليب"],["tea","Iced Nescafe","آيس نسكافيه"],["tea","Black Tea","شاي أحمر"],["tea","Green Tea","شاي أخضر"],["tea","Cardamom Tea","شاي هيل"],["tea","Milk Tea","شاي بالحليب"],["tea","Chamomile","بابونج"],["tea","Anise","يانسون"],["tea","Sage","ميرمية"],["tea","Zhourat","زهورات"],["tea","Hot Hibiscus","كركديه ساخن"],["tea","Ginger Tea","زنجبيل"],["tea","Honey Lemon","زنجبيل وليمون"],["others","Barbican","مشروب شعير (نكهات)"],["others","Matrix","ماتريكس"],["others","Energy Drink","مشروب طاقة"],["others","Water","مياه"]];
  const labels = [["hot","Hot Coffee","القهوة الساخنة"],["cold","Cold Coffee","القهوة الباردة"],["frappes","Frappes","فرابيه"],["milkshakes","Milkshakes","ميلك شيك"],["juices","Juices & Smoothies","عصائر وسموذي"],["mojitos","Mojitos","موهيتو"],["tea","Chocolate, Tea & Herbs","شوكولاتة وشاي وأعشاب"],["others","Other Drinks","مشروبات أخرى"]];
  const matching = {"American Coffee":"American Filter Coffee","Latte":"Coffee Latte","Caramel Macchiato":"Hot Caramel Macchiato","V60":"Hot V60","Iced Shaken Espresso":"Iced Shaking","Mango Strawberry":"Mango &amp; Strawberry","Banana Milk":"Banana with Milk","Lemon Mint":"Lemon &amp; Mint","Blue Lagoon":"Blue Lagoon Mojito","Mango Tango":"Mango Tango Mojito","Sunset":"Sunset Mojito","Classic Hot Chocolate":"Hot Chocolate","Zhourat":"Herbal Flower Tea","Hot Hibiscus":"Hibiscus"};
  const photoFallback = {"Cortado":"Flat White","Vanilla Latte":"Coffee Latte","Hazelnut Latte":"Coffee Latte","Caramel Latte":"Hot Caramel Macchiato","Honey Latte":"Spanish Latte","Iced Vanilla Latte":"Iced Latte","Iced Hazelnut Latte":"Iced Latte","Affogato":"Espresso Double","Coffee Frappe":"Caramel Frappe","Mocha Frappe":"Black Forest Frappe","Chocolate Frappe":"Black Forest Frappe","Hazelnut Frappe":"Vanilla Frappe","Mango Milkshake":"Strawberry Milkshake","Caramel Milkshake":"Vanilla Milkshake","Banana Milkshake":"Vanilla Milkshake","Banana Chocolate Milkshake":"Chocolate Milkshake","Strawberry Banana":"Strawberry Juice","Orange Mango":"Mango Juice","Kiwi Lemon Mint":"Kiwi &amp; Lemon","Mango Smoothie":"Mango Juice","Strawberry Smoothie":"Strawberry Juice","Classic Mojito":"Sunset Mojito","Passion Fruit Mojito":"Berry Breeze Mojito","Strawberry Mojito":"Berry Breeze Mojito","Kiwi Mojito":"Berry Breeze Mojito","Strawberry Passion":"Berry Breeze Mojito","Iced Hibiscus":"Iced Tea","Lemon Iced Tea":"Iced Tea","Dark Hot Chocolate":"Hot Chocolate","Caramel Hot Chocolate":"Hot Chocolate","Hazelnut Hot Chocolate":"Hot Chocolate","Classic Nescafe":"Nescafe with Milk","Iced Nescafe":"Iced Latte","Black Tea":"Tea Cup","Green Tea":"Tea Cup","Cardamom Tea":"Tea Cup","Milk Tea":"Karak Tea","Chamomile":"Herbs","Anise":"Herbs","Sage":"Herbs","Ginger Tea":"Herbs","Honey Lemon":"Herbs"};
  const section = document.getElementById('hotDrinks');
  if (!section) return;
  const originals = new Map(
    [...section.querySelectorAll('article.product-card')].map(card => [card.getAttribute('data-menu-name'), card])
  );
  // Validate images before replacing any visible content.
  for (const [tab, name] of menu) {
    const photoKey = matching[name] || name;
    if (!originals.has(photoKey) && !originals.has(photoFallback[name])) {
      console.warn('Calma: image missing for', name);
    }
    if (!document.getElementById(tab + 'Products')) {
      console.error('Calma: missing product section', tab);
      return;
    }
  }
  const createCard = (name, ar) => {
    const source = originals.get(matching[name] || name);
    const photo = source || originals.get(photoFallback[name]);
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.menuName = name;
    const media = document.createElement('div');
    media.className = 'product-image-wrap';
    if (photo?.querySelector('img')) {
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
    const priceNode = source?.querySelector('.price');
    if (priceNode) {
      cost.append(priceNode.cloneNode(true));
    } else {
      const noPrice = document.createElement('span');
      noPrice.className = 'price';
      noPrice.setAttribute('data-price', '');
      noPrice.setAttribute('aria-label', 'Price to be announced');
      noPrice.textContent = '—';
      cost.append(noPrice);
    }
    card.append(media, copy, cost);
    return card;
  };
  const groups = new Map(labels.map(([id]) => [id, document.getElementById(id + 'Products')]));
  for (const [tab, grid] of groups) {
    const fragment = document.createDocumentFragment();
    for (const [category, name, ar] of menu) {
      if (category === tab) fragment.append(createCard(name, ar));
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
  if ([...section.querySelectorAll('article.product-card')].length !== 83) {
    console.error('Calma drink list count did not match the approved file');
  }
})();
