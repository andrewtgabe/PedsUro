// Genital and scrotal drawings, reused across the genital chapters
// (torsion, undescended testicle, hydrocele/hernia, varicocele...).
import { clamp } from './anatomy.js';

const f = (n) => n.toFixed(1);

// Blend two #rrggbb colors; k = 0 gives a, 1 gives b.
function mix(a, b, k) {
  const p = (c, i) => parseInt(c.slice(1 + i * 2, 3 + i * 2), 16);
  return '#' + [0, 1, 2].map((i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * k).toString(16).padStart(2, '0')).join('');
}

// ---------- testicle side view (torsion) ----------

//   bellClapper: testicle hangs free inside its sac (can twist)
//   twist: degrees the cord is twisted (0, 360, 720...)
//   isch: 0..1 how long blood flow has been cut off (color change)
//   stitches: testicle fixed to the scrotal wall (orchiopexy)
//   removed: testicle removed; prosthesis: artificial testicle in place
//   text: { cord, testicle, epididymis, sac, attached, artery }
export function testisSide({ bellClapper = true, twist = 0, isch = 0, stitches = false, removed = false, prosthesis = false, text }) {
  const occl = clamp(twist / 360);
  const turns = twist / 360;
  const lift = 26 * occl;
  const cy = 300 - lift;
  const swell = 1 + 0.12 * isch;
  const testisColor = mix('#f0b7ad', '#5e3355', clamp(isch));

  // Cord: two vessels winding around each other in the twisted section.
  const cordPts = (phase) => {
    const pts = [];
    for (let i = 0; i <= 50; i++) {
      const s = i / 50;
      const y = 10 + s * (cy - 85);
      const local = clamp((s - 0.35) / 0.65);
      const off = 9 * (1 - 0.4 * occl * local) * Math.cos(phase + 2 * Math.PI * turns * 1.5 * local);
      pts.push(`${f(200 + off)} ${f(y)}`);
    }
    return 'M' + pts.join(' L');
  };
  const sheathW = 36 - 14 * occl;

  const tunica = bellClapper
    ? `<path class="tunica" d="M168 ${f(cy - 150)} C 120 ${f(cy - 80)} 118 ${f(cy + 90)} 200 ${f(cy + 100)} C 282 ${f(cy + 90)} 280 ${f(cy - 80)} 232 ${f(cy - 150)}"/>`
    : `<ellipse class="tunica" cx="200" cy="${cy}" rx="78" ry="98"/>
       <path class="attach" d="M262 ${f(cy - 40)} L300 ${f(cy - 40)} L300 ${f(cy + 50)} L258 ${f(cy + 50)}"/>`;

  const testis = removed
    ? `<ellipse class="removed" cx="200" cy="${cy}" rx="55" ry="75"/>${prosthesis ? `<ellipse class="prosthesis" cx="200" cy="${cy}" rx="50" ry="68"/>` : ''}`
    : `<g transform="rotate(${f(Math.min(twist, 180) * 0.25)} 200 ${cy})">
        <ellipse class="testis" cx="200" cy="${cy}" rx="${f(55 * swell)}" ry="${f(75 * swell)}" style="fill:${testisColor}"/>
        <path class="epididymis" d="M228 ${f(cy - 78)} C 268 ${f(cy - 60)} 272 ${f(cy + 40)} 236 ${f(cy + 72)}" style="stroke:${mix('#d99584', '#4a2846', clamp(isch))}"/>
      </g>`;

  const stitchMarks = stitches
    ? [[-62, -10], [62, -10], [0, 70]]
        .map(([dx, dy]) => `<path class="stitch" d="M${200 + dx - 7} ${f(cy + dy - 7)} l14 14 m0 -14 l-14 14"/>`)
        .join('')
    : '';

  return `<svg class="anatomy genital" viewBox="0 0 400 460" role="img" aria-label="${text.testicle}">
    <path class="scrotum" d="M95 ${f(150 - lift / 2)} C 70 ${f(260)} 80 ${f(420 + 20 * isch)} 200 ${f(440 + 20 * isch)} C 320 ${f(420 + 20 * isch)} 330 260 305 ${f(150 - lift / 2)}"/>
    ${tunica}
    <line class="cord-sheath" x1="200" y1="0" x2="200" y2="${f(cy - 70)}" stroke-width="${f(sheathW)}"/>
    <path class="vein" d="${cordPts(Math.PI)}"/>
    <path class="artery" d="${cordPts(0)}"/>
    <path class="blood ${occl >= 1 ? 'stopped' : ''}" d="${cordPts(0)}" style="opacity:${f(1 - occl)}"/>
    ${testis}
    ${stitchMarks}
    <text class="lbl small" x="226" y="40">${text.cord}</text>
    ${removed ? '' : `<text class="lbl small" x="200" y="${f(cy + 5)}" text-anchor="middle">${text.testicle}</text>`}
    ${removed ? '' : `<text class="lbl small" x="${bellClapper ? 286 : 306}" y="${f(cy + 4)}">${text.epididymis}</text>`}
    <text class="lbl small" x="${bellClapper ? 100 : 110}" y="${f(cy - 120)}" text-anchor="end">${text.sac}</text>
    ${!bellClapper ? `<text class="lbl small" x="306" y="${f(cy + 70)}">${text.attached}</text>` : ''}
  </svg>`;
}

