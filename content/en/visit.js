// "Your visit" guide for parents and guardians.
export default {
  title: 'Your visit: what to expect',
  card: {
    title: 'New to pediatric urology? What to expect at your visit',
    body: 'What happens during the visit, which exams we may do, and how you can help your child feel comfortable.',
  },
  steps: {
    intro: 'Most visits follow the same five steps. Knowing them ahead of time helps you and your child feel ready.',
    names: ['Check in', 'Talk', 'Exam', 'Tests', 'Plan'],
    captions: [
      'Check in: we measure weight, height and sometimes blood pressure. We may ask for a urine sample, so ask us if your child should arrive ready to pee.',
      'Talk: the doctor asks about symptoms, peeing and pooping habits, and past tests or surgeries. Your child can answer too.',
      'Exam: a short exam, explained before we start. A parent or guardian stays in the room.',
      'Tests: some tests, like a urine test or bladder scan, can be done the same day. Others are scheduled for another day.',
      'Plan: we explain what we found and the next steps. This is a good time to ask your questions.',
    ],
    tipTitle: 'Good to know',
    tips: [
      'The doctor may ask your child questions directly. Let your child answer first, then add details.',
      'Write down your questions before the visit so you do not forget them.',
    ],
  },
  labels: { genital: 'Genital area', belly: 'Belly', bladder: 'Bladder', back: 'Lower back', dimple: 'Dimple?', cup: 'Urine cup', scan: 'Bladder scan' },
  exams: {
    intro: 'Exams are quick and gentle. We always explain what we will do before we touch, and a parent, guardian or staff chaperone is always in the room.',
    label: 'Exam',
    options: { genital: 'Genital exam', belly: 'Belly and back', urine: 'Urine test and bladder scan' },
    whatTitle: 'What happens',
    helpTitle: 'How you can help',
    what: {
      genital: [
        'The doctor looks at and gently feels the penis and testicles, or the outside of the labia.',
        'Your child may lie down, stand, or sit with knees bent out like a frog. This helps us find the testicles.',
        'It is an outside exam and takes a minute or two.',
      ],
      belly: [
        'The doctor gently presses on the belly to feel for a full bladder or hard stool (poop).',
        'We look at the lower back for a dimple, patch of hair or birthmark. These can be signs of a spine problem.',
        'We may watch your child walk and check the legs.',
      ],
      urine: [
        'Urine test: your child pees into a cup. Babies may wear a small bag, or a thin tube may be used to collect a clean sample.',
        'Uroflow: your child pees into a special toilet that measures the stream. Come with a full bladder if we ask.',
        'Bladder scan: after peeing, we put cool gel on the lower belly and use a small probe to see how much urine is left. It does not hurt.',
      ],
    },
    help: {
      genital: [
        'Sit near your child’s head and hold their hand.',
        'A young child can sit on your lap with legs apart.',
        'Use calm, simple words and the real names of body parts.',
      ],
      belly: [
        'Dress your child in loose, easy clothes.',
        'Help your child relax with slow belly breaths.',
        'Tell us about any changes in walking, peeing or pooping.',
      ],
      urine: [
        'Bring a water bottle so your child can drink while waiting.',
        'Ask before the visit if your child should hold their pee.',
        'Bring a diaper or a change of clothes, just in case.',
      ],
    },
  },
  help: {
    beforeTitle: 'Before the visit',
    before: [
      'Tell your child the doctor will talk with them and may look at their body. Be honest and keep it simple.',
      'Remind your child you will stay with them the whole time.',
      'Bring a favorite toy, blanket, show or game.',
    ],
    bringTitle: 'What to bring',
    bring: [
      'A list of your child’s medicines',
      'Reports or images from past tests done somewhere else',
      'A bladder or bowel diary, if we asked for one',
      'Your list of questions',
      'A drink, a snack, and a diaper or change of clothes',
    ],
    duringTitle: 'During the exam',
    during: [
      'Stay close, hold hands, and speak softly.',
      'Distract with a video or a song.',
      'Praise your child for being brave, even for small steps.',
    ],
    rightsTitle: 'Your child is in control',
    rights: [
      'A parent, guardian or staff chaperone is always in the room for genital exams.',
      'We explain each step before we touch.',
      'Your child can say “stop.” We will pause and try again only when they are ready.',
    ],
    rescheduleTitle: 'If your child is too upset',
    reschedule:
      'Some children are too scared or stressed to be examined, and that is okay. We will not force an exam. A forced exam is upsetting for your child and does not give us good information. Instead, we usually reschedule for another day. Practicing at home and bringing comfort items can help next time.',
  },
};
