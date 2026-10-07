// Urinary tract infection (UTI) chapter.
import { t } from '../i18n.js';
import { urinaryTract } from '../anatomy.js';
import { segmented, slider, modelLayout, optionTabs, takeaways } from '../ui.js';
import { refluxSide } from './vur.js';

const T = (k) => t(`uti.${k}`);

// Infection reaching: 0 = outside, 1 = bladder, 2 = kidney.
const spread = (level) => ({
  urethraBact: true,
  bladderBact: level >= 1 ? 6 : 0,
  bladderRed: level >= 1,
  affected: level >= 2 ? { bactSpread: 1, inflamed: true, pelvisFill: 1 } : {},
});

// ---------- 1. How it happens ----------

function renderEmbryology(root) {
  const steps = T('embryology.steps');
  const s = { i: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = urinaryTract(spread(s.i));
    explain.innerHTML = `<h3>${steps[s.i].name}</h3><p>${steps[s.i].text}</p>
      <h3>${T('embryology.riskTitle')}</h3><ul>${T('embryology.risks').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(segmented(T('embryology.stepLabel'), steps.map((x, i) => [i, x.name]), 0, (v) => { s.i = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { type: 'kidney' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const types = T('pathology.types');
  const draw = () => {
    viz.innerHTML = urinaryTract(spread(s.type === 'kidney' ? 2 : 1));
    const ty = types[s.type];
    explain.innerHTML = `<h3>${ty.name}</h3><p>${ty.text}</p><ul>${ty.signs.map((x) => `<li>${x}</li>`).join('')}</ul>
      <div class="callout warn"><p>${T('pathology.babyNote')}</p></div>`;
  };
  ctl.append(segmented(T('pathology.typeLabel'), Object.entries(types).map(([k, v]) => [k, v.name]), s.type, (v) => { s.type = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

const BUILD = {
  testing: (viz) => { viz.innerHTML = urinaryTract({ catheter: true, bladderBact: 4, bladderFill: 0.4 }); },
  antibiotics(viz, ctl) {
    const o = T('treatment.options.antibiotics');
    const draw = (d) => {
      const left = Math.max(0, 6 - Math.round(d * 1.5));
      viz.innerHTML = urinaryTract({
        bladderBact: left,
        bladderRed: d < 3,
        affected: { inflamed: d < 3, bactSpread: d < 2 ? 1 : 0, pelvisFill: 1 },
      });
    };
    ctl.append(slider(o.control, { min: 0, max: 10, step: 1, value: 0, format: (v) => `${v} ${o.days}` }, draw));
    draw(0);
  },
  imaging: (viz) => { viz.innerHTML = urinaryTract({ affected: refluxSide(3, 1), bladderFill: 0.35, voiding: true }); },
  prevention: (viz) => { viz.innerHTML = urinaryTract({ bladderFill: 0.5, voiding: true }); },
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => {
      const o = T(`treatment.options.${key}`);
      const summary = o.link ? `${o.summary}</p><p><a href="#/vur/pathology">${o.link} →</a>` : o.summary;
      return { ...o, summary, build: BUILD[key] };
    }),
  );
}

export default {
  id: 'uti',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
