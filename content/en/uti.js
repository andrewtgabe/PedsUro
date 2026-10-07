// Urinary tract infection (UTI) — all wording shown on the UTI chapter.
export default {
  title: 'Urinary tract infection (UTI)',

  embryology: {
    intro:
      'Urine is normally free of germs. A UTI happens when bacteria, usually from the skin or stool around the bottom, get into the urethra and climb up.',
    stepLabel: 'How it spreads',
    steps: [
      { name: 'Outside', text: 'Bacteria from stool live on the skin near the urethra opening. Girls have a shorter urethra, so bacteria reach the bladder more easily.' },
      { name: 'Bladder', text: 'If bacteria get into the bladder and grow, they cause a bladder infection (cystitis). Peeing often and completely helps wash them out.' },
      { name: 'Kidney', text: 'If bacteria travel up the ureters to a kidney, they cause a kidney infection (pyelonephritis). This usually causes a fever and is more serious.' },
    ],
    riskTitle: 'Things that make UTIs more likely',
    risks: [
      'Holding urine or not emptying the bladder fully',
      'Constipation',
      'Wiping back to front',
      'Urine flowing backward (reflux) or a blockage',
      'Baby boys who are not circumcised (in the first year)',
    ],
  },

  pathology: {
    intro: 'Signs of a UTI depend on where the infection is and how old the child is.',
    typeLabel: 'Where is the infection?',
    types: {
      bladder: {
        name: 'Bladder (cystitis)',
        text: 'The bladder lining gets irritated.',
        signs: ['Burning or pain when peeing', 'Peeing often, or feeling a strong urge to go', 'New daytime or nighttime accidents', 'Cloudy or smelly urine, sometimes blood', 'Usually no fever, or only a low one'],
      },
      kidney: {
        name: 'Kidney (pyelonephritis)',
        text: 'The kidney gets inflamed. Repeated kidney infections can leave scars.',
        signs: ['Fever of 101°F (38.3°C) or higher', 'Pain in the side or back', 'Vomiting, feeling very sick', 'Babies: fever, fussiness, poor feeding — sometimes the only signs'],
      },
    },
    babyNote: 'In babies and toddlers, fever may be the only sign. Testing the urine is the only way to know.',
  },

  treatment: {
    intro: 'UTIs are treated with antibiotics. A urine test confirms the infection and tells us which antibiotic will work.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      testing: {
        name: 'Testing the urine',
        summary:
          'The sample must be clean so skin germs do not give a false result. In babies, a thin tube (catheter) is passed into the bladder for a few seconds. Older children can pee into a cup after cleaning (clean catch). A culture takes 1 to 2 days and shows which bacteria and which antibiotics work.',
        pros: ['Confirms the infection', 'Picks the right antibiotic'],
        cons: ['A catheter is uncomfortable for a moment', 'Bag samples on babies are often contaminated'],
      },
      antibiotics: {
        name: 'Antibiotics',
        summary:
          'Most children take antibiotics by mouth for about 7 to 14 days for a kidney infection, and fewer days for a bladder infection. Very young babies or very sick children may need them through an IV at first.',
        control: 'Days of antibiotics',
        days: 'days',
        pros: ['Clears the infection', 'Fever usually gets better in 1 to 2 days'],
        cons: ['Finish the whole course, even if better', 'Can upset the stomach'],
      },
      imaging: {
        name: 'Kidney checks',
        summary:
          'After a first kidney infection, many young children get a kidney ultrasound. Some, such as those with an abnormal ultrasound or repeat infections, also get a VCUG to look for reflux.',
        link: 'Learn about reflux',
        pros: ['Finds problems that make infections more likely'],
        cons: ['A VCUG needs a catheter and a small amount of X-ray'],
      },
      prevention: {
        name: 'Preventing UTIs',
        summary: 'Good bladder and bowel habits are the best way to prevent UTIs.',
        tips: [
          'Pee every 2–3 hours while awake; do not hold it',
          'Relax fully when peeing; girls can sit with knees apart, feet supported',
          'Treat constipation: soft, daily bowel movements',
          'Drink water through the day',
          'Wipe front to back',
          'Avoid bubble baths',
        ],
        pros: ['Works for most children', 'No medicine'],
        cons: ['Takes daily routine'],
      },
    },
  },

  takeaways: {
    points: [
      'A UTI is an infection in the bladder or kidney, usually from bacteria near the bottom.',
      'Kidney infections usually cause fever and are more serious.',
      'A clean urine sample confirms a UTI.',
      'Antibiotics treat it. Finish the whole course.',
      'Good peeing and pooping habits help prevent UTIs.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'Fever that lasts more than 2 days on antibiotics',
      'Vomiting and unable to keep down medicine or fluids',
      'Babies: fever, fussiness, poor feeding',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
