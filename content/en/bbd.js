// Daytime wetting & voiding dysfunction — all wording shown on that chapter.
// `labels` and `cycle` are shared with the neurogenic bladder chapter.
export default {
  title: 'Daytime wetting & voiding dysfunction',

  labels: {
    brain: 'Brain',
    cord: 'Spinal cord',
    bladder: 'Bladder',
    sphincter: 'Control muscle',
    poop: 'Poop',
    lesion: 'Signals blocked',
    augment: 'Added bowel',
    channel: 'Catheterizable channel',
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
      'Daytime wetting is common in school-age children. It is usually caused by bladder habits, not a disease, and it is not on purpose. Bladder and bowel problems often happen together. About 1 in 10 children aged 5 to 7 have daytime wetting, and it is more common in girls.',
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
        name: 'Muscle does not relax (dysfunctional voiding)',
        text: 'The control muscle tightens instead of relaxing while peeing. The stream starts and stops, and the bladder does not empty fully. Leftover urine raises the chance of infections.',
      },
      constipation: {
        name: 'Constipation',
        text: 'A large amount of poop in the bowel presses on the bladder and irritates its nerves. Treating constipation alone often fixes the wetting.',
      },
      vaginal: {
        name: 'Urine trapped in the vagina',
        text: 'In girls who sit with their legs close together, some urine flows back into the vagina while peeing. It then dribbles out after standing up, so underwear is damp right after the bathroom. Sitting far back with knees wide apart (or facing the back of the toilet) fixes it.',
      },
      giggle: {
        name: 'Leaking with laughing',
        text: 'Some children, mostly girls, leak a large amount of urine when they laugh hard (giggle incontinence). The bladder squeezes with laughter. It often gets better with age, and timed peeing or medicine can help.',
      },
    },
    bowelLink: 'See constipation care (clean-out, softener, toilet routine)',
    vaginalScene: { together: 'Knees together', stand: 'Stands up: dribbles', apart: 'Knees apart, sit back', pools: 'Urine pools' },
    signsTitle: 'Common signs',
    signs: ['Sudden urges, rushing to the bathroom', 'Damp underwear', 'Peeing fewer than 4 or more than 7 times a day', 'Holding maneuvers: crossing legs, squatting', 'Hard or infrequent poops', 'Urine infections'],
  },

  treatment: {
    intro: 'Most children get better with simple habit changes over a few months. The first step is usually a bladder and bowel diary.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      firstVisit: {
        name: 'At the first visit',
        summary: 'Most children need only a few simple checks. A uroflow test shows how the urine comes out. The shape of the curve points to the type of problem. Pick a pattern.',
        tips: [
          'A bladder and bowel diary for 2 to 3 days',
          'A urine test',
          'Uroflow: peeing into a special toilet that draws the stream',
          'A bladder scan right after peeing to see how much is left',
          'A check of the lower back and legs for signs of a spine problem',
          'An ultrasound of the kidneys and bladder in some children',
        ],
        patternLabel: 'Uroflow pattern',
        patterns: { bell: 'Bell curve', tower: 'Tower', staccato: 'Staccato', interrupted: 'Interrupted', plateau: 'Plateau' },
        meanings: {
          bell: 'A smooth, rounded curve. This is normal.',
          tower: 'A very fast, explosive stream (peak flow over 40). This is often seen with an overactive bladder that squeezes very hard.',
          staccato: 'Sharp peaks and dips, but the stream never stops. The control muscle is tightening while peeing (overactive sphincter).',
          interrupted: 'Separate bursts with no flow in between. The bladder squeezes weakly (underactive bladder), so the child strains to push urine out.',
          plateau: 'A long, slow, flat stream. Something may be narrowing the way out (blockage).',
        },
        chart: { title: 'Uroflow', time: 'Time', flow: 'Flow' },
        pros: ['Simple, painless tests', 'Shows which type of problem it is'],
        cons: ['The diary takes a few days at home', 'Come with a full bladder for uroflow'],
      },
      schedule: {
        name: 'Timed voiding',
        summary: 'Peeing on a schedule keeps the bladder from getting too full or rushing.',
        habits: ['Pee every 2–3 hours while awake (a watch alarm helps)', 'Pee before school, at lunch, after school, and before bed', 'Drink water through the day, especially at school', 'Sit fully on the toilet with feet supported and knees apart', 'Take time; do not push or rush'],
        pros: ['Safe and simple', 'Helps every type'],
        cons: ['Needs daily reminders', 'Takes weeks to months'],
      },
      biofeedback: {
        name: 'Pelvic floor therapy',
        summary: 'A therapist uses games and sensors to teach the child to relax the control muscle while peeing, so the bladder empties fully.',
        scene: { screen: 'Therapy screen', muscle: 'Control muscle', game: 'Relax to fly!', stickers: 'Stickers' },
        steps: [
          'Before: the control muscle tightens while peeing, so the stream stops and starts and urine is left behind.',
          'Small stickers on the skin near the bottom show the control muscle’s activity on a screen. Nothing goes inside the body.',
          'The child plays a game: relaxing the muscle makes the rocket fly. Tight muscle shows as a jumpy line.',
          'The child practices relaxing the muscle while peeing. The stream becomes smooth.',
          'After several visits and practice at home, the bladder empties all the way.',
        ],
        pros: ['Treats the cause of start-stop peeing', 'No medicine'],
        cons: ['Several visits', 'Needs practice at home'],
      },
      medicine: {
        name: 'Bladder-calming medicine',
        summary: 'Oxybutynin is the most common choice. It relaxes the bladder so it does not squeeze too early. Mirabegron is another option with fewer side effects. Constipation must be treated first, because these medicines can make it worse. Medicine is usually tried for a few months, then stopped to see if it is still needed, and used along with good habits.',
        dose: 'Medicine',
        pros: ['Fewer urges and accidents'],
        cons: ['Oxybutynin can cause constipation, dry mouth, or flushing', 'Habits still matter'],
      },
      more: {
        name: 'If habits are not enough',
        summary: 'For children still wetting after habits, constipation treatment and therapy, there are other options.',
        items: [
          'Nerve stimulation with sticky pads on the lower back (TENS), used at home',
          'Nerve stimulation with a tiny needle near the ankle (PTNS), done in clinic once a week',
          'An alpha-blocker medicine to help the control muscle relax when it will not relax on its own',
        ],
        pros: ['Helps some children who did not respond to other treatment'],
        cons: ['Takes weeks of regular sessions', 'Not available everywhere'],
      },
    },
  },

  takeaways: {
    points: [
      'Daytime wetting is common and is not on purpose.',
      'It is usually about bladder habits and constipation.',
      'The bladder and bowel are neighbors. A full, stretched rectum presses on the bladder and can cause urges, accidents, and infections.',
      'Constipation treatment starts with emptying the bowel, then a daily softener and toilet routine for several months.',
      'Accidents and soiling are not on purpose. Praise effort and never punish.',
      'Pee every 2–3 hours, drink water, and keep poops soft.',
      'Most children improve over a few months.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever, or pain when peeing', 'Constant dribbling (always wet, even right after peeing), which can be a sign of an <a href="#/duplex/pathology">ectopic ureter</a>', 'Weak stream or straining', 'Back pain, leg weakness, or new poop accidents'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
