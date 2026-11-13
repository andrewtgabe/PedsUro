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
      'In a UVJ obstruction, there is a narrow spot where the ureter joins the bladder. Because the narrow spot is at the bottom, urine backs up all the way: the ureter and the kidney’s collecting area both swell. Megaureter is the second most common cause of kidney swelling found before birth, after UPJ obstruction. It is more common in boys and on the left side, and about 1 in 4 children have it on both sides.',
    typeLabel: 'Type of megaureter',
    types: { blocked: 'Blocked', reflux: 'Refluxing', wide: 'Wide, not blocked' },
    typeText: {
      blocked: 'Blocked: a narrow, stiff piece at the bottom slows urine going into the bladder, so it backs up.',
      reflux: 'Refluxing: the valve where the ureter joins the bladder does not close well, so urine flows back up from the bladder. This is treated like vesicoureteral reflux (VUR).',
      wide: 'Wide but not blocked: the ureter is wide, but urine still drains into the bladder. This is common in babies and often gets better on its own.',
    },
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
          'As children grow, many wide ureters slowly get narrower and drain better. About 70% get better without surgery. We check with ultrasounds and sometimes a kidney drainage scan.',
        control: 'Age',
        years: 'years',
        pros: ['No surgery', 'Most get better on their own'],
        cons: ['Repeat ultrasounds and scans', 'Infections can still happen'],
      },
      ultrasound: {
        name: 'Kidney ultrasound',
        summary:
          'Ultrasound uses sound waves to measure how wide the ureter is and how swollen the kidney is. It does not hurt and uses no radiation. It is repeated over time to see if the ureter is getting narrower.',
        probe: 'Ultrasound',
        pros: ['Painless, no needles, no radiation', 'Good for follow-up visits'],
        cons: ['Does not show reflux or how well the kidney drains'],
      },
      vcug: {
        summary:
          'A VCUG checks whether the wide ureter is caused by urine flowing backward from the bladder (reflux). A thin tube puts dye into the bladder, and X-ray pictures are taken while the child pees. If reflux is seen, it is treated like VUR. We usually have your child take a preventive antibiotic before the test to help prevent a kidney infection.',
      },
      scan: {
        summary:
          'A renal scan (often called a MAG3 scan) shows how well each kidney works and whether urine is truly blocked at the bottom of the ureter. Tracer goes in through an IV, and Lasix is given partway through to make more urine.',
        steps: [
          'An IV is placed in the arm or hand, and extra fluid is given.',
          'A thin, soft tube (catheter) keeps the bladder empty, unless your child is older and toilet trained.',
          'A tiny amount of tracer goes in through the IV. A special camera takes pictures every few seconds as the kidneys pick it up.',
          'The computer measures each kidney’s share of the work. In this example, the kidney with the megaureter does 45% and the other kidney does 55%.',
          'The tracer drains out of the healthy kidney. With a blocked megaureter, it stays in the kidney and the wide ureter.',
          'Lasix is given through the IV. If the tracer still stays, the megaureter is blocked. This makes the flat “blocked” curve below.',
        ],
      },
      antibiotic: {
        name: 'Preventive antibiotic',
        summary:
          'Babies with a megaureter often take a small daily dose of antibiotic. It helps prevent infections while we watch.',
        pros: ['Lowers the chance of a kidney infection'],
        cons: ['A medicine every day', 'Bacteria can become resistant'],
      },
      balloon: {
        name: 'Balloon and stent',
        summary:
          'Using a small camera passed through the urethra, the surgeon stretches the narrow spot with a balloon and leaves a stent (soft tube) for a few weeks. No cut on the skin. This is not done often, and not every center offers it.',
        steps: [
          'The narrow spot is at the bottom of the wide ureter, where it enters the bladder.',
          'With your child asleep, a small camera is passed through the urethra into the bladder, and a thin wire is guided up through the narrow spot.',
          'A small balloon is slid over the wire and filled for a few minutes to stretch the narrow spot open.',
          'A stent (soft, thin tube) is left in the ureter for a few weeks to hold it open while it heals.',
          'The stent is taken out in a second short procedure. Urine drains more easily and the ureter slowly gets narrower.',
        ],
        pros: ['No cut on the skin', 'Can avoid or delay bigger surgery'],
        cons: ['General anesthesia', 'A second procedure to remove the stent', 'Does not work for everyone', 'Not widely used'],
      },
      ureterostomy: {
        name: 'Temporary ureterostomy',
        summary:
          'For a baby who keeps getting kidney infections even on antibiotics, the wide ureter can be brought out through a small opening on the lower belly. Urine drains straight into the diaper, so it cannot back up. When the child is older and the bladder is bigger, the ureter is reimplanted and the opening is closed.',
        steps: [
          'Even on a daily antibiotic, urine sits in the wide ureter and kidney infections keep happening.',
          'With your baby asleep, a small cut is made on the lower belly. The ureter is cut free from the bladder and its end is brought out to the skin as a small opening.',
          'Urine drains straight into the diaper, so it cannot back up. Infections stop and the ureter and kidney slowly shrink.',
          'When your child is older and the bladder is bigger, the ureter is reimplanted into the bladder through a new tunnel and the opening is closed.',
        ],
        pros: ['Drains the kidney well', 'Stops repeat infections', 'Lets the ureter shrink before reimplant'],
        cons: ['Two surgeries (now and later)', 'Care of the opening in the diaper area'],
      },
      reimplant: {
        name: 'Reimplant with tapering',
        summary:
          'The surgeon removes the narrow piece, trims the wide ureter to a more normal size, and attaches it back to the bladder through a new tunnel. A stent is often left in for a short time. This is usually done once the child is at least about 1 year old and the bladder is big enough, either as the first surgery or after a ureterostomy. Surgery is usually advised for:',
        steps: [
          'The narrow piece is at the bottom of the wide ureter, where it enters the bladder.',
          'With your child asleep, the ureter is cut free from the bladder and the narrow piece is removed.',
          'The wide ureter is trimmed (tapered) to a more normal size so it can fit in a tunnel and drain well.',
          'The ureter is attached back to the bladder through a new tunnel in the bladder wall (green), which also helps prevent reflux. A stent is often left in for a short time.',
          'After healing, urine drains easily into the bladder and the ureter and kidney swelling go down.',
        ],
        tips: [
          'Kidney infections even on a preventive antibiotic',
          'A kidney doing less than about 40% of the work, or losing function on repeat scans',
          'Swelling that keeps getting worse',
          'Pain or kidney stones',
        ],
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
