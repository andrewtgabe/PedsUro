// Bowel and bladder dysfunction (BBD) chapter.
import { t } from '../i18n.js';
import { pelvisSide, bristolChart } from '../bladder.js';
import { segmented, toggle, slider, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`bowel.${k}`);
const labels = () => T('labels');
const view = (o) => pelvisSide({ ...o, text: labels() });

// ---------- 1. How it builds up ----------

const STAGES = [
  { stool: 0 },
  { stool: 0.35, hard: true },
  { stool: 0.8, hard: true, squeeze: true },
  { stool: 1, hard: true, squeeze: true, soil: true },
];

function renderEmbryology(root) {
  const steps = T('embryology.steps');
  const s = { i: 0, stool: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;
  const draw = () => {
    viz.innerHTML = view({ ...STAGES[s.i], stool: s.stool });
    explain.innerHTML = `<h3>${s.i + 1}. ${steps[s.i].name}</h3><p>${steps[s.i].text}</p>`;
  };
  ctl.append(segmented(T('embryology.stepLabel'), steps.map((x, i) => [i, `${i + 1}. ${x.name}`]), 0, (v) => {
    stop?.();
    s.i = v;
    const from = s.stool;
    stop = animate(900, (k) => { s.stool = from + (STAGES[v].stool - from) * k; draw(); });
  }));
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { full: 2, hard: true };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = () => {
    const stool = [0, 0.3, 0.65, 1][s.full];
    viz.innerHTML = view({ stool, hard: s.hard && stool > 0, squeeze: s.full >= 2, leak: s.full === 3, soil: s.full === 3 });
    explain.innerHTML = `<div class="callout ${s.full >= 2 ? 'warn' : 'good'}"><p>${T('pathology.texts')[s.full]}</p></div>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>
      <p><a href="#/bbd/pathology">${T('pathology.link')} →</a></p>`;
  };
  ctl.append(
    segmented(T('pathology.fullLabel'), T('pathology.full').map((n, i) => [i, n]), s.full, (v) => { s.full = v; draw(); }),
    toggle(T('pathology.hard'), true, (v) => { s.hard = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  cleanout(viz, ctl) {
    const o = T('treatment.options.cleanout');
    const draw = (d) => (viz.innerHTML = view({ stool: 1 - d / 4, hard: d < 2, squeeze: d < 2 }));
    ctl.append(slider(o.control, { min: 0, max: 4, step: 1, value: 0, format: (v) => `${v} ${o.days}` }, draw));
    draw(0);
  },
  maintenance: (viz) => { viz.innerHTML = view({ stool: 0.15 }); },
  routine: (viz) => { viz.innerHTML = view({ stool: 0.15 }); },
  goal(viz, ctl) {
    const o = T('treatment.options.goal');
    const note = document.createElement('p');
    note.className = 'step-caption';
    const draw = (n) => {
      viz.innerHTML = bristolChart(n, labels());
      note.textContent = o.types[n - 1];
    };
    ctl.append(segmented(o.typeLabel, [1, 2, 3, 4, 5, 6, 7].map((n) => [n, String(n)]), 4, draw), note);
    draw(4);
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
  id: 'bowel',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
