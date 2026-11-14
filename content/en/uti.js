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
    intro: 'Signs of a UTI depend on where the infection is and how old the child is. About 8 in 100 girls and 2 in 100 boys have a UTI by age 7. In babies with a fever, about 7 in 100 have a UTI.',
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
          'The sample must be clean so skin germs do not give a false result. A quick urinalysis (dipstick and microscope) gives a first look in minutes. A culture takes 1 to 2 days and shows which bacteria are there and which antibiotics work.',
        methodLabel: 'How the urine is collected',
        methods: { catheter: 'Catheter', cup: 'Clean catch', bag: 'Urine bag' },
        cupLabel: 'Clean cup',
        bagLabel: 'Sticky bag',
        notes: {
          catheter: 'For babies and children who are not toilet trained, a thin tube (catheter) is passed into the bladder for a few seconds. This gives the cleanest sample.',
          cup: 'Toilet-trained children clean the area, start peeing into the toilet, then catch the middle of the stream in a clean cup.',
          bag: 'A sticky bag over the genitals can be used for a quick screen. Bags are often contaminated by skin germs, so a positive result needs a catheter sample to confirm it.',
        },
        pros: ['Confirms the infection', 'Picks the right antibiotic'],
        cons: ['A catheter is uncomfortable for a moment', 'Bag samples are often contaminated'],
      },
      antibiotics: {
        name: 'Antibiotics',
        summary:
          'A kidney infection with fever is usually treated for 7 to 10 days. An uncomplicated bladder infection needs a shorter course, about 3 to 5 days.',
        ivLabel: 'IV antibiotic',
        cultureLabel: 'Urine culture',
        oralLabel: 'Antibiotic by mouth',
        steps: [
          'A urine sample is taken for a culture before antibiotics start.',
          'A broad antibiotic that works against most bacteria is started right away, typically through an IV.',
          'The culture results usually come back in about 48 hours. They show which antibiotic works best, and the antibiotic is tailored to match.',
          'If there is an antibiotic by mouth that works, your child is switched to it as soon as the culture results are back.',
          'Children often stay in the hospital until they have had no fever for at least 24 hours and are taking the matched antibiotic by mouth. They finish the full course at home.',
        ],
        pros: ['Clears the infection', 'Fever usually gets better in 1 to 2 days'],
        cons: ['Finish the whole course, even if better', 'Can upset the stomach'],
      },
      imaging: {
        name: 'Kidney imaging',
        summary:
          'After a first UTI with fever, children under 5 years get a kidney and bladder ultrasound to look for problems in how the kidneys and bladder formed. A VCUG is not needed after a first UTI with fever if the ultrasound is normal. A VCUG is offered if the ultrasound is abnormal, or after a second UTI with fever. A DMSA scan can check for kidney scars.',
        testLabel: 'Test',
        tests: { us: 'Ultrasound', vcug: 'VCUG', dmsa: 'DMSA scan' },
        probe: 'Ultrasound',
        link: 'Learn about reflux',
        pros: ['Finds problems that make infections more likely'],
        cons: ['A VCUG needs a catheter and a small amount of X-ray'],
      },
      antibioticPrev: {
        name: 'Preventive antibiotic',
        summary:
          'A small daily dose of antibiotic can help prevent kidney infections in some children with reflux. It is not routinely needed for mild reflux (grade I or II) without bladder or bowel problems. It is an option for higher-risk children, such as those with grade IV or V reflux, kidney scars, or repeat kidney infections. We decide together with your family.',
        link: 'Learn about reflux',
        pros: ['Lowers the chance of a kidney infection in higher-risk children'],
        cons: ['A medicine every day', 'Bacteria can become resistant'],
      },
      prevention: {
        name: 'Preventing UTIs',
        summary: 'Good bladder and bowel habits are the best way to prevent UTIs.',
        habits: [
          'Pee every 2–3 hours while awake; do not hold it',
          'Relax fully when peeing; girls can sit with knees apart, feet supported',
          'Treat constipation: soft, daily bowel movements',
          'Drink water through the day',
          'Wipe front to back',
          'Avoid bubble baths',
          'For boys with reflux or repeat infections, circumcision lowers the chance of UTIs',
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
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher, or fussiness and poor feeding',
      'Fever that lasts more than 2 days on antibiotics',
      'Vomiting and unable to keep down medicine or fluids',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
