// Bowel and bladder dysfunction (BBD) — all wording shown on the BBD chapter.
export default {
  title: 'Bowel & bladder dysfunction (BBD)',

  labels: {
    bladder: 'Bladder',
    rectum: 'Rectum (end of bowel)',
    poop: 'Poop',
    front: 'Front',
    back: 'Back',
    pressing: 'Pressing on bladder',
    goal: 'Goal',
  },

  embryology: {
    intro:
      'The bladder and the end of the bowel (the rectum) are next-door neighbors in the pelvis. They share the same nerves and the same muscles for holding and letting go. When one is not working well, the other is often affected too. This is called bowel and bladder dysfunction (BBD).',
    stepLabel: 'How it builds up',
    steps: [
      { name: 'Normal', text: 'The rectum fills, the child feels the urge, and poops easily. The bladder has plenty of room.' },
      { name: 'Holding', text: 'A hard or painful poop, or being busy, makes the child hold it in. Holding feels easier than going.' },
      { name: 'Stretched', text: 'Poop that stays in the rectum dries out and gets harder and bigger. The rectum stretches and presses on the back of the bladder. Going to the bathroom hurts more, so the child holds more.' },
      { name: 'Overflow', text: 'A very stretched rectum loses its feeling. Soft poop can leak around the hard poop without the child noticing (soiling). This is not on purpose.' },
    ],
  },

  pathology: {
    intro:
      'A full, stretched rectum squeezes the bladder and irritates its nerves. The bladder then holds less and squeezes too early. Many children with BBD are constipated even if they poop every day.',
    fullLabel: 'How full is the bowel?',
    full: ['Empty', 'Some', 'Full', 'Very full'],
    hard: 'Hard, dry poop',
    texts: [
      'The bladder has room to fill and empty normally.',
      'A little poop in the rectum. Usually no problem.',
      'The full rectum presses on the bladder. The child may feel sudden urges and rush to the bathroom.',
      'The bladder is squeezed and irritated: accidents, urges, and urine infections are more likely. Poop may leak too.',
    ],
    signsTitle: 'Signs of bowel and bladder dysfunction',
    signs: [
      'Fewer than 3 poops a week, or hard, painful, or very large poops',
      'Poop stains in the underwear, or poop accidents',
      'Holding poop: hiding, crossing legs, stiffening when the urge comes',
      'Sudden urges to pee, daytime accidents, or bedwetting',
      'Urine infections',
      'Belly pain that comes and goes',
    ],
    link: 'Learn more about daytime wetting',
  },

  treatment: {
    intro:
      'Treating the bowel is the first step, and it often fixes the bladder problems too. It takes time: most children need a daily plan for several months.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      cleanout: {
        name: 'Clean-out',
        summary: 'If the bowel is very full, a few days of higher-dose stool softener (or sometimes enemas) empties it first. It is best done at home on a weekend or school break.',
        control: 'Days of clean-out',
        days: 'days',
        pros: ['Empties the hard, stuck poop', 'Lets the rectum start to shrink back'],
        cons: ['Lots of bathroom trips for a few days', 'Can cause cramping'],
      },
      maintenance: {
        name: 'Daily stool softener',
        summary: 'A daily stool softener (such as polyethylene glycol, mixed in a drink) keeps poop soft so it does not hurt. The dose is adjusted until poops are soft every day. It is usually continued for several months while the rectum shrinks back to normal size.',
        pros: ['Safe for long-term use', 'Breaks the holding cycle'],
        cons: ['Needs months of daily use', 'Stopping too early lets it come back'],
      },
      routine: {
        name: 'Toilet routine',
        summary: 'Sitting on the toilet at the same times each day helps the body relearn the urge to go.',
        tips: [
          'Sit for 5–10 minutes about 15–30 minutes after meals',
          'Use a footstool so knees are higher than hips',
          'Lean forward, relax, and blow bubbles or a pinwheel to help push',
          'Pee every 2–3 hours while awake',
          'Use a sticker chart to praise sitting, not just results',
        ],
        pros: ['Uses the body’s natural urge after meals', 'Builds a lasting habit'],
        cons: ['Needs daily reminders'],
      },
      goal: {
        name: 'Goal: soft poops',
        summary: 'The Bristol stool chart helps you and your child describe poop. The goal is type 4: soft, smooth, and easy to pass. Types 1 and 2 mean constipation.',
        typeLabel: 'Poop type',
        types: [
          'Type 1: separate hard lumps, like nuts. Hard to pass.',
          'Type 2: lumpy and sausage-shaped. Constipated.',
          'Type 3: sausage-shaped with cracks. Close to the goal.',
          'Type 4: smooth and soft, like a snake. The goal!',
          'Type 5: soft blobs with clear edges. Fine, may be a bit loose.',
          'Type 6: mushy, fluffy pieces. Too loose: the softener dose may be too high.',
          'Type 7: watery. Too loose.',
        ],
        tips: ['Drink water through the day', 'Eat fruits, vegetables, and whole grains', 'Limit milk to about 2 cups a day', 'Be active every day'],
        pros: ['Easy way to track progress at home'],
        cons: ['Needs daily checking at first'],
      },
    },
  },

  takeaways: {
    points: [
      'The bladder and bowel are neighbors and affect each other.',
      'A full, stretched rectum presses on the bladder and can cause urges, accidents, and urine infections.',
      'Holding poop leads to harder poop, more pain, and more holding.',
      'Treatment starts with emptying the bowel, then a daily softener and toilet routine for several months.',
      'Soiling and accidents are not on purpose. Praise effort and never punish.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Belly swelling, vomiting, or severe belly pain',
      'Blood in the poop',
      'Fever, or pain when peeing',
      'Back pain, leg weakness, or new trouble controlling pee or poop',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
