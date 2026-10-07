// Labial adhesions — all wording shown on the labial adhesions chapter.
export default {
  title: 'Labial adhesions',

  labels: {
    outer: 'Outer lips (labia majora)',
    inner: 'Inner lips (labia minora)',
    urethra: 'Pee opening',
    vagina: 'Vagina',
    fused: 'Stuck-together skin',
    pool: 'Urine',
  },

  embryology: {
    intro:
      'Labial adhesions happen when the inner lips of the vulva stick together in the middle. They are common in girls between about 3 months and 6 years old. They are not a birth defect, and they do not cause problems with puberty or having children later.',
    stepLabel: 'How it happens',
    steps: [
      { name: 'Thin skin', fused: 0, text: 'After the newborn months, a girl’s estrogen hormone level is low until puberty. Low estrogen makes the skin of the inner lips thin and delicate.' },
      { name: 'Irritation', fused: 0.15, text: 'Diapers, wetness, soaps, or wiping can irritate this thin skin.' },
      { name: 'Sticking', fused: 0.6, text: 'As the irritated edges heal, they touch and stick together, starting from the bottom and zipping upward.' },
    ],
    note: 'This is not caused by abuse, and it is not something parents did wrong.',
  },

  pathology: {
    intro: 'Many girls have no symptoms, and adhesions are often found at a routine check-up. The skin looks like a thin, smooth line where the inner lips meet.',
    amountLabel: 'How much is stuck',
    pee: 'Peeing',
    small: 'Small adhesions usually cause no problems.',
    large:
      'When most of the opening is covered, urine can get trapped behind the skin and then dribble out after peeing. This can cause dampness, irritation, and sometimes urine infections.',
    signsTitle: 'What families may notice',
    signs: ['Nothing at all (most common)', 'Dribbling or wetness after peeing', 'Redness or soreness', 'Urine infections'],
  },

  treatment: {
    intro:
      'Most labial adhesions need no treatment and separate on their own, often by puberty when estrogen rises. Treatment is used if they cause symptoms.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Watching',
        summary: 'If there are no symptoms, we simply watch. Keep the area clean and dry, and avoid bubble baths and harsh soaps.',
        pros: ['No treatment needed', 'Most separate on their own'],
        cons: ['Can take years', 'May get bigger'],
      },
      estrogen: {
        name: 'Estrogen cream',
        summary:
          'A small amount of estrogen cream is put on the thin line once or twice a day for a few weeks, with gentle pressure. It thickens the skin so the lips separate.',
        control: 'Weeks of cream',
        weeks: 'weeks',
        pros: ['Works for most girls', 'No procedure'],
        cons: ['Temporary breast budding or darker skin there, which goes away after stopping', 'Can come back'],
      },
      separation: {
        name: 'Gentle separation',
        summary:
          'If cream does not work or urine is trapped, the lips can be gently separated. This is usually done with sedation or anesthesia so it does not hurt, because separating them while awake is painful and they often stick again.',
        before: 'Before',
        after: 'After',
        pros: ['Works right away'],
        cons: ['Usually needs sedation or anesthesia', 'Can come back without aftercare'],
      },
      aftercare: {
        name: 'Preventing it again',
        summary: 'Adhesions often come back until puberty. A barrier ointment keeps the healing edges from sticking.',
        tips: [
          'Put petroleum jelly on the area every day for several weeks after separation',
          'Gentle washing with water; avoid bubble baths and scented soaps',
          'Wipe front to back and change wet diapers or underwear promptly',
        ],
        pros: ['Lowers the chance it comes back'],
        cons: ['Daily care'],
      },
    },
  },

  takeaways: {
    points: [
      'Labial adhesions are when the inner lips stick together. They are common in young girls.',
      'They happen because of low estrogen and irritation, not from anything parents did.',
      'Most separate on their own and need no treatment.',
      'Estrogen cream helps if there are symptoms. Petroleum jelly helps prevent them coming back.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever, or pain or burning when peeing', 'Trouble peeing or only dribbling', 'Redness, swelling or discharge'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
