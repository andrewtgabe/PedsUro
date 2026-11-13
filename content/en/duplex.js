// Duplicated kidney / collecting system — all wording shown on the duplex chapter.
export default {
  title: 'Duplex system, ectopic ureter & ureterocele',

  embryology: {
    intro:
      'A duplex collecting system (also called a duplicated kidney) has two drainage systems instead of one: a top part and a bottom part. It is fairly common (about 1 in 125 people), and most people never know they have it.',
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
      'A duplex collecting system has two drainage systems in one kidney, a top part and a bottom part, sometimes with two ureters. It is found in about 1 in 125 people, is more common in girls, and about 1 in 5 have it on both sides. Most work normally. Problems, when they happen, depend on where each ureter opens.',
    typeLabel: 'Type',
    types: { partial: 'Partial', complete: 'Complete' },
    problemLabel: 'Problem',
    sexLabel: 'Child',
    sexes: { girl: 'Girl', boy: 'Boy' },
    problems: {
      none: {
        name: 'Typical drainage',
        text: 'Both parts of the kidney drain well. No treatment is needed.',
      },
      reflux: {
        name: 'Reflux into bottom part',
        text: 'The bottom part’s ureter has a short tunnel, so urine flows back up when the child pees. This can lead to kidney infections.',
      },
      ureterocele: {
        name: 'Ureterocele',
        text: 'The end of the top part’s ureter swells into a balloon-like pouch inside the bladder. The pouch has a tiny opening, so urine drains slowly and the top part of the kidney backs up and swells. A large pouch can also block other openings.',
      },
      outlet: {
        name: 'Large ureterocele',
        text: 'A large ureterocele can slide toward the bladder outlet and block it. Then urine can back up into both kidneys.',
      },
      ectopic: {
        name: 'Ectopic ureter',
        girl: 'In girls, the top part’s ureter can open below the bladder’s control muscle, such as in the urethra or vagina. Urine skips the control muscle, so there is constant dribbling even when the child is toilet trained. The top part often works poorly.',
        boy: 'In boys, the top part’s ureter opens above the control muscle, such as in the urethra near the prostate or in the tubes that carry sperm. Boys do not dribble, but they can get infections, including of the testicle (epididymitis). The top part often works poorly.',
      },
    },
    signsTitle: 'What families may notice',
    signs: [
      'Found on an ultrasound before birth',
      'Urine infections with fever',
      'Girls with an ectopic ureter: always damp underwear despite normal peeing',
      'Rarely, a ureterocele can bulge out of a girl’s urethra',
    ],
    siteLabel: 'Where the ureter opens',
    sites: {
      girl: { neck: 'Bladder neck', urethra: 'Urethra', vagina: 'Vagina' },
      boy: { neck: 'Bladder neck', prostatic: 'Urethra (inside prostate)', seminal: 'Seminal vesicle', vas: 'Vas deferens' },
    },
    below:
      'This opening is below the control muscle (sphincter). Urine from this ureter leaks out all the time, so the child is always a little wet, even while also peeing normally.',
    above:
      'This opening is above the control muscle, so it does not cause constant wetting. It can cause blockage and infections instead.',
    boyNote: 'In boys, an ectopic ureter always opens above the control muscle, so boys do not have constant dribbling. An opening into the seminal vesicle or vas deferens (the tube that carries sperm) can cause infections near the testicle (epididymitis).',
    labels: {
      bladder: 'Bladder',
      urethra: 'Urethra',
      sphincter: 'Control muscle',
      vagina: 'Vagina',
      prostate: 'Prostate',
      seminal: 'Seminal vesicle',
      vas: 'Vas deferens',
    },
    partialText: 'The two ureters join before the bladder. This almost never causes problems.',
  },

  treatment: {
    intro:
      'Most children with a duplex collecting system need no treatment. When there is a problem, the best choice depends on the problem and how well the top part of the kidney works.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      ultrasound: {
        name: 'Kidney ultrasound',
        summary:
          'Ultrasound uses sound waves to see both parts of the kidney. It can show a swollen top part, a wide ureter, or a ureterocele inside the bladder. It does not hurt and uses no radiation.',
        probe: 'Ultrasound',
        pros: ['Painless, no needles, no radiation', 'Good for follow-up visits'],
        cons: ['Does not show reflux or how well each part works'],
      },
      vcug: {
        summary:
          'A VCUG checks for urine flowing backward (reflux), most often into the bottom part of the kidney. It also shows a ureterocele as a round shadow in the bladder. A thin tube puts dye into the bladder, and X-ray pictures are taken while the child pees. We usually have your child take a preventive antibiotic before the test to help prevent a kidney infection.',
      },
      scan: {
        name: 'Kidney function scan',
        summary:
          'A DMSA or MAG3 scan uses a tiny amount of tracer through an IV to measure how much of the kidney’s work each part does. This helps decide whether to keep the top part (joining or reimplant) or remove it.',
        label: 'Top part',
        views: { good: 'Works well', poor: 'Works poorly' },
        top: 'Top',
        bottom: 'Bottom',
        pros: ['Shows how much each part works', 'Helps choose the right surgery'],
        cons: ['Needs an IV', 'Small amount of radiation'],
      },
      antibiotic: {
        name: 'Preventive antibiotic',
        summary:
          'Babies with reflux or a ureterocele often take a small daily dose of antibiotic. It helps keep a bladder infection from becoming a kidney infection while we watch or plan surgery.',
        pros: ['Lowers the chance of a kidney infection'],
        cons: ['A medicine every day', 'Bacteria can become resistant'],
      },
      none: {
        name: 'No treatment needed',
        summary: 'If both parts drain well and there are no infections, nothing needs to be done.',
        pros: ['No tests or procedures beyond check-ups'],
        cons: ['Call us for fever or urine symptoms'],
      },
      puncture: {
        name: 'Ureterocele puncture',
        summary:
          'Using a small camera through the urethra, the surgeon makes a tiny opening in the ureterocele so the top part can drain. No cut on the skin. About 1 in 3 to 1 in 2 children need more surgery later, more often when the ureterocele reaches outside the bladder.',
        steps: [
          'The ureterocele is a balloon-like pouch in the bladder. The top part of the kidney is backed up and swollen.',
          'With your child asleep, a small camera is passed through the urethra into the bladder. No cut on the skin.',
          'The surgeon makes a tiny opening in the ureterocele.',
          'Urine drains from the top part, the pouch shrinks, and the swelling goes down over time.',
        ],
        pros: ['No cut on the skin', 'Quickly relieves the blockage', 'Often used in babies'],
        cons: ['General anesthesia', 'Urine may flow backward into the top part afterward', 'About 1 in 3 to 1 in 2 need more surgery later'],
      },
      joining: {
        name: 'Joining the ureters',
        summary:
          'The top part’s ureter is connected to the bottom part’s ureter, so both drain through one healthy opening. This can be done through a small cut or robotically. This is only an option in a duplex collecting system. An ectopic ureter from a single system (one ureter on that side) has no second ureter to join.',
        steps: [
          'The top part’s ureter opens in the wrong place (or ends in a ureterocele), so the top part does not drain well.',
          'With your child asleep, the top part’s ureter is cut near the bladder.',
          'It is sewn into the side of the bottom part’s ureter, so both parts drain through one healthy opening.',
          'After healing, both parts drain into the bladder and the swelling goes down.',
        ],
        pros: ['Keeps the top part of the kidney', 'Fixes dribbling from an ectopic ureter'],
        cons: ['Surgery with general anesthesia', 'Works best when the bottom part has no reflux', 'Not possible with a single system'],
      },
      reimplant: {
        name: 'Reimplant surgery',
        summary:
          'Both ureters are moved together into a new, longer tunnel in the bladder wall. This fixes reflux and can remove a ureterocele.',
        steps: [
          'Urine refluxes into the bottom part, and the top part may be blocked by a ureterocele.',
          'With your child asleep, the bladder is opened. Any ureterocele is removed and the bladder wall behind it is repaired.',
          'Both ureters, still sharing their outer covering, are moved together into a new, longer tunnel in the bladder wall (green).',
          'After healing, both parts drain well and the reflux is fixed.',
        ],
        pros: ['Fixes reflux and blockage at the bladder', 'High success rate'],
        cons: ['Surgery with general anesthesia', 'Short hospital stay', 'Bladder spasms for a short time after'],
      },
      removal: {
        name: 'Removing the top ureter and top half of the kidney',
        summary:
          'If the top part of the kidney does not work, it can be removed along with its ureter, while keeping the healthy bottom part. This is called a partial nephrectomy (or upper pole heminephrectomy).',
        steps: [
          'The top part works very little and its ureter is causing infections or dribbling.',
          'With your child asleep, through a small cut or robotically, the blood vessels to the top part are tied off. The kidney is divided along the line between the two parts.',
          'The top half of the kidney and most of its ureter are removed.',
          'The healthy bottom part keeps draining normally.',
        ],
        pros: ['Removes the source of infections or dribbling', 'Healthy bottom part stays'],
        cons: ['Surgery with general anesthesia', 'Only used if the top part works very little', 'A small chance the bottom part loses some function'],
      },
    },
  },

  takeaways: {
    points: [
      'A duplex collecting system has two drainage systems in one kidney, a top part and a bottom part.',
      'It is common, and most people never have problems.',
      'Possible problems: reflux into the bottom part, or a blocked or misplaced ureter from the top part.',
      'Treatment depends on the problem. Choices range from watching to surgery.',
      'A ureterocele is a balloon-like pouch at the end of the top part’s ureter. An ectopic ureter opens in the wrong place.',
      'In girls, an ectopic ureter can cause constant dribbling. Boys do not dribble.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'Constant dribbling or always-damp underwear in a toilet-trained child',
      'Belly, side or back pain, or pain when peeing',
      'A bulge coming out of the urethra',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
