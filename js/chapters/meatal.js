// Meatal stenosis chapter.
import { t } from '../i18n.js';
import { penisSide } from '../genital.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`meatal.${k}`);
const labels = () => T('labels');
const view = (o) => penisSide({ circumcised: true, ...o, text: labels() });

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const times = T('embryology.times');
  const s = { i: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    const st = times[s.i];
    viz.innerHTML = view({ meatus: st.meatus, sore: st.sore });
    explain.innerHTML = `<h3>${st.name}</h3><p>${st.text}</p><p class="note">${T('embryology.note')}</p>`;
  };
  ctl.append(segmented(T('embryology.timeLabel'), times.map((x, i) => [i, x.name]), 0, (v) => { s.i = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { mode: 'narrow', pee: true };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = () => {
    viz.innerHTML = view({ meatus: s.mode === 'narrow' ? 0.9 : 0, pee: s.pee });
    explain.innerHTML = `<div class="callout ${s.mode === 'narrow' ? 'warn' : 'good'}"><p>${T(`pathology.texts.${s.mode}`)}</p></div>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(
    segmented(T('pathology.modeLabel'), Object.entries(T('pathology.modes')), s.mode, (v) => { s.mode = v; draw(); }),
    toggle(T('pathology.pee'), true, (v) => { s.pee = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  meatotomy(viz, ctl) {
    const o = T('treatment.options.meatotomy');
    const s = { k: 0, pee: true };
    let stop = null;
    const draw = () => (viz.innerHTML = view({ meatus: 0.9 * (1 - s.k), pee: s.pee }));
    ctl.append(
      segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
        stop?.();
        const from = s.k;
        stop = animate(900, (e) => { s.k = from + (v - from) * e; draw(); });
      }),
      toggle(o.pee, true, (v) => { s.pee = v; draw(); }),
    );
    draw();
    return () => stop?.();
  },
  aftercare: (viz) => { viz.innerHTML = view({ meatus: 0 }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'meatal',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
