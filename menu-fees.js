/* CALMA: exactly one horizontal Service / Tax footer at the end of each category page. */
(() => {
  const style=document.createElement('style');
  style.textContent='.calma-fees-footer{display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:28px;flex-wrap:nowrap;clear:both;width:100%;box-sizing:border-box;margin:28px 0 16px;padding:16px 10px;border-top:1px solid #e7d7ca;text-align:center;direction:ltr;color:#735442;font:600 14px/1.5 Arial,sans-serif}.calma-fees-footer span{display:inline-block!important;white-space:nowrap}@media(max-width:360px){.calma-fees-footer{gap:16px;font-size:12px}}';
  document.head.append(style);
  // Remove earlier footer placements (including the extra one outside the drinks panel).
  document.querySelectorAll('.calma-fees-footer').forEach(node=>node.remove());
  const add=section=>{
    if(!section)return;
    const footer=document.createElement('div');
    footer.className='calma-fees-footer';
    footer.setAttribute('aria-label','Service 5% and Tax 8%');
    for(const label of ['Service 5%','Tax 8%']){
      const item=document.createElement('span');
      item.textContent=label;
      footer.append(item);
    }
    section.append(footer);
  };
  // Main category pages, not individual beverages tabs or product grids.
  const pages=[...document.querySelectorAll('section.catalog-section')];
  for(const section of pages) add(section);
  console.info('CALMA service/tax footer once per category page:',pages.length);
})();
