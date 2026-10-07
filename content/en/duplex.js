// Duplicated kidney / collecting system — all wording shown on the duplex chapter.
export default {
  title: 'Duplicated kidney',

  embryology: {
    intro:
      'A duplicated kidney has two drainage systems instead of one: a top part and a bottom part. It is common (about 1 in 125 people), and most people never know they have it.',
    typeLabel: 'Type',
    types: { single: 'Typical', partial: 'Partial', complete: 'Complete' },
    texts: {
      single: 'One bud grows off the duct and becomes one ureter and one drainage system.',
      partial: 'The bud splits early into two branches. Two ureters leave the kidney but join together before reaching the bladder, so there is one opening. This usually causes no problems.',
      complete: 'Two separate buds grow off the duct. Each becomes its own ureter with its own opening in the bladder.',
    },
    ruleTitle: 'Where the two openings end up',
    rule:
      'The ureter from the bottom part opens higher and off to the side, so it may have a short tunnel and reflux. The ureter from the top part opens lower and toward the middle. It may end in a balloon-like pouch (ureterocele) or outside the bladder (ectopic ureter).',
    panelEmbryo: 'Developing baby',
    panelBirth: 'At birth: inside the bladder',
    labelDuct: 'Duct',
    labelKidney: 'Kidney',
    labelSinus: 'Future bladder',
    labelTop: 'Top part',
    labelBottom: 'Bottom part',
    labelNeck: 'Bladder neck',
  },

  pathology: {
    intro:
      'Most duplicated kidneys work normally. Problems, when they happen, depend on where each ureter opens.',
    typeLabel: 'Type',
    types: { partial: 'Partial', complete: 'Complete' },
    problemLabel: 'Problem',
    problems: {
      none: {
        name: 'No problem',
        text: 'Both parts of the kidney drain well. No treatment is needed.',
      },
      reflux: {
        name: 'Reflux into bottom part',
        text: 'The bottom part’s ureter has a short tunnel, so urine flows back up when the child pees. This can lead to kidney infections.',
      },
      ureterocele: {
        name: 'Ureterocele',
        text: 'The end of the top part’s ureter swells into a balloon-like pouch inside the bladder. The pouch has a tiny opening, so the top part of the kidney backs up and swells. A large pouch can also block other openings.',
      },
      ectopic: {
        name: 'Ectopic ureter',
        text: 'The top part’s ureter opens below the bladder’s control muscle. In girls this can cause constant dribbling even when toilet trained. In boys it does not cause dribbling but can cause infections. The top part often works poorly.',
      },
    },
    partialText: 'The two ureters join before the bladder. This almost never causes problems.',
  },

  treatment: {
    intro:
      'Most children with a duplicated kidney need no treatment. When there is a problem, the best choice depends on the problem and how well the top part of the kidney works.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      none: {
        name: 'No treatment needed',
        summary: 'If both parts drain well and there are no infections, nothing needs to be done.',
        pros: ['No tests or procedures beyond check-ups'],
        cons: ['Call us for fever or urine symptoms'],
      },
      puncture: {
        name: 'Ureterocele puncture',
        summary:
          'Using a small camera through the urethra, the surgeon makes a tiny opening in the ureterocele so the top part can drain. No cut on the skin.',
        before: 'Before',
        after: 'After puncture',
        pros: ['No cut on the skin', 'Quickly relieves the blockage', 'Often used in babies'],
        cons: ['General anesthesia', 'Urine may flow backward into the top part afterward', 'Some children need more surgery later'],
      },
      joining: {
        name: 'Joining the ureters',
        summary:
          'The top part’s ureter is connected to the bottom part’s ureter, so both drain through one healthy opening. This can be done through a small cut or robotically.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Keeps the top part of the kidney', 'Fixes dribbling from an ectopic ureter'],
        cons: ['Surgery with general anesthesia', 'Works best when the bottom part has no reflux'],
      },
      reimplant: {
        name: 'Reimplant surgery',
        summary:
          'Both ureters are moved together into a new, longer tunnel in the bladder wall. This fixes reflux and can remove a ureterocele.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Fixes reflux and blockage at the bladder', 'High success rate'],
        cons: ['Surgery with general anesthesia', 'Short hospital stay', 'Bladder spasms for a short time after'],
      },
      removal: {
        name: 'Removing the top part',
        summary:
          'If the top part of the kidney does not work, it can be removed while keeping the healthy bottom part. This is called a partial nephrectomy.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Removes the source of infections or dribbling', 'Healthy bottom part stays'],
        cons: ['Surgery with general anesthesia', 'Only used if the top part works very little'],
      },
    },
  },

  takeaways: {
    points: [
      'A duplicated kidney has two drainage systems, a top part and a bottom part.',
      'It is common, and most people never have problems.',
      'Possible problems: reflux into the bottom part, or a blocked or misplaced ureter from the top part.',
      'Treatment depends on the problem. Choices range from watching to surgery.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'Constant dribbling or always-damp underwear in a toilet-trained child',
      'Belly, side or back pain, or pain when peeing',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
