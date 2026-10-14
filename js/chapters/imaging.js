// Kidney and bladder tests chapter: renal bladder ultrasound, MAG3, DMSA, VCUG, uroflow and urodynamics.
// Each test tab has "What it shows" (interactive) and "Test day" (step by step).
import { t } from '../i18n.js';
import { urinaryTract, drainageChart } from '../anatomy.js';
import { refluxSide } from './vur.js';
import { segmented, toggle, modelLayout, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`imaging.${k}`);
const f = (n) => n.toFixed(1);
const addToSvg = (svg, extra) => svg.replace(/<\/svg>\s*$/, `${extra}</svg>`);

// Ultrasound probe with sound waves, aimed at (x, y) from the given angle (degrees).
function probe(x, y, angle, waves = true) {
  return `<g class="probe" transform="translate(${x} ${y}) rotate(${angle})">
    ${waves ? [18, 32, 46].map((r) => `<path class="us-wave" d="M${-r * 0.7} ${-r} Q0 ${-r - r * 0.35} ${r * 0.7} ${-r}"/>`).join('') : ''}
    <rect x="-16" y="-8" width="32" height="40" rx="8"/><rect class="probe-cord" x="-3" y="32" width="6" height="26" rx="3"/></g>`;
}

const camera = (y) => `<rect class="gamma-cam" x="120" y="${y}" width="360" height="26" rx="8"/>`;
const ivLine = () => `<g class="iv"><path d="M560 300 C 590 260 590 200 600 180"/><circle cx="560" cy="300" r="5"/></g>`;

// Shared test-tab builder: mode switch between the interactive view and the step player.
function testSection(key, buildShows, stepStates, drawStep) {
  return (root) => {
    const { viz, ctl, explain } = modelLayout(root, T(`${key}.intro`));
    const facts = () => `<h3>${T('factsTitle')}</h3><ul class="facts">${T(`${key}.facts`).map((x) => `<li>${x}</li>`).join('')}</ul>`;
    const shows = document.createElement('div');
    shows.className = 'controls';
    const day = document.createElement('div');
    day.className = 'controls';
    let stop = null;
    const showMode = (m) => {
      stop?.();
      stop = null;
      shows.style.display = m === 'shows' ? '' : 'none';
      day.style.display = m === 'shows' ? 'none' : '';
      if (m === 'shows') {
        shows.innerHTML = '';
        buildShows(viz, shows, explain, facts);
      } else {
        day.innerHTML = '';
        const captions = T(`${key}.steps`);
        const steps = stepStates.map((st, n) => ({ caption: captions[n], state: st }));
        stop = stepPlayer(day, steps, (st) => (viz.innerHTML = drawStep(st)), t('common.player'));
        explain.innerHTML = facts();
      }
    };
    ctl.append(segmented('', [['shows', T('modes.shows')], ['day', T('modes.day')]], 'shows', showMode), shows, day);
    showMode('shows');
    return () => stop?.();
  };
}

// ---------- Renal bladder ultrasound ----------

const US_VIEWS = {
  normal: { affected: { pelvisFill: 1 }, bladderWall: 0 },
  hydro: { affected: { pelvisDilation: 0.75, blunt: 0.4, pelvisFill: 1 }, bladderWall: 0 },
  wall: { affected: { pelvisFill: 1 }, bladderWall: 0.9 },
};

const ultrasound = testSection(
  'ultrasound',
  (viz, ctl, explain, facts) => {
    const o = T('ultrasound.shows');
    const s = { view: 'normal', after: false };
    const draw = () => {
      const v = US_VIEWS[s.view];
      const fill = s.after ? (s.view === 'wall' ? 0.45 : 0.08) : 0.85;
      viz.innerHTML = addToSvg(urinaryTract({ ...v, bladderFill: fill }), probe(520, 70, 225) + probe(300, 300, 180));
      explain.innerHTML = `<p>${o.texts[s.view]}</p>${s.after ? `<div class="callout"><p>${o.afterText}</p></div>` : ''}${facts()}`;
    };
    ctl.append(
      segmented(o.label, Object.entries(o.views), s.view, (v) => { s.view = v; draw(); }),
      toggle(o.after, false, (v) => { s.after = v; draw(); }),
    );
    draw();
  },
  [
    { fill: 0.85, k: false, b: false },
    { fill: 0.85, k: false, b: false, gel: true },
    { fill: 0.85, k: true, b: false, gel: true },
    { fill: 0.85, k: false, b: true, gel: true },
    { fill: 0.1, k: false, b: true, gel: true },
  ],
  (st) => addToSvg(urinaryTract({ affected: { pelvisFill: 1 }, bladderFill: st.fill }),
    (st.k ? probe(520, 70, 225) : '') + (st.b ? probe(300, 300, 180) : '') + (st.gel && !st.k && !st.b ? probe(560, 360, 200, false) : '')),
);

