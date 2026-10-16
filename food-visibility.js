/* CALMA temporary food hide.
 * All approved food names, Arabic translations, prices, and image references are
 * retained in food-override.js. Remove this script include to restore food.
 */
(() => {
  const conceal = (element) => {
    if (!element) return;
    element.hidden = true;
    element.setAttribute('aria-hidden','true');
    element.style.setProperty('display','none','important');
  };
  // The food override marks the complete live food section with this class.
  const sections = [
    ...document.querySelectorAll('.calma-food[data-calma-food-updated="true"]'),
    ...['foodMenu','foodSection','food-menu','food'].map(id => document.getElementById(id)).filter(Boolean)
  ];
  for (const section of new Set(sections)) conceal(section);

  // Hide the FOOD / الطعام tile on the Main Menu without touching any others.
  const label = (node) => (node.textContent || '').replace(/\s+/g,' ').trim();
  const foodTile = (text) => /\bFOOD\b/i.test(text) && /الطعام/.test(text) && text.length < 130;
  const shishaTile = (text) => /\bSHISHA\b/i.test(text) && /الأراجيل/.test(text);
  const beveragesTile = (text) => /\bBEVERAGES\b/i.test(text) && /المشروبات/.test(text);
  const grids = [...document.querySelectorAll('div,nav,section,ul')].filter(container => {
    const children=[...container.children];
    if(children.length < 3 || children.length > 10) return false;
    const texts=children.map(label);
    return texts.some(foodTile) && texts.some(shishaTile) && texts.some(beveragesTile)
      && texts.every(text=>text.length < 220);
  }).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
  let tilesHidden=0;
  for(const grid of grids) {
    for(const child of [...grid.children]){
      if(foodTile(label(child))){
        conceal(child);
        tilesHidden++;
      }
    }
    if(tilesHidden) break;
  }
  if(!tilesHidden){
    // Fallback for clickable category cards outside the usual card grid.
    for(const link of document.querySelectorAll('a,button,[role="button"]')){
      if(foodTile(label(link)) && label(link).length < 130){
        conceal(link);
        tilesHidden++;
      }
    }
  }
  // Cover other food-only category shortcut links, if any.
  for(const link of document.querySelectorAll('a[href="#foodMenu"],a[href="#foodSection"],a[href="#food"]')){
    conceal(link);
  }
  console.info('CALMA: food temporarily hidden, source kept in food-override.js.');
})();