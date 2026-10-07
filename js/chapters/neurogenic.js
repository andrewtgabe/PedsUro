// Neurogenic bladder chapter.
import { t } from '../i18n.js';
import { bladderNerves } from '../bladder.js';
import { segmented, toggle, button, animate, modelLayout, optionTabs, takeaways } from '../ui.js';
import { bladderLabels } from './bbd.js';

const T = (k) => t(`neurogenic.${k}`);
const view = (o) => bladderNerves({ ...o, text: bladderLabels() });

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { cause: 'blocked' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const causes = T('embryology.causes');
  const draw = () => {
    const blocked = s.cause === 'blocked';
    viz.innerHTML = view({ fill: 0.8, signals: 'both', lesion: blocked });
    explain.innerHTML = `<div class="callout ${blocked ? 'warn' : 'good'}"><p>${causes[s.cause].text}</p></div>
      <h3>${T('embryology.whyTitle')}</h3><ul>${T('embryology.why').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(segmented(T('embryology.causeLabel'), Object.entries(causes).map(([k, v]) => [k, v.name]), s.cause, (v) => { s.cause = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

const TYPES = {
  high: { view: { fill: 0.5, squeeze: true, shaky: true, sphincter: 'tight', thick: 1, lesion: true, signals: 'up' }, pressure: 95 },
  leaky: { view: { fill: 0.2, sphincter: 'weak', leak: true, lesion: true, signals: 'up' }, pressure: 20 },
  floppy: { view: { fill: 1, leak: true, lesion: true, signals: 'up' }, pressure: 45 },
};

const meter = (pct) => {
  const color = pct > 70 ? 'var(--warn)' : pct > 35 ? '#c9962b' : 'var(--good)';
  return `<div class="meter"><span style="width:${pct}%;background:${color}"></span></div>`;
};

function renderPathology(root) {
  const s = { type: 'high' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    const ty = TYPES[s.type];
    viz.innerHTML = view(ty.view);
    explain.innerHTML = `<h3>${types[s.type].name}</h3><p>${types[s.type].text}</p>
      <p>${T('pathology.pressureLabel')}</p>${meter(ty.pressure)}
      <p class="note">${T('pathology.bowel')}</p>`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

const HIGH = TYPES.high.view;

function beforeAfter(viz, ctl, o, after) {
  const draw = (v) => (viz.innerHTML = view(v ? after : HIGH));
  ctl.append(segmented('', [[0, o.before], [1, o.after]], 0, draw));
  draw(0);
}

const BUILD = {
  cic(viz, ctl) {
    const o = T('treatment.options.cic');
    let stop = null;
    const draw = (fill, cath) => (viz.innerHTML = view({ fill, catheter: cath, lesion: true, thick: 0.5 }));
    ctl.append(button(o.action, () => {
      stop?.();
      stop = animate(2000, (k) => draw(0.9 * (1 - k) + 0.05, k < 0.98));
    }));
    draw(0.9, false);
    return () => stop?.();
  },
  medicine(viz, ctl) {
    const o = T('treatment.options.medicine');
    const draw = (on) => (viz.innerHTML = view(on ? { fill: 0.7, lesion: true, thick: 0.5 } : HIGH));
    ctl.append(toggle(o.dose, false, draw));
    draw(false);
  },
  botox: (viz, ctl) => beforeAfter(viz, ctl, T('treatment.options.botox'), { fill: 0.7, lesion: true, thick: 0.5 }),
  augment: (viz, ctl) => beforeAfter(viz, ctl, T('treatment.options.augment'), { fill: 0.7, lesion: true, thick: 0.3, augment: true }),
  channel: (viz, ctl) => beforeAfter(viz, ctl, T('treatment.options.channel'), { fill: 0.6, lesion: true, thick: 0.3, channel: true }),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'neurogenic',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
