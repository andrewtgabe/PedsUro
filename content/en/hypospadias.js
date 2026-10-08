// Hypospadias / epispadias — all wording shown on that chapter.
export default {
  title: 'Hypospadias',

  labels: {
    glans: 'Head (glans)',
    shaft: 'Shaft',
    opening: 'Pee opening',
    hood: 'Hooded foreskin',
    scrotum: 'Scrotum',
    groove: 'Open groove',
    fistula: 'Small leak',
    graft: 'Foreskin tissue',
  },

  embryology: {
    intro:
      'Early in pregnancy, the urethra starts as an open groove on the underside of the penis. Between about weeks 8 and 14, the edges of the groove close like a zipper, from the base toward the tip. The foreskin forms around the head at the same time.',
    stageLabel: 'Zipping closed',
    stages: [
      { name: 'Week 8', opening: 1, text: 'The groove is open along the whole underside.' },
      { name: 'Week 10', opening: 0.65, text: 'The groove starts closing from the base, forming the tube of the urethra.' },
      { name: 'Week 12', opening: 0.3, text: 'The zipper keeps moving toward the tip.' },
      { name: 'Week 14', opening: 0, text: 'The urethra is closed all the way and opens at the tip. The foreskin covers the head all around.' },
    ],
    stopTitle: 'If the zipper stops early',
    stopText:
      'The opening ends up on the underside instead of the tip. This is hypospadias. The foreskin often does not close underneath, so it looks like a hood on top. The penis may also bend downward. It happens in about 1 in 200 to 300 boys, and nobody caused it.',
  },

  pathology: {
    intro: 'Hypospadias is described by where the opening is, and whether the penis is curved.',
    whereLabel: 'Where is the opening?',
    where: {
      distal: { name: 'Near the tip', opening: 0.2, text: 'The most common type (about 7 in 10). Often only a small difference in how it looks and how urine sprays.' },
      mid: { name: 'Middle of shaft', opening: 0.55, text: 'Less common. The stream points down, and the penis is more likely to bend.' },
      proximal: { name: 'Near the scrotum', opening: 0.95, text: 'The least common type. Usually has more bend, and may be checked for other differences in development.' },
      epispadias: { name: 'On top (epispadias)', opening: 0.6, top: true, text: 'Epispadias is a rare, different condition: the opening is on the top side and the penis may bend upward. It often happens with bladder exstrophy and is repaired differently.' },
    },
    curve: 'Bend (chordee)',
    curveText: 'Tight tissue on the underside can make the penis bend downward, often more noticeable with erections.',
    pee: 'Peeing',
    peeText: 'With the opening farther back, urine sprays downward, which can make standing to pee hard later on.',
    noteTitle: 'Important for families',
    note: 'Babies with hypospadias should not be circumcised at birth. The foreskin is often used in the repair.',
  },

  treatment: {
    intro:
      'Surgery is usually done between 6 and 18 months of age. The goals are a straight penis, an opening at the tip, a normal stream, and a typical look.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      repair: {
        name: 'Hypospadias repair',
        summary:
          'For openings closer to the tip without much bend, this is usually one surgery. The surgeon straightens any small bend, rolls the open groove into a tube to make a new urethra out to the tip, and closes the skin. The foreskin is either removed (circumcised look) or rebuilt. A small tube (stent) often drains urine into the diaper for about a week.',
        before: 'Before',
        after: 'After repair',
        pee: 'Peeing',
        pros: ['Opening at the tip and a straight stream', 'Straightens the penis', 'Usually one surgery for openings near the tip'],
        cons: ['General anesthesia', 'Dressing and stent care for about a week'],
      },
      staged: {
        name: 'Staged repair',
        summary:
          'Openings farther back, and cases with more bend, are usually fixed in two surgeries. In the first, the strip of tissue on the underside (the urethral plate) is cut across so the penis can be fully straightened, and foreskin tissue is moved to the underside, either still attached to its blood supply (a flap) or as a graft. In the second surgery, usually about 6 months later, that tissue is rolled into a new urethra out to the tip.',
        steps: [
          'Before: the opening is near the scrotum, the penis bends downward, and the foreskin sits like a hood on top.',
          'Stage 1: the strip of tissue on the underside (the urethral plate) is cut across, letting the penis straighten fully.',
          'Foreskin tissue is moved to the underside, either still attached to its blood supply (a flap) or as a graft. It will become the lining of the new urethra.',
          'Over about 6 months, the moved tissue heals and becomes healthy, stretchy lining.',
          'Stage 2: the healed tissue is rolled into a tube to make a new urethra out to the tip of the penis.',
          'The skin is closed over the new urethra. A small tube (stent) drains urine into the diaper for about a week.',
          'Result: a straight penis with the opening at the tip and a straight stream.',
        ],
        pros: ['Fully straightens a bigger bend', 'Builds a longer new urethra with healthy tissue'],
        cons: ['Two surgeries, usually about 6 months apart', 'Higher chance of problems like a fistula than one-stage repairs'],
      },
      complications: {
        name: 'Possible problems later',
        summary:
          'Most repairs heal well. Sometimes a small hole forms along the repair (fistula), so urine leaks from two places. The new opening can also narrow, or the repair can come apart. These happen in about 1 in 10 repairs near the tip, and more often for openings farther back. They can usually be fixed with another surgery.',
        fistula: 'Show a fistula',
        pros: ['Most problems are fixable'],
        cons: ['A second surgery may be needed', 'Check-ups through puberty'],
      },
      watch: {
        name: 'No surgery',
        summary:
          'For some very mild cases near the tip with no bend, families may choose not to have surgery. The child can usually pee and will have normal function.',
        pros: ['No surgery or anesthesia'],
        cons: ['Stream may spray downward', 'Appearance differs'],
      },
    },
  },

  takeaways: {
    points: [
      'In hypospadias, the pee opening is on the underside instead of the tip.',
      'It happens before birth when the urethra does not finish closing.',
      'Do not circumcise at birth; the foreskin may be used for the repair.',
      'Surgery is usually done between 6 and 18 months of age.',
      'Most repairs work well. Some children need another surgery later.',
    ],
    callTitle: 'Call us or get seen after surgery for',
    call: ['Fever, or redness and swelling that keeps getting worse', 'No urine coming out for several hours', 'The stent falls out early or bleeding that does not stop'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
