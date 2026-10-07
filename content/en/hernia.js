// Inguinal hernia — all wording shown on the hernia chapter.
export default {
  title: 'Inguinal hernia',

  embryology: {
    intro:
      'As the testicle moves down from the belly before birth, it pulls a thin pouch of belly lining with it. Normally the top of this pouch closes. In a child with an inguinal hernia, it stays wide open, so intestine can slide into the groin or scrotum. Girls have the same pouch and can get hernias too. In girls, the ovary can slide in.',
    outcomeLabel: 'What happens to the pouch',
  },

  pathology: {
    intro:
      'A hernia shows up as a bulge in the groin or scrotum. It often appears with crying, coughing or straining, and goes away when the child is calm or lying down. Hernias are more common in babies born early.',
    stateLabel: 'Intestine',
    states: {
      in: { name: 'In the belly', text: 'When the child is relaxed, the intestine stays in the belly and there may be no bulge.' },
      out: { name: 'Slides down', text: 'With crying or straining, intestine slides into the open pouch, making a soft bulge that can be gently pushed back.' },
      stuck: { name: 'Stuck', text: 'This is an incarcerated hernia, and it is an emergency. The intestine gets trapped and cannot go back. The bulge is hard and painful, and the child may vomit. Blood flow to the intestine, and to the testicle or ovary, can be cut off.' },
    },
    light: 'Shine a light',
    lightText: 'Intestine does not let light through the way fluid does, which helps tell a hernia from a hydrocele.',
  },

  treatment: {
    intro:
      'Hernias do not close on their own in children. Surgery is scheduled soon after diagnosis to prevent the intestine from getting stuck. It only becomes urgent if the hernia gets stuck.',
    pros: 'Benefits',
    cons: 'Things to consider',
    options: {
      reduce: {
        name: 'Pushing it back',
        summary:
          'If the intestine gets stuck, a doctor gently squeezes it back into the belly, sometimes after medicine to help the child relax. Because it was stuck, surgery is then planned within the next day or two. If it will not go back, or blood flow is cut off, emergency surgery is needed.',
        action: 'Gently push back',
        pros: ['Relieves the emergency', 'Allows surgery to be planned safely'],
        cons: ['Can be uncomfortable', 'Does not always work', 'Surgery is still needed'],
      },
      open: {
        name: 'Open hernia repair',
        summary:
          'Through a small cut in the groin crease, the surgeon finds the open pouch and ties it off at the top so nothing can slide down again.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Fixes it for good', 'Usually home the same day', 'Small scar in the skin crease'],
        cons: ['General anesthesia', 'Rarely comes back (about 1 in 100)', 'Babies born early may need to stay overnight to watch their breathing'],
      },
      laparoscopic: {
        name: 'Laparoscopic repair',
        summary:
          'A small camera through the belly button lets the surgeon close the opening from the inside. The surgeon can also check the other side and close it if it is open.',
        before: 'Before',
        after: 'After surgery',
        pros: ['Can check and fix both sides', 'Very small cuts'],
        cons: ['General anesthesia', 'Not used for every child'],
      },
    },
  },

  takeaways: {
    points: [
      'An inguinal hernia is an open pouch that lets intestine slide into the groin or scrotum.',
      'It does not go away on its own in children.',
      'Surgery to tie off the pouch is recommended soon after diagnosis.',
      'A stuck hernia is an emergency.',
    ],
    callTitle: 'Go to the emergency room right away for',
    call: [
      'A bulge that is hard, painful, red, or will not go back in',
      'A bulge with vomiting, fussiness that will not stop, or a swollen belly',
    ],
    planTitle: 'Our plan',
    planHint: 'Type notes here before printing (not saved).',
  },
};