// ---------- MAG3 ----------

const SPLITS = { even: [50, 50], mild: [42, 58], low: [25, 75] };

const mag3 = testSection(
  'mag3',
  (viz, ctl, explain, facts) => {
    const o = T('mag3.shows');
    const s = { pattern: 'normal', split: 'even' };
    const draw = () => {
      const [l, r] = SPLITS[s.split];
      viz.innerHTML = `${drainageChart(s.pattern, o.chart)}
        <div class="split"><span class="split-label">${o.splitTitle}</span>
          <div class="split-bar"><span style="width:${l}%">${o.left} ${l}%</span><span class="${r - l > 20 ? 'warn' : ''}" style="width:${r}%">${o.right} ${r}%</span></div></div>`;
      explain.innerHTML = `<p>${o.patternTexts[s.pattern]}</p><div class="callout"><p>${o.splitTexts[s.split]}</p></div>${facts()}`;
    };
    ctl.append(
      segmented(o.patternLabel, Object.entries(o.patterns), s.pattern, (v) => { s.pattern = v; draw(); }),
      segmented(o.splitLabel, Object.entries(o.splits), s.split, (v) => { s.split = v; draw(); }),
    );
    draw();
  },
  [
    { iv: true },
    { iv: true, cath: true },
    { iv: true, cath: true, cam: true, k: 0.6 },
    { iv: true, cath: true, cam: true, k: 0.9, flow: 'down' },
    { iv: true, cath: true, cam: true, k: 0.3, flow: 'down', lasix: true },
    {},
  ],
  (st) => addToSvg(
    urinaryTract({
      affected: { pelvisFill: st.k ?? 1, flow: st.flow ?? '' }, healthy: { pelvisFill: st.k ?? 1, flow: st.flow ?? '' },
      bladderFill: st.cath ? 0.15 : 0.5, catheter: !!st.cath,
    }),
    (st.cam ? camera(4) : '') + (st.iv ? ivLine() : '') + (st.lasix ? `<text class="lbl small accent-text" x="560" y="170" text-anchor="end">Lasix</text>` : ''),
  ),
);

// ---------- DMSA ----------

// Back-view scan picture: tracer shows healthy kidney tissue; scars are missing spots.
function dmsaPicture({ scar = false, infection = false, text }) {
  // Bean shape: oval with the notch (hilum) facing the spine in the middle.
  const kidney = (cx, side) =>
    `<ellipse class="dmsa-k" cx="${cx}" cy="165" rx="52" ry="92"/><ellipse class="dmsa-hilum" cx="${cx - side * 48}" cy="170" rx="16" ry="26"/>`;
  const [l, r] = scar ? [42, 58] : infection ? [46, 54] : [50, 50];
  return `<svg class="anatomy dmsa" viewBox="0 0 400 330" role="img" aria-label="${text.title}">
    <rect class="dmsa-bg" x="0" y="0" width="400" height="330" rx="12"/>
    ${kidney(110, -1)}${kidney(290, 1)}
    ${scar ? `<path class="dmsa-gap" d="M58 128 C 60 104 72 86 88 78 L 92 112 Z"/>` : ''}
    ${infection ? `<ellipse class="dmsa-pale" cx="88" cy="210" rx="26" ry="36"/>` : ''}
    <text class="dmsa-lbl" x="110" y="300" text-anchor="middle">${text.left} ${l}%</text>
    <text class="dmsa-lbl" x="290" y="300" text-anchor="middle">${text.right} ${r}%</text>
    <text class="dmsa-lbl small" x="200" y="24" text-anchor="middle">${text.view}</text>
  </svg>`;
}

const dmsa = testSection(
  'dmsa',
  (viz, ctl, explain, facts) => {
    const o = T('dmsa.shows');
    const s = { finding: 'normal' };
    const draw = () => {
      viz.innerHTML = dmsaPicture({ scar: s.finding === 'scar', infection: s.finding === 'infection', text: o.picture });
      explain.innerHTML = `<p>${o.texts[s.finding]}</p>${facts()}`;
    };
    ctl.append(segmented(o.label, Object.entries(o.findings), s.finding, (v) => { s.finding = v; draw(); }));
    draw();
  },
  [{ iv: true }, { wait: true }, { cam: true }, { pic: true }, {}],
  (st) => (st.pic
    ? dmsaPicture({ text: T('dmsa.shows.picture') })
    : addToSvg(urinaryTract({ affected: { pelvisFill: 1 }, healthy: { pelvisFill: 1 }, bladderFill: 0.4 }),
      (st.iv ? ivLine() : '') + (st.cam ? camera(4) : '') + (st.wait ? `<text class="lbl accent-text" x="300" y="40" text-anchor="middle">⏱ 2–3 h</text>` : ''))),
);

