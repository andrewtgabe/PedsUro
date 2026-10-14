import { t, LANGUAGES, getLanguage, setLanguage, isTranslated } from './i18n.js';
import vur from './chapters/vur.js';
import hydronephrosis from './chapters/hydronephrosis.js';
import upj from './chapters/upj.js';
import uvj from './chapters/uvj.js';
import duplex from './chapters/duplex.js';
import puv from './chapters/puv.js';
import ectopic from './chapters/ectopic.js';
import torsion from './chapters/torsion.js';
import cryptorchidism from './chapters/cryptorchidism.js';
import hydrocele from './chapters/hydrocele.js';
import hernia from './chapters/hernia.js';
import varicocele from './chapters/varicocele.js';
import phimosis from './chapters/phimosis.js';
import meatal from './chapters/meatal.js';
import labial from './chapters/labial.js';
import uti from './chapters/uti.js';
import stones from './chapters/stones.js';
import hypospadias from './chapters/hypospadias.js';
import enuresis from './chapters/enuresis.js';
import bbd from './chapters/bbd.js';
import neurogenic from './chapters/neurogenic.js';
import bowel from './chapters/bowel.js';
import testismass from './chapters/testismass.js';
import imaging from './chapters/imaging.js';

// Built chapters. To add one: create js/chapters/<id>.js and content/en/<id>.js,
// register the content in i18n.js, then add it here.
const CHAPTERS = { vur, hydronephrosis, upj, uvj, duplex, puv, ectopic, torsion, cryptorchidism, hydrocele, hernia, varicocele, phimosis, meatal, labial, uti, stones, hypospadias, enuresis, bbd, neurogenic, bowel, testismass, imaging };

// Order of conditions on the home page.
const CATALOG = {
  upper: ['hydronephrosis', 'vur', 'upj', 'uvj', 'duplex', 'ectopic', 'stones'],
  lower: ['uti', 'enuresis', 'bbd', 'bowel', 'neurogenic', 'puv', 'exstrophy', 'hypospadias'],
  genital: ['cryptorchidism', 'hydrocele', 'hernia', 'torsion', 'testismass', 'varicocele', 'phimosis', 'meatal', 'labial'],
  tests: ['imaging'],
};

// Extra lay search words (English and Spanish) for the home page filter.
const KEYWORDS = {
  hydronephrosis: 'swollen kidney dilation riñón hinchado dilatación',
  vur: 'reflux backward urine reflujo',
  upj: 'blockage kidney obstruction pyeloplasty bloqueo pieloplastia',
  uvj: 'megaureter blockage wide ureter bloqueo',
  duplex: 'duplicated double kidney two ureters doble',
  ectopic: 'ureterocele leaking wet ectópico',
  stones: 'kidney stone bladder stone pain cálculo piedra',
  uti: 'infection fever bladder infection infección fiebre',
  enuresis: 'bedwetting night wetting alarm mojar la cama noche',
  bbd: 'daytime wetting accidents urgency accidentes urgencia',
  bowel: 'constipation poop stool estreñimiento popó',
  neurogenic: 'spina bifida catheter botox augmentation mitrofanoff cateterismo',
  puv: 'posterior urethral valves boys valvas',
  hypospadias: 'penis opening pee hole pene',
  cryptorchidism: 'undescended testicle orchiopexy testículo no descendido',
  hydrocele: 'fluid scrotum swelling líquido escroto',
  hernia: 'inguinal bulge groin bulto ingle',
  torsion: 'twisted testicle emergency pain torcido dolor emergencia',
  testismass: 'testicular tumor lump cancer orchiectomy tumor bulto',
  varicocele: 'veins scrotum venas',
  phimosis: 'tight foreskin circumcision prepucio circuncisión',
  meatal: 'meatal stenosis narrow opening meatotomy estrechez',
  labial: 'labial adhesions girls fused labios niñas',
  imaging: 'ultrasound mag3 dmsa vcug uroflow urodynamics scan tests ultrasonido estudios pruebas',
};
const app = document.getElementById('app');

