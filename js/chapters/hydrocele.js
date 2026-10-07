// Hydrocele chapter. Its "how it forms" model is shared with the hernia chapter.
import { t } from '../i18n.js';
import { sacView } from '../genital.js';
import { segmented, toggle, slider, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`hydrocele.${k}`);
export const sacLabels = () => t('hydrocele.labels');

// ---------- 1. How it forms (shared) ----------

const OUTCOMES = {
  closed: { opening: 'closed' },
  fluid: { opening: 'closed', fluid: 0.6 },
  thin: { opening: 'thin', fluid: 0.5 },
  wide: { opening: 'wide', bowel: 0.8 },
};

export function renderPouchEmbryology(root, intro, start) {
  const s = { outcome: start };
  const { viz, ctl, explain } = modelLayout(root, intro);
  const outcomes = T('embryology.outcomes');
  const draw = () => {
    viz.innerHTML = sacView({ ...OUTCOMES[s.outcome], text: sacLabels() });
    explain.innerHTML = `<h3>${outcomes[s.outcome].name}</h3><p>${outcomes[s.outcome].text}</p>`;
  };
  ctl.append(segmented(T('embryology.outcomeLabel'), Object.entries(outcomes).map(([k, v]) => [k, v.name]), s.outcome, (v) => { s.outcome = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { type: 'simple', time: 'evening', light: false };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const timeCtl = document.createElement('div');

  const draw = () => {
    const comm = s.type === 'communicating';
    const fluid = comm ? (s.time === 'evening' ? 0.85 : 0.25) : 0.6;
    viz.innerHTML = sacView({ opening: comm ? 'thin' : 'closed', fluid, light: s.light, text: sacLabels() });
    timeCtl.hidden = !comm;
    explain.innerHTML = `<h3>${types[s.type].name}</h3><p>${types[s.type].text}</p>
      ${s.light ? `<div class="callout good"><p>${T('pathology.lightText')}</p></div>` : ''}`;
  };

  timeCtl.append(segmented(T('pathology.timeLabel'), Object.entries(T('pathology.times')), s.time, (v) => { s.time = v; draw(); }));
  ctl.append(
    segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }),
    timeCtl,
    toggle(T('pathology.light'), false, (v) => { s.light = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  watch(viz, ctl) {
    const o = T('treatment.options.watch');
    const draw = (m) => (viz.innerHTML = sacView({ opening: 'closed', fluid: 0.7 * (1 - m / 18), text: sacLabels() }));
    ctl.append(slider(o.control, { min: 0, max: 18, step: 3, value: 0, format: (v) => `${v} ${o.months}` }, draw));
    draw(0);
  },
  surgery(viz, ctl) {
    const o = T('treatment.options.surgery');
    let k = 0;
    let stop = null;
    const draw = () => (viz.innerHTML = sacView({ opening: 'thin', fluid: 0.8 * (1 - k), tied: k > 0.5, text: sacLabels() }));
    ctl.append(segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
      stop?.();
      const from = k;
      stop = animate(900, (e) => { k = from + (v - from) * e; draw(); });
    }));
    draw();
    return () => stop?.();
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
  id: 'hydrocele',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: (root) => renderPouchEmbryology(root, T('embryology.intro'), 'fluid') },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
