// Bladder control drawing: brain, spinal cord, nerves, bladder and sphincter.
// Used by the daytime wetting and neurogenic bladder chapters.
import { clamp } from './anatomy.js';

const f = (n) => n.toFixed(1);

//   fill: 0..1 urine in the bladder
//   squeeze: bladder muscle contracting; shaky: squeezing at the wrong time
//   sphincter: 'closed' | 'open' | 'tight' (clenched while squeezing) | 'weak' (leaks)
//   stream: urine coming out; leak: drips
//   thick: 0..1 thick, ridged bladder wall
//   signals: 'none' | 'up' (full message) | 'down' (go / hold message) | 'both'
//   lesion: spinal cord problem blocking signals; lesionLabel
//   stool: 0..1 poop in the rectum pressing on the bladder
//   catheter, augment (bigger bladder made with bowel), channel (belly-button channel; a number 0–1 draws it part way)
//   scope: camera up the urethra; inject: 0–1 share of Botox spots placed in the wall
//   opened: bladder opened across the top; patch: bowel piece set aside; appendix: appendix set aside
//   channelCath: catheter left in the channel
//   message: short text shown near the brain
//   text: { brain, cord, bladder, sphincter, poop, lesion, augment, channel }
export function bladderNerves({
  fill = 0.5,
  squeeze = false,
  shaky = false,
  sphincter = 'closed',
  stream = false,
  leak = false,
  thick = 0,
  signals = 'none',
  lesion = false,
  stool = 0,
  catheter = false,
  augment = false,
  channel = false,
  scope = false,
  inject = 0,
  opened = false,
  patch = false,
  appendix = false,
  channelCath = false,
  message = '',
  text,
}) {
  const cx = 300;
  const cy = 300;
  const rx = 52 + 52 * clamp(fill) + (augment ? 18 : 0);
  const ry = 44 + 40 * clamp(fill) + (augment ? 14 : 0);
  const bottom = cy + ry;
  const gap = sphincter === 'open' ? 7 : sphincter === 'weak' ? 3 : 0;
  const tight = sphincter === 'tight';

  const upper = 'M100 96 L100 230';
  const lower = `M100 230 L100 330 C 140 360 200 ${f(cy + 10)} ${f(cx - rx)} ${f(cy + 10)}`;
  const signalPath = (d, dir) => `<path class="signal ${dir}" d="${d}"/>`;
  let sig = '';
  if (signals === 'up' || signals === 'both') sig += signalPath(lower, 'up') + (lesion ? '' : signalPath(upper, 'up'));
  if (signals === 'down' || signals === 'both') sig += (lesion ? '' : signalPath(upper, 'down')) + signalPath(lower, 'down');

  const arrows = squeeze
    ? [[0, -1], [1, 0], [-1, 0], [0.7, -0.7], [-0.7, -0.7]]
        .map(([dx, dy]) => {
          const x = cx + dx * (rx + 26);
          const y = cy + dy * (ry + 26);
          const ang = (Math.atan2(-dy, -dx) * 180) / Math.PI;
          return `<g class="squeeze" transform="translate(${f(x)} ${f(y)}) rotate(${f(ang)})"><line x1="-12" y1="0" x2="8" y2="0"/><path d="M14 0 L4 -6 L4 6 Z"/></g>`;
        })
        .join('')
    : '';

  const ridges = thick > 0.3
    ? Array.from({ length: 14 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 14;
        return `<line class="ridge" x1="${f(cx + (rx - 6) * Math.cos(a))}" y1="${f(cy + (ry - 6) * Math.sin(a))}" x2="${f(cx + (rx - 18) * Math.cos(a))}" y2="${f(cy + (ry - 18) * Math.sin(a))}"/>`;
      }).join('')
    : '';

  return `<svg class="anatomy bladder-nerves" viewBox="0 0 460 500" role="img" aria-label="${text.bladder}">
    <ellipse class="brain" cx="100" cy="58" rx="62" ry="42"/>
    <path class="brain-fold" d="M60 50 Q80 30 100 50 T140 50 M70 72 Q95 60 120 74"/>
    <path class="cord" d="M100 96 L100 330"/>
    ${[130, 170, 210, 250, 290].map((y) => `<rect class="vertebra" x="84" y="${y}" width="32" height="22" rx="6"/>`).join('')}
    <path class="nerve" d="${lower}"/>
    ${sig}
    ${lesion ? `<g class="lesion"><path d="M86 216 L114 244 M114 216 L86 244"/><text class="lbl small accent-text" x="124" y="234">${text.lesion}</text></g>` : ''}
    ${stool > 0 ? `<ellipse class="stool" cx="${f(cx + rx * 0.55 + 30)}" cy="${f(cy + 40)}" rx="${f(18 + 34 * stool)}" ry="${f(14 + 26 * stool)}"/><text class="lbl small" x="${f(cx + rx * 0.55 + 30)}" y="${f(cy + 46)}" text-anchor="middle">${text.poop}</text>` : ''}
    <line class="urethra" x1="${cx}" y1="${f(bottom)}" x2="${cx}" y2="496"/>
    ${stream || leak ? `<line class="urethra-urine" x1="${cx}" y1="${f(bottom)}" x2="${cx}" y2="494" style="stroke-width:${leak && !stream ? 3 : 6}"/>` : ''}
    <g class="${shaky ? 'shaky' : ''}">
      <ellipse class="bladder-wall" cx="${cx}" cy="${cy}" rx="${f(rx)}" ry="${f(ry)}" style="stroke-width:${f(8 + 16 * thick)}"/>
      <ellipse class="bladder-urine" cx="${cx}" cy="${f(cy + ry * (1 - fill) * 0.6)}" rx="${f(rx - 8 - 6 * thick)}" ry="${f(Math.max(4, (ry - 8 - 6 * thick) * (0.4 + 0.6 * fill)))}"/>
      ${augment ? `<path class="augment" d="M${f(cx - rx * 0.7)} ${f(cy - ry * 0.7)} Q ${cx} ${f(cy - ry - 26)} ${f(cx + rx * 0.7)} ${f(cy - ry * 0.7)}"/>` : ''}
      ${ridges}
    </g>
    ${arrows}
    <rect class="sphincter ${tight ? 'tight' : ''}" x="${f(cx - 22 - gap)}" y="${f(bottom + 18)}" width="16" height="22" rx="5"/>
    <rect class="sphincter ${tight ? 'tight' : ''}" x="${f(cx + 6 + gap)}" y="${f(bottom + 18)}" width="16" height="22" rx="5"/>
    ${stream ? `<line class="stream" x1="${cx}" y1="494" x2="${cx}" y2="500" style="stroke-width:6"/>` : ''}
    ${leak ? [0, 1, 2].map((i) => `<circle class="drip" cx="${cx}" cy="470" r="4" style="animation-delay:${i * 0.5}s"/>`).join('') : ''}
    ${catheter ? `<g class="catheter"><path d="M${cx} 500 L${cx} ${f(cy + ry * 0.4)}"/><circle cx="${cx}" cy="${f(cy + ry * 0.4)}" r="7"/></g>` : ''}
    ${(() => {
      const c = channel === true ? 1 : +channel || 0;
      if (c < 0.02) return '';
      const d = `M${f(cx - rx * 0.5)} ${f(cy - ry * 0.8)} C ${f(cx - rx)} 150 330 130 380 120`;
      return `<path class="channel" d="${d}" pathLength="1" stroke-dasharray="${f(c)} 2"/>${c > 0.95 ? `<circle class="stoma" cx="380" cy="120" r="7"/><text class="lbl small" x="372" y="100" text-anchor="end">${text.channel}</text>` : ''}
        ${channelCath ? `<g class="catheter"><path d="M404 96 L380 120"/><path d="${d}" style="stroke-width:3"/></g>` : ''}`;
    })()}
    ${scope ? `<g class="scope"><line x1="${cx}" y1="500" x2="${cx}" y2="${f(cy + ry * 0.3)}"/><circle cx="${cx}" cy="${f(cy + ry * 0.3)}" r="4"/></g>` : ''}
    ${inject > 0 ? Array.from({ length: Math.round(12 * clamp(inject)) }, (_, i) => {
      const ang = -Math.PI * 0.1 - (Math.PI * 0.8 * i) / 11;
      return `<circle class="botox" cx="${f(cx + (rx - 10) * Math.cos(ang))}" cy="${f(cy + (ry - 10) * Math.sin(ang))}" r="5"/>`;
    }).join('') : ''}
    ${opened ? `<path class="cutline" d="M${f(cx - rx * 0.7)} ${f(cy - ry * 0.7)} Q ${cx} ${f(cy - ry - 10)} ${f(cx + rx * 0.7)} ${f(cy - ry * 0.7)}"/>` : ''}
    ${patch ? `<path class="bowel-patch" d="M330 150 q20 -24 40 0 t40 0"/><text class="lbl small" x="370" y="182" text-anchor="middle">${text.augment}</text>` : ''}
    ${appendix ? `<path class="appendix" d="M360 230 q22 -10 34 -34"/><text class="lbl small" x="404" y="196">${text.appendix ?? ''}</text>` : ''}
    ${message ? `<g class="bubble"><rect x="170" y="30" width="${message.length * 8.5 + 24}" height="34" rx="17"/><text x="${182}" y="52">${message}</text></g>` : ''}
    <text class="lbl small" x="100" y="20" text-anchor="middle">${text.brain}</text>
    <text class="lbl small" x="60" y="360">${text.cord}</text>
    <text class="lbl" x="${cx}" y="${f(cy - ry * 0.2)}" text-anchor="middle">${text.bladder}</text>
    <text class="lbl small" x="${cx + 30}" y="${f(bottom + 34)}">${text.sphincter}</text>
    ${augment ? `<text class="lbl small" x="${cx}" y="${f(cy - ry - 30)}" text-anchor="middle">${text.augment}</text>` : ''}
  </svg>`;
}

