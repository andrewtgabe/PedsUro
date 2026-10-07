// Infección urinaria — textos del capítulo en español.
export default {
  title: 'Infección urinaria',

  embryology: {
    intro:
      'Normalmente la orina no tiene microbios. Una infección urinaria ocurre cuando bacterias, por lo general de la piel o del excremento alrededor del trasero, entran a la uretra y suben.',
    stepLabel: 'Cómo se extiende',
    steps: [
      { name: 'Afuera', text: 'Las bacterias del excremento viven en la piel cerca de la abertura de la uretra. Las niñas tienen la uretra más corta, así que las bacterias llegan a la vejiga más fácilmente.' },
      { name: 'Vejiga', text: 'Si las bacterias entran a la vejiga y crecen, causan una infección de la vejiga (cistitis). Orinar seguido y por completo ayuda a sacarlas.' },
      { name: 'Riñón', text: 'Si las bacterias suben por los uréteres hasta un riñón, causan una infección del riñón (pielonefritis). Por lo general causa fiebre y es más seria.' },
    ],
    riskTitle: 'Cosas que hacen más probable una infección urinaria',
    risks: [
      'Aguantar la orina o no vaciar la vejiga por completo',
      'Estreñimiento',
      'Limpiarse de atrás hacia adelante',
      'Orina que regresa (reflujo) o una obstrucción',
      'Bebés varones no circuncidados (en el primer año)',
    ],
  },

  pathology: {
    intro: 'Las señales de una infección urinaria dependen de dónde está la infección y de la edad del niño o la niña.',
    typeLabel: '¿Dónde está la infección?',
    types: {
      bladder: {
        name: 'Vejiga (cistitis)',
        text: 'El revestimiento de la vejiga se irrita.',
        signs: ['Ardor o dolor al orinar', 'Orinar seguido, o sentir muchas ganas de ir', 'Accidentes nuevos de día o de noche', 'Orina turbia o con mal olor, a veces con sangre', 'Por lo general sin fiebre, o solo un poco'],
      },
      kidney: {
        name: 'Riñón (pielonefritis)',
        text: 'El riñón se inflama. Las infecciones repetidas del riñón pueden dejar cicatrices.',
        signs: ['Fiebre de 101°F (38.3°C) o más', 'Dolor de costado o de espalda', 'Vómito, sentirse muy enfermo', 'Bebés: fiebre, irritabilidad, poca alimentación — a veces son las únicas señales'],
      },
    },
    babyNote: 'En bebés y niños pequeños, la fiebre puede ser la única señal. Revisar la orina es la única forma de saberlo.',
  },

  treatment: {
    intro: 'Las infecciones urinarias se tratan con antibióticos. Un examen de orina confirma la infección y nos dice qué antibiótico va a funcionar.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      testing: {
        name: 'Examen de orina',
        summary:
          'La muestra debe estar limpia para que los microbios de la piel no den un resultado falso. En bebés, se pasa un tubo delgado (sonda) a la vejiga por unos segundos. Los niños más grandes pueden orinar en un vasito después de limpiarse (muestra limpia). El cultivo tarda de 1 a 2 días y muestra qué bacteria hay y qué antibióticos funcionan.',
        pros: ['Confirma la infección', 'Ayuda a escoger el antibiótico correcto'],
        cons: ['La sonda es incómoda por un momento', 'Las muestras con bolsita en bebés muchas veces se contaminan'],
      },
      antibiotics: {
        name: 'Antibióticos',
        summary:
          'La mayoría de los niños toman antibióticos por la boca durante unos 7 a 14 días para una infección del riñón, y menos días para una infección de la vejiga. Los bebés muy pequeños o los niños muy enfermos pueden necesitarlos por la vena al principio.',
        control: 'Días de antibiótico',
        days: 'días',
        pros: ['Quita la infección', 'La fiebre por lo general mejora en 1 a 2 días'],
        cons: ['Termine todo el tratamiento, aunque se sienta mejor', 'Puede caer pesado al estómago'],
      },
      imaging: {
        name: 'Revisión de los riñones',
        summary:
          'Después de una primera infección del riñón, a muchos niños pequeños se les hace un ultrasonido de los riñones. A algunos, por ejemplo con un ultrasonido anormal o con infecciones repetidas, también se les hace un CUGM para buscar reflujo.',
        link: 'Aprenda sobre el reflujo',
        pros: ['Encuentra problemas que hacen más probables las infecciones'],
        cons: ['Un CUGM necesita una sonda y una pequeña cantidad de radiación'],
      },
      prevention: {
        name: 'Prevenir las infecciones urinarias',
        summary: 'Los buenos hábitos de vejiga e intestino son la mejor forma de prevenir las infecciones urinarias.',
        tips: [
          'Orinar cada 2–3 horas mientras está despierto; no aguantarse',
          'Relajarse por completo al orinar; las niñas pueden sentarse con las rodillas separadas y los pies apoyados',
          'Tratar el estreñimiento: evacuar blando todos los días',
          'Tomar agua durante el día',
          'Limpiarse de adelante hacia atrás',
          'Evitar los baños de burbujas',
        ],
        pros: ['Funciona para la mayoría de los niños', 'Sin medicamentos'],
        cons: ['Requiere una rutina diaria'],
      },
    },
  },

  takeaways: {
    points: [
      'Una infección urinaria es una infección de la vejiga o del riñón, por lo general por bacterias de cerca del trasero.',
      'Las infecciones del riñón por lo general causan fiebre y son más serias.',
      'Una muestra de orina limpia confirma la infección.',
      'Se trata con antibióticos. Termine todo el tratamiento.',
      'Buenos hábitos para orinar y evacuar ayudan a prevenir las infecciones urinarias.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'Fiebre que dura más de 2 días tomando antibióticos',
      'Vómito y no puede retener el medicamento ni los líquidos',
      'Bebés: fiebre, irritabilidad, poca alimentación',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
