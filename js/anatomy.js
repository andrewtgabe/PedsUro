// Shared anatomy drawings, reused across chapters. Each drawing function
// returns SVG markup so a chapter can simply re-render on every control change.
import { t } from './i18n.js';

export const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const f = (n) => n.toFixed(1);
const unit = (x, y) => {
  const l = Math.hypot(x, y) || 1;
  return [x / l, y / l];
};

const KIDNEY_PATH =
  'M455 35 C530 35 540 215 455 215 C418 215 400 185 408 158 C412 144 405 136 405 125 C405 114 412 106 408 92 C400 62 418 35 455 35 Z';
const NARROW_W = 3;

function wavyLine(start, end, tort = 0, n = 60) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const [nx, ny] = unit(-dy, dx);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const s = i / n;
    const off = tort * 26 * Math.sin(Math.PI * s) * Math.sin(Math.PI * 3 * s);
    pts.push([start[0] + dx * s + nx * off, start[1] + dy * s + ny * off]);
  }
  return pts;
}

const polyPath = (pts) => 'M' + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join(' L');
const subPts = (pts, a, b) => pts.slice(Math.round(a * (pts.length - 1)), Math.round(b * (pts.length - 1)) + 1);
const at = (pts, s) => pts[Math.round(clamp(s) * (pts.length - 1))];

export const bacterium = (x, y, rot = 0) =>
  `<rect class="bact" x="${f(x - 6)}" y="${f(y - 2.5)}" width="12" height="5" rx="2.5" transform="rotate(${rot} ${f(x)} ${f(y)})"/>`;

// Jagged stone outline centred on (x, y).
export function stoneShape(x, y, r) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI * 2 * i) / 10;
    const rr = r * (i % 2 ? 0.72 : 1) * (1 + 0.12 * Math.sin(i * 2.3));
    pts.push(`${f(x + rr * Math.cos(a))} ${f(y + rr * Math.sin(a))}`);
  }
  return `<path class="stone" d="M${pts.join(' L')} Z"/>`;
}

// One stone, or a few fragments after it is broken up.
const stoneAt = (x, y, r, fragments) =>
  fragments
    ? [[-r, -r * 0.4], [r * 0.6, -r * 0.8], [0, r * 0.7], [r, r * 0.4]].map(([dx, dy]) => stoneShape(x + dx, y + dy, r * 0.35)).join('')
    : stoneShape(x, y, r);

export function bladderGeom(fill) {
  const cx = 300;
  const cy = 432;
  const rx = 56 + 44 * fill;
  const ry = 36 + 28 * fill;
  return { cx, cy, rx, ry, entry: [cx + rx * 0.72, cy - ry * 0.7] };
}

// ---------- building blocks ----------

// A renal pelvis with its calyces. `size` shrinks it for each half of a
// duplex kidney; `xf` maps points when the kidney is moved/scaled.
function makeCS({ pc, tips, d = 0, blunt = 0, fill = 0, size = 1, xf = (p) => p, scale = 1 }) {
  const calyces = tips.map(([x, y]) => {
    const [ux, uy] = unit(x - pc[0], y - pc[1]);
    return xf([x + ux * 7 * d, y + uy * 7 * d]);
  });
  const k = size * scale;
  return {
    pc: xf([pc[0] - 8 * d * size, pc[1]]),
    calyces,
    prx: (11 + 26 * d) * k,
    pry: (13 + 20 * d) * k,
    infW: (7 + 8 * d) * k,
    cr: (9 + 8 * blunt + 9 * clamp(d * 2 - 1)) * k,
    pap: 8 * (1 - Math.max(blunt, clamp(d * 1.6 - 0.6))) * k,
    fill: clamp(fill),
  };
}

const csShapes = (c, e) =>
  c.calyces
    .map(
      ([x, y]) =>
        `<line x1="${f(c.pc[0])}" y1="${f(c.pc[1])}" x2="${f(x)}" y2="${f(y)}" stroke-width="${f(c.infW + e * 2)}"/><circle cx="${f(x)}" cy="${f(y)}" r="${f(c.cr + e)}"/>`,
    )
    .join('') + `<ellipse cx="${f(c.pc[0])}" cy="${f(c.pc[1])}" rx="${f(c.prx + e)}" ry="${f(c.pry + e)}"/>`;

// Width segments along a ureter: optional narrow piece at the top (UPJ)
// and/or bottom (UVJ). `narrowW` lets treatment animations open a narrowing.
function ureterSegs(w, { upj = false, uvj = false, narrowW = NARROW_W } = {}) {
  const top = upj ? 0.09 : 0;
  const bottom = uvj ? 0.86 : 1;
  const segs = [];
  if (upj) segs.push({ a: 0, b: top, w: narrowW });
  segs.push({ a: top, b: bottom, w });
  if (uvj) segs.push({ a: bottom, b: 1, w: narrowW });
  return segs;
}

