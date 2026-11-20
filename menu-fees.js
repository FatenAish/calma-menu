/* CALMA: a single service notice after the active menu category. */
(() => {
  document.querySelectorAll('.calma-fees-footer').forEach(n => n.remove());
  const style=document.createElement('style');
  style.textContent='.calma-fees-footer{display:flex!important;align-items:center;justify-content:center;clear:both;box-sizing:border-box;margin:22px auto 14px;padding:9px 8px 0;border-top:1px solid #e7d7ca;text-align:center;direction:ltr;color:#735442;font:400 11px/1.4 Arial,sans-serif}.calma-fees-footer span{white-space:nowrap}';
  document.head.append(style);
  const sections=[...document.querySelectorAll('section.catalog-section')];
  if(!sections.length)return;
  // One notice at the very bottom of each category section.
  // In Beverages, menu-extras.js has already appended the add-ons here.
  for(const section of sections){
    const footer=document.createElement('div');
    footer.className='calma-fees-footer';
    footer.setAttribute('aria-label','Service 13%');
    for(const value of ['Service 13%']){
      const span=document.createElement('span');
      span.textContent=value;
      footer.append(span);
    }
    if(section.id==='hotDrinks'){
      const addons=document.getElementById('calmaDrinkAddons');
      if(addons){
        addons.insertAdjacentElement('afterend',footer);
      }else{
        section.append(footer);
      }
    }else{
      section.append(footer);
    }
    // Avoid the original menu's layout styles stacking the two labels.
    footer.style.setProperty('display','flex','important');
    footer.style.setProperty('flex-direction','row','important');
    footer.style.setProperty('justify-content','center','important');
    footer.style.setProperty('align-items','center','important');
    footer.style.setProperty('gap','28px','important');
    footer.style.setProperty('width','100%','important');
  }
  console.info('CALMA: fees at the bottom of each category:',sections.length);
})();
