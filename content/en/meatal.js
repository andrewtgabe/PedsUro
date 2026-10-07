// Meatal stenosis — all wording shown on the meatal stenosis chapter.
export default {
  title: 'Meatal stenosis',

  labels: {
    glans: 'Head (glans)',
    foreskin: 'Foreskin',
    opening: 'Opening',
    shaft: 'Shaft',
    tight: 'Too tight',
    trapped: 'Trapped',
  },

  embryology: {
    intro:
      'The meatus is the opening at the tip of the penis where urine comes out. Meatal stenosis means this opening has become too narrow. It happens almost only in boys who are circumcised.',
    timeLabel: 'Time in diapers after circumcision',
    times: [
      { name: 'Newborn', meatus: 0, sore: false, text: 'Without a foreskin, the tip of the penis is no longer covered.' },
      { name: 'Months', meatus: 0.35, sore: true, text: 'The uncovered tip rubs against wet diapers. It can get red and irritated over and over.' },
      { name: 'Years', meatus: 0.85, sore: false, text: 'As the irritation heals, a thin scar can form across the opening, making it smaller. It is usually noticed after potty training.' },
    ],
    note: 'Meatal stenosis is not caused by anything parents did wrong. It is a common, minor problem that is easy to fix.',
  },

  pathology: {
    intro: 'A narrow opening changes how urine comes out, like putting your thumb over the end of a garden hose.',
    modeLabel: 'Opening',
    modes: { normal: 'Normal', narrow: 'Narrow' },
    pee: 'Peeing',
    texts: {
      normal: 'A normal opening makes a steady stream that goes straight forward.',
      narrow: 'A narrow opening makes a thin, fast stream that often shoots upward or sprays. It may take longer to pee.',
    },
    signsTitle: 'What families may notice',
    signs: [
      'The stream shoots up or sprays, making it hard to aim (boys may pee over the toilet seat)',
      'Taking a long time to pee, or straining',
      'Burning or pain when peeing',
      'A few drops of blood at the tip, or in the underwear',
      'Rarely, daytime wetting or urine infections',
    ],
  },

  treatment: {
    intro: 'Meatal stenosis does not get better on its own. If it is causing problems, a short procedure called a meatotomy fixes it.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      meatotomy: {
        name: 'Meatotomy',
        summary:
          'The doctor makes a tiny cut on the underside of the opening to widen it, sometimes with a stitch or two. It can be done with numbing cream in the office, or with short general anesthesia.',
        before: 'Before',
        after: 'After',
        pee: 'Peeing',
        pros: ['Quick: just a few minutes', 'Straightens the stream right away', 'Works very well'],
        cons: ['Stings for a few days when peeing', 'Can narrow again if aftercare is skipped'],
      },
      aftercare: {
        name: 'Aftercare',
        summary: 'For the first few weeks, keeping the new opening from sticking shut helps it heal wide.',
        tips: [
          'Put ointment (like petroleum jelly) on the tip several times a day',
          'If shown how, gently spread the opening once or twice a day for a few weeks',
          'Soaking in a warm bath can ease stinging',
        ],
        pros: ['Helps prevent the opening from narrowing again'],
        cons: ['A few weeks of daily care'],
      },
    },
  },

  takeaways: {
    points: [
      'Meatal stenosis is a narrow opening at the tip of the penis.',
      'It happens mostly in circumcised boys, from irritation in diapers.',
      'It often causes a thin, upward or spraying stream.',
      'A quick procedure (meatotomy) widens the opening.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever with pain when peeing', 'Not able to pee, or only dribbles', 'Bleeding that does not stop after a meatotomy'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