// Draws pelves and tubes in three passes (wall, lumen, urine) so that
// junctions look continuous.
//   tube: { pts, segs, fill (fraction filled, measured from the bladder end), flow }
function drawSystem(css, tubes) {
  const wall = [];
  const lumen = [];
  const urine = [];
  for (const tb of tubes) {
    for (const sg of tb.segs) {
      const d = polyPath(subPts(tb.pts, sg.a, sg.b));
      wall.push(`<path d="${d}" stroke-width="${f(sg.w + 6)}"/>`);
      lumen.push(`<path d="${d}" stroke-width="${f(sg.w)}"/>`);
      const lf = clamp((sg.b - (1 - (tb.fill || 0))) / (sg.b - sg.a));
      if (lf > 0) urine.push(`<path d="${d}" stroke-width="${f(sg.w)}" pathLength="1" stroke-dasharray="0 ${f(1 - lf)} ${f(lf)} 1"/>`);
      // Urine backed up from the kidney end (above a blockage).
      const tf = clamp(((tb.fillTop || 0) - sg.a) / (sg.b - sg.a));
      if (tf > 0) urine.push(`<path d="${d}" stroke-width="${f(sg.w)}" pathLength="1" stroke-dasharray="${f(tf)} 1"/>`);
    }
  }
  for (const c of css) {
    wall.push(csShapes(c, 3));
    lumen.push(csShapes(c, 0));
    if (c.fill > 0) urine.push(`<g opacity="${f(c.fill)}">${csShapes(c, 0)}</g>`);
  }
  const papillae = css
    .flatMap((c) =>
      c.calyces.map(([x, y]) => {
        if (c.pap < 0.5) return '';
        const [ux, uy] = unit(x - c.pc[0], y - c.pc[1]);
        return `<circle class="papilla" cx="${f(x + ux * (c.cr + 1))}" cy="${f(y + uy * (c.cr + 1))}" r="${f(c.pap)}"/>`;
      }),
    )
    .join('');
  const flows = tubes
    .filter((tb) => tb.flow)
    .map((tb) => `<path class="flowline ${tb.flow}" d="${polyPath(tb.pts)}"/>`)
    .join('');
  return `<g class="L-wall">${wall.join('')}</g><g class="L-lumen">${lumen.join('')}</g><g class="L-urine">${urine.join('')}</g>${papillae}${flows}`;
}

function bacteriaAlong(pts, spread, from = 1) {
  let out = '';
  for (let k = 0; k < 6; k++) {
    const [x, y] = at(pts, from - spread * ((k + 0.5) / 6));
    out += bacterium(x, y, 60 + k * 37);
  }
  return out;
}

const stentPath = (pts) => {
  const [sx, sy] = pts[0];
  const [ex, ey] = pts[pts.length - 1];
  return `<g class="stent"><path d="${polyPath(pts)}"/><circle cx="${f(sx + 4)}" cy="${f(sy - 8)}" r="8"/><circle cx="${f(ex - 6)}" cy="${f(ey + 10)}" r="8"/></g>`;
};

// ---------- single kidney + ureter ----------

