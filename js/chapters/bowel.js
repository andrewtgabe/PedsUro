// Bowel and bladder dysfunction (BBD) chapter.
import { t } from '../i18n.js';
import { pelvisSide, bristolChart } from '../bladder.js';
import { segmented, toggle, slider, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`bowel.${k}`);
const labels = () => T('labels');
const view = (o) => pelvisSide({ ...o, text: labels() });

// ---------- 1. How it builds up ----------

const STAGES = [
  { stool: 0 },
  { stool: 0.35, hard: true },
  { stool: 0.8, hard: true, squeeze: true },
  { stool: 1, hard: true, squeeze: true, soil: true },
];

function renderEmbryology(root) {
  const steps = T('embryology.steps');
  const s = { i: 0, stool: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;
  const draw = () => {
    viz.innerHTML = view({ ...STAGES[s.i], stool: s.stool });
    explain.innerHTML = `<h3>${s.i + 1}. ${steps[s.i].name}</h3><p>${steps[s.i].text}</p>`;
  };
  ctl.append(segmented(T('embryology.stepLabel'), steps.map((x, i) => [i, `${i + 1}. ${x.name}`]), 0, (v) => {
    stop?.();
    s.i = v;
    const from = s.stool;
    stop = animate(900, (k) => { s.stool = from + (STAGES[v].stool - from) * k; draw(); });
  }));
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { full: 2, hard: true };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = () => {
    const stool = [0, 0.3, 0.65, 1][s.full];
    viz.innerHTML = view({ stool, hard: s.hard && stool > 0, squeeze: s.full >= 2, leak: s.full === 3, soil: s.full === 3 });
    explain.innerHTML = `<div class="callout ${s.full >= 2 ? 'warn' : 'good'}"><p>${T('pathology.texts')[s.full]}</p></div>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>
      <p><a href="#/bbd/pathology">${T('pathology.link')} →</a></p>`;
  };
  ctl.append(
    segmented(T('pathology.fullLabel'), T('pathology.full').map((n, i) => [i, n]), s.full, (v) => { s.full = v; draw(); }),
    toggle(T('pathology.hard'), true, (v) => { s.hard = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

// ---------- Seattle Children's 3-day cleanout calculator ----------

// Dosing bands copied from Seattle Children's PE1071 "Chronic Constipation
// Treatment: 3-Day Cleanout and Maintenance Dosing Tables" (rev. 4/24,
// approved by their Pharmacy and Therapeutics Committee 3/19/2024).
// Doses are looked up by weight band, never calculated per kg. Each row keeps
// both the kg band and the handout's own lb band (lbMin/lbMax), because the
// printed lb ranges do not convert exactly (e.g. 22 lb = 9.98 kg is in the
// "22 to 32 lb" row).
// PEG: same capful dose twice a day for the cleanout, once a day for maintenance.
const PEG = [
  { min: 10, max: 15, lbMin: 22, lbMax: 33, caps: 0.5, oz: '4–6' },
  { min: 15, max: 20, lbMin: 33, lbMax: 44, caps: 0.75, oz: '4–6' },
  { min: 20, max: 25, lbMin: 44, lbMax: 55, caps: 1, oz: '6–8' },
  { min: 25, max: 30, lbMin: 55, lbMax: 66, caps: 1.25, oz: '8' },
  { min: 30, max: 40, lbMin: 66, lbMax: 88, caps: 1.5, oz: '8–12' },
  { min: 40, max: 50, lbMin: 88, lbMax: 110, caps: 1.75, oz: '8–12' },
  { min: 50, max: 70, lbMin: 110, lbMax: 155, caps: 2, oz: '8–12' },
  { min: 70, max: Infinity, lbMin: 155, lbMax: Infinity, caps: 2.5, oz: '12–16' },
];
// Senna at bedtime: liquid 8.8 mg/5 ml, 8.6 mg tablet, or 15 mg chocolate chew.
const SENNA = [
  { min: 10, max: 25, lbMin: 22, lbMax: 55, ages: '2–6', ml: 2.5, tabs: 0.5, chews: 0.5 },
  { min: 25, max: 40, lbMin: 55, lbMax: 88, ages: '6–12', ml: 5, tabs: 1, chews: 0.5 },
  { min: 40, max: Infinity, lbMin: 88, lbMax: Infinity, ages: '12+', ml: 10, tabs: 2, chews: 1 },
];
// Bisacodyl 5 mg tablet at bedtime. The handout prints this row as
// "23-88 lbs (15-40 kg)"; 15 kg is 33 lb, so the lb band starts at 33 here.
const BISACODYL = [
  { min: 15, max: 40, lbMin: 33, lbMax: 88, ages: '3–10', tabs: '1' },
  { min: 40, max: Infinity, lbMin: 88, lbMax: Infinity, ages: '10+', tabs: '1–2' },
];
const SOURCE_URL = 'https://www.seattlechildrens.org/pdf/PE1071.pdf';

// Look up by the unit the family entered, matching the handout's printed bands.
const band = (table, w, unit) =>
  table.find((b) => (unit === 'lb' ? w >= b.lbMin && w < b.lbMax : w >= b.min && w < b.max));
const FRACTIONS = { 0.25: '¼', 0.5: '½', 0.75: '¾' };
function frac(n) {
  const whole = Math.floor(n);
  const part = FRACTIONS[Math.round((n - whole) * 100) / 100] || '';
  return whole && part ? `${whole} ${part}` : whole ? String(whole) : part;
}
const plural = (n, one, many) => (n > 1 ? many : one);

function seattleCalculator(viz, ctl) {
  const o = T('treatment.options.seattle');
  const s = { weight: '', unit: 'kg', stim: 'senna' };
  viz.innerHTML = `<div class="calc">
      <label class="calc-weight"><span>${o.weightLabel}</span><input type="number" inputmode="decimal" min="0" step="0.1" placeholder="${o.weightPlaceholder}"></label>
      <div data-unit></div>
      <div data-stim></div>
      <div class="calc-out" aria-live="polite"></div>
    </div>`;
  const out = viz.querySelector('.calc-out');

  const draw = () => {
    const w = parseFloat(s.weight);
    if (!(w > 0)) {
      out.innerHTML = `<p class="note">${o.enterWeight}</p>`;
      return;
    }
    const kg = s.unit === 'kg' ? w : w / 2.2046;
    const kgText = `${kg.toFixed(1)} kg / ${(kg * 2.2046).toFixed(0)} lb`;
    const peg = band(PEG, w, s.unit);
    if (!peg) {
      out.innerHTML = `<div class="callout warn"><p><strong>${kgText}</strong></p><p>${o.tooSmall}</p></div>`;
      return;
    }
    const cap = (n) => `${frac(n)} ${plural(n, o.capful, o.capfuls)} (${Math.round(n * 17 * 10) / 10} g)`;
    const pegLine = `${cap(peg.caps)} ${o.mixedIn} ${peg.oz} ${o.ounces}`;

    let stimLine;
    if (s.stim === 'senna') {
      const b = band(SENNA, w, s.unit);
      stimLine = b
        ? `<strong>${o.senna}</strong> — ${o.choose}<ul>
            <li>${b.ml} ml ${o.sennaLiquid}</li>
            <li>${frac(b.tabs)} ${plural(b.tabs, o.tablet, o.tablets)} ${o.sennaTablet}</li>
            <li>${frac(b.chews)} ${plural(b.chews, o.chew, o.chews)} ${o.sennaChew}</li></ul>
            <p class="note">${o.usualAge} ${b.ages} ${o.years}</p>`
        : `<p>${o.noStimulant}</p>`;
    } else {
      const b = band(BISACODYL, w, s.unit);
      stimLine = b
        ? `<strong>${o.bisacodyl}</strong> — ${b.tabs} ${o.bisacodylTablet}<p class="note">${o.usualAge} ${b.ages} ${o.years}</p>`
        : `<div class="callout warn"><p>${o.bisacodylTooSmall}</p></div>`;
    }

    out.innerHTML = `
      <p class="calc-weight-out">${o.forWeight} <strong>${kgText}</strong></p>
      <div class="calc-card">
        <h4>${o.cleanoutTitle}</h4>
        <p><strong>${o.morningEvening}:</strong> Miralax (PEG) ${pegLine}</p>
        <div><strong>${o.bedtime}:</strong> ${stimLine}</div>
        <p class="note">${o.fluids}</p>
      </div>
      <div class="calc-card">
        <h4>${o.maintenanceTitle}</h4>
        <p><strong>${o.onceDaily}:</strong> Miralax (PEG) ${pegLine}</p>
        <p class="note">${o.maintenanceNote}</p>
      </div>
      <p class="note">${o.repeat}</p>`;
  };

  viz.querySelector('input').addEventListener('input', (e) => { s.weight = e.target.value; draw(); });
  viz.querySelector('[data-unit]').append(segmented(o.unitLabel, [['kg', 'kg'], ['lb', 'lb']], 'kg', (v) => { s.unit = v; draw(); }));
  viz.querySelector('[data-stim]').append(
    segmented(o.stimLabel, [['senna', o.senna], ['bisacodyl', o.bisacodyl]], 'senna', (v) => { s.stim = v; draw(); }),
  );
  draw();
}

const BUILD = {
  cleanout(viz, ctl) {
    const o = T('treatment.options.cleanout');
    const draw = (d) => (viz.innerHTML = view({ stool: 1 - d / 4, hard: d < 2, squeeze: d < 2 }));
    ctl.append(slider(o.control, { min: 0, max: 4, step: 1, value: 0, format: (v) => `${v} ${o.days}` }, draw));
    draw(0);
  },
  seattle: seattleCalculator,
  maintenance: (viz) => { viz.innerHTML = view({ stool: 0.15 }); },
  routine: (viz) => { viz.innerHTML = view({ stool: 0.15 }); },
  goal(viz, ctl) {
    const o = T('treatment.options.goal');
    const note = document.createElement('p');
    note.className = 'step-caption';
    const draw = (n) => {
      viz.innerHTML = bristolChart(n, labels());
      note.textContent = o.types[n - 1];
    };
    ctl.append(segmented(o.typeLabel, [1, 2, 3, 4, 5, 6, 7].map((n) => [n, String(n)]), 4, draw), note);
    draw(4);
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => {
      const o = T(`treatment.options.${key}`);
      const summary = key === 'seattle' ? `${o.summary}</p><p class="note"><a href="${SOURCE_URL}" target="_blank" rel="noopener">${o.source}</a>` : o.summary;
      return { ...o, summary, build: BUILD[key] };
    }),
  );
}

export default {
  id: 'bowel',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
