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
  },

  pathology: {
    intro: 'La vejiga de cada niño se comporta diferente, por eso se hacen estudios (muchas veces urodinamia) para ver qué patrón tiene su hijo o hija. La meta principal es proteger los riñones.',
    typeLabel: 'Patrón',
    pressureLabel: 'Presión en la vejiga',
    kidneyRisk: 'Riesgo para los riñones',
    types: {
      high: {
        name: 'Apretada y que aprieta',
        text: 'La vejiga aprieta por sí sola mientras el músculo de control se queda apretado. La presión sube mucho. La pared de la vejiga se engruesa, y la orina puede regresar y dañar los riñones. Este es el patrón más preocupante.',
      },
      leaky: {
        name: 'Músculo débil, con escapes',
        text: 'El músculo de control no puede cerrar bien, así que la orina se escapa todo el tiempo. La presión se mantiene baja, así que los riñones por lo general están seguros, pero el niño siempre está mojado.',
      },
      floppy: {
        name: 'Grande y flácida',
        text: 'La vejiga no aprieta bien y se estira mucho. No se vacía, y eso causa infecciones y escapes cuando se desborda.',
      },
    },
    bowel: 'Los mismos nervios controlan el intestino, así que el estreñimiento y los accidentes con excremento también son comunes.',
  },

  treatment: {
    intro:
      'El tratamiento mantiene baja la presión de la vejiga, la vacía con regularidad, previene infecciones y ayuda a mantenerse seco. El cuidado es de por vida y los planes cambian conforme los niños crecen.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      cic: {
        name: 'Usar sonda',
        summary: 'Cateterismo intermitente limpio: se pasa un tubo delgado y liso a la vejiga cada 3–4 horas para vaciarla, y luego se saca. Primero aprenden los padres, y muchos niños aprenden a hacerlo solos.',
        action: 'Vaciar con sonda',
        pros: ['Mantiene baja la presión y protege los riñones', 'Menos infecciones', 'Ayuda a mantenerse seco'],
        cons: ['Varias veces todos los días', 'Requiere práctica'],
      },
      medicine: {
        name: 'Medicamento para la vejiga',
        summary: 'Medicamentos como la oxibutinina relajan la vejiga para que aguante más con menos presión.',
        dose: 'Medicamento',
        pros: ['Baja la presión', 'Menos escapes entre una sonda y otra'],
        cons: ['Estreñimiento, boca seca, enrojecimiento de la cara', 'No es suficiente para todos los niños'],
      },
      botox: {
        name: 'Inyecciones de Botox',
        summary: 'Se inyecta Botox en la pared de la vejiga con una cámara pequeña. Calma la vejiga por alrededor de 6 a 9 meses.',
        steps: [
          'Antes: la vejiga aprieta fuerte en momentos equivocados. La presión es alta y la pared está gruesa.',
          'Con el niño o la niña dormido, se pasa una cámara pequeña por la uretra hasta la vejiga. No hay cortes en la piel.',
          'Una aguja muy pequeña que pasa por la cámara inyecta Botox en muchos puntos de la pared de la vejiga.',
          'En las siguientes 1 a 2 semanas, el Botox relaja el músculo de la vejiga. La vejiga guarda más orina con menos presión. Todavía se necesita pasar la sonda.',
          'El efecto se quita después de unos 6 a 9 meses, así que las inyecciones se repiten cuando se necesitan.',
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
    },
  },

  takeaways: {
    points: [
      'Una vejiga neurogénica se debe a problemas de los nervios, muchas veces por espina bífida.',
      'El mayor peligro es la presión alta en la vejiga, que puede dañar los riñones.',
      'Usar sonda con regularidad y los medicamentos mantienen baja la presión.',
      'La cirugía puede ayudar cuando otros tratamientos no son suficientes.',
      'El cuidado es de por vida, con estudios y revisiones regulares.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: ['Fiebre u orina turbia y con mal olor y se siente enfermo', 'Dificultad para pasar la sonda', 'Escapes nuevos entre una sonda y otra, o dolor de espalda o debilidad en las piernas nuevos', 'Si su hijo o hija tiene una válvula (shunt): dolor de cabeza, vómito o sueño fuera de lo normal — vaya a la sala de emergencias'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