// ---------- descent of the testicle (front view) ----------

// Route on the screen-left side: kidney area -> internal ring -> groin canal
// -> external ring -> scrotum.
const ROUTE = [[112, 110], [122, 250], [165, 322], [176, 372], [180, 428]];
export const DESCENT_STOPS = { abdomen: 0.12, ring: 0.25, canal: 0.5, high: 0.75, scrotum: 1 };

function along(pos) {
  const p = clamp(pos) * (ROUTE.length - 1);
  const i = Math.min(ROUTE.length - 2, Math.floor(p));
  const k = p - i;
  return [ROUTE[i][0] + (ROUTE[i + 1][0] - ROUTE[i][0]) * k, ROUTE[i][1] + (ROUTE[i + 1][1] - ROUTE[i][1]) * k];
}

//   pos: 0..1 along the route (see DESCENT_STOPS); retractile: muscle pulling up
//   stitched: fixed in the scrotum; gubernaculum: show the guiding cord
//   text: { kidney, ring, canal, scrotum, muscle, guide }
export function descent({ pos = 1, retractile = false, stitched = false, gubernaculum = false, text }) {
  const [x, y] = along(pos);
  const vessels = `M150 70 C 128 120 ${f(x)} ${f(Math.max(150, y - 120))} ${f(x)} ${f(y - 20)}`;
  const vas = `M${f(x + 6)} ${f(y - 10)} C ${f(x + 40)} ${f(y - 80)} 220 300 200 268`;
  return `<svg class="anatomy genital" viewBox="0 0 400 470" role="img" aria-label="${text.scrotum}">
    <path class="body-wall" d="M20 20 L20 300 C 60 330 120 330 150 340 L250 340 C 280 330 340 330 380 300 L380 20"/>
    <path class="kidney" d="M100 40 C140 40 145 120 100 120 C 70 120 66 40 100 40 Z" transform="translate(4 0) scale(0.9)" opacity="0.8"/>
    <path class="kidney" d="M300 40 C260 40 255 120 300 120 C 330 120 334 40 300 40 Z" transform="translate(36 0) scale(0.9)" opacity="0.8"/>
    <ellipse class="bladder" cx="200" cy="268" rx="40" ry="30" style="stroke-width:5"/>
    <path class="canal" d="M118 245 L170 330"/>
    <path class="canal" d="M282 245 L230 330"/>
    <path class="scrotum" d="M130 340 C 110 420 150 470 200 466 C 250 470 290 420 270 340"/>
    <line class="raphe" x1="200" y1="350" x2="200" y2="460"/>
    <path class="g-vessels" d="${vessels}"/>
    <path class="g-vas" d="${vas}"/>
    <path class="g-vessels" d="M250 70 C 272 120 220 300 220 408"/>
    <path class="g-vas" d="M226 418 C 260 340 190 300 200 268"/>
    ${gubernaculum && pos < 1 ? `<path class="guide" d="M${f(x)} ${f(y + 18)} L180 455"/>` : ''}
    <ellipse class="testis" cx="220" cy="428" rx="16" ry="22"/>
    <ellipse class="testis ${pos < 1 ? 'flag' : ''}" cx="${f(x)}" cy="${f(y)}" rx="16" ry="22"/>
    ${retractile ? `<path class="pull" d="M${f(x - 30)} ${f(y + 10)} L${f(x - 30)} ${f(y - 40)} M${f(x - 38)} ${f(y - 30)} L${f(x - 30)} ${f(y - 42)} L${f(x - 22)} ${f(y - 30)}"/><text class="lbl small" x="${f(x - 38)}" y="${f(y + 30)}" text-anchor="end">${text.muscle}</text>` : ''}
    ${stitched ? `<path class="stitch" d="M${f(x - 7)} ${f(y + 20)} l14 14 m0 -14 l-14 14"/>` : ''}
    <text class="lbl small" x="100" y="140" text-anchor="middle">${text.kidney}</text>
    <text class="lbl small" x="108" y="242" text-anchor="end">${text.ring}</text>
    <text class="lbl small" x="138" y="300" text-anchor="end">${text.canal}</text>
    <text class="lbl small" x="280" y="440">${text.scrotum}</text>
  </svg>`;
}

// ---------- processus vaginalis: hydrocele and hernia (front view) ----------

