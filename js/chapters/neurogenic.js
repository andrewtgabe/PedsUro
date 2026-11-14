// Neurogenic bladder chapter.
import { t } from '../i18n.js';
import { bladderNerves } from '../bladder.js';
import { segmented, toggle, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';
import { bladderLabels } from './bbd.js';

const T = (k) => t(`neurogenic.${k}`);
const view = (o) => bladderNerves({ ...o, text: bladderLabels() });

// ---------- Why it happens (shown last) ----------

function renderEmbryology(root) {
  const s = { cause: 'blocked' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const causes = T('embryology.causes');
  const draw = () => {
    const blocked = s.cause === 'blocked';
    viz.innerHTML = view({ fill: 0.8, signals: 'both', lesion: blocked });
    explain.innerHTML = `<div class="callout ${blocked ? 'warn' : 'good'}"><p>${causes[s.cause].text}</p></div>
      <h3>${T('embryology.whyTitle')}</h3><ul>${T('embryology.why').map((x) => `<li>${x}</li>`).join('')}</ul>
      <div class="callout"><ul>${T('embryology.facts').map((x) => `<li>${x}</li>`).join('')}</ul></div>`;
  };
  ctl.append(segmented(T('embryology.causeLabel'), Object.entries(causes).map(([k, v]) => [k, v.name]), s.cause, (v) => { s.cause = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

// Four patterns: bladder muscle overactive or underactive, control muscle overactive (tight) or underactive (weak).
const TYPES = {
  high: { view: { fill: 0.5, squeeze: true, shaky: true, sphincter: 'tight', thick: 1, lesion: true, signals: 'up' }, pressure: 95 },
  retain: { view: { fill: 1, sphincter: 'tight', lesion: true, signals: 'up' }, pressure: 55 },
  urge: { view: { fill: 0.3, squeeze: true, shaky: true, sphincter: 'weak', leak: true, lesion: true, signals: 'up' }, pressure: 35 },
  leaky: { view: { fill: 0.2, sphincter: 'weak', leak: true, lesion: true, signals: 'up' }, pressure: 15 },
};

const meter = (pct) => {
  const color = pct > 70 ? 'var(--warn)' : pct > 35 ? '#c9962b' : 'var(--good)';
  return `<div class="meter"><span style="width:${pct}%;background:${color}"></span></div>`;
};

function renderPathology(root) {
  const s = { type: 'high' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    const ty = TYPES[s.type];
    viz.innerHTML = view(ty.view);
    explain.innerHTML = `<h3>${types[s.type].name}</h3><p>${types[s.type].text}</p>
      <p>${T('pathology.pressureLabel')}</p>${meter(ty.pressure)}
      ${s.type === 'high' ? `<p class="note">${T('pathology.reflux')}</p>` : ''}
      <p class="note">${T('pathology.bowel')}</p>`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

const HIGH = TYPES.high.view;

// Step-by-step procedures. HIGH is the starting bladder; numbers (fill, thick, inject, channel) animate between steps.
const PROC_BASE = { ...HIGH, scope: false, inject: 0, opened: false, patch: false, augment: false, appendix: false, channel: 0, channelCath: false, catheter: false };
const CALM = { squeeze: false, shaky: false, sphincter: 'closed', signals: 'none' };
const PROCS = {
  botox: [
    {},
    { scope: true },
    { scope: true, inject: 1 },
    { ...CALM, inject: 1, fill: 0.7, thick: 0.5 },
    { ...CALM, fill: 0.7, thick: 0.5 },
  ],
  augment: [
    {},
    { ...CALM, opened: true },
    { ...CALM, opened: true, patch: true },
    { ...CALM, augment: true, fill: 0.6, thick: 0.4 },
    { ...CALM, augment: true, fill: 0.8, thick: 0.3 },
    { ...CALM, augment: true, fill: 0.2, thick: 0.3, catheter: true },
  ],
  channel: [
    { ...CALM, fill: 0.6, thick: 0.3, catheter: true },
    { ...CALM, fill: 0.6, thick: 0.3, appendix: true },
    { ...CALM, fill: 0.6, thick: 0.3, channel: 0.4 },
    { ...CALM, fill: 0.6, thick: 0.3, channel: 1 },
    { ...CALM, fill: 0.6, thick: 0.3, channel: 1, channelCath: true },
    { ...CALM, fill: 0.1, thick: 0.3, channel: 1, channelCath: true },
  ],
};

function procedure(key) {
  return (viz, ctl) => {
    const captions = T(`treatment.options.${key}.steps`);
    const steps = PROCS[key].map((st, n) => ({ caption: captions[n], state: { ...PROC_BASE, ...st } }));
    return stepPlayer(ctl, steps, (st) => (viz.innerHTML = view(st)), t('common.player'));
  };
}


const iconList = (items, icons) => `<ul class="habit-list">${items.map((h, i) => `<li><span class="icon" aria-hidden="true">${icons[i]}</span><span>${h}</span></li>`).join('')}</ul>`;

// Urodynamics: bladder filling (left) and the pressure line (right). Above 40 is the danger zone.
function pressureChart(st, L) {
  const pts = [];
  for (let i = 0; i <= 100 * st.t; i++) {
    const x = i / 100;
    const p = st.high ? 8 + 60 * Math.pow(x, 2.2) + (x > 0.5 ? 10 * Math.max(0, Math.sin(x * 40)) : 0) : 6 + 10 * x;
    pts.push(`${(50 + x * 260).toFixed(1)} ${(200 - p * 2.2).toFixed(1)}`);
  }
  const y40 = 200 - 40 * 2.2;
  return `<svg class="anatomy chart" viewBox="0 0 330 240" role="img" aria-label="${L.title}">
    <rect x="50" y="20" width="260" height="${y40 - 20}" fill="rgb(220 38 38 / 0.08)"/>
    <line x1="50" y1="${y40}" x2="310" y2="${y40}" stroke="#dc2626" stroke-dasharray="6 4"/>
    <text x="306" y="${y40 - 6}" text-anchor="end" font-size="12" fill="#dc2626">${L.danger}</text>
    <line class="axis" x1="50" y1="200" x2="310" y2="200"/><line class="axis" x1="50" y1="20" x2="50" y2="200"/>
    ${pts.length > 1 ? `<path d="M${pts.join(' L')}" fill="none" stroke="${st.high ? '#dc2626' : '#16a34a'}" stroke-width="4"/>` : ''}
    ${st.leak ? `<circle cx="${pts[pts.length - 1].split(' ')[0]}" cy="${pts[pts.length - 1].split(' ')[1]}" r="8" fill="none" stroke="#2563eb" stroke-width="3"/><text x="200" y="40" font-size="12" fill="#2563eb">${L.leak}</text>` : ''}
    <text class="tick" x="180" y="224" text-anchor="middle">${L.volume}</text>
    <text class="tick" x="18" y="110" text-anchor="middle" transform="rotate(-90 18 110)">${L.pressure}</text>
  </svg>`;
}

const BUILD = {
  // Regular check-ups, with urodynamics shown step by step.
  tests(viz, ctl) {
    const o = T('treatment.options.tests');
    viz.classList.add('two');
    const states = [
      { t: 0, high: false, fill: 0.05, catheter: true },
      { t: 0.5, high: false, fill: 0.45, catheter: true },
      { t: 1, high: false, fill: 0.9, catheter: true },
      { t: 1, high: true, fill: 0.9, catheter: true, thick: 1, squeeze: true },
      { t: 1, high: true, fill: 0.9, catheter: true, thick: 1, squeeze: true, leak: true },
    ];
    const stop = stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state })), (st) => {
      viz.innerHTML = `<figure>${view({ fill: st.fill, catheter: st.catheter, thick: st.thick || 0, squeeze: !!st.squeeze, lesion: true, leak: !!st.leak, sphincter: st.high ? 'tight' : 'closed' })}</figure><figure>${pressureChart(st, o.chart)}</figure>`;
    }, t('common.player'));
    return () => { stop?.(); viz.classList.remove('two'); };
  },

  // How to catheterize, step by step.
  cic(viz, ctl) {
    const o = T('treatment.options.cic');
    const icons = ['🧼', '🧻', '💧', '➡️', '🚽', '↩️', '⏰'];
    const states = [
      { fill: 0.9, cath: false }, { fill: 0.9, cath: false }, { fill: 0.9, cath: false },
      { fill: 0.9, cath: true }, { fill: 0.15, cath: true }, { fill: 0.05, cath: false }, { fill: 0.05, cath: false },
    ];
    return stepPlayer(ctl, states.map((state, n) => ({ caption: o.steps[n], state: { ...state, n } })), (st) => {
      const n = Math.round(st.n);
      viz.innerHTML = view({ fill: st.fill, catheter: st.cath, lesion: true, thick: 0.5 })
        .replace(/<\/svg>\s*$/, `<text x="330" y="110" style="font-size:52px">${icons[n] || ""}</text></svg>`);
    }, t('common.player'));
  },

  medicine(viz, ctl) {
    const o = T('treatment.options.medicine');
    const draw = (on) => (viz.innerHTML = view(on ? { fill: 0.7, lesion: true, thick: 0.5 } : HIGH));
    ctl.append(toggle(o.dose, false, draw));
    draw(false);
  },

  bowel(viz) {
    const o = T('treatment.options.bowel');
    viz.innerHTML = iconList(o.items, ['📅', '💊', '🚿', '🔁', '🕳️']);
  },

  botox: procedure('botox'),
  augment: procedure('augment'),
  channel: procedure('channel'),

  other(viz) {
    const o = T('treatment.options.other');
    viz.innerHTML = iconList(o.items, ['🌙', '👶', '🔒', '🎗️', '🚰']);
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => {
      const o = T(`treatment.options.${key}`);
      const summary = key === 'bowel' ? `${o.summary}</p><p><a href="#/bbd/treatment">${o.link} →</a>` : o.summary;
      return { key, ...o, summary, build: BUILD[key] };
    }),
  );
}

// ---------- Follow-up (UMPIRE-style proactive schedule, birth to age 5) ----------

const STAGE_X = [70, 170, 270, 370, 470, 570];
function followTimeline(at, names, icons) {
  return `<svg class="anatomy" viewBox="0 0 640 220" role="img" aria-label="${names[at]}">
    <line x1="70" y1="120" x2="570" y2="120" stroke="var(--line)" stroke-width="8" stroke-linecap="round"/>
    <line x1="70" y1="120" x2="${STAGE_X[at]}" y2="120" stroke="var(--accent)" stroke-width="8" stroke-linecap="round"/>
    ${STAGE_X.map((x, i) => `<g>
      <circle cx="${x}" cy="120" r="${i === at ? 24 : 16}" fill="${i <= at ? 'var(--accent)' : '#fff'}" stroke="var(--accent)" stroke-width="3"/>
      <text x="${x}" y="${i === at ? 130 : 127}" text-anchor="middle" style="font-size:${i === at ? 26 : 18}px">${icons[i]}</text>
      <text class="lbl${i === at ? '' : ' small'}" x="${x}" y="176" text-anchor="middle">${names[i]}</text></g>`).join('')}
  </svg>`;
}

function renderFollowup(root) {
  const stages = T('followup.stages');
  const icons = ['👶', '📈', '🔎', '🎂', '🎒', '⚠️'];
  const { viz, ctl, explain } = modelLayout(root, T('followup.intro'));
  const draw = (i) => {
    const st = stages[i];
    viz.innerHTML = followTimeline(i, stages.map((x) => x.name), icons);
    explain.innerHTML = `<h3>${st.title}</h3>
      <h4>${T('followup.testsTitle')}</h4><ul>${st.tests.map((x) => `<li>${x}</li>`).join('')}</ul>
      <h4>${T('followup.decideTitle')}</h4><ul>${st.decide.map((x) => `<li>${x}</li>`).join('')}</ul>
      <p class="note">${T('followup.note')}</p>`;
  };
  ctl.append(segmented(T('followup.stageLabel'), stages.map((x, i) => [i, x.name]), 0, draw));
  draw(0);
}

export default {
  id: 'neurogenic',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'followup', render: renderFollowup },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
