/* CALMA: remove the EN / عربي language-toggle button only. */
(() => {
  const normalize = value => (value || '').replace(/\s+/g,' ').trim();
  const isLanguageToggle = value => /^(?:EN\s*[\/|]\s*(?:عربي|العربية)|(?:عربي|العربية)\s*[\/|]\s*EN)$/i.test(normalize(value));
  const candidates = [...document.querySelectorAll('button,a,[role="button"],[id*="lang" i],[class*="lang" i],span')];
  const removed = new Set();
  for (const node of candidates) {
    if (!isLanguageToggle(node.textContent)) continue;
    let target = node.closest('button,a,[role="button"]') || node;
    // When the language label sits inside a plain styled wrapper, hide the wrapper too.
    if (target === node && target.parentElement && isLanguageToggle(target.parentElement.textContent))
      target = target.parentElement;
    if (target.isConnected && !removed.has(target)) {
      target.remove();
      removed.add(target);
    }
  }
  console.info('CALMA: removed language switch:', removed.size);
})();