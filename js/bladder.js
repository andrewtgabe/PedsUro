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
//   catheter, augment (bigger bladder made with bowel), channel (belly-button channel)
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
    ${channel ? `<path class="channel" d="M${f(cx - rx * 0.5)} ${f(cy - ry * 0.8)} C ${f(cx - rx)} 150 330 130 380 120"/><circle class="stoma" cx="380" cy="120" r="7"/><text class="lbl small" x="392" y="114">${text.channel}</text>` : ''}
    ${message ? `<g class="bubble"><rect x="170" y="30" width="${message.length * 8.5 + 24}" height="34" rx="17"/><text x="${182}" y="52">${message}</text></g>` : ''}
    <text class="lbl small" x="100" y="20" text-anchor="middle">${text.brain}</text>
    <text class="lbl small" x="60" y="360">${text.cord}</text>
    <text class="lbl" x="${cx}" y="${f(cy - ry * 0.2)}" text-anchor="middle">${text.bladder}</text>
    <text class="lbl small" x="${cx + 30}" y="${f(bottom + 34)}">${text.sphincter}</text>
    ${augment ? `<text class="lbl small" x="${cx}" y="${f(cy - ry - 30)}" text-anchor="middle">${text.augment}</text>` : ''}
  </svg>`;
}
