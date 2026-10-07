// Ureteropelvic junction (UPJ) obstruction chapter.
import { t } from '../i18n.js';
import { urinaryTract, kidneyCloseup, peristalsis } from '../anatomy.js';
import { segmented, toggle, slider, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`upj.${k}`);
const SEVERITY = [0.35, 0.65, 1];

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { cause: 'narrow' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const causes = T('embryology.causes');
  let stop = null;

  const draw = () => {
    stop?.();
    const narrow = s.cause === 'narrow';
    viz.innerHTML = `
      <div class="closeup">${kidneyCloseup({ pelvisDilation: 0.6, pelvisFill: 1, upj: true, mark: true, vessel: !narrow })}</div>
      ${narrow ? `<p class="caption">${T('embryology.stripCaption')}</p><div data-strip></div>` : ''}`;
    if (narrow) stop = peristalsis(viz.querySelector('[data-strip]'), { block: 'top', text: T('embryology.strip') });
    explain.innerHTML = `<h3>${causes[s.cause].name}</h3><p>${causes[s.cause].text}</p>`;
  };

  ctl.append(segmented(T('embryology.causeLabel'), Object.entries(causes).map(([k, v]) => [k, v.name]), s.cause, (v) => { s.cause = v; draw(); }));
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { sev: 1, drink: false, infection: false };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));

  const draw = () => {
    const d = Math.min(1, SEVERITY[s.sev] + (s.drink ? 0.3 : 0));
    viz.innerHTML = urinaryTract({
      affected: { pelvisDilation: d, pelvisFill: 1, upj: true, mark: true, flow: 'slow', bactPelvis: s.infection },
      bladderBact: s.infection ? 3 : 0,
    });
    explain.innerHTML = `
      <div class="callout"><p>${T('pathology.severityText')[s.sev]}</p></div>
      ${s.drink ? `<div class="callout warn"><p>${T('pathology.drinkText')}</p></div>` : ''}
      ${s.infection ? `<div class="callout warn"><p>${T('pathology.infectionText')}</p></div>` : ''}
      <h3>${T('pathology.symptomsTitle')}</h3>
      <ul>${T('pathology.symptoms').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };

  ctl.append(
    segmented(T('pathology.severityLabel'), T('pathology.severity').map((n, i) => [i, n]), s.sev, (v) => { s.sev = v; draw(); }),
    toggle(T('pathology.drink'), false, (v) => { s.drink = v; draw(); }),
    toggle(T('pathology.infection'), false, (v) => { s.infection = v; draw(); }),
  );
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  watch(viz, ctl) {
    const o = T('treatment.options.watch');
    const draw = (m) =>
      (viz.innerHTML = kidneyCloseup({ pelvisDilation: 0.7 - 0.4 * (m / 24), pelvisFill: 1, upj: true, narrowW: 3 + 3 * (m / 24) }));
    ctl.append(slider(o.control, { min: 0, max: 24, step: 3, value: 0, format: (v) => `${v} ${o.months}` }, draw));
    draw(0);
  },

  pyeloplasty(viz, ctl) {
    const o = T('treatment.options.pyeloplasty');
    const s = { k: 0, stent: false };
    const draw = () =>
      (viz.innerHTML = kidneyCloseup({
        pelvisDilation: 0.75 - 0.45 * s.k,
        pelvisFill: 1,
        upj: s.k < 1,
        narrowW: 3 + 5 * s.k,
        mark: s.k === 0,
        stent: s.stent && s.k === 1,
      }));
    let stop = null;
    const stentNote = document.createElement('p');
    stentNote.className = 'note';
    ctl.append(
      segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
        stop?.();
        const from = s.k;
        stop = animate(900, (k) => { s.k = from + (v - from) * k; draw(); });
      }),
      toggle(o.stent, false, (v) => {
        s.stent = v;
        stentNote.textContent = v ? o.stentText : '';
        draw();
      }),
      stentNote,
    );
    draw();
    return () => stop?.();
  },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'upj',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
