// Undescended testicle (cryptorchidism) — all wording shown on that chapter.
export default {
  title: 'Undescended testicle',

  embryology: {
    intro:
      'The testicles start growing inside the belly, near the kidneys. Before birth, they travel down through a canal in the groin into the scrotum. A cord-like guide (the gubernaculum) helps lead the way.',
    stageLabel: 'Stage',
    stages: [
      { name: 'Early', title: 'Near the kidneys', text: 'The testicles form high in the belly, near the kidneys.', pos: 0.05 },
      { name: '3 months', title: 'Down to the groin', text: 'By about 3 months of pregnancy, the testicles have moved down to the inside opening of the groin canal.', pos: 0.25 },
      { name: '7 months', title: 'Through the canal', text: 'Around 7 months of pregnancy, the testicles move through the groin canal. Hormones from the testicles help with this.', pos: 0.6 },
      { name: 'Birth', title: 'In the scrotum', text: 'Most testicles reach the scrotum by birth. Babies born early are more likely to have a testicle that has not finished the trip.', pos: 1 },
    ],
    stopTitle: 'Where can a testicle stop?',
    stopText:
      'A testicle can stop anywhere along the path. Most undescended testicles are in the groin and can be felt. About 1 in 5 cannot be felt because they are inside the belly or missing.',
    labels: { kidney: 'Kidney', ring: 'Inside opening', canal: 'Groin canal', scrotum: 'Scrotum', muscle: 'Muscle pulls up', guide: 'Guide', clip: 'Vessels clipped', collateral: 'Backup blood supply', camera: 'Camera', sacTie: 'Sac tied' },
  },

  pathology: {
    intro:
      'About 3 in 100 full-term baby boys are born with an undescended testicle. Many come down on their own in the first few months. If it is still not down by 6 months, it is unlikely to come down by itself.',
    whereLabel: 'Where is the testicle?',
    where: {
      abdomen: { name: 'In the belly', text: 'It cannot be felt on exam. A small camera surgery (laparoscopy) is used to find it.' },
      canal: { name: 'In the groin', text: 'It can often be felt in the groin. This is the most common place.' },
      high: { name: 'Top of scrotum', text: 'It sits at the top of the scrotum and does not stay down.' },
      retractile: { name: 'Comes and goes', text: 'A retractile testicle is fully descended but a strong muscle pulls it up, especially when the child is cold or nervous. It can be gently brought down and stays for a while. It usually needs only yearly check-ups, not surgery.' },
    },
    whyTitle: 'Why it matters',
    why: [
      'Fertility: the scrotum keeps testicles a bit cooler than the body, which they need to make sperm later in life.',
      'Cancer: the risk of testicular cancer is a little higher. Having the testicle in the scrotum makes it easy to check.',
      'Hernia: many undescended testicles have an open sac (hernia) next to them.',
      'Torsion and injury: a testicle in the groin can twist or get hurt more easily.',
    ],
  },

  treatment: {
    intro:
      'Surgery has two main goals: to help the testicle make sperm normally later in life, and to put it where it can easily be felt. Children with an undescended testicle have a small increased risk of testicular cancer, and a testicle in the scrotum can be checked for lumps. If the testicle is not down by 6 months of age, surgery is recommended, ideally before 18 months. Hormone shots are not usually recommended.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      wait: {
        name: 'Waiting until 6 months',
        summary:
          'Many testicles come down on their own in the first few months after birth. We check again before deciding on surgery.',
        control: 'Age',
        months: 'months',
        pros: ['Some testicles come down without surgery'],
        cons: ['After 6 months, they rarely come down on their own'],
      },
      orchiopexy: {
        name: 'Orchiopexy',
        summary:
          'Through a small cut in the groin or scrotum, the surgeon frees the testicle, closes any hernia sac, and brings the testicle down into a small pocket in the scrotum. A stitch keeps it there.',
        steps: [
          'A small cut is made in the skin crease of the groin.',
          'The testicle is found in the groin canal and freed from the tissue holding it there.',
          'Most undescended testicles have an open pouch (hernia sac) next to the cord. It is separated from the cord and tied off high up.',
          'The blood vessels and the vas deferens are gently freed so there is enough length to reach the scrotum.',
          'A second small cut is made in the scrotum to make a pocket under the skin, and the testicle is brought down into it.',
          'The testicle is stitched in place in the pocket, and both cuts are closed with dissolving stitches. Most children go home the same day.',
        ],
        pros: ['Puts the testicle where it can work and be checked', 'Usually home the same day', 'Works very well, more than 9 out of 10 times'],
        cons: ['General anesthesia', 'Rarely the testicle moves back up or shrinks'],
      },
      fsOne: {
        name: 'One-stage Fowler-Stephens',
        summary:
          'For a testicle that cannot be felt, a small camera through the belly button finds it. If its main blood vessels are too short to reach the scrotum, the surgeon clips and divides them and brings the testicle down in the same surgery. The testicle then lives on smaller backup vessels that run along the vas deferens. If the testicle is very small or missing, it may be removed instead.',
        steps: [
          'A small camera goes in through the belly button, with two tiny tools.',
          'The testicle is found inside the belly, near the inside opening of the groin canal.',
          'Its main blood vessels are too short to reach the scrotum, so they are clipped and divided.',
          'The testicle now lives on the smaller backup vessels that run along the vas deferens.',
          'The testicle is gently pulled down through a new, shorter path into the scrotum.',
          'It is stitched into a small pocket in the scrotum. Everything is done in one surgery.',
        ],
        pros: ['One surgery', 'Small cuts', 'Finds testicles that cannot be felt'],
        cons: ['General anesthesia', 'The testicle can shrink if the backup blood supply is not enough'],
      },
      fsTwo: {
        name: 'Two-stage Fowler-Stephens',
        summary:
          'The same idea, done in two surgeries. In the first, the main blood vessels are clipped with a small camera and the testicle is left in place. Over about 6 months, the backup vessels along the vas grow stronger. In the second surgery, the testicle is brought down into the scrotum.',
        steps: [
          'Stage 1: a small camera goes in through the belly button.',
          'The testicle is found inside the belly.',
          'The main blood vessels are clipped. The testicle is left where it is.',
          'Over about 6 months, the backup vessels along the vas deferens grow stronger.',
          'Stage 2: the camera goes back in, and the clipped vessels are divided.',
          'The testicle is gently pulled down into the scrotum.',
          'It is stitched into a small pocket in the scrotum.',
        ],
        pros: ['Gives the backup blood supply time to grow', 'Small cuts'],
        cons: ['Two surgeries, about 6 months apart', 'General anesthesia each time', 'The testicle can still shrink'],
      },
      retractile: {
        name: 'Retractile testicle',
        summary:
          'No surgery is needed. Because some retractile testicles later stay up (ascend), we check once a year until puberty.',
        pull: 'Muscle pulling up',
        pros: ['No surgery'],
        cons: ['Yearly check-ups'],
      },
    },
  },

  takeaways: {
    points: [
      'An undescended testicle did not finish its trip from the belly to the scrotum before birth.',
      'Many come down on their own in the first 6 months.',
      'If not, surgery (orchiopexy) is best done between 6 and 18 months of age.',
      'Surgery helps the testicle make sperm later and lets it be checked for lumps, since the cancer risk is slightly higher.',
      'As teens, boys should learn to check their testicles regularly.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Sudden pain or swelling in the groin or scrotum (go to the emergency room)',
      'A bulge in the groin that comes and goes',
      'Redness or drainage from the incision after surgery',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