// ---------- bladder and rectum, side view (bowel and bladder dysfunction) ----------

//   stool: 0..1 how full and stretched the rectum is; hard: hard, dry stool
//   squeeze: bladder squeezing too early (urge); leak: urine drips; soil: stool leaking
//   text: { bladder, rectum, poop, front, back, pressing }
export function pelvisSide({ stool = 0, hard = false, squeeze = false, leak = false, soil = false, text }) {
  const s = clamp(stool);
  // A full rectum pushes forward into the back of the bladder.
  const bx = 140 - 10 * s;
  const brx = 64 - 18 * s;
  const bry = 56 - 10 * s;
  const rw = 26 + 46 * s;
  const rectum = `M300 40 C 300 120 ${f(300 + rw * 0.3)} 200 ${f(296 + rw * 0.15)} 260 C 290 320 300 350 300 392`;
  const lumpR = 10 + 40 * s;
  const lumps = hard
    ? Array.from({ length: 5 }, (_, i) => `<circle class="stool-lump" cx="${f(292 + ((i * 13) % 20) - 8)}" cy="${f(300 - i * 22 * (0.4 + s))}" r="${f(6 + 10 * s)}"/>`).join('')
    : '';
  return `<svg class="anatomy bladder-nerves" viewBox="0 0 420 430" role="img" aria-label="${text.bladder}, ${text.rectum}">
    <path class="body-side" d="M60 20 C 30 120 30 300 80 400 L360 400 C 390 300 390 120 360 20 Z"/>
    <text class="lbl small" x="44" y="40">${text.front}</text>
    <text class="lbl small" x="376" y="40" text-anchor="end">${text.back}</text>
    <path class="rectum-wall" d="${rectum}" style="stroke-width:${f(rw + 12)}"/>
    <path class="rectum-lumen" d="${rectum}" style="stroke-width:${f(rw)}"/>
    ${s > 0.05 ? `<ellipse class="stool" cx="${f(300 + rw * 0.12)}" cy="${f(300 - 30 * s)}" rx="${f(rw * 0.42)}" ry="${f(lumpR)}"/>` : ''}
    ${lumps}
    <line class="urethra" x1="${f(bx + 6)}" y1="${f(250 + bry)}" x2="150" y2="404"/>
    <g class="${squeeze ? 'shaky' : ''}">
      <ellipse class="bladder-wall" cx="${f(bx)}" cy="250" rx="${f(brx)}" ry="${f(bry)}" style="stroke-width:9"/>
      <ellipse class="bladder-urine" cx="${f(bx)}" cy="258" rx="${f(brx - 10)}" ry="${f(bry - 14)}"/>
    </g>
    ${s > 0.5 ? [220, 255, 290].map((y) => `<g class="squeeze" transform="translate(${f(262 - rw * 0.2)} ${y}) rotate(180)"><line x1="-12" y1="0" x2="8" y2="0"/><path d="M14 0 L4 -6 L4 6 Z"/></g>`).join('') + `<text class="lbl small accent-text" x="${f(bx)}" y="${f(180 - bry * 0.2)}" text-anchor="middle">${text.pressing}</text>` : ''}
    ${leak ? [0, 1, 2].map((i) => `<circle class="drip" cx="150" cy="404" r="4" style="animation-delay:${i * 0.5}s"/>`).join('') : ''}
    ${soil ? [0, 1].map((i) => `<circle class="soil" cx="300" cy="398" r="4" style="animation-delay:${i * 0.7}s"/>`).join('') : ''}
    <text class="lbl" x="${f(bx)}" y="255" text-anchor="middle">${text.bladder}</text>
    <text class="lbl small" x="330" y="120">${text.rectum}</text>
    ${s > 0.05 ? `<text class="lbl small" x="${f(300 + rw * 0.6 + 6)}" y="${f(300 - 30 * s)}">${text.poop}</text>` : ''}
  </svg>`;
}

