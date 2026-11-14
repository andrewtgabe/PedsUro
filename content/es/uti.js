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
    intro: 'Las señales de una infección urinaria dependen de dónde está la infección y de la edad del niño o la niña. Alrededor de 8 de cada 100 niñas y 2 de cada 100 niños tienen una infección urinaria antes de los 7 años. En bebés con fiebre, alrededor de 7 de cada 100 tienen una infección urinaria.',
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
          'La muestra debe estar limpia para que los microbios de la piel no den un resultado falso. Un análisis rápido (tira reactiva y microscopio) da una primera idea en minutos. El cultivo tarda de 1 a 2 días y muestra qué bacteria hay y qué antibióticos funcionan.',
        methodLabel: 'Cómo se toma la orina',
        methods: { catheter: 'Sonda', cup: 'Muestra limpia', bag: 'Bolsita de orina' },
        cupLabel: 'Vasito limpio',
        bagLabel: 'Bolsita adhesiva',
        notes: {
          catheter: 'En bebés y niños que todavía no van al baño solos, se pasa un tubo delgado (sonda) a la vejiga por unos segundos. Así se obtiene la muestra más limpia.',
          cup: 'Los niños que ya van al baño se limpian, empiezan a orinar en el inodoro y luego recogen la mitad del chorro en un vasito limpio.',
          bag: 'Una bolsita adhesiva sobre los genitales se puede usar para una revisión rápida. Las bolsitas muchas veces se contaminan con microbios de la piel, así que un resultado positivo necesita una muestra con sonda para confirmarlo.',
        },
        pros: ['Confirma la infección', 'Ayuda a escoger el antibiótico correcto'],
        cons: ['La sonda es incómoda por un momento', 'Las muestras con bolsita muchas veces se contaminan'],
      },
      antibiotics: {
        name: 'Antibióticos',
        summary:
          'Una infección del riñón con fiebre por lo general se trata de 7 a 10 días. Una infección de la vejiga sin complicaciones necesita menos tiempo, unos 3 a 5 días.',
        ivLabel: 'Antibiótico por la vena',
        cultureLabel: 'Cultivo de orina',
        oralLabel: 'Antibiótico por la boca',
        steps: [
          'Se toma una muestra de orina para cultivo antes de empezar los antibióticos.',
          'Se empieza de inmediato un antibiótico amplio que funciona contra la mayoría de las bacterias, por lo general por la vena.',
          'Los resultados del cultivo por lo general están en unas 48 horas. Muestran qué antibiótico funciona mejor, y se ajusta el antibiótico.',
          'Si hay un antibiótico por la boca que funciona, se cambia a ese en cuanto estén los resultados del cultivo.',
          'Muchas veces los niños se quedan en el hospital hasta que llevan por lo menos 24 horas sin fiebre y toman el antibiótico ajustado por la boca. Terminan el tratamiento completo en casa.',
        ],
        pros: ['Quita la infección', 'La fiebre por lo general mejora en 1 a 2 días'],
        cons: ['Termine todo el tratamiento, aunque se sienta mejor', 'Puede caer pesado al estómago'],
      },
      imaging: {
        name: 'Imágenes de los riñones',
        summary:
          'Después de una primera infección urinaria con fiebre, a los niños menores de 5 años se les hace un ultrasonido de los riñones y la vejiga para buscar problemas en cómo se formaron. No se necesita un CUGM después de una primera infección con fiebre si el ultrasonido es normal. Se ofrece un CUGM si el ultrasonido es anormal, o después de una segunda infección con fiebre. Una gammagrafía DMSA puede buscar cicatrices en el riñón.',
        testLabel: 'Prueba',
        tests: { us: 'Ultrasonido', vcug: 'CUGM', dmsa: 'Gammagrafía DMSA' },
        probe: 'Ultrasonido',
        link: 'Aprenda sobre el reflujo',
        pros: ['Encuentra problemas que hacen más probables las infecciones'],
        cons: ['Un CUGM necesita una sonda y una pequeña cantidad de radiación'],
      },
      antibioticPrev: {
        name: 'Antibiótico preventivo',
        summary:
          'Una dosis pequeña de antibiótico cada día puede ayudar a prevenir infecciones del riñón en algunos niños con reflujo. No se necesita de rutina para un reflujo leve (grado I o II) sin problemas de vejiga o intestino. Es una opción para niños con más riesgo, por ejemplo con reflujo de grado IV o V, cicatrices en el riñón o infecciones del riñón repetidas. Lo decidimos junto con su familia.',
        link: 'Aprenda sobre el reflujo',
        pros: ['Baja la probabilidad de una infección del riñón en niños con más riesgo'],
        cons: ['Un medicamento todos los días', 'Las bacterias pueden volverse resistentes'],
      },
      prevention: {
        name: 'Prevenir las infecciones urinarias',
        summary: 'Los buenos hábitos de vejiga e intestino son la mejor forma de prevenir las infecciones urinarias.',
        habits: [
          'Orinar cada 2–3 horas mientras está despierto; no aguantarse',
          'Relajarse por completo al orinar; las niñas pueden sentarse con las rodillas separadas y los pies apoyados',
          'Tratar el estreñimiento: evacuar blando todos los días',
          'Tomar agua durante el día',
          'Limpiarse de adelante hacia atrás',
          'Evitar los baños de burbujas',
          'En niños con reflujo o infecciones repetidas, la circuncisión baja la probabilidad de infecciones urinarias',
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
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más, o irritabilidad y poca alimentación',
      'Fiebre que dura más de 2 días tomando antibióticos',
      'Vómito y no puede retener el medicamento ni los líquidos',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
