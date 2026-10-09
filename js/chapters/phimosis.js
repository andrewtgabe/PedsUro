// Phimosis & paraphimosis chapter.
import { t } from '../i18n.js';
import { penisSide } from '../genital.js';
import { segmented, toggle, slider, button, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`phimosis.${k}`);
const labels = () => T('labels');
const pct = (v) => `${Math.round(v * 100)}%`;

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const ages = T('embryology.ages');
  const s = { age: 0, pull: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = penisSide({ pull: s.pull, limit: ages[s.age].limit, text: labels() });
    explain.innerHTML = `<h3>${ages[s.age].name}</h3><p>${ages[s.age].text}</p>
      <div class="callout warn"><p>${T('embryology.note')}</p></div>`;
  };
  ctl.append(
    segmented(T('embryology.ageLabel'), ages.map((a, i) => [i, a.name]), 0, (v) => { s.age = v; draw(); }),
    slider(T('embryology.pullLabel'), { min: 0, max: 1, step: 0.05, value: 0, format: pct }, (v) => { s.pull = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

const TYPES = {
  normal: { limit: 0.3 },
  balloon: { limit: 0.08 },
  scarred: { limit: 0.08, scar: true },
  para: { trapped: true },
};

function renderPathology(root) {
  const s = { type: 'balloon', pee: true, pull: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    viz.innerHTML = penisSide({ ...TYPES[s.type], pull: s.pull, pee: s.pee && s.type !== 'para', text: labels() });
    explain.innerHTML = `<div class="callout ${s.type === 'para' || s.type === 'scarred' ? 'warn' : ''}"><strong>${types[s.type].name}</strong><p>${types[s.type].text}</p></div>`;
  };
  ctl.append(
    segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }),
    toggle(T('pathology.pee'), true, (v) => { s.pee = v; draw(); }),
    slider(T('pathology.pullLabel'), { min: 0, max: 1, step: 0.05, value: 0, format: pct }, (v) => { s.pull = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step-by-step treatments. pull and limit animate between steps.
const PROC_BASE = { pull: 0, limit: 0.08, shiny: false, cream: false, slit: false, stitches: false, mark: false, widened: false, circumcised: false };
const PROCS = {
  steroid: [
    {},
    { pull: 1, shiny: true },
    { pull: 1, shiny: true, cream: true },
    { cream: true },
    { pull: 1, limit: 0.5, shiny: true, cream: true },
    { pull: 1, limit: 1 },
    { limit: 1 },
  ],
  preputioplasty: [
    {},
    { pull: 1 },
    { pull: 1, slit: true },
    { pull: 1, limit: 1, widened: true, stitches: true },
    { limit: 1, widened: true },
  ],
  circumcision: [
    {},
    { mark: true },
    { circumcised: true },
    { circumcised: true, stitches: true },
    { circumcised: true },
  ],
};
const procedure = (key) => (viz, ctl) => {
  const captions = T(`treatment.options.${key}.steps`);
  const steps = PROCS[key].map((st, n) => ({ caption: captions[n], state: { ...PROC_BASE, ...st } }));
  return stepPlayer(ctl, steps, (st) => (viz.innerHTML = penisSide({ ...st, text: labels() })), t('common.player'));
};

const BUILD = {
  care: (viz) => { viz.innerHTML = penisSide({ limit: 0.3, text: labels() }); },
  steroid: procedure('steroid'),
  preputioplasty: procedure('preputioplasty'),
  circumcision: procedure('circumcision'),
  reduction(viz, ctl) {
    const o = T('treatment.options.reduction');
    let stop = null;
    const draw = (k) => (viz.innerHTML = k < 0.6 ? penisSide({ trapped: true, text: labels() }) : penisSide({ limit: 1, pull: 1 - (k - 0.6) / 0.4, text: labels() }));
    ctl.append(button(o.action, () => { stop?.(); stop = animate(1600, draw); }));
    draw(0);
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
  id: 'phimosis',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
