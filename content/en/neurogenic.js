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
    facts: [
      'In the U.S., spina bifida affects about 3 to 4 of every 10,000 babies, about 1,500 babies each year.',
      'Taking 400 micrograms of folic acid every day before and during early pregnancy lowers the risk.',
      'All children with spina bifida have some tethering of the spinal cord from scar tissue. About 1 in 4 develop new symptoms and need surgery to release it.',
    ],
  },

  pathology: {
    intro: 'A neurogenic bladder is a bladder that does not work normally because of a problem with its nerves, such as spina bifida. Every child’s bladder behaves differently, so tests (often urodynamics) are used to see which pattern your child has. The main goal is to protect the kidneys.',
    typeLabel: 'Pattern',
    pressureLabel: 'Bladder pressure',
    kidneyRisk: 'Risk to kidneys',
    types: {
      high: {
        name: 'Overactive bladder, tight control muscle',
        text: 'The bladder squeezes on its own while the control muscle stays tight (detrusor-sphincter dyssynergia). Pressure gets very high. The bladder wall thickens, and urine can back up and damage the kidneys. This is the most worrying pattern.',
      },
      retain: {
        name: 'Weak bladder, tight control muscle',
        text: 'The bladder does not squeeze well, and the control muscle stays closed. The bladder stretches large and does not empty, which leads to infections and overflow leaking.',
      },
      urge: {
        name: 'Overactive bladder, weak control muscle',
        text: 'The bladder squeezes on its own, and the weak control muscle cannot hold, so urine leaks often in small amounts. Pressure usually stays lower because urine escapes.',
      },
      leaky: {
        name: 'Weak bladder, weak control muscle',
        text: 'Neither muscle works well. Urine leaks out all the time. Pressure stays low, so the kidneys are usually safe, but the child is always wet.',
      },
    },
    reflux: 'Urine flowing back up to the kidneys (reflux) in a high-pressure bladder adds even more risk to the kidneys.',
    bowel: 'The same nerves control the bowel, so constipation and poop accidents are common too.',
  },

  treatment: {
    intro:
      'Treatment keeps bladder pressure low, empties the bladder regularly, prevents infections, and helps with dryness. Care is lifelong, and plans change as children grow.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      tests: {
        name: 'Tests and check-ups',
        summary: 'Because the bladder can change as a child grows, regular tests watch for problems early. The level of the spine problem does not predict how the bladder will work, so testing is the only way to know.',
        tips: [
          'Kidney and bladder ultrasound soon after birth, then every 3 to 6 months in the first year and every 6 to 12 months after that',
          'Urodynamics at about 2 to 4 months of age, again around 1 year, and when things change',
          'A VCUG, contrast ultrasound, or video urodynamics to look for reflux',
          'Blood tests for kidney function',
          'A DMSA scan for kidney scars in some children, such as after infections',
          'A bladder and bowel diary',
        ],
        chart: { title: 'Urodynamics', pressure: 'Bladder pressure', volume: 'Amount filled', danger: 'Over 40: risk to kidneys', leak: 'Leak point' },
        steps: [
          'A thin catheter is placed in the bladder. A small soft tube in the bottom measures belly pressure. Your child is awake.',
          'The bladder is slowly filled with sterile water while the pressure is recorded.',
          'A safe bladder fills like a balloon: it holds a good amount while the pressure stays low.',
          'In a high-risk bladder, pressure climbs above 40. Pressure this high can push urine back up and harm the kidneys.',
          'The test also shows the pressure when urine first leaks out (leak point) and whether the bladder squeezes on its own. With X-ray dye (video urodynamics), it can also show reflux.',
        ],
        pros: ['Finds a high-risk bladder early', 'Guides treatment'],
        cons: ['Several tests each year at first', 'Urodynamics needs a catheter'],
      },
      cic: {
        name: 'Catheterizing',
        summary: 'Clean intermittent catheterization (CIC): a thin, smooth tube is passed into the bladder every 3–4 hours to drain it, then removed. Parents learn first, and many children learn to do it themselves. Some children with high pressure also have a catheter draining overnight. Bacteria in the urine without symptoms are common with catheterizing and are usually not treated.',
        steps: [
          'Wash your hands well with soap and water.',
          'Clean the opening of the urethra with a wipe, front to back.',
          'Put lubricant on the tip of a clean catheter (many are already coated).',
          'Gently slide the catheter in until urine starts to flow.',
          'Let the bladder drain all the way, into the toilet or a container.',
          'Slowly pull the catheter out. If more urine flows, wait until it stops.',
          'Repeat every 3 to 4 hours while awake. Write the amounts in a cath diary.',
        ],
        pros: ['Keeps pressure low and protects kidneys', 'Fewer infections', 'Helps with dryness'],
        cons: ['Several times every day', 'Takes practice'],
      },
      medicine: {
        name: 'Bladder medicine',
        summary: 'These medicines relax the bladder so it holds more at lower pressure. Oxybutynin is used most, by mouth or put into the bladder through the catheter, which causes fewer side effects. Other choices include solifenacin, tolterodine, and mirabegron. Treat constipation too, because many of these medicines can make it worse.',
        dose: 'Medicine',
        pros: ['Lowers pressure', 'Fewer leaks between caths'],
        cons: ['Constipation, dry mouth, flushing', 'Not enough for every child'],
      },
      bowel: {
        name: 'Bowel program',
        summary: 'The same nerves control the bowel, so most children need a daily bowel program to stay clean and avoid constipation. Finding the right plan can take time.',
        link: 'See constipation care (clean-out, softener, toilet routine)',
        items: [
          'Sitting on the toilet at the same time every day, often after a meal',
          'A daily stool softener (such as Miralax) and sometimes senna',
          'Suppositories or enemas to help empty the bowel',
          'Rinsing the bowel through the bottom with a special kit (such as Peristeen)',
          'A small channel or tube in the belly for flushing the bowel from above (Malone or cecostomy)',
        ],
        pros: ['Fewer poop accidents', 'Helps bladder treatment work better'],
        cons: ['Takes daily time', 'May take trial and error'],
      },
      botox: {
        name: 'Botox injections',
        summary: 'Botox is injected into the bladder wall through a small camera. It calms the bladder for about 6 to 12 months.',
        steps: [
          'Before: the bladder squeezes hard at the wrong times. Pressure is high, and the wall is thick.',
          'With the child asleep, a small camera is passed through the urethra into the bladder. There is no cut on the skin.',
          'A tiny needle through the camera injects Botox into many spots in the bladder wall.',
          'Over the next 1 to 2 weeks, the Botox relaxes the bladder muscle. The bladder holds more urine at lower pressure. Catheterizing is still needed.',
          'The effect wears off after about 6 to 12 months, so the injections are repeated as needed.',
        ],
        pros: ['Lowers pressure without major surgery', 'Can be repeated'],
        cons: ['Needs repeat procedures', 'Anesthesia each time'],
      },
      augment: {
        name: 'Bladder augmentation',
        summary: 'If the bladder stays small and high-pressure, a piece of bowel is sewn onto it to make it bigger and softer. CIC is still needed afterward.',
        steps: [
          'Before: even with catheterizing and medicine, the bladder stays small, stiff and high-pressure.',
          'With the child asleep, a cut is made in the belly and the bladder is opened across the top.',
          'A piece of bowel, usually small intestine, is taken out with its blood supply. The rest of the bowel is joined back together.',
          'The bowel piece is opened flat and sewn onto the bladder like a patch, making it bigger.',
          'The bigger, softer bladder holds much more urine at low pressure, which protects the kidneys.',
          'Catheterizing is still needed to empty the bladder. Regular bladder rinsing clears mucus from the bowel piece, and check-ups are lifelong.',
        ],
        pros: ['Holds much more at low pressure', 'Protects the kidneys'],
        cons: ['Major surgery', 'Mucus, stones, and lifelong follow-up'],
      },
      channel: {
        name: 'Belly button channel',
        summary: 'A small channel (Mitrofanoff) is made from the bladder to the belly button, often using the appendix. It lets a child catheterize sitting in a wheelchair, without using the urethra.',
        steps: [
          'Before: some children find it hard to catheterize through the urethra, especially from a wheelchair.',
          'With the child asleep, the appendix (or a small piece of bowel) is separated, keeping its blood supply.',
          'One end is tunneled into the bladder wall. This makes a one-way valve so urine does not leak out of the channel.',
          'The other end is brought out to the belly button as a small, neat opening.',
          'A catheter stays in the channel for a few weeks while it heals.',
          'After that, the bladder is emptied by passing a catheter through the belly button every few hours.',
        ],
        pros: ['Easier and more independent catheterizing'],
        cons: ['Surgery', 'The channel can narrow and need care'],
      },
      other: {
        name: 'Other options and surgeries',
        summary: 'Some children need other ways to keep the kidneys safe or to stay dry. Which option is right depends on urodynamics, the kidneys, mobility, and what your family wants.',
        items: [
          'An overnight catheter that drains the bladder while sleeping, to keep pressure low',
          'Vesicostomy: a small opening from the bladder to the lower belly for babies whose kidneys are at risk despite catheterizing and medicine. Urine drains into the diaper.',
          'Bladder neck surgery to tighten the outlet and stop leaking: reconstruction, a sling, bulking injections, or an artificial sphincter. Usually done with an augmentation.',
          'Tethered cord release if the spinal cord becomes stuck again',
          'A tube or opening that drains urine all the time (suprapubic tube, ileovesicostomy) for children who cannot catheterize',
        ],
        pros: ['Protects the kidneys when other treatment is not enough', 'Can help with dryness and independence'],
        cons: ['Surgery with general anesthesia', 'More surgery may be needed later'],
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
      'Many children with spina bifida are allergic to latex. Use latex-free catheters, gloves, and supplies at home, at school, and in the hospital.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever or cloudy, smelly urine with feeling sick', 'Trouble passing the catheter', 'New leaking between caths, or new back pain or leg weakness', 'If your child has a shunt: headache, vomiting, or unusual sleepiness — go to the emergency room'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
