// Nocturnal enuresis (bedwetting) chapter.
import { t } from '../i18n.js';
import { toggle, slider, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

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

// ---------- Why it happens (shown last) ----------

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
      ${age === 5 ? `<div class="callout good"><p>${T('pathology.normalAt5')}</p></div>` : ''}
      <p>${T('pathology.each')}</p>
      <h3>${T('pathology.whenTitle')}</h3><ul>${T('pathology.when').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(slider(T('pathology.ageLabel'), { min: 5, max: 15, step: 1, value: 5, format: (v) => `${v} ${T('pathology.years')}` }, draw));
  draw(5);
}

// ---------- 3. Treatment ----------

// A simple bedroom for showing how a treatment is used night by night.
//   time: 'night' | 'morning'; kid: 'bed' | 'toilet'; ring: alarm sounding; unit: alarm worn;
//   parent: parent helping; stars: dry nights on the chart (of 14); wet: wet patch; dry: dry badge;
//   glass: 'ok' | 'no' (drinks allowed / stopped); pill: bedtime tablet; gauge: 0..1 urine made overnight.
function bedroom(st, L) {
  const sky = st.time === 'morning'
    ? '<circle cx="50" cy="44" r="18" fill="#facc15"/>'
    : '<path d="M58 28 a18 18 0 1 0 0 34 a14 14 0 1 1 0 -34 Z" fill="#94a3b8"/>';
  const kidBed = st.kid === 'bed';
  const kid = kidBed
    ? `<circle cx="112" cy="196" r="20" fill="#f1cdb6" stroke="#c99a80" stroke-width="2"/>
       <path d="M96 186 q10 -16 32 -6" fill="none" stroke="#7a4a2a" stroke-width="7" stroke-linecap="round"/>`
    : `<g><circle cx="470" cy="150" r="18" fill="#f1cdb6" stroke="#c99a80" stroke-width="2"/>
       <rect x="456" y="168" width="28" height="56" rx="10" fill="#93c5fd"/><rect x="458" y="222" width="10" height="40" rx="4" fill="#93c5fd"/><rect x="472" y="222" width="10" height="40" rx="4" fill="#93c5fd"/></g>`;
  const unit = st.unit && kidBed
    ? `<rect x="138" y="200" width="22" height="16" rx="4" fill="#2563eb"/>${st.ring ? '<path d="M166 196 q10 12 0 24 M176 190 q16 18 0 36" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>' : ''}
       <text class="lbl small" x="150" y="${st.ring ? 150 : 170}" text-anchor="middle">${st.ring ? L.ring : L.unit}</text>
       <path d="M200 236 L232 290" stroke="#64748b" stroke-dasharray="4 3"/><text class="lbl small" x="236" y="304">${L.sensor}</text>`
    : '';
  const parent = st.parent
    ? `<g><circle cx="320" cy="120" r="20" fill="#e7b99c"/><rect x="302" y="140" width="36" height="80" rx="12" fill="var(--accent)"/><rect x="306" y="218" width="12" height="44" rx="4" fill="#475569"/><rect x="322" y="218" width="12" height="44" rx="4" fill="#475569"/>
       <path d="M304 160 L240 196" stroke="#e7b99c" stroke-width="8" stroke-linecap="round"/></g>` : '';
  const toilet = `<g><rect x="512" y="200" width="44" height="60" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/><ellipse cx="520" cy="236" rx="26" ry="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/></g>`;
  const cal = st.stars != null
    ? `<g transform="translate(400 20)"><rect width="180" height="86" rx="8" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
       <text class="lbl small" x="90" y="16" text-anchor="middle">${L.chart}</text>
       ${Array.from({ length: 14 }, (_, i) => `<text x="${16 + (i % 7) * 25}" y="${44 + Math.floor(i / 7) * 28}" font-size="18" text-anchor="middle">${i < st.stars ? '⭐' : '▫️'}</text>`).join('')}</g>` : '';
  const glass = st.glass
    ? `<g transform="translate(250 40)"><path d="M0 0 L34 0 L30 50 L4 50 Z" fill="#dbeafe" stroke="#64748b" stroke-width="2"/>${st.glass === 'no' ? '<path d="M-8 -6 L42 56 M42 -6 L-8 56" stroke="#dc2626" stroke-width="5"/>' : ''}
       <text class="lbl small" x="17" y="72" text-anchor="middle">${st.glass === 'no' ? L.noDrinks : L.lastDrink}</text></g>` : '';
  const pill = st.pill ? `<g class="pill"><rect x="150" y="60" width="54" height="22" rx="11"/><path d="M177 60 v22"/><text class="lbl small" x="177" y="102" text-anchor="middle">${L.pill}</text></g>` : '';
  const gauge = st.gauge != null
    ? `<g transform="translate(430 130)"><rect x="-16" y="0" width="32" height="110" rx="10" fill="#fff" stroke="#64748b" stroke-width="2"/>
       <rect x="-14" y="${108 - 106 * st.gauge}" width="28" height="${106 * st.gauge}" rx="8" fill="var(--urine)"/>
       <text class="lbl small" x="0" y="128" text-anchor="middle">${L.urine}</text></g>` : '';
  return `<svg class="anatomy" viewBox="0 0 600 340" role="img" aria-label="${L.room}">
    <rect x="0" y="262" width="600" height="78" fill="#f1f5f9"/>
    ${sky}${cal}${glass}${pill}
    <rect x="70" y="150" width="14" height="112" rx="4" fill="#a16207"/>
    <rect x="70" y="226" width="290" height="24" rx="6" fill="#ca8a04"/>
    <ellipse cx="114" cy="214" rx="34" ry="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
    ${kid}
    <path d="M${kidBed ? 132 : 100} 206 Q240 190 356 214 L356 232 L${kidBed ? 132 : 100} 232 Z" fill="#a5b4fc" stroke="#6366f1" stroke-width="2"/>
    ${st.wet ? '<ellipse cx="210" cy="226" rx="34" ry="7" fill="var(--urine)" opacity="0.8"/>' : ''}
    ${unit}${parent}${toilet}${gauge}
    ${st.dry ? `<g><rect x="230" y="120" width="110" height="34" rx="17" fill="#16a34a"/><text x="285" y="142" text-anchor="middle" fill="#fff" font-weight="700" font-size="18">${L.dry}</text></g>` : ''}
  </svg>`;
}

function nightSteps(viz, ctl, o, states) {
  const base = { time: 'night', kid: 'bed', ring: false, unit: false, parent: false, stars: null, wet: false, dry: false, glass: '', pill: false, gauge: null };
  return stepPlayer(ctl, states.map((st, n) => ({ caption: o.steps[n], state: { ...base, ...st } })), (st) => (viz.innerHTML = bedroom(st, o.scene)), t('common.player'));
}

const BUILD = {
  firstVisit(viz) {
    const o = T('treatment.options.firstVisit');
    viz.innerHTML = `<ul class="habit-list">${o.checks.map((h, i) => `<li><span class="icon" aria-hidden="true">${['💬', '🩺', '🧪', '📓', '💩', '🔎'][i]}</span><span>${h}</span></li>`).join('')}</ul>`;
  },

  habits(viz) {
    const o = T('treatment.options.habits');
    viz.innerHTML = `<ul class="habit-list">${o.habits.map((h, i) => `<li><span class="icon" aria-hidden="true">${['💧', '🌙', '🥤', '🚽', '💩', '🌟'][i]}</span><span>${h}</span></li>`).join('')}</ul>`;
  },

  // How a family uses the alarm, night by night, until 14 dry nights in a row.
  alarm: (viz, ctl) =>
    nightSteps(viz, ctl, T('treatment.options.alarm'), [
      { unit: true, stars: 0 },
      { unit: true, ring: true, wet: true, stars: 0 },
      { unit: true, ring: true, parent: true, wet: true, stars: 0 },
      { kid: 'toilet', parent: true, stars: 0 },
      { unit: true, parent: true, stars: 1 },
      { unit: true, time: 'morning', dry: true, stars: 8 },
      { time: 'morning', dry: true, stars: 14 },
    ]),

  // How desmopressin is taken: stop drinks, tablet at bedtime, no drinks overnight, less urine made.
  desmopressin: (viz, ctl) =>
    nightSteps(viz, ctl, T('treatment.options.desmopressin'), [
      { kid: 'toilet', glass: 'ok', time: 'night' },
      { pill: true, glass: 'no', gauge: 0 },
      { glass: 'no', gauge: 0.35 },
      { time: 'morning', gauge: 0.45, dry: true },
      { time: 'morning', dry: true, stars: 10 },
    ]),

  combined(viz) {
    const o = T('treatment.options.combined');
    viz.innerHTML = `<ul class="habit-list">${o.items.map((h, i) => `<li><span class="icon" aria-hidden="true">${['⏰', '💊', '🫧'][i]}</span><span>${h}</span></li>`).join('')}</ul>`;
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ key, ...T(`treatment.options.${key}`), build: BUILD[key] })),
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
