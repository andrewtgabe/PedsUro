// Bladder exstrophy and epispadias — all wording shown on this chapter.
export default {
  title: 'Bladder exstrophy & epispadias',

  sexLabel: 'Child',
  sexes: { boy: 'Boy', girl: 'Girl' },

  labels: {
    plate: 'Open bladder',
    halves: 'Bladder halves',
    bowel: 'Bowel',
    omphalocele: 'Omphalocele',
    navel: 'Belly button',
    pubic: 'Pubic bones',
    epispadias: 'Open urethra',
    neck: 'Bladder neck',
    spt: 'Bladder tube',
    stents: 'Kidney tubes (stents)',
    cast: 'Cast',
    osteotomy: 'Bone cut',
    wrap: 'Plastic wrap',
  },

  embryology: {
    intro:
      'Bladder exstrophy and epispadias are a group of rare conditions that happen very early in pregnancy, around the 4th week. The lower belly wall does not close the usual way, so the bladder or urethra stays open on the outside. Pick a type to compare.',
    typeLabel: 'Type',
    types: { typical: 'Typical', epispadias: 'Epispadias', exstrophy: 'Bladder exstrophy', cloacal: 'Cloacal exstrophy' },
    texts: {
      typical: 'The bladder is closed inside the belly, behind the pubic bones. The urethra is a closed tube that carries urine out.',
      epispadias:
        'Epispadias: the bladder is closed, but the urethra is open like a gutter on the top side of the penis, or between the two halves of the clitoris. The pubic bones may be a little apart.',
      exstrophy:
        'Bladder exstrophy: the bladder is open and lies flat on the lower belly, so urine drips out all the time. The pubic bones are wide apart, the belly button is low, and there is also epispadias.',
      cloacal:
        'Cloacal exstrophy: the most severe type. Part of the bowel is open between two halves of the bladder. Babies often also have an omphalocele (belly organs in a sac at the belly button), no normal bottom opening, and a spine problem.',
    },
    often: {
      typical: '',
      epispadias: 'Epispadias alone in boys happens in about 1 in 100,000 births. Some boys are not found until a circumcision is planned.',
      exstrophy: 'Bladder exstrophy happens in about 1 in 50,000 babies and is more common in boys. The kidneys are usually normal, and other body systems are usually not affected.',
      cloacal: 'Cloacal exstrophy is very rare, about 1 in 300,000 babies, and needs a large team of specialists.',
    },
    cause: 'The exact cause is not known. It is not caused by anything the parents did. Genes may play a small role.',
  },

  pathology: {
    intro: 'This is what the lower belly looks like in a newborn with bladder exstrophy. Turn the bones on or off and switch between boy and girl.',
    bonesLabel: 'Show the pubic bones',
    featuresTitle: 'What the doctor sees',
    features: [
      'The bladder is open on the lower belly. You can see its inside lining and the two openings where urine comes in from the kidneys.',
      'Urine drips out all the time.',
      'The belly button sits lower than usual.',
      'The pubic bones in front are wide apart, and the hips are turned out.',
      'The bottom opening (anus) sits a little more forward than usual.',
      'The bladder muscle may be stiffer and smaller than usual. It can grow once it is closed.',
    ],
    genital: {
      boy: 'In boys, the penis is shorter and wider, and the urethra is open on top (epispadias). The penis may curve up.',
      girl: 'In girls, the clitoris is split into two halves, the labia are apart, and the vaginal opening is more forward and can be narrow.',
    },
    findTitle: 'How it is found and checked',
    find: [
      'About half of cases are seen on a pregnancy ultrasound, when no bladder is seen filling. A fetal MRI can help confirm it.',
      'After birth: a kidney ultrasound and a pelvis X-ray to see how far apart the bones are.',
      'A spine ultrasound or MRI if there are signs of a spine problem. This is always done in cloacal exstrophy.',
      'For epispadias alone, the bladder neck and sphincter are checked before repair.',
    ],
  },

  treatment: {
    intro:
      'The goals are to close the bladder, protect the kidneys, rebuild the genitals, and help your child stay dry. Care happens at a center with an experienced exstrophy team. There is more than one good way to do it, and most children need more than one surgery.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      newborn: {
        name: 'Newborn care',
        summary: 'Before surgery, the open bladder needs to be protected so it stays healthy.',
        tips: [
          'The cord is tied with a stitch instead of a plastic clamp, so it does not rub the bladder.',
          'The bladder is covered with plastic wrap or a gel dressing, changed often. Not gauze.',
          'Closure is done in the first 3 days of life, or later, between about 6 weeks and 6 months.',
          'When surgery is planned for later, the baby can often go home with parents first.',
        ],
        pros: ['Keeps the bladder lining healthy', 'Waiting can allow time for bonding and breastfeeding'],
        cons: ['Wrap must be changed often', 'Urine leaks until the bladder is closed'],
      },
      staged: {
        name: 'Staged repair',
        summary:
          'The repair is done in three planned surgeries over several years. Closing the bladder first lets it start to fill, empty and grow.',
        steps: [
          'Before surgery: the bladder is open and the pubic bones are wide apart.',
          'Stage 1 (newborn or young baby): with your baby asleep, the hip bones may be cut (osteotomy) so the pubic bones can be pulled together in front.',
          'The bladder, the start of the urethra, and the belly wall are closed. Tubes drain urine while it heals.',
          'Your baby is kept still for several weeks, in a cast, traction, or a frame, so the closure heals.',
          'After stage 1, the bladder is closed but the urethra is still open (epispadias).',
          'Stage 2 (about 6 to 12 months): the urethra and penis are repaired, so urine comes out at the tip.',
          'Stage 3 (about 4 to 5 years): the bladder neck is tightened to help with staying dry, once the bladder is big enough and the child is ready to toilet train. The ureters are often moved too.',
        ],
        pros: ['Each step has its own goal', 'The bladder has time to grow before the bladder neck surgery'],
        cons: ['Several surgeries and hospital stays', 'More surgery may still be needed to stay dry'],
      },
      cpre: {
        name: 'Complete primary repair',
        summary:
          'The bladder, bladder neck, urethra, and penis or genitals are repaired in one surgery, usually in a young baby. Some children still need more surgery later.',
        steps: [
          'Before surgery: the bladder is open and the pubic bones are wide apart.',
          'With your baby asleep, the hip bones may be cut (osteotomy) so the pubic bones can be brought together.',
          'In one surgery, the bladder is closed, the bladder neck is narrowed, and the urethra and genitals are repaired.',
          'A bladder tube and kidney tubes (stents) drain urine while everything heals.',
          'Your baby is kept still in a cast or traction for several weeks.',
          'After healing: the bladder is closed inside and urine comes out at the end of the urethra.',
        ],
        pros: ['Fewer surgeries for some children', 'The bladder starts to fill and empty early'],
        cons: ['A long, complex surgery', 'A rare but serious risk of injury to the penis', 'Many still need more surgery to stay dry'],
      },
      bones: {
        name: 'Bones and keeping still',
        summary:
          'Bringing the pubic bones together takes tension off the belly closure and puts the bladder deep in the pelvis, where the muscles can support it.',
        steps: [
          'The pubic bones are wide apart, and the hips are turned out.',
          'With your child asleep, the hip bones are cut (osteotomy). This is done at the same time as the bladder closure.',
          'The bones can now swing together in front.',
          'The pubic bones are tied together with a strong stitch and the belly is closed.',
          'Your child is kept still for several weeks in a body cast, leg traction, or a metal frame (fixator) so the bones and closure heal.',
        ],
        pros: ['Lowers the chance the closure opens up', 'Supports the bladder and pelvic floor'],
        cons: ['Weeks of being kept still', 'Some adults have hip or walking differences later'],
      },
      epispadias: {
        name: 'Epispadias repair',
        summary:
          'For epispadias alone, the urethra and penis or clitoris are repaired, usually around 6 to 12 months. The bladder neck is checked first. Most children with epispadias alone are able to stay dry and pee normally after repair.',
        steps: [
          'Before surgery: the urethra is open on top.',
          'First, the bladder neck is checked, because it can also be weak.',
          'With your child asleep, the urethra is rolled into a tube and the penis or clitoris is brought together.',
          'After healing: urine comes out at the tip, and the penis is straighter.',
        ],
        pros: ['Usually one surgery', 'Most can stay dry afterward'],
        cons: ['A small opening (fistula) can form and need repair', 'Bladder neck surgery may be needed if leaking continues'],
      },
      continence: {
        name: 'Staying dry later',
        summary:
          'Staying dry takes time. Results vary a lot, and many children need more surgery or a catheter routine. Your team will follow your child for life.',
        tips: [
          'Bladder neck surgery tightens the outlet to help hold urine.',
          'Some children empty the bladder with a thin tube (catheter), sometimes through a small channel in the belly button.',
          'Some need a bladder made bigger with a piece of bowel (augmentation).',
          'Some children become drier as they grow, even in the teen years.',
        ],
        pros: ['Many children can be dry with the right plan'],
        cons: ['Often more than one surgery', 'Lifelong check-ups for kidneys and bladder'],
      },
    },
  },

  takeaways: {
    points: [
      'Bladder exstrophy and epispadias are rare conditions that happen very early in pregnancy. It is not the parents’ fault.',
      'In bladder exstrophy, the bladder is open on the belly, the pubic bones are apart, and the urethra is open (epispadias).',
      'The kidneys are usually normal. Protecting them is a main goal.',
      'Surgery closes the bladder early in life, then repairs the genitals and helps with staying dry. There is more than one good approach.',
      'Most children need more than one surgery, and lifelong follow-up with an exstrophy team.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: [
      'Fever, or pee that smells bad or is cloudy',
      'A tube that stops draining, falls out, or leaks a lot',
      'The wound opening up, or the bladder showing again',
      'A wet, dirty, or tight cast, or cold or pale toes',
      'A new bulge in the groin',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
