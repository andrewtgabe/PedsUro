// UPJ obstruction — all wording shown on the UPJ chapter.
export default {
  title: 'UPJ obstruction',

  embryology: {
    intro:
      'The UPJ (ureteropelvic junction) is where the kidney’s collecting area, the renal pelvis, joins the ureter. A UPJ obstruction is a narrow spot there that slows urine leaving the kidney.',
    causeLabel: 'Cause',
    causes: {
      narrow: {
        name: 'Narrow, stiff piece',
        text: 'Before birth, a short piece of the ureter does not form its muscle normally. The ureter usually pushes urine down in waves, like squeezing toothpaste. The stiff piece cannot squeeze, so urine backs up into the kidney. This is the most common cause in babies.',
      },
      vessel: {
        name: 'Crossing blood vessel',
        text: 'A blood vessel going to the lower part of the kidney crosses over the ureter and presses on it. This is more common in older children and often causes episodes of pain.',
      },
    },
    strip: { stiff: 'Stiff piece', kidney: 'Kidney', bladder: 'To bladder' },
    stripCaption: 'Watch the squeezing waves carry urine down the ureter',
  },

  pathology: {
    intro:
      'Urine is made all the time. If it cannot leave the kidney fast enough, the collecting area stretches like a water balloon. The ureter below the narrow spot looks normal.',
    severityLabel: 'Amount of blockage',
    severity: ['Mild', 'Moderate', 'Severe'],
    severityText: [
      'Mild: urine drains a little slowly. The kidney usually works normally.',
      'Moderate: the collecting area is clearly stretched. We check how well the kidney drains.',
      'Severe: the kidney is very stretched and its tissue gets thinner. Over time, the kidney may work less well.',
    ],
    drink: 'Drinks a lot of fluid',
    drinkText:
      'Drinking a lot makes more urine. If it cannot drain, the kidney swells fast and can cause belly or side pain, often with vomiting. Pain usually gets better as the urine slowly drains.',
    infection: 'Urine infection',
    infectionText: 'Urine that sits still is easier for bacteria to grow in. A kidney infection causes fever.',
    symptomsTitle: 'What families may notice',
    symptoms: [
      'Babies: usually nothing. Most are found on an ultrasound before birth.',
      'Older children: episodes of belly, side or back pain, often with vomiting',
      'Urine infections with fever',
      'Blood in the urine, sometimes after a minor injury',
    ],
  },

  treatment: {
    intro:
      'Many babies with mild or moderate UPJ obstruction get better without surgery. We use ultrasounds and kidney scans to decide.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Watchful waiting',
        summary:
          'We check with ultrasounds and sometimes a kidney drainage scan. If the kidney keeps working well and the swelling stays the same or improves, no surgery is needed.',
        control: 'Age',
        months: 'months',
        pros: ['No surgery', 'Many babies improve on their own'],
        cons: ['Repeat ultrasounds and scans', 'Surgery may still be needed later'],
      },
      pyeloplasty: {
        name: 'Pyeloplasty surgery',
        summary:
          'The surgeon removes the narrow piece and sews the wide part of the kidney to the healthy ureter. If a blood vessel is pressing, the ureter is moved in front of it. This can be done through a small cut or with a laparoscopic or robotic approach.',
        before: 'Before surgery',
        after: 'After surgery',
        stent: 'Temporary stent',
        stentText: 'A stent is a soft, thin tube that holds the new connection open while it heals. It is taken out after a few weeks.',
        pros: ['Works very well, more than 9 out of 10 times', 'Relieves pain and protects the kidney'],
        cons: ['Surgery with general anesthesia', 'Usually 1–2 days in the hospital', 'Sometimes needs a stent or drain for a short time'],
      },
    },
  },

  takeaways: {
    points: [
      'UPJ obstruction is a narrow spot where the kidney joins the ureter.',
      'It causes the kidney’s collecting area to swell (hydronephrosis).',
      'Many babies get better without surgery.',
      'Older children may have episodes of side pain and vomiting.',
      'Pyeloplasty surgery fixes the narrow spot and works very well.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'Belly, side or back pain, especially with vomiting',
      'Blood in the urine',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
