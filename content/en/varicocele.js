// Varicocele — all wording shown on the varicocele chapter.
export default {
  title: 'Varicocele',

  labels: {
    kidney: 'Kidney',
    ivc: 'Main vein',
    aorta: 'Main artery',
    renalVein: 'Kidney vein',
    leftVein: 'Left testicle vein',
    rightVein: 'Right testicle vein',
    testicle: 'Testicle',
    plexus: 'Vein cluster',
    left: 'Left',
    right: 'Right',
  },

  embryology: {
    intro:
      'A varicocele is a group of swollen veins above the testicle, a lot like varicose veins in the legs. Veins carry blood back to the heart and have tiny one-way valves to keep blood from flowing backward.',
    whyTitle: 'Why it is almost always on the left',
    why: [
      'The left testicle vein is longer and climbs straight up to the kidney vein.',
      'It joins the kidney vein at a right angle, which slows drainage.',
      'The kidney vein can be squeezed between two arteries, raising the pressure.',
    ],
    valvesLabel: 'Vein valves',
    valves: { working: 'Working', leaky: 'Leaky' },
    texts: {
      working: 'The valves keep blood moving up toward the heart.',
      leaky: 'When the valves leak, blood pools and flows backward. The veins above the testicle stretch and twist.',
    },
    note: 'Varicoceles usually show up around puberty. About 15 in 100 teen boys have one.',
  },

  pathology: {
    intro:
      'A varicocele often feels like a “bag of worms” above the testicle. It is usually painless, but some boys feel a dull ache, especially after standing or exercise.',
    gradeLabel: 'Size',
    grades: [
      { name: 'Tiny', text: 'Only seen on ultrasound. It cannot be felt.' },
      { name: 'Grade 1', text: 'Can be felt only when the boy bears down (like pushing to poop).' },
      { name: 'Grade 2', text: 'Can be felt while standing, but not seen.' },
      { name: 'Grade 3', text: 'Can be seen through the skin of the scrotum.' },
    ],
    strain: 'Bear down',
    strainText: 'Bearing down raises pressure in the belly and pushes more blood backward, so the veins swell more. This is how we check during the exam.',
    small: 'Testicle smaller',
    smallText:
      'The extra warm blood can keep the testicle from growing normally. A testicle that is much smaller than the other one (about 1/5 smaller) is a main reason to consider treatment.',
    whyTitle: 'Why it can matter',
    whyList: ['The testicle on that side may grow less', 'It may affect sperm and fertility later', 'Some boys have aching pain'],
  },

  treatment: {
    intro: 'Most teens with a varicocele only need check-ups. Treatment is considered for a testicle that is not growing, ongoing pain, or abnormal semen tests in older teens.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      watch: {
        name: 'Check-ups',
        summary: 'We measure both testicles about once a year, often with an ultrasound, to make sure the left one keeps growing.',
        pros: ['No procedure', 'Many boys never need treatment'],
        cons: ['Yearly visits until growth is done'],
      },
      surgery: {
        name: 'Varicocele surgery',
        summary:
          'The surgeon ties off the swollen veins, leaving the artery and lymph channels alone. This is done through a small cut in the groin using a microscope, or with a small camera through the belly.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Works well', 'Testicle often catches up in size', 'Usually home the same day'],
        cons: ['General anesthesia', 'Small chance of fluid around the testicle (hydrocele)', 'Can come back'],
      },
      embolization: {
        name: 'Embolization',
        summary:
          'A radiologist passes a thin tube through a vein in the groin or neck up to the testicle vein, then blocks it from the inside with tiny coils.',
        before: 'Before',
        after: 'After coils',
        pros: ['No surgical cut', 'Quick recovery'],
        cons: ['Uses X-ray', 'Not available everywhere', 'Can come back'],
      },
    },
  },

  takeaways: {
    points: [
      'A varicocele is a group of swollen veins above the testicle, usually on the left.',
      'It is common in teen boys and is usually painless.',
      'We watch that the testicle keeps growing normally.',
      'Surgery or embolization is used if the testicle is not growing or for pain.',
    ],
    callTitle: 'Call us if your child has',
    call: ['Pain that limits activity', 'A testicle that seems to be getting smaller', 'A new swelling on the right side, or one that does not go down when lying flat'],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
