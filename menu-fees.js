/* CALMA footer: display service and tax notice on every menu category page. */
(() => {
  const style=document.createElement('style');
  style.textContent='.calma-fees-footer{clear:both;margin:28px auto 18px;padding:12px 16px;border-top:1px solid #e7d7ca;text-align:center;direction:ltr;color:#735442;font:600 14px/1.8 Arial,sans-serif;letter-spacing:.02em}.calma-fees-footer span{display:block}';
  document.head.append(style);
  const add=container=>{
    if(!container||container.querySelector(':scope > .calma-fees-footer'))return;
    const footer=document.createElement('div');
    footer.className='calma-fees-footer';
    footer.setAttribute('aria-label','Service and tax information');
    const service=document.createElement('span');
    service.textContent='Service 5%';
    const tax=document.createElement('span');
    tax.textContent='Tax 8%';
    footer.append(service,tax);
    container.append(footer);
  };
  // Only leaf product grids OR a standalone section without product grids.
  // Never attach to both a child grid and its parent section.
  const grids=[...document.querySelectorAll('[id$="Products"]')]
    .filter(node=>node.querySelector('article.product-card'));
  for(const grid of grids)add(grid);
  const standaloneIds=['shishaMenu','shishaSection','foodMenu','foodSection','dessertsMenu','dessertMenu','snacksMenu','snackMenu'];
  const standalone=new Set(standaloneIds.map(id=>document.getElementById(id)).filter(Boolean));
  for(const section of document.querySelectorAll('section')){
    if(section.querySelector('article.product-card') &&
       !section.querySelector('[id$="Products"]')) standalone.add(section);
  }
  for(const section of standalone){
    if(grids.some(grid=>section.contains(grid)))continue;
    if([...standalone].some(other=>other!==section && section.contains(other) && other.querySelector('article.product-card')))continue;
    add(section);
  }
  console.info('CALMA: service/tax notices added:',grids.length + standalone.size);
})();
