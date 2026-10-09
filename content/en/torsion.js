// Testicular torsion — all wording shown on the torsion chapter.
export default {
  title: 'Testicular torsion',

  embryology: {
    intro:
      'Each testicle hangs from a cord (the spermatic cord). The cord carries the blood vessels that feed the testicle. Normally the back of the testicle is attached inside the scrotum, so it cannot spin.',
    shapeLabel: 'How the testicle is attached',
    shapes: { typical: 'Typical', bell: 'Bell-clapper' },
    spin: 'Try to twist it',
    texts: {
      typical: 'The testicle is attached to the scrotum along its back. It can move a little but cannot spin around.',
      bell: 'The sac around the testicle attaches high up on the cord, so the testicle hangs free like the clapper inside a bell. It can spin and twist the cord. This shape is usually on both sides.',
    },
    note: 'Torsion is most common in teens, but it can happen at any age, even before birth. Newborn torsion happens a different way: the whole cord twists, sac and all.',
    labels: { cord: 'Spermatic cord', testicle: 'Testicle', epididymis: 'Epididymis', sac: 'Sac (tunica)', attached: 'Attached here', artery: 'Artery' },
  },

  pathology: {
    intro:
      'When the testicle spins, its cord twists like a wrung-out towel. The twist squeezes the blood vessels. Without blood flow, the testicle starts to get damaged within hours.',
    twistLabel: 'Twist',
    hoursLabel: 'Hours since the pain started',
    hoursUnit: 'hours',
    savedLabel: 'Chance the testicle can be saved',
    saved: [
      [6, 'Very good: nearly all (about 97 in 100)'],
      [12, 'Good: about 8 in 10'],
      [24, 'About half'],
      [48, 'Lower: about 1 in 4'],
      [Infinity, 'Low: fewer than 1 in 10'],
    ],
    savedNote: 'These are rough numbers from studies. Every case is different, which is why surgery should never wait.',
    flowOpen: 'Blood is still flowing.',
    flowClosed: 'Blood flow is cut off.',
    signsTitle: 'Warning signs: go to the emergency room right away',
    signs: [
      'Sudden, severe pain in one testicle or the scrotum',
      'Swelling or redness of the scrotum',
      'Belly pain, nausea or vomiting',
      'One testicle sitting higher than usual or lying sideways',
      'Pain that wakes the child from sleep or starts during sports',
    ],
    noteTitle: 'Do not wait',
    note: 'Children and teens may be embarrassed to tell anyone. Teach them to speak up right away about testicle pain.',
  },

  treatment: {
    intro:
      'Torsion is an emergency. An ultrasound may be done if it will not delay surgery, but surgery should not wait.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      surgery: {
        name: 'Emergency surgery',
        summary:
          'Through a small cut in the scrotum, the surgeon untwists the cord and watches for the color to return. Then the testicle is stitched in place so it cannot twist again (orchiopexy). The other side is stitched too, because it usually has the same bell-clapper shape.',
        steps: [
          'The cord is twisted. Blood cannot reach the testicle, and it starts to turn dark.',
          'With the child asleep, a small cut is made in the skin of the scrotum.',
          'The sac around the testicle is opened, and the testicle is brought out so the surgeon can see the twisted cord.',
          'The cord is untwisted.',
          'The testicle is wrapped in warm, wet gauze, and the surgeon watches for its pink color and blood flow to return.',
          'If it looks healthy, it is stitched to the inside of the scrotum so it cannot twist again (orchiopexy).',
          'The other testicle is stitched in place too, because it usually has the same shape. Most children go home the same day.',
        ],
        pros: ['Best chance to save the testicle', 'Prevents future torsion on both sides', 'Usually home the same day'],
        cons: ['General anesthesia', 'Swelling and soreness for a week or two'],
      },
      manual: {
        name: 'Untwisting by hand',
        summary:
          'Sometimes a doctor can turn the testicle back by hand in the emergency room, usually outward, like opening a book. This can bring back blood flow faster, but surgery is still needed to stitch both testicles in place.',
        action: 'Turn it back',
        pros: ['Can restore blood flow quickly'],
        cons: ['Painful', 'Does not always work', 'Surgery is still needed'],
      },
      removal: {
        name: 'If the testicle cannot be saved',
        summary:
          'If the testicle has been without blood too long, it is removed (orchiectomy). The other testicle is stitched in place to protect it. One healthy testicle is usually enough for normal hormones and fertility. An artificial testicle (prosthesis) can be placed later if wanted.',
        steps: [
          'The cord has been twisted for a long time, and the testicle has turned very dark.',
          'With the child asleep, a small cut is made in the scrotum.',
          'The cord is untwisted, but even after waiting, the color and blood flow do not come back.',
          'The cord is tied off and the testicle is removed (orchiectomy). The other testicle is stitched in place to protect it.',
          'Later, if wanted, an artificial testicle (prosthesis) can be placed so the scrotum looks the same on both sides.',
        ],
        pros: ['Removes dead tissue that can cause problems', 'The other testicle is protected'],
        cons: ['Loss of one testicle', 'A prosthesis needs another surgery'],
      },
    },
  },

  takeaways: {
    points: [
      'Testicular torsion is when the testicle twists and cuts off its own blood supply.',
      'It is an emergency. Faster treatment means a better chance to save the testicle.',
      'Surgery untwists the testicle and stitches both sides in place.',
      'Children should know to tell an adult right away about testicle pain.',
    ],
    callTitle: 'Go to the emergency room right away for',
    call: [
      'Sudden, severe testicle or scrotal pain',
      'Testicle pain with nausea or vomiting',
      'A swollen, red or hard testicle',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
