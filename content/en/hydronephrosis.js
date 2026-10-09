// Hydronephrosis — all wording shown on the hydronephrosis chapter.
export default {
  title: 'Hydronephrosis',

  embryology: {
    intro:
      'Hydronephrosis means the part of the kidney that collects urine is stretched wider than usual. It is one of the most common things seen on ultrasounds during pregnancy.',
    weekLabel: 'Week of pregnancy',
    stages: [
      { name: 'Week 6', title: 'The kidneys begin', text: 'The kidneys start out small and low, down near the bladder.' },
      { name: 'Week 10', title: 'Urine starts', text: 'The kidneys move up into the back and start making urine. The urine flows down to the bladder, and the baby pees it out.' },
      { name: 'Week 20', title: 'The ultrasound check', text: 'Most of the fluid around the baby is now the baby’s urine. A routine ultrasound can see the kidneys and any extra fluid inside them.' },
      { name: 'Birth', title: 'After birth', text: 'Babies with swelling seen before birth get an ultrasound after birth to check again.' },
    ],
    extra: 'Extra fluid seen in the kidney',
    modes: { growth: 'How the kidneys grow', transient: 'Temporary (physiologic) swelling' },
    transient: {
      title: 'Temporary (physiologic) hydronephrosis',
      text: 'This is the most common cause of hydronephrosis. Nothing is truly blocked. The drainage system is still growing up: a spot that is a little narrow, or a normal variation in shape, slows urine for a while. As the kidneys and ureters mature, urine drains more easily and the swelling usually goes away with time.',
      steps: [
        { name: 'Before or at birth', text: 'The drainage pathway is still maturing. A slightly narrow spot, or a normal variation in shape, slows urine leaving the kidney, so the collecting area stretches a little.' },
        { name: 'First months', text: 'As the kidney and ureter grow and mature, the narrow spot widens and urine drains more easily. The swelling gets smaller.' },
        { name: 'Usually by age 1 to 3', text: 'In most children the swelling goes away on its own. Follow-up ultrasounds check this; no surgery is needed.' },
      ],
    },
    extraText:
      'Here, the kidney’s collecting area looks wider than usual. Often the drainage system is just still maturing, and the swelling gets better on its own. Sometimes it is a sign of a blockage or of urine flowing backward.',
  },

  pathology: {
    intro:
      'Think of the urinary tract like a garden hose. If the hose is pinched, water backs up and the hose swells above the pinch. The swelling shows up above where urine is getting stuck.',
    causeLabel: 'Where is urine getting stuck?',
    severityLabel: 'Amount of swelling',
    severity: ['Mild', 'Moderate', 'Severe'],
    severityText: [
      'Mild: the center of the kidney is a little wider. The kidney tissue looks normal.',
      'Moderate: the collecting area and its cup-shaped branches are wider.',
      'Severe: the collecting area is very stretched and the kidney tissue around it gets thinner.',
    ],
    learnMore: 'Learn more',
    causes: {
      transient: {
        name: 'Nothing stuck',
        text: 'The collecting area is wider than usual, but urine still drains well. This is the most common reason. About 9 in 10 mild cases go away on their own, usually by age 2 to 3.',
      },
      upj: {
        name: 'Top of the ureter',
        text: 'A narrow spot where the kidney meets the ureter. Urine backs up only in the kidney, so the ureter looks normal.',
      },
      uvj: {
        name: 'Bottom of the ureter',
        text: 'A narrow spot where the ureter meets the bladder. Both the ureter and the kidney swell.',
      },
      reflux: {
        name: 'Urine flowing backward',
        text: 'Urine flows back up from the bladder when the child pees. This is called reflux (VUR).',
      },
      puv: {
        name: 'Urethra (boys)',
        text: 'Extra flaps of tissue in a boy’s urethra block urine leaving the bladder. The bladder wall gets thick, and both kidneys can swell. This is called posterior urethral valves.',
      },
    },
  },

  treatment: {
    intro:
      'Most babies with hydronephrosis only need check-ups. Tests help us find the cause and see how well each kidney is working.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Follow-up ultrasounds',
        summary:
          'Ultrasound uses sound waves to see the kidneys. It does not hurt and uses no radiation. Many babies’ swelling gets smaller over time.',
        control: 'Age',
        months: 'months',
        pros: ['Painless, no needles, no radiation', 'Often all that is needed'],
        cons: ['Repeat visits over months or years', 'Does not show how well the kidney works'],
      },
      scan: {
        name: 'Kidney drainage scan',
        summary:
          'A renal scan (often called a MAG3 scan) tracks a tiny amount of tracer through an IV as the kidneys make urine. It shows how well each kidney works and how well it drains. Partway through, a medicine that makes the kidneys produce more urine (Lasix) is given through the IV. This helps tell if drainage is slow or truly blocked.',
        patternLabel: 'Pattern',
        patterns: {
          normal: 'Drains well',
          slow: 'Wide, but drains after Lasix',
          blocked: 'Blocked',
        },
        chart: { title: 'Drainage curve', minutes: 'Minutes', amount: 'Tracer in kidney', lasix: 'Lasix given' },
        pros: ['Shows how much each kidney works', 'Shows if there is a true blockage'],
        cons: ['Needs an IV', 'Needs a bladder catheter, unless the child is old enough to pee when asked', 'Small amount of radiation', 'Takes about an hour'],
      },
      vcug: {
        name: 'VCUG test',
        summary:
          'A VCUG checks for urine flowing backward (reflux). A thin tube puts dye into the bladder, and X-ray pictures are taken while the child pees.',
        dye: 'Show the dye',
        pros: ['Shows reflux and the urethra clearly'],
        cons: ['Needs a bladder catheter', 'Small amount of radiation'],
      },
      antibiotic: {
        name: 'Preventive antibiotic',
        summary:
          'Some babies with more swelling or with reflux take a small daily dose of antibiotic. It helps prevent urine infections while we watch.',
        bacteria: 'Bacteria get into the bladder',
        dose: 'Daily low-dose antibiotic',
        pros: ['Lowers the chance of a kidney infection'],
        cons: ['A medicine every day', 'Bacteria can become resistant'],
      },
      surgery: {
        name: 'When surgery helps',
        summary:
          'Surgery is only needed for some children: episodes of pain, a kidney doing less than its share of the work (under about 40%) or losing function on repeat scans, infections, stones, or swelling that keeps getting worse. The type of surgery depends on the cause:',
        links: [
          ['upj', 'Narrow spot at the top of the ureter'],
          ['uvj', 'Narrow spot at the bottom of the ureter'],
          ['vur', 'Urine flowing backward'],
        ],
      },
    },
  },

  takeaways: {
    points: [
      'Hydronephrosis means the urine-collecting part of the kidney is stretched.',
      'It is common and often found before birth.',
      'Many cases get better on their own as the baby grows.',
      'Ultrasounds and sometimes other tests help find the cause.',
      'Surgery is only needed for some children.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'In babies: fever, fussiness, poor feeding or vomiting',
      'Belly, side or back pain, especially with vomiting',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
