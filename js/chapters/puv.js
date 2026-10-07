// Posterior urethral valves (PUV) chapter.
import { t } from '../i18n.js';
import { urinaryTract, urethraSection } from '../anatomy.js';
import { segmented, toggle, animate, modelLayout, optionTabs, takeaways } from '../ui.js';

const T = (k) => t(`puv.${k}`);

// ---------- 1. How it forms ----------

function renderEmbryology(root) {
  const s = { mode: 'valves', voiding: true };
  const { viz, ctl, explain } = modelLayout(root, T('embryology.intro'));

  const draw = () => {
    viz.innerHTML = urethraSection({ valves: s.mode === 'valves' ? 1 : 0, voiding: s.voiding, text: T('embryology.labels') });
    explain.innerHTML = `<div class="callout ${s.mode === 'valves' ? 'warn' : 'good'}"><p>${T(`embryology.texts.${s.mode}`)}</p></div>
      <p class="note">${T('embryology.note')}</p>`;
  };

  ctl.append(
    segmented(T('embryology.modeLabel'), Object.entries(T('embryology.modes')), s.mode, (v) => { s.mode = v; draw(); }),
    toggle(T('embryology.pee'), s.voiding, (v) => { s.voiding = v; draw(); }),
  );
  draw();
}

// ---------- 2. What's happening ----------

// Each step adds the next consequence of the blockage.
function stepView(step) {
  const kidneys = step >= 2 ? { dilation: 0.75, tort: 0.5, blunt: 0.5, pelvisFill: 1, ureterFill: 1, pale: step >= 3 } : { pelvisFill: 1 };
  return urinaryTract({
    affected: kidneys,
    healthy: kidneys,
    urethraBlock: true,
    bladderWall: step >= 1 ? 1 : 0.2,
    bladderFill: 0.9,
  });
}

function renderPathology(root) {
  const s = { step: 0 };
  const { viz, ctl, explain } = modelLayout(root, T('pathology.intro'));
  const steps = T('pathology.steps');

  const draw = () => {
    viz.innerHTML = stepView(s.step);
    explain.innerHTML = `<h3>${s.step + 1}. ${steps[s.step].name}</h3><p>${steps[s.step].text}</p>
      <div class="callout"><strong>${T('pathology.beforeBirthTitle')}</strong><p>${T('pathology.beforeBirth')}</p></div>
      <h3>${T('pathology.signsTitle')}</h3><ul>${T('pathology.signs').map((x) => `<li>${x}</li>`).join('')}</ul>`;
  };

  ctl.append(segmented(T('pathology.stepLabel'), steps.map((x, i) => [i, `${i + 1}. ${x.name}`]), 0, (v) => { s.step = v; draw(); }));
  draw();
}

// ---------- 3. Treatment ----------

const swollen = { dilation: 0.75, tort: 0.5, blunt: 0.5, pelvisFill: 1, ureterFill: 1 };
const relieved = { dilation: 0.3, tort: 0.2, blunt: 0.3, pelvisFill: 1, ureterFill: 0.6 };

const BUILD = {
  catheter(viz, ctl) {
    const o = T('treatment.options.catheter');
    const draw = (on) => {
      const side = on ? relieved : swollen;
      viz.innerHTML = urinaryTract({ affected: side, healthy: side, urethraBlock: true, bladderWall: 1, bladderFill: on ? 0.2 : 0.9, catheter: on });
    };
    ctl.append(toggle(o.toggle, false, draw));
    draw(false);
  },

  ablation(viz, ctl) {
    const o = T('treatment.options.ablation');
    const s = { k: 0, voiding: true };
    const draw = () => (viz.innerHTML = urethraSection({ valves: 1, opened: s.k, voiding: s.voiding, text: T('embryology.labels') }));
    let stop = null;
    ctl.append(
      segmented('', [[0, o.before], [1, o.after]], 0, (v) => {
        stop?.();
        const from = s.k;
        stop = animate(900, (e) => { s.k = from + (v - from) * e; draw(); });
      }),
      toggle(o.pee, true, (v) => { s.voiding = v; draw(); }),
    );
    draw();
    return () => stop?.();
  },

  vesicostomy(viz, ctl) {
    const o = T('treatment.options.vesicostomy');
    const draw = (on) => {
      const side = on ? relieved : swollen;
      viz.innerHTML = urinaryTract({
        affected: side, healthy: side, urethraBlock: true, bladderWall: 1, bladderFill: on ? 0.25 : 0.9,
        vesicostomy: on, vesicostomyLabel: o.stomaLabel,
      });
    };
    ctl.append(toggle(o.toggle, false, draw));
    draw(false);
  },

  bladder(viz) {
    viz.innerHTML = urinaryTract({ affected: relieved, healthy: relieved, bladderWall: 0.8, bladderFill: 0.5 });
  },

  kidney(viz, ctl) {
    const o = T('treatment.options.kidney');
    const draw = (on) => {
      const side = { ...relieved, pale: on };
      viz.innerHTML = urinaryTract({ affected: side, healthy: side, bladderWall: 0.8, bladderFill: 0.5 });
    };
    ctl.append(toggle(o.damage, false, draw));
    draw(false);
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
  id: 'puv',
  title: () => T('title'),
  sections: [
    { id: 'embryology', render: renderEmbryology },
    { id: 'pathology', render: renderPathology },
    { id: 'treatment', render: renderTreatment },
    { id: 'takeaways', render: (root) => takeaways(root, { title: T('title'), ...T('takeaways') }) },
  ],
};
