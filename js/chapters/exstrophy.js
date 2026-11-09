// Bladder exstrophy and epispadias chapter (bladder exstrophy-epispadias complex).
import { t } from '../i18n.js';
import { segmented, toggle, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`exstrophy.${k}`);
const f = (n) => n.toFixed(1);
const CX = 260;

// Shared looks. Numbers blend between steps in the step player.
const TYPICAL = { open: 0, gap: 8, navelY: 110, epi: 0, len: 70, split: 0, cloaca: 0 };
const EPI = { ...TYPICAL, gap: 34, epi: 1, len: 58, split: 0.6 };
const BE = { open: 1, gap: 90, navelY: 196, epi: 1, len: 46, split: 1, cloaca: 0 };
const CE = { ...BE, gap: 120, cloaca: 1, len: 30 };

const SKIN = '#f1cdb6';
const SKIN_EDGE = '#c99a80';
const MUCOSA = '#e58f8f';
const MUCOSA_EDGE = '#b45b5b';

const lbl = (x, y, text, cls = '', anchor = 'middle') => `<text class="lbl ${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${text}</text>`;
const arrow = (x1, y1, x2, y2) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = (d) => `${f(x2 - 12 * Math.cos(a + d))} ${f(y2 - 12 * Math.sin(a + d))}`;
  return `<path d="M${x1} ${y1} L${x2} ${y2} M${h(0.5)} L${x2} ${y2} L${h(-0.5)}" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
};

// Pelvic bones seen through the skin: hip wings and the two pubic bones, `gap` apart at the front.
function bones(gap, cut) {
  const side = (s) => {
    const px = CX + (s * gap) / 2;
    return `<path d="M${CX + s * 138} 120 C ${CX + s * 128} 190 ${CX + s * 110} 260 ${f(px + s * 40)} 296 L${f(px)} 300 M${f(px + s * 8)} 306 C ${f(px + s * 30)} 330 ${CX + s * 70} 340 ${CX + s * 95} 330"/>`;
  };
  return `<g fill="none" stroke-linecap="round" opacity="0.9">
    <g stroke="#bfae86" stroke-width="16">${side(-1)}${side(1)}</g>
    <g stroke="#efe6d0" stroke-width="10">${side(-1)}${side(1)}</g>
    ${cut ? `<path d="M${CX - 146} 172 L${CX - 112} 186 M${CX + 146} 172 L${CX + 112} 186" stroke="var(--warn)" stroke-width="5"/>` : ''}
  </g>`;
}

function genitals(s, sex) {
  if (sex === 'girl') {
    const dx = 6 + s.split * 30;
    const lab = 16 + s.split * 26;
    return `<g stroke="${SKIN_EDGE}" stroke-width="2">
      <path d="M${f(CX - lab)} 320 C ${f(CX - lab - 18)} 344 ${CX - 24} 372 ${CX - 4} 380" fill="${SKIN}"/>
      <path d="M${f(CX + lab)} 320 C ${f(CX + lab + 18)} 344 ${CX + 24} 372 ${CX + 4} 380" fill="${SKIN}"/>
      ${s.epi > 0.05 ? `<path d="M${CX - 9} 300 L${CX + 9} 300 L${CX + 6} 348 L${CX - 6} 348 Z" fill="${MUCOSA}" stroke="${MUCOSA_EDGE}" opacity="${f(s.epi)}"/>` : ''}
      <ellipse cx="${f(CX - dx)}" cy="334" rx="7" ry="9" fill="#e7a99a"/><ellipse cx="${f(CX + dx)}" cy="334" rx="7" ry="9" fill="#e7a99a"/>
      ${s.epi < 0.95 ? `<circle cx="${CX}" cy="346" r="3.5" fill="#7a3b33" stroke="none" opacity="${f(1 - s.epi)}"/>` : ''}
      <ellipse cx="${CX}" cy="${f(362 - s.split * 6)}" rx="6" ry="11" fill="#d98c86"/></g>`;
  }
  const top = 318;
  const bot = top + s.len;
  return `<g stroke="${SKIN_EDGE}" stroke-width="2">
    <ellipse cx="${CX}" cy="${f(bot + 4)}" rx="${f(52 + s.split * 10)}" ry="40" fill="#ecc1a6"/>
    <path d="M${CX - 22} ${top} L${CX - 20} ${f(bot - 10)} Q${CX} ${f(bot + 24)} ${CX + 20} ${f(bot - 10)} L${CX + 22} ${top} Z" fill="${SKIN}"/>
    ${s.epi > 0.05 ? `<path d="M${CX - 9} ${top - 18} L${CX + 9} ${top - 18} L${CX + 8} ${f(bot + 4)} Q${CX} ${f(bot + 10)} ${CX - 8} ${f(bot + 4)} Z" fill="${MUCOSA}" stroke="${MUCOSA_EDGE}" opacity="${f(s.epi)}"/>` : ''}
    ${s.epi < 0.95 ? `<circle cx="${CX}" cy="${f(bot + 7)}" r="3" fill="#7a3b33" stroke="none" opacity="${f(1 - s.epi)}"/>` : ''}</g>`;
}

// Front view of a baby's lower belly and groin.
//   s: { open 0-1, gap, navelY, epi 0-1, len, split 0-1, cloaca 0-1 } plus overlays
//   (seam, tubes, neck, cut, pull, cast, bonesShown, wrap) and sex 'boy' | 'girl'.
function belly(s, sex = 'boy') {
  const L = T('labels');
  const plateW = 70;
  const showBones = s.bonesShown ?? true;
  return `<svg class="anatomy" viewBox="0 0 520 440">
    <path d="M100 0 L420 0 L432 280 C 436 320 400 340 360 352 L380 440 L290 440 L268 380 Q${CX} 372 252 380 L230 440 L140 440 L160 352 C 120 340 84 320 88 280 Z" fill="${SKIN}" stroke="${SKIN_EDGE}" stroke-width="2"/>
    ${showBones ? bones(s.gap, s.cut) : ''}
    ${s.cloaca > 0.05 ? `<g opacity="${f(s.cloaca)}"><circle cx="${CX}" cy="122" r="48" fill="rgb(255 255 255 / 0.55)" stroke="#b9a7a0" stroke-width="2"/>
      <path d="M${CX - 30} 112 q15 -20 30 0 t30 0 M${CX - 28} 138 q14 -18 28 0 t28 0" fill="none" stroke="#d9906a" stroke-width="7" stroke-linecap="round"/></g>` : ''}
    ${s.open < 0.95 ? `<g opacity="${f(1 - s.open)}">
      <path d="M${CX - 46} 232 C ${CX - 50} 194 ${CX + 50} 194 ${CX + 46} 232 C ${CX + 42} 266 ${CX + 14} 280 ${CX} 290 C ${CX - 14} 280 ${CX - 42} 266 ${CX - 46} 232 Z" fill="rgb(242 201 76 / 0.25)" stroke="${MUCOSA_EDGE}" stroke-width="2" stroke-dasharray="6 5"/>
      ${s.neck ? `<ellipse cx="${CX}" cy="292" rx="12" ry="6" fill="none" stroke="var(--accent)" stroke-width="4"/>` : ''}</g>` : ''}
    ${s.open > 0.05 ? `<g opacity="${f(s.open)}">
      ${s.cloaca > 0.05
        ? `<ellipse cx="${CX - 52}" cy="250" rx="36" ry="40" fill="${MUCOSA}" stroke="${MUCOSA_EDGE}" stroke-width="2"/><ellipse cx="${CX + 52}" cy="250" rx="36" ry="40" fill="${MUCOSA}" stroke="${MUCOSA_EDGE}" stroke-width="2"/>
           <rect x="${CX - 18}" y="214" width="36" height="76" rx="14" fill="#e8a36f" stroke="#b5703f" stroke-width="2" opacity="${f(s.cloaca)}"/>`
        : `<path d="M${CX - plateW} 250 C ${CX - plateW} 200 ${CX + plateW} 200 ${CX + plateW} 250 C ${CX + plateW} 290 ${CX + 20} 300 ${CX} 304 C ${CX - 20} 300 ${CX - plateW} 290 ${CX - plateW} 250 Z" fill="${MUCOSA}" stroke="${MUCOSA_EDGE}" stroke-width="2"/>
           <circle cx="${CX - 22}" cy="268" r="4" fill="#7a3b33"/><circle cx="${CX + 22}" cy="268" r="4" fill="#7a3b33"/>
           <path d="M${CX - 40} 232 q6 -6 12 0 M${CX + 26} 236 q6 -6 12 0 M${CX - 6} 222 q6 -6 12 0" fill="none" stroke="${MUCOSA_EDGE}" stroke-width="1.5"/>`}</g>` : ''}
    ${s.cloaca > 0.5 ? '' : `<g stroke="${SKIN_EDGE}" stroke-width="2"><circle cx="${CX}" cy="${f(s.navelY)}" r="8" fill="#e2b398"/><path d="M${CX - 3} ${f(s.navelY - 2)} q3 5 6 0" fill="none"/></g>`}
    ${genitals(s, sex)}
    ${s.seam ? `<path d="M${CX} ${f(s.navelY + 12)} L${CX} 300" stroke="#7a5a4a" stroke-width="2" stroke-dasharray="2 6" fill="none"/>
      <path d="${Array.from({ length: 7 }, (_, i) => { const y = s.navelY + 20 + (i * (282 - s.navelY - 20)) / 6; return `M${CX - 7} ${f(y)} L${CX + 7} ${f(y)}`; }).join(' ')}" stroke="#7a5a4a" stroke-width="2"/>` : ''}
    ${s.tubes ? `<g fill="none" stroke-linecap="round">
      <path d="M${CX + 16} 236 C ${CX + 70} 220 ${CX + 120} 190 ${CX + 190} 160" stroke="#8a9bb0" stroke-width="6"/>
      <path d="M${CX - 10} 228 C ${CX - 70} 200 ${CX - 120} 180 ${CX - 190} 150" stroke="#8fc0a0" stroke-width="3"/>
      <path d="M${CX - 4} 226 C ${CX - 66} 190 ${CX - 112} 170 ${CX - 186} 138" stroke="#8fc0a0" stroke-width="3"/></g>` : ''}
    ${s.pull ? `${arrow(CX - 150, 300, CX - 70, 300)}${arrow(CX + 150, 300, CX + 70, 300)}` : ''}
    ${s.cast ? `<path d="M96 210 L424 210 L440 300 L392 440 L282 440 L268 386 L252 386 L238 440 L128 440 L80 300 Z" fill="rgb(255 255 255 / 0.55)" stroke="#9fb3c8" stroke-width="3" stroke-dasharray="10 6"/>
      <rect x="${CX - 60}" y="236" width="120" height="70" rx="10" fill="rgb(255 255 255 / 0.25)" stroke="#9fb3c8" stroke-width="2"/>` : ''}
    ${s.wrap ? `<path d="M${CX - 92} 236 C ${CX - 92} 176 ${CX + 92} 176 ${CX + 92} 236 C ${CX + 92} 300 ${CX - 92} 300 ${CX - 92} 236 Z" fill="rgb(200 225 245 / 0.45)" stroke="#7fa7c9" stroke-width="2"/>` : ''}
    ${s.open > 0.5 && !s.wrap ? lbl(CX, s.cloaca > 0.5 ? 196 : 214, s.cloaca > 0.5 ? L.halves : L.plate) : ''}
    ${s.wrap ? lbl(CX + 120, 196, L.wrap, 'small', 'start') : ''}
    ${s.cloaca > 0.5 ? `${lbl(CX + 56, 90, L.omphalocele, 'small', 'start')}${lbl(CX, 306, L.bowel, 'small')}` : ''}
    ${s.open < 0.5 && s.neck ? lbl(CX + 24, 298, L.neck, 'small', 'start') : ''}
    ${s.tubes ? `${lbl(CX + 140, 150, L.spt, 'small')}${lbl(CX - 150, 130, L.stents, 'small')}` : ''}
    ${s.cast ? lbl(CX + 150, 232, L.cast, 'small') : ''}
    ${s.cut ? lbl(CX - 150, 168, L.osteotomy, 'small') : ''}
    ${showBones && !s.cast && !s.tubes ? lbl(CX + 150, 252, L.pubic, 'small') : ''}
    ${!s.cast && !s.tubes && s.cloaca < 0.5 ? lbl(CX - 30, f(s.navelY - 14), L.navel, 'small', 'end') : ''}
    ${s.epi > 0.5 && !s.cast ? lbl(CX - 60, sex === 'girl' ? 350 : 360, L.epispadias, 'small', 'end') : ''}
  </svg>`;
}

// ---------- 1. How it forms ----------

const TYPES = { typical: TYPICAL, epispadias: EPI, exstrophy: BE, cloacal: CE };

function renderEmbryology(root) {
  const s = { type: 'exstrophy', sex: 'boy' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = belly(TYPES[s.type], s.sex);
    explain.innerHTML = `<div class="callout ${s.type === 'typical' ? 'good' : 'warn'}"><p>${T(`embryology.texts.${s.type}`)}</p></div>
      <p class="note">${T(`embryology.often.${s.type}`)}</p><p class="note">${T('embryology.cause')}</p>`;
  };
  ctl.append(
    segmented(T('embryology.typeLabel'), Object.entries(T('embryology.types')), s.type, (v) => { s.type = v; draw(); }),
    segmented(T('sexLabel'), Object.entries(T('sexes')), s.sex, (v) => { s.sex = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { sex: 'boy', bones: true };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = () => {
    viz.innerHTML = belly({ ...BE, bonesShown: s.bones }, s.sex);
    explain.innerHTML = `<h3>${T('pathology.featuresTitle')}</h3><ul>${T('pathology.features').map((x) => `<li>${x}</li>`).join('')}</ul>
      <p>${T(`pathology.genital.${s.sex}`)}</p>
      <h3>${T('pathology.findTitle')}</h3><ul>${T('pathology.find').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(
    segmented(T('sexLabel'), Object.entries(T('sexes')), s.sex, (v) => { s.sex = v; draw(); }),
    toggle(T('pathology.bonesLabel'), s.bones, (v) => { s.bones = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const steps = (key, states, viz, ctl, sex = 'boy') => {
  const captions = T(`treatment.options.${key}.steps`);
  return stepPlayer(ctl, states.map((st, n) => ({ caption: captions[n], state: st })), (st) => (viz.innerHTML = belly(st, sex)), t('common.player'));
};

const CLOSED = { ...BE, open: 0, gap: 14, navelY: 150, seam: true };
const DONE = { ...CLOSED, epi: 0, len: 52, split: 0.1 };

const BUILD = {
  newborn: (viz) => { viz.innerHTML = belly({ ...BE, wrap: true }); },
  staged: (viz, ctl) =>
    steps('staged', [
      BE,
      { ...BE, cut: true, pull: true },
      { ...CLOSED, tubes: true },
      { ...CLOSED, cast: true },
      CLOSED,
      { ...DONE },
      { ...DONE, neck: true },
    ], viz, ctl),
  cpre: (viz, ctl) =>
    steps('cpre', [
      BE,
      { ...BE, cut: true, pull: true },
      { ...DONE, neck: true },
      { ...DONE, neck: true, tubes: true },
      { ...DONE, neck: true, cast: true },
      { ...DONE, neck: true },
    ], viz, ctl),
  bones: (viz, ctl) =>
    steps('bones', [
      { ...BE, bonesShown: true },
      { ...BE, cut: true },
      { ...BE, cut: true, gap: 40, pull: true },
      { ...CLOSED, cut: true },
      { ...CLOSED, cast: true },
    ], viz, ctl),
  epispadias: (viz, ctl) =>
    steps('epispadias', [
      EPI,
      { ...EPI, neck: true, open: 0 },
      { ...EPI, epi: 0, len: 66, gap: 34 },
      { ...TYPICAL, gap: 34, len: 66 },
    ], viz, ctl),
  continence: (viz) => { viz.innerHTML = belly({ ...DONE, neck: true }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'exstrophy',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
