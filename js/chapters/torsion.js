// Testicular torsion chapter.
import { t } from '../i18n.js';
import { clamp } from '../anatomy.js';
import { testisSide } from '../genital.js';
import { segmented, toggle, slider, button, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`torsion.${k}`);
const labels = () => T('embryology.labels');

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { shape: 'bell', twist: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;

  const draw = () => {
    viz.innerHTML = testisSide({ bellClapper: s.shape === 'bell', twist: s.twist, text: labels() });
    explain.innerHTML = `<div class="callout ${s.shape === 'bell' ? 'warn' : 'good'}"><p>${T(`embryology.texts.${s.shape}`)}</p></div>
      <p class="note">${T('embryology.note')}</p>`;
  };

  // A typical testicle only wiggles; a bell-clapper one spins all the way.
  const spin = () => {
    stop?.();
    const max = s.shape === 'bell' ? 540 : 40;
    stop = animate(2400, (k) => {
      s.twist = max * Math.sin(Math.PI * k);
      draw();
    });
  };

  ctl.append(
    segmented(T('embryology.shapeLabel'), Object.entries(T('embryology.shapes')), s.shape, (v) => { s.shape = v; s.twist = 0; draw(); }),
    button(`↻ ${T('embryology.spin')}`, spin),
  );
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { twist: 360, hours: 2 };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));

  const draw = () => {
    const blocked = s.twist >= 360;
    const isch = blocked ? clamp(s.hours / 24) : clamp(s.twist / 360) * clamp(s.hours / 48);
    viz.innerHTML = testisSide({ bellClapper: true, twist: s.twist, isch, text: labels() });
    const [, chance] = T('pathology.saved').find(([h]) => s.hours <= h);
    const pct = blocked ? 100 - 92 * clamp(s.hours / 24) : 100;
    const color = pct > 70 ? 'var(--good)' : pct > 35 ? '#c9962b' : 'var(--warn)';
    explain.innerHTML = `
      <p><strong>${blocked ? T('pathology.flowClosed') : T('pathology.flowOpen')}</strong></p>
      ${blocked ? `<p>${T('pathology.savedLabel')}: <strong>${chance}</strong></p><div class="meter"><span style="width:${pct}%;background:${color}"></span></div><p class="note">${T('pathology.savedNote')}</p>` : ''}
      <div class="callout warn"><strong>${T('pathology.signsTitle')}</strong><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul></div>
      <p class="note"><strong>${T('pathology.noteTitle')}:</strong> ${T('pathology.note')}</p>`;
  };

  ctl.append(
    slider(T('pathology.twistLabel'), { min: 0, max: 720, step: 90, value: s.twist, format: (v) => `${v}°` }, (v) => { s.twist = v; draw(); }),
    slider(T('pathology.hoursLabel'), { min: 0, max: 30, step: 1, value: s.hours, format: (v) => `${v} ${T('pathology.hoursUnit')}` }, (v) => { s.hours = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step-by-step surgery; twist and isch (color) animate between steps.
const PROC_BASE = { twist: 540, isch: 0.4, incision: false, stitches: false, removed: false, prosthesis: false };
function procedure(key, states) {
  return (viz, ctl) => {
    const captions = T(`treatment.options.${key}.steps`);
    const steps = states.map((st, n) => ({ caption: captions[n], state: { ...PROC_BASE, ...st } }));
    return stepPlayer(ctl, steps, (st) => (viz.innerHTML = testisSide({ bellClapper: true, ...st, text: labels() })), t('common.player'));
  };
}

const BUILD = {
  surgery: procedure('surgery', [
    {},
    { incision: true },
    { incision: true },
    { incision: true, twist: 0 },
    { incision: true, twist: 0, isch: 0 },
    { twist: 0, isch: 0, stitches: true },
    { twist: 0, isch: 0, stitches: true },
  ]),

  manual(viz, ctl) {
    const o = T('treatment.options.manual');
    const s = { twist: 360, isch: 0.25 };
    const draw = () => (viz.innerHTML = testisSide({ bellClapper: true, ...s, text: labels() }));
    let stop = null;
    ctl.append(
      button(`↺ ${o.action}`, () => {
        stop?.();
        s.twist = 360;
        stop = animate(1500, (k) => { s.twist = 360 * (1 - k); s.isch = 0.25 * (1 - k); draw(); });
      }),
    );
    draw();
    return () => stop?.();
  },

  removal: procedure('removal', [
    { twist: 720, isch: 1 },
    { twist: 720, isch: 1, incision: true },
    { twist: 0, isch: 1, incision: true },
    { twist: 0, isch: 1, removed: true },
    { twist: 0, isch: 1, removed: true, prosthesis: true },
  ]),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'torsion',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
