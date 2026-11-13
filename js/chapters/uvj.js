// Ureterovesical junction (UVJ) obstruction / primary megaureter chapter.
import { t } from '../i18n.js';
import { urinaryTract, peristalsis } from '../anatomy.js';
import { segmented, toggle, slider, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { vcugPlayer, scanPlayer, infectionPlayer, ultrasoundProbe } from '../tests.js';

const T = (k) => t(`uvj.${k}`);
const SEVERITY = [0.3, 0.6, 1];

const megaureter = (d, extra = {}) => ({ dilation: d, tort: d * 0.6, pelvisFill: 1, ureterFill: 1, uvj: true, ...extra });

// ---------- Why it happens (shown last) ----------

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
  const s = { type: 'blocked', sev: 1, infection: false };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));

  // Blocked: slow flow down a wide ureter with a narrow end. Refluxing: urine goes back up.
  // Wide but not blocked: wide ureter, urine still moves down normally.
  const side = (d) => {
    const bact = { bactSpread: s.infection ? 0.9 : 0 };
    if (s.type === 'reflux') return { dilation: d, tort: d * 0.6, pelvisFill: 1, ureterFill: 1, ...bact, arrows: { mode: 'up', from: 0.08 } };
    if (s.type === 'wide') return { dilation: d, tort: d * 0.6, pelvisFill: 1, ureterFill: 1, ...bact, arrows: { mode: 'down' } };
    return { ...megaureter(d, { mark: true, ...bact }), arrows: { mode: 'slow' } };
  };
  const draw = () => {
    viz.innerHTML = urinaryTract({
      affected: side(SEVERITY[s.sev]),
      healthy: { arrows: { mode: 'down' } },
      urethraArrows: 'down',
      bladderBact: s.infection ? 4 : 0,
    });
    explain.innerHTML = `
      <div class="callout"><p>${T(`pathology.typeText.${s.type}`)}</p></div>
      <div class="callout"><p>${T('pathology.severityText')[s.sev]}</p></div>
      ${s.infection ? `<div class="callout warn"><p>${T('pathology.infectionText')}</p></div>` : ''}
      <h3>${T('pathology.symptomsTitle')}</h3>
      <ul>${T('pathology.symptoms').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };

  ctl.append(
    segmented(T('pathology.typeLabel'), Object.entries(T('pathology.types')), s.type, (v) => { s.type = v; draw(); }),
    segmented(T('pathology.severityLabel'), T('pathology.severity').map((n, i) => [i, n]), s.sev, (v) => { s.sev = v; draw(); }),
    toggle(T('pathology.infection'), false, (v) => { s.infection = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step player for a procedure: every state lists every key, so nothing carries over from step 1.
function procedure(viz, ctl, captions, states, extra = {}) {
  const base = { dilation: 0.75, tort: 0.45, pelvisFill: 1, ureterFill: 1, uvj: true, narrowW: 3, mark: false, scope: 0, balloon: 0, stent: false, uvjCut: false, tunnel: false, ureterostomy: false, bactSpread: 0, inflamed: false, flow: '' };
  const steps = states.map((st, n) => ({ caption: captions[n], state: { ...base, bact: 0, ...st } }));
  return stepPlayer(ctl, steps, ({ bact, ...side }) => (viz.innerHTML = urinaryTract({ affected: side, bladderBact: Math.round(bact), ...extra })), t('common.player'));
}

// Shared test text comes from Hydronephrosis; this chapter adds its own summary or steps.
const shared = (key) => ({ ...t(`hydronephrosis.treatment.options.${key}`), ...T(`treatment.options.${key}`) });

const BUILD = {
  ultrasound(viz) {
    viz.innerHTML = urinaryTract({ affected: megaureter(0.6) }).replace(/<\/svg>\s*$/, `${ultrasoundProbe([566, 150, 70], T('treatment.options.ultrasound.probe'))}</svg>`);
  },

  vcug: (viz, ctl) => vcugPlayer(viz, ctl, shared('vcug')),

  // Drainage scan: the wide ureter and kidney hold on to tracer, even after Lasix.
  scan: (viz, ctl) =>
    scanPlayer(viz, ctl, shared('scan'), {
      split: [55, 45],
      pattern: 'blocked',
      affected: (st) => megaureter(0.7, { pelvisFill: st.k ? Math.max(st.k, 0.85) : 0, ureterFill: st.k ? 1 : 0 }),
    }),

  watch(viz, ctl) {
    const o = T('treatment.options.watch');
    const draw = (y) => (viz.innerHTML = urinaryTract({ affected: megaureter(0.75 - 0.6 * (y / 4), { narrowW: 3 + y }) }));
    ctl.append(slider(o.control, { min: 0, max: 4, step: 1, value: 0, format: (v) => `${v} ${o.years}` }, draw));
    draw(0);
  },

  antibiotic: (viz, ctl) =>
    infectionPlayer(viz, ctl, shared('antibiotic'), ({ spread, sick }) => megaureter(0.6, { bactSpread: spread, inflamed: sick })),

  balloon: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.balloon.steps'), [
      { mark: true },
      { scope: 0.14 },
      { scope: 0.14, balloon: 1, narrowW: 8 },
      { dilation: 0.6, tort: 0.35, narrowW: 9, stent: true },
      { dilation: 0.4, tort: 0.2, narrowW: 9, flow: 'down' },
    ]),

  ureterostomy: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.ureterostomy.steps'), [
      { bactSpread: 0.9, inflamed: true, bact: 3 },
      { uvj: false, ureterostomy: true, dilation: 0.7 },
      { uvj: false, ureterostomy: true, dilation: 0.45, tort: 0.25, flow: 'down' },
      { uvj: false, dilation: 0.12, tort: 0, tunnel: true, flow: 'down' },
    ]),

  reimplant: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.reimplant.steps'), [
      { mark: true },
      { uvj: false, uvjCut: true },
      { uvj: false, dilation: 0.3, tort: 0.2 },
      { uvj: false, dilation: 0.3, tort: 0.2, tunnel: true, stent: true },
      { uvj: false, dilation: 0.12, tort: 0, tunnel: true, flow: 'down' },
    ]),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ key, ...(['vcug', 'scan', 'antibiotic'].includes(key) ? shared(key) : T(`treatment.options.${key}`)), build: BUILD[key] })),
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