// Drawn on the screen-right side; the other side is the same drawing mirrored.
//   dilation (or pelvisDilation / ureterDilation), tort, blunt: 0..1 shape
//   ureterFill: fraction of ureter holding urine, from the bladder up
//   ureterFillTop: fraction holding urine from the kidney down (above a blockage)
//   pelvisFill: 0..1 urine in the pelvis and calyces
//   upj / uvj: narrowing at the top / bottom of the ureter; narrowW: its width
//   mark: circle the narrowing; vessel: crossing blood vessel at the UPJ
//   flow: '' | 'down' | 'slow' animated urine flow; stent: show a stent
//   bactSpread: 0..1 bacteria moving up; scar: kidney scar
//   kidney: { s, dy } scale and vertical shift (fetal kidney ascent)
//   gap: 0..1 ureter cut away from the pelvis (pyeloplasty); excised: removed narrow piece shown aside
//   stitches: new pelvis-to-ureter connection sewn; vesselBehind: crossing vessel behind the ureter
//   ureterostomy: ureter brought out to the skin; inflamed: infected kidney; stone: { at: 'calyx' | 'pelvis' | 0..1 along ureter, size, fragments }
function upperTract(o, g) {
  const pd = clamp(o.pelvisDilation ?? o.dilation ?? 0);
  const ud = clamp(o.ureterDilation ?? o.dilation ?? 0);
  const s = o.kidney?.s ?? 1;
  const dy = o.kidney?.dy ?? 0;
  const xf = ([x, y]) => [455 + (x - 455) * s, 125 + (y - 125) * s + dy];

  const cs = makeCS({ pc: [414, 128], tips: [[466, 74], [484, 126], [466, 178]], d: pd, blunt: o.blunt || 0, fill: o.pelvisFill, xf, scale: s });
  const joint = [cs.pc[0] - 2, cs.pc[1] + cs.pry - 6];
  const gap = clamp(o.gap || 0);
  const start = [joint[0] + 6 * gap, joint[1] + 34 * gap];
  // A ureterostomy brings the ureter out to the skin of the lower belly.
  const end = o.ureterostomy ? [520, 330] : g.entry;
  const pts = wavyLine(start, end, clamp(o.tort || 0));
  const uW = (8 + 18 * ud) * Math.max(s, 0.6);
  const tube = { pts, segs: ureterSegs(uW, o), fill: o.ureterFill, fillTop: o.ureterFillTop, flow: o.flow };

  const spread = clamp(o.bactSpread || 0);
  let bact = spread > 0 ? bacteriaAlong(pts, spread) : '';
  if (spread >= 1) bact += bacterium(...cs.pc, 20) + bacterium(...cs.calyces[0], 70) + bacterium(...cs.calyces[2], 130);
  if (o.bactPelvis) bact += bacterium(cs.pc[0] - 6, cs.pc[1] - 4, 20) + bacterium(cs.pc[0] + 8, cs.pc[1] + 6, 100) + bacterium(...cs.calyces[1], 60);

  const narrowAt = o.upj ? at(pts, 0.05) : o.uvj ? at(pts, 0.93) : null;
  const mark = o.mark && narrowAt ? `<circle class="mark" cx="${f(narrowAt[0])}" cy="${f(narrowAt[1])}" r="20"/>` : '';
  // Crossing vessel near the UPJ. Normally drawn in front of the ureter;
  // vesselBehind shows it after the ureter is moved in front (pyeloplasty).
  const vessel = o.vessel
    ? `<path class="vessel" d="M330 ${f(joint[1] + 30)} C 380 ${f(joint[1] + 22)} ${f(joint[0] + 10)} ${f(joint[1] + 2)} 452 ${f(joint[1] + 30)}"/>`
    : '';
  const scar = o.scar ? `<path class="scar" d="M430 42 Q446 62 456 50 Q466 64 482 54 Q474 36 455 34 Q438 34 430 42 Z"/>` : '';

  return `<g class="${o.pale ? 'pale-k' : ''}">
    <path class="kidney ${o.pale ? 'pale' : ''}" d="${KIDNEY_PATH}" ${s !== 1 || dy ? `transform="translate(${f(455 - 455 * s)} ${f(125 - 125 * s + dy)}) scale(${f(s)})"` : ''}/>
    ${scar}
    ${o.vesselBehind ? vessel : ''}
    ${drawSystem([cs], [tube])}
    ${o.vesselBehind ? '' : vessel}${mark}
    ${o.stent ? stentPath(pts) : ''}
    ${gap > 0.05 ? `<path class="cutline" d="M${f(joint[0] - 9)} ${f(joint[1] + 2)} L${f(joint[0] + 9)} ${f(joint[1] + 2)} M${f(start[0] - 8)} ${f(start[1])} L${f(start[0] + 8)} ${f(start[1])}"/>` : ''}
    ${o.excised ? `<g class="excised"><line x1="${f(joint[0] - 46)}" y1="${f(joint[1] + 4)}" x2="${f(joint[0] - 40)}" y2="${f(joint[1] + 30)}"/></g>` : ''}
    ${o.stitches ? [-10, 0, 10].map((dx) => `<path class="stitch" d="M${f(joint[0] + dx - 4)} ${f(joint[1])} l8 8 m0 -8 l-8 8"/>`).join('') : ''}
    ${o.ureterostomy ? `<line class="skin" x1="530" y1="270" x2="530" y2="390"/><circle class="stoma" cx="528" cy="330" r="9"/>` : ''}
    ${o.stone ? stoneMarkup(o.stone, cs, pts) : ''}
    ${o.inflamed ? `<path class="inflamed" d="${KIDNEY_PATH}"/>` : ''}
    ${bact}</g>`;
}

function stoneMarkup(st, cs, pts) {
  const r = 5 + 15 * (st.size ?? 0.5);
  let x;
  let y;
  if (st.at === 'calyx') [x, y] = cs.calyces[2];
  else if (st.at === 'pelvis') [x, y] = cs.pc;
  else [x, y] = at(pts, st.at);
  return stoneAt(x, y, r, st.fragments);
}

// ---------- duplex kidney ----------

