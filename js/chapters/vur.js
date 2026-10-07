// Vesicoureteral reflux chapter.
import { t } from '../i18n.js';
import { urinaryTract, uvjSection, clamp } from '../anatomy.js';
import { segmented, toggle, animate, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`vur.${k}`);

// ---------- 1. How it forms ----------

function embryoSvg(step, pos) {
  const budY = { normal: 236, low: 262, high: 206 }[pos];
  const label = (x, y, txt, anchor = 'start') => `<text class="lbl small" x="${x}" y="${y}" text-anchor="${anchor}">${txt}</text>`;

  if (step < 2) {
    const bud = step === 0
      ? `<path class="bud" d="M175 ${budY} Q150 ${budY - 4} 138 ${budY - 34}"/>`
      : `<path class="bud" d="M175 ${budY} C125 ${budY} 82 190 78 128"/>
         <path class="bud thin" d="M78 128 L60 104 M78 128 L96 102 M60 104 L48 90 M60 104 L66 84 M96 102 L90 82 M96 102 L110 88"/>`;
    const tissue = step === 0
      ? `<circle class="blastema" cx="78" cy="92" r="40"/>`
      : `<path class="kidney" d="M78 48 C126 48 128 140 78 140 C50 140 40 118 46 104 C34 90 42 48 78 48 Z" opacity="0.55"/>`;
    return `<svg class="anatomy" viewBox="0 0 320 340">
      ${tissue}
      <ellipse class="sinus" cx="175" cy="300" rx="82" ry="30"/>
      <path class="duct" d="M175 15 L175 280"/>
      ${bud}
      ${label(185, 40, T('embryology.labelDuct'))}
      ${label(78, 30, step === 0 ? T('embryology.labelBlastema') : T('embryology.labelKidney'), 'middle')}
      ${label(step === 0 ? 132 : 120, budY + 22, T('embryology.labelBud'), 'end')}
      ${label(175, 305, T('embryology.labelSinus'), 'middle')}
    </svg>`;
  }

  // Stage 3: bud base absorbed — ureter and duct now open separately.
  const end = { normal: [118, 258], low: [92, 270], high: [196, 330] }[pos];
  return `<svg class="anatomy" viewBox="0 0 320 340">
    <path class="kidney" d="M78 40 C128 40 130 134 78 134 C50 134 40 112 46 98 C34 84 42 40 78 40 Z"/>
    <ellipse class="sinus" cx="170" cy="290" rx="95" ry="40"/>
    <path class="duct" d="M200 15 C262 120 258 290 206 326"/>
    <path class="bud" d="M70 120 C70 190 ${end[0] - 10} ${end[1] - 60} ${end[0]} ${end[1]}"/>
    <circle class="orifice-dot" cx="${end[0]}" cy="${end[1]}" r="6"/>
    ${label(212, 40, T('embryology.labelDuct'))}
    ${label(78, 26, T('embryology.labelKidney'), 'middle')}
    ${label(170, 296, T('embryology.labelSinus'), 'middle')}
  </svg>`;
}

function bladderInsideSvg(pos) {
  const right = { normal: [215, 176], low: [258, 128], high: [176, 260] }[pos];
  const tunnelLen = pos === 'low' ? 18 : 64;
  return `<svg class="anatomy" viewBox="0 0 320 340">
    <path class="bladder-inside" d="M160 30 C260 30 300 110 290 190 C282 250 220 290 160 290 C100 290 38 250 30 190 C20 110 60 30 160 30 Z"/>
    <path class="trigone" d="M105 176 L215 176 L160 272 Z"/>
    <rect class="neck" x="148" y="270" width="24" height="60" rx="8"/>
    <ellipse class="orifice" cx="105" cy="176" rx="9" ry="5"/>
    <ellipse class="orifice ${pos === 'normal' ? '' : 'flag'}" cx="${right[0]}" cy="${right[1]}" rx="9" ry="5"/>
    <text class="lbl small" x="160" y="205" text-anchor="middle">${T('embryology.labelTrigone')}</text>
    <text class="lbl small" x="182" y="318">${T('embryology.labelNeck')}</text>
    ${pos === 'high' ? '' : `
    <text class="lbl small" x="20" y="22">${T('embryology.labelTunnel')}: ${pos === 'low' ? T('embryology.tunnelShort') : T('embryology.tunnelLong')}</text>
    <rect class="tunnel-bar" x="20" y="30" width="${tunnelLen}" height="8" rx="4"/>`}
  </svg>`;
}

