// Ectopic ureter / ureterocele chapter.
import { t } from '../i18n.js';
import { urinaryTract, ectopicMap, ECTOPIC_SITES } from '../anatomy.js';
import { segmented, modelLayout, optionTabs, takeaways } from '../ui.js';
import { BUILD as DUPLEX_TREATMENTS } from './duplex.js';

const T = (k) => t(`ectopic.${k}`);

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { sex: 'girl', site: 'urethra' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const siteCtl = document.createElement('div');

  const draw = () => {
    viz.innerHTML = ectopicMap({ sex: s.sex, site: s.site, text: T('embryology.labels') });
    const below = ECTOPIC_SITES[s.sex][s.site][2];
    explain.innerHTML = `<div class="callout ${below ? 'warn' : 'good'}"><p>${T(below ? 'embryology.below' : 'embryology.above')}</p></div>
      ${s.sex === 'boy' ? `<p class="note">${T('embryology.boyNote')}</p>` : ''}`;
  };

  const buildSites = () => {
    siteCtl.innerHTML = '';
    siteCtl.append(segmented(T('embryology.siteLabel'), Object.entries(T(`embryology.sites.${s.sex}`)), s.site, (v) => { s.site = v; draw(); }));
  };

  ctl.append(
    segmented(T('embryology.sexLabel'), Object.entries(T('embryology.sexes')), s.sex, (v) => {
      s.sex = v;
      s.site = v === 'girl' ? 'urethra' : 'prostatic';
      buildSites();
      draw();
    }),
    siteCtl,
  );
  buildSites();
  draw();
}

// ---------- 2. What's happening ----------

const blockedTop = { dilation: 0.8, pelvisFill: 1, ureterFill: 1 };
const VIEWS = {
  ureterocele: () => ({ affected: { duplex: { type: 'complete', upper: blockedTop, lower: { pelvisFill: 1 }, ureterocele: 1 } } }),
  outlet: () => ({
    affected: { duplex: { type: 'complete', upper: blockedTop, lower: { dilation: 0.4, pelvisFill: 1, ureterFill: 1 }, ureterocele: 1, ureteroceleNeck: true } },
    healthy: { dilation: 0.45, pelvisFill: 1, ureterFill: 1 },
    bladderFill: 0.95,
  }),
  ectopic: () => ({ affected: { duplex: { type: 'complete', upper: { dilation: 0.6, pelvisFill: 1, ureterFill: 1 }, lower: { pelvisFill: 1 }, ectopic: true } } }),
};

function renderPathology(root) {
  const s = { problem: 'ureterocele' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const problems = T('pathology.problems');

  const draw = () => {
    viz.innerHTML = urinaryTract(VIEWS[s.problem]());
    explain.innerHTML = `<h3>${problems[s.problem].name}</h3><p>${problems[s.problem].text}</p>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };

  ctl.append(segmented(T('pathology.problemLabel'), Object.entries(problems).map(([k, v]) => [k, v.name]), s.problem, (v) => { s.problem = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

// Same procedures as for a duplicated kidney.
function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    ['puncture', 'joining', 'reimplant', 'removal'].map((key) => ({ ...t(`duplex.treatment.options.${key}`), build: DUPLEX_TREATMENTS[key] })),
  );
}

export default {
  id: 'ectopic',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
