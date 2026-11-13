// Hydronephrosis chapter: overview of kidney swelling and its causes.
import { t } from '../i18n.js';
import { urinaryTract, drainageChart } from '../anatomy.js';
import { segmented, toggle, slider, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { refluxSide } from './vur.js';

const T = (k) => t(`hydronephrosis.${k}`);
const SEVERITY = [0.3, 0.6, 1];

// ---------- Why it happens (shown last) ----------

// Kidneys start small and low, then move up and grow.
const STAGES = [
  { kidney: { s: 0.45, dy: 230 }, flow: '' },
  { kidney: { s: 0.7, dy: 10 }, flow: 'down' },
  { kidney: { s: 0.85, dy: 0 }, flow: 'down' },
  { kidney: { s: 1, dy: 0 }, flow: 'down' },
];

function renderEmbryology(root) {
  const s = { stage: 0, extra: false };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const stages = T('embryology.stages');

  const draw = () => {
    const st = STAGES[s.stage];
    const showExtra = s.extra && s.stage >= 2;
    const urine = s.stage >= 1 ? 1 : 0;
    viz.innerHTML = urinaryTract({
      healthy: { kidney: st.kidney, flow: st.flow, pelvisFill: urine },
      affected: { kidney: st.kidney, flow: st.flow, pelvisFill: urine, pelvisDilation: showExtra ? 0.5 : 0 },
      bladderFill: 0.3 + 0.15 * s.stage,
      labels: s.stage > 0,
    });
    const stage = stages[s.stage];
    explain.innerHTML = `<h3>${stage.name}: ${stage.title}</h3><p>${stage.text}</p>
      ${showExtra ? `<div class="callout warn"><p>${T('embryology.extraText')}</p></div>` : ''}`;
  };

  // Growth view (default) or the step-through of temporary (physiologic) hydronephrosis.
  const growth = document.createElement('div');
  growth.className = 'controls';
  // Extra fluid can only be seen from the week-20 ultrasound on.
  const extra = toggle(T('embryology.extra'), false, (v) => { s.extra = v; draw(); });
  extra.hidden = true;
  growth.append(
    segmented(T('embryology.weekLabel'), stages.map((x, i) => [i, x.name]), 0, (v) => { s.stage = v; extra.hidden = v < 2; draw(); }),
    extra,
  );
  const transient = document.createElement('div');
  transient.className = 'controls';
  let stop = null;
  const showTransient = () => {
    const tr = T('embryology.transient');
    const states = [
      { d: 0.6, w: 4, flow: 'slow' },
      { d: 0.35, w: 7, flow: 'down' },
      { d: 0, w: 12, flow: 'down' },
    ];
    const steps = states.map((st, n) => ({ caption: `<strong>${tr.steps[n].name}:</strong> ${tr.steps[n].text}`, state: st }));
    transient.innerHTML = '';
    stop = stepPlayer(transient, steps, (st) => {
      viz.innerHTML = urinaryTract({
        healthy: { pelvisFill: 1, flow: 'down' },
        affected: { pelvisDilation: st.d, blunt: st.d * 0.3, pelvisFill: 1, upj: st.w < 11, narrowW: st.w, flow: st.flow },
        bladderFill: 0.6,
      });
    }, t('common.player'));
    explain.innerHTML = `<h3>${tr.title}</h3><p>${tr.text}</p>`;
  };
  ctl.append(
    segmented('', [['growth', T('embryology.modes.growth')], ['transient', T('embryology.modes.transient')]], 'growth', (v) => {
      stop?.();
      stop = null;
      growth.style.display = v === 'growth' ? '' : 'none';
      transient.style.display = v === 'growth' ? 'none' : '';
      if (v === 'growth') draw();
      else showTransient();
    }),
    growth,
    transient,
  );
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

// Affected-side drawing for each cause at a given amount of swelling (0..1).
// Arrows show the path of urine: normal, slowed at a narrow spot, or flowing backward.
const NORMAL = { mode: 'down' };
const CAUSES = {
  transient: (d) => ({ healthy: { arrows: NORMAL }, affected: { pelvisDilation: d * 0.7, blunt: d * 0.3, pelvisFill: 1, arrows: NORMAL }, urethraArrows: 'down' }),
  upj: (d) => ({
    healthy: { arrows: NORMAL },
    affected: { pelvisDilation: d, pelvisFill: 1, upj: true, mark: true, arrows: [{ mode: 'slow', kidney: true, from: 0.03, to: 0.2 }, { mode: 'down', from: 0.31 }] },
    urethraArrows: 'down',
  }),
  uvj: (d) => ({
    healthy: { arrows: NORMAL },
    affected: { dilation: d, tort: d * 0.5, pelvisFill: 1, ureterFill: 1, uvj: true, mark: true, arrows: { mode: 'slow' } },
    urethraArrows: 'down',
  }),
  reflux: (d) => ({
    healthy: { arrows: NORMAL },
    affected: { ...refluxSide(d < 0.5 ? 3 : d < 1 ? 4 : 5, 1), arrows: { mode: 'up' } },
    bladderFill: 0.3,
    voiding: true,
    urethraArrows: 'down',
  }),
  puv: (d) => {
    const side = { dilation: d, tort: d * 0.6, pelvisFill: 1, ureterFill: 1, arrows: { mode: 'slow' } };
    return { affected: side, healthy: side, bladderWall: 1, urethraBlock: true, bladderFill: 0.8, urethraArrows: 'slow' };
  },
};
const LINKS = { upj: 'upj', uvj: 'uvj', reflux: 'vur', puv: 'puv' };

function renderPathology(root) {
  const s = { cause: 'transient', sev: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const causes = T('pathology.causes');
  const sevNames = T('pathology.severity');

  const draw = () => {
    viz.innerHTML = urinaryTract(CAUSES[s.cause](SEVERITY[s.sev]));
    const c = causes[s.cause];
    const link = LINKS[s.cause];
    explain.innerHTML = `<h3>${c.name}</h3><p>${c.text}</p>
      ${link ? `<p><a href="#/${link}/pathology">${T('pathology.learnMore')}: ${t(`${link}.title`)} →</a></p>` : ''}
      <div class="callout"><p>${T('pathology.severityText')[s.sev]}</p></div>`;
  };

  ctl.append(
    segmented(T('pathology.causeLabel'), Object.entries(causes).map(([k, v]) => [k, v.name]), s.cause, (v) => { s.cause = v; draw(); }),
    segmented(T('pathology.severityLabel'), sevNames.map((n, i) => [i, n]), s.sev, (v) => { s.sev = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  watch(viz, ctl) {
    const o = T('treatment.options.watch');
    const draw = (m) => {
      const d = 0.65 * (1 - m / 24) + 0.05;
      viz.innerHTML = urinaryTract({ affected: { pelvisDilation: d, blunt: d * 0.3, pelvisFill: 1 } });
    };
    ctl.append(slider(o.control, { min: 0, max: 24, step: 3, value: 0, format: (v) => `${v} ${o.months}` }, draw));
    draw(0);
  },

  // Drainage scan: IV, catheter, tracer, camera pictures, each kidney's share, then the drainage curve.
  scan(viz, ctl) {
    const o = T('treatment.options.scan');
    viz.innerHTML = '<div data-anim></div><div data-chart></div>';
    const anim = viz.querySelector('[data-anim]');
    const chart = viz.querySelector('[data-chart]');
    const roi = (cx, text) =>
      `<g class="roi"><ellipse cx="${cx}" cy="125" rx="72" ry="102"/><text class="lbl" x="${cx}" y="252" text-anchor="middle">${text} 50%</text></g>`;
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
        (st.roi ? roi(145, o.left) + roi(455, o.right) : '');
      anim.innerHTML = urinaryTract({ affected: side, healthy: side, bladderFill: st.bf, catheter: !!st.cath, labels: !st.roi }).replace(/<\/svg>\s*$/, `${extra}</svg>`);
    };
    const stop = stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state })), draw, t('common.player'));
    const drawChart = (p) => (chart.innerHTML = drainageChart(p, o.chart));
    ctl.append(segmented(o.patternLabel, Object.entries(o.patterns), 'normal', drawChart));
    drawChart('normal');
    return stop;
  },

  // VCUG: catheter, two fill-and-pee cycles, X-ray pictures of the bladder and kidneys.
  vcug(viz, ctl) {
    const o = T('treatment.options.vcug');
    const states = [
      { fill: 0.15, reflux: 0, cath: true, shot: '' },
      { fill: 0.9, reflux: 0, cath: true, shot: 'bladder' },
      { fill: 0.9, reflux: 0.3, cath: true, shot: 'kidneys' },
      { fill: 0.3, reflux: 1, cath: true, pee: true, shot: 'both' },
      { fill: 0.9, reflux: 0.4, cath: true, shot: 'bladder' },
      { fill: 0.3, reflux: 1, cath: true, pee: true, shot: 'both' },
      { fill: 0.4, reflux: 0, shot: '' },
    ];
    const frames = { bladder: [190, 320, 220, 200], kidneys: [330, 20, 250, 250], both: [12, 12, 576, 512] };
    const draw = (st) => {
      const svg = urinaryTract({ affected: refluxSide(3, st.reflux), bladderFill: st.fill, catheter: st.cath, voiding: st.pee });
      const fr = frames[st.shot];
      const box = fr
        ? `<g class="xray-frame"><rect x="${fr[0]}" y="${fr[1]}" width="${fr[2]}" height="${fr[3]}" rx="10"/><text class="lbl small" x="${fr[0] + 8}" y="${fr[1] + 20}">${o.xray}</text></g>`
        : '';
      viz.innerHTML = svg.replace(/<\/svg>\s*$/, `${box}</svg>`);
    };
    return stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state })), draw, t('common.player'));
  },

  // Bacteria climb from the urethra to the kidney; a daily low-dose antibiotic keeps them from multiplying.
  antibiotic(viz, ctl) {
    const o = T('treatment.options.antibiotic');
    const pill = `<g class="pill"><rect x="30" y="470" width="64" height="26" rx="13"/><path d="M62 470 v26"/><text class="lbl small" x="104" y="488">${o.dose}</text></g>`;
    const states = [
      // Each step lists urethra: later steps inherit unset keys from the first one.
      { urethra: true, bact: 0, spread: 0 },
      { urethra: false, bact: 3, spread: 0 },
      { urethra: false, bact: 8, spread: 0.6 },
      { urethra: false, bact: 8, spread: 1, sick: true },
      { urethra: false, bact: 3, spread: 0, med: true },
      { urethra: false, bact: 2, spread: 0, med: true },
      { urethra: false, bact: 0, spread: 0, med: true },
    ];
    const draw = (st) => {
      const svg = urinaryTract({
        affected: { pelvisDilation: 0.6, pelvisFill: 1, bactSpread: st.spread, inflamed: !!st.sick },
        bladderBact: Math.round(st.bact),
        urethraBact: !!st.urethra,
      });
      viz.innerHTML = st.med ? svg.replace(/<\/svg>\s*$/, `${pill}</svg>`) : svg;
    };
    return stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state })), draw, t('common.player'));
  },

  surgery(viz) {
    viz.innerHTML = urinaryTract(CAUSES.upj(1));
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => {
      const o = T(`treatment.options.${key}`);
      let summary = o.links
        ? `${o.summary}</p><ul>${o.links.map(([id, txt]) => `<li><a href="#/${id}/treatment">${txt} →</a></li>`).join('')}</ul><p>`
        : o.summary;
      if (o.newborn) summary += `</p><div class="callout"><p>${o.newborn}</p></div><p>`;
      return { key, ...o, summary, build: BUILD[key] };
    }),
  );
}

export default {
  id: 'hydronephrosis',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
