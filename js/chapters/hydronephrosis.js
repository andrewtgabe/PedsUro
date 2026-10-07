// Hydronephrosis chapter: overview of kidney swelling and its causes.
import { t } from '../i18n.js';
import { urinaryTract, drainageChart } from '../anatomy.js';
import { segmented, toggle, slider, modelLayout, optionTabs, takeaways } from '../ui.js';
import { refluxSide } from './vur.js';

const T = (k) => t(`hydronephrosis.${k}`);
const SEVERITY = [0.3, 0.6, 1];

// ---------- 1. How it forms ----------

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

  ctl.append(
    segmented(T('embryology.weekLabel'), stages.map((x, i) => [i, x.name]), 0, (v) => { s.stage = v; draw(); }),
    toggle(T('embryology.extra'), false, (v) => { s.extra = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

// Affected-side drawing for each cause at a given amount of swelling (0..1).
const CAUSES = {
  transient: (d) => ({ affected: { pelvisDilation: d * 0.7, blunt: d * 0.3, pelvisFill: 1, flow: 'down' } }),
  upj: (d) => ({ affected: { pelvisDilation: d, pelvisFill: 1, upj: true, mark: true, flow: 'slow' } }),
  uvj: (d) => ({ affected: { dilation: d, tort: d * 0.5, pelvisFill: 1, ureterFill: 1, uvj: true, mark: true } }),
  reflux: (d) => ({ affected: refluxSide(d < 0.5 ? 3 : d < 1 ? 4 : 5, 1), bladderFill: 0.3, voiding: true }),
  puv: (d) => {
    const side = { dilation: d, tort: d * 0.6, pelvisFill: 1, ureterFill: 1 };
    return { affected: side, healthy: side, bladderWall: 1, urethraBlock: true, bladderFill: 0.8 };
  },
};
const LINKS = { upj: 'upj', uvj: 'uvj', reflux: 'vur', puv: 'puv' };

function renderPathology(root) {
  const s = { cause: 'upj', sev: 1 };
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
      viz.innerHTML = urinaryTract({ affected: { pelvisDilation: d, blunt: d * 0.3, pelvisFill: 1, flow: 'down' } });
    };
    ctl.append(slider(o.control, { min: 0, max: 24, step: 3, value: 0, format: (v) => `${v} ${o.months}` }, draw));
    draw(0);
  },

  scan(viz, ctl) {
    const o = T('treatment.options.scan');
    const draw = (p) => (viz.innerHTML = drainageChart(p, o.chart));
    ctl.append(segmented(o.patternLabel, Object.entries(o.patterns), 'normal', draw));
    draw('normal');
  },

  vcug(viz, ctl) {
    const o = T('treatment.options.vcug');
    const draw = (dye) =>
      (viz.innerHTML = urinaryTract({ affected: refluxSide(3, dye ? 1 : 0), bladderFill: dye ? 0.35 : 0.9, voiding: dye }));
    ctl.append(toggle(o.dye, false, draw));
    draw(false);
  },

  antibiotic(viz, ctl) {
    const o = T('treatment.options.antibiotic');
    const s = { bacteria: true, dose: false };
    const draw = () =>
      (viz.innerHTML = urinaryTract({
        affected: { pelvisDilation: 0.6, pelvisFill: 1, bactPelvis: s.bacteria && !s.dose },
        bladderBact: s.bacteria ? (s.dose ? 1 : 6) : 0,
      }));
    ctl.append(
      toggle(o.bacteria, true, (v) => { s.bacteria = v; draw(); }),
      toggle(o.dose, false, (v) => { s.dose = v; draw(); }),
    );
    draw();
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
      const summary = o.links
        ? `${o.summary}</p><ul>${o.links.map(([id, txt]) => `<li><a href="#/${id}/treatment">${txt} →</a></li>`).join('')}</ul><p>`
        : o.summary;
      return { ...o, summary, build: BUILD[key] };
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
