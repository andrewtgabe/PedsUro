// Extrofia vesical y epispadias — todo el texto de este capítulo.
export default {
  title: 'Extrofia vesical y epispadias',

  sexLabel: 'Niño o niña',
  sexes: { boy: 'Niño', girl: 'Niña' },

  labels: {
    plate: 'Vejiga abierta',
    halves: 'Mitades de la vejiga',
    bowel: 'Intestino',
    omphalocele: 'Onfalocele',
    navel: 'Ombligo',
    pubic: 'Huesos del pubis',
    epispadias: 'Uretra abierta',
    neck: 'Cuello de la vejiga',
    spt: 'Tubo de la vejiga',
    stents: 'Tubos de los riñones (stents)',
    cast: 'Yeso',
    osteotomy: 'Corte del hueso',
    pelvicFloor: 'Músculos del piso pélvico',
    rectus: 'Músculos de la pared de la barriga',
    wrap: 'Plástico protector',
  },

  embryology: {
    intro:
      'La extrofia vesical y el epispadias son un grupo de condiciones poco comunes que ocurren muy temprano en el embarazo, alrededor de la 4.ª semana. La pared baja de la barriga no se cierra de la forma usual, así que la vejiga o la uretra quedan abiertas por fuera. Elija un tipo para comparar.',
    typeLabel: 'Tipo',
    types: { typical: 'Típico', epispadias: 'Epispadias', exstrophy: 'Extrofia vesical', cloacal: 'Extrofia de cloaca' },
    texts: {
      typical: 'La vejiga está cerrada dentro de la barriga, detrás de los huesos del pubis. La uretra es un tubo cerrado que saca la orina.',
      epispadias:
        'Epispadias: la vejiga está cerrada, pero la uretra está abierta como una canaleta en la parte de arriba del pene, o entre las dos mitades del clítoris. Los huesos del pubis pueden estar un poco separados.',
      exstrophy:
        'Extrofia vesical: la vejiga está abierta y plana sobre la parte baja de la barriga, así que la orina gotea todo el tiempo. Los huesos del pubis están muy separados, el ombligo está bajo y también hay epispadias.',
      cloacal:
        'Extrofia de cloaca: el tipo más grave. Una parte del intestino está abierta entre dos mitades de la vejiga. Los bebés a menudo también tienen un onfalocele (órganos de la barriga en un saco en el ombligo), no tienen una abertura normal para la popó y tienen un problema en la columna.',
    },
    often: {
      typical: '',
      epispadias: 'El epispadias solo, en niños, ocurre en cerca de 1 de cada 100,000 nacimientos. Algunos niños no se diagnostican hasta que se planea una circuncisión.',
      exstrophy: 'La extrofia vesical ocurre en cerca de 1 de cada 50,000 bebés y es más común en niños. Los riñones casi siempre son normales y otras partes del cuerpo casi nunca están afectadas.',
      cloacal: 'La extrofia de cloaca es muy rara, cerca de 1 de cada 300,000 bebés, y necesita un equipo grande de especialistas.',
    },
    cause: 'No se sabe la causa exacta. No es causada por nada que hicieron los padres. Los genes pueden tener un papel pequeño.',
  },

  pathology: {
    intro: 'En la extrofia vesical, la vejiga está abierta por fuera de la parte baja de la barriga al nacer. Así se ve la parte baja de la barriga de un recién nacido con extrofia vesical. Muestre u oculte los huesos y cambie entre niño y niña.',
    bonesLabel: 'Mostrar los huesos del pubis',
    featuresTitle: 'Lo que ve el médico',
    features: [
      'La vejiga está abierta en la parte baja de la barriga. Se ve su capa interna y las dos aberturas por donde llega la orina de los riñones.',
      'La orina gotea todo el tiempo.',
      'El ombligo está más abajo de lo usual.',
      'Los huesos del pubis al frente están muy separados y las caderas están giradas hacia afuera.',
      'La abertura de la popó (ano) está un poco más adelante de lo usual.',
      'El músculo de la vejiga puede ser más rígido y pequeño de lo usual. Puede crecer una vez que se cierra.',
    ],
    genital: {
      boy: 'En los niños, el pene es más corto y ancho, y la uretra está abierta por arriba (epispadias). El pene puede curvarse hacia arriba.',
      girl: 'En las niñas, el clítoris está dividido en dos mitades, los labios están separados y la abertura de la vagina está más adelante y puede ser estrecha.',
    },
    findTitle: 'Cómo se encuentra y se evalúa',
    find: [
      'Cerca de la mitad de los casos se ven en un ultrasonido del embarazo, cuando no se ve la vejiga llenarse. Una resonancia fetal puede ayudar a confirmarlo.',
      'Después del nacimiento: un ultrasonido de los riñones y una radiografía de la pelvis para ver qué tan separados están los huesos.',
      'Un ultrasonido o resonancia de la columna si hay señales de un problema en la columna. Esto siempre se hace en la extrofia de cloaca.',
      'Para el epispadias solo, se revisan el cuello de la vejiga y el esfínter antes de la reparación.',
    ],
  },

  treatment: {
    intro:
      'Los objetivos son cerrar la vejiga, proteger los riñones, reconstruir los genitales y ayudar a que su hijo o hija se mantenga seco. El cuidado se da en un centro con un equipo con experiencia en extrofia. Hay más de una buena forma de hacerlo, y la mayoría de los niños necesitan más de una cirugía.',
    pros: 'Beneficios',
    cons: 'Para tener en cuenta',
    options: {
      newborn: {
        name: 'Cuidado del recién nacido',
        summary: 'Antes de la cirugía, la vejiga abierta debe protegerse para que se mantenga sana.',
        tips: [
          'El cordón se amarra con un hilo en lugar de una pinza de plástico, para que no roce la vejiga.',
          'La vejiga se cubre con plástico protector o un vendaje de gel, que se cambia seguido. No con gasa.',
          'El cierre se hace en los primeros 3 días de vida, o más tarde, entre las 6 semanas y los 6 meses más o menos.',
          'Cuando la cirugía se planea para más tarde, el bebé muchas veces puede irse a casa con sus padres primero.',
        ],
        pros: ['Mantiene sana la capa interna de la vejiga', 'Esperar puede dar tiempo para crear lazos y amamantar'],
        cons: ['El plástico se debe cambiar seguido', 'La orina gotea hasta que se cierre la vejiga'],
      },
      staged: {
        name: 'Reparación por etapas',
        summary:
          'La reparación se hace en tres cirugías planeadas a lo largo de varios años. Cerrar la vejiga primero le permite empezar a llenarse, vaciarse y crecer.',
        steps: [
          'Antes de la cirugía: la vejiga está abierta y los huesos del pubis están muy separados.',
          'Etapa 1 (recién nacido o bebé pequeño): con su bebé dormido, se pueden cortar los huesos de la cadera (osteotomía) para juntar los huesos del pubis al frente.',
          'Se cierran la vejiga, el inicio de la uretra y la pared de la barriga. Unos tubos sacan la orina mientras sana.',
          'Su bebé se mantiene quieto por varias semanas, con yeso, tracción o un armazón, para que el cierre sane.',
          'Después de la etapa 1, la vejiga está cerrada pero la uretra sigue abierta (epispadias).',
          'Etapa 2 (de 6 a 12 meses más o menos): se reparan la uretra y el pene, para que la orina salga por la punta.',
          'Etapa 3 (de 4 a 5 años más o menos): se ajusta el cuello de la vejiga para ayudar a mantenerse seco, cuando la vejiga es lo bastante grande y el niño o niña está listo para aprender a ir al baño. A menudo también se cambian de lugar los uréteres.',
        ],
        pros: ['Cada paso tiene su propio objetivo', 'La vejiga tiene tiempo para crecer antes de la cirugía del cuello de la vejiga'],
        cons: ['Varias cirugías y estancias en el hospital', 'Aún puede necesitar más cirugía para mantenerse seco'],
      },
      cpre: {
        name: 'Reparación primaria completa',
        summary:
          'La vejiga, el cuello de la vejiga, la uretra y el pene o los genitales se reparan en una sola cirugía, por lo general en un bebé pequeño. Algunos niños aún necesitan más cirugía después.',
        steps: [
          'Antes de la cirugía: la vejiga está abierta y los huesos del pubis están muy separados.',
          'Con su bebé dormido, se pueden cortar los huesos de la cadera (osteotomía) para juntar los huesos del pubis.',
          'En una sola cirugía, se cierra la vejiga, se estrecha el cuello de la vejiga y se reparan la uretra y los genitales.',
          'Un tubo en la vejiga y tubos en los riñones (stents) sacan la orina mientras todo sana.',
          'Su bebé se mantiene quieto con yeso o tracción por varias semanas.',
          'Después de sanar: la vejiga está cerrada por dentro y la orina sale por el final de la uretra.',
        ],
        pros: ['Menos cirugías para algunos niños', 'La vejiga empieza a llenarse y vaciarse temprano'],
        cons: ['Una cirugía larga y compleja', 'Un riesgo poco común pero grave de lesión del pene', 'Muchos aún necesitan más cirugía para mantenerse secos'],
      },
      kelly: {
        name: 'Reparación de Kelly',
        summary:
          'Una reparación en una sola etapa que se hace más tarde en la infancia, sin cortar los huesos de la cadera. En lugar de mover los huesos, el cirujano separa los músculos del piso pélvico de los huesos y los envuelve alrededor de la uretra para que funcionen como un nuevo esfínter. Solo se hace en pocos centros.',
        steps: [
          'Antes de la cirugía: la vejiga está abierta y los huesos del pubis están muy separados.',
          'Con su bebé dormido, se separan de los huesos del pubis los músculos del piso pélvico y la base del pene o del clítoris. Se protegen con cuidado los nervios y los vasos sanguíneos.',
          'Se cierra la vejiga y se estrecha el cuello de la vejiga. Se cambian de lugar los uréteres para ayudar a evitar el reflujo.',
          'Los músculos separados se envuelven alrededor de la uretra. Esto funciona como un nuevo esfínter para ayudar a retener la orina.',
          'Los músculos de la pared de la barriga se juntan en el centro para cerrar la barriga sin tensión. Los huesos del pubis quedan separados, así que no se necesitan cortes de hueso.',
          'Se reconstruyen la uretra y el pene o los genitales. Unos tubos sacan la orina mientras todo sana.',
          'Después de sanar: la vejiga está cerrada por dentro y los huesos del pubis siguen separados.',
        ],
        pros: ['Sin cortes de hueso', 'Todo se hace en una sola cirugía', 'Reconstruye un músculo alrededor de la uretra para ayudar a mantenerse seco'],
        cons: ['Una cirugía muy larga y difícil', 'Un riesgo de perder parte del tejido del pene o del clítoris por falta de flujo de sangre', 'Hay menos información a largo plazo sobre mantenerse seco que con otras reparaciones'],
      },
      bones: {
        name: 'Huesos y mantenerse quieto',
        summary:
          'Juntar los huesos del pubis quita tensión al cierre de la barriga y coloca la vejiga profundo en la pelvis, donde los músculos pueden sostenerla.',
        steps: [
          'Los huesos del pubis están muy separados y las caderas están giradas hacia afuera.',
          'Con su hijo o hija dormido, se cortan los huesos de la cadera (osteotomía). Se hace al mismo tiempo que el cierre de la vejiga.',
          'Ahora los huesos pueden juntarse al frente.',
          'Los huesos del pubis se amarran con un punto fuerte y se cierra la barriga.',
          'Su hijo o hija se mantiene quieto por varias semanas con un yeso de cuerpo, tracción de las piernas o un armazón de metal (fijador) para que los huesos y el cierre sanen.',
        ],
        pros: ['Baja la probabilidad de que el cierre se abra', 'Sostiene la vejiga y el piso pélvico'],
        cons: ['Semanas de mantenerse quieto', 'Algunos adultos tienen diferencias en la cadera o al caminar más tarde'],
      },
      epispadias: {
        name: 'Reparación del epispadias',
        summary:
          'Para el epispadias solo, se reparan la uretra y el pene o el clítoris, por lo general entre los 6 y 12 meses. Primero se revisa el cuello de la vejiga. La mayoría de los niños con epispadias solo pueden mantenerse secos y orinar normalmente después de la reparación.',
        steps: [
          'Antes de la cirugía: la uretra está abierta por arriba.',
          'Primero se revisa el cuello de la vejiga, porque también puede estar débil.',
          'Con su hijo o hija dormido, la uretra se enrolla en forma de tubo y se juntan las partes del pene o del clítoris.',
          'Después de sanar: la orina sale por la punta y el pene está más derecho.',
        ],
        pros: ['Por lo general una sola cirugía', 'La mayoría puede mantenerse seco después'],
        cons: ['Se puede formar una pequeña abertura (fístula) que necesite reparación', 'Puede necesitar cirugía del cuello de la vejiga si sigue goteando'],
      },
      continence: {
        name: 'Mantenerse seco más adelante',
        summary:
          'Mantenerse seco toma tiempo. Los resultados varían mucho, y muchos niños necesitan más cirugía o una rutina con sonda. Su equipo dará seguimiento a su hijo o hija de por vida.',
        tips: [
          'La cirugía del cuello de la vejiga ajusta la salida para ayudar a retener la orina.',
          'Algunos niños vacían la vejiga con un tubo delgado (sonda), a veces por un pequeño canal cateterizable, muchas veces en el ombligo o la parte baja de la barriga.',
          'Algunos necesitan agrandar la vejiga con un pedazo de intestino (ampliación).',
          'Algunos niños se vuelven más secos al crecer, incluso en la adolescencia.',
        ],
        pros: ['Muchos niños pueden estar secos con el plan adecuado'],
        cons: ['A menudo más de una cirugía', 'Revisiones de por vida de los riñones y la vejiga'],
      },
    },
  },

  takeaways: {
    points: [
      'La extrofia vesical y el epispadias son condiciones poco comunes que ocurren muy temprano en el embarazo. No es culpa de los padres.',
      'En la extrofia vesical, la vejiga está abierta en la barriga, los huesos del pubis están separados y la uretra está abierta (epispadias).',
      'Los riñones casi siempre son normales. Protegerlos es un objetivo principal.',
      'La cirugía cierra la vejiga temprano en la vida, luego repara los genitales y ayuda a mantenerse seco. Hay más de una buena forma de hacerlo.',
      'La mayoría de los niños necesitan más de una cirugía y seguimiento de por vida con un equipo de extrofia.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre, u orina con mal olor o turbia',
      'Un tubo que deja de drenar, se sale o gotea mucho',
      'La herida se abre, o la vejiga se vuelve a ver',
      'Un yeso mojado, sucio o apretado, o dedos de los pies fríos o pálidos',
      'Un bulto nuevo en la ingle',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
