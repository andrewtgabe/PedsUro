// Urinary tract infection (UTI) chapter.
import { t } from '../i18n.js';
import { urinaryTract } from '../anatomy.js';
import { segmented, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { refluxSide, dmsaBuild } from './vur.js';
import { vcugPlayer, infectionPlayer, ultrasoundProbe } from '../tests.js';

const T = (k) => t(`uti.${k}`);

// Infection reaching: 0 = outside, 1 = bladder, 2 = kidney.
// Arrows show urine still flowing down while bacteria climb up.
const DOWN = { mode: 'down' };
const spread = (level) => ({
  urethraBact: true,
  bladderBact: level >= 1 ? 6 : 0,
  bladderRed: level >= 1,
  affected: level >= 2 ? { bactSpread: 1, inflamed: true, pelvisFill: 1, arrows: DOWN } : { arrows: DOWN },
  healthy: { arrows: DOWN },
  urethraArrows: 'down',
});
const addToSvg = (svg, extra) => svg.replace(/<\/svg>\s*$/, `${extra}</svg>`);

// ---------- 1. How it happens ----------

function renderEmbryology(root) {
  const steps = T('embryology.steps');
  const s = { i: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = urinaryTract(spread(s.i));
    explain.innerHTML = `<h3>${steps[s.i].name}</h3><p>${steps[s.i].text}</p>
      <h3>${T('embryology.riskTitle')}</h3><ul>${T('embryology.risks').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(segmented(T('embryology.stepLabel'), steps.map((x, i) => [i, x.name]), 0, (v) => { s.i = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { type: 'kidney' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    viz.innerHTML = urinaryTract(spread(s.type === 'kidney' ? 2 : 1));
    const ty = types[s.type];
    explain.innerHTML = `<h3>${ty.name}</h3><p>${ty.text}</p><ul>${ty.signs.map((x) => `<li>${x}</li>`).join('')}</ul>
      <div class="callout warn"><p>${T('pathology.babyNote')}</p></div>`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

// Collection methods, drawn below the urethra.
const COLLECT = {
  catheter: () => urinaryTract({ catheter: true, bladderBact: 4, bladderFill: 0.4 }),
  cup: (o) => addToSvg(urinaryTract({ voiding: true, bladderBact: 4, bladderFill: 0.4 }),
    `<g><path d="M262 470 L338 470 L330 526 L270 526 Z" fill="#fff" stroke="#64748b" stroke-width="3"/><path d="M266 496 L334 496 L330 526 L270 526 Z" fill="var(--urine)"/><text class="lbl small" x="348" y="482">${o.cupLabel}</text></g>`),
  bag: (o) => addToSvg(urinaryTract({ bladderBact: 4, bladderFill: 0.4 }),
    `<g><path d="M276 478 Q300 470 324 478 L334 526 Q300 534 266 526 Z" fill="rgb(226 232 240 / 0.8)" stroke="#64748b" stroke-width="3"/><path d="M270 512 Q300 518 330 512 L334 526 Q300 534 266 526 Z" fill="var(--urine)"/><text class="lbl small" x="348" y="482">${o.bagLabel}</text></g>`),
};

const BUILD = {
  testing(viz, ctl) {
    const o = T('treatment.options.testing');
    const note = document.createElement('div');
    const draw = (m) => { viz.innerHTML = COLLECT[m](o); note.innerHTML = `<div class="callout ${m === 'bag' ? 'warn' : ''}"><p>${o.notes[m]}</p></div>`; };
    ctl.append(segmented(o.methodLabel, Object.entries(o.methods), 'catheter', draw), note);
    draw('catheter');
  },

  // Culture, broad IV antibiotic, culture results at about 48 hours, switch to a matched oral antibiotic, home.
  antibiotics(viz, ctl) {
    const o = T('treatment.options.antibiotics');
    const iv = `<g class="iv"><path d="M560 300 C 590 260 590 200 600 180"/><circle cx="560" cy="300" r="5"/></g><text class="lbl small" x="590" y="170" text-anchor="end">${o.ivLabel}</text>`;
    const dish = `<g><ellipse cx="80" cy="470" rx="46" ry="16" fill="#f8fafc" stroke="#64748b" stroke-width="3"/><circle cx="66" cy="468" r="5" fill="#16a34a"/><circle cx="88" cy="474" r="4" fill="#16a34a"/><circle cx="96" cy="464" r="3" fill="#16a34a"/><text class="lbl small" x="80" y="506" text-anchor="middle">${o.cultureLabel}</text></g>`;
    const pill = `<g class="pill"><rect x="30" y="460" width="64" height="26" rx="13"/><path d="M62 460 v26"/><text class="lbl small" x="104" y="478">${o.oralLabel}</text></g>`;
    const states = [
      { bact: 6, sick: true, spread: 1, catheter: true, dish: true },
      { bact: 4, sick: true, spread: 0.6, iv: true },
      { bact: 2, sick: false, spread: 0, iv: true, dish: true },
      { bact: 1, sick: false, spread: 0, pill: true },
      { bact: 0, sick: false, spread: 0, pill: true },
    ];
    const base = { catheter: false, iv: false, dish: false, pill: false };
    return stepPlayer(ctl, states.map((st, n) => ({ caption: o.steps[n], state: { ...base, ...st } })), (st) => {
      const svg = urinaryTract({
        bladderBact: Math.round(st.bact), bladderRed: st.bact > 2, catheter: st.catheter,
        affected: { inflamed: st.sick, bactSpread: st.spread, pelvisFill: 1 },
      });
      viz.innerHTML = addToSvg(svg, (st.iv ? iv : '') + (st.dish ? dish : '') + (st.pill ? pill : ''));
    }, t('common.player'));
  },

  // Kidney checks after a febrile UTI: ultrasound for all; VCUG and DMSA for some.
  imaging(viz, ctl) {
    const o = T('treatment.options.imaging');
    const holder = document.createElement('div');
    holder.className = 'controls';
    let stop = null;
    const build = (test) => {
      stop?.();
      holder.innerHTML = '';
      viz.classList.remove('two');
      if (test === 'us') {
        stop = null;
        viz.innerHTML = addToSvg(urinaryTract({ affected: { pelvisDilation: 0.3, pelvisFill: 1 } }), ultrasoundProbe([566, 150, 70], o.probe));
      } else if (test === 'vcug') stop = vcugPlayer(viz, holder, t('hydronephrosis.treatment.options.vcug'));
      else stop = dmsaBuild(viz, holder);
    };
    ctl.append(segmented(o.testLabel, Object.entries(o.tests), 'us', build), holder);
    build('us');
    return () => stop?.();
  },

  antibioticPrev: (viz, ctl) =>
    infectionPlayer(viz, ctl, { ...t('hydronephrosis.treatment.options.antibiotic'), ...T('treatment.options.antibioticPrev') }, ({ spread, sick }) => ({ ...refluxSide(3, 1), bactSpread: spread, inflamed: sick })),

  // Big, easy-to-read habit list with an icon for each.
  prevention(viz) {
    const o = T('treatment.options.prevention');
    const icons = ['🚽', '🧘', '💩', '💧', '🧻', '🛁', '✂️'];
    viz.innerHTML = `<ul class="habit-list">${o.habits.map((h, i) => `<li><span class="icon" aria-hidden="true">${icons[i]}</span><span>${h}</span></li>`).join('')}</ul>`;
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => {
      const o = T(`treatment.options.${key}`);
      const summary = o.link ? `${o.summary}</p><p><a href="#/vur/treatment">${o.link} →</a>` : o.summary;
      return { key, ...o, summary, build: BUILD[key] };
    }),
  );
}

export default {
  id: 'uti',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
