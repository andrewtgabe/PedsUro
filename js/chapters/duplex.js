// Duplicated kidney / collecting system chapter.
import { t } from '../i18n.js';
import { urinaryTract } from '../anatomy.js';
import { segmented, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`duplex.${k}`);
const lbl = (x, y, txt, anchor = 'start') => `<text class="lbl small" x="${x}" y="${y}" text-anchor="${anchor}">${txt}</text>`;

// ---------- 1. How it forms ----------

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

const PROBLEMS = {
  none: () => ({ duplex: { type: 'complete', upper: { pelvisFill: 1 }, lower: { pelvisFill: 1 } } }),
  reflux: () => ({
    duplex: { type: 'complete', upper: { pelvisFill: 1 }, lower: { dilation: 0.5, blunt: 0.5, pelvisFill: 1, ureterFill: 1 } },
    bladderFill: 0.35,
    voiding: true,
  }),
  ureterocele: () => ({
    duplex: { type: 'complete', upper: { dilation: 0.8, pelvisFill: 1, ureterFill: 1 }, lower: { pelvisFill: 1 }, ureterocele: 1 },
  }),
  ectopic: () => ({
    duplex: { type: 'complete', upper: { dilation: 0.6, pelvisFill: 1, ureterFill: 1 }, lower: { pelvisFill: 1 }, ectopic: true },
  }),
};

function renderPathology(root) {
  const s = { type: 'complete', problem: 'ureterocele' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const problems = T('pathology.problems');
  const problemCtl = document.createElement('div');

  const draw = () => {
    const partial = s.type === 'partial';
    const opts = partial ? { duplex: { type: 'partial', upper: { pelvisFill: 1 }, lower: { pelvisFill: 1 } } } : PROBLEMS[s.problem]();
    const { duplex, ...rest } = opts;
    viz.innerHTML = urinaryTract({ affected: { duplex }, ...rest });
    problemCtl.hidden = partial;
    explain.innerHTML = partial
      ? `<p>${T('pathology.partialText')}</p>`
      : `<h3>${problems[s.problem].name}</h3><p>${problems[s.problem].text}</p>`;
  };

  problemCtl.append(
    segmented(T('pathology.problemLabel'), Object.entries(problems).map(([k, v]) => [k, v.name]), s.problem, (v) => { s.problem = v; draw(); }),
  );
  ctl.append(
    segmented(T('pathology.typeLabel'), Object.entries(T('pathology.types')), s.type, (v) => { s.type = v; draw(); }),
    problemCtl,
  );
  draw();
}

// ---------- 3. Treatment ----------

// Before/after toggle that animates k from 0 to 1 and redraws the duplex.
function beforeAfter(viz, ctl, o, makeDuplex) {
  let k = 0;
  let stop = null;
  const draw = () => (viz.innerHTML = urinaryTract({ affected: { duplex: makeDuplex(k) } }));
  ctl.append(
    segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
      stop?.();
      const from = k;
      stop = animate(900, (e) => { k = from + (v - from) * e; draw(); });
    }),
  );
  draw();
  return () => stop?.();
}

const blockedTop = (k) => ({ dilation: 0.8 - 0.5 * k, pelvisFill: 1, ureterFill: 1 });

const BUILD = {
  none(viz) {
    viz.innerHTML = urinaryTract({ affected: { duplex: { type: 'partial', upper: { pelvisFill: 1 }, lower: { pelvisFill: 1 } } } });
  },

  puncture(viz, ctl) {
    return beforeAfter(viz, ctl, T('treatment.options.puncture'), (k) => ({
      type: 'complete',
      upper: blockedTop(k),
      lower: { pelvisFill: 1 },
      ureterocele: 1 - 0.6 * k,
      ureteroceleCut: k > 0.5,
    }));
  },

  joining(viz, ctl) {
    return beforeAfter(viz, ctl, T('treatment.options.joining'), (k) => ({
      type: 'complete',
      upper: blockedTop(k),
      lower: { pelvisFill: 1, ureterFill: k > 0.99 ? 0.25 : 0 },
      ectopic: k < 0.99,
      joined: k > 0.99,
    }));
  },

  reimplant(viz, ctl) {
    return beforeAfter(viz, ctl, T('treatment.options.reimplant'), (k) => ({
      type: 'complete',
      upper: blockedTop(k),
      lower: { dilation: 0.5 * (1 - k), blunt: 0.5 * (1 - k), pelvisFill: 1, ureterFill: k < 0.99 ? 1 : 0 },
      ureterocele: k < 0.99 ? 1 - k : 0,
    }));
  },

  removal(viz, ctl) {
    return beforeAfter(viz, ctl, T('treatment.options.removal'), (k) => ({
      type: 'complete',
      upper: { dilation: 0.6, pelvisFill: 1, ureterFill: 1 },
      lower: { pelvisFill: 1 },
      ectopic: true,
      upperRemoved: k > 0.5,
    }));
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
  id: 'duplex',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