//   type: 'partial' (ureters join, one opening) | 'complete' (two openings)
//   upper / lower: { dilation, pelvisFill, ureterFill, blunt } per half
//   ureterocele: 0..1 balloon at the end of the upper ureter (0 = none)
//   ureteroceleCut: opened by puncture; ectopic: upper ureter ends in urethra
//   joined: upper ureter joined to lower one (ureteroureterostomy)
//   upperRemoved: top half removed (partial nephrectomy)
function duplexTract(o, g) {
  const up = o.upper || {};
  const lo = o.lower || {};
  const upperCS = makeCS({ pc: [416, 92], tips: [[462, 60], [486, 100]], d: clamp(up.dilation || 0), fill: up.pelvisFill, size: 0.75 });
  const lowerCS = makeCS({ pc: [416, 162], tips: [[488, 146], [468, 190]], d: clamp(lo.dilation || 0), blunt: lo.blunt || 0, fill: lo.pelvisFill, size: 0.75 });

  // Lower-half ureter opens higher and to the side; upper-half ureter opens
  // lower and toward the middle (Weigert–Meyer rule).
  const eLower = [g.cx + g.rx * 0.82, g.cy - g.ry * 0.58];
  const eUpper = o.ectopic ? [g.cx + 14, g.cy + g.ry + 24] : [g.cx + g.rx * 0.5, g.cy - g.ry * 0.25];
  const uw = (d) => 8 + 18 * clamp(d || 0);

  const lowerPts = wavyLine([lowerCS.pc[0] - 2, lowerCS.pc[1] + lowerCS.pry - 4], o.type === 'partial' ? g.entry : eLower, (lo.dilation || 0) * 0.4);
  const tubes = [{ pts: lowerPts, segs: ureterSegs(uw(lo.dilation)), fill: lo.ureterFill }];
  const css = [lowerCS];

  const removed = o.upperRemoved;
  let upperPts = null;
  if (!removed) {
    css.push(upperCS);
    const ustart = [upperCS.pc[0] - 6, upperCS.pc[1] + upperCS.pry - 2];
    const target = o.type === 'partial' ? at(lowerPts, 0.45) : o.joined ? at(lowerPts, 0.8) : eUpper;
    if (o.ectopic && o.type === 'complete') {
      // Runs outside the bladder and ends in the urethra.
      const side = [g.cx + g.rx + 16, g.cy + 6];
      const below = [g.cx + g.rx * 0.45, g.cy + g.ry + 14];
      upperPts = [...wavyLine(ustart, side, (up.dilation || 0) * 0.3, 40), ...wavyLine(side, below, 0, 10).slice(1), ...wavyLine(below, eUpper, 0, 10).slice(1)];
    } else {
      upperPts = wavyLine(ustart, target, (up.dilation || 0) * 0.5);
      // The upper ureter runs medial to the lower one for most of its length.
      upperPts = upperPts.map(([x, y], i) => [x - 14 * Math.sin((Math.PI * i) / (upperPts.length - 1)), y]);
    }
    tubes.push({ pts: upperPts, segs: ureterSegs(uw(up.dilation)), fill: up.ureterFill });
  }

  const clip = `<clipPath id="kclip"><path d="${KIDNEY_PATH}"/></clipPath>`;
  const removedShape = removed
    ? `<path class="removed" d="M380 20 L560 20 L560 120 L380 120 Z" clip-path="url(#kclip)"/><path class="cutline" d="M380 120 L560 120" clip-path="url(#kclip)"/>`
    : '';

  let over = '';
  if (!removed && o.type === 'complete' && !o.ectopic && !o.joined && o.ureterocele > 0) {
    // A large ureterocele can slide down and block the bladder outlet.
    const r = (o.ureteroceleNeck ? 14 : 10) + (o.ureteroceleNeck ? 28 : 20) * o.ureterocele;
    const [x, y] = o.ureteroceleNeck ? [g.cx + 14, g.cy + g.ry * 0.45] : [g.cx + g.rx * 0.55, g.cy + g.ry * 0.2];
    over = `<ellipse class="ureterocele ${o.ureteroceleCut ? 'cut' : ''}" cx="${f(x)}" cy="${f(y)}" rx="${f(r)}" ry="${f(r * 0.85)}"/>`;
    if (o.ureteroceleCut) over += `<path class="slit" d="M${f(x - 6)} ${f(y + r * 0.5)} L${f(x + 6)} ${f(y + r * 0.5)}"/>`;
  }

  const under = `${clip}<path class="kidney" d="${KIDNEY_PATH}"/>${removedShape}${drawSystem(css, tubes)}`;
  return { under, over, upperPts, lowerPts };
}

// ---------- whole urinary tract ----------

