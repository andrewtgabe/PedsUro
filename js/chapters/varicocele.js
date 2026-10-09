// Varicocele chapter.
import { t } from '../i18n.js';
import { veinMap } from '../genital.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`varicocele.${k}`);
const labels = () => T('labels');

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { valves: 'leaky' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = veinMap({ grade: s.valves === 'leaky' ? 2 : 0, text: labels() });
    explain.innerHTML = `<div class="callout ${s.valves === 'leaky' ? 'warn' : 'good'}"><p>${T(`embryology.texts.${s.valves}`)}</p></div>
      <h3>${T('embryology.whyTitle')}</h3><ul>${T('embryology.why').map((x) => `<li>${x}</li>`).join('')}</ul>
      <p class="note">${T('embryology.note')}</p>`;
  };
  ctl.append(segmented(T('embryology.valvesLabel'), Object.entries(T('embryology.valves')), s.valves, (v) => { s.valves = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { grade: 2, strain: false, small: false };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const grades = T('pathology.grades');
  const draw = () => {
    viz.innerHTML = veinMap({ grade: s.grade, strain: s.strain, small: s.small ? 1 : 0, text: labels() });
    explain.innerHTML = `<h3>${grades[s.grade].name}</h3><p>${grades[s.grade].text}</p>
      ${s.strain ? `<div class="callout"><p>${T('pathology.strainText')}</p></div>` : ''}
      ${s.small ? `<div class="callout warn"><p>${T('pathology.smallText')}</p></div>` : ''}
      <h3>${T('pathology.whyTitle')}</h3><ul>${T('pathology.whyList').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(
    segmented(T('pathology.gradeLabel'), grades.map((g, i) => [i, g.name]), s.grade, (v) => { s.grade = v; draw(); }),
    toggle(T('pathology.strain'), false, (v) => { s.strain = v; draw(); }),
    toggle(T('pathology.small'), false, (v) => { s.small = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step-by-step treatments. grade, small and cath animate between steps.
const PROC_BASE = { grade: 2.5, small: 1, tied: false, coils: false, tieAt: 330, cord: false, lymphDye: false, ports: false, incision: false, microscope: false, cath: 0, venogram: false };
const AFTER = { grade: 0, small: 0.4 };
const PROCS = {
  laparoscopic: [
    {},
    { ports: true },
    { ports: true, cord: true, lymphDye: true },
    { ports: true, cord: true, lymphDye: true, tied: true, tieAt: 296 },
    { cord: true, tied: true, tieAt: 296, ...AFTER },
    { tied: true, tieAt: 296, ...AFTER },
  ],
  microsurgical: [
    {},
    { incision: true },
    { incision: true, cord: true, microscope: true },
    { incision: true, cord: true, microscope: true, tied: true, tieAt: 342 },
    { cord: true, tied: true, tieAt: 342, ...AFTER },
    { tied: true, tieAt: 342, ...AFTER },
  ],
  embolization: [
    {},
    { cath: 0.3 },
    { cath: 1 },
    { cath: 1, venogram: true },
    { cath: 1, coils: true },
    { coils: true, ...AFTER },
  ],
};

function procedure(viz, ctl, key) {
  const captions = T(key === 'embolization' ? 'treatment.options.embolization.steps' : `treatment.options.surgery.${key}Steps`);
  const steps = PROCS[key].map((st, n) => ({ caption: captions[n], state: { ...PROC_BASE, ...st } }));
  return stepPlayer(ctl, steps, (st) => (viz.innerHTML = veinMap({ ...st, text: labels() })), t('common.player'));
}

const BUILD = {
  watch: (viz) => { viz.innerHTML = veinMap({ grade: 2, text: labels() }); },
  surgery(viz, ctl) {
    const o = T('treatment.options.surgery');
    const holder = document.createElement('div');
    holder.className = 'controls';
    let stop = null;
    const build = (key) => { stop?.(); holder.innerHTML = ''; stop = procedure(viz, holder, key); };
    ctl.append(segmented(o.approachLabel, Object.entries(o.approaches), 'microsurgical', build), holder);
    build('microsurgical');
    return () => stop?.();
  },
  embolization: (viz, ctl) => procedure(viz, ctl, 'embolization'),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'varicocele',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
