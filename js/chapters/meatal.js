// Meatal stenosis chapter.
import { t } from '../i18n.js';
import { penisSide } from '../genital.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

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
  // Step by step; meatus (opening width) animates between steps.
  meatotomy(viz, ctl) {
    const base = { meatus: 0.9, pee: false, ventral: 0, meatusStitches: false, tipCream: false };
    const states = [
      { pee: true },
      {},
      { ventral: 1 },
      { meatus: 0, ventral: 2 },
      { meatus: 0, meatusStitches: true },
      { meatus: 0, tipCream: true },
      { meatus: 0, pee: true },
    ];
    const captions = T('treatment.options.meatotomy.steps');
    const steps = states.map((st, n) => ({ caption: captions[n], state: { ...base, ...st } }));
    return stepPlayer(ctl, steps, (st) => (viz.innerHTML = view(st)), t('common.player'));
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
