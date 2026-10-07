// Translation lookup. Each language is a folder in content/<lang>/ with the
// same files and keys as content/en/. Text missing from a language falls back
// to English, so chapters can be translated one at a time.
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
import enMeatal from '../content/en/meatal.js';
import enLabial from '../content/en/labial.js';
import enUti from '../content/en/uti.js';
import enStones from '../content/en/stones.js';
import enHypospadias from '../content/en/hypospadias.js';
import enEnuresis from '../content/en/enuresis.js';
import enBbd from '../content/en/bbd.js';
import enNeurogenic from '../content/en/neurogenic.js';
import esCommon from '../content/es/common.js';
import esVur from '../content/es/vur.js';
import esHydronephrosis from '../content/es/hydronephrosis.js';
import esUti from '../content/es/uti.js';
import esEnuresis from '../content/es/enuresis.js';
import esCryptorchidism from '../content/es/cryptorchidism.js';
import esHernia from '../content/es/hernia.js';
import esHydrocele from '../content/es/hydrocele.js';
import esPhimosis from '../content/es/phimosis.js';
import esTorsion from '../content/es/torsion.js';
import esStones from '../content/es/stones.js';
import esBbd from '../content/es/bbd.js';
import esHypospadias from '../content/es/hypospadias.js';
import esUpj from '../content/es/upj.js';
import esUvj from '../content/es/uvj.js';
import esDuplex from '../content/es/duplex.js';
import esEctopic from '../content/es/ectopic.js';

// [code, name shown in the language switcher]
export const LANGUAGES = [
  ['en', 'English'],
  ['es', 'Español'],
];

const languages = {
  en: {
    common: enCommon, vur: enVur, hydronephrosis: enHydronephrosis, upj: enUpj, uvj: enUvj, duplex: enDuplex,
    puv: enPuv, ectopic: enEctopic, torsion: enTorsion, cryptorchidism: enCryptorchidism, hydrocele: enHydrocele,
    hernia: enHernia, varicocele: enVaricocele, phimosis: enPhimosis, meatal: enMeatal, labial: enLabial,
    uti: enUti, stones: enStones, hypospadias: enHypospadias, enuresis: enEnuresis, bbd: enBbd, neurogenic: enNeurogenic,
  },
  es: {
    common: esCommon, vur: esVur, hydronephrosis: esHydronephrosis, uti: esUti, enuresis: esEnuresis,
    cryptorchidism: esCryptorchidism, hernia: esHernia, hydrocele: esHydrocele, phimosis: esPhimosis,
    torsion: esTorsion, stones: esStones, bbd: esBbd, hypospadias: esHypospadias,
    upj: esUpj, uvj: esUvj, duplex: esDuplex, ectopic: esEctopic,
  },
};

// Language comes from ?lang= (shared links), then the viewer's last choice.
let current = 'en';
try {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('lang');
  current = languages[fromUrl] ? fromUrl : languages[saved] ? saved : 'en';
} catch {
  current = 'en';
}
document.documentElement.lang = current;

export const getLanguage = () => current;

export function setLanguage(lang) {
  if (!languages[lang]) return;
  current = lang;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem('lang', lang);
  } catch {
    // Storage can be blocked; the choice still applies for this visit.
  }
}

// Whether a content file (e.g. 'vur') exists in the current language.
export const isTranslated = (ns) => current === 'en' || Boolean(languages[current][ns]);

const lookup = (lang, path) => path.split('.').reduce((obj, key) => (obj == null ? obj : obj[key]), languages[lang]);

// t('vur.pathology.grades') -> value at that path (string, array or object).
export function t(path) {
  const value = lookup(current, path) ?? lookup('en', path);
  if (value == null) {
    console.warn(`Missing text: ${path}`);
    return path;
  }
  return value;
}
