// Step animations shared by more than one chapter: VCUG, contrast ultrasound (ceVUS), and
// how bacteria reach the kidney with and without a daily preventive antibiotic.
import { t } from './i18n.js';
import { urinaryTract, bladderGeom, drainageChart } from './anatomy.js';
import { stepPlayer, segmented } from './ui.js';
import { refluxSide } from './chapters/vur.js';

const addToSvg = (svg, extra) => svg.replace(/<\/svg>\s*$/, `${extra}</svg>`);
const play = (ctl, captions, states, draw) =>
  stepPlayer(ctl, states.map((state, n) => ({ caption: captions[n], state })), draw, t('common.player'));

// Two fill-and-pee cycles; the regions being pictured are outlined.
const VCUG_STATES = [
  { fill: 0.15, reflux: 0, cath: true, shot: '' },
  { fill: 0.9, reflux: 0, cath: true, shot: 'bladder' },
  { fill: 0.9, reflux: 0.3, cath: true, shot: 'kidneys' },
  { fill: 0.3, reflux: 1, cath: true, pee: true, shot: 'both' },
  { fill: 0.9, reflux: 0.4, cath: true, shot: 'bladder' },
  { fill: 0.3, reflux: 1, cath: true, pee: true, shot: 'both' },
  { fill: 0.4, reflux: 0, shot: '' },
];
const FRAMES = { bladder: [190, 320, 220, 200], kidneys: [330, 20, 250, 250], both: [12, 12, 576, 512] };

//   o: { steps, xray }
export function vcugPlayer(viz, ctl, o) {
  return play(ctl, o.steps, VCUG_STATES, (st) => {
    const fr = FRAMES[st.shot];
    const box = fr
      ? `<g class="xray-frame"><rect x="${fr[0]}" y="${fr[1]}" width="${fr[2]}" height="${fr[3]}" rx="10"/><text class="lbl small" x="${fr[0] + 8}" y="${fr[1] + 20}">${o.xray}</text></g>`
      : '';
    viz.innerHTML = addToSvg(urinaryTract({ affected: refluxSide(3, st.reflux), bladderFill: st.fill, catheter: st.cath, voiding: st.pee }), box);
  });
}

// ceVUS: the same fill-and-pee test, but with tiny bubbles and an ultrasound probe instead of X-rays.
const CEVUS_STATES = [
  { fill: 0.15, reflux: 0, cath: true, probe: '' },
  { fill: 0.9, reflux: 0, cath: true, probe: 'bladder', bubbles: true },
  { fill: 0.9, reflux: 0.3, cath: true, probe: 'kidney', bubbles: true },
  { fill: 0.3, reflux: 1, cath: true, pee: true, probe: 'kidney', bubbles: true },
  { fill: 0.4, reflux: 0, probe: '' },
];
const PROBES = { bladder: [300, 300, 0], kidney: [566, 150, 70] };
export const ultrasoundProbe = ([x, y, a], label) => `<g class="probe" transform="translate(${x} ${y}) rotate(${a})">
    ${[16, 28, 40].map((r) => `<path class="us-wave" d="M${-r * 0.7} ${r} Q0 ${r + r * 0.35} ${r * 0.7} ${r}"/>`).join('')}
    <rect x="-16" y="-40" width="32" height="40" rx="8"/><rect class="probe-cord" x="-3" y="-66" width="6" height="26" rx="3"/></g>
  <text class="lbl small" x="${a ? x - 6 : x + 26}" y="${a ? y + 60 : y - 20}" text-anchor="${a ? 'end' : 'start'}">${label}</text>`;
// Bubble spots inside the bladder, as fractions of its half-width and half-height.
const BUBBLES = [[-0.5, -0.2], [0.1, -0.4], [0.55, 0], [-0.2, 0.3], [0.3, 0.45], [-0.6, 0.25], [0.05, 0.05]];

//   o: { steps, probe }
export function cevusPlayer(viz, ctl, o) {
  return play(ctl, o.steps, CEVUS_STATES, (st) => {
    const g = bladderGeom(st.fill);
    const pts = st.bubbles ? BUBBLES.map(([dx, dy]) => [g.cx + dx * g.rx, g.cy + dy * g.ry]) : [];
    // Bubbles that reach the kidney's collecting area mean reflux.
    if (st.bubbles && st.reflux > 0.5) pts.push([414, 128], [404, 118], [424, 140], [418, 112]);
    const bubbles = pts.map(([x, y]) => `<circle class="bubble" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"/>`).join('');
    const p = PROBES[st.probe];
    viz.innerHTML = addToSvg(
      urinaryTract({ affected: refluxSide(3, st.reflux), bladderFill: st.fill, catheter: st.cath, voiding: st.pee }),
      bubbles + (p ? ultrasoundProbe(p, o.probe) : ''),
    );
  });
}