// ---------- VCUG ----------

const vcugDraw = ({ fill = 0.2, voiding = false, grade = 0, cath = true }) =>
  urinaryTract({ affected: grade ? refluxSide(grade, voiding ? 1 : 0.4) : { pelvisFill: 1 }, bladderFill: fill, catheter: cath && !voiding, voiding });

const vcug = testSection(
  'vcug',
  (viz, ctl, explain, facts) => {
    const o = T('vcug.shows');
    const STATES = { filling: { fill: 0.8 }, none: { fill: 0.25, voiding: true }, reflux: { fill: 0.25, voiding: true, grade: 3 } };
    const s = { view: 'filling' };
    const draw = () => {
      viz.innerHTML = vcugDraw(STATES[s.view]);
      explain.innerHTML = `<p>${o.texts[s.view]}</p>${facts()}`;
    };
    ctl.append(segmented(o.label, Object.entries(o.views), s.view, (v) => { s.view = v; draw(); }));
    draw();
  },
  [
    { fill: 0.2, cath: false },
    { fill: 0.2 },
    { fill: 0.75 },
    { fill: 0.2, voiding: true },
    { fill: 0.2, voiding: true, grade: 2 },
    { fill: 0.3, cath: false },
  ],
  vcugDraw,
);


// ---------- Uroflow ----------

// Flow-rate curve shapes (ICCS patterns), as flow (0..1) over time (0..1).
const FLOWS = {
  bell: (x) => Math.sin(Math.PI * x) ** 1.4,
  tower: (x) => (x < 0.12 ? x / 0.12 : Math.exp(-(x - 0.12) * 4.2)) * (x < 0.75 ? 1 : 1 - (x - 0.75) * 4),
  staccato: (x) => Math.max(0, 0.75 * Math.sin(Math.PI * x) ** 0.8 * (0.72 + 0.28 * Math.sin(x * 40))),
  interrupted: (x) => Math.max(0, Math.sin(Math.PI * ((x * 3) % 1)) * 0.75 * (Math.floor(x * 3) < 3 ? 1 : 0)),
  plateau: (x) => (x < 0.08 ? (x / 0.08) * 0.32 : x > 0.92 ? ((1 - x) / 0.08) * 0.32 : 0.32),
};

function flowChart(pattern, text) {
  const X = (v) => 60 + v * 470;
  const Y = (v) => 220 - v * 170;
  const pts = Array.from({ length: 161 }, (_, i) => i / 160).map((v) => `${f(X(v))} ${f(Y(Math.max(0, Math.min(1, FLOWS[pattern](v)))))}`);
  return `<svg class="anatomy chart" viewBox="0 0 560 260" role="img" aria-label="${text.title}">
    <line class="axis" x1="60" y1="220" x2="545" y2="220"/><line class="axis" x1="60" y1="30" x2="60" y2="220"/>
    <text class="tick" x="300" y="248" text-anchor="middle">${text.time}</text>
    <text class="tick" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">${text.flow}</text>
    <path class="flow-line" d="M${X(0)} ${Y(0)} L${pts.join(' L')} L${X(1)} ${Y(0)}"/>
  </svg>`;
}

const uroflowDraw = (st) => addToSvg(
  urinaryTract({ affected: { pelvisFill: 1 }, healthy: { pelvisFill: 1 }, bladderFill: st.fill, voiding: !!st.pee }),
  (st.funnel ? `<path class="funnel" d="M270 525 L330 525 L310 530 L290 530 Z"/>` : '') +
  (st.pads ? `<circle class="emg-pad" cx="250" cy="505" r="9"/><circle class="emg-pad" cx="350" cy="505" r="9"/>` : '') +
  (st.scan ? probe(300, 300, 180) : ''),
);

const uroflow = testSection(
  'uroflow',
  (viz, ctl, explain, facts) => {
    const o = T('uroflow.shows');
    const s = { pattern: 'bell' };
    const draw = () => {
      viz.innerHTML = flowChart(s.pattern, o.chart);
      explain.innerHTML = `<p>${o.texts[s.pattern]}</p>${facts()}`;
    };
    ctl.append(segmented(o.label, Object.entries(o.patterns), s.pattern, (v) => { s.pattern = v; draw(); }));
    draw();
  },
  [{ fill: 0.85 }, { fill: 0.85, pads: true }, { fill: 0.4, pee: true, funnel: true, pads: true }, { fill: 0.08, scan: true }, { fill: 0.3 }],
  uroflowDraw,
);

