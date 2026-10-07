// Varicocele chapter.
import { t } from '../i18n.js';
import { veinMap } from '../genital.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

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

function beforeAfter(viz, ctl, o, key) {
  let k = 0;
  let stop = null;
  const draw = () => (viz.innerHTML = veinMap({ grade: 3 * (1 - k), [key]: k > 0.5, small: 1 - 0.6 * k, text: labels() }));
  ctl.append(segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
    stop?.();
    const from = k;
    stop = animate(1000, (e) => { k = from + (v - from) * e; draw(); });
  }));
  draw();
  return () => stop?.();
}

const BUILD = {
  watch: (viz) => { viz.innerHTML = veinMap({ grade: 2, text: labels() }); },
  surgery: (viz, ctl) => beforeAfter(viz, ctl, T('treatment.options.surgery'), 'tied'),
  embolization: (viz, ctl) => beforeAfter(viz, ctl, T('treatment.options.embolization'), 'coils'),
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
