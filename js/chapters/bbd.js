// Daytime wetting & voiding dysfunction chapter.
import { t } from '../i18n.js';
import { bladderNerves } from '../bladder.js';
import { segmented, toggle, slider, modelLayout, optionTabs, takeaways } from '../ui.js';

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
};

function renderPathology(root) {
  const s = { type: 'overactive' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    viz.innerHTML = view(TYPES[s.type]);
    explain.innerHTML = `<h3>${types[s.type].name}</h3><p>${types[s.type].text}</p>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  schedule: (viz) => { viz.innerHTML = view(CYCLE[3]); },
  constipation(viz, ctl) {
    const o = T('treatment.options.constipation');
    const draw = (w) => (viz.innerHTML = view({ fill: 0.4, stool: 1 - w / 8, shaky: w < 4 }));
    ctl.append(slider(o.control, { min: 0, max: 8, step: 1, value: 0, format: (v) => `${v} ${o.weeks}` }, draw));
    draw(0);
  },
  biofeedback(viz, ctl) {
    const o = T('treatment.options.biofeedback');
    const draw = (v) => (viz.innerHTML = view(v ? CYCLE[3] : TYPES.dysfunctional));
    ctl.append(segmented('', [[0, o.before], [1, o.after]], 0, draw));
    draw(0);
  },
  medicine(viz, ctl) {
    const o = T('treatment.options.medicine');
    const draw = (on) => (viz.innerHTML = view(on ? { fill: 0.6 } : TYPES.overactive));
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
  id: 'bbd',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
