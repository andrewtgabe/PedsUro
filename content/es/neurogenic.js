// Vejiga neurogénica — textos del capítulo en español.
export default {
  title: 'Vejiga neurogénica',

  embryology: {
    intro:
      'La vejiga está controlada por nervios que pasan por la médula espinal hasta el cerebro. Una vejiga neurogénica es una vejiga que no funciona normalmente porque esos nervios están afectados.',
    causeLabel: 'Médula espinal',
    causes: {
      typical: { name: 'Típica', text: 'Los mensajes pasan libremente: “estoy llena” sube, y “aguanta” o “ya” baja de regreso.' },
      blocked: { name: 'Nervios afectados', text: 'Los mensajes no pueden pasar la parte afectada de la médula espinal. El cerebro no siente cuando la vejiga está llena y no puede controlar cuándo se vacía.' },
    },
    whyTitle: 'Causas comunes',
    why: [
      'Espina bífida (mielomeningocele): la médula espinal no se cierra por completo en el primer mes del embarazo.',
      'Médula anclada: la médula está pegada y se estira conforme el niño crece.',
      'Lesión o tumor de la médula espinal',
      'Agenesia sacra: la parte más baja de la columna no se formó.',
    ],
    facts: [
      'En los Estados Unidos, la espina bífida afecta a unos 3 a 4 de cada 10,000 bebés, unos 1,500 bebés cada año.',
      'Tomar 400 microgramos de ácido fólico todos los días antes y al principio del embarazo baja el riesgo.',
      'Todos los niños con espina bífida tienen la médula espinal algo anclada por tejido de cicatriz. Alrededor de 1 de cada 4 tienen síntomas nuevos y necesitan cirugía para liberarla.',
    ],
  },

  pathology: {
    intro: 'Una vejiga neurogénica es una vejiga que no funciona normalmente por un problema en sus nervios, como la espina bífida. La vejiga de cada niño se comporta diferente, por eso se hacen estudios (muchas veces urodinamia) para ver qué patrón tiene su hijo o hija. La meta principal es proteger los riñones.',
    typeLabel: 'Patrón',
    pressureLabel: 'Presión en la vejiga',
    kidneyRisk: 'Riesgo para los riñones',
    types: {
      high: {
        name: 'Vejiga hiperactiva, músculo de control apretado',
        text: 'La vejiga aprieta por sí sola mientras el músculo de control se queda apretado (disinergia detrusor-esfínter). La presión sube mucho. La pared de la vejiga se engruesa, y la orina puede regresar y dañar los riñones. Este es el patrón más preocupante.',
      },
      retain: {
        name: 'Vejiga débil, músculo de control apretado',
        text: 'La vejiga no aprieta bien y el músculo de control se queda cerrado. La vejiga se estira mucho y no se vacía, lo que causa infecciones y escapes cuando se desborda.',
      },
      urge: {
        name: 'Vejiga hiperactiva, músculo de control débil',
        text: 'La vejiga aprieta por sí sola y el músculo de control débil no puede aguantar, así que se escapa orina seguido en pequeñas cantidades. La presión por lo general es más baja porque la orina se escapa.',
      },
      leaky: {
        name: 'Vejiga débil, músculo de control débil',
        text: 'Ningún músculo funciona bien. La orina se escapa todo el tiempo. La presión se mantiene baja, así que los riñones por lo general están seguros, pero el niño siempre está mojado.',
      },
    },
    gauge: { title: 'Presión en la vejiga', safe: 'Segura', intermediate: 'Intermedia', unsafe: 'Peligrosa' },
    muscle: { tight: 'Flechas rojas: el músculo de control se aprieta y se cierra, así que la orina no puede salir.', weak: 'Flecha azul: el músculo de control no puede cerrar, así que la orina se escapa.' },
    reflux: 'La orina que regresa a los riñones (reflujo) en una vejiga con presión alta aumenta todavía más el riesgo para los riñones.',
    bowel: 'Los mismos nervios controlan el intestino, así que el estreñimiento y los accidentes con excremento también son comunes.',
  },

  treatment: {
    intro:
      'El tratamiento mantiene baja la presión de la vejiga, la vacía con regularidad, previene infecciones y ayuda a mantenerse seco. El cuidado es de por vida y los planes cambian conforme los niños crecen.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      tests: {
        name: 'Estudios y revisiones',
        summary: 'Como la vejiga puede cambiar conforme el niño crece, los estudios regulares buscan problemas a tiempo. El nivel del problema en la columna no predice cómo funcionará la vejiga, así que los estudios son la única forma de saberlo.',
        tips: [
          'Ultrasonido de riñones y vejiga poco después de nacer, luego cada 3 a 6 meses el primer año y cada 6 a 12 meses después',
          'Urodinamia a los 2 a 4 meses de edad, otra vez alrededor del año, y cuando algo cambia',
          'Una cistouretrografía miccional, un ultrasonido con contraste o una videourodinamia para buscar reflujo',
          'Análisis de sangre para la función de los riñones',
          'Una gammagrafía DMSA para buscar cicatrices en algunos niños, por ejemplo después de infecciones',
          'Un diario de vejiga e intestino',
        ],
        chart: { title: 'Urodinamia', pressure: 'Presión en la vejiga', volume: 'Cantidad llenada', danger: 'Más de 40: riesgo para los riñones', leak: 'Punto de escape' },
        steps: [
          'Se pone una sonda delgada en la vejiga. Un tubo pequeño y blando en el trasero mide la presión de la barriga. Su hijo o hija está despierto.',
          'La vejiga se llena despacio con agua estéril mientras se registra la presión.',
          'Una vejiga segura se llena como un globo: aguanta una buena cantidad mientras la presión se mantiene baja.',
          'En una vejiga de alto riesgo, la presión sube a más de 40. Una presión tan alta puede empujar la orina hacia arriba y dañar los riñones.',
          'El estudio también muestra la presión cuando la orina empieza a escaparse (punto de escape) y si la vejiga aprieta sola. Con tinte de rayos X (videourodinamia), también puede mostrar reflujo.',
        ],
        pros: ['Encuentra a tiempo una vejiga de alto riesgo', 'Guía el tratamiento'],
        cons: ['Varios estudios cada año al principio', 'La urodinamia necesita una sonda'],
      },
      cic: {
        name: 'Usar sonda',
        summary: 'Cateterismo intermitente limpio: se pasa un tubo delgado y liso a la vejiga cada 3–4 horas para vaciarla, y luego se saca. Primero aprenden los padres, y muchos niños aprenden a hacerlo solos. Algunos niños con presión alta también usan una sonda que drena durante la noche. Es común que haya bacterias en la orina sin síntomas al usar sonda, y por lo general no se tratan.',
        steps: [
          'Lávese bien las manos con agua y jabón.',
          'Limpie la abertura de la uretra con una toallita, de adelante hacia atrás.',
          'Ponga lubricante en la punta de una sonda limpia (muchas ya vienen cubiertas).',
          'Deslice la sonda con cuidado hasta que empiece a salir la orina.',
          'Deje que la vejiga se vacíe por completo, en el inodoro o en un recipiente.',
          'Saque la sonda despacio. Si sale más orina, espere hasta que pare.',
          'Repita cada 3 a 4 horas mientras está despierto. Anote las cantidades en un diario de sonda.',
        ],
        pros: ['Mantiene baja la presión y protege los riñones', 'Menos infecciones', 'Ayuda a mantenerse seco'],
        cons: ['Varias veces todos los días', 'Requiere práctica'],
      },
      medicine: {
        name: 'Medicamento para la vejiga',
        summary: 'Estos medicamentos relajan la vejiga para que aguante más con menos presión. La oxibutinina es la más usada, por la boca o puesta en la vejiga por la sonda, lo que causa menos efectos secundarios. Otras opciones son la solifenacina, la tolterodina y el mirabegrón. Trate también el estreñimiento, porque muchos de estos medicamentos lo pueden empeorar.',
        dose: 'Medicamento',
        pros: ['Baja la presión', 'Menos escapes entre una sonda y otra'],
        cons: ['Estreñimiento, boca seca, enrojecimiento de la cara', 'No es suficiente para todos los niños'],
      },
      bowel: {
        name: 'Programa para el intestino',
        summary: 'Los mismos nervios controlan el intestino, así que la mayoría de los niños necesitan un programa diario para el intestino para mantenerse limpios y evitar el estreñimiento. Encontrar el plan correcto puede tomar tiempo.',
        link: 'Vea el cuidado del estreñimiento (limpieza, ablandador, rutina de baño)',
        items: [
          'Sentarse en el inodoro a la misma hora todos los días, muchas veces después de comer',
          'Un ablandador de heces diario (como Miralax) y a veces sen',
          'Supositorios o enemas para ayudar a vaciar el intestino',
          'Lavar el intestino por el trasero con un equipo especial (como Peristeen)',
          'Un canal pequeño o un tubo en la barriga para lavar el intestino desde arriba (Malone o cecostomía)',
        ],
        pros: ['Menos accidentes con excremento', 'Ayuda a que el tratamiento de la vejiga funcione mejor'],
        cons: ['Toma tiempo cada día', 'Puede requerir prueba y error'],
      },
      botox: {
        name: 'Inyecciones de Botox',
        summary: 'Se inyecta Botox en la pared de la vejiga con una cámara pequeña. Calma la vejiga por alrededor de 6 a 12 meses.',
        steps: [
          'Antes: la vejiga aprieta fuerte en momentos equivocados. La presión es alta y la pared está gruesa.',
          'Con el niño o la niña dormido, se pasa una cámara pequeña por la uretra hasta la vejiga. No hay cortes en la piel.',
          'Una aguja muy pequeña que pasa por la cámara inyecta Botox en muchos puntos de la pared de la vejiga.',
          'En las siguientes 1 a 2 semanas, el Botox relaja el músculo de la vejiga. La vejiga guarda más orina con menos presión. Todavía se necesita pasar la sonda.',
          'El efecto se quita después de unos 6 a 12 meses, así que las inyecciones se repiten cuando se necesitan.',
        ],
        pros: ['Baja la presión sin una cirugía mayor', 'Se puede repetir'],
        cons: ['Necesita procedimientos repetidos', 'Anestesia cada vez'],
      },
      augment: {
        name: 'Ampliación de la vejiga',
        summary: 'Si la vejiga sigue pequeña y con presión alta, se le cose un pedazo de intestino para hacerla más grande y suave. Después todavía se necesita usar sonda.',
        steps: [
          'Antes: aun con la sonda y medicina, la vejiga sigue pequeña, rígida y con presión alta.',
          'Con el niño o la niña dormido, se hace un corte en la barriga y se abre la vejiga de lado a lado por arriba.',
          'Se saca un pedazo de intestino, por lo general intestino delgado, con su riego de sangre. El resto del intestino se vuelve a unir.',
          'El pedazo de intestino se abre plano y se cose sobre la vejiga como un parche, para hacerla más grande.',
          'La vejiga más grande y suave guarda mucha más orina con presión baja, y eso protege los riñones.',
          'Todavía se necesita pasar la sonda para vaciar la vejiga. Lavar la vejiga con regularidad quita el moco del pedazo de intestino, y las revisiones son de por vida.',
        ],
        pros: ['Aguanta mucho más con presión baja', 'Protege los riñones'],
        cons: ['Cirugía mayor', 'Moco, piedras y seguimiento de por vida'],
      },
      channel: {
        name: 'Canal del ombligo',
        summary: 'Se hace un canal pequeño (Mitrofanoff) de la vejiga al ombligo, muchas veces usando el apéndice. Permite que un niño se ponga la sonda sentado en una silla de ruedas, sin usar la uretra.',
        steps: [
          'Antes: a algunos niños se les hace difícil pasar la sonda por la uretra, sobre todo desde una silla de ruedas.',
          'Con el niño o la niña dormido, se separa el apéndice (o un pedazo pequeño de intestino), manteniendo su riego de sangre.',
          'Una punta se mete en un túnel en la pared de la vejiga. Esto forma una válvula de un solo sentido para que la orina no se salga por el canal.',
          'La otra punta se saca al ombligo como una abertura pequeña y discreta.',
          'Una sonda se queda en el canal por unas semanas mientras sana.',
          'Después, la vejiga se vacía pasando una sonda por el ombligo cada pocas horas.',
        ],
        pros: ['Usar la sonda es más fácil y más independiente'],
        cons: ['Cirugía', 'El canal se puede estrechar y necesitar cuidado'],
      },
      other: {
        name: 'Otras opciones y cirugías',
        summary: 'Algunos niños necesitan otras formas de proteger los riñones o de mantenerse secos. La opción correcta depende de la urodinamia, los riñones, la movilidad y lo que su familia prefiera.',
        items: [
          'Una sonda que drena la vejiga durante la noche mientras duerme, para mantener baja la presión',
          'Vesicostomía: una abertura pequeña de la vejiga a la parte baja de la barriga para bebés cuyos riñones están en riesgo a pesar de la sonda y los medicamentos. La orina drena al pañal.',
          'Cirugía del cuello de la vejiga para apretar la salida y detener los escapes: reconstrucción, un cabestrillo, inyecciones de relleno o un esfínter artificial. Por lo general se hace junto con una ampliación.',
          'Liberar la médula anclada si la médula espinal se vuelve a pegar',
          'Un tubo o abertura que drena la orina todo el tiempo (sonda suprapúbica, ileovesicostomía) para niños que no pueden usar sonda',
        ],
        pros: ['Protege los riñones cuando otros tratamientos no son suficientes', 'Puede ayudar a mantenerse seco y a ser más independiente'],
        cons: ['Cirugía con anestesia general', 'Puede necesitarse otra cirugía más adelante'],
      },
    },
  },

  followup: {
    intro:
      'Los bebés con espina bífida se siguen de cerca con un calendario de estudios planeado desde el nacimiento hasta los 5 años. Esto sigue el protocolo urológico y renal de los CDC para el recién nacido y el niño pequeño con espina bífida (UMPIRE). La meta es encontrar a tiempo una vejiga de alto riesgo, antes de que se dañen los riñones. Escoja una etapa.',
    stageLabel: 'Etapa',
    testsTitle: 'Estudios',
    decideTitle: 'Lo que decidimos',
    note: 'Su equipo puede ajustar este calendario para su hijo o hija. La mayoría de los recién nacidos tienen riñones normales al nacer, pero la vejiga puede cambiar conforme crece.',
    stages: [
      {
        name: 'Nacimiento',
        title: 'Al nacer y la primera estancia en el hospital',
        tests: ['Una sonda Foley drena la vejiga durante el cierre de la espalda, hasta que su bebé se pueda acostar boca arriba', 'Luego, usar sonda cada 6 horas para medir la orina que queda', 'Ultrasonido de riñones y vejiga', 'Todas las familias aprenden a usar la sonda, aunque quizás no se necesite a largo plazo'],
        decide: ['Dejar la sonda si la orina que queda es de menos de 30 mL en la mayoría de las veces durante 3 días seguidos', 'Si no, seguir usando sonda cada 4 horas mientras está despierto'],
      },
      {
        name: '3 meses',
        title: 'Alrededor de los 3 meses',
        tests: ['Urodinamia (videourodinamia, o una cistouretrografía con un estudio de presión de la vejiga)', 'Ultrasonido de riñones y vejiga', 'Gammagrafía DMSA para buscar cicatrices en los riñones (inicial)', 'Análisis de sangre de la función de los riñones (creatinina) y presión arterial'],
        decide: ['Una vejiga “hostil” significa una presión de 40 o más, o una vejiga que aprieta contra un músculo de control apretado. Entonces: usar sonda cada 4 horas mientras está despierto y empezar oxibutinina 3 veces al día', 'Un antibiótico preventivo diario para reflujo de grado V, o para cualquier reflujo con una vejiga hostil'],
      },
      {
        name: '6 y 9 meses',
        title: 'A los 6 y 9 meses',
        tests: ['Visita a la clínica y ultrasonido de riñones y vejiga en cada una', 'Repetir la urodinamia a los 6 meses si la vejiga era hostil, para ver si el tratamiento funciona'],
        decide: ['Ajustar la sonda y el medicamento según los resultados'],
      },
      {
        name: '1 a 3 años',
        title: 'Visitas cada año a los 1, 2 y 3 años',
        tests: ['Ultrasonido de riñones y vejiga', 'Urodinamia alrededor de los 12–15, 24–27 y 36–39 meses', 'Análisis de sangre de la función de los riñones y presión arterial'],
        decide: ['Empezar o ajustar la sonda y la oxibutinina si la vejiga se vuelve hostil'],
      },
      {
        name: '4 a 5 años',
        title: 'Visitas cada año a los 4 y 5 años',
        tests: ['Ultrasonido de riñones y vejiga, análisis de sangre de los riñones y presión arterial cada año', 'Urodinamia solo si la vejiga es hostil o hay reflujo', 'A los 5 años: una segunda gammagrafía DMSA para buscar cicatrices nuevas y un estudio de función del riñón (filtración)'],
        decide: ['Planear el cuidado en la edad escolar, incluyendo usar sonda para mantenerse seco y un programa para el intestino'],
      },
      {
        name: 'En cualquier momento',
        title: 'Entre visitas',
        tests: ['Si se sospecha una infección de orina: un análisis y un cultivo de orina', 'Escapes nuevos, dolor de espalda o cambios en las piernas pueden indicar una médula anclada'],
        decide: ['Su equipo puede aumentar el cuidado más allá de este calendario: usar sonda más seguido, cambiar el medicamento, agregar drenaje durante la noche, o considerar Botox, vesicostomía o ampliación'],
      },
    ],
  },

  takeaways: {
    points: [
      'Una vejiga neurogénica se debe a problemas de los nervios, muchas veces por espina bífida.',
      'El mayor peligro es la presión alta en la vejiga, que puede dañar los riñones.',
      'Usar sonda con regularidad y los medicamentos mantienen baja la presión.',
      'La cirugía puede ayudar cuando otros tratamientos no son suficientes.',
      'El cuidado es de por vida, con estudios y revisiones regulares.',
      'Muchos niños con espina bífida son alérgicos al látex. Use sondas, guantes y materiales sin látex en casa, en la escuela y en el hospital.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: ['Fiebre u orina turbia y con mal olor y se siente enfermo', 'Dificultad para pasar la sonda', 'Escapes nuevos entre una sonda y otra, o dolor de espalda o debilidad en las piernas nuevos', 'Si su hijo o hija tiene una válvula (shunt): dolor de cabeza, vómito o sueño fuera de lo normal — vaya a la sala de emergencias'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
