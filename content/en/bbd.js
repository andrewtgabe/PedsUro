// Daytime wetting & voiding dysfunction — all wording shown on that chapter.
// `labels` and `cycle` are shared with the neurogenic bladder chapter.
export default {
  title: 'Daytime wetting',

  labels: {
    brain: 'Brain',
    cord: 'Spinal cord',
    bladder: 'Bladder',
    sphincter: 'Control muscle',
    poop: 'Poop',
    lesion: 'Signals blocked',
    augment: 'Added bowel',
    channel: 'Belly button channel',
  },

  cycle: [
    { name: 'Filling', message: '', text: 'The bladder relaxes and stretches as it fills. The control muscle at the bottom stays closed.' },
    { name: 'Getting full', message: 'Getting full!', text: 'Nerves send a message up the spinal cord to the brain: “I’m getting full.”' },
    { name: 'Holding', message: 'Hold it', text: 'If it is not a good time, the brain tells the bladder to stay relaxed and the control muscle to stay closed.' },
    { name: 'Peeing', message: 'Go!', text: 'On the toilet, the brain says “go.” The control muscle relaxes and opens, and the bladder squeezes to empty all the way.' },
  ],

  embryology: {
    intro:
      'Staying dry is teamwork between the bladder, the control muscle (sphincter), and the brain. Most children learn daytime control by about age 4, but the skills keep maturing for years.',
    stepLabel: 'Bladder cycle',
  },

  pathology: {
    intro:
      'Daytime wetting is common in school-age children. It is usually caused by bladder habits, not a disease, and it is not on purpose. Bladder and bowel problems often happen together.',
    typeLabel: 'Type',
    types: {
      overactive: {
        name: 'Overactive bladder',
        text: 'The bladder squeezes suddenly before it is full. The child feels a sudden urge, rushes, and may leak on the way. Many squat, cross legs, or press a heel into their bottom to hold it in.',
      },
      holding: {
        name: 'Holding too long',
        text: 'The child is busy and waits too long to go. The bladder gets very full and overflows, often with big accidents. Usually pees only 2–3 times a day.',
      },
      dysfunctional: {
        name: 'Muscle does not relax',
        text: 'The control muscle tightens instead of relaxing while peeing. The stream starts and stops, and the bladder does not empty fully. Leftover urine raises the chance of infections.',
      },
      constipation: {
        name: 'Constipation',
        text: 'A large amount of poop in the bowel presses on the bladder and irritates its nerves. Treating constipation alone often fixes the wetting.',
      },
    },
    bowelLink: 'Learn more about bowel and bladder dysfunction',
    signsTitle: 'Common signs',
    signs: ['Sudden urges, rushing to the bathroom', 'Damp underwear', 'Peeing fewer than 4 or more than 7 times a day', 'Holding maneuvers: crossing legs, squatting', 'Hard or infrequent poops', 'Urine infections'],
  },

  treatment: {
    intro: 'Most children get better with simple habit changes over a few months. The first step is usually a bladder and bowel diary.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      schedule: {
        name: 'Timed peeing',
        summary: 'Peeing on a schedule keeps the bladder from getting too full or rushing.',
        tips: ['Pee every 2–3 hours while awake (a watch alarm helps)', 'Pee before school, at lunch, after school, and before bed', 'Drink water through the day, especially at school', 'Sit fully on the toilet with feet supported and knees apart', 'Take time; do not push or rush'],
        pros: ['Safe and simple', 'Helps every type'],
        cons: ['Needs daily reminders', 'Takes weeks to months'],
      },
      constipation: {
        name: 'Treating constipation',
        summary: 'Daily stool softener and fiber until poops are soft and daily. A belly X-ray sometimes shows hidden constipation.',
        control: 'Weeks of treatment',
        weeks: 'weeks',
        pros: ['Often fixes the wetting', 'Lowers infection risk'],
        cons: ['Needs months of daily medicine', 'Stopping too early lets it come back'],
      },
      biofeedback: {
        name: 'Pelvic floor therapy',
        summary: 'A therapist uses games and sensors to teach the child to relax the control muscle while peeing, so the bladder empties fully.',
        before: 'Before',
        after: 'After therapy',
        pros: ['Treats the cause of start-stop peeing', 'No medicine'],
        cons: ['Several visits', 'Needs practice at home'],
      },
      medicine: {
        name: 'Bladder-calming medicine',
        summary: 'Medicines like oxybutynin relax the bladder so it does not squeeze too early. Usually used along with good habits.',
        dose: 'Medicine',
        pros: ['Fewer urges and accidents'],
        cons: ['Can cause constipation, dry mouth, or flushing', 'Habits still matter'],
      },
    },
  },

  takeaways: {
    points: [
      'Daytime wetting is common and is not on purpose.',
      'It is usually about bladder habits and constipation.',
      'Pee every 2–3 hours, drink water, and keep poops soft.',
      'Most children improve over a few months.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever, or pain when peeing', 'Constant dribbling (always wet)', 'Weak stream or straining', 'Back pain, leg weakness, or new poop accidents'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
