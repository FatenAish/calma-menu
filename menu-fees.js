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
  // Add to menu content pages and each tab's visible product panel.
  const ids=['shishaMenu','shishaSection','foodMenu','foodSection','dessertsMenu','dessertMenu','snacksMenu','snackMenu','hotDrinks'];
  const targets=new Set(ids.map(id=>document.getElementById(id)).filter(Boolean));
  for(const node of document.querySelectorAll('[id$="Products"]')) {
    if(node.querySelector('article.product-card'))targets.add(node);
  }
  for(const node of document.querySelectorAll('section')) {
    if(!node.querySelector('article.product-card'))continue;
    if([...targets].some(target=>node!==target && node.contains(target)))continue;
    targets.add(node);
  }
  for(const target of targets) {
    if(target.closest('.calma-fees-footer'))continue;
    add(target);
  }
  console.info('CALMA: service/tax notices added:',targets.size);
})();