// Page-view badge from hits.sh. Created once per visit and moved into each new header, so
// switching sections does not count again. Only counts on the published site.
const viewCounter = (() => {
  if (!location.hostname.endsWith('github.io')) return null;
  const img = document.createElement('img');
  img.className = 'view-counter';
  img.alt = 'Page views';
  img.src = 'https://hits.sh/andrewtgabe.github.io/PedsUro.svg?label=views&color=2f6fb5';
  return img;
})();
let cleanup = null;

// English | Español buttons; switching re-renders the current page.
const langSwitch = () =>
  `<div class="lang-switch" role="group" aria-label="${t('common.nav.language')}">${LANGUAGES.map(
    ([code, name]) => `<button data-lang="${code}" aria-pressed="${code === getLanguage()}">${name}</button>`,
  ).join('')}</div>`;

// Light/dark switch. Without a saved choice the page follows the device setting.
const darkQuery = matchMedia('(prefers-color-scheme: dark)');
const store = { get: () => { try { return localStorage.getItem('theme'); } catch { return null; } },
  set: (v) => { try { localStorage.setItem('theme', v); } catch {} } };
if (store.get()) document.documentElement.dataset.theme = store.get();
const isDark = () => (document.documentElement.dataset.theme || (darkQuery.matches ? 'dark' : 'light')) === 'dark';
const themeToggle = () =>
  `<button class="theme-toggle" data-theme-toggle aria-label="${t(isDark() ? 'common.nav.lightMode' : 'common.nav.darkMode')}" title="${t(isDark() ? 'common.nav.lightMode' : 'common.nav.darkMode')}">${isDark() ? '☀' : '☾'}</button>`;
app.addEventListener('click', (e) => {
  const b = e.target.closest('[data-theme-toggle]');
  if (!b) return;
  const next = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  store.set(next);
  b.outerHTML = themeToggle();
});
darkQuery.addEventListener('change', () => app.querySelector('[data-theme-toggle]')?.replaceWith(Object.assign(document.createElement('template'), { innerHTML: themeToggle() }).content));

app.addEventListener('click', (e) => {
  const b = e.target.closest('[data-lang]');
  if (!b) return;
  setLanguage(b.dataset.lang);
  route();
});

