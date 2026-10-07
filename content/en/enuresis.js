// Nocturnal enuresis (bedwetting) — all wording shown on that chapter.
export default {
  title: 'Bedwetting',

  chart: {
    title: 'Urine in the bladder overnight',
    bedtime: 'Bedtime',
    morning: 'Morning',
    capacity: 'Bladder full',
    wakes: 'Wakes to pee',
    wet: 'Wet bed',
    dry: 'Dry!',
    alarm: 'Alarm',
  },

  embryology: {
    intro:
      'Staying dry at night is a skill the body learns as it grows, like learning to walk. Three things have to work together. Bedwetting happens when one or more are not ready yet.',
    togglesTitle: 'Try each one',
    factors: {
      urine: { name: 'Makes a lot of urine at night', text: 'Normally a hormone (called ADH or vasopressin) slows urine-making at night. In some kids it has not caught up yet.' },
      bladder: { name: 'Bladder holds less at night', text: 'Some bladders are smaller or squeeze before they are full, especially with constipation.' },
      sleep: { name: 'Hard to wake up', text: 'The brain does not wake up to the feeling of a full bladder. These are often very deep sleepers.' },
    },
    family: 'Bedwetting runs in families. If one parent wet the bed as a child, the chance is about 4 in 10; if both did, about 7 in 10.',
  },

  pathology: {
    intro:
      'Bedwetting is very common and slowly gets better as children grow. It is not caused by laziness, and it is not the child’s fault.',
    ageLabel: 'Age',
    years: 'years old',
    rateText: 'out of 100 children still wet the bed at this age',
    each: 'Each year, about 15 out of 100 children who wet the bed become dry on their own.',
    whenTitle: 'When to check further',
    when: ['Wetting during the day too', 'Started wetting again after being dry for 6 months or more', 'Pain when peeing, a weak stream, or straining', 'Very thirsty, peeing a lot, or losing weight', 'Constipation or soiling', 'Loud snoring'],
  },

  treatment: {
    intro:
      'Treatment usually starts around age 6 or 7, or sooner if the child is upset by it. The child should want to work on it. Never punish wetting.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      habits: {
        name: 'Daytime habits',
        summary: 'Good bladder and bowel habits help everything else work better.',
        tips: ['Drink most fluids in the morning and early afternoon', 'Limit drinks in the 1–2 hours before bed', 'Avoid caffeine and fizzy drinks in the evening', 'Pee regularly during the day and right before bed', 'Treat constipation', 'Praise dry nights, but never punish wet ones'],
        pros: ['Simple and safe', 'Helps other treatments work'],
        cons: ['Rarely fixes bedwetting alone'],
      },
      alarm: {
        name: 'Bedwetting alarm',
        summary:
          'A small sensor in the underwear sounds an alarm at the first drops of urine. The child wakes, stops, and finishes in the toilet. Over weeks, the brain learns to wake up, or to hold, before the alarm.',
        control: 'Weeks using the alarm',
        weeks: 'weeks',
        pros: ['Works best long-term', 'Often fully cures bedwetting'],
        cons: ['Takes 2–3 months of nightly use', 'Parents often need to help wake the child at first'],
      },
      desmopressin: {
        name: 'Desmopressin medicine',
        summary:
          'A tablet at bedtime that acts like the body’s night-time hormone, so the kidneys make less urine overnight. It works quickly and is useful for sleepovers and camp.',
        dose: 'Desmopressin at bedtime',
        pros: ['Works within days', 'Good for special nights'],
        cons: ['Wetting often returns when stopped', 'No drinks from 1 hour before to 8 hours after the dose'],
      },
    },
  },

  takeaways: {
    points: [
      'Bedwetting is common and is not the child’s fault.',
      'It happens when making urine at night, bladder size, and waking up are not yet in sync.',
      'It runs in families and usually gets better with time.',
      'Alarms and desmopressin can help. Never punish wetting.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Pain or burning when peeing, or fever', 'New wetting after being dry for 6 months', 'Very thirsty, peeing a lot, or losing weight', 'Daytime wetting or soiling'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
