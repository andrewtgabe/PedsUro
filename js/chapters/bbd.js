// Daytime wetting & voiding dysfunction chapter.
import { t } from '../i18n.js';
import { bladderNerves } from '../bladder.js';
import { BOWEL_BUILD, SOURCE_URL, bowelView } from './bowel.js';
import { segmented, toggle, slider, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`bbd.${k}`);
export const bladderLabels = () => t('bbd.labels');
const view = (o) => bladderNerves({ ...o, text: bladderLabels() });

// The four stages of a normal fill-and-empty cycle (shared with neurogenic).
export const CYCLE = [
  { fill: 0.3, signals: 'none' },
  { fill: 0.8, signals: 'up' },
  { fill: 0.9, signals: 'down' },
  { fill: 0.25, signals: 'down', squeeze: true, sphincter: 'open', stream: true },
];

// ---------- 1. How it works ----------

function renderEmbryology(root) {
  const cycle = T('cycle');
  const s = { i: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = view({ ...CYCLE[s.i], message: cycle[s.i].message });
    explain.innerHTML = `<h3>${s.i + 1}. ${cycle[s.i].name}</h3><p>${cycle[s.i].text}</p>`;
  };
  ctl.append(segmented(T('embryology.stepLabel'), cycle.map((c, i) => [i, `${i + 1}. ${c.name}`]), 0, (v) => { s.i = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

const TYPES = {
  overactive: { fill: 0.35, squeeze: true, shaky: true, leak: true },
  holding: { fill: 1, leak: true },
  dysfunctional: { fill: 0.6, squeeze: true, sphincter: 'tight', stream: true, thick: 0.4 },
  constipation: { fill: 0.4, stool: 1, shaky: true },
  vaginal: { fill: 0.15, leak: true },
  giggle: { fill: 0.55, squeeze: true, leak: true, message: '😂' },
};

function renderPathology(root) {
  const s = { type: 'overactive' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    viz.classList.toggle('two', s.type === 'constipation');
    if (s.type === 'vaginal') viz.innerHTML = vaginalStrip(T('pathology.vaginalScene'));
    else if (s.type === 'constipation') viz.innerHTML = `<figure>${view(TYPES.constipation)}</figure><figure>${bowelView({ stool: 1, hard: true, squeeze: true })}</figure>`;
    else viz.innerHTML = view(TYPES[s.type]);
    explain.innerHTML = `<h3>${types[s.type].name}</h3><p>${types[s.type].text}</p>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>
      ${s.type === 'constipation' ? `<p><a href="#/bbd/treatment">${T('pathology.bowelLink')} →</a></p>` : ''}`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

// Uroflow curves (time 0..1 → flow 0..1), drawn like a standard teaching chart.
const smooth = (x, a, b) => (x <= a ? 0 : x >= b ? 1 : (1 - Math.cos((Math.PI * (x - a)) / (b - a))) / 2);
const FLOWS = {
  bell: { color: '#3730a3', fn: (x) => (x < 0.5 ? 0.78 * Math.pow(Math.sin((Math.PI * x) / 0.5), 1.6) : 0) },
  tower: { color: '#eab308', fn: (x) => (x < 0.26 ? Math.pow(Math.sin((Math.PI * x) / 0.26), 0.55) : 0) },
  staccato: { color: '#2dd4bf', fn: (x) => smooth(x, 0.08, 0.3) * (1 - smooth(x, 0.68, 0.8)) * (0.6 + 0.16 * Math.sin(2 * Math.PI * (x - 0.3) / 0.13)) },
  interrupted: { color: '#7e22ce', fn: (x) => (x > 0.08 && x < 0.88 ? 0.22 * Math.pow(Math.max(0, Math.sin(Math.PI * (x - 0.08) / 0.16)), 2) : 0) },
  plateau: { color: '#b91c1c', fn: (x) => 0.17 * smooth(x, 0, 0.2) * (1 - smooth(x, 0.7, 1)) },
};
function flowCurve(sel, L) {
  const path = (fn) => {
    const pts = [];
    for (let i = 0; i <= 200; i++) { const x = i / 200; pts.push(`${(60 + x * 400).toFixed(1)} ${(220 - fn(x) * 190).toFixed(1)}`); }
    return 'M' + pts.join(' L');
  };
  const curves = Object.entries(FLOWS).map(([k, c]) =>
    `<path d="${path(c.fn)}" fill="none" stroke="${c.color}" stroke-width="${k === sel ? 5 : 2}" opacity="${k === sel ? 1 : 0.25}"/>`).join('');
  const legend = Object.entries(FLOWS).map(([k, c], i) =>
    `<g opacity="${k === sel ? 1 : 0.55}"><line x1="470" y1="${44 + i * 24}" x2="494" y2="${44 + i * 24}" stroke="${c.color}" stroke-width="4"/><text x="500" y="${49 + i * 24}" font-size="14" font-weight="${k === sel ? 700 : 400}" fill="currentColor">${L.patterns[k]}</text></g>`).join('');
  return `<svg class="anatomy chart" viewBox="0 0 600 250" role="img" aria-label="${L.chart.title}">
    <line class="axis" x1="60" y1="220" x2="460" y2="220"/><line class="axis" x1="60" y1="20" x2="60" y2="220"/>
    ${curves}${legend}
    <text class="tick" x="260" y="244" text-anchor="middle">${L.chart.time}</text>
    <text class="tick" x="24" y="120" text-anchor="middle" transform="rotate(-90 24 120)">${L.chart.flow}</text>
  </svg>`;
}

// Urine trapped in the vagina: knees together, standing up, then the fix.
function vaginalStrip(L) {
  const panel = (x, { apart, stand }) => {
    const legGap = apart ? 26 : 4;
    const body = stand
      ? `<rect x="${x + 70}" y="40" width="60" height="90" rx="20" fill="#93c5fd"/><rect x="${x + 72}" y="128" width="26" height="90" rx="10" fill="#f1cdb6"/><rect x="${x + 102}" y="128" width="26" height="90" rx="10" fill="#f1cdb6"/>
         <path d="M${x + 72} 122 L${x + 128} 122 L${x + 124} 146 L${x + 76} 146 Z" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
         <ellipse cx="${x + 100}" cy="140" rx="12" ry="5" fill="var(--urine)"/>
         ${[0, 1, 2].map((i) => `<circle cx="${x + 100}" cy="${158 + i * 14}" r="3.5" fill="var(--urine)"/>`).join('')}`
      : `<rect x="${x + 70}" y="36" width="60" height="80" rx="20" fill="#93c5fd"/>
         <rect x="${x + 100 - legGap / 2 - 30}" y="112" width="30" height="64" rx="10" fill="#f1cdb6"/><rect x="${x + 100 + legGap / 2}" y="112" width="30" height="64" rx="10" fill="#f1cdb6"/>
         <path d="M${x + 58} 176 L${x + 142} 176 L${x + 130} 230 L${x + 70} 230 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
         ${apart ? `<path d="M${x + 100} 120 L${x + 100} 206" stroke="var(--urine)" stroke-width="5"/>` : `<ellipse cx="${x + 100}" cy="118" rx="9" ry="6" fill="var(--urine)"/><path d="M${x + 100} 124 L${x + 100} 150" stroke="var(--urine)" stroke-width="3" stroke-dasharray="4 4"/>`}`;
    return body;
  };
  const caps = [L.together, L.stand, L.apart];
  return `<svg class="anatomy" viewBox="0 0 600 280" role="img" aria-label="${L.together}">
    ${panel(0, { apart: false })}${panel(200, { stand: true })}${panel(400, { apart: true })}
    ${caps.map((c, i) => `<text class="lbl small" x="${100 + i * 200}" y="258" text-anchor="middle">${c}</text>`).join('')}
    <text x="${100 + 400}" y="30" font-size="24" text-anchor="middle">✅</text>
    <text class="lbl small accent-text" x="100" y="106" text-anchor="middle">${L.pools}</text>
  </svg>`;
}

// Pelvic floor therapy screen: muscle activity (stickers) and a simple game.
function therapyScreen(st, L) {
  const pts = [];
  for (let i = 0; i <= 80; i++) {
    const x = 30 + i * 3.4;
    const y = 70 + (Math.sin(i * 1.7) * 26 + Math.sin(i * 0.6) * 10) * st.emg;
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `<svg class="anatomy" viewBox="0 0 320 250" role="img" aria-label="${L.screen}">
    <rect x="10" y="10" width="300" height="190" rx="12" fill="#0f172a"/>
    <text x="24" y="34" fill="#94a3b8" font-size="13">${L.muscle}</text>
    <path d="M${pts.join(' L')}" fill="none" stroke="${st.emg > 0.4 ? '#f87171' : '#4ade80'}" stroke-width="3"/>
    ${st.game ? `<text x="${60 + 180 * st.game}" y="170" font-size="30">🚀</text><text x="24" y="190" fill="#94a3b8" font-size="12">${L.game}</text>` : ''}
    <rect x="140" y="200" width="40" height="18" fill="#334155"/><rect x="100" y="218" width="120" height="10" rx="4" fill="#334155"/>
    ${st.stickers ? `<g><circle cx="270" cy="236" r="7" fill="#fde68a" stroke="#ca8a04"/><circle cx="290" cy="236" r="7" fill="#fde68a" stroke="#ca8a04"/><text x="248" y="240" font-size="11" text-anchor="end" fill="currentColor">${L.stickers}</text></g>` : ''}
  </svg>`;
}

const iconList = (items, icons) => `<ul class="habit-list">${items.map((h, i) => `<li><span class="icon" aria-hidden="true">${icons[i]}</span><span>${h}</span></li>`).join('')}</ul>`;

const BUILD = {
  // First visit: a uroflow curve, with the full checklist in the side panel.
  firstVisit(viz, ctl) {
    const o = T('treatment.options.firstVisit');
    const note = document.createElement('div');
    const draw = (k) => {
      viz.innerHTML = flowCurve(k, o);
      note.innerHTML = `<div class="callout ${k === 'bell' ? 'good' : ''}"><p><strong>${o.patterns[k]}:</strong> ${o.meanings[k]}</p></div>`;
    };
    ctl.append(segmented(o.patternLabel, Object.entries(o.patterns), 'bell', draw), note);
    draw('bell');
  },

  schedule(viz) {
    const o = T('treatment.options.schedule');
    viz.innerHTML = iconList(o.habits, ['⏰', '🏫', '💧', '🦶', '🧘']);
  },

  // Constipation care, from the former bowel and bladder dysfunction chapter.
  ...BOWEL_BUILD,

  // Pelvic floor therapy, step by step: stickers, a screen game, relaxing while peeing, a smooth stream.
  biofeedback(viz, ctl) {
    const o = T('treatment.options.biofeedback');
    viz.classList.add('two');
    const states = [
      { emg: 1, game: 0, stickers: false, bladder: TYPES.dysfunctional },
      { emg: 1, game: 0, stickers: true, bladder: { fill: 0.6 } },
      { emg: 0.5, game: 0.5, stickers: true, bladder: { fill: 0.6 } },
      { emg: 0.15, game: 1, stickers: true, bladder: { fill: 0.45, squeeze: true, sphincter: 'open', stream: true } },
      { emg: 0.05, game: 0, stickers: false, bladder: CYCLE[3] },
    ];
    const stop = stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state })), (st) => {
      viz.innerHTML = `<figure>${view(st.bladder)}</figure><figure>${therapyScreen(st, o.scene)}</figure>`;
    }, t('common.player'));
    return () => { stop?.(); viz.classList.remove('two'); };
  },

  medicine(viz, ctl) {
    const o = T('treatment.options.medicine');
    const draw = (on) => (viz.innerHTML = view(on ? { fill: 0.6 } : TYPES.overactive));
    ctl.append(toggle(o.dose, false, draw));
    draw(false);
  },

  more(viz) {
    const o = T('treatment.options.more');
    viz.innerHTML = iconList(o.items, ['⚡', '🦶', '💊']);
  },
};

function renderTreatment(root) {
  const text = (key) => {
    if (!(key in BOWEL_BUILD)) return T(`treatment.options.${key}`);
    const o = t(`bowel.treatment.options.${key}`);
    return key === 'seattle' ? { ...o, summary: `${o.summary}</p><p class="note"><a href="${SOURCE_URL}" target="_blank" rel="noopener">${o.source}</a>` } : o;
  };
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ key, ...text(key), build: BUILD[key] })),
  );
}

export default {
  id: 'bbd',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
