// Buried penis chapter.
import { t } from '../i18n.js';
import { buriedSide } from '../genital.js';
import { segmented, slider, modelLayout, optionTabs, takeaways, stepPlayer } from '../ui.js';

const T = (k) => t(`buried.${k}`);
const view = (o) => buriedSide({ ...o, text: T('labels') });

// What each cause looks like.
const CAUSES = {
  normal: { buried: 0, web: 0, foreskin: true },
  fat: { buried: 0.8, web: 0, foreskin: true },
  skin: { buried: 0.55, web: 0.2, foreskin: true },
  web: { buried: 0.2, web: 0.75, foreskin: true },
  scar: { buried: 0.7, web: 0, foreskin: false, scar: true },
};

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { cause: 'fat' };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  const draw = () => {
    viz.innerHTML = view(CAUSES[s.cause]);
    explain.innerHTML = `<div class="callout ${s.cause === 'normal' ? 'good' : 'warn'}"><p>${T(`embryology.texts.${s.cause}`)}</p></div><p class="note">${T('embryology.note')}</p>`;
  };
  ctl.append(segmented(T('embryology.causeLabel'), Object.entries(T('embryology.causes')), s.cause, (v) => { s.cause = v; draw(); }));
  draw();
}

// ---------- 2. What's happening ----------

function renderPathology(root) {
  const s = { press: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const draw = () => {
    viz.innerHTML = view({ buried: 0.8, web: 0.3, foreskin: true, press: s.press, pressArrow: true });
    explain.innerHTML = `<div class="callout ${s.press > 0.6 ? 'good' : 'warn'}"><p>${T(s.press > 0.6 ? 'pathology.pressed' : 'pathology.hidden')}</p></div>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };
  ctl.append(slider(T('pathology.pressLabel'), { min: 0, max: 1, step: 0.05, value: 0, ticks: T('pathology.pressTicks'), format: (v) => `${Math.round(v * 100)}%` }, (v) => { s.press = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

const steps = (key, base, states, viz, ctl) => {
  const captions = T(`treatment.options.${key}.steps`);
  return stepPlayer(ctl, states.map((st, n) => ({ caption: captions[n], state: { ...base, ...st } })), (st) => (viz.innerHTML = view(st)), t('common.player'));
};

const BUILD = {
  watch: (viz) => { viz.innerHTML = view({ buried: 0.8, web: 0, foreskin: true }); },
  // Circumcision with penoplasty: free the skin, anchor it at the base, rotate flaps to cover.
  penoplasty: (viz, ctl) =>
    steps('penoplasty', { buried: 0.8, web: 0.3, foreskin: true, press: 0 }, [
      {},
      { press: 1, mark: 'circ' },
      { press: 1, foreskin: false, bare: true },
      { press: 1, foreskin: false, bare: true, anchors: true },
      { press: 1, foreskin: false, anchors: true, arrows: true },
      { press: 1, foreskin: false, anchors: true, seam: true, web: 0 },
      { press: 1, foreskin: false, anchors: true, seam: true, web: 0, dressing: true },
      { buried: 0.15, press: 0, foreskin: false, web: 0 },
    ], viz, ctl),
  // Scrotoplasty: open the web side to side, close it up and down.
  scrotoplasty: (viz, ctl) =>
    steps('scrotoplasty', { buried: 0.15, web: 0.75, foreskin: false, webCut: 0 }, [
      {},
      { mark: 'web' },
      { web: 0.4, webCut: 1 },
      { web: 0, webCut: 2 },
      { web: 0 },
    ], viz, ctl),
};

function renderTreatment(root) {
  return optionTabs(
    root,
    { intro: T('treatment.intro'), pros: T('treatment.pros'), cons: T('treatment.cons') },
    Object.keys(BUILD).map((key) => ({ ...T(`treatment.options.${key}`), build: BUILD[key] })),
  );
}

export default {
  id: 'buried',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
