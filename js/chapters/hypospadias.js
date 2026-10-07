// Hypospadias / epispadias chapter.
import { t } from '../i18n.js';
import { hypospadiasSide } from '../genital.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`hypospadias.${k}`);
const labels = () => T('labels');
const view = (o) => hypospadiasSide({ ...o, text: labels() });

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const stages = T('embryology.stages');
  const s = { i: 0, opening: 1 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;
  const draw = () => {
    viz.innerHTML = view({ opening: s.opening, groove: true, full: s.opening < 0.05, hood: s.opening >= 0.05 });
    explain.innerHTML = `<h3>${stages[s.i].name}</h3><p>${stages[s.i].text}</p>
      <div class="callout warn"><strong>${T('embryology.stopTitle')}</strong><p>${T('embryology.stopText')}</p></div>`;
  };
  ctl.append(segmented(T('embryology.stageLabel'), stages.map((x, i) => [i, x.name]), 0, (v) => {
    stop?.();
    s.i = v;
    const from = s.opening;
    stop = animate(900, (e) => { s.opening = from + (stages[v].opening - from) * e; draw(); });
  }));
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { where: 'distal', curve: false, pee: true };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const where = T('pathology.where');
  const draw = () => {
    const w = where[s.where];
    viz.innerHTML = view({ opening: w.opening, top: !!w.top, hood: !w.top, curve: s.curve ? 0.8 : 0, pee: s.pee });
    explain.innerHTML = `<h3>${w.name}</h3><p>${w.text}</p>
      ${s.curve ? `<div class="callout"><p>${T('pathology.curveText')}</p></div>` : ''}
      ${s.pee && !w.top ? `<p>${T('pathology.peeText')}</p>` : ''}
      <div class="callout warn"><strong>${T('pathology.noteTitle')}</strong><p>${T('pathology.note')}</p></div>`;
  };
  ctl.append(
    segmented(T('pathology.whereLabel'), Object.entries(where).map(([k, v]) => [k, v.name]), s.where, (v) => { s.where = v; draw(); }),
    toggle(T('pathology.curve'), false, (v) => { s.curve = v; draw(); }),
    toggle(T('pathology.pee'), true, (v) => { s.pee = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  repair(viz, ctl) {
    const o = T('treatment.options.repair');
    const s = { k: 0, pee: true };
    let stop = null;
    const draw = () =>
      (viz.innerHTML = view({ opening: 0.55 * (1 - s.k), hood: s.k < 0.5, curve: 0.8 * (1 - s.k), groove: s.k > 0 && s.k < 1, pee: s.pee }));
    ctl.append(
      segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
        stop?.();
        const from = s.k;
        stop = animate(1400, (e) => { s.k = from + (v - from) * e; draw(); });
      }),
      toggle(o.pee, true, (v) => { s.pee = v; draw(); }),
    );
    draw();
    return () => stop?.();
  },
  staged(viz, ctl) {
    const o = T('treatment.options.staged');
    const s = { stage: 0, pee: true };
    const STAGES = [
      { opening: 0.95, hood: true, curve: 0.9 },
      { opening: 0.95, curve: 0, graft: true },
      { opening: 0, curve: 0 },
    ];
    const draw = () => (viz.innerHTML = view({ ...STAGES[s.stage], pee: s.pee }));
    ctl.append(
      segmented('', [[0, o.before], [1, o.stage1], [2, o.stage2]], 0, (v) => { s.stage = v; draw(); }),
      toggle(o.pee, true, (v) => { s.pee = v; draw(); }),
    );
    draw();
  },
  complications(viz, ctl) {
    const o = T('treatment.options.complications');
    const draw = (on) => (viz.innerHTML = view({ opening: 0, pee: true, fistula: on }));
    ctl.append(toggle(o.fistula, true, draw));
    draw(true);
  },
  watch: (viz) => { viz.innerHTML = view({ opening: 0.15, hood: true, pee: true }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'hypospadias',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