//   affected / healthy: options for upperTract (screen right / left);
//     affected.duplex: options for duplexTract instead
//   bladderFill: 0..1; bladderBact: number of bacteria; voiding: urine stream
//   bladderWall: 0..1 thickening; urethraBlock: valve in the urethra
//   catheter: tube draining the bladder through the urethra
//   vesicostomy: opening from the bladder to the belly skin; vesicostomyLabel. A number 0–3 draws the
//   build-up (1 skin cut, 2 dome brought up, 3 open and draining); `true` = 3. vesicostomyClosed: healed scar.
//   urethraBact: bacteria at the urethra; bladderStone: { size, fragments }
//   bladderRed: irritated bladder lining (infection)
//   sideLabels: [left, right]; labels: false hides anatomy labels
export function urinaryTract({
  affected = {},
  healthy = {},
  bladderFill = 0.7,
  bladderBact = 0,
  voiding = false,
  bladderWall = 0,
  urethraBlock = false,
  catheter = false,
  vesicostomy = false,
  vesicostomyLabel = '',
  vesicostomyClosed = false,
  urethraBact = false,
  bladderStone = null,
  bladderRed = false,
  sideLabels,
  labels = true,
} = {}) {
  const g = bladderGeom(clamp(bladderFill));
  const bottom = g.cy + g.ry;
  const spots = [[-30, -8], [22, -16], [4, 12], [-48, 10], [44, 6], [-12, -22], [30, 18], [-26, 22]];
  const bact = spots
    .slice(0, bladderBact)
    .map(([x, y], i) => bacterium(g.cx + x * (g.rx / 100), g.cy + y * (g.ry / 64), i * 41))
    .join('');

  const right = affected.duplex ? duplexTract(affected.duplex, g) : { under: upperTract(affected, g), over: '' };

  return `<svg class="anatomy" viewBox="0 0 600 530" role="img" aria-label="${t('common.labels.kidney')}, ${t('common.labels.ureter')}, ${t('common.labels.bladder')}">
    <g transform="translate(600 0) scale(-1 1)">${upperTract(healthy, g)}</g>
    ${right.under}
    <line class="urethra" x1="300" y1="${f(bottom)}" x2="300" y2="512"/>
    ${urethraBlock ? `<path class="valve" d="M288 ${f(bottom + 16)} L300 ${f(bottom + 24)} L312 ${f(bottom + 16)}"/>` : ''}
    ${voiding ? `<line class="stream" x1="300" y1="512" x2="300" y2="530"/>` : ''}
    <ellipse class="bladder" cx="${g.cx}" cy="${g.cy}" rx="${f(g.rx)}" ry="${f(g.ry)}" style="stroke-width:${f(9 + 14 * bladderWall)}"/>
    ${bladderRed ? `<ellipse class="bladder-red" cx="${g.cx}" cy="${g.cy}" rx="${f(g.rx - 4)}" ry="${f(g.ry - 4)}"/>` : ''}
    ${right.over}
    ${bact}
    ${urethraBact ? bacterium(296, 498, 80) + bacterium(304, 486, 100) + bacterium(297, 474, 70) : ''}
    ${bladderStone ? stoneAt(g.cx + 12, g.cy + g.ry * 0.45, 6 + 12 * (bladderStone.size ?? 0.5), bladderStone.fragments) : ''}
    ${catheter ? `<g class="catheter"><path d="M300 530 L300 ${f(g.cy + g.ry * 0.25)}"/><circle cx="300" cy="${f(g.cy + g.ry * 0.25)}" r="7"/></g>` : ''}
    ${(() => {
      const v = vesicostomy === true ? 3 : +vesicostomy || 0;
      const top = g.cy - g.ry, sk = top - 40;
      if (v < 0.05 && !vesicostomyClosed) return '';
      const skin = `<line class="skin" x1="${g.cx - 70}" y1="${f(sk)}" x2="${g.cx + 70}" y2="${f(sk)}"/>`;
      if (vesicostomyClosed) return `<g class="vesicostomy">${skin}<path class="scar" d="M${g.cx - 14} ${f(sk)} h28"/></g>`;
      const rise = clamp(v - 1);
      const tube = rise > 0 ? `<path d="M${g.cx} ${f(top)} L${g.cx} ${f(top - 40 * rise)}"/>` : '<path d="M0 0"/>';
      const cut = v < 2.5 ? `<path class="incision" d="M${g.cx - 16} ${f(sk)} h32"/>` : '';
      const open = v >= 2.5 ? `<path class="stream" d="M${g.cx} ${f(sk - 2)} L${g.cx} ${f(sk - 20)}"/>
           <text class="lbl small" x="${g.cx + 76}" y="${f(sk + 4)}">${vesicostomyLabel}</text>` : '';
      return `<g class="vesicostomy">${tube}${skin}${cut}${open}</g>`;
    })()}
    ${
      labels
        ? `<text class="lbl" x="455" y="${f(150 + 90 * (affected.kidney?.s ?? 1) + (affected.kidney?.dy ?? 0))}" text-anchor="middle">${t('common.labels.kidney')}</text>
    <text class="lbl" x="${f(g.cx)}" y="${f(g.cy + 5)}" text-anchor="middle">${t('common.labels.bladder')}</text>
    <text class="lbl" x="${f(g.cx - 172)}" y="330" text-anchor="end">${t('common.labels.ureter')}</text>
    <text class="lbl small" x="314" y="524">${t('common.labels.urethra')}</text>`
        : ''
    }
    ${
      sideLabels
        ? `<text class="tag" x="145" y="22" text-anchor="middle">${sideLabels[0]}</text><text class="tag accent" x="455" y="22" text-anchor="middle">${sideLabels[1]}</text>`
        : ''
    }
  </svg>`;
}

// Zoomed view of one kidney and the top of its ureter.
export function kidneyCloseup(o, label) {
  const g = bladderGeom(0.7);
  return `<svg class="anatomy closeup" viewBox="320 20 240 330" role="img" aria-label="${t('common.labels.kidney')}">
    ${upperTract(o, g)}
    ${label ? `<text class="lbl" x="440" y="340" text-anchor="middle">${label}</text>` : ''}
  </svg>`;
}

// ---------- ureterovesical junction cross-section ----------

// Does urine flow back up through the ureterovesical junction?
// A longer tunnel holds against more pressure; a bulking mound always holds.
export function uvjRefluxes({ tunnel, squeeze, pressure = 0.6, deflux = 0 }) {
  if (!squeeze || deflux >= 1) return false;
  return tunnel < 0.5 || (pressure > 0.75 && tunnel < 0.65);
}

