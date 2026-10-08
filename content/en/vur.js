// Vesicoureteral reflux (VUR) — all wording shown on the VUR chapter.
export default {
  title: 'Vesicoureteral reflux (VUR)',
  short: 'VUR',

  embryology: {
    intro:
      'Early in pregnancy, a small branch called the ureteric bud grows off a tube near the future bladder. That bud becomes the ureter and the drainage system of the kidney. Where the bud starts decides where the ureter later joins the bladder.',
    stepLabel: 'Stage',
    steps: [
      {
        name: 'Week 5',
        title: 'The ureteric bud sprouts',
        text: 'A bud grows off the mesonephric (Wolffian) duct and reaches toward a patch of tissue that will become the kidney.',
      },
      {
        name: 'Weeks 5–7',
        title: 'The kidney begins to form',
        text: 'The bud branches again and again to form the kidney’s drainage system. The tissue around it becomes the filtering part of the kidney.',
      },
      {
        name: 'Weeks 7–8',
        title: 'The ureter joins the bladder',
        text: 'The base of the bud is absorbed into the bladder wall. The ureter gets its own opening, which moves up and out, while the duct moves down.',
      },
    ],
    posLabel: 'Where the bud starts',
    positions: {
      normal: 'Typical spot',
      low: 'Closer to the bladder',
      high: 'Farther from the bladder',
    },
    results: {
      normal: {
        title: 'Typical result',
        text: 'The ureter opens at the corner of the trigone and runs through a long tunnel in the bladder wall. When the bladder squeezes, the tunnel is pressed shut like a one-way valve.',
      },
      low: {
        title: 'Result: reflux',
        text: 'The bud is absorbed early, so the opening ends up farther up and out to the side. The tunnel through the bladder wall is short, so the valve may not close and urine can flow back up. This is primary VUR.',
      },
      high: {
        title: 'Result: a different problem',
        text: 'The opening ends up too low, near the bladder neck or beyond it. This is an ectopic ureter, which can cause blockage or leaking rather than reflux. It is covered in its own chapter.',
      },
    },
    panelEmbryo: 'Developing baby',
    panelBirth: 'At birth: inside the bladder',
    labelDuct: 'Wolffian duct',
    labelBud: 'Ureteric bud',
    labelBlastema: 'Future kidney tissue',
    labelKidney: 'Kidney',
    labelSinus: 'Future bladder',
    labelTrigone: 'Trigone',
    labelNeck: 'Bladder neck',
    labelTunnel: 'Tunnel length',
    tunnelLong: 'Long',
    tunnelShort: 'Short',
    note: 'VUR often runs in families. Brothers and sisters of a child with VUR have a higher chance of having it too.',
  },

  pathology: {
    intro:
      'Normally, urine flows one way: from the kidneys, down the ureters, into the bladder. In VUR, some urine flows back up toward the kidney, usually when the bladder squeezes to pee.',
    gradeLabel: 'Grade',
    play: 'Watch it happen',
    infection: 'Bacteria in the bladder',
    scarring: 'Kidney scarring',
    healthySide: 'Typical side',
    refluxSide: 'Reflux side',
    vcugNote:
      'Grade is measured with a VCUG, an X-ray test where dye fills the bladder through a small tube. It shows how far the urine flows back up.',
    grades: [
      { title: 'No reflux', text: 'Urine only flows down. The valve where the ureter enters the bladder stays closed.' },
      { title: 'Grade I', text: 'Urine flows partway up the ureter but does not reach the kidney.' },
      { title: 'Grade II', text: 'Urine reaches the kidney, but nothing is stretched or widened.' },
      { title: 'Grade III', text: 'Urine reaches the kidney, and the ureter and kidney drainage area are mildly widened.' },
      { title: 'Grade IV', text: 'Urine reaches the kidney with moderate widening. The ureter starts to bend and twist.' },
      { title: 'Grade V', text: 'Urine reaches the kidney with severe widening and a very twisty ureter.' },
    ],
    whyMatters: 'Why it matters',
    infectionText:
      'Reflux itself does not hurt and does not cause infection. But if bacteria get into the bladder, reflux can carry them up to the kidney. A kidney infection (pyelonephritis) causes fever and can leave scars.',
    scarText:
      'Repeated kidney infections can scar part of the kidney. Scars do not heal, and a lot of scarring may lead to high blood pressure or weaker kidney function later. Preventing kidney infections is the main goal of treatment.',
  },

  treatment: {
    intro:
      'There is no single right choice. Treatment depends on the grade, age, infections so far, kidney scans and your family’s preferences. Many children use more than one approach.',
    squeeze: 'Bladder squeezes',
    relax: 'Bladder relaxes',
    pros: 'Benefits',
    cons: 'Things to consider',
    valveClosed: 'Valve closed',
    valveOpen: 'Urine flowing back up',
    labelMuscle: 'Bladder muscle',
    labelInside: 'Inside the bladder',
    labelFromKidney: 'From the kidney',
    labelTunnel: 'Tunnel',
    options: {
      habits: {
        name: 'Healthy bladder & bowel habits',
        summary:
          'Holding urine and constipation raise pressure inside the bladder. High pressure can push open a valve that would otherwise hold, and makes infections more likely.',
        control: 'Bladder pressure',
        low: 'Relaxed, regular peeing',
        high: 'Holding urine / constipation',
        pros: ['Helps every child with VUR', 'Lowers infection risk', 'Helps reflux resolve and other treatments succeed'],
        cons: ['Takes daily routine and patience', 'May need a stool softener'],
        tips: ['Pee every 2–3 hours while awake', 'Soft, daily bowel movements', 'Drink water through the day', 'Relax fully when peeing'],
      },
      observation: {
        name: 'Watchful waiting',
        summary:
          'As children grow, the tunnel in the bladder wall gets longer. Many children, especially with lower grades, outgrow reflux on their own.',
        control: 'Child’s age',
        ageUnit: 'years',
        pros: ['No procedure', 'Low grades often go away with time'],
        cons: ['Infections can still happen', 'Needs follow-up tests', 'Higher grades are less likely to go away'],
      },
      antibiotic: {
        name: 'Preventive antibiotic',
        summary:
          'A small daily dose of antibiotic keeps bacteria from growing in the urine. It does not fix the reflux, but it lowers the chance that infected urine reaches the kidney.',
        bacteria: 'Bacteria get into the bladder',
        dose: 'Daily low-dose antibiotic',
        pros: ['No procedure', 'Lowers the chance of kidney infection'],
        cons: ['A medicine every day', 'Some bacteria become resistant', 'Infections can still happen'],
      },
      injection: {
        name: 'Endoscopic injection',
        summary:
          'Through a small camera passed through the urethra, a gel (bulking agent) is injected just under the ureter opening. The bump helps the valve close.',
        action: 'Inject gel',
        undo: 'Before injection',
        pros: ['No cut on the skin', 'Usually go home the same day', 'Quick recovery'],
        cons: ['General anesthesia', 'Lower success for high grades', 'Sometimes needs a second injection'],
      },
      reimplant: {
        name: 'Ureteral reimplant surgery',
        summary:
          'A surgeon makes a new, longer tunnel for the ureter in the bladder wall so the valve closes the way it should. This can be done through a small cut low on the belly or with robotic surgery.',
        approachLabel: 'Approach',
        approaches: { extra: 'From outside the bladder', intra: 'From inside the bladder' },
        extraSteps: [
          'Through a small cut low on the belly, or with robotic surgery, the surgeon reaches the outside of the bladder where the ureter enters.',
          'The bladder muscle is opened in a line above where the ureter enters, down to the thin inner lining. The bladder itself is not opened.',
          'The ureter is laid into this groove against the lining, so it now runs a much longer path through the bladder wall.',
          'The muscle is closed over the ureter with stitches, making a long tunnel.',
          'When the bladder squeezes, the long tunnel is pressed shut, so urine no longer flows back up.',
          'A catheter usually drains the bladder for about a day. Bladder spasms are common for a short time, and most children go home in 1–2 days.',
        ],
        intraSteps: [
          'Through a small cut low on the belly, the surgeon opens the bladder to work from the inside.',
          'The ureter is freed where it enters the bladder and gently pulled inside.',
          'A new, longer tunnel is made under the bladder lining, often across to the other side of the bladder.',
          'The ureter is passed through the tunnel, and its opening is stitched in its new spot.',
          'When the bladder squeezes, the long tunnel is pressed shut, so urine no longer flows back up.',
          'A catheter usually drains the bladder for about a day. Bladder spasms are common for a short time, and most children go home in 1–2 days.',
        ],
        pros: ['Highest success rate', 'Works for high grades'],
        cons: ['Surgery with general anesthesia', 'Often a short hospital stay', 'Bladder spasms for a short time after'],
      },
    },
  },

  takeaways: {
    points: [
      'VUR means urine flows backward from the bladder toward the kidney.',
      'It usually starts before birth and often runs in families.',
      'Reflux alone does not hurt. The concern is kidney infections, which can scar the kidney.',
      'Many children, especially with lower grades, outgrow VUR.',
      'Good peeing and pooping habits help every child with VUR.',
      'Treatment choices include watching, a preventive antibiotic, an injection, or surgery.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever of 101°F (38.3°C) or higher without a clear cause like a cold',
      'Babies under 3 months: any fever of 100.4°F (38.0°C) or higher',
      'Pain or burning when peeing, or pain in the belly, side or back',
      'In babies: fever, fussiness, poor feeding or vomiting',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
