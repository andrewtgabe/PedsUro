// Hidronefrosis — textos del capítulo en español.
export default {
  title: 'Hidronefrosis',

  embryology: {
    intro:
      'Hidronefrosis significa que la parte del riñón que recoge la orina está más ancha de lo normal. Es uno de los hallazgos más comunes en los ultrasonidos durante el embarazo.',
    weekLabel: 'Semana del embarazo',
    stages: [
      { name: 'Semana 6', title: 'Empiezan los riñones', text: 'Los riñones empiezan pequeños y abajo, cerca de la vejiga.' },
      { name: 'Semana 10', title: 'Empieza la orina', text: 'Los riñones suben hacia la espalda y empiezan a producir orina. La orina baja a la vejiga y el bebé la orina.' },
      { name: 'Semana 20', title: 'El ultrasonido', text: 'La mayor parte del líquido alrededor del bebé ahora es su orina. Un ultrasonido de rutina puede ver los riñones y cualquier líquido de más dentro de ellos.' },
      { name: 'Nacimiento', title: 'Después de nacer', text: 'A los bebés con hinchazón vista antes de nacer se les hace otro ultrasonido después de nacer para revisar de nuevo.' },
    ],
    extra: 'Líquido de más en el riñón',
    modes: { growth: 'Cómo crecen los riñones', transient: 'Hinchazón temporal (fisiológica)' },
    transient: {
      title: 'Hidronefrosis temporal (fisiológica)',
      text: 'Es la causa más común de hidronefrosis. Nada está realmente bloqueado. El sistema de drenaje todavía está madurando: un lugar un poco estrecho, o una variación normal de forma, hace que la orina salga más despacio por un tiempo. Conforme maduran los riñones y los uréteres, la orina drena con más facilidad y la hinchazón por lo general se quita con el tiempo.',
      steps: [
        { name: 'Antes o al nacer', text: 'El camino de drenaje todavía está madurando. Un lugar un poco estrecho, o una variación normal de forma, hace que la orina salga más despacio del riñón, así que la zona que recoge la orina se estira un poco.' },
        { name: 'Primeros meses', text: 'Conforme el riñón y el uréter crecen y maduran, el lugar estrecho se ensancha y la orina drena con más facilidad. La hinchazón se hace más pequeña.' },
        { name: 'Por lo general entre 1 y 3 años', text: 'En la mayoría de los niños la hinchazón se quita sola. Los ultrasonidos de seguimiento lo confirman; no se necesita cirugía.' },
      ],
    },
    extraText:
      'Aquí, la parte del riñón que recoge la orina se ve más ancha de lo normal. Muchas veces el sistema de drenaje todavía está madurando y la hinchazón mejora sola. A veces es señal de una obstrucción o de orina que regresa.',
  },

  pathology: {
    intro:
      'Piense en las vías urinarias como una manguera de jardín. Si la manguera se aprieta, el agua se acumula y la manguera se hincha antes del apretón. La hinchazón aparece arriba de donde la orina se está atorando.',
    causeLabel: '¿Dónde se atora la orina?',
    severityLabel: 'Cantidad de hinchazón',
    severity: ['Leve', 'Moderada', 'Grave'],
    severityText: [
      'Leve: el centro del riñón está un poco más ancho. El tejido del riñón se ve normal.',
      'Moderada: la parte que recoge la orina y sus ramas en forma de copa están más anchas.',
      'Grave: la parte que recoge la orina está muy estirada y el tejido del riñón a su alrededor se adelgaza.',
    ],
    learnMore: 'Aprenda más',
    causes: {
      transient: {
        name: 'Nada atorado',
        text: 'La parte que recoge la orina está más ancha de lo normal, pero la orina drena bien. Es la causa más común. Alrededor de 9 de cada 10 casos leves se quitan solos, por lo general antes de los 2 a 3 años.',
      },
      upj: {
        name: 'Parte alta del uréter',
        text: 'Un estrechamiento donde el riñón se une al uréter. La orina se acumula solo en el riñón, por eso el uréter se ve normal.',
      },
      uvj: {
        name: 'Parte baja del uréter',
        text: 'Un estrechamiento donde el uréter se une a la vejiga. Se hinchan tanto el uréter como el riñón.',
      },
      reflux: {
        name: 'Orina que regresa',
        text: 'La orina sube de regreso desde la vejiga cuando el niño o la niña orina. Esto se llama reflujo (RVU).',
      },
      puv: {
        name: 'Uretra (niños)',
        text: 'Pliegues de tejido de más en la uretra de un niño bloquean la salida de la orina de la vejiga. La pared de la vejiga se engruesa y ambos riñones pueden hincharse. Esto se llama válvulas uretrales posteriores.',
      },
    },
  },

  treatment: {
    intro:
      'La mayoría de los bebés con hidronefrosis solo necesitan revisiones. Los estudios nos ayudan a encontrar la causa y a ver qué tan bien funciona cada riñón.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Ultrasonidos de seguimiento',
        summary:
          'El ultrasonido usa ondas de sonido para ver los riñones. No duele y no usa radiación. En muchos bebés la hinchazón se hace más pequeña con el tiempo.',
        control: 'Edad',
        months: 'meses',
        pros: ['Sin dolor, sin agujas, sin radiación', 'Muchas veces es lo único que se necesita'],
        cons: ['Visitas repetidas durante meses o años', 'No muestra qué tan bien funciona el riñón'],
      },
      scan: {
        name: 'Gammagrafía de drenaje renal',
        summary:
          'Una gammagrafía renal (muchas veces llamada MAG3) sigue una cantidad muy pequeña de trazador por la vena mientras los riñones producen orina. Muestra qué tan bien funciona y drena cada riñón. A mitad del estudio se da por la vena un medicamento que hace que los riñones produzcan más orina (Lasix). Esto ayuda a saber si el drenaje es lento o si de verdad hay una obstrucción.',
        patternLabel: 'Patrón',
        patterns: {
          normal: 'Drena bien',
          slow: 'Ancho, pero drena con Lasix',
          blocked: 'Obstruido',
        },
        chart: { title: 'Curva de drenaje', minutes: 'Minutos', amount: 'Trazador en el riñón', lasix: 'Se da Lasix' },
        pros: ['Muestra cuánto trabaja cada riñón', 'Muestra si hay una obstrucción real'],
        cons: ['Necesita una vía en la vena', 'Necesita una sonda en la vejiga, a menos que el niño o la niña tenga edad para orinar cuando se le pide', 'Una pequeña cantidad de radiación', 'Dura alrededor de una hora'],
      },
      vcug: {
        name: 'Cistouretrograma miccional (CUGM)',
        summary:
          'Un CUGM busca orina que regresa (reflujo). Un tubo delgado pone tinte en la vejiga y se toman radiografías mientras el niño o la niña orina.',
        dye: 'Mostrar el tinte',
        pros: ['Muestra claramente el reflujo y la uretra'],
        cons: ['Necesita una sonda en la vejiga', 'Una pequeña cantidad de radiación'],
      },
      antibiotic: {
        name: 'Antibiótico preventivo',
        summary:
          'Algunos bebés con más hinchazón o con reflujo toman una dosis pequeña de antibiótico cada día. Ayuda a prevenir infecciones de orina mientras vigilamos.',
        bacteria: 'Entran bacterias a la vejiga',
        dose: 'Antibiótico diario en dosis baja',
        pros: ['Baja la probabilidad de una infección del riñón'],
        cons: ['Un medicamento todos los días', 'Las bacterias pueden volverse resistentes'],
      },
      surgery: {
        name: 'Cuándo ayuda la cirugía',
        summary:
          'La cirugía solo se necesita en algunos niños: episodios de dolor, un riñón que hace menos de su parte del trabajo (menos de alrededor de 40%) o que pierde función en estudios repetidos, infecciones, piedras, o hinchazón que sigue empeorando. El tipo de cirugía depende de la causa:',
        links: [
          ['upj', 'Estrechamiento en la parte alta del uréter'],
          ['uvj', 'Estrechamiento en la parte baja del uréter'],
          ['vur', 'Orina que regresa'],
        ],
      },
    },
  },

  takeaways: {
    points: [
      'Hidronefrosis significa que la parte del riñón que recoge la orina está estirada.',
      'Es común y muchas veces se encuentra antes de nacer.',
      'Muchos casos mejoran solos conforme el bebé crece.',
      'Los ultrasonidos y a veces otros estudios ayudan a encontrar la causa.',
      'Solo algunos niños necesitan cirugía.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'En bebés: fiebre, irritabilidad, poca alimentación o vómito',
      'Dolor de barriga, de costado o de espalda, sobre todo con vómito',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