//   tunnel: 0..1 length of the submucosal tunnel
//   squeeze: bladder contracting; pressure: 0..1; deflux: 0..1 mound size
//   reimplant steps: muscleCut 0..1 (bladder muscle opened, extravesical), trough (new tunnel path
//   under the lining), stitches (closed over the ureter), spot (highlight where the ureter enters)
export function uvjSection({
  tunnel = 0.6, squeeze = false, pressure = 0.6, deflux = 0,
  muscleCut = 0, trough = false, stitches = false, spot = false, text,
}) {
  const L = 40 + 150 * clamp(tunnel);
  const refluxing = uvjRefluxes({ tunnel, squeeze, pressure, deflux });
  const closed = squeeze && !refluxing;
  const outer = 'M20 22 C 90 30 140 50 170 66 L 236 92';
  const inner = `M236 92 C 252 98 256 104 256 116 L 256 ${f(100 + L)} C 256 ${f(112 + L)} 264 ${f(118 + L)} 282 ${f(120 + L)}`;
  const lumen = refluxing ? 'uvj-lumen urine' : 'uvj-lumen';
  const tunnelW = closed ? 2.5 : 12;

  const arrows = squeeze
    ? [120, 200, 280]
        .map((y) => {
          const s = 0.6 + 0.6 * pressure;
          return `<g class="press" transform="translate(340 ${y}) scale(${f(s)})"><line x1="34" y1="0" x2="4" y2="0"/><path d="M0 0 L12 -8 L12 8 Z"/></g>`;
        })
        .join('')
    : '';

  // Gel sits in the submucosa just under the ureteral opening, lifting it; a needle shows while injecting.
  const mound =
    deflux > 0 ? `<ellipse class="mound" cx="${f(266 + 4 * deflux)}" cy="${f(134 + L)}" rx="${f(3 + 8 * deflux)}" ry="${f(4 + 9 * deflux)}"/>` : '';
  const needle =
    deflux > 0 && deflux < 0.98 ? `<line class="needle" x1="400" y1="${f(176 + L)}" x2="266" y2="${f(136 + L)}"/>` : '';

  const status = squeeze
    ? `<g class="status ${refluxing ? 'bad' : 'good'}"><rect x="330" y="292" width="180" height="30" rx="15"/><text x="420" y="312" text-anchor="middle">${
        refluxing ? text.valveOpen : text.valveClosed
      }</text></g>`
    : '';

  return `<svg class="anatomy uvj" viewBox="0 0 520 330" role="img" aria-label="${text.labelTunnel}">
    <rect class="lumen-bg ${squeeze ? 'squeeze' : ''}" x="276" y="0" width="244" height="330"/>
    <rect class="muscle" x="170" y="0" width="66" height="330"/>
    <rect class="submucosa" x="236" y="0" width="40" height="330"/>
    <line class="mucosa" x1="276" y1="0" x2="276" y2="330"/>
    ${muscleCut > 0.02 ? `<rect class="muscle-cut" x="184" y="88" width="38" height="${f(200 * clamp(muscleCut))}" rx="6"/>` : ''}
    ${trough ? `<rect class="trough" x="240" y="96" width="32" height="196" rx="8"/>` : ''}
    ${mound}
    <path class="uvj-wall" d="${outer}"/>
    <path class="uvj-wall" d="${inner}"/>
    <path class="${lumen}" d="${outer}" stroke-width="12"/>
    <path class="${lumen}" d="${inner}" stroke-width="${tunnelW}"/>
    <path class="flow ${refluxing ? 'up' : squeeze ? 'still' : 'down'}" d="${outer} ${inner.replace('M236 92', 'L236 92')}"/>
    ${needle}
    ${stitches ? [120, 160, 200, 240, 280].map((y) => `<path class="stitch" d="M197 ${y - 6} l12 12 m0 -12 l-12 12"/>`).join('') : ''}
    ${spot ? `<circle class="spot" cx="236" cy="92" r="26"/>` : ''}
    ${arrows}
    <line class="bracket" x1="318" y1="104" x2="318" y2="${f(100 + L)}"/>
    <line class="bracket" x1="312" y1="104" x2="324" y2="104"/>
    <line class="bracket" x1="312" y1="${f(100 + L)}" x2="324" y2="${f(100 + L)}"/>
    <text class="lbl small" x="330" y="${f(106 + L / 2)}">${text.labelTunnel}</text>
    <text class="lbl small" x="203" y="320" text-anchor="middle">${text.labelMuscle}</text>
    <text class="lbl small" x="500" y="24" text-anchor="end">${text.labelInside}</text>
    <text class="lbl small" x="20" y="60">${text.labelFromKidney}</text>
    ${status}
  </svg>`;
}

// ---------- peristalsis strip ----------

