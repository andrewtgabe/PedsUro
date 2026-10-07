// Small shared controls used by chapter models.

// Row of buttons where exactly one is selected. options: [[value, text], ...]
export function segmented(label, options, current, onChange) {
  const wrap = document.createElement('div');
  wrap.className = 'segmented';
  if (label) wrap.innerHTML = `<span class="seg-label">${label}</span>`;
  const group = document.createElement('div');
  group.className = 'seg-group';
  options.forEach(([value, text]) => {
    const b = document.createElement('button');
    b.textContent = text;
    b.setAttribute('aria-pressed', value === current);
    b.addEventListener('click', () => {
      group.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      onChange(value);
    });
    group.append(b);
  });
  wrap.append(group);
  return wrap;
}

export function toggle(label, value, onChange) {
  const l = document.createElement('label');
  l.className = 'toggle';
  l.innerHTML = `<input type="checkbox" ${value ? 'checked' : ''}><span>${label}</span>`;
  l.querySelector('input').addEventListener('change', (e) => onChange(e.target.checked));
  return l;
}

export const list = (items, cls = '') => `<ul class="${cls}">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

// Calls step(k) with k from 0 to 1 over `ms`, eased. Returns a stop function.
export function animate(ms, step) {
  const start = performance.now();
  let id;
  const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
  const frame = (now) => {
    const k = Math.min(1, (now - start) / ms);
    step(ease(k));
    if (k < 1) id = requestAnimationFrame(frame);
  };
  id = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(id);
}

// Standard "Treatment options" layout: pill tabs, a model, and an explanation
// card with benefits / things to consider.
//   text: { intro, pros, cons }
//   options: [{ name, summary, pros, cons, tips?, build(viz, ctl) -> cleanup? }]
export function optionTabs(root, text, options) {
  root.innerHTML = `
    <p class="lead wide">${text.intro}</p>
    <div class="option-tabs" role="tablist"></div>
    <div class="model">
      <div class="viz-col"><div class="viz" data-viz></div><div class="controls row" data-ctl></div></div>
      <aside class="explain" data-explain></aside>
    </div>`;
  const tabs = root.querySelector('.option-tabs');
  let stop = null;

  const show = (i) => {
    stop?.();
    tabs.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-selected', i === j));
    const o = options[i];
    const ctl = root.querySelector('[data-ctl]');
    ctl.innerHTML = '';
    stop = o.build(root.querySelector('[data-viz]'), ctl);
    root.querySelector('[data-explain]').innerHTML = `
      <h3>${o.name}</h3>
      <p>${o.summary}</p>
      ${o.tips ? list(o.tips, 'tips') : ''}
      ${
        o.pros
          ? `<div class="proscons">
        <div><h4>${text.pros}</h4>${list(o.pros, 'pros')}</div>
        <div><h4>${text.cons}</h4>${list(o.cons, 'cons')}</div>
      </div>`
          : ''
      }`;
  };

  options.forEach((o, i) => {
    const b = document.createElement('button');
    b.role = 'tab';
    b.textContent = o.name;
    b.addEventListener('click', () => show(i));
    tabs.append(b);
  });
  show(0);
  return () => stop?.();
}

// Standard "Key points" page.
//   text: { title, points, callTitle, call, planTitle, planHint }
export function takeaways(root, text) {
  root.innerHTML = `
    <div class="takeaways">
      <section class="card"><h3>${text.title}</h3>${list(text.points, 'points')}</section>
      <section class="card warn"><h3>${text.callTitle}</h3>${list(text.call)}</section>
      <section class="card"><h3>${text.planTitle}</h3>
        <textarea rows="5" placeholder="${text.planHint}"></textarea></section>
    </div>`;
}

// Standard model layout: picture + controls on the left, explanation right.
// Returns the elements chapters fill in.
export function modelLayout(root, intro) {
  root.innerHTML = `
    <div class="model">
      <div class="viz-col"><div class="viz" data-viz></div><div class="controls" data-ctl></div></div>
      <aside class="explain"><p class="lead">${intro}</p><div data-explain></div></aside>
    </div>`;
  return {
    viz: root.querySelector('[data-viz]'),
    ctl: root.querySelector('[data-ctl]'),
    explain: root.querySelector('[data-explain]'),
  };
}

// Slider with a live value label. Returns the <label> element.
export function slider(label, { min, max, step = 1, value, ticks, format = (v) => v }, onChange) {
  const l = document.createElement('label');
  l.className = 'slider';
  l.innerHTML = `<span>${label}: <strong>${format(value)}</strong></span>
    <input type="range" min="${min}" max="${max}" step="${step}" value="${value}">
    ${ticks ? `<span class="ticks">${ticks.map((x) => `<span>${x}</span>`).join('')}</span>` : ''}`;
  const out = l.querySelector('strong');
  l.querySelector('input').addEventListener('input', (e) => {
    const v = Number(e.target.value);
    out.textContent = format(v);
    onChange(v);
  });
  return l;
}

export function button(label, onClick, cls = 'btn primary') {
  const b = document.createElement('button');
  b.className = cls;
  b.textContent = label;
  b.addEventListener('click', () => onClick(b));
  return b;
}
