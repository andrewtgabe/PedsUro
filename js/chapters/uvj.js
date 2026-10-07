// Ureterovesical junction (UVJ) obstruction / primary megaureter chapter.
import { t } from '../i18n.js';
import { urinaryTract, peristalsis } from '../anatomy.js';
import { segmented, toggle, slider, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`uvj.${k}`);
const SEVERITY = [0.3, 0.6, 1];

const megaureter = (d, extra = {}) => ({ dilation: d, tort: d * 0.6, pelvisFill: 1, ureterFill: 1, uvj: true, ...extra });

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { mode: 'block' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;

  const draw = () => {
    stop?.();
    stop = peristalsis(viz, { block: s.mode === 'block' ? 'bottom' : null, text: T('embryology.strip') });
    explain.innerHTML = `<div class="callout ${s.mode === 'block' ? 'warn' : 'good'}"><p>${T(`embryology.texts.${s.mode}`)}</p></div>
      <p class="note">${T('embryology.note')}</p>`;
  };

  ctl.append(segmented(T('embryology.modeLabel'), Object.entries(T('embryology.modes')), s.mode, (v) => { s.mode = v; draw(); }));
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { sev: 1, infection: false };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));

  const draw = () => {
    viz.innerHTML = urinaryTract({
      affected: megaureter(SEVERITY[s.sev], { mark: true, bactSpread: s.infection ? 0.9 : 0 }),
      bladderBact: s.infection ? 4 : 0,
    });
    explain.innerHTML = `
      <div class="callout"><p>${T('pathology.severityText')[s.sev]}</p></div>
      ${s.infection ? `<div class="callout warn"><p>${T('pathology.infectionText')}</p></div>` : ''}
      <h3>${T('pathology.symptomsTitle')}</h3>
      <ul>${T('pathology.symptoms').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };

  ctl.append(
    segmented(T('pathology.severityLabel'), T('pathology.severity').map((n, i) => [i, n]), s.sev, (v) => { s.sev = v; draw(); }),
    toggle(T('pathology.infection'), false, (v) => { s.infection = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Before/after toggle that animates k from 0 to 1.
function beforeAfter(ctl, labels, draw) {
  let k = 0;
  let stop = null;
  ctl.append(
    segmented('', [[0, labels[0]], [1, labels[1]]], 0, (v) => {
      stop?.();
      const from = k;
      stop = animate(900, (e) => { k = from + (v - from) * e; draw(k); });
    }),
  );
  draw(0);
  return () => stop?.();
}

const BUILD = {
  watch(viz, ctl) {
    const o = T('treatment.options.watch');
    const draw = (y) => (viz.innerHTML = urinaryTract({ affected: megaureter(0.75 - 0.6 * (y / 4), { narrowW: 3 + y }) }));
    ctl.append(slider(o.control, { min: 0, max: 4, step: 1, value: 0, format: (v) => `${v} ${o.years}` }, draw));
    draw(0);
  },

  antibiotic(viz, ctl) {
    const o = T('treatment.options.antibiotic');
    const s = { bacteria: true, dose: false };
    const draw = () =>
      (viz.innerHTML = urinaryTract({
        affected: megaureter(0.6, { bactSpread: s.bacteria && !s.dose ? 0.9 : 0 }),
        bladderBact: s.bacteria ? (s.dose ? 1 : 4) : 0,
      }));
    ctl.append(
      toggle(o.bacteria, true, (v) => { s.bacteria = v; draw(); }),
      toggle(o.dose, false, (v) => { s.dose = v; draw(); }),
    );
    draw();
  },

  balloon(viz, ctl) {
    const o = T('treatment.options.balloon');
    return beforeAfter(ctl, [o.before, o.after], (k) =>
      (viz.innerHTML = urinaryTract({ affected: megaureter(0.7 - 0.25 * k, { narrowW: 3 + 7 * k, stent: k > 0.99 }) })));
  },

  reimplant(viz, ctl) {
    const o = T('treatment.options.reimplant');
    return beforeAfter(ctl, [o.before, o.after], (k) =>
      (viz.innerHTML = urinaryTract({
        affected: k > 0.99 ? { dilation: 0.12, pelvisFill: 1, ureterFill: 1 } : megaureter(0.75 - 0.6 * k, { mark: k === 0 }),
      })));
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
  id: 'uvj',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