// Animated straight ureter showing squeezing waves pushing urine from the
// kidney (left) to the bladder (right). `block`: null | 'top' | 'bottom' marks
// a stiff segment that cannot squeeze. Returns a stop function.
export function peristalsis(el, { block = null, text }) {
  const X0 = 90;
  const X1 = 570;
  const seg = block === 'top' ? [X0, X0 + 80] : block === 'bottom' ? [X1 - 90, X1] : null;
  const waveStart = block === 'top' ? seg[1] : X0;
  const stopAt = block === 'bottom' ? seg[0] : X1 + 60;
  let wave = waveStart;
  let dil = 0;
  let pelvis = 0;
  let last = performance.now();
  let raf;

  const inSeg = (x) => seg && x >= seg[0] && x <= seg[1];
  const base = (x) => (inSeg(x) ? 4 : 8 + 14 * (block === 'bottom' ? dil * clamp((x - X0) / 120) : 0));
  const half = (x) => {
    if (inSeg(x)) return 4;
    const b = base(x);
    if (x > wave - 30 && x <= wave) return Math.max(3, b * 0.35);
    if (x > wave && x < wave + 50 && wave < stopAt) return b + 3;
    return b;
  };

  const edge = (fn, from, to, sign) => {
    const out = [];
    for (let x = from; x <= to; x += 5) out.push(`${x} ${f(80 + sign * fn(x))}`);
    return out;
  };
  const band = (fn, from, to) => `M${edge(fn, from, to, -1).join(' L')} L${edge(fn, from, to, 1).reverse().join(' L')} Z`;

  const draw = () => {
    const bolusFrom = Math.max(wave, X0);
    const bolusTo = Math.min(wave + 50, stopAt, X1);
    const urineParts = [];
    if (bolusTo > bolusFrom && block !== 'top') urineParts.push(band((x) => half(x) - 3, bolusFrom, bolusTo));
    if (block === 'top' && wave < X1) urineParts.push(band((x) => Math.max(1.5, (half(x) - 3) * 0.5), Math.max(wave, seg[1]), Math.min(wave + 40, X1)));
    if (block === 'bottom' && dil > 0) urineParts.push(band((x) => base(x) - 3, X0, seg[0]));
    if (seg) urineParts.push(band(() => 1.2, seg[0], seg[1]));
    const prx = 26 + 34 * pelvis;
    el.innerHTML = `<svg class="anatomy peri" viewBox="0 0 600 170">
      <ellipse class="peri-wall" cx="${X0 - 26}" cy="80" rx="${f(prx + 4)}" ry="${f(prx * 0.9 + 4)}"/>
      <path class="peri-wall" d="${band((x) => half(x) + 3, X0, X1)}"/>
      <ellipse class="peri-urine" cx="${X0 - 26}" cy="80" rx="${f(prx)}" ry="${f(prx * 0.9)}"/>
      <path class="peri-lumen" d="${band((x) => Math.max(1, half(x) - 3), X0, X1)}"/>
      ${urineParts.map((d) => `<path class="peri-urine" d="${d}"/>`).join('')}
      ${seg ? `<rect class="peri-seg" x="${seg[0]}" y="52" width="${seg[1] - seg[0]}" height="56" rx="8"/><text class="lbl small" x="${(seg[0] + seg[1]) / 2}" y="140" text-anchor="middle">${text.stiff}</text>` : ''}
      <text class="lbl small" x="${X0 - 26}" y="${f(80 + prx + 22)}" text-anchor="middle">${text.kidney}</text>
      <text class="lbl small" x="${X1}" y="40" text-anchor="end">${text.bladder} →</text>
    </svg>`;
  };

  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    wave += dt * 150;
    if (block === 'top') pelvis = Math.min(1, pelvis + dt * 0.12);
    if (wave > stopAt + 40) {
      if (block === 'bottom') dil = Math.min(1, dil + 0.2);
      wave = waveStart - 40;
    }
    if (block === 'bottom') pelvis = dil * 0.5;
    draw();
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}

// ---------- renal scan drainage curve ----------

// Simplified diuretic renogram: tracer in the kidney over 40 minutes, with a
// water pill (furosemide) given at 20 minutes.
const CURVES = {
  normal: (m) => (m < 3 ? m / 3 : Math.exp(-(m - 3) / 7)),
  slow: (m) => (m < 12 ? 1 - (1 - m / 12) ** 2 : m < 20 ? 1 - (m - 12) * 0.006 : 0.95 * Math.exp(-(m - 20) / 5)),
  blocked: (m) => (m < 20 ? 1 - Math.exp(-m / 9) : (1 - Math.exp(-20 / 9)) + (m - 20) * 0.006),
};

export function drainageChart(selected, text) {
  const x = (m) => 60 + m * 12;
  const y = (v) => 230 - v * 180;
  const line = (fn) => {
    const pts = [];
    for (let m = 0; m <= 40; m += 0.5) pts.push(`${f(x(m))} ${f(y(fn(m)))}`);
    return 'M' + pts.join(' L');
  };
  return `<svg class="anatomy chart" viewBox="0 0 560 280" role="img" aria-label="${text.title}">
    <line class="axis" x1="60" y1="230" x2="545" y2="230"/>
    <line class="axis" x1="60" y1="30" x2="60" y2="230"/>
    ${[0, 10, 20, 30, 40].map((m) => `<text class="tick" x="${x(m)}" y="250" text-anchor="middle">${m}</text>`).join('')}
    <text class="tick" x="300" y="274" text-anchor="middle">${text.minutes}</text>
    <text class="tick" x="20" y="130" text-anchor="middle" transform="rotate(-90 20 130)">${text.amount}</text>
    <line class="lasix" x1="${x(20)}" y1="30" x2="${x(20)}" y2="230"/>
    <text class="tick strong" x="${x(20) + 6}" y="44">${text.lasix}</text>
    ${Object.entries(CURVES)
      .map(([k, fn]) => `<path class="curve ${k} ${k === selected ? 'on' : ''}" d="${line(fn)}"/>`)
      .join('')}
  </svg>`;
}

// ---------- urethra close-up (posterior urethral valves) ----------

