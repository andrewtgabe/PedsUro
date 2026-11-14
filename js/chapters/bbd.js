// Daytime wetting & voiding dysfunction chapter.
import { t } from '../i18n.js';
import { bladderNerves } from '../bladder.js';
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
    viz.innerHTML = view(TYPES[s.type]);
    explain.innerHTML = `<h3>${types[s.type].name}</h3><p>${types[s.type].text}</p>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>
      <p><a href="#/bowel/pathology">${T('pathology.bowelLink')} →</a></p>`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

// Uroflow curve: how fast urine comes out over time. Normal is a smooth bell; stop-start is jagged.
function flowCurve(kind, L) {
  const pts = [];
  for (let i = 0; i <= 60; i++) {
    const x = i / 60;
    let y = Math.sin(Math.PI * x);
    if (kind === 'staccato') y *= 0.55 + 0.45 * Math.abs(Math.sin(x * 22));
    if (kind === 'interrupted') y = Math.max(0, Math.sin(Math.PI * ((x * 3) % 1))) * 0.8;
    pts.push(`${(60 + x * 460).toFixed(1)} ${(210 - y * 150).toFixed(1)}`);
  }
  return `<svg class="anatomy chart" viewBox="0 0 560 250" role="img" aria-label="${L.title}">
    <line class="axis" x1="60" y1="210" x2="540" y2="210"/><line class="axis" x1="60" y1="40" x2="60" y2="210"/>
    <path class="curve on" d="M${pts.join(' L')}" style="stroke:${kind === 'normal' ? '#16a34a' : '#dc2626'}"/>
    <text class="tick" x="300" y="234" text-anchor="middle">${L.time}</text>
    <text class="tick" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">${L.flow}</text>
    <text class="lbl" x="300" y="28" text-anchor="middle">${L.title}</text>
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
    const draw = (k) => (viz.innerHTML = flowCurve(k, o.chart));
    ctl.append(segmented(o.patternLabel, Object.entries(o.patterns), 'normal', draw));
    draw('normal');
  },

  schedule(viz) {
    const o = T('treatment.options.schedule');
    viz.innerHTML = iconList(o.habits, ['⏰', '🏫', '💧', '🦶', '🧘']);
  },

  constipation(viz, ctl) {
    const o = T('treatment.options.constipation');
    const draw = (w) => (viz.innerHTML = view({ fill: 0.4, stool: 1 - w / 8, shaky: w < 4 }));
    ctl.append(slider(o.control, { min: 0, max: 8, step: 1, value: 0, format: (v) => `${v} ${o.weeks}` }, draw));
    draw(0);
  },

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
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ key, ...T(`treatment.options.${key}`), build: BUILD[key] })),
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
