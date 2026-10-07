// Undescended testicle (cryptorchidism) chapter.
import { t } from '../i18n.js';
import { descent, DESCENT_STOPS } from '../genital.js';
import { segmented, slider, toggle, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`cryptorchidism.${k}`);
const labels = () => T('embryology.labels');

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const stages = T('embryology.stages');
  const s = { stage: 0, pos: stages[0].pos };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));
  let stop = null;

  const draw = () => {
    viz.innerHTML = descent({ pos: s.pos, gubernaculum: true, text: labels() });
    const st = stages[s.stage];
    explain.innerHTML = `<h3>${st.name}: ${st.title}</h3><p>${st.text}</p>
      <div class="callout"><strong>${T('embryology.stopTitle')}</strong><p>${T('embryology.stopText')}</p></div>`;
  };

  ctl.append(
    segmented(T('embryology.stageLabel'), stages.map((x, i) => [i, x.name]), 0, (v) => {
      stop?.();
      s.stage = v;
      const from = s.pos;
      stop = animate(1000, (k) => { s.pos = from + (stages[v].pos - from) * k; draw(); });
    }),
  );
  draw();
  return () => stop?.();
}

// ---------- 2. What's happening ----------

const WHERE_POS = { abdomen: DESCENT_STOPS.abdomen, canal: DESCENT_STOPS.canal, high: DESCENT_STOPS.high, retractile: DESCENT_STOPS.high };

function renderPathology(root) {
  const s = { where: 'canal' };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const where = T('pathology.where');

  const draw = () => {
    viz.innerHTML = descent({ pos: WHERE_POS[s.where], retractile: s.where === 'retractile', text: labels() });
    explain.innerHTML = `<h3>${where[s.where].name}</h3><p>${where[s.where].text}</p>
      <h3>${T('pathology.whyTitle')}</h3><ul>${T('pathology.why').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };

  ctl.append(segmented(T('pathology.whereLabel'), Object.entries(where).map(([k, v]) => [k, v.name]), s.where, (v) => { s.where = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

// Before/after toggle that moves the testicle from `from` into the scrotum.
function bringDown(viz, ctl, o, start) {
  let pos = start;
  let stop = null;
  const draw = () => (viz.innerHTML = descent({ pos, stitched: pos >= 0.999, text: labels() }));
  ctl.append(
    segmented('', [[start, o.before], [1, o.after]], start, (v) => {
      stop?.();
      const from = pos;
      stop = animate(1400, (k) => { pos = from + (v - from) * k; draw(); });
    }),
  );
  draw();
  return () => stop?.();
}

const BUILD = {
  wait(viz, ctl) {
    const o = T('treatment.options.wait');
    // Some testicles finish coming down in the first months after birth.
    const draw = (m) => (viz.innerHTML = descent({ pos: DESCENT_STOPS.high + (1 - DESCENT_STOPS.high) * Math.min(1, m / 4), text: labels() }));
    ctl.append(slider(o.control, { min: 0, max: 6, step: 1, value: 0, format: (v) => `${v} ${o.months}` }, draw));
    draw(0);
  },
  orchiopexy: (viz, ctl) => bringDown(viz, ctl, T('treatment.options.orchiopexy'), DESCENT_STOPS.canal),
  laparoscopy: (viz, ctl) => bringDown(viz, ctl, T('treatment.options.laparoscopy'), DESCENT_STOPS.abdomen),
  retractile(viz, ctl) {
    const o = T('treatment.options.retractile');
    const draw = (up) => (viz.innerHTML = descent({ pos: up ? DESCENT_STOPS.high : 1, retractile: up, text: labels() }));
    ctl.append(toggle(o.pull, true, draw));
    draw(true);
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
  id: 'cryptorchidism',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
