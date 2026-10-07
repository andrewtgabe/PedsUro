// Minimal translation lookup. Add a language by creating content/<lang>/
// with the same files and registering it below.
import enCommon from '../content/en/common.js';
import enVur from '../content/en/vur.js';
import enHydronephrosis from '../content/en/hydronephrosis.js';
import enUpj from '../content/en/upj.js';
import enUvj from '../content/en/uvj.js';
import enDuplex from '../content/en/duplex.js';

const languages = {
  en: { common: enCommon, vur: enVur, hydronephrosis: enHydronephrosis, upj: enUpj, uvj: enUvj, duplex: enDuplex },
};

let current = 'en';

export function setLanguage(lang) {
  if (languages[lang]) current = lang;
}

// t('vur.pathology.grades') -> value at that path (string, array or object).
export function t(path) {
  const value = path.split('.').reduce((obj, key) => (obj == null ? obj : obj[key]), languages[current]);
  if (value == null) {
    console.warn(`Missing text: ${path}`);
    return path;
  }
  return value;
}
