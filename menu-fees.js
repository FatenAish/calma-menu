/* CALMA: a single service/tax notice after the active menu category. */
(() => {
  document.querySelectorAll('.calma-fees-footer').forEach(n => n.remove());
  const style=document.createElement('style');
  style.textContent='.calma-fees-footer{display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:28px;flex-wrap:nowrap;clear:both;box-sizing:border-box;margin:25px auto 20px;padding:16px 10px;border-top:1px solid #e7d7ca;text-align:center;direction:ltr;color:#735442;font:600 14px/1.5 Arial,sans-serif}.calma-fees-footer span{display:inline-block;white-space:nowrap}@media(max-width:360px){.calma-fees-footer{gap:16px;font-size:12px}}';
  document.head.append(style);
  const sections=[...document.querySelectorAll('section.catalog-section')];
  if(!sections.length)return;
  // One notice at the very bottom of each category section.
  // In Beverages, menu-extras.js has already appended the add-ons here.
  for(const section of sections){
    const footer=document.createElement('div');
    footer.className='calma-fees-footer';
    footer.setAttribute('aria-label','Service 5% and Tax 8%');
    for(const value of ['Service 5%','Tax 8%']){
      const span=document.createElement('span');
      span.textContent=value;
      footer.append(span);
    }
    section.append(footer);
  }
  console.info('CALMA: fees at the bottom of each category:',sections.length);
})();
