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
    whenTitle: 'Cuándo revisar más a fondo',
    when: ['También se moja durante el día', 'Volvió a mojar la cama después de estar seco 6 meses o más', 'Dolor al orinar, chorro débil o tiene que pujar', 'Mucha sed, orina mucho o baja de peso', 'Estreñimiento o se ensucia la ropa interior', 'Ronca fuerte'],
  },

  treatment: {
    intro:
      'El tratamiento por lo general empieza alrededor de los 6 o 7 años, o antes si al niño o la niña le molesta. El niño debe querer trabajar en esto. Nunca castigue por mojar la cama.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      habits: {
        name: 'Hábitos durante el día',
        summary: 'Los buenos hábitos de vejiga e intestino ayudan a que todo lo demás funcione mejor.',
        tips: ['Tomar la mayoría de los líquidos en la mañana y al principio de la tarde', 'Limitar las bebidas 1–2 horas antes de dormir', 'Evitar cafeína y refrescos en la noche', 'Orinar con regularidad durante el día y justo antes de dormir', 'Tratar el estreñimiento', 'Felicitar las noches secas, pero nunca castigar las mojadas'],
        pros: ['Sencillo y seguro', 'Ayuda a que otros tratamientos funcionen'],
        cons: ['Rara vez quita el problema por sí solo'],
      },
      alarm: {
        name: 'Alarma para mojar la cama',
        summary:
          'Un pequeño sensor en la ropa interior hace sonar una alarma con las primeras gotas de orina. El niño se despierta, se detiene y termina en el baño. Con las semanas, el cerebro aprende a despertarse, o a aguantar, antes de la alarma.',
        control: 'Semanas usando la alarma',
        weeks: 'semanas',
        pros: ['Funciona mejor a largo plazo', 'Muchas veces quita el problema por completo'],
        cons: ['Requiere 2–3 meses de uso todas las noches', 'Al principio los padres muchas veces tienen que ayudar a despertar al niño'],
      },
      desmopressin: {
        name: 'Medicamento desmopresina',
        summary:
          'Una pastilla a la hora de dormir que actúa como la hormona nocturna del cuerpo, para que los riñones produzcan menos orina en la noche. Funciona rápido y es útil para pijamadas y campamentos.',
        dose: 'Desmopresina al dormir',
        pros: ['Funciona en pocos días', 'Buena para noches especiales'],
        cons: ['Muchas veces vuelve a mojar la cama al dejarla', 'No tomar líquidos desde 1 hora antes hasta 8 horas después de la dosis'],
      },
    },
  },

  takeaways: {
    points: [
      'Mojar la cama es común y no es culpa del niño o la niña.',
      'Pasa cuando la producción de orina en la noche, el tamaño de la vejiga y el despertar todavía no van al mismo ritmo.',
      'Es de familia y por lo general mejora con el tiempo.',
      'Las alarmas y la desmopresina pueden ayudar. Nunca castigue por mojar la cama.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: ['Dolor o ardor al orinar, o fiebre', 'Vuelve a mojar la cama después de estar seco 6 meses', 'Mucha sed, orina mucho o baja de peso', 'Se moja durante el día o se ensucia la ropa interior'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
