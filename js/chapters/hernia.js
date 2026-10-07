// Inguinal hernia chapter.
import { t } from '../i18n.js';
import { sacView } from '../genital.js';
import { segmented, toggle, button, animate, modelLayout, optionTabs, takeaways } from '../ui.js';
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

function repair(viz, ctl, o) {
  let k = 0;
  let stop = null;
  const draw = () => (viz.innerHTML = sacView({ opening: 'wide', bowel: 0.8 * (1 - Math.min(1, k * 2)), tied: k > 0.6, text: sacLabels() }));
  ctl.append(segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
    stop?.();
    const from = k;
    stop = animate(1200, (e) => { k = from + (v - from) * e; draw(); });
  }));
  draw();
  return () => stop?.();
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
  open: (viz, ctl) => repair(viz, ctl, T('treatment.options.open')),
  laparoscopic: (viz, ctl) => repair(viz, ctl, T('treatment.options.laparoscopic')),
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
