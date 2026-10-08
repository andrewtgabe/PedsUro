// Hydrocele — all wording shown on the hydrocele chapter. The `labels` are
// shared with the inguinal hernia chapter.
export default {
  title: 'Hydrocele',

  labels: {
    pouch: 'Pouch',
    fluid: 'Fluid',
    bowel: 'Intestine',
    testicle: 'Testicle',
    ring: 'Opening from belly',
    stuck: 'Stuck!',
    tie: 'Tied off',
    camera: 'Camera',
  },

  embryology: {
    intro:
      'As the testicle moves down from the belly before birth, it pulls a thin pouch of belly lining with it (the processus vaginalis). Normally the top of this pouch closes before or soon after birth. If it does not close all the way, fluid or intestine can come down.',
    outcomeLabel: 'What happens to the pouch',
    outcomes: {
      closed: { name: 'Closes normally', text: 'The pouch seals shut. Only a thin layer stays around the testicle.' },
      fluid: { name: 'Closed, with fluid', text: 'The pouch closed, but some fluid stayed around the testicle. This is common in newborns and usually goes away on its own.' },
      thin: { name: 'Small opening', text: 'A small channel stays open. Fluid from the belly can flow down and back up. This is a communicating hydrocele.' },
      wide: { name: 'Large opening', text: 'A wide channel stays open. Intestine can slide down into it. This is an inguinal hernia.' },
    },
  },

  pathology: {
    intro:
      'A hydrocele is a pouch of fluid around the testicle. It looks like a smooth, soft swelling of the scrotum. It is usually painless.',
    typeLabel: 'Type',
    types: {
      simple: { name: 'Non-communicating', text: 'The pouch is closed and the fluid is trapped. The size stays about the same. Most go away by 1 to 2 years of age.' },
      communicating: { name: 'Communicating', text: 'A small channel connects to the belly. The swelling often gets bigger during the day or with crying, and smaller after sleep.' },
    },
    timeLabel: 'Time of day',
    times: { morning: 'Morning', evening: 'Evening' },
    light: 'Shine a light',
    lightText: 'Fluid lets light through, so a hydrocele glows. Intestine does not. This simple test helps tell a hydrocele from a hernia.',
  },

  treatment: {
    intro: 'Most hydroceles in babies need no treatment. Surgery is considered if it lasts past 1 to 2 years, gets bigger, changes size during the day, or a hernia is found.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Watchful waiting',
        summary: 'The body usually absorbs the fluid over time.',
        control: 'Age',
        months: 'months',
        pros: ['No surgery', 'Most go away by 1 to 2 years'],
        cons: ['Check-ups to make sure it is going away'],
      },
      surgery: {
        name: 'Hydrocele repair',
        summary:
          'Through a small cut in the groin crease, the surgeon ties off the open channel at the top and drains the fluid. It is the same surgery as a hernia repair.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Fixes it for good', 'Usually home the same day', 'Small scar in the skin crease'],
        cons: ['General anesthesia', 'Some swelling for a few weeks', 'Rarely comes back'],
      },
    },
  },

  takeaways: {
    points: [
      'A hydrocele is fluid around the testicle. It is common in babies.',
      'It comes from a pouch that did not fully close before birth.',
      'Most go away on their own by 1 to 2 years of age.',
      'If the channel stays open, surgery ties it off. This also prevents a hernia.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'A swelling that becomes hard, painful, red or cannot be pushed back (go to the emergency room)',
      'Vomiting with a swollen groin or scrotum',
      'A swelling that keeps getting bigger',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
