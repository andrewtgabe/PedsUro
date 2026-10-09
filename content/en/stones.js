// Kidney stones — all wording shown on the kidney stones chapter.
export default {
  title: 'Kidney, ureter & bladder stones',

  embryology: {
    intro:
      'Urine has minerals and salts dissolved in it, like sugar stirred into water. When urine is too concentrated, these can form tiny crystals. Over time, crystals can stick together and grow into a stone.',
    waterLabel: 'Water',
    water: { low: 'Not enough', ok: 'Some', high: 'Plenty' },
    saltLabel: 'Salt in food',
    salt: { low: 'Low', high: 'High' },
    jar: { urine: 'Urine', crystals: 'Crystals', stone: 'Stone forming' },
    texts: {
      bad: 'Dark, concentrated urine lets crystals form and clump together into stones.',
      mid: 'Some crystals form, but most wash out.',
      good: 'Pale, watery urine keeps minerals dissolved, so stones cannot form.',
    },
    riskTitle: 'What raises the risk',
    risks: ['Not drinking enough water', 'Salty and processed foods', 'Family history of stones', 'Some medical conditions, medicines or a urine blockage', 'Not moving much (for example, after surgery or with a disability)'],
    bladderTitle: 'Stones that form in the bladder',
    bladder: 'Bladder stones in children usually form when urine sits in the bladder: a bladder that does not empty fully (such as a neurogenic bladder), a bladder made bigger with bowel (augmentation), repeated infections, or mucus. Drinking plenty and emptying the bladder regularly, including flushing (bladder washouts) if prescribed, helps prevent them.',
  },

  pathology: {
    intro: 'A stone sitting in the kidney often causes no pain. Pain starts when a stone moves into the ureter and blocks urine.',
    whereLabel: 'Where is the stone?',
    where: {
      calyx: { name: 'In the kidney', text: 'Usually no pain. It may be found by chance on an ultrasound, or cause blood in the urine.' },
      upj: { name: 'Leaving the kidney', text: 'The stone blocks urine from leaving, so the kidney swells. This can cause sudden, severe side or back pain.' },
      ureter: { name: 'In the ureter', text: 'A ureteral stone is the most painful kind. The ureter squeezes to push the stone down, so pain comes in strong waves (renal colic) and can move from the side toward the belly or groin. Children may not be able to sit still, and often vomit.' },
      uvj: { name: 'Near the bladder', text: 'The narrowest spot. Pain moves low, and there may be an urge to pee often. Once it passes into the bladder, pain usually stops.' },
      bladder: { name: 'Passed into the bladder', text: 'Once a stone from the kidney drops into the bladder, the pain usually stops. Most come out with urine within a few days.' },
      bladderFormed: { name: 'Formed in the bladder', text: 'A bladder stone that forms in the bladder can grow large. It can cause pain at the end of peeing, blood in the urine, a stream that suddenly stops, infections, or new leaking. In children who catheterize, the catheter may be hard to pass.' },
    },
    sizeLabel: 'Stone size',
    sizes: { small: 'Small', large: 'Large' },
    sizeText: { small: 'Small stones (under about 5 mm, the size of a pencil eraser tip) usually pass on their own.', large: 'Larger stones are less likely to pass and more likely to need a procedure.' },
    signsTitle: 'What families may notice',
    signs: ['Severe pain in the side, back, belly or groin that comes in waves', 'Vomiting', 'Blood in the urine (pink, red or brown)', 'Young children: fussiness or vague belly pain', 'Fever (an emergency if a stone is blocking an infected kidney)'],
  },

  treatment: {
    intro: 'Treatment depends on the stone’s size, where it is, and symptoms. Many stones pass on their own.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      pass: {
        name: 'Passing it',
        summary: 'Drink plenty, take pain medicine, and sometimes a medicine (such as tamsulosin) that relaxes the ureter to help a ureteral stone pass. Strain the urine to catch the stone so it can be tested.',
        control: 'Days',
        days: 'days',
        pros: ['No procedure', 'Most small stones pass within a few weeks'],
        cons: ['Pain while passing', 'Needs follow-up to make sure it passed'],
      },
      ureteroscopy: {
        name: 'Ureteroscopy',
        summary: 'A thin camera goes up through the urethra and bladder into the ureter. A laser breaks the stone, and the pieces are removed. A stent (soft tube) may stay in for a short time.',
        steps: [
          'A stone is stuck in the ureter. Urine backs up and the kidney swells.',
          'With the child asleep, a thin camera (ureteroscope) is passed through the urethra into the bladder, then up the ureter to the stone. There is no cut on the skin.',
          'A laser through the camera breaks the stone into small pieces.',
          'The pieces are grabbed with a tiny wire basket and pulled out, or broken small enough to pass.',
          'The camera is removed. A stent (soft, thin tube) may be left for a short time to keep urine draining while the ureter heals.',
          'The stent is taken out after several days to a few weeks. Urine drains freely again.',
        ],
        pros: ['No cuts on the skin', 'Removes the stone directly'],
        cons: ['General anesthesia', 'A stent can be uncomfortable until removed'],
      },
      swl: {
        name: 'Shock wave lithotripsy',
        summary: 'Sound waves aimed from outside the body break the stone into small pieces that pass in the urine over the next weeks.',
        steps: [
          'A stone sits in the kidney.',
          'With the child asleep, they lie on a soft cushion on the machine. X-ray or ultrasound is used to aim exactly at the stone.',
          'The machine sends shock waves through the skin. They pass through the body and focus on the stone.',
          'Hundreds of small shock waves crack the stone into tiny pieces. There is no cut on the skin.',
          'Over the next days to weeks, the pieces pass down the ureter and out in the urine.',
          'Follow-up imaging checks that the pieces have passed. Some children need a second treatment.',
        ],
        pros: ['No cuts and no camera inside', 'Good for some kidney stones'],
        cons: ['General anesthesia in children', 'Pieces still need to pass', 'May need more than one treatment'],
      },
      bladderRemoval: {
        name: 'Removing a bladder stone',
        summary:
          'Most bladder stones are broken up with a laser through a small camera passed into the bladder, then washed out. Large stones, or stones in an augmented bladder, may be removed through a small opening in the lower belly instead.',
        before: 'Before',
        laser: 'Broken up',
        after: 'Removed',
        pros: ['Removes the stone completely', 'Often no cut on the skin'],
        cons: ['General anesthesia', 'Stones can come back if urine keeps sitting in the bladder'],
      },
      pcnl: {
        name: 'Through the back (PCNL)',
        summary: 'For large kidney stones, a small tunnel is made through the back directly into the kidney to break up and remove the stone.',
        steps: [
          'A large stone fills the drainage area inside the kidney. It is too big to pass or to treat easily another way.',
          'With the child asleep, using x-ray or ultrasound, a needle is passed through the skin of the back into the kidney.',
          'The needle path is gently widened into a small tunnel, just big enough for a camera.',
          'A camera goes through the tunnel. A laser or ultrasound tool breaks up the stone.',
          'The pieces are taken out through the tunnel.',
          'A small tube may be left in the kidney for a short time to drain urine. Most children stay in the hospital for a night or two.',
        ],
        pros: ['Best for large stones', 'Removes the most stone in one surgery'],
        cons: ['A short hospital stay', 'Higher risk of bleeding than other options'],
      },
      prevention: {
        name: 'Preventing stones',
        summary: 'Once a child has had a stone, more can form. Simple changes help a lot. A 24-hour urine test can show what to change.',
        tips: ['Drink water all day; urine should look pale yellow', 'Eat less salt and fewer processed foods', 'Keep normal amounts of dairy (do not cut calcium)', 'Lemon or orange juice can help', 'Limit sugary drinks'],
        pros: ['Lowers the chance of new stones'],
        cons: ['Long-term habits'],
      },
    },
  },

  takeaways: {
    points: [
      'Stones form when minerals in concentrated urine stick together, in the kidney or in the bladder.',
      'Stones hurt most when they move down the ureter and block urine.',
      'Bladder stones usually form when the bladder does not empty fully.',
      'Many small stones pass on their own.',
      'Larger stones can be broken up or removed with a camera, sound waves, or a small surgery.',
      'Drinking more water and eating less salt help prevent new stones.',
    ],
    callTitle: 'Go to the emergency room right away for',
    call: ['Fever with stone pain', 'Pain that is not controlled with medicine', 'Vomiting and unable to keep fluids down', 'Not able to pee'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
