// Nocturnal enuresis (bedwetting) chapter.
import { t } from '../i18n.js';
import { toggle, slider, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`enuresis.${k}`);

// ---------- overnight bladder chart ----------

// Simulates one night, 9 hours from bedtime. Urine builds up; when it reaches
// the bladder's limit the child either wakes, is woken by an alarm, or wets.
//   lotsOfUrine, smallBladder, deepSleep: the three causes
//   alarm: 'off' | 'learning' (alarm wakes them) | 'learned' (brain wakes itself)
//   desmo: desmopressin lowers night urine
function simulate({ lotsOfUrine, smallBladder, deepSleep, alarm = 'off', desmo = false }) {
  const rate = desmo ? 16 : lotsOfUrine ? 38 : 20;
  const cap = smallBladder ? 140 : 220;
  const pts = [];
  const events = [];
  let v = 0;
  for (let h = 0; h <= 9.0001; h += 0.1) {
    v += rate * 0.1;
    if (v >= cap) {
      const wakes = !deepSleep || alarm === 'learned';
      events.push({ h, kind: wakes ? 'wakes' : alarm === 'learning' ? 'alarm' : 'wet' });
      pts.push([h, cap]);
      v = 0;
    }
    pts.push([h, v]);
  }
  return { pts, events, cap };
}

function nightChart(opts) {
  const text = T('chart');
  const { pts, events, cap } = simulate(opts);
  const x = (h) => 60 + h * 54;
  const y = (v) => 250 - v * 0.75;
  const line = 'M' + pts.map(([h, v]) => `${x(h).toFixed(1)} ${y(v).toFixed(1)}`).join(' L');
  const marks = events
    .map((e) => {
      const cls = e.kind === 'wet' ? 'ev-wet' : e.kind === 'alarm' ? 'ev-alarm' : 'ev-wake';
      return `<g class="${cls}"><circle cx="${x(e.h)}" cy="${y(cap)}" r="9"/><text class="lbl small" x="${x(e.h)}" y="${y(cap) - 16}" text-anchor="middle">${text[e.kind === 'wakes' ? 'wakes' : e.kind]}</text></g>`;
    })
    .join('');
  const dry = !events.some((e) => e.kind !== 'wakes');
  return `<svg class="anatomy chart" viewBox="0 0 580 300" role="img" aria-label="${text.title}">
    <line class="axis" x1="60" y1="250" x2="550" y2="250"/>
    <line class="axis" x1="60" y1="40" x2="60" y2="250"/>
    <line class="lasix" x1="60" y1="${y(cap)}" x2="550" y2="${y(cap)}"/>
    <text class="tick strong" x="548" y="${y(cap) + 16}" text-anchor="end">${text.capacity}</text>
    <path class="curve on night" d="${line}"/>
    ${marks}
    <text class="tick" x="60" y="270" text-anchor="middle">${text.bedtime}</text>
    <text class="tick" x="546" y="270" text-anchor="middle">${text.morning}</text>
    <text class="tick" x="20" y="150" text-anchor="middle" transform="rotate(-90 20 150)">${text.title}</text>
    ${dry ? `<g class="ev-dry"><rect x="440" y="30" width="100" height="32" rx="16"/><text x="490" y="51" text-anchor="middle">${text.dry}</text></g>` : ''}
  </svg>`;
}

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { lotsOfUrine: true, smallBladder: false, deepSleep: true };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const factors = T('embryology.factors');
  const keys = { urine: 'lotsOfUrine', bladder: 'smallBladder', sleep: 'deepSleep' };
  const draw = () => {
    viz.innerHTML = nightChart(s);
    explain.innerHTML = Object.entries(factors)
      .map(([k, fct]) => `<p class="${s[keys[k]] ? '' : 'note'}"><strong>${fct.name}.</strong> ${fct.text}</p>`)
      .join('') + `<div class="callout"><p>${T('embryology.family')}</p></div>`;
  };
  ctl.append(...Object.entries(factors).map(([k, fct]) => toggle(fct.name, s[keys[k]], (v) => { s[keys[k]] = v; draw(); })));
  draw();
}

// ---------- 2. What's happening ----------

// Approximate share of children still wetting the bed, by age.
const PREVALENCE = { 5: 15, 6: 13, 7: 10, 8: 8, 9: 6, 10: 5, 11: 4, 12: 3, 13: 2, 14: 2, 15: 1 };

function iconGrid(n) {
  let out = '';
  for (let i = 0; i < 100; i++) {
    const cx = 30 + (i % 10) * 34;
    const cy = 30 + Math.floor(i / 10) * 34;
    out += `<g class="kid ${i < n ? 'on' : ''}"><circle cx="${cx}" cy="${cy - 7}" r="6"/><rect x="${cx - 7}" y="${cy}" width="14" height="13" rx="5"/></g>`;
  }
  return `<svg class="anatomy chart" viewBox="0 0 370 360" role="img" aria-label="${n} / 100">${out}</svg>`;
}

function renderPathology(root) {
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = (age) => {
    const n = PREVALENCE[age];
    viz.innerHTML = iconGrid(n);
    explain.innerHTML = `<p class="big-stat"><strong>${n}</strong> ${T('pathology.rateText')}</p>
      <p>${T('pathology.each')}</p>
      <h3>${T('pathology.whenTitle')}</h3><ul>${T('pathology.when').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(slider(T('pathology.ageLabel'), { min: 5, max: 15, step: 1, value: 5, format: (v) => `${v} ${T('pathology.years')}` }, draw));
  draw(5);
}

// ---------- 3. Treatment ----------

const CHILD = { lotsOfUrine: true, smallBladder: false, deepSleep: true };

const BUILD = {
  habits: (viz) => { viz.innerHTML = nightChart({ ...CHILD }); },
  alarm(viz, ctl) {
    const o = T('treatment.options.alarm');
    const draw = (w) => (viz.innerHTML = nightChart({ ...CHILD, alarm: w === 0 ? 'off' : w < 8 ? 'learning' : 'learned' }));
    ctl.append(slider(o.control, { min: 0, max: 12, step: 1, value: 0, format: (v) => `${v} ${o.weeks}` }, draw));
    draw(0);
  },
  desmopressin(viz, ctl) {
    const o = T('treatment.options.desmopressin');
    const draw = (on) => (viz.innerHTML = nightChart({ ...CHILD, desmo: on }));
    ctl.append(toggle(o.dose, false, draw));
    draw(false);
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'enuresis',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
