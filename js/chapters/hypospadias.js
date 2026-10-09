// Hypospadias chapter.
import { t } from '../i18n.js';
import { hypospadiasSide } from '../genital.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

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
  // Step-by-step distal repair, shown as a tubularized incised plate (TIP) repair.
  repair(viz, ctl) {
    const base = { opening: 0.25, hood: true, curve: 0.2, pee: false, check: false, groove: false, incised: false, tubedTo: 0, stentOut: false };
    const states = [
      { pee: true },
      { check: true },
      { hood: false, curve: 0, groove: true },
      { hood: false, curve: 0, groove: true, incised: true },
      { hood: false, curve: 0, opening: 0, tubedTo: 0.25, stentOut: true },
      { hood: false, curve: 0, opening: 0, stentOut: true },
      { hood: false, curve: 0, opening: 0, pee: true },
    ];
    const captions = T('treatment.options.repair.steps');
    const steps = states.map((st, n) => ({ caption: captions[n], state: { ...base, ...st } }));
    return stepPlayer(ctl, steps, (st) => (viz.innerHTML = view(st)), t('common.player'));
  },
  // Step-by-step two-stage repair.
  staged(viz, ctl) {
    const base = { opening: 0.95, hood: false, curve: 0, plateCut: false, corpCuts: false, graft: false, graftHealed: false, taped: false, stentOut: false, pee: false };
    const states = [
      { hood: true, curve: 0.9, pee: true },
      { hood: true, plateCut: true, curve: 0.45 },
      { hood: true, plateCut: true, corpCuts: true },
      { hood: true, graft: true },
      { hood: true, graft: true, taped: true },
      { hood: true, graft: true, graftHealed: true },
      { hood: true, opening: 0, graft: true, graftHealed: true },
      { opening: 0, stentOut: true },
      { opening: 0, pee: true },
    ];
    const captions = T('treatment.options.staged.steps');
    const steps = states.map((st, n) => ({ caption: captions[n], state: { ...base, ...st } }));
    return stepPlayer(ctl, steps, (s) => (viz.innerHTML = view(s)), t('common.player'));
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