// Bacteria climb from the urethra to the kidney; a daily low-dose antibiotic keeps them from multiplying.
//   o: { steps, dose }; side({ spread, sick }) returns the drawing for the affected side.
const INFECTION_STATES = [
  // Each step lists urethra: later steps inherit unset keys from the first one.
  { urethra: true, bact: 0, spread: 0 },
  { urethra: false, bact: 3, spread: 0 },
  { urethra: false, bact: 8, spread: 0.6 },
  { urethra: false, bact: 8, spread: 1, sick: true },
  { urethra: false, bact: 3, spread: 0, med: true },
  { urethra: false, bact: 2, spread: 0, med: true },
  { urethra: false, bact: 0, spread: 0, med: true },
];
export function infectionPlayer(viz, ctl, o, side) {
  const pill = `<g class="pill"><rect x="30" y="470" width="64" height="26" rx="13"/><path d="M62 470 v26"/><text class="lbl small" x="104" y="488">${o.dose}</text></g>`;
  return play(ctl, o.steps, INFECTION_STATES, (st) => {
    const svg = urinaryTract({ affected: side({ spread: st.spread, sick: !!st.sick }), bladderBact: Math.round(st.bact), urethraBact: !!st.urethra });
    viz.innerHTML = st.med ? addToSvg(svg, pill) : svg;
  });
}

// Kidney drainage (MAG3) scan: IV, catheter, tracer, camera pictures, each kidney's share,
// then the drainage curve.
//   o: { steps, left, right, patternLabel, patterns, chart }
//   opts: split [left %, right %]; pattern: starting curve; affected(st): drawing for the right side.
export function scanPlayer(viz, ctl, o, { split = [50, 50], pattern = 'normal', affected } = {}) {
  viz.innerHTML = '<div data-anim></div><div data-chart></div>';
  const anim = viz.querySelector('[data-anim]');
  const chart = viz.querySelector('[data-chart]');
  const roi = (cx, text, pct) =>
    `<g class="roi"><ellipse cx="${cx}" cy="125" rx="72" ry="102"/><text class="lbl" x="${cx}" y="252" text-anchor="middle">${text} ${pct}%</text></g>`;
  const states = [
    { iv: true, k: 0, bf: 0.5 },
    { iv: true, cath: true, k: 0, bf: 0.15 },
    { iv: true, cath: true, cam: true, k: 0.7, bf: 0.15 },
    { iv: true, cath: true, cam: true, k: 0.9, bf: 0.15, roi: true },
    { iv: true, cath: true, cam: true, k: 0.6, bf: 0.15, flow: 'down' },
    { iv: true, cath: true, cam: true, k: 0.2, bf: 0.15, flow: 'down', lasix: true },
  ];
  const draw = (st) => {
    const side = { pelvisFill: st.k, flow: st.flow || '' };
    const extra =
      (st.cam ? '<rect class="gamma-cam" x="120" y="4" width="360" height="26" rx="8"/>' : '') +
      (st.iv ? '<g class="iv"><path d="M560 300 C 590 260 590 200 600 180"/><circle cx="560" cy="300" r="5"/></g>' : '') +
      (st.lasix ? '<text class="lbl small accent-text" x="560" y="170" text-anchor="end">Lasix</text>' : '') +
      (st.roi ? roi(145, o.left, split[0]) + roi(455, o.right, split[1]) : '');
    anim.innerHTML = addToSvg(
      urinaryTract({ affected: affected ? affected(st) : side, healthy: side, bladderFill: st.bf, catheter: !!st.cath, labels: !st.roi }),
      extra,
    );
  };
  const stop = stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state })), draw, t('common.player'));
  const drawChart = (p) => (chart.innerHTML = drainageChart(p, o.chart));
  ctl.append(segmented(o.patternLabel, Object.entries(o.patterns), pattern, drawChart));
  drawChart(pattern);
  return stop;
}
