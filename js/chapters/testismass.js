// Testicular mass chapter.
import { t } from '../i18n.js';
import { testisCells, massView } from '../genital.js';
import { segmented, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`testismass.${k}`);
const labels = () => T('labels');

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { tissue: 'germ' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const tissues = T('embryology.tissues');
  const draw = () => {
    viz.innerHTML = testisCells({ highlight: s.tissue, text: labels() });
    explain.innerHTML = `<h3>${tissues[s.tissue].name}</h3><p>${tissues[s.tissue].text}</p>
      <div class="callout"><p>${T('embryology.ages')}</p></div>
      <p class="note">${T('embryology.note')}</p>`;
  };
  ctl.append(segmented(T('embryology.tissueLabel'), Object.entries(tissues).map(([k, v]) => [k, v.name]), s.tissue, (v) => { s.tissue = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

// What each type looks like in the drawing.
const LOOK = {
  teratoma: { kind: 'teratoma', size: 0.5 },
  yolkSac: { kind: 'solid', size: 0.7 },
  epidermoid: { kind: 'cyst', size: 0.45 },
  stromal: { kind: 'solid', size: 0.35 },
  gct: { kind: 'solid', size: 0.75 },
  other: { kind: 'para', size: 0.6 },
};

function renderPathology(root) {
  const s = { age: 'young', type: 'teratoma' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const ages = T('pathology.ages');
  const types = T('pathology.types');
  const typeHolder = document.createElement('div');
  const draw = () => {
    const ty = types[s.type];
    viz.innerHTML = massView({ ...LOOK[s.type], text: labels() });
    explain.innerHTML = `<h3>${ty.name}</h3><p>${ty.text}</p>
      <div class="callout ${ty.cancer ? 'warn' : 'good'}"><p><strong>${ty.verdict}</strong></p></div>
      <h3>${T('pathology.testsTitle')}</h3><ul>${T('pathology.tests').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  const buildTypes = () => {
    typeHolder.innerHTML = '';
    const keys = ages[s.age].types;
    if (!keys.includes(s.type)) s.type = keys[0];
    typeHolder.append(segmented(T('pathology.typeLabel'), keys.map((k) => [k, types[k].name]), s.type, (v) => { s.type = v; draw(); }));
  };
  ctl.append(
    segmented(T('pathology.ageLabel'), Object.entries(ages).map(([k, v]) => [k, v.name]), s.age, (v) => { s.age = v; buildTypes(); draw(); }),
    typeHolder,
  );
  buildTypes();
  draw();
}

// ---------- 3. Treatment ----------

const PROC_BASE = { kind: 'solid', size: 0.5, incision: false, clamp: false, delivered: 0, repaired: false, tied: false, removed: false, prosthesis: false };
const PROCS = {
  partial: [
    { kind: 'teratoma' },
    { kind: 'teratoma', incision: true },
    { kind: 'teratoma', incision: true, clamp: true },
    { kind: 'teratoma', incision: true, clamp: true, delivered: 1 },
    { incision: true, clamp: true, delivered: 1, repaired: true },
    { incision: true, repaired: true },
    { repaired: true },
  ],
  radical: [
    { size: 0.7 },
    { size: 0.7, incision: true },
    { size: 0.7, incision: true, clamp: true },
    { size: 0.7, incision: true, clamp: true, delivered: 1 },
    { incision: true, tied: true, removed: true },
    { tied: true, removed: true, prosthesis: true },
  ],
};

const procedure = (key) => (viz, ctl) => {
  const captions = T(`treatment.options.${key}.steps`);
  const steps = PROCS[key].map((st, n) => ({ caption: captions[n], state: { ...PROC_BASE, ...st } }));
  return stepPlayer(ctl, steps, (st) => (viz.innerHTML = massView({ ...st, text: labels() })), t('common.player'));
};

const BUILD = {
  partial: procedure('partial'),
  radical: procedure('radical'),
  after: (viz) => { viz.innerHTML = massView({ removed: true, tied: true, text: labels() }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'testismass',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
