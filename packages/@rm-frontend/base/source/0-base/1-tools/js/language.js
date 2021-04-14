export function getLang() {
  const lang =
    document.documentElement.getAttribute('lang') ||
    window.rm.fallbackLang ||
    'de';
  return lang.split('-')[0];
}

export function isLang(lang) {
  return (
    (document.documentElement.getAttribute('lang') || '').indexOf(lang) >= 0
  );
}
