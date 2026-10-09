// Kidney stones chapter.
import { t } from '../i18n.js';
import { urinaryTract, stoneShape, clamp } from '../anatomy.js';
import { segmented, slider, animate, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`stones.${k}`);

// ---------- 1. How it forms ----------

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
      <h3>${T('embryology.bladderTitle')}</h3><p>${T('embryology.bladder')}</p>`;
  };
  ctl.append(
    segmented(T('embryology.waterLabel'), Object.entries(T('embryology.water')), s.water, (v) => { s.water = v; draw(); }),
    segmented(T('embryology.saltLabel'), Object.entries(T('embryology.salt')), s.salt, (v) => { s.salt = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

// Drawing options for a stone at each location; swelling above a blocking stone.
function stoneView(where, size, fragments = false) {
  const stone = { size, fragments };
  switch (where) {
    case 'calyx': return { affected: { stone: { ...stone, at: 'calyx' }, pelvisFill: 1 } };
    case 'pelvis': return { affected: { stone: { ...stone, at: 'pelvis' }, pelvisFill: 1 } };
    case 'upj': return { affected: { stone: { ...stone, at: 0.05 }, pelvisDilation: 0.6, pelvisFill: 1 } };
    case 'ureter': return { affected: { stone: { ...stone, at: 0.5 }, pelvisDilation: 0.5, ureterDilation: 0.3, pelvisFill: 1, ureterFillTop: 0.5 } };
    case 'uvj': return { affected: { stone: { ...stone, at: 0.95 }, dilation: 0.45, pelvisFill: 1, ureterFillTop: 0.95 } };
    case 'bladder': return { bladderStone: stone, affected: { pelvisFill: 1 } };
    case 'bladderFormed': return { bladderStone: { ...stone, size: Math.max(1.2, size * 1.6) }, bladderWall: 0.5, affected: { pelvisFill: 1 } };
    default: return { affected: { pelvisFill: 1 } };
  }
}

function renderPathology(root) {
  const s = { where: 'ureter', size: 'small' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const where = T('pathology.where');
  const draw = () => {
    viz.innerHTML = urinaryTract(stoneView(s.where, s.size === 'small' ? 0.35 : 1));
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
  pass(viz, ctl) {
    const o = T('treatment.options.pass');
    // The stone travels down the ureter, into the bladder, then out.
    const draw = (d) => {
      const k = d / 14;
      if (k < 0.75) {
        const at = 0.25 + (0.95 - 0.25) * (k / 0.75);
        viz.innerHTML = urinaryTract({ affected: { stone: { at, size: 0.35 }, pelvisDilation: 0.4 * (1 - k), pelvisFill: 1 } });
      } else if (k < 1) viz.innerHTML = urinaryTract({ bladderStone: { size: 0.35 }, voiding: true, affected: { pelvisFill: 1 } });
      else viz.innerHTML = urinaryTract({ affected: { pelvisFill: 1 } });
    };
    ctl.append(slider(o.control, { min: 0, max: 14, step: 1, value: 0, format: (v) => `${v} ${o.days}` }, draw));
    draw(0);
  },
  ureteroscopy: procedure('ureteroscopy'),
  swl: procedure('swl'),
  // Bladder stone removal: transurethral, percutaneous or open, each step by step.
  bladderRemoval(viz, ctl) {
    const o = T('treatment.options.bladderRemoval');
    const base = { stone: true, frag: false, lift: 0, scope: 0, sheath: 0, cut: 0, closed: false, laser: false, catheter: false };
    const STATES = {
      transurethral: [{}, { scope: 1 }, { scope: 1, laser: true, frag: true }, { stone: false, scope: 1 }, { stone: false, catheter: true }, { stone: false }],
      percutaneous: [{}, { sheath: 0.5 }, { sheath: 1 }, { sheath: 1, laser: true, frag: true }, { stone: false, sheath: 1 }, { stone: false, catheter: true }],
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
          bladderProc: { scope: st.scope, sheath: st.sheath, cut: st.cut, closed: st.closed, laser: st.laser },
        });
      }, t('common.player'));
    };
    ctl.append(segmented(o.methodLabel, Object.entries(o.methods), 'transurethral', build), holder);
    build('transurethral');
    return () => stop?.();
  },
  pcnl: procedure('pcnl'),
  prevention: (viz) => { viz.innerHTML = urinaryTract({ affected: { pelvisFill: 1, flow: 'down' }, healthy: { flow: 'down' }, voiding: true }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
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
