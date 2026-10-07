// UVJ obstruction / megaureter — all wording shown on the UVJ chapter.
export default {
  title: 'UVJ obstruction (megaureter)',

  embryology: {
    intro:
      'The UVJ (ureterovesical junction) is where the ureter joins the bladder. In a UVJ obstruction, the last bit of the ureter does not form its muscle normally. The ureter above it gets very wide. A very wide ureter is called a megaureter.',
    modeLabel: 'Bottom of the ureter',
    modes: { normal: 'Typical', block: 'Stiff piece' },
    texts: {
      normal: 'The ureter pushes urine down to the bladder in waves, like squeezing toothpaste.',
      block: 'The stiff piece at the bottom cannot squeeze. Urine passes slowly, so it backs up. Over time the whole ureter stretches wide.',
    },
    strip: { stiff: 'Stiff piece', kidney: 'Kidney', bladder: 'To bladder' },
    note:
      'Not every wide ureter is blocked. Some are wide because of reflux, and some are wide but drain fine. Tests help tell these apart.',
  },

  pathology: {
    intro:
      'Because the narrow spot is at the bottom, urine backs up all the way: the ureter and the kidney’s collecting area both swell.',
    severityLabel: 'Width of the ureter',
    severity: ['Mild', 'Moderate', 'Severe'],
    severityText: [
      'Mild: the ureter is a little wider than usual.',
      'Moderate: the ureter is clearly wide and the kidney is swollen.',
      'Severe: the ureter is very wide and twisty, and the kidney tissue may get thinner.',
    ],
    infection: 'Urine infection',
    infectionText:
      'Urine that sits in a wide ureter is easier for bacteria to grow in. This is the most common problem with megaureter, especially in babies.',
    symptomsTitle: 'What families may notice',
    symptoms: [
      'Usually nothing. Most are found on an ultrasound before birth.',
      'Urine infections with fever',
      'Belly or side pain',
      'Blood in the urine or kidney stones (less common)',
    ],
  },

  treatment: {
    intro:
      'Most megaureters get better on their own in the first few years, so most babies are watched while taking a preventive antibiotic. Surgery is used when the kidney is at risk, swelling gets worse, or infections keep happening. The type of surgery depends mostly on the child’s age and bladder size.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Watchful waiting',
        summary:
          'As children grow, many wide ureters slowly get narrower and drain better. We check with ultrasounds and sometimes a kidney drainage scan.',
        control: 'Age',
        years: 'years',
        pros: ['No surgery', 'Most get better on their own'],
        cons: ['Repeat ultrasounds and scans', 'Infections can still happen'],
      },
      antibiotic: {
        name: 'Preventive antibiotic',
        summary:
          'Babies with a megaureter often take a small daily dose of antibiotic. It helps prevent infections while we watch.',
        bacteria: 'Bacteria get into the urine',
        dose: 'Daily low-dose antibiotic',
        pros: ['Lowers the chance of a kidney infection'],
        cons: ['A medicine every day', 'Bacteria can become resistant'],
      },
      balloon: {
        name: 'Balloon and stent',
        summary:
          'Using a small camera passed through the urethra, the surgeon stretches the narrow spot with a balloon and leaves a stent (soft tube) for a few weeks. No cut on the skin. This is not done often, and not every center offers it.',
        before: 'Before',
        after: 'After balloon',
        pros: ['No cut on the skin', 'Can avoid or delay bigger surgery'],
        cons: ['General anesthesia', 'A second procedure to remove the stent', 'Does not work for everyone', 'Not widely used'],
      },
      ureterostomy: {
        name: 'Temporary ureterostomy',
        summary:
          'For a baby who keeps getting kidney infections even on antibiotics, the wide ureter can be brought out through a small opening on the lower belly. Urine drains straight into the diaper, so it cannot back up. When the child is older and the bladder is bigger, the ureter is reimplanted and the opening is closed.',
        before: 'Before',
        after: 'With ureterostomy',
        pros: ['Drains the kidney well', 'Stops repeat infections', 'Lets the ureter shrink before reimplant'],
        cons: ['Two surgeries (now and later)', 'Care of the opening in the diaper area'],
      },
      reimplant: {
        name: 'Reimplant with tapering',
        summary:
          'The surgeon removes the narrow piece, trims the wide ureter to a more normal size, and attaches it back to the bladder through a new tunnel. A stent is often left in for a short time. This is usually done once the child is at least about 1 year old and the bladder is big enough, either as the first surgery or after a ureterostomy.',
        before: 'Before surgery',
        after: 'After surgery',
        pros: ['Fixes the blockage for good', 'Works very well'],
        cons: ['Surgery with general anesthesia', 'A few days in the hospital', 'Best after about 1 year of age, when the bladder is big enough'],
      },
    },
  },

  takeaways: {
    points: [
      'A UVJ obstruction is a narrow spot where the ureter enters the bladder.',
      'The ureter above it gets wide (megaureter), and the kidney can swell.',
      'Most get better on their own in the first few years.',
      'The main risk is urine infections, so some babies take a preventive antibiotic.',
      'Surgery is used for some children and works well.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'In babies: fever, fussiness, poor feeding or vomiting',
      'Belly, side or back pain, or blood in the urine',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
