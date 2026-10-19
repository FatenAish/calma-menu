/* CALMA: temporarily hide desserts, preserving their original photos and items. */
(() => {
  const hide = element => {
    if (!element || element === document.body || element === document.documentElement) return;
    element.hidden = true;
    element.setAttribute('aria-hidden', 'true');
    element.style.setProperty('display', 'none', 'important');
  };
  const normalize = text => (text || '').replace(/\s+/g, ' ').trim();
  const isDessert = text => /(?:\bdesserts?\b|\bsweets\b|الحلويات|حلويات)/i.test(text || '');
  const sectionIds = ['dessertsMenu','dessertMenu','dessertsSection','dessertSection','desserts-menu','dessert-menu','desserts','dessert'];
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) hide(el.closest('section') || el);
  }
  for (const el of document.querySelectorAll('section,[data-menu-category],[data-category]')) {
    if (isDessert([el.id, el.dataset.menuCategory, el.dataset.category].join(' '))) hide(el);
  }
  for (const heading of document.querySelectorAll('section h1,section h2,section h3,section h4')) {
    const title = normalize(heading.textContent);
    if (title.length > 80 || !isDessert(title)) continue;
    const section = heading.closest('section');
    if (!section) continue;
    const otherCategory = [...section.querySelectorAll('h1,h2,h3,h4')].some(h => h !== heading &&
      /^(?:Food Menu|Beverages|Drinks|Shisha|Main Menu|المشروبات|الأراجيل|الطعام)$/i.test(normalize(h.textContent)));
    if (!otherCategory) hide(section);
  }

  // Hide the dessert category tile from main navigation, without hiding the other tiles.
  const containers = [...document.querySelectorAll('nav,div,section,ul')].filter(el => {
    const children = [...el.children];
    if (children.length < 2 || children.length > 12) return false;
    const text = children.map(c => normalize(c.textContent));
    return text.some(isDessert) && text.some(t => /\b(?:FOOD|SHISHA|BEVERAGES)\b/i.test(t)) && text.every(t => t.length < 240);
  }).sort((a,b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length);
  let hiddenTile = false;
  for (const container of containers) {
    for (const child of container.children) {
      const title = normalize(child.textContent);
      if (title.length < 140 && isDessert(title)) {
        hide(child);
        hiddenTile = true;
      }
    }
    if (hiddenTile) break;
  }
  if (!hiddenTile) {
    for (const link of document.querySelectorAll('a,button,[role="button"]')) {
      const title = normalize(link.textContent);
      if (title.length < 140 && isDessert(title)) hide(link);
    }
  }
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    if (isDessert((link.getAttribute('href') || '').slice(1))) hide(link);
  }
  const style = document.createElement('style');
  style.textContent = [
    '#dessertsMenu','#dessertMenu','#dessertsSection','#dessertSection',
    '#desserts-menu','#dessert-menu','#desserts','#dessert',
    '[data-menu-category="desserts"]','[data-category="desserts"]'
  ].join(',') + '{display:none!important}';
  document.head.append(style);
  console.info('CALMA: desserts hidden temporarily; original content retained.');
})();
