// Ectopic ureter / ureterocele — all wording shown on that chapter.
export default {
  title: 'Ectopic ureter & ureterocele',

  embryology: {
    intro:
      'Each ureter starts as a bud from a small tube near the future bladder. If the bud starts too far from the bladder, its ureter can end up opening in the wrong place. This is an ectopic ureter. It most often drains the top part of a duplicated kidney.',
    sexLabel: 'Child',
    sexes: { girl: 'Girl', boy: 'Boy' },
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
  },

  pathology: {
    intro:
      'A ureterocele is a balloon-like pouch at the end of a ureter, inside the bladder. It forms when the ureter’s opening is too tiny for urine to get out easily. An ectopic ureter opens in the wrong place. Both usually affect the top part of a duplicated kidney.',
    problemLabel: 'Condition',
    problems: {
      ureterocele: {
        name: 'Ureterocele',
        text: 'Urine fills the pouch faster than it drains, so the pouch swells and the top part of the kidney backs up.',
      },
      outlet: {
        name: 'Large ureterocele',
        text: 'A large ureterocele can slide toward the bladder outlet and block it. Then urine can back up into both kidneys.',
      },
      ectopic: {
        name: 'Ectopic ureter',
        text: 'The ureter from the top part opens below the bladder. Drainage is often poor, so that part of the kidney may be swollen and work less well.',
      },
    },
    signsTitle: 'What families may notice',
    signs: [
      'Found on an ultrasound before birth',
      'Urine infections with fever',
      'Girls with an ectopic ureter: always damp underwear despite normal peeing',
      'Rarely, a ureterocele can bulge out of a girl’s urethra',
    ],
  },

  treatment: {
    intro:
      'Treatment depends on the type, how well the top part of the kidney works, and whether there is reflux. Sometimes treatment happens in steps.',
    pros: 'Benefits',
    cons: 'Things to consider',
  },

  takeaways: {
    points: [
      'An ectopic ureter opens in the wrong place. A ureterocele is a balloon-like pouch at the end of a ureter.',
      'Both usually affect the top part of a duplicated kidney.',
      'In girls, an ectopic ureter can cause constant dribbling.',
      'Treatment can be a small procedure through the urethra or surgery, depending on the problem.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'Pain or burning when peeing, or belly, side or back pain',
      'A bulge coming out of the urethra',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
