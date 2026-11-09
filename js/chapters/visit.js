// "Your visit" guide for parents and guardians: visit steps, common exams, and how to help.
import { t } from '../i18n.js';
import { segmented, modelLayout, stepPlayer, list } from '../ui.js';

const T = (k) => t(`visit.${k}`);
const STATIONS = [80, 200, 320, 440, 560];

// Parent and child walking along the visit path, centred on x.
const family = (x) => `<g class="family">
  <circle cx="${x - 14}" cy="62" r="13" fill="#e7b99c"/><rect x="${x - 27}" y="78" width="26" height="54" rx="12" fill="var(--accent)"/>
  <circle cx="${x + 16}" cy="92" r="10" fill="#e7b99c"/><rect x="${x + 6}" y="104" width="20" height="30" rx="9" fill="#f2c94c"/>
  <path d="M${x - 2} 100 L${x + 7} 110" stroke="#e7b99c" stroke-width="5" stroke-linecap="round"/></g>`;

function timeline({ x, at }) {
  const names = T('steps.names');
  return `<svg class="anatomy" viewBox="0 36 640 194">
    <line x1="80" y1="170" x2="560" y2="170" stroke="var(--line)" stroke-width="8" stroke-linecap="round"/>
    <line x1="80" y1="170" x2="${x}" y2="170" stroke="var(--accent)" stroke-width="8" stroke-linecap="round"/>
    ${STATIONS.map((sx, i) => `<g>
      <circle cx="${sx}" cy="170" r="${i === at ? 22 : 16}" fill="${i <= at ? 'var(--accent)' : '#fff'}" stroke="var(--accent)" stroke-width="3"/>
      <text x="${sx}" y="176" text-anchor="middle" font-weight="700" font-size="16" fill="${i <= at ? '#fff' : 'var(--accent)'}">${i + 1}</text>
      <text class="lbl${i === at ? '' : ' small'}" x="${sx}" y="216" text-anchor="middle">${names[i]}</text></g>`).join('')}
    ${family(x)}</svg>`;
}

function renderSteps(root) {
  const { viz, ctl, explain } = modelLayout(root, T('steps.intro'));
  explain.innerHTML = `<h3>${T('steps.tipTitle')}</h3>${list(T('steps.tips'), 'facts')}`;
  const steps = T('steps.captions').map((caption, i) => ({ caption, state: { x: STATIONS[i], at: i } }));
  return stepPlayer(ctl, steps, (s) => (viz.innerHTML = timeline({ ...s, at: Math.round(s.at) })), t('common.player'));
}

// Simple child outline (front view) with the exam area highlighted.
function body(exam) {
  const skin = '#f1cdb6';
  const edge = '#c99a80';
  const zone = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="rgb(47 111 181 / 0.22)" stroke="var(--accent)" stroke-width="3" stroke-dasharray="7 5"/>`;
  const back = `<g transform="translate(470 80)">
      <rect x="-60" y="-10" width="120" height="250" rx="16" fill="#fff" stroke="var(--line)"/>
      <path d="M-34 20 Q0 4 34 20 L38 150 Q0 168 -38 150 Z" fill="${skin}" stroke="${edge}" stroke-width="2"/>
      <path d="M0 22 L0 150" stroke="${edge}" stroke-width="2" stroke-dasharray="4 5"/>
      <circle cx="0" cy="140" r="5" fill="#8a5a44"/>${zone(0, 138, 22, 18)}
      <text class="lbl small" x="0" y="196" text-anchor="middle">${T('labels.back')}</text>
      <text class="lbl small" x="0" y="216" text-anchor="middle">${T('labels.dimple')}</text></g>`;
  const scan = `<g><path d="M230 218 L262 186 L276 200 L244 232 Z" fill="#5a6676"/><path d="M270 194 C 300 160 330 170 350 140" fill="none" stroke="#5a6676" stroke-width="4"/>
      <path d="M210 236 Q230 250 252 240" fill="none" stroke="var(--accent)" stroke-width="3"/><path d="M204 250 Q230 268 260 254" fill="none" stroke="var(--accent)" stroke-width="3" opacity="0.6"/></g>
    <g transform="translate(420 260)"><path d="M0 0 L60 0 L52 90 L8 90 Z" fill="#fff" stroke="var(--ink-soft)" stroke-width="3"/><path d="M5 40 L55 40 L52 90 L8 90 Z" fill="var(--urine)"/>
      <text class="lbl small" x="30" y="116" text-anchor="middle">${T('labels.cup')}</text></g>
    <text class="lbl small" x="350" y="128" text-anchor="middle">${T('labels.scan')}</text>`;
  return `<svg class="anatomy" viewBox="0 0 560 440">
    <g fill="${skin}" stroke="${edge}" stroke-width="2">
      <circle cx="200" cy="62" r="40"/>
      <path d="M150 112 Q200 98 250 112 L262 290 Q200 312 138 290 Z"/>
      <path d="M150 118 L110 230 L126 236 L160 150"/><path d="M250 118 L290 230 L274 236 L240 150"/>
      <path d="M144 288 L150 420 L186 420 L196 304"/><path d="M256 288 L250 420 L214 420 L204 304"/></g>
    ${exam === 'genital' ? `${zone(200, 300, 34, 24)}<text class="lbl" x="200" y="350" text-anchor="middle">${T('labels.genital')}</text>` : ''}
    ${exam === 'belly' ? `${zone(200, 210, 46, 52)}<text class="lbl" x="200" y="214" text-anchor="middle">${T('labels.belly')}</text>${back}` : ''}
    ${exam === 'urine' ? `${zone(200, 252, 40, 28)}<text class="lbl small" x="200" y="300" text-anchor="middle">${T('labels.bladder')}</text>${scan}` : ''}
  </svg>`;
}

function renderExams(root) {
  const { viz, ctl, explain } = modelLayout(root, T('exams.intro'));
  const show = (exam) => {
    viz.innerHTML = body(exam);
    explain.innerHTML = `<h3>${T('exams.whatTitle')}</h3>${list(T(`exams.what.${exam}`), 'facts')}
      <h3>${T('exams.helpTitle')}</h3>${list(T(`exams.help.${exam}`), 'facts')}`;
  };
  ctl.append(segmented(T('exams.label'), Object.entries(T('exams.options')), 'genital', show));
  show('genital');
}

function renderHelp(root) {
  const card = (k, cls = '') => `<section class="card ${cls}"><h3>${T(`help.${k}Title`)}</h3>${list(T(`help.${k}`))}</section>`;
  root.innerHTML = `
    <div class="takeaways">${card('before')}${card('bring')}${card('during')}${card('rights')}</div>
    <div class="callout warn reschedule"><strong>${T('help.rescheduleTitle')}</strong><p>${T('help.reschedule')}</p></div>`;
}

export default {
  id: 'visit',
  title: () => T('title'),
  sections: [
    { id: 'visitSteps', render: renderSteps },
    { id: 'exams', render: renderExams },
    { id: 'help', render: renderHelp },
  ],
};
