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
    labels: { kidney: 'Kidney', ring: 'Inside opening', canal: 'Groin canal', scrotum: 'Scrotum', muscle: 'Muscle pulls up', guide: 'Guide' },
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
        before: 'Before',
        after: 'After surgery',
        pros: ['Puts the testicle where it can work and be checked', 'Usually home the same day', 'Works very well, more than 9 out of 10 times'],
        cons: ['General anesthesia', 'Rarely the testicle moves back up or shrinks'],
      },
      laparoscopy: {
        name: 'Laparoscopy',
        summary:
          'For a testicle that cannot be felt, a small camera is placed through the belly button to find it. If found, it can be brought down, sometimes in two surgeries a few months apart to let its blood supply adjust. If it is very small or missing, it may be removed.',
        before: 'Found in belly',
        after: 'After surgery',
        pros: ['Finds testicles that cannot be felt', 'Small cuts'],
        cons: ['General anesthesia', 'Sometimes needs two surgeries'],
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
