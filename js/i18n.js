// Minimal translation lookup. Add a language by creating content/<lang>/
// with the same files and registering it below.
import enCommon from '../content/en/common.js';
import enVur from '../content/en/vur.js';
import enHydronephrosis from '../content/en/hydronephrosis.js';
import enUpj from '../content/en/upj.js';
import enUvj from '../content/en/uvj.js';
import enDuplex from '../content/en/duplex.js';
import enPuv from '../content/en/puv.js';
import enEctopic from '../content/en/ectopic.js';
import enTorsion from '../content/en/torsion.js';
import enCryptorchidism from '../content/en/cryptorchidism.js';
import enHydrocele from '../content/en/hydrocele.js';
import enHernia from '../content/en/hernia.js';
import enVaricocele from '../content/en/varicocele.js';
import enPhimosis from '../content/en/phimosis.js';

const languages = {
  en: { common: enCommon, vur: enVur, hydronephrosis: enHydronephrosis, upj: enUpj, uvj: enUvj, duplex: enDuplex, puv: enPuv, ectopic: enEctopic, torsion: enTorsion, cryptorchidism: enCryptorchidism, hydrocele: enHydrocele, hernia: enHernia, varicocele: enVaricocele, phimosis: enPhimosis },
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
