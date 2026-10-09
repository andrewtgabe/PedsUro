// Testicular mass — all wording shown on the testicular mass chapter.
export default {
  title: 'Testicular mass',

  labels: {
    testicle: 'Testicle',
    mass: 'Mass',
    cord: 'Spermatic cord',
    scrotum: 'Scrotum',
    clamp: 'Soft clamp',
    prosthesis: 'Artificial testicle',
    germ: 'Germ cells',
    stromal: 'Support and hormone cells',
    para: 'Tissue around the testicle',
    covering: 'Outer covering',
    epididymis: 'Epididymis',
  },

  embryology: {
    intro:
      'A testicle has a few kinds of tissue. Tiny coiled tubes hold germ cells, which will make sperm after puberty. Support cells line the tubes, and hormone cells between the tubes make testosterone. A lump (mass) can grow from any of these tissues, or from the tissue around the testicle.',
    tissueLabel: 'Where a mass can start',
    tissues: {
      germ: {
        name: 'Germ cells',
        text: 'Germ cell tumors start here. In young children these are usually teratomas (almost always not cancer) or yolk sac tumors (a cancer). In teens they are like the germ cell tumors adults get, such as seminoma and non-seminoma.',
      },
      stromal: {
        name: 'Support and hormone cells',
        text: 'Stromal tumors start from the support cells (Sertoli) or hormone cells (Leydig), or are juvenile granulosa cell tumors in babies. In children they are usually not cancer. Some make hormones and can cause early signs of puberty.',
      },
      para: {
        name: 'Around the testicle',
        text: 'A mass can also start next to the testicle, in the cord or tissue around it (paratesticular). The most important of these in children is rhabdomyosarcoma, a cancer of muscle-type cells. Leukemia and lymphoma can also show up in the testicle.',
      },
    },
    ages: 'Testicular masses are rare in children. They show up most often in two age groups: babies and toddlers under about 3, and teens after puberty. The types are quite different in these two groups.',
    note: 'Nothing a parent did causes a testicular mass. A testicle that did not come down on its own (undescended) raises the chance of a germ cell tumor later in life.',
  },

  pathology: {
    intro:
      'A testicular mass is usually found as a painless lump or swelling. Many masses in young children are not cancer. In teens, most solid masses are cancer, but even then the cure rate is very high.',
    ageLabel: 'Age',
    typeLabel: 'Type',
    ages: {
      young: { name: 'Before puberty', types: ['teratoma', 'yolkSac', 'epidermoid', 'stromal', 'other'] },
      teen: { name: 'After puberty', types: ['gct', 'stromal', 'other'] },
    },
    types: {
      teratoma: {
        name: 'Teratoma',
        text: 'The most common testicular mass in young children. It grows from germ cells and can contain different kinds of tissue, sometimes with small fluid pockets. Blood tests (tumor markers) are normal for age.',
        verdict: 'Before puberty, almost always not cancer. Often the testicle can be saved.',
        cancer: false,
      },
      yolkSac: {
        name: 'Yolk sac tumor',
        text: 'The most common testicular cancer in young children, usually under 2 to 3 years old. It almost always raises a blood marker called AFP (alpha-fetoprotein), which helps with diagnosis and with checking for return later.',
        verdict: 'A cancer, but most are found early and cured. Many need only surgery and close check-ups.',
        cancer: true,
      },
      epidermoid: {
        name: 'Epidermoid cyst',
        text: 'A small, firm cyst filled with layers of skin-like material. On ultrasound it often looks like the rings of an onion. Tumor markers are normal.',
        verdict: 'Not cancer. The cyst can usually be removed and the testicle saved.',
        cancer: false,
      },
      stromal: {
        name: 'Stromal tumor',
        text: 'Grows from the support cells or hormone cells (Leydig, Sertoli, or juvenile granulosa cell tumors). Some make hormones, which can cause early puberty signs or breast growth.',
        verdict: 'In children, usually not cancer. Sometimes the testicle can be saved.',
        cancer: false,
      },
      gct: {
        name: 'Germ cell tumor',
        text: 'After puberty, testicular masses act like the ones in adults. Types include seminoma and non-seminoma (embryonal carcinoma, yolk sac tumor, choriocarcinoma, teratoma, or a mix). Blood markers AFP, hCG and LDH are checked.',
        verdict: 'Usually cancer, but very curable. The whole testicle is removed.',
        cancer: true,
      },
      other: {
        name: 'Other masses',
        text: 'Some masses start beside the testicle, such as paratesticular rhabdomyosarcoma, a cancer of muscle-type cells. Leukemia or lymphoma can also involve the testicle.',
        verdict: 'These need surgery to confirm, and often treatment with a cancer team.',
        cancer: true,
      },
    },
    testsTitle: 'Tests before surgery',
    tests: [
      'Ultrasound of the scrotum shows whether the mass is inside or beside the testicle, and if it looks solid or cystic.',
      'Blood tests (tumor markers): AFP, and in teens also hCG and LDH. AFP is normally high in babies under about 8 to 12 months, so results are compared with normal levels for age.',
      'Sometimes a scan of the belly and chest, to look for spread.',
    ],
  },

  treatment: {
    intro:
      'Almost every testicular mass is removed with surgery. The surgery is done through a cut in the groin, not the scrotum. This lets the surgeon control the cord first and keeps any tumor cells from spreading into the scrotum skin.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      partial: {
        name: 'Partial orchiectomy',
        summary:
          'Testis-sparing surgery: only the mass is removed, and the testicle is kept. It is an option mainly for children before puberty when the ultrasound looks like a non-cancer mass and the tumor markers are normal for age.',
        steps: [
          'The ultrasound shows a mass that looks like a non-cancer type, and the blood tumor markers are normal for age.',
          'With the child asleep, a cut is made in the groin crease.',
          'The spermatic cord is found in the groin and gently clamped near the top. This controls the blood vessels before the testicle is handled.',
          'The testicle is lifted up out of the scrotum into the groin cut.',
          'The covering is opened and the mass is removed with a small rim of normal tissue. A piece is checked under the microscope right away (frozen section) to confirm it is not cancer. The testicle is then closed with stitches.',
          'If the mass is not cancer, the clamp is removed and the testicle is put back in the scrotum. If cancer is found, the whole testicle is removed instead.',
          'The groin cut is closed. Most children go home the same day. Ultrasound check-ups follow.',
        ],
        pros: ['Keeps the testicle', 'Good results for non-cancer masses', 'Usually home the same day'],
        cons: ['Not safe for every mass', 'May change to removing the whole testicle during surgery', 'Ultrasound follow-up'],
      },
      radical: {
        name: 'Radical inguinal orchiectomy',
        summary:
          'The whole testicle and the spermatic cord, up to where it enters the belly, are removed through a groin cut. This is the standard surgery for a mass that may be cancer, and for most solid masses after puberty.',
        steps: [
          'The ultrasound or blood tumor markers suggest the mass may be cancer.',
          'With the child asleep, a cut is made in the groin crease.',
          'The spermatic cord is found and clamped high up, near where it enters the belly, before the testicle is handled.',
          'The testicle is lifted up out of the scrotum into the groin cut.',
          'The cord is tied off high up, and the testicle and cord are removed together. The scrotum is not cut.',
          'An artificial testicle (prosthesis) can be placed now or later so both sides look similar. Most children go home the same day.',
        ],
        pros: ['Removes the whole tumor', 'Gives the full diagnosis to plan next steps', 'The other testicle can still make hormones and sperm'],
        cons: ['Loss of one testicle', 'More treatment may be needed depending on the results'],
      },
      after: {
        name: 'After surgery',
        summary: 'Next steps depend on what the lab finds and whether there is any spread.',
        tips: [
          'Not cancer: usually only ultrasound check-ups.',
          'Cancer: scans of the belly and chest and repeat tumor markers show whether it has spread.',
          'Many children with a cancer found only in the testicle need only close check-ups (surveillance).',
          'Some need chemotherapy, or rarely more surgery, with a children’s cancer team.',
          'Teens should talk about saving sperm (sperm banking) before any chemotherapy, ideally before surgery.',
        ],
        pros: ['Very high cure rates', 'Most boys live normal lives with one testicle'],
        cons: ['Regular follow-up for several years'],
      },
    },
  },

  takeaways: {
    points: [
      'Testicular masses are rare in children and many in young children are not cancer.',
      'Most in teens are cancer, but they are very curable.',
      'Ultrasound and blood tumor markers help tell the type before surgery.',
      'Surgery is done through the groin, not the scrotum.',
      'Sometimes only the mass is removed and the testicle is kept. Otherwise the whole testicle is removed.',
      'Teens should check their testicles monthly once they reach puberty.',
    ],
    callTitle: 'Call us if your child has',
    call: [
      'A new lump, firmness or swelling in a testicle',
      'A testicle that grows larger or heavier',
      'After surgery: fever, or redness or swelling in the groin cut that keeps getting worse',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
