// Kidney stones chapter.
import { t } from '../i18n.js';
import { urinaryTract, stoneShape, clamp } from '../anatomy.js';
import { segmented, slider, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { ultrasoundProbe } from '../tests.js';

const T = (k) => t(`stones.${k}`);

// ---------- Why it happens (shown last) ----------

// A jar of urine: darker and more crystals as it gets more concentrated.
function crystalJar(conc, text) {
  const shade = (a, b) => Math.round(a + (b - a) * conc);
  const color = `rgb(${shade(251, 222)} ${shade(243, 170)} ${shade(196, 40)})`;
  const n = Math.round(conc * 26);
  let crystals = '';
  for (let i = 0; i < n; i++) {
    // Scatter crystals with a simple repeatable hash.
    const r = (k) => { const v = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return v - Math.floor(v); };
    const x = 85 + r(1) * 125;
    const y = 60 + r(2) * 170;
    crystals += `<rect class="crystal" x="${x}" y="${y}" width="7" height="7" transform="rotate(${(i * 29) % 90} ${x + 3} ${y + 3})"/>`;
  }
  const stone = conc > 0.65 ? stoneShape(150, 248, 8 + 18 * ((conc - 0.65) / 0.35)) : '';
  return `<svg class="anatomy genital" viewBox="0 0 300 300" role="img" aria-label="${text.urine}">
    <rect x="70" y="40" width="160" height="232" rx="18" style="fill:${color}" class="jar"/>
    ${crystals}${stone}
    <text class="lbl small" x="150" y="28" text-anchor="middle">${text.urine}</text>
    ${n ? `<text class="lbl small" x="238" y="120">${text.crystals}</text>` : ''}
    ${stone ? `<text class="lbl small" x="238" y="252">${text.stone}</text>` : ''}
  </svg>`;
}

function renderEmbryology(root) {
  const s = { water: 'low', salt: 'high' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    const conc = clamp({ low: 0.7, ok: 0.4, high: 0.05 }[s.water] + (s.salt === 'high' ? 0.3 : 0));
    viz.innerHTML = crystalJar(conc, T('embryology.jar'));
    const k = conc > 0.65 ? 'bad' : conc > 0.3 ? 'mid' : 'good';
    explain.innerHTML = `<div class="callout ${k === 'good' ? 'good' : k === 'bad' ? 'warn' : ''}"><p>${T(`embryology.texts.${k}`)}</p></div>
      <h3>${T('embryology.riskTitle')}</h3><ul>${T('embryology.risks').map((x) => `<li>${x}</li>`).join('')}</ul>
      <h3>${T('embryology.bladderTitle')}</h3><p>${T('embryology.bladder')}</p>
      <h3>${T('embryology.typesTitle')}</h3><ul>${T('embryology.types').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(
    segmented(T('embryology.waterLabel'), Object.entries(T('embryology.water')), s.water, (v) => { s.water = v; draw(); }),
    segmented(T('embryology.saltLabel'), Object.entries(T('embryology.salt')), s.salt, (v) => { s.salt = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

// Drawing options for a stone at each location; swelling above a blocking stone.
// Arrows: urine slows above a blocking stone and moves normally below it.
const DOWN = { mode: 'down' };
function stoneView(where, size, fragments = false) {
  const stone = { size, fragments };
  const flow = { healthy: { arrows: DOWN }, urethraArrows: 'down' };
  switch (where) {
    case 'calyx': return { ...flow, affected: { stone: { ...stone, at: 'calyx' }, pelvisFill: 1, arrows: DOWN } };
    case 'pelvis': return { ...flow, affected: { stone: { ...stone, at: 'pelvis' }, pelvisFill: 1, arrows: DOWN } };
    case 'upj': return { ...flow, affected: { stone: { ...stone, at: 0.05 }, pelvisDilation: 0.6, pelvisFill: 1, arrows: [{ mode: 'slow', kidney: true, from: 0.03, to: 0.2 }, { mode: 'down', from: 0.15 }] } };
    case 'ureter': return { ...flow, affected: { stone: { ...stone, at: 0.5 }, pelvisDilation: 0.5, ureterDilation: 0.3, pelvisFill: 1, ureterFillTop: 0.5, arrows: [{ mode: 'slow', from: 0, to: 0.42 }, { mode: 'down', from: 0.6 }] } };
    case 'uvj': return { ...flow, affected: { stone: { ...stone, at: 0.95 }, dilation: 0.45, pelvisFill: 1, ureterFillTop: 0.95, arrows: { mode: 'slow', from: 0, to: 0.88 } } };
    case 'bladder': return { ...flow, bladderStone: stone, affected: { pelvisFill: 1, arrows: DOWN } };
    case 'bladderFormed': return { ...flow, bladderStone: { ...stone, size: Math.max(1.2, size * 1.6) }, bladderWall: 0.5, affected: { pelvisFill: 1, arrows: DOWN } };
    default: return { ...flow, affected: { pelvisFill: 1, arrows: DOWN } };
  }
}
const SIZES = { small: 0.3, medium: 0.6, large: 1 };

function renderPathology(root) {
  const s = { where: 'calyx', size: 'small' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const where = T('pathology.where');
  const draw = () => {
    viz.innerHTML = urinaryTract(stoneView(s.where, SIZES[s.size]));
    explain.innerHTML = `<h3>${where[s.where].name}</h3><p>${where[s.where].text}</p>
      ${s.where === 'bladderFormed' ? '' : `<div class="callout"><p>${T(`pathology.sizeText.${s.size}`)}</p></div>`}
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(
    segmented(T('pathology.whereLabel'), Object.entries(where).map(([k, v]) => [k, v.name]), s.where, (v) => { s.where = v; draw(); }),
    segmented(T('pathology.sizeLabel'), Object.entries(T('pathology.sizes')), s.size, (v) => { s.size = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// Step-by-step procedures. Each state is flat so numbers (dilation, scope, sheath) animate between steps.
const PROC_BASE = { at: 'pelvis', size: 0.6, frag: false, stone: true, pd: 0.2, ud: 0, uft: 0, scope: 0, sheath: 0, laser: false, aim: false, shock: false, stent: false, neph: false, flow: '' };
const PROCS = {
  ureteroscopy: [
    { at: 0.5, size: 0.8, pd: 0.5, ud: 0.3, uft: 0.5 },
    { at: 0.5, size: 0.8, pd: 0.5, ud: 0.3, uft: 0.5, scope: 0.5 },
    { at: 0.5, size: 0.8, pd: 0.5, ud: 0.3, uft: 0.5, scope: 0.5, laser: true, frag: true },
    { stone: false, pd: 0.4, ud: 0.2, scope: 0.5 },
    { stone: false, pd: 0.3, stent: true },
    { stone: false, flow: 'down' },
  ],
  pcnl: [
    { size: 1 },
    { size: 1, sheath: 0.5 },
    { size: 1, sheath: 1 },
    { size: 1, sheath: 1, laser: true, frag: true },
    { stone: false, sheath: 1 },
    { stone: false, neph: true },
  ],
  swl: [
    {},
    { aim: true },
    { aim: true, shock: true },
    { shock: true, frag: true },
    { at: 0.55, size: 0.4, frag: true, flow: 'down' },
    { stone: false, flow: 'down' },
  ],
};

function procedure(key) {
  return (viz, ctl) => {
    const captions = T(`treatment.options.${key}.steps`);
    const steps = PROCS[key].map((st, n) => ({ caption: captions[n], state: { ...PROC_BASE, ...st } }));
    return stepPlayer(ctl, steps, (st) => {
      const stone = st.stone ? { at: st.at, size: st.size, fragments: st.frag } : null;
      viz.innerHTML = urinaryTract({
        affected: {
          pelvisFill: 1, pelvisDilation: st.pd, ureterDilation: st.ud, ureterFillTop: st.uft, stone, target: { at: st.at },
          scope: st.scope, sheath: st.sheath, laser: st.laser, aim: st.aim, shock: st.shock, stent: st.stent, nephrostomy: st.neph, flow: st.flow,
        },
      });
    }, t('common.player'));
  };
}

const BUILD = {
  // Ultrasound first (no radiation); low-dose CT only when needed.
  imaging(viz, ctl) {
    const o = T('treatment.options.imaging');
    const draw = (v) => {
      if (v === 'us') {
        viz.innerHTML = urinaryTract(stoneView('ureter', 0.6)).replace(/<\/svg>\s*$/, `${ultrasoundProbe([566, 150, 70], o.probe)}</svg>`);
        return;
      }
      // A child lying on the table, head in the opening of the CT scanner (simplified clinic photo).
      viz.innerHTML = `<svg class="anatomy" viewBox="0 0 600 380" role="img" aria-label="${o.ct}">
        <rect x="0" y="330" width="600" height="50" fill="#e5e7eb"/>
        <rect x="40" y="20" width="300" height="320" rx="60" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
        <path d="M64 120 Q60 250 150 318" fill="none" stroke="#f97316" stroke-width="6" stroke-linecap="round"/>
        <circle cx="200" cy="165" r="92" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
        <circle cx="210" cy="165" r="70" fill="#cbd5e1"/>
        <circle cx="222" cy="165" r="50" fill="#94a3b8" opacity="0.5"/>
        <circle cx="300" cy="140" r="9" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
        <path d="M150 236 L560 236 L590 262 L180 262 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
        <path d="M180 262 L590 262 L590 272 L180 272 Z" fill="#94a3b8"/>
        <rect x="300" y="272" width="200" height="58" fill="#9ca3af"/>
        <ellipse cx="212" cy="222" rx="30" ry="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="232" cy="210" r="20" fill="#f1cdb6" stroke="#c99a80" stroke-width="2"/>
        <path d="M214 200 q8 -16 30 -8" fill="none" stroke="#7a4a2a" stroke-width="8" stroke-linecap="round"/>
        <path d="M250 214 Q300 190 400 200 Q500 196 560 222 L566 240 L246 240 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <path d="M290 202 Q330 196 370 200 L376 238 L288 238 Z" fill="#94a3b8" opacity="0.7"/>
        <text class="lbl" x="200" y="14" text-anchor="middle">${o.ct}</text>
      </svg>`;
    };
    ctl.append(segmented(o.label, Object.entries(o.methods), 'us', draw));
    draw('us');
  },

  // The lab looks at the stone under a microscope; pick a type to see its crystals.
  analysis(viz, ctl) {
    const o = T('treatment.options.analysis');
    const CRYSTALS = {
      oxalate: (x, y) => `<path d="M${x - 12} ${y} L${x} ${y - 12} L${x + 12} ${y} L${x} ${y + 12} Z M${x - 12} ${y} L${x + 12} ${y} M${x} ${y - 12} L${x} ${y + 12}" />`,
      struvite: (x, y) => `<path d="M${x - 18} ${y - 6} L${x - 10} ${y - 12} L${x + 10} ${y - 12} L${x + 18} ${y - 6} L${x + 10} ${y + 10} L${x - 10} ${y + 10} Z M${x - 10} ${y - 12} L${x - 4} ${y} L${x + 4} ${y} L${x + 10} ${y - 12}"/>`,
      cystine: (x, y) => `<path d="M${x - 14} ${y} L${x - 7} ${y - 12} L${x + 7} ${y - 12} L${x + 14} ${y} L${x + 7} ${y + 12} L${x - 7} ${y + 12} Z"/>`,
      uric: (x, y) => `<path d="M${x - 16} ${y} Q${x} ${y - 12} ${x + 16} ${y} Q${x} ${y + 12} ${x - 16} ${y} Z"/>`,
      phosphate: (x, y) => [0, 40, 80, 120, 160].map((a) => `<line x1="${x}" y1="${y}" x2="${(x + 16 * Math.cos((a * Math.PI) / 180)).toFixed(1)}" y2="${(y - 16 * Math.sin((a * Math.PI) / 180)).toFixed(1)}"/>`).join(''),
    };
    const SPOTS = [[430, 120], [480, 150], [455, 205], [395, 175], [510, 205], [415, 240], [490, 95]];
    const draw = (type) => {
      viz.innerHTML = `<svg class="anatomy" viewBox="0 0 600 330" role="img" aria-label="${o.scope}">
        <g stroke="#1f2937" stroke-width="4" stroke-linejoin="round">
          <rect x="70" y="288" width="200" height="22" rx="4" fill="#e5e7eb"/>
          <path d="M214 288 Q172 250 196 200 Q214 166 214 128 L250 120 Q262 170 244 214 Q230 252 262 288 Z" fill="#e5e7eb"/>
          <circle cx="236" cy="118" r="26" fill="#e5e7eb"/><circle cx="236" cy="118" r="12" fill="#4b5563"/>
          <g transform="rotate(-28 170 120)">
            <rect x="150" y="40" width="44" height="130" fill="#f9fafb"/>
            <rect x="156" y="8" width="32" height="34" fill="#4b5563"/>
            <rect x="140" y="168" width="64" height="16" fill="#9ca3af"/>
            <rect x="158" y="184" width="28" height="36" fill="#4b5563"/>
          </g>
          <path d="M96 222 L210 252 L204 268 L90 238 Z" fill="#4b5563"/>
          <path d="M150 262 L136 288" fill="none"/>
        </g>
        <circle cx="168" cy="242" r="6" fill="#b45309"/>
        <line x1="180" y1="236" x2="340" y2="170" stroke="#94a3b8" stroke-dasharray="6 5"/>
        <circle cx="455" cy="165" r="120" fill="#f8fafc" stroke="#334155" stroke-width="5"/>
        <g fill="rgb(180 83 9 / 0.18)" stroke="#b45309" stroke-width="2.5">${SPOTS.map(([x, y]) => CRYSTALS[type](x, y)).join('')}</g>
        <text class="lbl" x="455" y="312" text-anchor="middle">${o.types[type].name}</text>
        <text class="lbl small" x="170" y="328" text-anchor="middle">${o.scope}</text>
      </svg>`;
      explainType.innerHTML = `<div class="callout"><p>${o.types[type].text}</p></div>`;
    };
    const explainType = document.createElement('div');
    ctl.append(segmented(o.typeLabel, Object.entries(o.types).map(([k, v]) => [k, v.name]), 'oxalate', draw), explainType);
    draw('oxalate');
  },

  // A 24-hour urine collection jug, and what the test looks for.
  metabolic(viz) {
    const o = T('treatment.options.metabolic');
    const marks = [0, 1, 2, 3].map((i) => `<line x1="92" y1="${300 - i * 50}" x2="112" y2="${300 - i * 50}" stroke="#7c2d12" stroke-width="2"/><text x="118" y="${304 - i * 50}" font-size="12" fill="#7c2d12">${i ? `${i} L` : ''}</text>`).join('');
    viz.innerHTML = `<div class="kit">
      <svg class="anatomy" viewBox="0 0 360 340" role="img" aria-label="${o.jug}">
        <path d="M196 112 L196 86 Q196 62 220 62 L262 62 Q286 62 286 86 L286 112" fill="none" stroke="#c2410c" stroke-width="26" stroke-linejoin="round"/>
        <path d="M196 112 L196 86 Q196 62 220 62 L262 62 Q286 62 286 86 L286 112" fill="none" stroke="#ea6a1f" stroke-width="20" stroke-linejoin="round"/>
        <rect x="80" y="104" width="226" height="222" rx="22" fill="#ea6a1f" stroke="#c2410c" stroke-width="3"/>
        <rect x="104" y="80" width="54" height="30" fill="#ea6a1f" stroke="#c2410c" stroke-width="3"/>
        <rect x="92" y="52" width="78" height="32" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
        <rect x="122" y="34" width="18" height="20" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
        ${marks}
        <text class="lbl small" x="190" y="230" text-anchor="middle" fill="#fff">24 h</text>
      </svg>
      <div><h4>${o.listTitle}</h4><ul class="risk-list">${o.risks.map((r) => `<li>${r}</li>`).join('')}</ul></div>
    </div>`;
  },

  pass(viz, ctl) {
    const o = T('treatment.options.pass');
    // Over about 4 weeks the stone travels down the ureter, into the bladder, then out into a strainer.
    const strainer = (caught) => `<g class="strainer">
      <path d="M310 505 Q345 500 370 470" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
      <path d="M370 440 L470 440 Q462 490 420 494 Q378 490 370 440 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>
      <path d="M378 452 L462 452 M384 466 L456 466 M394 480 L446 480" stroke="#94a3b8" stroke-dasharray="3 3"/>
      <rect x="470" y="436" width="50" height="8" rx="4" fill="#64748b"/>
      ${caught ? '<circle cx="420" cy="472" r="8" fill="#b45309"/>' : ''}
      <text class="lbl small" x="420" y="516" text-anchor="middle">${o.strainer}</text></g>`;
    const draw = (d) => {
      const k = d / 28;
      let svg;
      if (k < 0.75) {
        const at = 0.25 + (0.95 - 0.25) * (k / 0.75);
        svg = urinaryTract({ affected: { stone: { at, size: 0.35 }, pelvisDilation: 0.4 * (1 - k), pelvisFill: 1 } });
      } else if (k < 1) svg = urinaryTract({ bladderStone: { size: 0.35 }, voiding: true, affected: { pelvisFill: 1 } });
      else svg = urinaryTract({ affected: { pelvisFill: 1 } });
      viz.innerHTML = svg.replace(/<\/svg>\s*$/, `${strainer(k >= 1)}</svg>`);
    };
    ctl.append(slider(o.control, { min: 0, max: 28, step: 7, value: 0, format: (v) => `${v / 7} ${o.weeks}` }, draw));
    draw(0);
  },
  // Fever with a blocking stone: drain the kidney right away with a stent or a nephrostomy tube.
  drain(viz, ctl) {
    const o = T('treatment.options.drain');
    const sick = { stone: { at: 0.5, size: 0.7 }, pelvisDilation: 0.6, ureterDilation: 0.3, ureterFillTop: 0.5, pelvisFill: 1, inflamed: true, bactPelvis: true, stent: false, nephrostomy: false };
    const holder = document.createElement('div');
    holder.className = 'controls';
    let stop = null;
    const build = (method) => {
      stop?.();
      holder.innerHTML = '';
      const tube = method === 'stent' ? { stent: true } : { nephrostomy: true };
      const states = [sick, { ...sick, ...tube, pelvisDilation: 0.45 }, { ...sick, ...tube, inflamed: false, bactPelvis: false, pelvisDilation: 0.3, ureterDilation: 0.1 }];
      const steps = states.map((st, n) => ({ caption: o[`${method}Steps`][n], state: st }));
      stop = stepPlayer(holder, steps, (st) => (viz.innerHTML = urinaryTract({ affected: st })), t('common.player'));
    };
    ctl.append(segmented(o.methodLabel, Object.entries(o.methods), 'stent', build), holder);
    build('stent');
    return () => stop?.();
  },

  ureteroscopy: procedure('ureteroscopy'),
  swl: procedure('swl'),
  // Bladder stone removal: transurethral, percutaneous or open, each step by step.
  bladderRemoval(viz, ctl) {
    const o = T('treatment.options.bladderRemoval');
    const base = { stone: true, frag: false, lift: 0, scope: 0, sheath: 0, cut: 0, closed: false, laser: false, catheter: false, channel: false, cs: 0 };
    const STATES = {
      transurethral: [{}, { scope: 1 }, { scope: 1, laser: true, frag: true }, { stone: false, scope: 1 }, { stone: false, catheter: true }, { stone: false }],
      percutaneous: [{}, { sheath: 0.5 }, { sheath: 1 }, { sheath: 1, laser: true, frag: true }, { stone: false, sheath: 1 }, { stone: false, catheter: true }],
      channel: [
        { channel: true }, { channel: true, cs: 1 }, { channel: true, cs: 1, laser: true, frag: true },
        { channel: true, cs: 1, stone: false }, { channel: true, stone: false }, { channel: true, stone: false },
      ],
      open: [{}, { cut: 1 }, { cut: 2 }, { cut: 2, lift: 1 }, { stone: false, closed: true, cut: 1 }, { stone: false, closed: true, catheter: true }],
    };
    const holder = document.createElement('div');
    holder.className = 'controls';
    let stop = null;
    const build = (method) => {
      stop?.();
      holder.innerHTML = '';
      const steps = STATES[method].map((st, n) => ({ caption: o[`${method}Steps`][n], state: { ...base, ...st } }));
      stop = stepPlayer(holder, steps, (st) => {
        viz.innerHTML = urinaryTract({
          bladderStone: st.stone ? { size: 1.2, fragments: st.frag, lift: st.lift } : null,
          bladderWall: 0.5, bladderFill: 0.7, catheter: st.catheter, affected: { pelvisFill: 1 },
          bladderProc: { scope: st.scope, sheath: st.sheath, cut: st.cut, closed: st.closed, laser: st.laser, channel: st.channel, channelScope: st.cs },
        });
      }, t('common.player'));
    };
    ctl.append(segmented(o.methodLabel, Object.entries(o.methods), 'transurethral', build), holder);
    build('transurethral');
    return () => stop?.();
  },
  pcnl: procedure('pcnl'),
  // Big, easy-to-read habit list with an icon for each.
  prevention(viz) {
    const o = T('treatment.options.prevention');
    const icons = ['💧', '🧂', '🥛', '🍋', '🥤', '💊'];
    viz.innerHTML = `<ul class="habit-list">${o.habits.map((h, i) => `<li><span class="icon" aria-hidden="true">${icons[i]}</span><span>${h}</span></li>`).join('')}</ul>`;
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ key, ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'stones',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
