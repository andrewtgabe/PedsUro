// Imaging tests chapter: renal bladder ultrasound, MAG3, DMSA and VCUG.
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

export default {
  id: 'imaging',
  title: () => T('title'),
  sections: [
    { id: 'ultrasound', render: ultrasound },
    { id: 'mag3', render: mag3 },
    { id: 'dmsa', render: dmsa },
    { id: 'vcug', render: vcug },
    { id: 'prep', render: (root) => takeaways(root, { title: T('title'), ...T('prep') }) },
  ],
};
