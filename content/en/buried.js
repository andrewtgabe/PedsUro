// Buried penis — all wording shown on the buried penis chapter.
export default {
  title: 'Buried penis',

  labels: {
    fat: 'Fat pad',
    shaft: 'Shaft',
    glans: 'Head (glans)',
    scrotum: 'Scrotum',
    web: 'Web',
    anchor: 'Anchor stitches',
    flap: 'Skin flap',
    scar: 'Scar',
  },

  embryology: {
    intro:
      'With a buried penis, the penis is a normal size but is hidden under the skin and fat of the lower belly or scrotum. Pick a cause to see how it happens.',
    causeLabel: 'Cause',
    causes: { normal: 'Typical', fat: 'Fat pad', skin: 'Loose skin', web: 'Webbing', scar: 'Scar after circumcision' },
    texts: {
      normal: 'The skin of the penis is attached at the base, so the shaft stands out from the body.',
      fat: 'A thick pad of fat above the penis pushes forward and covers the shaft. This is common in babies and in children with extra weight.',
      skin: 'The skin is not well attached at the base of the penis, so it slides forward and covers the shaft.',
      web: 'Skin from the scrotum reaches up the underside of the penis like a web, pulling it down and hiding it.',
      scar: 'After a circumcision, the skin can heal into a tight scar ring that traps the penis under the skin (trapped penis).',
    },
    note: 'Often more than one cause is present. It is not caused by anything parents did wrong. A buried penis is a reason not to circumcise a newborn, because circumcision can make it worse.',
  },

  pathology: {
    intro: 'With a buried penis, the penis is a normal size but is hidden under fat or skin. The cause can be a fat pad, loose skin, webbing to the scrotum, or a scar (see Why it happens). Slide to press gently on the fat pad, like the doctor does during the exam. The full penis is there, just hidden.',
    pressLabel: 'Pressing on the fat pad',
    pressTicks: ['None', 'Firm'],
    hidden: 'Only the tip shows. The penis looks small, but its length is normal.',
    pressed: 'Pressing back the fat shows the full length of the shaft. This is how a buried penis is told apart from a truly small penis.',
    signsTitle: 'What families may notice',
    signs: [
      'The penis looks small or hard to see',
      'Urine sprays or dribbles, or the skin balloons when peeing',
      'Hard to keep clean; redness, swelling or infection of the skin',
      'Trouble aiming or needing to sit to pee',
      'Older children may feel embarrassed',
    ],
  },

  treatment: {
    intro: 'Many babies improve as they grow and baby fat goes away. Surgery is considered when the buried penis causes problems or does not improve.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Watch and care',
        summary: 'If there are no problems, the doctor may wait and see how it changes with growth.',
        tips: [
          'Gently clean the area at bath time',
          'Do not force the skin back',
          'In older children, healthy weight can make the penis easier to see',
        ],
        pros: ['No surgery', 'Many improve with growth'],
        cons: ['May not improve if the cause is skin or scarring', 'Problems like infections may continue'],
      },
      penoplasty: {
        name: 'Circumcision with penoplasty',
        summary:
          'The surgeon frees the skin from the shaft, anchors it at the base so it cannot slide forward again, and rotates flaps of skin to cover the shaft. Usually done with the child asleep, and most go home the same day.',
        steps: [
          'Before surgery: the fat pad and loose skin hide most of the shaft.',
          'The child is asleep (general anesthesia). The fat pad is pushed back and a cut line is marked just below the head of the penis.',
          'The skin is slid back off the shaft like taking off a sleeve, and tight bands of tissue holding the penis down are released.',
          'Stitches anchor the skin to the base of the penis on the top and the bottom, so the skin cannot slide forward again.',
          'Flaps of skin are rotated around the shaft to cover it, including the underside.',
          'The extra foreskin is removed (circumcision), and the edges are closed with dissolving stitches. Any webbing is fixed at the same time.',
          'A soft dressing is placed. Swelling and bruising are normal for a few weeks.',
          'After healing, the penis sits out from the body and is easier to see and keep clean.',
        ],
        pros: ['Shows the penis’s full length', 'Makes peeing and cleaning easier', 'Anchoring lowers the chance it gets buried again'],
        cons: ['Swelling and bruising for several weeks', 'Sometimes a second surgery is needed', 'Extra weight can bury it again'],
      },
      scrotoplasty: {
        name: 'Scrotoplasty (web repair)',
        summary:
          'For webbing, the surgeon cuts across the web side to side and closes it up and down. This frees the underside of the penis and makes a clear angle between the penis and scrotum. It can be done alone or with penoplasty.',
        steps: [
          'Scrotal skin reaches up the underside of the penis like a web.',
          'With the child asleep, a line is marked across the web, side to side.',
          'The web is cut along that line. The opening spreads into a diamond as the penis lifts up.',
          'The diamond is closed up and down with dissolving stitches. This makes the skin longer under the penis.',
          'The penis and scrotum are now separate, with a clear angle between them.',
        ],
        pros: ['Short procedure', 'Frees the underside of the penis', 'Can be combined with other repairs'],
        cons: ['Swelling for a few weeks', 'The web can come back if the skin tightens as it heals'],
      },
    },
  },

  takeaways: {
    points: [
      'A buried penis is normal in size but hidden under fat or skin.',
      'Causes include a fat pad, loose skin, webbing to the scrotum, or a scar after circumcision.',
      'Newborns with a buried penis should not be circumcised.',
      'Many babies improve with growth; surgery helps when there are problems.',
      'Penoplasty anchors and rotates the skin; scrotoplasty fixes webbing.',
    ],
    callTitle: 'Call us or get seen if your child has',
    call: ['Fever, or spreading redness or swelling', 'Not able to pee, or only dribbles', 'Bleeding that does not stop after surgery'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