//   valves: 0..1 how much the valve leaflets block; opened: 0..1 removed
//   voiding: show urine flowing and the stream
//   text: { bladder, neck, valves, urethra, tip }
//   scope: 0–1 how far the camera has been passed up the urethra; zap: cutting spark at the valve;
//   catheter: small drainage tube after the procedure.
export function urethraSection({ valves = 0, opened = 0, voiding = false, scope = 0, zap = false, catheter = false, text }) {
  const block = clamp(valves) * (1 - clamp(opened));
  const wp = 14 + 24 * block;
  const leaf = wp / 2 - 2;
  const leaflets =
    block > 0.02
      ? `<path class="leaflet" d="M${f(160 - wp / 2)} 196 Q${f(160 - leaf * 0.4)} 206 ${f(160 - 1)} ${f(204 + 14 * block)} L${f(160 - wp / 2)} 212 Z"/>
         <path class="leaflet" d="M${f(160 + wp / 2)} 196 Q${f(160 + leaf * 0.4)} 206 ${f(160 + 1)} ${f(204 + 14 * block)} L${f(160 + wp / 2)} 212 Z"/>`
      : '';
  const streamW = voiding ? 6 - 4.5 * block : 0;
  return `<svg class="anatomy urethra-x" viewBox="0 0 320 450" role="img" aria-label="${text.urethra}">
    <ellipse class="bladder" cx="160" cy="20" rx="130" ry="88" style="stroke-width:${f(9 + 16 * block)}"/>
    <line class="u-wall-x" x1="160" y1="100" x2="160" y2="210" stroke-width="${f(wp + 8)}"/>
    <line class="u-wall-x" x1="160" y1="205" x2="160" y2="412" stroke-width="18"/>
    <line class="u-urine-x" x1="160" y1="98" x2="160" y2="210" stroke-width="${f(wp)}"/>
    <line class="${voiding ? 'u-urine-x' : 'u-lumen-x'}" x1="160" y1="205" x2="160" y2="412" stroke-width="10"/>
    ${leaflets}
    ${voiding ? `<line class="flowline ${block > 0.5 ? 'slow' : 'down'}" x1="160" y1="60" x2="160" y2="412"/>` : ''}
    ${streamW > 0 ? `<line class="stream" x1="160" y1="414" x2="160" y2="450" style="stroke-width:${f(streamW)}"/>` : ''}
    ${scope > 0.01 ? `<g class="scope"><line x1="160" y1="450" x2="160" y2="${f(450 - 228 * clamp(scope))}"/><circle cx="160" cy="${f(450 - 228 * clamp(scope))}" r="4"/></g>` : ''}
    ${zap ? `<path class="zap" d="M150 200 l8 6 -6 4 10 8"/><path class="zap" d="M170 200 l-8 6 6 4 -10 8"/>` : ''}
    ${catheter ? `<g class="catheter"><path d="M160 450 L160 70"/><circle cx="160" cy="70" r="8"/></g>` : ''}
    <text class="lbl" x="160" y="50" text-anchor="middle">${text.bladder}</text>
    <text class="lbl small" x="${f(170 + wp / 2)}" y="118">${text.neck}</text>
    ${block > 0.02 ? `<text class="lbl small accent-text" x="${f(170 + wp / 2)}" y="212">${text.valves}</text>` : ''}
    <text class="lbl small" x="178" y="320">${text.urethra}</text>
    <text class="lbl small" x="178" y="410">${text.tip}</text>
  </svg>`;
}

// ---------- where an ectopic ureter can open ----------

// [x, y, belowSphincter] for each possible opening.
export const ECTOPIC_SITES = {
  girl: { neck: [150, 160, false], urethra: [150, 300, true], vagina: [262, 290, true] },
  boy: { neck: [150, 160, false], prostatic: [150, 210, false], seminal: [288, 182, false], vas: [318, 136, false] },
};

//   sex: 'girl' | 'boy'; site: key of ECTOPIC_SITES[sex]
//   text: { bladder, urethra, sphincter, vagina, prostate, seminal, vas }
export function ectopicMap({ sex, site, text }) {
  const [x, y, below] = ECTOPIC_SITES[sex][site];
  const outlet = site === 'vagina' ? 262 : 150;
  const ureter = `M335 0 C 320 70 ${x + 70} ${y - 50} ${x} ${y}`;
  const girl = sex === 'girl';
  return `<svg class="anatomy ectopic-map" viewBox="0 0 360 420" role="img" aria-label="${text.urethra}">
    ${girl ? `<rect class="vagina" x="248" y="200" width="28" height="186" rx="12"/><text class="lbl small" x="262" y="410" text-anchor="middle">${text.vagina}</text>` : ''}
    ${girl ? '' : `<ellipse class="prostate" cx="150" cy="205" rx="36" ry="30"/><text class="lbl small" x="94" y="200" text-anchor="end">${text.prostate}</text>
      <path class="g-vas" d="M270 188 C 300 170 312 150 340 112"/><text class="lbl small" x="232" y="148">${text.vas}</text>
      <ellipse class="sv" cx="288" cy="182" rx="24" ry="13"/><text class="lbl small" x="288" y="212" text-anchor="middle">${text.seminal}</text>`}
    <line class="urethra" x1="150" y1="140" x2="150" y2="386"/>
    <rect class="sphincter" x="133" y="238" width="34" height="20" rx="6"/>
    <text class="lbl small" x="126" y="253" text-anchor="end">${text.sphincter}</text>
    <path class="map-ureter" d="M20 0 C 40 40 60 60 80 80"/>
    <ellipse class="bladder" cx="150" cy="85" rx="105" ry="65"/>
    <text class="lbl" x="150" y="80" text-anchor="middle">${text.bladder}</text>
    <text class="lbl small" x="160" y="340">${text.urethra}</text>
    <path class="ectopic-wall" d="${ureter}"/>
    <path class="ectopic-urine" d="${ureter}"/>
    <circle class="site" cx="${x}" cy="${y}" r="8"/>
    ${below ? [0, 1, 2].map((i) => `<circle class="drip" cx="${outlet}" cy="392" r="4" style="animation-delay:${i * 0.5}s"/>`).join('') : ''}
  </svg>`;
}
