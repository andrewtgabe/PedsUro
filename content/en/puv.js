// Posterior urethral valves (PUV) — all wording shown on the PUV chapter.
export default {
  title: 'Posterior urethral valves (PUV)',

  embryology: {
    intro:
      'The urethra is the tube that carries urine from the bladder out of the body. In boys with PUV, extra flaps of tissue (valves) form inside the urethra early in pregnancy. They act like a one-way gate that partly blocks urine from leaving the bladder.',
    modeLabel: 'Urethra',
    modes: { typical: 'Typical', valves: 'With valves' },
    pee: 'Peeing',
    texts: {
      typical: 'Urine flows freely out of the bladder and through the urethra in a strong stream.',
      valves: 'The valve flaps catch urine like sails catching wind. The urethra above them balloons out, and only a weak stream gets through.',
    },
    labels: { bladder: 'Bladder', neck: 'Bladder neck', valves: 'Valves', urethra: 'Urethra', tip: 'Tip of penis' },
    note: 'PUV only happens in boys. It is not caused by anything the parents did during pregnancy.',
  },

  pathology: {
    intro:
      'Because urine cannot leave easily, pressure builds up behind the valves. Over time this affects the bladder and then the kidneys. Step through what happens.',
    stepLabel: 'Step',
    steps: [
      { name: 'Blockage', text: 'The valves partly block the urethra. The bladder has to squeeze very hard to push urine out.' },
      { name: 'Bladder', text: 'The bladder muscle gets thick and stiff from working so hard, like a muscle at the gym. A thick bladder holds less and does not empty well.' },
      { name: 'Kidneys', text: 'High pressure in the bladder backs urine up the ureters into both kidneys, so both swell. Some boys also have reflux.' },
      { name: 'Kidney health', text: 'Pressure on the kidneys, sometimes starting before birth, can keep them from growing and working normally. How much depends on each child.' },
    ],
    beforeBirthTitle: 'Before birth',
    beforeBirth:
      'A baby’s urine makes most of the fluid around the baby. If little urine gets out, the fluid can be low. Low fluid can affect how the baby’s lungs grow. Ultrasound may show a large bladder and swollen kidneys.',
    signsTitle: 'What families may notice after birth',
    signs: ['A weak or dribbling urine stream', 'Urine infections with fever', 'Straining to pee', 'Later on: daytime wetting or bedwetting'],
  },

  treatment: {
    intro:
      'Treatment starts soon after birth. First we drain the bladder, then we open the valves. Because the bladder and kidneys can stay affected, boys with PUV need check-ups for life.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      catheter: {
        name: 'Catheter at birth',
        summary:
          'A thin, soft tube (catheter) is placed through the urethra into the bladder. It drains urine right away and lowers pressure on the kidneys while the baby is checked.',
        toggle: 'Catheter in place',
        pros: ['Relieves pressure right away', 'No surgery'],
        cons: ['Only a short-term fix', 'Baby usually stays in the hospital'],
      },
      ablation: {
        name: 'Valve ablation',
        summary:
          'The main treatment. A tiny camera is passed through the urethra and the surgeon cuts the valve flaps so urine can flow freely. There is no cut on the skin.',
        before: 'Before',
        after: 'After ablation',
        pee: 'Peeing',
        pros: ['Removes the blockage', 'No cut on the skin', 'Usually done in the first weeks of life'],
        cons: ['General anesthesia', 'Sometimes needs a second look later', 'Bladder and kidneys still need follow-up'],
      },
      vesicostomy: {
        name: 'Vesicostomy',
        summary:
          'For babies too small for the camera, or if the kidneys need more help, the bladder can be opened to the skin just below the belly button. Urine drains into the diaper. It is closed later.',
        toggle: 'Vesicostomy',
        stomaLabel: 'Opening on belly',
        pros: ['Drains the bladder well', 'Protects the kidneys in very small babies'],
        cons: ['Surgery now and again later to close it', 'Care of the opening'],
      },
      bladder: {
        name: 'Lifelong bladder care',
        summary:
          'Even after the valves are opened, the bladder may stay thick and not empty fully. Taking care of the bladder protects the kidneys.',
        tips: [
          'Pee on a schedule, and pee twice each time (double voiding)',
          'Treat constipation',
          'Medicines to relax the bladder, if needed',
          'Some boys need a catheter to empty the bladder, a few times a day or at night',
        ],
        pros: ['Protects kidney function', 'Helps with wetting'],
        cons: ['Daily routine', 'Regular check-ups and tests'],
      },
      kidney: {
        name: 'Kidney care',
        summary:
          'A kidney doctor (nephrologist) checks blood pressure, blood tests and growth over time. Some boys’ kidneys work less well as they grow. About 1 in 5 or more will eventually need dialysis or a kidney transplant, so regular kidney checks matter.',
        damage: 'Kidneys affected',
        pros: ['Finds problems early', 'Treatments help kidneys last longer'],
        cons: ['Lifelong follow-up'],
      },
    },
  },

  takeaways: {
    points: [
      'PUV is extra tissue in a boy’s urethra that blocks urine from leaving the bladder.',
      'It can affect the bladder and both kidneys, sometimes before birth.',
      'The valves are opened with a tiny camera, usually soon after birth.',
      'The bladder and kidneys need check-ups for life.',
      'Good bladder habits help protect the kidneys.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'A weak stream, straining, or not peeing for many hours',
      'Vomiting, poor feeding, or not acting like himself',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
