// Labial adhesions chapter.
import { t } from '../i18n.js';
import { vulvaFront } from '../genital.js';
import { segmented, toggle, slider, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`labial.${k}`);
const labels = () => T('labels');
const pct = (v) => `${Math.round(v * 100)}%`;

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const steps = T('embryology.steps');
  const s = { i: 0, fused: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;
  const draw = () => {
    viz.innerHTML = vulvaFront({ fused: s.fused, text: labels() });
    explain.innerHTML = `<h3>${steps[s.i].name}</h3><p>${steps[s.i].text}</p><p class="note">${T('embryology.note')}</p>`;
  };
  ctl.append(segmented(T('embryology.stepLabel'), steps.map((x, i) => [i, x.name]), 0, (v) => {
    stop?.();
    s.i = v;
    const from = s.fused;
    stop = animate(1000, (e) => { s.fused = from + (steps[v].fused - from) * e; draw(); });
  }));
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { fused: 0.85, pee: true };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = () => {
    viz.innerHTML = vulvaFront({ ...s, text: labels() });
    explain.innerHTML = `<div class="callout ${s.fused > 0.4 ? 'warn' : 'good'}"><p>${T(s.fused > 0.4 ? 'pathology.large' : 'pathology.small')}</p></div>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(
    slider(T('pathology.amountLabel'), { min: 0, max: 1, step: 0.05, value: s.fused, format: pct }, (v) => { s.fused = v; draw(); }),
    toggle(T('pathology.pee'), true, (v) => { s.pee = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  watch: (viz) => { viz.innerHTML = vulvaFront({ fused: 0.3, text: labels() }); },
  estrogen(viz, ctl) {
    const o = T('treatment.options.estrogen');
    const draw = (w) => (viz.innerHTML = vulvaFront({ fused: 0.85 * (1 - w / 6), text: labels() }));
    ctl.append(slider(o.control, { min: 0, max: 6, step: 1, value: 0, format: (v) => `${v} ${o.weeks}` }, draw));
    draw(0);
  },
  separation(viz, ctl) {
    const o = T('treatment.options.separation');
    let k = 0;
    let stop = null;
    const draw = () => (viz.innerHTML = vulvaFront({ fused: 0.85 * (1 - k), text: labels() }));
    ctl.append(segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
      stop?.();
      const from = k;
      stop = animate(900, (e) => { k = from + (v - from) * e; draw(); });
    }));
    draw();
    return () => stop?.();
  },
  aftercare: (viz) => { viz.innerHTML = vulvaFront({ fused: 0, text: labels() }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'labial',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
