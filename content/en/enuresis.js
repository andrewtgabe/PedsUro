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
    normalAt5: 'At age 5, bedwetting is still considered normal. Treatment usually starts around age 6 or 7.',
    whenTitle: 'When to check further',
    when: ['Wetting during the day too', 'Started wetting again after being dry for 6 months or more', 'Pain when peeing, a weak stream, or straining', 'Very thirsty, peeing a lot, or losing weight', 'Constipation or soiling', 'Loud snoring (can be a sign of large tonsils or sleep apnea)'],
  },

  treatment: {
    intro:
      'Treatment usually starts around age 6 or 7, or sooner if the child is upset by it. The child should want to work on it. Never punish wetting.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      firstVisit: {
        name: 'At the first visit',
        summary: 'Most children need only a talk, an exam, and a simple urine test. More tests are only needed if something points to another problem.',
        checks: [
          'Questions about wetting, daytime peeing, pooping, sleep and snoring',
          'A short exam of the belly, back and genitals',
          'A urine test to check for sugar (diabetes) and infection',
          'A 2-day bladder diary: what your child drinks and when they pee',
          'A check for constipation',
          'An ultrasound or more tests only if there is daytime wetting, a weak stream, or wetting again after being dry',
        ],
        pros: ['Usually quick and simple', 'Finds problems that need other treatment'],
        cons: ['The diary takes a little effort at home'],
      },
      habits: {
        name: 'Daytime habits',
        summary: 'Good bladder and bowel habits help everything else work better.',
        habits: ['Drink most fluids in the morning and early afternoon', 'Limit drinks in the 1–2 hours before bed', 'Avoid caffeine and fizzy drinks in the evening', 'Pee regularly during the day and right before bed', 'Treat constipation', 'Praise dry nights, but never punish wet ones'],
        pros: ['Simple and safe', 'Helps other treatments work'],
        cons: ['Rarely fixes bedwetting alone'],
      },
      alarm: {
        name: 'Bedwetting alarm',
        summary:
          'A small sensor in the underwear sounds an alarm at the first drops of urine. Over weeks, the brain learns to wake up, or to hold, before the alarm. About 2 out of 3 children become dry, and wetting comes back less often than after medicine. Keep using it until your child has 14 dry nights in a row.',
        scene: { room: 'Bedroom', unit: 'Alarm', ring: 'Beep! Beep!', sensor: 'Sensor in underwear', chart: 'Dry nights in a row', lastDrink: 'Last drink', noDrinks: 'No drinks', pill: 'Tablet', urine: 'Urine made', dry: 'Dry!' },
        steps: [
          'At bedtime: your child pees, then clips the sensor into their underwear and the alarm onto their pajama top.',
          'At the first drops of urine, the alarm goes off.',
          'At first, many children sleep through it. A parent goes in right away and helps wake them up fully.',
          'Your child stops peeing, walks to the toilet, and finishes there.',
          'Together, change the wet underwear and sheets, reset the alarm, and go back to bed. Mark the chart each morning.',
          'After a few weeks, your child starts to wake before the alarm, or holds it until morning. It usually takes 2 to 3 months.',
          'Once your child has 14 dry nights in a row, you can stop using the alarm.',
        ],
        pros: ['Works best long-term', 'About 2 in 3 become dry', 'Wetting comes back less often than after medicine'],
        cons: ['Takes 2–3 months of nightly use', 'Parents often need to help wake the child at first'],
      },
      desmopressin: {
        name: 'Desmopressin medicine',
        summary:
          'A tablet at bedtime that acts like the body’s night-time hormone, so the kidneys make less urine overnight. About 7 out of 10 children have fewer wet nights, but many wet again when it is stopped. It works best for children who make a lot of urine at night, and it can be used with an alarm. It is useful for sleepovers and camp.',
        scene: { room: 'Bedroom', unit: 'Alarm', ring: 'Beep!', sensor: 'Sensor', chart: 'Dry nights', lastDrink: 'Last drink', noDrinks: 'No drinks', pill: 'Tablet', urine: 'Urine made', dry: 'Dry!' },
        steps: [
          'One hour before bed: last drink of the evening. Your child pees before bed.',
          'At bedtime: your child takes the tablet with only a small sip of water.',
          'No drinks for 8 hours after the tablet. With the medicine, too much water can lower the salt in the blood, which can cause headache or vomiting.',
          'Overnight, the kidneys make less urine, so the bladder does not overfill. More dry mornings.',
          'It is used every night or only for special nights. When stopping, we often lower the dose slowly. If wetting comes back, an alarm can help.',
        ],
        pros: ['Works within days', 'Good for special nights'],
        cons: ['Wetting often returns when stopped', 'No drinks from 1 hour before to 8 hours after the dose'],
      },
      combined: {
        name: 'If the first try does not work',
        summary: 'Some children need more than one treatment. We choose based on what is causing the wetting.',
        items: [
          'Alarm and desmopressin together, for children still wetting with one alone',
          'A bladder-relaxing medicine (such as oxybutynin) when the bladder is small or squeezes too early, often with desmopressin',
          'Treating constipation fully, which can help the bladder hold more',
        ],
        pros: ['Helps children who did not respond to one treatment'],
        cons: ['More than one medicine or tool', 'Bladder medicines can cause constipation or a dry mouth'],
      },
    },
  },

  takeaways: {
    points: [
      'Bedwetting is common and is not the child’s fault.',
      'It happens when making urine at night, bladder size, and waking up are not yet in sync.',
      'It runs in families and usually gets better with time.',
      'Treating constipation often helps.',
      'Alarms and desmopressin can help. Never punish wetting.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Pain or burning when peeing, or fever', 'New wetting after being dry for 6 months', 'Very thirsty, peeing a lot, or losing weight', 'Daytime wetting or soiling'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
