// Imaging tests — all wording shown on the imaging chapter.
export default {
  title: 'Kidney and bladder tests',
  factsTitle: 'Quick facts',
  modes: { shows: 'What it shows', day: 'Test day' },

  ultrasound: {
    intro:
      'A renal bladder ultrasound uses sound waves to make pictures of the kidneys and bladder. It is usually the first test we order. It does not hurt and uses no radiation.',
    facts: ['Takes about 15 to 30 minutes', 'No needles and no radiation', 'Older children: drink water before so the bladder is full', 'Babies: feed as usual'],
    shows: {
      label: 'What we look at',
      views: { normal: 'Normal', hydro: 'Swollen kidney', wall: 'Thick bladder wall' },
      texts: {
        normal: 'The kidneys are a normal size and shape, and the part that collects urine is not stretched. The bladder wall is thin.',
        hydro: 'The part of the kidney that collects urine is stretched (hydronephrosis). Ultrasound shows how much, and we can follow it over time.',
        wall: 'A thick bladder wall can mean the bladder is working too hard, for example from holding urine, a blockage, or a nerve problem.',
      },
      after: 'After peeing',
      afterText: 'Pictures after peeing show how much urine is left in the bladder. A lot left over can mean the bladder is not emptying well.',
    },
    steps: [
      'Older children drink water before the test so the bladder is full. Babies can feed as usual.',
      'Your child lies on a bed, and warm gel is put on the belly and back.',
      'A small handheld wand (probe) glides over each kidney to take pictures. It just feels like gentle pressing.',
      'The wand moves to the lower belly to look at the full bladder.',
      'Sometimes your child pees and the bladder is checked again to see how much urine is left. Then the gel is wiped off and you are done.',
    ],
  },

  mag3: {
    intro:
      'A MAG3 scan (diuretic renogram) shows how much work each kidney does and how well urine drains out of each kidney. It helps tell whether a swollen kidney is truly blocked.',
    facts: ['Takes about 1 to 2 hours in all', 'Needs an IV; many young children also need a bladder catheter', 'A small amount of radiation, about what we all get from nature over a few months', 'Drink well before the test, unless told otherwise', 'Usually no sedation; your child must lie still'],
    shows: {
      patternLabel: 'Drainage',
      patterns: { normal: 'Drains well', slow: 'Slow, then drains', blocked: 'Blocked' },
      patternTexts: {
        normal: 'The tracer moves into the kidney and drains out quickly. No blockage.',
        slow: 'The kidney is wide and drains slowly at first, but empties after the water pill (Lasix). This is usually not a true blockage.',
        blocked: 'The tracer stays in the kidney even after Lasix. This suggests a true blockage that may need surgery.',
      },
      splitLabel: 'Split function',
      splits: { even: 'Even', mild: 'A little uneven', low: 'One kidney low' },
      splitTitle: 'Share of the work each kidney does',
      splitTexts: {
        even: 'Each kidney does about half of the work. This is normal.',
        mild: 'A small difference (about 45/55 or closer) is usually considered normal.',
        low: 'If one kidney does much less than its share (under about 40%), or its share drops on repeat scans, surgery may be advised.',
      },
      left: 'Left',
      right: 'Right',
      chart: { title: 'Drainage curve', minutes: 'Minutes', amount: 'Tracer in kidney', lasix: 'Lasix given' },
    },
    steps: [
      'Numbing cream may be used, and an IV is placed in the arm or hand. Extra fluid is given by IV or by drinking.',
      'In many young children, a thin soft tube (catheter) is placed in the bladder to keep it empty during the test.',
      'Your child lies still on a table under a special camera. A tiny amount of tracer goes in through the IV. It does not hurt.',
      'The camera watches the kidneys pick up the tracer and send it down to the bladder. Videos or a parent nearby can help your child stay still.',
      'A medicine that makes more urine (Lasix) is given through the IV. This shows whether the kidney drains well or is blocked.',
      'The IV and catheter come out. Drink extra fluids; the tracer leaves the body in the urine within about a day.',
    ],
  },

  dmsa: {
    intro:
      'A DMSA scan shows the healthy working tissue of each kidney. It is the best test to find kidney scars, for example after a kidney infection, and it also shows how much work each kidney does.',
    facts: ['An IV injection, then a wait of about 2 to 3 hours, then 30 to 60 minutes of pictures', 'No bladder catheter', 'A small amount of radiation, about what we all get from nature over a few months', 'Your child must lie still; young children sometimes need sedation', 'To look for scars, it is usually done about 6 months after an infection'],
    shows: {
      label: 'What the pictures show',
      findings: { normal: 'Normal', scar: 'Scar', infection: 'Active infection' },
      texts: {
        normal: 'Both kidneys light up evenly with smooth edges. Each does about half the work.',
        scar: 'A scar shows up as a missing or flattened spot, often at the top or bottom of the kidney. That kidney may do a little less of the work.',
        infection: 'During a kidney infection, inflamed areas take up less tracer and look pale. These can heal, which is why scar checks are done months later.',
      },
      picture: { title: 'DMSA scan', left: 'Left', right: 'Right', view: 'Viewed from the back' },
    },
    steps: [
      'A small IV is placed, and a tiny amount of tracer is injected. The IV can come out after.',
      'You wait about 2 to 3 hours while the tracer settles into the kidney tissue. Your child can usually eat, drink and play.',
      'Your child lies still on a table while a camera close to the back takes pictures for 30 to 60 minutes.',
      'The pictures show healthy kidney tissue brightly. Scars show up as missing spots.',
      'You can go home. Drink extra fluids; the tracer leaves the body in the urine within about a day.',
    ],
  },

  vcug: {
    intro:
      'A VCUG (voiding cystourethrogram) is an x-ray test that shows whether urine flows backward from the bladder toward the kidneys (reflux). It also shows the shape of the bladder and urethra.',
    facts: ['Takes about 30 to 60 minutes', 'Needs a bladder catheter; numbing jelly is used', 'A small amount of x-ray', 'Usually no sedation, because your child needs to pee during the test', 'Not done during an active urine infection'],
    shows: {
      label: 'During the test',
      views: { filling: 'Bladder filling', none: 'Peeing, no reflux', reflux: 'Peeing, with reflux' },
      texts: {
        filling: 'Dye flows through the catheter and fills the bladder. X-ray pictures show the bladder shape and any reflux while it fills.',
        none: 'While your child pees, the dye leaves through the urethra and nothing goes up the ureters. No reflux.',
        reflux: 'While your child pees, some dye goes back up a ureter toward the kidney. This is reflux, and the pictures show its grade.',
      },
    },
    steps: [
      'A child life specialist and a parent can usually stay with your child. Most children do not need sedation.',
      'The area around the urethra opening is cleaned, numbing jelly is used, and a thin soft catheter is gently slid into the bladder. This part is quick.',
      'Dye slowly fills the bladder through the catheter while x-ray pictures are taken.',
      'When the bladder is full, your child pees on the table onto soft pads. The catheter slides out on its own or is removed.',
      'Pictures taken while peeing show whether dye goes back up toward the kidneys. Babies may have the bladder filled twice.',
      'You are done. Peeing may sting the first few times. Drink extra fluids, and call if your child gets a fever.',
    ],
  },

  uroflow: {
    intro:
      'A uroflow measures how fast urine comes out while your child pees into a special toilet. The shape of the flow curve shows how the bladder and the control muscle are working together.',
    facts: ['Come with a full bladder: drink water beforehand', 'No needles and no radiation', 'Your child pees in private, as normally as possible', 'A quick bladder ultrasound afterward checks for leftover urine', 'Sometimes repeated 2 times for a good reading'],
    shows: {
      label: 'Flow curve',
      patterns: { bell: 'Bell', tower: 'Tower', staccato: 'Staccato', interrupted: 'Interrupted', plateau: 'Flat' },
      texts: {
        bell: 'A smooth, rounded curve. This is a normal pee: the bladder squeezes and the control muscle relaxes.',
        tower: 'A sudden, very high flow that ends quickly. This often goes with an overactive bladder that squeezes hard.',
        staccato: 'A bumpy curve. The control muscle tightens off and on while peeing. This is common in dysfunctional voiding.',
        interrupted: 'The flow stops and starts in separate bursts. The bladder squeeze is weak, and the child pushes with the belly to pee.',
        plateau: 'A low, flat curve. Urine comes out slowly the whole time, which can mean a narrow spot or a tight control muscle.',
      },
      chart: { title: 'Uroflow curve', time: 'Time', flow: 'Flow rate' },
    },
    steps: [
      'Your child drinks water and waits until the bladder feels full.',
      'Sometimes small sticky pads are placed near the bottom to check the control muscle. They do not hurt.',
      'Your child pees into a special toilet or funnel, in private, as normally as possible. A machine records how fast the urine flows.',
      'Right after, a quick ultrasound of the lower belly checks how much urine is left in the bladder.',
      'You are done. The curve and the leftover urine are reviewed together with a bladder and bowel diary.',
    ],
  },

  urodynamics: {
    intro:
      'Urodynamics measures pressure inside the bladder as it fills and empties. It shows how much the bladder holds, how stretchy it is, and whether pressure gets high enough to harm the kidneys. It is often used for neurogenic bladder, posterior urethral valves, or hard-to-treat wetting.',
    facts: ['Takes about 1 hour', 'A thin catheter in the bladder and a small soft tube in the bottom; numbing jelly is used', 'Sticky pads near the bottom check the control muscle', 'Usually no sedation, because your child needs to tell us how the bladder feels and to pee', 'Sometimes done with x-ray pictures (video urodynamics)'],
    shows: {
      label: 'Bladder pressure while filling',
      patterns: { normal: 'Normal', overactive: 'Overactive', stiff: 'Stiff, high pressure' },
      texts: {
        normal: 'Pressure stays low while the bladder fills, until it is full. The bladder is stretchy and holds urine safely.',
        overactive: 'The bladder squeezes on its own while it is filling. This can cause sudden urges and leaks.',
        stiff: 'Pressure keeps climbing as the bladder fills. High pressure (in the red zone) can push back on the kidneys and harm them over time, so treatment is needed to keep pressure low.',
      },
      warm: 'Warm fluid filling the bladder',
      chart: { title: 'Bladder pressure', volume: 'Amount in bladder', pressure: 'Pressure', high: 'High pressure: risk to kidneys' },
    },
    steps: [
      'Your child may pee first, sometimes into a uroflow toilet.',
      'Numbing jelly is used, and a very thin catheter is passed into the bladder to measure bladder pressure.',
      'A small soft tube goes just inside the bottom to measure belly pressure, and sticky pads are placed near the bottom. These do not hurt.',
      'Warm fluid slowly fills the bladder through the catheter. Your child tells us when they first feel the need to pee and when they feel full.',
      'When full, your child pees with the tubes in place so we can see how the bladder empties.',
      'The tubes come out and you are done. Peeing may sting a little at first. Drink extra fluids, and call if your child gets a fever.',
    ],
  },

  prep: {
    points: [
      'Explain the test in simple, honest words a day or two before. Avoid saying it will not hurt if a needle or catheter is part of it.',
      'Bring a comfort item, a favorite show or game, and a snack for after.',
      'Ask whether a child life specialist can help. They are experts at helping children cope.',
      'A parent can usually stay in the room.',
      'Ask the imaging team about drinking, eating, or sedation instructions for your child’s test.',
      'Ultrasound and uroflow use no radiation. MAG3, DMSA and VCUG use small amounts, kept as low as possible for children.',
    ],
    callTitle: 'Call us after a test if your child has',
    call: [
      'Fever after a VCUG, urodynamics, or another test with a catheter',
      'Burning when peeing, or blood in the urine, that lasts more than a day or two',
      'Redness, swelling or pain at the IV site that gets worse',
    ],
    planTitle: 'Tests we ordered',
    planHint: 'Type notes here before printing (not saved).',
  },
};
