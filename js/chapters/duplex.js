// Duplicated kidney / collecting system chapter.
import { t } from '../i18n.js';
import { urinaryTract, ectopicMap } from '../anatomy.js';
import { segmented, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { vcugPlayer, infectionPlayer, ultrasoundProbe } from '../tests.js';

const T = (k) => t(`duplex.${k}`);
const lbl = (x, y, txt, anchor = 'start') => `<text class="lbl small" x="${x}" y="${y}" text-anchor="${anchor}">${txt}</text>`;

// ---------- Why it happens (shown last) ----------

function embryoSvg(type) {
  const kidney = `<path class="kidney" d="M78 36 C132 36 134 150 78 150 C48 150 38 126 44 110 C32 94 40 36 78 36 Z" opacity="0.6"/>`;
  let buds;
  if (type === 'single') {
    buds = `<path class="bud" d="M175 236 C120 236 82 190 80 96"/>`;
  } else if (type === 'partial') {
    buds = `<path class="bud" d="M175 236 C120 236 90 200 84 150"/>
      <path class="bud" d="M84 150 C80 120 76 100 72 70"/>
      <path class="bud upper" d="M84 150 C96 132 100 120 96 112"/>`;
  } else {
    // Lower bud (nearer the bladder) drains the bottom part; upper bud the top.
    buds = `<path class="bud" d="M175 250 C122 250 96 190 92 124"/>
      <path class="bud upper" d="M175 206 C130 200 84 150 74 70"/>`;
  }
  return `<svg class="anatomy" viewBox="0 0 320 340">
    ${kidney}
    <ellipse class="sinus" cx="175" cy="300" rx="82" ry="30"/>
    <path class="duct" d="M175 15 L175 280"/>
    ${buds}
    ${lbl(185, 40, T('embryology.labelDuct'))}
    ${lbl(78, 26, T('embryology.labelKidney'), 'middle')}
    ${lbl(175, 305, T('embryology.labelSinus'), 'middle')}
    ${type === 'complete' ? `${lbl(20, 64, T('embryology.labelTop'))}${lbl(20, 168, T('embryology.labelBottom'))}` : ''}
  </svg>`;
}

function bladderInsideSvg(type) {
  const right =
    type === 'complete'
      ? `<ellipse class="orifice" cx="252" cy="140" rx="9" ry="5"/>${lbl(232, 122, T('embryology.labelBottom'))}
         <ellipse class="orifice upper" cx="182" cy="246" rx="9" ry="5"/>${lbl(196, 250, T('embryology.labelTop'))}`
      : `<ellipse class="orifice" cx="215" cy="176" rx="9" ry="5"/>`;
  return `<svg class="anatomy" viewBox="0 0 320 340">
    <path class="bladder-inside" d="M160 30 C260 30 300 110 290 190 C282 250 220 290 160 290 C100 290 38 250 30 190 C20 110 60 30 160 30 Z"/>
    <path class="trigone" d="M105 176 L215 176 L160 272 Z"/>
    <rect class="neck" x="148" y="270" width="24" height="60" rx="8"/>
    <ellipse class="orifice" cx="105" cy="176" rx="9" ry="5"/>
    ${right}
    ${lbl(182, 318, T('embryology.labelNeck'))}
  </svg>`;
}

function renderEmbryology(root) {
  const s = { type: 'complete' };
  root.innerHTML = `
    <div class="model">
      <div class="viz-col">
        <div class="viz two">
          <figure><figcaption>${T('embryology.panelEmbryo')}</figcaption><div data-embryo></div></figure>
          <figure><figcaption>${T('embryology.panelBirth')}</figcaption><div data-birth></div></figure>
        </div>
        <div class="controls" data-ctl></div>
      </div>
      <aside class="explain"><p class="lead">${T('embryology.intro')}</p><div data-explain></div></aside>
    </div>`;

  const draw = () => {
    root.querySelector('[data-embryo]').innerHTML = embryoSvg(s.type);
    root.querySelector('[data-birth]').innerHTML = bladderInsideSvg(s.type);
    root.querySelector('[data-explain]').innerHTML = `<p>${T(`embryology.texts.${s.type}`)}</p>
      ${s.type === 'complete' ? `<div class="callout warn"><strong>${T('embryology.ruleTitle')}</strong><p>${T('embryology.rule')}</p></div>` : ''}`;
  };
  root.querySelector('[data-ctl]').append(
    segmented(T('embryology.typeLabel'), Object.entries(T('embryology.types')), s.type, (v) => { s.type = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

const DOWN = { mode: 'down' };
const PROBLEMS = {
  none: () => ({ duplex: { type: 'complete', upper: { pelvisFill: 1, arrows: DOWN }, lower: { pelvisFill: 1, arrows: DOWN } } }),
  reflux: () => ({
    duplex: { type: 'complete', upper: { pelvisFill: 1, arrows: DOWN }, lower: { dilation: 0.5, blunt: 0.5, pelvisFill: 1, ureterFill: 1, arrows: { mode: 'up', from: 0.08 } } },
    bladderFill: 0.35,
    voiding: true,
  }),
  ureterocele: () => ({
    duplex: { type: 'complete', upper: { dilation: 0.8, pelvisFill: 1, ureterFill: 1, arrows: { mode: 'slow' } }, lower: { pelvisFill: 1, arrows: DOWN }, ureterocele: 1 },
  }),
  // Girls: the opening is below the control muscle, so urine keeps dribbling out. Boys: it is above it.
  ectopic: (sex) => ({
    duplex: { type: 'complete', upper: { dilation: 0.6, pelvisFill: 1, ureterFill: 1, arrows: DOWN }, lower: { pelvisFill: 1, arrows: DOWN }, ectopic: true },
    urethraArrows: sex === 'girl' ? 'down' : '',
  }),
};
const ECTOPIC_SITE = { girl: 'vagina', boy: 'prostatic' };

function renderPathology(root) {
  const s = { type: 'complete', problem: 'none', sex: 'girl' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const problems = T('pathology.problems');
  const problemCtl = document.createElement('div');
  const sexCtl = document.createElement('div');

  const draw = () => {
    const partial = s.type === 'partial';
    const ectopic = !partial && s.problem === 'ectopic';
    const opts = partial
      ? { duplex: { type: 'partial', upper: { pelvisFill: 1, arrows: DOWN }, lower: { pelvisFill: 1, arrows: DOWN } } }
      : PROBLEMS[s.problem](s.sex);
    const { duplex, ...rest } = opts;
    const tract = urinaryTract({ affected: { duplex }, healthy: { arrows: DOWN }, urethraArrows: 'down', ...rest });
    viz.classList.toggle('two', ectopic);
    viz.innerHTML = ectopic
      ? `<figure>${tract}</figure><figure>${ectopicMap({ sex: s.sex, site: ECTOPIC_SITE[s.sex], text: t('ectopic.embryology.labels') })}</figure>`
      : tract;
    problemCtl.hidden = partial;
    sexCtl.hidden = !ectopic;
    explain.innerHTML = partial
      ? `<p>${T('pathology.partialText')}</p>`
      : `<h3>${problems[s.problem].name}</h3><p>${ectopic ? problems.ectopic[s.sex] : problems[s.problem].text}</p>`;
  };

  problemCtl.append(
    segmented(T('pathology.problemLabel'), Object.entries(problems).map(([k, v]) => [k, v.name]), s.problem, (v) => { s.problem = v; draw(); }),
  );
  sexCtl.append(segmented(T('pathology.sexLabel'), Object.entries(T('pathology.sexes')), s.sex, (v) => { s.sex = v; draw(); }));
  ctl.append(
    segmented(T('pathology.typeLabel'), Object.entries(T('pathology.types')), s.type, (v) => { s.type = v; draw(); }),
    problemCtl,
    sexCtl,
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step player for a duplex procedure. Every state lists every key so nothing carries over from step 1.
const BASE = {
  ud: 0.8, lowerD: 0, lowerFill: 0, ureterocele: 0, cut: false, ectopic: false, joined: false, upperCut: false,
  cutPlan: false, removed: false, tunnel: false, scope: 0, arrows: false,
};
function procedure(viz, ctl, captions, states) {
  const steps = states.map((st, n) => ({ caption: captions[n], state: { ...BASE, ...st } }));
  const draw = (st) => {
    const arrows = st.arrows ? DOWN : undefined;
    viz.innerHTML = urinaryTract({
      affected: {
        duplex: {
          type: 'complete',
          upper: { dilation: st.ud, pelvisFill: 1, ureterFill: 1, arrows },
          lower: { dilation: st.lowerD, blunt: st.lowerD, pelvisFill: 1, ureterFill: st.lowerFill, arrows },
          ureterocele: st.ureterocele, ureteroceleCut: st.cut, ectopic: st.ectopic, joined: st.joined,
          upperCut: st.upperCut, cutPlan: st.cutPlan, upperRemoved: st.removed, tunnel: st.tunnel,
        },
      },
      bladderProc: { scope: st.scope },
    });
  };
  return stepPlayer(ctl, steps, draw, t('common.player'));
}

// Shared test text comes from Hydronephrosis; this chapter adds its own summary.
const shared = (key) => ({ ...t(`hydronephrosis.treatment.options.${key}`), ...t(`duplex.treatment.options.${key}`) });
const plainDuplex = (upper = {}) => ({ duplex: { type: 'complete', upper: { dilation: 0.7, pelvisFill: 1, ureterFill: 1, ...upper }, lower: { pelvisFill: 1 }, ureterocele: 1 } });

export const BUILD = {
  ultrasound(viz) {
    viz.innerHTML = urinaryTract({ affected: plainDuplex() }).replace(/<\/svg>\s*$/, `${ultrasoundProbe([566, 150, 70], T('treatment.options.ultrasound.probe'))}</svg>`);
  },

  vcug: (viz, ctl) => vcugPlayer(viz, ctl, shared('vcug')),

  // Kidney scan: how much of the work the top part does.
  scan(viz, ctl) {
    const o = T('treatment.options.scan');
    const draw = (v) => {
      const good = v === 'good';
      const glow = `<g class="duplex-glow"><ellipse fill="#f2a93b" cx="455" cy="78" rx="48" ry="50" opacity="${good ? 0.6 : 0.12}"/><ellipse fill="#f2a93b" cx="455" cy="172" rx="50" ry="52" opacity="0.6"/></g>
        <text class="lbl" x="590" y="40" text-anchor="end">${o.top} ${good ? 40 : 5}%</text><text class="lbl" x="590" y="246" text-anchor="end">${o.bottom} ${good ? 60 : 95}%</text>`;
      viz.innerHTML = urinaryTract({ affected: plainDuplex(), labels: false }).replace(/<\/svg>\s*$/, `${glow}<rect class="gamma-cam" x="120" y="4" width="360" height="26" rx="8"/></svg>`);
    };
    ctl.append(segmented(o.label, Object.entries(o.views), 'good', draw));
    draw('good');
  },

  antibiotic: (viz, ctl) =>
    infectionPlayer(viz, ctl, shared('antibiotic'), ({ spread, sick }) => ({
      duplex: { type: 'complete', upper: { pelvisFill: 1 }, lower: { dilation: 0.4, pelvisFill: 1, ureterFill: 1, bactSpread: spread }, inflamed: sick },
    })),

  none(viz) {
    viz.innerHTML = urinaryTract({ affected: { duplex: { type: 'partial', upper: { pelvisFill: 1, arrows: DOWN }, lower: { pelvisFill: 1, arrows: DOWN } } }, urethraArrows: 'down' });
  },

  puncture: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.puncture.steps'), [
      { ureterocele: 1 },
      { ureterocele: 1, scope: 1 },
      { ureterocele: 1, scope: 1, cut: true },
      { ureterocele: 0.4, cut: true, ud: 0.3, arrows: true },
    ]),

  joining: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.joining.steps'), [
      { ectopic: true, ud: 0.6 },
      { ectopic: true, ud: 0.6, upperCut: true },
      { joined: true, ud: 0.6, lowerFill: 0.25 },
      { joined: true, ud: 0.3, lowerFill: 0.25, arrows: true },
    ]),

  reimplant: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.reimplant.steps'), [
      { ureterocele: 1, lowerD: 0.5, lowerFill: 1 },
      { ureterocele: 0, lowerD: 0.5, lowerFill: 1 },
      { lowerD: 0.4, lowerFill: 1, tunnel: true, ud: 0.6 },
      { ud: 0.25, tunnel: true, arrows: true },
    ]),

  removal: (viz, ctl) =>
    procedure(viz, ctl, T('treatment.options.removal.steps'), [
      { ectopic: true, ud: 0.6 },
      { ectopic: true, ud: 0.6, cutPlan: true },
      { removed: true },
      { removed: true, arrows: true },
    ]),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ key, ...(['vcug', 'antibiotic'].includes(key) ? shared(key) : T(`treatment.options.${key}`)), build: BUILD[key] })),
  );
}

export default {
  id: 'duplex',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