// ---------- Bristol stool chart ----------

// Simple pictures of the 7 stool types; type 4 is the goal.
//   type: 1..7 selected; text: { goal }
export function bristolChart(type, text) {
  const shape = (n, x, y) => {
    switch (n) {
      case 1: return [0, 1, 2, 3].map((i) => `<circle cx="${x - 22 + i * 15}" cy="${y + (i % 2) * 4}" r="6"/>`).join('');
      case 2: return `<path d="M${x - 30} ${y} q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 12 2 q-30 16 -60 -2z"/>`;
      case 3: return `<rect x="${x - 32}" y="${y - 8}" width="64" height="16" rx="8"/><path class="crack" d="M${x - 14} ${y - 8} l3 7 M${x + 4} ${y - 8} l3 8 M${x + 20} ${y - 8} l2 6"/>`;
      case 4: return `<path d="M${x - 34} ${y} C ${x - 20} ${y - 14} ${x + 20} ${y + 14} ${x + 34} ${y}" style="stroke-width:16;stroke-linecap:round;fill:none" class="snake"/>`;
      case 5: return [0, 1, 2].map((i) => `<ellipse cx="${x - 20 + i * 20}" cy="${y}" rx="9" ry="7"/>`).join('');
      case 6: return `<path d="M${x - 30} ${y + 4} q6 -14 14 -4 q6 -12 14 0 q8 -10 14 2 q8 -8 16 4 q-28 12 -58 -2z"/>`;
      default: return `<path d="M${x - 30} ${y + 6} q15 -10 30 -2 q15 -8 30 2 q-30 8 -60 0z" class="liquid"/>`;
    }
  };
  let rows = '';
  for (let n = 1; n <= 7; n++) {
    const y = 30 + (n - 1) * 52;
    rows += `<g class="bristol-row ${n === type ? 'on' : ''} ${n === 4 ? 'goal' : ''}">
      <rect x="10" y="${y - 22}" width="360" height="44" rx="10"/>
      <text class="lbl small" x="30" y="${y + 5}">${n}</text>
      <g class="poo">${shape(n, 120, y)}</g>
      ${n === 4 ? `<text class="lbl small" x="352" y="${y + 5}" text-anchor="end">★ ${text.goal}</text>` : ''}
    </g>`;
  }
  return `<svg class="anatomy bladder-nerves" viewBox="0 0 380 380" role="img" aria-label="Bristol">${rows}</svg>`;
}