function route() {
  cleanup?.();
  cleanup = null;
  const [, chapterId, sectionId] = location.hash.replace(/^#\/?/, '#/').split('/');
  const chapter = CHAPTERS[chapterId];
  if (chapter) renderChapter(chapter, sectionId);
  else renderHome();
  if (viewCounter) app.querySelector('.lang-switch')?.after(viewCounter);
  window.scrollTo(0, 0);
}

function renderHome() {
  document.title = t('common.site.title');
  document.body.classList.remove('present');
  app.innerHTML = `
    <header class="home-head">
      <div class="top-row">${langSwitch()}${themeToggle()}</div>
      <h1>${t('common.site.title')}</h1>
      <p>${t('common.site.tagline')}</p>
      <p class="author">${t('common.site.author')}</p>
      <input type="search" class="search" placeholder="${t('common.nav.search')}" aria-label="${t('common.nav.search')}">
    </header>
    <p class="no-match" hidden>${t('common.nav.noMatch')}</p>
    ${Object.entries(CATALOG)
      .map(
        ([group, ids]) => `
      <section class="group">
        <h2>${t(`common.groups.${group}`)}</h2>
        <div class="grid">
          ${ids
            .map((id) =>
              CHAPTERS[id]
                ? `<a class="tile ready" href="#/${id}/embryology" data-find="${`${t(`common.conditions.${id}`)} ${t(`common.blurbs.${id}`)} ${KEYWORDS[id] || ''}`.toLowerCase().replace(/"/g, '')}"><strong>${t(`common.conditions.${id}`)}</strong><span>${t(`common.blurbs.${id}`)}</span></a>`
                : `<div class="tile"><strong>${t(`common.conditions.${id}`)}</strong><span>${t('common.nav.comingSoon')}</span></div>`,
            )
            .join('')}
        </div>
      </section>`,
      )
      .join('')}
    <footer class="disclaimer">${t('common.site.disclaimer')}<br>${t('common.site.author')}</footer>`;

  // Filter tiles as the user types; hide groups with no matches.
  const plain = (x) => x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  app.querySelector('.search').addEventListener('input', (e) => {
    const words = plain(e.target.value).split(/\s+/).filter(Boolean);
    let any = false;
    app.querySelectorAll('.group').forEach((g) => {
      let shown = 0;
      g.querySelectorAll('.tile').forEach((tile) => {
        const hay = plain(tile.dataset.find || tile.textContent);
        const ok = words.every((w) => hay.includes(w));
        tile.hidden = !ok;
        shown += ok;
      });
      g.hidden = !shown;
      any ||= shown > 0;
    });
    app.querySelector('.no-match').hidden = any;
  });
}

function renderChapter(chapter, sectionId) {
  const sections = chapter.sections;
  const index = Math.max(0, sections.findIndex((s) => s.id === sectionId));
  const section = sections[index];
  document.title = `${chapter.title()} · ${t(`common.sections.${section.id}`)}`;

  app.innerHTML = `
    <header class="chapter-head">
      <a class="home-link" href="#/">← ${t('common.nav.home')}</a>
      <h1>${chapter.title()}</h1>
      <button class="btn tools-toggle" aria-expanded="false">⋯ ${t('common.nav.tools')}</button>
      <div class="tools">
        <button class="btn" data-draw aria-pressed="false">✎ ${t('common.nav.draw')}</button>
        <button class="btn" data-clear>${t('common.nav.clear')}</button>
        <button class="btn" data-share>${t('common.nav.share')}</button>
        <button class="btn" data-print>${t('common.nav.print')}</button>
        <button class="btn" data-present></button>
        ${langSwitch()}
        ${themeToggle()}
      </div>
    </header>
    ${isTranslated(chapter.id) ? '' : `<p class="callout lang-note">${t('common.nav.notTranslated')}</p>`}
    <nav class="section-tabs">
      ${sections
        .map(
          (s, i) =>
            `<a href="#/${chapter.id}/${s.id}" ${i === index ? 'aria-current="page"' : ''}><span class="num">${i + 1}</span>${t(`common.sections.${s.id}`)}</a>`,
        )
        .join('')}
    </nav>
    <main class="stage">
      <div class="section-body"></div>
      <canvas class="ink"></canvas>
    </main>
    <footer class="pager">
      ${index > 0 ? `<a class="btn" href="#/${chapter.id}/${sections[index - 1].id}">← ${t(`common.sections.${sections[index - 1].id}`)}</a>` : '<span></span>'}
      ${index < sections.length - 1 ? `<a class="btn primary" href="#/${chapter.id}/${sections[index + 1].id}">${t(`common.sections.${sections[index + 1].id}`)} →</a>` : '<span></span>'}
    </footer>
    <footer class="disclaimer">${t('common.site.disclaimer')}<br>${t('common.site.author')}</footer>`;

  const sectionCleanup = section.render(app.querySelector('.section-body'));
  labelDrawings(`${chapter.title()} · ${t(`common.sections.${section.id}`)}`);
  app.querySelector('.tools-toggle').addEventListener('click', (e) => {
    const open = e.currentTarget.getAttribute('aria-expanded') !== 'true';
    e.currentTarget.setAttribute('aria-expanded', open);
    app.querySelector('.tools').classList.toggle('open', open);
  });
  const ink = setupInk(app.querySelector('.stage'), app.querySelector('canvas.ink'));

  const presentBtn = app.querySelector('[data-present]');
  const setPresentLabel = () =>
    (presentBtn.textContent = document.body.classList.contains('present') ? `✕ ${t('common.nav.exitPresent')}` : `⛶ ${t('common.nav.present')}`);
  setPresentLabel();
  presentBtn.addEventListener('click', () => {
    document.body.classList.toggle('present');
    setPresentLabel();
    ink.resize();
  });
  app.querySelector('[data-draw]').addEventListener('click', (e) => {
    const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
    e.currentTarget.setAttribute('aria-pressed', on);
    ink.enable(on);
  });
  app.querySelector('[data-clear]').addEventListener('click', ink.clear);
  app.querySelector('[data-share]').addEventListener('click', showShare);
  app.querySelector('[data-print]').addEventListener('click', () => window.print());

  const onKey = (e) => {
    if (e.target.matches('input, textarea')) return;
    const go = (i) => sections[i] && (location.hash = `#/${chapter.id}/${sections[i].id}`);
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'p') presentBtn.click();
    if (e.key === 'd') app.querySelector('[data-draw]').click();
    if (e.key === 'c') ink.clear();
  };
  document.addEventListener('keydown', onKey);

  cleanup = () => {
    sectionCleanup?.();
    ink.destroy();
    document.removeEventListener('keydown', onKey);
  };
}

