// Neurogenic bladder — all wording shown on that chapter.
export default {
  title: 'Neurogenic bladder',

  embryology: {
    intro:
      'The bladder is controlled by nerves that run through the spinal cord to the brain. A neurogenic bladder is a bladder that does not work normally because those nerves are affected.',
    causeLabel: 'Spinal cord',
    causes: {
      typical: { name: 'Typical', text: 'Messages travel freely: “I’m full” goes up, and “hold” or “go” comes back down.' },
      blocked: { name: 'Nerves affected', text: 'Messages cannot get past the affected part of the spinal cord. The brain does not feel when the bladder is full and cannot control when it empties.' },
    },
    whyTitle: 'Common causes',
    why: [
      'Spina bifida (myelomeningocele): the spinal cord does not close fully in the first month of pregnancy.',
      'Tethered spinal cord: the cord is stuck and gets stretched as a child grows.',
      'Spinal cord injury or tumor',
      'Sacral agenesis: the lowest part of the spine did not form.',
    ],
  },

  pathology: {
    intro: 'Every child’s bladder behaves differently, so tests (often urodynamics) are used to see which pattern your child has. The main goal is to protect the kidneys.',
    typeLabel: 'Pattern',
    pressureLabel: 'Bladder pressure',
    kidneyRisk: 'Risk to kidneys',
    types: {
      high: {
        name: 'Tight and squeezing',
        text: 'The bladder squeezes on its own while the control muscle stays tight. Pressure gets very high. The bladder wall thickens, and urine can back up and damage the kidneys. This is the most worrying pattern.',
      },
      leaky: {
        name: 'Weak muscle, leaking',
        text: 'The control muscle cannot close well, so urine leaks out all the time. Pressure stays low, so kidneys are usually safe, but the child is always wet.',
      },
      floppy: {
        name: 'Big and floppy',
        text: 'The bladder does not squeeze well and stretches very large. It does not empty, which leads to infections and overflow leaking.',
      },
    },
    bowel: 'The same nerves control the bowel, so constipation and poop accidents are common too.',
  },

  treatment: {
    intro:
      'Treatment keeps bladder pressure low, empties the bladder regularly, prevents infections, and helps with dryness. Care is lifelong, and plans change as children grow.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      cic: {
        name: 'Catheterizing',
        summary: 'Clean intermittent catheterization (CIC): a thin, smooth tube is passed into the bladder every 3–4 hours to drain it, then removed. Parents learn first, and many children learn to do it themselves.',
        action: 'Empty with catheter',
        pros: ['Keeps pressure low and protects kidneys', 'Fewer infections', 'Helps with dryness'],
        cons: ['Several times every day', 'Takes practice'],
      },
      medicine: {
        name: 'Bladder medicine',
        summary: 'Medicines like oxybutynin relax the bladder so it holds more at lower pressure.',
        dose: 'Medicine',
        pros: ['Lowers pressure', 'Fewer leaks between caths'],
        cons: ['Constipation, dry mouth, flushing', 'Not enough for every child'],
      },
      botox: {
        name: 'Botox injections',
        summary: 'Botox is injected into the bladder wall through a small camera. It calms the bladder for about 6 to 9 months.',
        before: 'Before',
        after: 'After Botox',
        pros: ['Lowers pressure without major surgery', 'Can be repeated'],
        cons: ['Needs repeat procedures', 'Anesthesia each time'],
      },
      augment: {
        name: 'Bladder augmentation',
        summary: 'If the bladder stays small and high-pressure, a piece of bowel is sewn onto it to make it bigger and softer. CIC is still needed afterward.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Holds much more at low pressure', 'Protects the kidneys'],
        cons: ['Major surgery', 'Mucus, stones, and lifelong follow-up'],
      },
      channel: {
        name: 'Belly button channel',
        summary: 'A small channel (Mitrofanoff) is made from the bladder to the belly button, often using the appendix. It lets a child catheterize sitting in a wheelchair, without using the urethra.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Easier and more independent catheterizing'],
        cons: ['Surgery', 'The channel can narrow and need care'],
      },
    },
  },

  takeaways: {
    points: [
      'A neurogenic bladder is caused by nerve problems, often from spina bifida.',
      'The biggest danger is high bladder pressure, which can harm the kidneys.',
      'Regular catheterizing and medicine keep pressure low.',
      'Surgery can help when other treatments are not enough.',
      'Care is lifelong, with regular tests and check-ups.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever or cloudy, smelly urine with feeling sick', 'Trouble passing the catheter', 'New leaking between caths, or new back pain or leg weakness', 'If your child has a shunt: headache, vomiting, or unusual sleepiness — go to the emergency room'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
