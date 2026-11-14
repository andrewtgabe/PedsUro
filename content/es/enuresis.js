// Mojar la cama (enuresis nocturna) — textos del capítulo en español.
export default {
  title: 'Mojar la cama',

  chart: {
    title: 'Orina en la vejiga durante la noche',
    bedtime: 'Hora de dormir',
    morning: 'Mañana',
    capacity: 'Vejiga llena',
    wakes: 'Se despierta a orinar',
    wet: 'Cama mojada',
    dry: '¡Seco!',
    alarm: 'Alarma',
  },

  embryology: {
    intro:
      'Mantenerse seco en la noche es una habilidad que el cuerpo aprende al crecer, como aprender a caminar. Tres cosas tienen que funcionar juntas. Mojar la cama pasa cuando una o más todavía no están listas.',
    togglesTitle: 'Pruebe cada una',
    factors: {
      urine: { name: 'Produce mucha orina en la noche', text: 'Normalmente una hormona (llamada ADH o vasopresina) hace que se produzca menos orina en la noche. En algunos niños todavía no ha madurado.' },
      bladder: { name: 'La vejiga aguanta menos en la noche', text: 'Algunas vejigas son más pequeñas o aprietan antes de estar llenas, sobre todo con estreñimiento.' },
      sleep: { name: 'Le cuesta despertarse', text: 'El cerebro no se despierta con la sensación de la vejiga llena. Muchas veces son niños de sueño muy profundo.' },
    },
    family: 'Mojar la cama es de familia. Si uno de los padres mojaba la cama de niño, la probabilidad es de unos 4 de cada 10; si los dos lo hacían, unos 7 de cada 10.',
  },

  pathology: {
    intro:
      'Mojar la cama es muy común y mejora poco a poco conforme los niños crecen. No es por flojera y no es culpa del niño o la niña.',
    ageLabel: 'Edad',
    years: 'años',
    rateText: 'de cada 100 niños todavía mojan la cama a esta edad',
    each: 'Cada año, unos 15 de cada 100 niños que mojan la cama dejan de hacerlo por sí solos.',
    normalAt5: 'A los 5 años, mojar la cama todavía se considera normal. El tratamiento por lo general empieza alrededor de los 6 o 7 años.',
    whenTitle: 'Cuándo revisar más a fondo',
    when: ['También se moja durante el día', 'Volvió a mojar la cama después de estar seco 6 meses o más', 'Dolor al orinar, chorro débil o tiene que pujar', 'Mucha sed, orina mucho o baja de peso', 'Estreñimiento o se ensucia la ropa interior', 'Ronca fuerte (puede ser señal de amígdalas grandes o apnea del sueño)'],
  },

  treatment: {
    intro:
      'El tratamiento por lo general empieza alrededor de los 6 o 7 años, o antes si al niño o la niña le molesta. El niño debe querer trabajar en esto. Nunca castigue por mojar la cama.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      firstVisit: {
        name: 'En la primera visita',
        summary: 'La mayoría de los niños solo necesitan una conversación, un examen y un análisis sencillo de orina. Solo se necesitan más pruebas si algo indica otro problema.',
        checks: [
          'Preguntas sobre mojar la cama, orinar durante el día, hacer popó, dormir y roncar',
          'Un examen corto de la barriga, la espalda y los genitales',
          'Un análisis de orina para buscar azúcar (diabetes) e infección',
          'Un diario de vejiga de 2 días: lo que toma su hijo o hija y cuándo orina',
          'Una revisión para buscar estreñimiento',
          'Un ultrasonido u otras pruebas solo si se moja durante el día, tiene un chorro débil o vuelve a mojar la cama después de estar seco',
        ],
        pros: ['Por lo general es rápido y sencillo', 'Encuentra problemas que necesitan otro tratamiento'],
        cons: ['El diario requiere un poco de esfuerzo en casa'],
      },
      habits: {
        name: 'Hábitos durante el día',
        summary: 'Los buenos hábitos de vejiga e intestino ayudan a que todo lo demás funcione mejor.',
        habits: ['Tomar la mayoría de los líquidos en la mañana y al principio de la tarde', 'Limitar las bebidas 1–2 horas antes de dormir', 'Evitar cafeína y refrescos en la noche', 'Orinar con regularidad durante el día y justo antes de dormir', 'Tratar el estreñimiento', 'Felicitar las noches secas, pero nunca castigar las mojadas'],
        pros: ['Sencillo y seguro', 'Ayuda a que otros tratamientos funcionen'],
        cons: ['Rara vez quita el problema por sí solo'],
      },
      alarm: {
        name: 'Alarma para mojar la cama',
        summary:
          'Un pequeño sensor en la ropa interior hace sonar una alarma con las primeras gotas de orina. Con las semanas, el cerebro aprende a despertarse, o a aguantar, antes de la alarma. Alrededor de 2 de cada 3 niños dejan de mojar la cama, y el problema regresa con menos frecuencia que después del medicamento. Siga usándola hasta que su hijo o hija tenga 14 noches secas seguidas.',
        scene: { room: 'Recámara', unit: 'Alarma', ring: '¡Bip! ¡Bip!', sensor: 'Sensor en la ropa interior', chart: 'Noches secas seguidas', lastDrink: 'Última bebida', noDrinks: 'Sin bebidas', pill: 'Pastilla', urine: 'Orina producida', dry: '¡Seco!' },
        steps: [
          'Al acostarse: su hijo o hija orina, luego se pone el sensor en la ropa interior y la alarma en la parte de arriba de la pijama.',
          'Con las primeras gotas de orina, suena la alarma.',
          'Al principio, muchos niños no se despiertan. Uno de los padres va de inmediato y le ayuda a despertarse por completo.',
          'Su hijo o hija deja de orinar, camina al baño y termina allí.',
          'Juntos, cambien la ropa interior y las sábanas mojadas, reinicien la alarma y vuelvan a la cama. Marquen la tabla cada mañana.',
          'Después de unas semanas, su hijo o hija empieza a despertarse antes de la alarma, o aguanta hasta la mañana. Por lo general toma de 2 a 3 meses.',
          'Cuando su hijo o hija tenga 14 noches secas seguidas, pueden dejar de usar la alarma.',
        ],
        pros: ['Funciona mejor a largo plazo', 'Alrededor de 2 de cada 3 dejan de mojar la cama', 'El problema regresa con menos frecuencia que después del medicamento'],
        cons: ['Requiere 2–3 meses de uso todas las noches', 'Al principio los padres muchas veces tienen que ayudar a despertar al niño'],
      },
      desmopressin: {
        name: 'Medicamento desmopresina',
        summary:
          'Una pastilla a la hora de dormir que actúa como la hormona nocturna del cuerpo, para que los riñones produzcan menos orina en la noche. Alrededor de 7 de cada 10 niños tienen menos noches mojadas, pero muchos vuelven a mojar la cama al dejarla. Funciona mejor en niños que producen mucha orina en la noche, y se puede usar junto con una alarma. Es útil para pijamadas y campamentos.',
        scene: { room: 'Recámara', unit: 'Alarma', ring: '¡Bip!', sensor: 'Sensor', chart: 'Noches secas', lastDrink: 'Última bebida', noDrinks: 'Sin bebidas', pill: 'Pastilla', urine: 'Orina producida', dry: '¡Seco!' },
        steps: [
          'Una hora antes de dormir: la última bebida de la noche. Su hijo o hija orina antes de acostarse.',
          'Al acostarse: su hijo o hija toma la pastilla con solo un sorbito de agua.',
          'Nada de bebidas por 8 horas después de la pastilla. Con el medicamento, demasiada agua puede bajar la sal en la sangre, lo que puede causar dolor de cabeza o vómito.',
          'Durante la noche, los riñones producen menos orina, así que la vejiga no se llena de más. Más mañanas secas.',
          'Se usa todas las noches o solo en noches especiales. Para dejarla, muchas veces bajamos la dosis poco a poco. Si vuelve a mojar la cama, una alarma puede ayudar.',
        ],
        pros: ['Funciona en pocos días', 'Buena para noches especiales'],
        cons: ['Muchas veces vuelve a mojar la cama al dejarla', 'No tomar líquidos desde 1 hora antes hasta 8 horas después de la dosis'],
      },
      combined: {
        name: 'Si lo primero no funciona',
        summary: 'Algunos niños necesitan más de un tratamiento. Escogemos según lo que está causando que moje la cama.',
        items: [
          'Alarma y desmopresina juntas, para niños que siguen mojando la cama con una sola',
          'Un medicamento que relaja la vejiga (como la oxibutinina) cuando la vejiga es pequeña o se aprieta antes de tiempo, muchas veces junto con desmopresina',
          'Tratar por completo el estreñimiento, lo que puede ayudar a que la vejiga aguante más',
        ],
        pros: ['Ayuda a niños que no respondieron a un solo tratamiento'],
        cons: ['Más de un medicamento o herramienta', 'Los medicamentos para la vejiga pueden causar estreñimiento o boca seca'],
      },
    },
  },

  takeaways: {
    points: [
      'Mojar la cama es común y no es culpa del niño o la niña.',
      'Pasa cuando la producción de orina en la noche, el tamaño de la vejiga y el despertar todavía no van al mismo ritmo.',
      'Es de familia y por lo general mejora con el tiempo.',
      'Tratar el estreñimiento muchas veces ayuda.',
      'Las alarmas y la desmopresina pueden ayudar. Nunca castigue por mojar la cama.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: ['Dolor o ardor al orinar, o fiebre', 'Vuelve a mojar la cama después de estar seco 6 meses', 'Mucha sed, orina mucho o baja de peso', 'Se moja durante el día o se ensucia la ropa interior'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
