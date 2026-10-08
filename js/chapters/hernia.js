// Inguinal hernia chapter.
import { t } from '../i18n.js';
import { sacView } from '../genital.js';
import { segmented, toggle, button, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { renderPouchEmbryology, sacLabels } from './hydrocele.js';

const T = (k) => t(`hernia.${k}`);

// ---------- 2. What's happening ----------

const STATES = { in: { bowel: 0 }, out: { bowel: 0.8 }, stuck: { bowel: 0.9, stuck: true } };

function renderPathology(root) {
  const s = { state: 'out', light: false };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const states = T('pathology.states');
  const draw = () => {
    viz.innerHTML = sacView({ opening: 'wide', ...STATES[s.state], light: s.light, text: sacLabels() });
    explain.innerHTML = `<div class="callout ${s.state === 'stuck' ? 'warn' : ''}"><strong>${states[s.state].name}</strong><p>${states[s.state].text}</p></div>
      ${s.light ? `<p class="note">${T('pathology.lightText')}</p>` : ''}`;
  };
  ctl.append(
    segmented(T('pathology.stateLabel'), Object.entries(states).map(([k, v]) => [k, v.name]), s.state, (v) => { s.state = v; draw(); }),
    toggle(T('pathology.light'), false, (v) => { s.light = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step-by-step hernia repairs. Each state is drawn with the pouch drawing.
const REPAIR_BASE = { opening: 'wide', bowel: 0.8, tied: false, keepPouch: false, incision: false, skinStitches: false, spot: '', scope: false };
const OPEN_STEPS = [
  { incision: true },
  { incision: true, spot: 'pouch' },
  { incision: true, spot: 'pouch', bowel: 0 },
  { incision: true, bowel: 0, tied: true, keepPouch: true, spot: 'ring' },
  { incision: true, bowel: 0, tied: true, skinStitches: true },
];
const LAP_STEPS = [
  { scope: true },
  { scope: true, spot: 'ring' },
  { scope: true, spot: 'ring', bowel: 0 },
  { scope: true, bowel: 0, tied: true },
  { bowel: 0, tied: true },
];

function repairSteps(viz, ctl, key, states) {
  const captions = T(`treatment.options.${key}.steps`);
  const steps = states.map((st, n) => ({ caption: captions[n], state: { ...REPAIR_BASE, ...st } }));
  return stepPlayer(ctl, steps, (s) => (viz.innerHTML = sacView({ ...s, text: sacLabels() })), t('common.player'));
}

const BUILD = {
  reduce(viz, ctl) {
    const o = T('treatment.options.reduce');
    let stop = null;
    const draw = (b, stuck) => (viz.innerHTML = sacView({ opening: 'wide', bowel: b, stuck, text: sacLabels() }));
    ctl.append(button(o.action, () => {
      stop?.();
      stop = animate(1500, (e) => draw(0.9 * (1 - e), e < 0.5));
    }));
    draw(0.9, true);
    return () => stop?.();
  },
  open: (viz, ctl) => repairSteps(viz, ctl, 'open', OPEN_STEPS),
  laparoscopic: (viz, ctl) => repairSteps(viz, ctl, 'laparoscopic', LAP_STEPS),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'hernia',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: (root) => renderPouchEmbryology(root, T('embryology.intro'), 'wide') },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
