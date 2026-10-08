// Hipospadias / epispadias — textos del capítulo en español.
export default {
  title: 'Hipospadias',

  labels: {
    glans: 'Cabeza (glande)',
    shaft: 'Tronco',
    opening: 'Orificio para orinar',
    hood: 'Prepucio en capucha',
    scrotum: 'Escroto',
    groove: 'Surco abierto',
    fistula: 'Pequeña fuga',
    graft: 'Tejido del prepucio',
    tape: 'Cinta de silicona',
  },

  embryology: {
    intro:
      'Al principio del embarazo, la uretra empieza como un surco abierto en la parte de abajo del pene. Entre las semanas 8 y 14, más o menos, los bordes del surco se cierran como un cierre (zíper), desde la base hacia la punta. El prepucio se forma alrededor de la cabeza al mismo tiempo.',
    stageLabel: 'Se cierra el zíper',
    stages: [
      { name: 'Semana 8', opening: 1, text: 'El surco está abierto en toda la parte de abajo.' },
      { name: 'Semana 10', opening: 0.65, text: 'El surco empieza a cerrarse desde la base y forma el tubo de la uretra.' },
      { name: 'Semana 12', opening: 0.3, text: 'El zíper sigue avanzando hacia la punta.' },
      { name: 'Semana 14', opening: 0, text: 'La uretra está cerrada por completo y se abre en la punta. El prepucio cubre la cabeza por todos lados.' },
    ],
    stopTitle: 'Si el zíper se detiene antes',
    stopText:
      'El orificio queda en la parte de abajo en lugar de en la punta. Esto es el hipospadias. Muchas veces el prepucio no se cierra por abajo, así que se ve como una capucha arriba. El pene también se puede doblar hacia abajo. Pasa en alrededor de 1 de cada 200 a 300 niños, y nadie lo causó.',
  },

  pathology: {
    intro: 'El hipospadias se describe según dónde está el orificio y si el pene está curvo.',
    whereLabel: '¿Dónde está el orificio?',
    where: {
      distal: { name: 'Cerca de la punta', opening: 0.2, text: 'El tipo más común (alrededor de 7 de cada 10). Muchas veces solo hay una pequeña diferencia en cómo se ve y cómo sale el chorro.' },
      mid: { name: 'A la mitad del tronco', opening: 0.55, text: 'Menos común. El chorro apunta hacia abajo y es más probable que el pene esté doblado.' },
      proximal: { name: 'Cerca del escroto', opening: 0.95, text: 'El tipo menos común. Por lo general está más doblado, y se puede revisar si hay otras diferencias en el desarrollo.' },
      epispadias: { name: 'Arriba (epispadias)', opening: 0.6, top: true, text: 'El epispadias es una condición rara y diferente: el orificio está en la parte de arriba y el pene se puede doblar hacia arriba. Muchas veces se presenta con extrofia vesical y se repara de otra forma.' },
    },
    curve: 'Curvatura (cuerda)',
    curveText: 'Un tejido apretado en la parte de abajo puede hacer que el pene se doble hacia abajo, muchas veces más notorio con las erecciones.',
    pee: 'Orinando',
    peeText: 'Con el orificio más atrás, la orina sale hacia abajo, y eso puede hacer difícil orinar de pie más adelante.',
    noteTitle: 'Importante para las familias',
    note: 'A los bebés con hipospadias no se les debe circuncidar al nacer. Muchas veces el prepucio se usa en la reparación.',
  },

  treatment: {
    intro:
      'La cirugía por lo general se hace entre los 6 y los 18 meses de edad. Las metas son un pene derecho, el orificio en la punta, un chorro normal y una apariencia típica.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      repair: {
        name: 'Reparación del hipospadias',
        summary:
          'Para orificios más cerca de la punta y sin mucha curvatura, por lo general es una sola cirugía. El cirujano endereza cualquier curvatura pequeña, enrolla el surco abierto en forma de tubo para hacer una uretra nueva hasta la punta y cierra la piel. El prepucio se quita (apariencia circuncidada) o se reconstruye. Muchas veces un tubito (stent) drena la orina al pañal por alrededor de una semana.',
        before: 'Antes',
        after: 'Después de la reparación',
        pee: 'Orinando',
        pros: ['Orificio en la punta y chorro derecho', 'Endereza el pene', 'Por lo general una sola cirugía para orificios cerca de la punta'],
        cons: ['Anestesia general', 'Cuidado del vendaje y del stent por alrededor de una semana'],
      },
      staged: {
        name: 'Reparación en etapas',
        summary:
          'Los orificios más atrás, y los casos con más curvatura, por lo general se corrigen en dos cirugías. En la primera, la tira de tejido de la parte de abajo (la placa uretral) se corta de lado a lado para poder enderezar el pene por completo, y se pasa tejido del prepucio a la parte de abajo, ya sea todavía unido a su riego de sangre (un colgajo) o como un injerto. En la segunda cirugía, por lo general unos 6 meses después, ese tejido se enrolla para hacer una uretra nueva hasta la punta.',
        steps: [
          'Antes: el orificio está cerca del escroto, el pene se dobla hacia abajo y el prepucio queda como una capucha arriba.',
          'Etapa 1: la tira de tejido de la parte de abajo (la placa uretral) se corta de lado a lado, y así el pene se puede enderezar.',
          'Si todavía queda una curvatura, se hacen pequeños cortes de liberación (corporotomías) en la cubierta firme de las cámaras de la erección para que el pene quede derecho.',
          'Se pasa tejido del prepucio a la parte de abajo, ya sea todavía unido a su riego de sangre (un colgajo) o como un injerto. Se convertirá en el revestimiento de la uretra nueva. Todo el prepucio que queda se deja en su lugar después de esta primera cirugía.',
          'En casa, el pene se pega hacia arriba contra la parte baja de la barriga con cinta de silicona todos los días hasta la segunda cirugía. Esto ayuda a que el tejido nuevo sane bien y baja la probabilidad de que la curvatura regrese.',
          'Durante unos 6 meses, el tejido que se movió sana y se convierte en un revestimiento sano y elástico.',
          'Etapa 2: el tejido sano se enrolla en forma de tubo para hacer una uretra nueva hasta la punta del pene.',
          'La piel, incluyendo el prepucio que se guardó en la primera cirugía, se reacomoda para cubrir la uretra nueva. Un tubito (stent) drena la orina al pañal por alrededor de una semana.',
          'Resultado: un pene derecho con el orificio en la punta y un chorro derecho.',
        ],
        pros: ['Endereza por completo una curvatura mayor', 'Construye una uretra nueva más larga con tejido sano'],
        cons: ['Dos cirugías, por lo general con unos 6 meses de diferencia', 'Más probabilidad de problemas como una fístula que las reparaciones en una sola etapa'],
      },
      complications: {
        name: 'Posibles problemas después',
        summary:
          'La mayoría de las reparaciones sanan bien. A veces se forma un agujerito a lo largo de la reparación (fístula), y la orina sale por dos lugares. El orificio nuevo también se puede estrechar, o la reparación se puede abrir. Esto pasa en alrededor de 1 de cada 10 reparaciones cerca de la punta, y más seguido en orificios más atrás. Por lo general se pueden corregir con otra cirugía.',
        fistula: 'Mostrar una fístula',
        pros: ['La mayoría de los problemas se pueden corregir'],
        cons: ['Puede necesitarse una segunda cirugía', 'Revisiones hasta la pubertad'],
      },
      watch: {
        name: 'Sin cirugía',
        summary:
          'En algunos casos muy leves cerca de la punta y sin curvatura, las familias pueden decidir no operar. El niño por lo general puede orinar y tendrá una función normal.',
        pros: ['Sin cirugía ni anestesia'],
        cons: ['El chorro puede salir hacia abajo', 'La apariencia es diferente'],
      },
    },
  },

  takeaways: {
    points: [
      'En el hipospadias, el orificio para orinar está en la parte de abajo en lugar de en la punta.',
      'Pasa antes de nacer cuando la uretra no termina de cerrarse.',
      'No circuncide al nacer; el prepucio se puede usar en la reparación.',
      'La cirugía por lo general se hace entre los 6 y los 18 meses de edad.',
      'La mayoría de las reparaciones funcionan bien. Algunos niños necesitan otra cirugía después.',
    ],
    callTitle: 'Llámenos o busque atención después de la cirugía si hay',
    call: ['Fiebre, o enrojecimiento e hinchazón que siguen empeorando', 'No sale orina por varias horas', 'El stent se sale antes de tiempo o sangrado que no para'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