function renderEmbryology(root) {
  const state = { step: 0, pos: 'normal' };
  const steps = T('embryology.steps');
  root.innerHTML = `
    <div class="model">
      <div class="viz-col">
        <div class="viz two">
          <figure><figcaption>${T('embryology.panelEmbryo')}</figcaption><div data-embryo></div></figure>
          <figure><figcaption>${T('embryology.panelBirth')}</figcaption><div data-birth></div></figure>
        </div>
        <div class="controls">
          <div data-steps></div>
          <div data-pos></div>
        </div>
      </div>
      <aside class="explain">
        <p class="lead">${T('embryology.intro')}</p>
        <h3 data-step-title></h3><p data-step-text></p>
        <div class="callout" data-result></div>
        <p class="note">${T('embryology.note')}</p>
      </aside>
    </div>`;

  const draw = () => {
    root.querySelector('[data-embryo]').innerHTML = embryoSvg(state.step, state.pos);
    root.querySelector('[data-birth]').innerHTML = bladderInsideSvg(state.pos);
    root.querySelector('[data-step-title]').textContent = `${steps[state.step].name}: ${steps[state.step].title}`;
    root.querySelector('[data-step-text]').textContent = steps[state.step].text;
    const r = T(`embryology.results.${state.pos}`);
    const box = root.querySelector('[data-result]');
    box.className = `callout ${state.pos === 'normal' ? 'good' : 'warn'}`;
    box.innerHTML = `<strong>${r.title}</strong><p>${r.text}</p>`;
  };

  root.querySelector('[data-steps]').append(
    segmented(T('embryology.stepLabel'), steps.map((s, i) => [i, s.name]), state.step, (v) => { state.step = v; draw(); }),
  );
  const positions = T('embryology.positions');
  root.querySelector('[data-pos]').append(
    segmented(T('embryology.posLabel'), Object.entries(positions), state.pos, (v) => { state.pos = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

// Appearance of each grade at the peak of voiding (what the VCUG shows).
const GRADES = [
  { fill: 0, pelvis: 0, dilation: 0, tort: 0, blunt: 0 },
  { fill: 0.55, pelvis: 0, dilation: 0, tort: 0, blunt: 0 },
  { fill: 1, pelvis: 1, dilation: 0, tort: 0, blunt: 0 },
  { fill: 1, pelvis: 1, dilation: 0.35, tort: 0.1, blunt: 0.45 },
  { fill: 1, pelvis: 1, dilation: 0.65, tort: 0.45, blunt: 0.8 },
  { fill: 1, pelvis: 1, dilation: 1, tort: 1, blunt: 1 },
];

// p: 0 = full bladder before voiding, 1 = peak of voiding.
export function refluxSide(grade, p, { bacteria = false, scar = false } = {}) {
  const g = GRADES[grade];
  const ureterFill = g.fill * clamp(p / 0.7);
  const pelvisFill = g.pelvis * clamp((p - 0.7) / 0.3);
  return {
    ureterFill,
    pelvisFill,
    dilation: g.dilation * (0.35 + 0.65 * p),
    tort: g.tort * (0.35 + 0.65 * p),
    blunt: g.blunt * (0.5 + 0.5 * p),
    bactSpread: bacteria ? (pelvisFill > 0.5 ? 1 : ureterFill * 0.95) : 0,
    scar,
  };
}

function renderPathology(root) {
  const state = { grade: 3, p: 1, bacteria: false, scar: false, voiding: false };
  const grades = T('pathology.grades');
  root.innerHTML = `
    <div class="model">
      <div class="viz-col">
        <div class="viz" data-viz></div>
        <div class="controls">
          <label class="slider">
            <span>${T('pathology.gradeLabel')}: <strong data-grade-name></strong></span>
            <input type="range" min="0" max="5" step="1" value="${state.grade}" data-grade>
            <span class="ticks"><span>0</span><span>I</span><span>II</span><span>III</span><span>IV</span><span>V</span></span>
          </label>
          <div class="row">
            <button class="btn primary" data-play>▶ ${T('pathology.play')}</button>
            <span data-toggles class="row"></span>
          </div>
        </div>
      </div>
      <aside class="explain">
        <p class="lead">${T('pathology.intro')}</p>
        <h3 data-title></h3><p data-text></p>
        <p class="note">${T('pathology.vcugNote')}</p>
        <div data-extra></div>
      </aside>
    </div>`;

  const draw = () => {
    root.querySelector('[data-viz]').innerHTML = urinaryTract({
      affected: refluxSide(state.grade, state.p, state),
      healthy: { scar: false },
      bladderFill: 1 - 0.7 * state.p,
      bladderBact: state.bacteria ? 6 : 0,
      voiding: state.voiding,
      sideLabels: [T('pathology.healthySide'), T('pathology.refluxSide')],
    });
    const gr = grades[state.grade];
    root.querySelector('[data-grade-name]').textContent = gr.title;
    root.querySelector('[data-title]').textContent = gr.title;
    root.querySelector('[data-text]').textContent = gr.text;
    const extra = [];
    if (state.bacteria) extra.push(`<div class="callout warn"><strong>${T('pathology.whyMatters')}</strong><p>${T('pathology.infectionText')}</p></div>`);
    if (state.scar) extra.push(`<div class="callout warn"><p>${T('pathology.scarText')}</p></div>`);
    root.querySelector('[data-extra]').innerHTML = extra.join('');
  };

  root.querySelector('[data-grade]').addEventListener('input', (e) => {
    state.grade = Number(e.target.value);
    draw();
  });
  const toggles = root.querySelector('[data-toggles]');
  toggles.append(
    toggle(T('pathology.infection'), state.bacteria, (v) => { state.bacteria = v; draw(); }),
    toggle(T('pathology.scarring'), state.scar, (v) => { state.scar = v; draw(); }),
  );

  let stop = null;
  root.querySelector('[data-play]').addEventListener('click', () => {
    stop?.();
    state.voiding = true;
    stop = animate(3000, (k) => {
      state.p = k < 0.15 ? 0 : (k - 0.15) / 0.85;
      if (k >= 1) state.voiding = false;
      draw();
    });
  });
  draw();
  return () => stop?.();
}

// ---------- 3. Treatment options ----------

function uvjText() {
  return {
    valveOpen: T('treatment.valveOpen'),
    valveClosed: T('treatment.valveClosed'),
    labelTunnel: T('treatment.labelTunnel'),
    labelMuscle: T('treatment.labelMuscle'),
    labelInside: T('treatment.labelInside'),
    labelFromKidney: T('treatment.labelFromKidney'),
  };
}

// Each option builds its own model into `viz` and controls into `ctl`.
const OPTIONS = {
  habits(viz, ctl) {
    const s = { squeeze: false, pressure: 0.5 };
    const draw = () => (viz.innerHTML = uvjSection({ tunnel: 0.55, ...s, text: uvjText() }));
    const o = T('treatment.options.habits');
    ctl.append(
      segmented(o.control, [[0.5, o.low], [1, o.high]], s.pressure, (v) => { s.pressure = v; draw(); }),
      squeezeButton(s, draw),
    );
    draw();
  },

  observation(viz, ctl) {
    const s = { squeeze: false, age: 0 };
    const o = T('treatment.options.observation');
    const draw = () => {
      viz.innerHTML = uvjSection({ tunnel: 0.3 + 0.05 * s.age, squeeze: s.squeeze, text: uvjText() });
      ageOut.textContent = `${s.age} ${o.ageUnit}`;
    };
    const wrap = document.createElement('label');
    wrap.className = 'slider';
    wrap.innerHTML = `<span>${o.control}: <strong></strong></span><input type="range" min="0" max="8" step="1" value="0">`;
    const ageOut = wrap.querySelector('strong');
    wrap.querySelector('input').addEventListener('input', (e) => { s.age = Number(e.target.value); draw(); });
    ctl.append(wrap, squeezeButton(s, draw));
    draw();
  },

  antibiotic(viz, ctl) {
    const s = { bacteria: true, dose: false };
    const o = T('treatment.options.antibiotic');
    const draw = () => {
      const bugs = s.bacteria && !s.dose;
      viz.innerHTML = urinaryTract({
        affected: refluxSide(3, 1, { bacteria: bugs }),
        bladderFill: 0.45,
        bladderBact: s.bacteria ? (s.dose ? 1 : 6) : 0,
      });
    };
    ctl.append(
      toggle(o.bacteria, s.bacteria, (v) => { s.bacteria = v; draw(); }),
      toggle(o.dose, s.dose, (v) => { s.dose = v; draw(); }),
    );
    draw();
  },

  injection(viz, ctl) {
    const s = { squeeze: false, deflux: 0 };
    const o = T('treatment.options.injection');
    const draw = () => (viz.innerHTML = uvjSection({ tunnel: 0.3, ...s, text: uvjText() }));
    let stop = null;
    ctl.append(
      segmented('', [[0, o.undo], [1, o.action]], 0, (v) => {
        stop?.();
        const from = s.deflux;
        stop = animate(700, (k) => { s.deflux = from + (v - from) * k; draw(); });
      }),
      squeezeButton(s, draw),
    );
    draw();
  },

  reimplant(viz, ctl) {
    const s = { squeeze: false, tunnel: 0.25 };
    const o = T('treatment.options.reimplant');
    const draw = () => (viz.innerHTML = uvjSection({ ...s, text: uvjText() }));
    let stop = null;
    ctl.append(
      segmented('', [[0.25, o.before], [0.95, o.after]], 0.25, (v) => {
        stop?.();
        const from = s.tunnel;
        stop = animate(900, (k) => { s.tunnel = from + (v - from) * k; draw(); });
      }),
      squeezeButton(s, draw),
    );
    draw();
  },
};

function squeezeButton(s, draw) {
  const b = document.createElement('button');
  b.className = 'btn primary';
  const label = () => (b.textContent = s.squeeze ? T('treatment.relax') : T('treatment.squeeze'));
  b.addEventListener('click', () => { s.squeeze = !s.squeeze; label(); draw(); });
  label();
  return b;
}

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(OPTIONS).map((key) => ({ ...T(`treatment.options.${key}`), build: OPTIONS[key] })),
  );
}

// ---------- 4. Key points ----------

function renderTakeaways(root) {
  takeaways(root, { title: T('title'), ...T('takeaways') });
}

export default {
  id: 'vur',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: renderTakeaways },
  ],
};
