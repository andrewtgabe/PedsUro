// Phimosis & paraphimosis — all wording shown on that chapter.
export default {
  title: 'Phimosis & paraphimosis',

  labels: {
    glans: 'Head (glans)',
    foreskin: 'Foreskin',
    opening: 'Opening',
    shaft: 'Shaft',
    tight: 'Too tight',
    trapped: 'Trapped and swollen',
  },

  embryology: {
    intro:
      'The foreskin is skin that covers the head of the penis. At birth it is normally stuck to the head and the opening is small. This is called physiologic phimosis, and it is normal. Over the years, the foreskin slowly separates and loosens on its own.',
    ageLabel: 'Age',
    ages: [
      { name: 'Newborn', limit: 0.08, text: 'The foreskin is stuck to the head and cannot be pulled back. This is normal.' },
      { name: '3 years', limit: 0.35, text: 'It starts to loosen. It may pull back a little.' },
      { name: '6 years', limit: 0.55, text: 'More separation. Small white lumps (smegma) under the foreskin are normal skin cells, not infection.' },
      { name: '10 years', limit: 0.8, text: 'Many boys can now pull it back most of the way.' },
      { name: 'Teen', limit: 1, text: 'Most boys can pull the foreskin all the way back by the teen years.' },
    ],
    pullLabel: 'Gently pull back',
    note: 'Never force the foreskin back. Forcing it can cause tears and scarring that make it tighter.',
  },

  pathology: {
    intro: 'A tight foreskin is usually normal in young boys. A few situations need attention.',
    typeLabel: 'Situation',
    types: {
      normal: { name: 'Normal tight foreskin', text: 'Tight but healthy skin that will loosen with time. No treatment is needed unless it causes problems.' },
      balloon: { name: 'Ballooning', text: 'The foreskin puffs up like a balloon while peeing, then empties. This is common and usually harmless in young boys.' },
      scarred: { name: 'Scarred opening', text: 'A white, firm ring of scar at the opening (often from a skin condition called lichen sclerosus). This will not loosen on its own and usually needs treatment.' },
      para: { name: 'Paraphimosis', text: 'The foreskin was pulled back and got stuck behind the head. It squeezes like a tight rubber band, so the head and foreskin swell. This is an emergency.' },
    },
    pee: 'Peeing',
    pullLabel: 'Gently pull back',
  },

  treatment: {
    intro: 'Most boys need only gentle care. Treatment is for a scarred opening, repeated infections or swelling, trouble peeing, or paraphimosis.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      care: {
        name: 'Gentle care',
        summary: 'Wash the outside with water during baths. Once the foreskin loosens, gently pull it back to clean, then always put it back forward.',
        tips: ['Never force it back', 'Always return it to cover the head', 'No special cleaning under it in babies'],
        pros: ['Nothing to buy', 'Lets nature do the work'],
        cons: ['Takes years'],
      },
      steroid: {
        name: 'Steroid cream',
        summary: 'A mild steroid cream is put on the tip of the foreskin once or twice a day for 4 to 8 weeks, with gentle stretching. It softens the skin so it can open.',
        control: 'Weeks of cream',
        weeks: 'weeks',
        pros: ['Works for most boys', 'No surgery', 'Very safe on this skin'],
        cons: ['Takes daily effort', 'Tightness can come back if stopped early'],
      },
      preputioplasty: {
        name: 'Preputioplasty',
        summary: 'A small surgery that makes a short cut in the tight ring and stitches it to widen the opening, while keeping the foreskin.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Keeps the foreskin', 'Quick recovery'],
        cons: ['General anesthesia', 'Not good for scarred (lichen sclerosus) skin'],
      },
      circumcision: {
        name: 'Circumcision',
        summary: 'The foreskin is removed. This fixes the problem for good and is the usual treatment for a scarred opening.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Permanent fix', 'Treats lichen sclerosus'],
        cons: ['General anesthesia', 'Swelling and soreness for 1–2 weeks', 'Cannot be undone'],
      },
      reduction: {
        name: 'Fixing paraphimosis',
        summary:
          'In the emergency room, the doctor gently squeezes the swelling down, often after numbing medicine or ice, then pushes the head back through while pulling the foreskin forward. If that does not work, a small cut (dorsal slit) releases the band.',
        action: 'Reduce it',
        pros: ['Usually works without surgery', 'Quick relief'],
        cons: ['Uncomfortable', 'Circumcision may be suggested later'],
      },
    },
  },

  takeaways: {
    points: [
      'A tight foreskin is normal in young boys and loosens over years.',
      'Never force the foreskin back, and always return it forward.',
      'Steroid cream helps most boys who need treatment.',
      'A scarred white ring or repeated problems may need surgery.',
      'Paraphimosis (foreskin stuck behind the head) is an emergency.',
    ],
    callTitle: 'Go to the emergency room right away for',
    call: ['Foreskin stuck behind the head with swelling', 'Not able to pee, or severe pain'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