// Centerline of the pouch: internal ring -> groin canal -> top of testicle.
const POUCH = [[150, 228], [178, 275], [205, 322], [205, 360], [205, 388]];

function pouchPoint(s) {
  const p = clamp(s) * (POUCH.length - 1);
  const i = Math.min(POUCH.length - 2, Math.floor(p));
  const k = p - i;
  return [POUCH[i][0] + (POUCH[i + 1][0] - POUCH[i][0]) * k, POUCH[i][1] + (POUCH[i + 1][1] - POUCH[i][1]) * k];
}
const pouchPath = (to = 1) => {
  const pts = [];
  for (let i = 0; i <= 20; i++) pts.push(pouchPoint((i / 20) * to));
  return 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join(' L');
};

//   opening: 'closed' | 'thin' | 'wide' — how open the pouch stays
//   fluid: 0..1 fluid around the testicle; bowel: 0..1 how far intestine slides down
//   stuck: intestine trapped (incarcerated); light: flashlight held behind scrotum
//   tied: pouch tied off at the top (surgery)
//   text: { pouch, fluid, bowel, testicle, ring, stuck, tie }
export function sacView({ opening = 'closed', fluid = 0, bowel = 0, stuck = false, light = false, tied = false, text }) {
  const open = opening !== 'closed' && !tied;
  const width = opening === 'wide' ? 34 : opening === 'thin' ? 9 : 2;
  const sacRx = 30 + 42 * fluid;
  const sacRy = 36 + 40 * fluid;
  const sacCy = 418 - 6 * fluid;
  const bowelEnd = pouchPoint(bowel * 0.95);
  const bowelColor = stuck ? '#9b3b4a' : '#e7a3a6';

  const loops = [[170, 120], [230, 110], [200, 165], [260, 170], [140, 175]]
    .map(([x, y]) => `<ellipse class="gut" cx="${x}" cy="${y}" rx="34" ry="20" transform="rotate(${(x * 7) % 40 - 20} ${x} ${y})"/>`)
    .join('');

  return `<svg class="anatomy genital" viewBox="0 0 400 480" role="img" aria-label="${text.pouch}">
    <path class="body-wall" d="M20 20 L20 300 C 60 330 120 330 150 340 L250 340 C 280 330 340 330 380 300 L380 20"/>
    <path class="lining" d="M40 40 L360 40 L360 215 C 300 225 260 225 220 222 L160 222 C 110 225 80 222 40 215 Z"/>
    ${loops}
    <path class="canal" d="M140 230 L208 330"/>
    <path class="scrotum" d="M130 340 C 110 430 150 476 205 472 C 260 476 300 430 280 340"/>
    <ellipse class="hydro-sac" cx="205" cy="${f(sacCy)}" rx="${f(sacRx)}" ry="${f(sacRy)}"/>
    ${open ? `<path class="pouch ${opening}" d="${pouchPath()}" stroke-width="${width}"/>` : `<path class="pouch-closed" d="${pouchPath()}"/>`}
    ${open && opening === 'thin' && fluid > 0 ? `<path class="pouch-flow" d="${pouchPath()}"/>` : ''}
    ${bowel > 0 && open ? `<path class="bowel-in" d="M150 210 L${pouchPath(bowel * 0.95).slice(1)}" style="stroke:${bowelColor}" stroke-width="${f(22 + (stuck ? 6 : 0))}"/>
      <circle cx="${f(bowelEnd[0])}" cy="${f(bowelEnd[1])}" r="${f(16 + (stuck ? 5 : 0))}" style="fill:${bowelColor}"/>` : ''}
    <ellipse class="testis" cx="205" cy="${f(424 + 4 * fluid)}" rx="16" ry="22"/>
    ${light ? `<ellipse class="glow ${bowel > 0.5 ? 'dark' : ''}" cx="205" cy="${f(sacCy)}" rx="${f(sacRx + 6)}" ry="${f(sacRy + 6)}"/>` : ''}
    ${tied ? `<path class="tie" d="M136 222 L164 222 M136 230 L164 230"/><text class="lbl small" x="170" y="218">${text.tie}</text>` : ''}
    <text class="lbl small" x="128" y="236" text-anchor="end">${text.ring}</text>
    ${fluid > 0.15 ? `<text class="lbl small" x="${f(205 + sacRx + 8)}" y="${f(sacCy - 10)}">${text.fluid}</text>` : ''}
    ${bowel > 0 && open ? `<text class="lbl small ${stuck ? 'accent-text' : ''}" x="${f(bowelEnd[0] + 26)}" y="${f(bowelEnd[1] + 4)}">${stuck ? text.stuck : text.bowel}</text>` : ''}
    <text class="lbl small" x="205" y="${f(424 + 4 * fluid + 4)}" text-anchor="middle">${text.testicle}</text>
    <text class="lbl small" x="${open ? 232 : 214}" y="300">${text.pouch}</text>
  </svg>`;
}
