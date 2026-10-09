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
//   removed: testicle removed; prosthesis: artificial testicle in place; incision: cut in the scrotal skin
//   text: { cord, testicle, epididymis, sac, attached, artery }
export function testisSide({ bellClapper = true, twist = 0, isch = 0, stitches = false, removed = false, prosthesis = false, incision = false, text }) {
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
    ${incision ? `<path class="cutline" d="M120 ${f(250 - lift / 2)} C 112 300 116 350 132 390"/>` : ''}
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
//   clipped: testicular vessels clipped (Fowler-Stephens); divided: clipped vessels cut
//   collateral: 0..1 strength of the backup blood supply along the vas
//   scope: laparoscope and ports; spot: highlight the testicle; grasper: instrument pulling it down
//   orchiopexy steps: incision (groin cut), scrotalCut, sacTied (hernia sac tied at the ring), skinStitches
//   text: { kidney, ring, canal, scrotum, muscle, guide }
export function descent({
  pos = 1, retractile = false, stitched = false, gubernaculum = false,
  clipped = false, divided = false, collateral = clipped ? 1 : 0, scope = false, spot = false, grasper = false,
  incision = false, scrotalCut = false, sacTied = false, skinStitches = false, text,
}) {
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
    <path class="g-vessels ${clipped ? 'cut' : ''}" d="${vessels}"/>
    <path class="g-vas ${collateral > 0 ? 'collateral' : ''}" d="${vas}" style="stroke-width:${f(3 + 4 * collateral)}"/>
    ${clipped ? `<g class="clip"><rect x="128" y="92" width="20" height="7" rx="2" transform="rotate(-25 138 95)"/></g><text class="lbl small accent-text" x="156" y="98">${text.clip}</text>` : ''}
    ${divided ? `<path class="cutmark" d="M124 112 L146 104"/>` : ''}
    ${collateral > 0.3 ? `<text class="lbl small" x="${f(x + 44)}" y="${f(y - 46)}">${text.collateral}</text>` : ''}
    <path class="g-vessels" d="M250 70 C 272 120 220 300 220 408"/>
    <path class="g-vas" d="M226 418 C 260 340 190 300 200 268"/>
    ${gubernaculum && pos < 1 ? `<path class="guide" d="M${f(x)} ${f(y + 18)} L180 455"/>` : ''}
    <ellipse class="testis" cx="220" cy="428" rx="16" ry="22"/>
    <ellipse class="testis ${pos < 1 ? 'flag' : ''}" cx="${f(x)}" cy="${f(y)}" rx="16" ry="22"/>
    ${retractile ? `<path class="pull" d="M${f(x - 30)} ${f(y + 10)} L${f(x - 30)} ${f(y - 40)} M${f(x - 38)} ${f(y - 30)} L${f(x - 30)} ${f(y - 42)} L${f(x - 22)} ${f(y - 30)}"/><text class="lbl small" x="${f(x - 38)}" y="${f(y + 30)}" text-anchor="end">${text.muscle}</text>` : ''}
    ${stitched ? `<path class="stitch" d="M${f(x - 7)} ${f(y + 20)} l14 14 m0 -14 l-14 14"/>` : ''}
    ${spot ? `<circle class="spot" cx="${f(x)}" cy="${f(y)}" r="30"/>` : ''}
    ${incision ? `<path class="incision" d="M120 300 L180 286"/>` : ''}
    ${scrotalCut ? `<path class="incision" d="M164 400 L192 404"/>` : ''}
    ${sacTied ? `<path class="tie" d="M110 244 L134 252 M108 252 L132 260"/><text class="lbl small" x="96" y="274" text-anchor="end">${text.sacTie}</text>` : ''}
    ${skinStitches ? [128, 146, 164].map((sx) => `<path class="stitch" d="M${sx - 4} ${f(296 - (sx - 120) * 0.23)} l8 8 m0 -8 l-8 8"/>`).join('') + `<path class="stitch" d="M174 398 l8 8 m0 -8 l-8 8"/>` : ''}
    ${grasper ? `<line class="grasper" x1="252" y1="214" x2="${f(x + 10)}" y2="${f(y - 6)}"/>` : ''}
    ${scope ? `<g class="scope"><line x1="200" y1="190" x2="${f(x + 14)}" y2="${f(y - 18)}"/><circle cx="200" cy="190" r="7"/><circle cx="150" cy="214" r="5"/><circle cx="252" cy="214" r="5"/><text class="lbl small" x="212" y="186">${text.camera}</text></g>` : ''}
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
//   surgery steps: incision (groin skin cut), skinStitches, spot: 'ring' | 'pouch' highlight,
//   scope (laparoscope through the belly button), keepPouch (pouch still shown after tying)
export function sacView({
  opening = 'closed', fluid = 0, bowel = 0, stuck = false, light = false, tied = false,
  incision = false, skinStitches = false, spot = '', scope = false, keepPouch = false, text,
}) {
  const open = opening !== 'closed' && (!tied || keepPouch);
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
    ${spot === 'ring' ? `<circle class="spot" cx="150" cy="226" r="24"/>` : ''}
    ${spot === 'pouch' ? `<ellipse class="spot" cx="180" cy="282" rx="34" ry="56" transform="rotate(-30 180 282)"/>` : ''}
    ${incision ? `<path class="incision" d="M118 300 L188 288"/>` : ''}
    ${skinStitches ? [128, 146, 164, 180].map((x) => `<path class="stitch" d="M${x - 4} ${f(298 - (x - 118) * 0.17)} l8 8 m0 -8 l-8 8"/>`).join('') : ''}
    ${scope ? `<g class="scope"><line x1="200" y1="70" x2="158" y2="214"/><circle cx="200" cy="70" r="7"/><circle cx="150" cy="96" r="5"/><circle cx="252" cy="96" r="5"/><text class="lbl small" x="212" y="66">${text.camera}</text></g>` : ''}
    <text class="lbl small" x="128" y="236" text-anchor="end">${text.ring}</text>
    ${fluid > 0.15 ? `<text class="lbl small" x="${f(205 + sacRx + 8)}" y="${f(sacCy - 10)}">${text.fluid}</text>` : ''}
    ${bowel > 0 && open ? `<text class="lbl small ${stuck ? 'accent-text' : ''}" x="${f(bowelEnd[0] + 26)}" y="${f(bowelEnd[1] + 4)}">${stuck ? text.stuck : text.bowel}</text>` : ''}
    <text class="lbl small" x="205" y="${f(424 + 4 * fluid + 4)}" text-anchor="middle">${text.testicle}</text>
    <text class="lbl small" x="${open ? 232 : 214}" y="300">${text.pouch}</text>
  </svg>`;
}

// ---------- testicular veins (varicocele, front view) ----------

// Wavy vein cluster above a testicle; size grows with the varicocele.
function plexus(cx, top, size) {
  const n = 5;
  let out = '';
  for (let i = 0; i < n; i++) {
    const x0 = cx - 18 + i * 9;
    const amp = 2 + 9 * size;
    const pts = [];
    for (let y = top; y <= top + 70; y += 5) pts.push(`${f(x0 + amp * Math.sin((y - top) / 8 + i))} ${y}`);
    out += `<path class="plexus" d="M${pts.join(' L')}" style="stroke-width:${f(3 + 5 * size)}"/>`;
  }
  return out;
}

//   grade: 0..3 size of the left varicocele; strain: bearing down (Valsalva)
//   tied: veins tied (surgery); coils: veins blocked from inside (embolization)
//   small: 0..1 how much smaller the left testicle is
//   tieAt: height of the tie (default 330); cord: show the left testicular artery and lymph channels;
//   lymphDye: lymph channels stained blue; ports: laparoscopic camera and tools; incision: cut below the groin;
//   microscope: magnified view ring over the cord; cath: 0–1 embolization tube from the groin vein; venogram: dye in the vein
//   text: { kidney, ivc, aorta, renalVein, leftVein, rightVein, testicle, plexus, left, right }
export function veinMap({ grade = 0, strain = false, tied = false, coils = false, small = 0, tieAt = 330, cord = false, lymphDye = false, ports = false, incision = false, microscope = false, cath = 0, venogram = false, text }) {
  const blocked = tied || coils;
  const size = blocked ? 0.1 : clamp((grade / 3) * (strain ? 1.3 : 1));
  const reflux = grade > 0 && !blocked;
  return `<svg class="anatomy genital" viewBox="0 0 400 490" role="img" aria-label="${text.plexus}">
    <path class="kidney" d="M70 40 C120 40 125 140 70 140 C 40 140 35 40 70 40 Z"/>
    <path class="kidney" d="M330 40 C280 40 275 140 330 140 C 360 140 365 40 330 40 Z"/>
    <line class="ivc" x1="180" y1="0" x2="180" y2="330"/>
    <line class="aorta" x1="214" y1="0" x2="214" y2="330"/>
    <line class="g-vein" x1="105" y1="92" x2="180" y2="92"/>
    <line class="g-vein" x1="186" y1="96" x2="296" y2="96"/>
    <path class="g-vein" d="M180 150 C 150 220 140 300 142 380"/>
    <path class="g-vein ${reflux ? 'wide' : ''}" d="M280 98 L 270 380" style="stroke-width:${f(5 + 4 * size)}"/>
    ${reflux ? `<path class="backflow" d="M280 100 L 270 380"/>` : ''}
    ${venogram ? `<path class="venogram" d="M280 98 L 270 380"/>` : ''}
    ${cord ? `<path class="t-artery" d="M300 98 C 296 200 290 300 282 380"/><path class="lymph ${lymphDye ? 'dyed' : ''}" d="M292 140 C 290 240 284 320 278 380"/>` : ''}
    ${tied ? `<path class="tie" d="M${f(258 + (tieAt - 330) * -0.03)} ${tieAt} l18 0 M${f(258 + (tieAt - 330) * -0.03)} ${tieAt + 8} l18 0"/>` : ''}
    ${ports ? `<g class="ports"><circle cx="200" cy="230" r="7"/><line class="scope-line" x1="200" y1="230" x2="262" y2="296"/><line class="scope-line" x1="330" y1="200" x2="276" y2="294"/><circle cx="330" cy="200" r="5"/></g>` : ''}
    ${incision ? `<path class="cutline" d="M300 338 l46 10"/>` : ''}
    ${microscope ? `<circle class="lens" cx="282" cy="342" r="36"/>` : ''}
    ${cath > 0.01 ? `<path class="emb-cath" d="M180 330 L180 96 L278 98 L276 230" pathLength="1" stroke-dasharray="${f(clamp(cath))} 2"/>` : ''}
    ${coils ? `<path class="coil" d="M276 230 l8 6 l-12 6 l12 6 l-12 6 l12 6 l-8 6"/>` : ''}
    <path class="scrotum" d="M95 360 C 75 470 150 490 200 486 C 250 490 325 470 305 360"/>
    <line class="raphe" x1="200" y1="370" x2="200" y2="480"/>
    ${plexus(142, 362, 0.1)}
    ${plexus(270, 362, size)}
    <ellipse class="testis" cx="142" cy="440" rx="22" ry="30"/>
    <ellipse class="testis" cx="270" cy="${f(440 + 4 * small)}" rx="${f(22 * (1 - 0.35 * small))}" ry="${f(30 * (1 - 0.35 * small))}"/>
    <text class="lbl small" x="70" y="160" text-anchor="middle">${text.kidney}</text>
    <text class="lbl small" x="330" y="160" text-anchor="middle">${text.kidney}</text>
    <text class="lbl small" x="174" y="350" text-anchor="end">${text.ivc}</text>
    <text class="lbl small" x="220" y="350">${text.aorta}</text>
    <text class="lbl small" x="240" y="84" text-anchor="middle">${text.renalVein}</text>
    <text class="lbl small" x="286" y="250">${text.leftVein}</text>
    <text class="lbl small" x="130" y="250" text-anchor="end">${text.rightVein}</text>
    <text class="lbl small" x="${f(300 + 10 * size)}" y="395">${text.plexus}</text>
    <text class="tag" x="142" y="482" text-anchor="middle">${text.right}</text>
    <text class="tag accent" x="270" y="482" text-anchor="middle">${text.left}</text>
  </svg>`;
}

// ---------- penis side view (phimosis / paraphimosis) ----------

// Glans radius at a point along it, for how wide the foreskin must stretch.
const glansR = (x) => (x <= 255 ? 40 : 40 * Math.sqrt(Math.max(0, 1 - ((x - 255) / 98) ** 2)));

//   pull: 0..1 how far the foreskin is pulled back (stops at `limit`)
//   limit: 0..1 how far it can go before the opening is too tight
//   scar: white scarred ring at the opening (lichen sclerosus)
//   pee: urinating; trapped: paraphimosis; circumcised; widened: preputioplasty
//   meatus: 0..1 how narrow the urethral opening is; sore: red irritated tip
//   shiny: stretched, shiny skin at the tight ring; cream: ointment on the ring; slit: short cut across the ring;
//   stitches: stitches at the ring (or the circumcision line); mark: planned circumcision line
//   ventral: 1 clamp on the underside of the opening, 2 cut there; meatusStitches; tipCream: ointment on the tip
//   text: { glans, foreskin, opening, shaft, tight, trapped }
export function penisSide({ pull = 0, limit = 1, scar = false, pee = false, trapped = false, circumcised = false, widened = false, meatus = 0, sore = false, shiny = false, cream = false, slit = false, stitches = false, mark = false, ventral = 0, meatusStitches = false, tipCream = false, text }) {
  const k = trapped ? 1 : Math.min(pull, limit);
  const atLimit = !trapped && pull > limit + 0.01;
  const fx = 362 - k * 132;
  const openR = Math.max(widened ? 16 : limit >= 1 ? 10 : 3, glansR(fx));
  const tight = limit < 1 && !widened;
  const balloon = pee && tight && k < 0.05;
  const glansFill = trapped ? '#b0607a' : '#e99c9f';
  const gs = trapped ? 1.08 : 1;

  let foreskin = '';
  if (!circumcised) {
    if (balloon) {
      // Urine fills the space between the head and the tight tip.
      const e = fx + 40;
      foreskin = `<path class="foreskin" d="M150 162 L250 162 C 300 152 ${f(fx - 12)} 146 ${f(fx + 14)} 164 C ${f(fx + 32)} 178 ${f(e - 2)} 194 ${f(e)} ${f(200 - openR)} L ${f(e)} ${f(200 + openR)} C ${f(e - 2)} 206 ${f(fx + 32)} 222 ${f(fx + 14)} 236 C ${f(fx - 12)} 254 300 248 250 238 L150 238 Z"/>
        <ellipse class="balloon-urine" cx="${f(fx + 6)}" cy="200" rx="30" ry="30"/>`;
      if (scar) foreskin += `<ellipse class="scar-ring" cx="${f(e)}" cy="200" rx="5" ry="${f(openR + 3)}"/>`;
    } else if (fx >= 256) {
      foreskin = `<path class="foreskin" d="M150 162 L250 162 C 300 154 ${f(fx - 24)} 158 ${f(fx)} ${f(200 - openR)} L ${f(fx)} ${f(200 + openR)} C ${f(fx - 24)} 242 300 246 250 238 L150 238 Z"/>`;
      if (scar || atLimit) foreskin += `<ellipse class="${scar ? 'scar-ring' : 'tight-ring'}" cx="${f(fx)}" cy="200" rx="5" ry="${f(openR + 3)}"/>`;
    } else {
      // Pulled back behind the head: the foreskin bunches into a ring.
      const swell = trapped ? 12 : 0;
      foreskin = `<ellipse class="foreskin ${trapped ? 'swollen' : ''}" cx="${f(Math.max(fx, 232))}" cy="200" rx="${f(16 + swell)}" ry="${f(44 + swell)}"/>`;
    }
  }

  // A narrow opening makes a thin, fast stream that sprays upward.
  const narrow = meatus > 0.4;
  let stream = '';
  if (pee && balloon) stream = `<line class="stream" x1="${f(fx + 40)}" y1="200" x2="440" y2="206" style="stroke-width:1.5"/>`;
  else if (pee && narrow) stream = `<path class="stream" d="M350 200 Q 392 160 440 ${f(150 - 30 * meatus)}" style="stroke-width:1.8"/><path class="stream" d="M350 200 Q 392 186 440 176" style="stroke-width:1.2"/>`;
  else if (pee) stream = `<line class="stream" x1="356" y1="200" x2="440" y2="200" style="stroke-width:${tight ? 2.5 : 5}"/>`;

  return `<svg class="anatomy genital penis" viewBox="0 110 440 180" role="img" aria-label="${text.foreskin}">
    <rect class="body-wall" x="0" y="80" width="64" height="220"/>
    <rect class="shaft" x="56" y="162" width="206" height="76" rx="14"/>
    <path class="glans" d="M255 ${f(200 - 40 * gs)} C 332 ${f(200 - 40 * gs)} ${f(352 * gs - 4)} 185 ${f(352 * gs - 4)} 200 C ${f(352 * gs - 4)} 215 332 ${f(200 + 40 * gs)} 255 ${f(200 + 40 * gs)} Z" style="fill:${glansFill}"/>
    ${sore ? `<circle class="sore" cx="345" cy="200" r="14"/>` : ''}
    <path class="meatus" d="M346 ${f(194 + 5 * meatus)} L346 ${f(206 - 5 * meatus)}"/>
    ${circumcised ? `<path class="circ-line" d="M232 160 L232 240"/>` : ''}
    ${foreskin}
    ${stream}
    ${shiny && !circumcised ? `<ellipse class="shiny" cx="${f(fx - 6)}" cy="${f(200 - openR - 8)}" rx="10" ry="4"/><ellipse class="shiny" cx="${f(fx - 6)}" cy="${f(200 + openR + 8)}" rx="10" ry="4"/>` : ''}
    ${cream && !circumcised ? `<ellipse class="cream" cx="${f(fx)}" cy="${f(200 - openR - 6)}" rx="8" ry="7"/><ellipse class="cream" cx="${f(fx)}" cy="${f(200 + openR + 6)}" rx="8" ry="7"/>` : ''}
    ${slit ? `<path class="cutline" d="M${f(fx - 14)} ${f(200 - openR - 10)} l28 0"/>` : ''}
    ${stitches ? [-1, 0, 1].map((i) => { const x = circumcised ? 232 : fx; const y = circumcised ? 176 + 24 * (i + 1) : 200 - openR - 10 + 6 * i; return `<path class="stitch" d="M${f(x - 5)} ${f(y - 5)} l10 10 m0 -10 l-10 10"/>`; }).join('') : ''}
    ${mark ? `<path class="cutline" d="M232 150 L232 250"/>` : ''}
    ${ventral === 1 ? `<g class="hemostat"><path d="M336 208 L372 214 L404 252"/><path d="M336 214 L372 216 L394 258"/><circle cx="372" cy="215" r="3"/><circle cx="408" cy="260" r="8"/><circle cx="394" cy="266" r="8"/></g>` : ''}
    ${ventral === 2 ? `<path class="cutline" d="M346 206 L346 222"/>` : ''}
    ${meatusStitches ? [[338, 194], [354, 194], [338, 214], [354, 214]].map(([x, y]) => `<path class="stitch" d="M${x - 4} ${y - 4} l8 8 m0 -8 l-8 8"/>`).join('') : ''}
    ${tipCream ? `<ellipse class="cream" cx="350" cy="200" rx="10" ry="16"/>` : ''}
    <text class="lbl small" x="130" y="268" text-anchor="middle">${text.shaft}</text>
    <text class="lbl small" x="300" y="${fx >= 300 ? 140 : 205}" text-anchor="middle">${text.glans}</text>
    ${circumcised ? '' : `<text class="lbl small ${trapped ? 'accent-text' : ''}" x="${f(Math.max(fx, 232))}" y="${trapped ? 135 : 268}" text-anchor="middle">${trapped ? text.trapped : text.foreskin}</text>`}
    ${atLimit || scar ? `<text class="lbl small accent-text" x="${f(fx)}" y="${f(Math.min(282, 200 + openR + 30))}" text-anchor="middle">${text.tight}</text>` : ''}
  </svg>`;
}

// ---------- vulva front view (labial adhesions) ----------

// Half-width of the inner area at height y.
const vestW = (y) => 46 * Math.sin((Math.PI * (y - 72)) / 220);

//   fused: 0..1 how far up the inner lips are stuck together (from the bottom)
//   pee: urinating; text: { outer, inner, urethra, vagina, fused, pool }
export function vulvaFront({ fused = 0, pee = false, text }) {
  const bottom = 286;
  const top = bottom - clamp(fused) * 176;
  const membrane = [];
  if (fused > 0.02) {
    for (let y = top; y <= bottom; y += 6) membrane.push(`${f(180 - vestW(y) * 0.92)} ${f(y)}`);
    for (let y = bottom; y >= top; y -= 6) membrane.push(`${f(180 + vestW(y) * 0.92)} ${f(y)}`);
  }
  const pooled = pee && fused > 0.4;
  return `<svg class="anatomy genital vulva" viewBox="0 0 360 340" role="img" aria-label="${text.inner}">
    <path class="majora" d="M180 24 C 70 24 54 236 180 330 C 306 236 290 24 180 24 Z"/>
    <path class="vestibule" d="M180 70 C 126 92 124 240 180 292 C 236 240 234 92 180 70 Z"/>
    <path class="minora" d="M180 78 C 138 100 132 232 180 288"/>
    <path class="minora" d="M180 78 C 222 100 228 232 180 288"/>
    <path class="hood" d="M164 96 Q 180 74 196 96"/>
    <circle class="urethral" cx="180" cy="150" r="4"/>
    <ellipse class="vaginal" cx="180" cy="214" rx="13" ry="26"/>
    ${pooled ? `<ellipse class="balloon-urine" cx="180" cy="${f((top + bottom) / 2 + 10)}" rx="26" ry="${f((bottom - top) / 3)}"/>` : ''}
    ${membrane.length ? `<path class="adhesion" d="M${membrane.join(' L')} Z"/><line class="adhesion-line" x1="180" y1="${f(top + 4)}" x2="180" y2="${bottom - 4}"/>` : ''}
    ${pee ? (fused > 0.4
      ? [0, 1, 2].map((i) => `<circle class="drip" cx="180" cy="${f(top + 2)}" r="3.5" style="animation-delay:${i * 0.5}s"/>`).join('')
      : `<line class="stream" x1="180" y1="154" x2="180" y2="340" style="stroke-width:4"/>`) : ''}
    <text class="lbl small" x="40" y="60">${text.outer}</text>
    <text class="lbl small" x="300" y="250" text-anchor="middle">${text.inner}</text>
    ${fused < 0.9 ? `<text class="lbl small" x="196" y="148">${text.urethra}</text>` : ''}
    ${fused < 0.5 ? `<text class="lbl small" x="200" y="218">${text.vagina}</text>` : ''}
    ${fused > 0.02 ? `<text class="lbl small accent-text" x="180" y="318" text-anchor="middle">${text.fused}</text>` : ''}
  </svg>`;
}

// ---------- hypospadias / epispadias (side view) ----------

// Path along the underside from the tip back to the base, and along the top.
const UNDERSIDE = [[346, 200], [324, 232], [262, 240], [160, 240], [70, 240]];
const TOPSIDE = [[346, 200], [324, 168], [262, 160], [160, 160], [70, 160]];

function alongPath(path, u) {
  const p = clamp(u) * (path.length - 1);
  const i = Math.min(path.length - 2, Math.floor(p));
  const k = p - i;
  return [path[i][0] + (path[i + 1][0] - path[i][0]) * k, path[i][1] + (path[i + 1][1] - path[i][1]) * k];
}
const partialPath = (path, u) => {
  const pts = [];
  for (let i = 0; i <= 20; i++) pts.push(alongPath(path, (i / 20) * u));
  return 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join(' L');
};

//   opening: 0 (tip) .. 1 (base, near the scrotum) — where the urethra opens
//   top: opening on the top side (epispadias); groove: show the open groove
//   hood: hooded foreskin (only on top); full: normal foreskin all around
//   curve: 0..1 bend (down for hypospadias, up for epispadias)
//   pee: stream; fistula: small leak hole after repair
//   graft: foreskin tissue placed along the underside (first stage of a staged repair)
//   text: { glans, shaft, opening, hood, scrotum, groove, fistula }
//   staged repair: plateCut (urethral plate divided), corpCuts (corporotomies), graftHealed (graft has taken),
//   taped (penis taped up to the lower belly with silicone tape), stentOut (stent from the tip)
export function hypospadiasSide({
  opening = 0, top = false, groove = false, hood = false, full = false, curve = 0, pee = false, fistula = false, graft = false,
  plateCut = false, corpCuts = false, graftHealed = false, taped = false, stentOut = false, text,
}) {
  const path = top ? TOPSIDE : UNDERSIDE;
  const [mx, my] = alongPath(path, opening);
  const angle = (top ? -1 : 1) * 30 * clamp(curve);
  const atTip = opening < 0.06;

  let stream = '';
  if (pee) {
    stream = atTip
      ? `<line class="stream" x1="352" y1="200" x2="440" y2="200" style="stroke-width:4"/>`
      : `<path class="stream" d="M${f(mx)} ${f(my)} q 18 ${top ? -30 : 30} 40 ${top ? -80 : 80}" style="stroke-width:4"/>`;
    if (fistula) stream += `<path class="stream" d="M200 240 q 6 20 10 46" style="stroke-width:1.5"/>`;
  }

  return `<svg class="anatomy genital penis" viewBox="0 100 440 240" role="img" aria-label="${text.opening}">
    <ellipse class="scrotum" cx="82" cy="292" rx="62" ry="46"/>
    <rect class="body-wall" x="0" y="80" width="64" height="200"/>
    <g transform="rotate(${taped ? -18 : 0} 60 200)">
    <rect class="shaft" x="56" y="162" width="140" height="76" rx="14"/>
    <g transform="rotate(${f(angle)} 180 ${top ? 160 : 240})">
      <rect class="shaft" x="160" y="162" width="102" height="76" rx="14"/>
      <path class="glans" d="M255 160 C 332 160 348 185 348 200 C 348 215 332 240 255 240 Z" style="fill:#e99c9f"/>
      ${groove && !atTip ? `<path class="groove" d="${partialPath(path, opening)}"/>` : ''}
      ${graft && !atTip ? `<path class="graft ${graftHealed ? 'healed' : ''}" d="${partialPath(path, opening)}"/>` : ''}
      ${plateCut && !atTip ? (() => { const [cx, cy] = alongPath(path, opening * 0.55); return `<path class="platecut" d="M${f(cx - 6)} ${f(cy - 20)} L${f(cx + 6)} ${f(cy + 14)}"/>`; })() : ''}
      ${stentOut ? `<path class="stent-out" d="M348 200 Q 390 204 430 222"/>` : ''}
      ${atTip ? `<path class="meatus" d="M346 194 L346 206"/>` : `<ellipse class="meatus-dot" cx="${f(mx)}" cy="${f(my)}" rx="7" ry="4"/>`}
      ${hood ? `<path class="foreskin" d="M150 162 L250 160 C 300 140 344 150 356 184 C 340 172 300 160 252 168 L150 170 Z"/>` : ''}
      ${full ? `<path class="foreskin" d="M150 162 L250 162 C 300 154 340 158 362 197 L 362 203 C 340 242 300 246 250 238 L150 238 Z"/>` : ''}
      ${fistula ? `<circle class="meatus-dot" cx="200" cy="240" r="3"/>` : ''}
      ${corpCuts ? `<path class="corpcut" d="M196 230 l7 14 M218 230 l7 14 M240 230 l7 14"/>` : ''}
      ${stream}
    </g>
    ${taped ? `<rect class="tape" x="40" y="168" width="110" height="64" rx="8"/>` : ''}
    </g>
    ${taped ? `<text class="lbl small" x="150" y="290">${text.tape}</text>` : ''}
    <text class="lbl small" x="150" y="${top ? 260 : 142}" text-anchor="middle">${text.shaft}</text>
    <text class="lbl small" x="300" y="${top ? 268 : 132}" text-anchor="middle">${hood ? text.hood : text.glans}</text>
    ${atTip ? '' : `<text class="lbl small accent-text" x="${f(mx)}" y="${top ? 146 : f(Math.min(330, my + 34 + 40 * curve))}" text-anchor="middle">${text.opening}</text>`}
    ${fistula ? `<text class="lbl small accent-text" x="236" y="290">${text.fistula}</text>` : ''}
    ${graft && !atTip ? `<text class="lbl small" x="250" y="290">${text.graft}</text>` : ''}
    <text class="lbl small" x="30" y="332">${text.scrotum}</text>
  </svg>`;
}