// ---------- Urodynamics ----------

// Bladder pressure (cm H2O) as the bladder fills (0..1), one example per revised UMPIRE category
// (Tanaka et al., J Pediatr Urol 2021): low < 25, intermediate 25–39 or detrusor overactivity, high ≥ 40.
const PRESSURES = {
  low: (v) => 6 + 9 * v,
  intPressure: (v) => 6 + 28 * v ** 2,
  intDO: (v) => 6 + 6 * v + 16 * Math.exp(-(((v - 0.45) / 0.05) ** 2)) + 14 * Math.exp(-(((v - 0.72) / 0.04) ** 2)),
  high: (v) => 6 + 52 * v ** 2.2,
};

function pressureChart(pattern, text) {
  const X = (v) => 70 + v * 460;
  const Y = (p) => 220 - (Math.min(p, 60) / 60) * 180;
  const pts = Array.from({ length: 121 }, (_, i) => i / 120).map((v) => `${f(X(v))} ${f(Y(PRESSURES[pattern](v)))}`);
  const band = (lo, hi, cls, label) => `<rect class="${cls}" x="70" y="${f(Y(hi))}" width="460" height="${f(Y(lo) - Y(hi))}"/>
    <text class="tick zone-lbl" x="524" y="${f(Y(hi) + 14)}" text-anchor="end">${label}</text>`;
  return `<svg class="anatomy chart" viewBox="0 0 560 260" role="img" aria-label="${text.title}">
    ${band(0, 25, 'zone-low', text.low)}${band(25, 40, 'zone-mid', text.mid)}${band(40, 60, 'zone-high', text.high)}
    ${[25, 40].map((p) => `<line class="zone-line" x1="70" y1="${f(Y(p))}" x2="530" y2="${f(Y(p))}"/><text class="tick" x="64" y="${f(Y(p) + 4)}" text-anchor="end">${p}</text>`).join('')}
    <line class="axis" x1="70" y1="220" x2="545" y2="220"/><line class="axis" x1="70" y1="40" x2="70" y2="220"/>
    <text class="tick" x="300" y="248" text-anchor="middle">${text.volume}</text>
    <text class="tick" x="20" y="130" text-anchor="middle" transform="rotate(-90 20 130)">${text.pressure}</text>
    <path class="flow-line" d="M${pts.join(' L')}"/>
  </svg>`;
}

const udsDraw = (st) => addToSvg(
  urinaryTract({ affected: { pelvisFill: 1 }, healthy: { pelvisFill: 1 }, bladderFill: st.fill, catheter: !!st.cath && !st.pee, voiding: !!st.pee }),
  (st.rectal ? `<g class="rectal"><path d="M360 530 C 370 480 380 460 392 440"/><circle cx="392" cy="440" r="6"/></g>` : '') +
  (st.pads ? `<circle class="emg-pad" cx="250" cy="505" r="9"/><circle class="emg-pad" cx="350" cy="505" r="9"/>` : '') +
  (st.filling ? `<text class="lbl small accent-text" x="300" y="300" text-anchor="middle">↓ ${T('urodynamics.shows.warm')}</text>` : ''),
);

const urodynamics = testSection(
  'urodynamics',
  (viz, ctl, explain, facts) => {
    const o = T('urodynamics.shows');
    const s = { pattern: 'low' };
    const draw = () => {
      viz.innerHTML = pressureChart(s.pattern, o.chart);
      explain.innerHTML = `<p>${o.texts[s.pattern]}</p><p class="note">${o.criteria[s.pattern]}</p><p class="note">${o.source}</p>${facts()}`;
    };
    ctl.append(segmented(o.label, Object.entries(o.patterns), s.pattern, (v) => { s.pattern = v; draw(); }));
    draw();
  },
  [
    { fill: 0.5 },
    { fill: 0.1, cath: true },
    { fill: 0.1, cath: true, rectal: true, pads: true },
    { fill: 0.8, cath: true, rectal: true, pads: true, filling: true },
    { fill: 0.3, cath: true, rectal: true, pads: true, pee: true },
    { fill: 0.2 },
  ],
  udsDraw,
);

export default {
  id: 'imaging',
  title: () => T('title'),
  sections: [
    { id: 'ultrasound', render: ultrasound },
    { id: 'mag3', render: mag3 },
    { id: 'dmsa', render: dmsa },
    { id: 'vcug', render: vcug },
    { id: 'uroflow', render: uroflow },
    { id: 'urodynamics', render: urodynamics },
    { id: 'prep', render: (root) => takeaways(root, { title: T('title'), ...T('prep') }) },
  ],
};