// Give each drawing a screen-reader name (its caption, or the page name).
function labelDrawings(fallback) {
  app.querySelectorAll('svg.anatomy').forEach((svg) => {
    if (svg.hasAttribute('aria-label')) return;
    const cap = svg.closest('figure')?.querySelector('figcaption')?.textContent;
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', cap || fallback);
  });
}

// When a picture-changing button is pressed, briefly highlight the drawing.
app.addEventListener('click', (e) => {
  const b = e.target.closest('.seg-group button, .option-tabs button');
  const viz = b?.closest('.viz-col, .model')?.querySelector('.viz');
  if (!viz) return;
  viz.classList.remove('flash');
  void viz.offsetWidth;
  viz.classList.add('flash');
});

// Freehand pen layer over the model, for drawing during counseling.
function setupInk(stage, canvas) {
  const ctx = canvas.getContext('2d');
  let drawing = false;
  let last = null;

  const resize = () => {
    const r = stage.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    canvas.style.width = `${r.width}px`;
    canvas.style.height = `${r.height}px`;
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 4;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink-pen');
  };
  const pos = (e) => {
    const r = canvas.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };
  canvas.addEventListener('pointerdown', (e) => {
    drawing = true;
    last = pos(e);
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!drawing) return;
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(...last);
    ctx.lineTo(...p);
    ctx.stroke();
    last = p;
  });
  canvas.addEventListener('pointerup', () => (drawing = false));

  const ro = new ResizeObserver(resize);
  ro.observe(stage);
  resize();

  return {
    resize,
    enable: (on) => canvas.classList.toggle('active', on),
    clear: () => ctx.clearRect(0, 0, canvas.width, canvas.height),
    destroy: () => ro.disconnect(),
  };
}

// Link to this page that opens in the current language.
function shareUrl() {
  const lang = getLanguage();
  return `${location.origin}${location.pathname}${lang === 'en' ? '' : `?lang=${lang}`}${location.hash}`;
}

function showShare() {
  const url = shareUrl();
  const dlg = document.createElement('dialog');
  dlg.className = 'share';
  dlg.innerHTML = `
    <h2>${t('common.share.title')}</h2>
    <p>${t('common.share.body')}</p>
    <div class="qr"></div>
    <p class="url">${url}</p>
    <button class="btn primary">${t('common.nav.close')}</button>`;
  document.body.append(dlg);
  dlg.querySelector('button').addEventListener('click', () => dlg.close());
  dlg.addEventListener('close', () => dlg.remove());
  dlg.showModal();
  loadQr().then((QRCode) => new QRCode(dlg.querySelector('.qr'), { text: url, width: 220, height: 220 }));
}

let qrPromise;
function loadQr() {
  qrPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    s.onload = () => resolve(window.QRCode);
    s.onerror = reject;
    document.head.append(s);
  });
  return qrPromise;
}

window.addEventListener('hashchange', route);
route();
