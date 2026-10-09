// Estenosis del meato — textos del capítulo en español.
export default {
  title: 'Estenosis del meato',

  labels: {
    glans: 'Cabeza (glande)',
    foreskin: 'Prepucio',
    opening: 'Abertura',
    shaft: 'Tronco',
    tight: 'Muy apretado',
    trapped: 'Atorado',
  },

  embryology: {
    intro:
      'El meato es la abertura en la punta del pene por donde sale la orina. Estenosis del meato significa que esta abertura se ha hecho demasiado estrecha. Pasa casi solo en niños circuncidados.',
    timeLabel: 'Tiempo en pañales después de la circuncisión',
    times: [
      { name: 'Recién nacido', meatus: 0, sore: false, text: 'Sin prepucio, la punta del pene ya no está cubierta.' },
      { name: 'Meses', meatus: 0.35, sore: true, text: 'La punta descubierta roza con los pañales mojados. Se puede poner roja e irritada una y otra vez.' },
      { name: 'Años', meatus: 0.85, sore: false, text: 'Al sanar la irritación, se puede formar una cicatriz delgada sobre la abertura que la hace más pequeña. Por lo general se nota después de que aprende a ir al baño.' },
    ],
    note: 'La estenosis del meato no la causó nada que los padres hicieran mal. Es un problema común y menor que se corrige fácilmente.',
  },

  pathology: {
    intro: 'Una abertura estrecha cambia cómo sale la orina, como cuando se pone el pulgar en la punta de una manguera de jardín.',
    modeLabel: 'Abertura',
    modes: { normal: 'Normal', narrow: 'Estrecha' },
    pee: 'Orinando',
    texts: {
      normal: 'Una abertura normal hace un chorro parejo que sale derecho hacia adelante.',
      narrow: 'Una abertura estrecha hace un chorro delgado y rápido que muchas veces sale hacia arriba o se dispersa. Puede tardar más en orinar.',
    },
    signsTitle: 'Lo que las familias pueden notar',
    signs: [
      'El chorro sale hacia arriba o se dispersa, y cuesta trabajo apuntar (puede orinar por encima del inodoro)',
      'Tarda mucho en orinar, o tiene que pujar',
      'Ardor o dolor al orinar',
      'Unas gotas de sangre en la punta o en la ropa interior',
      'Rara vez, escapes de orina durante el día o infecciones de orina',
    ],
  },

  treatment: {
    intro: 'La estenosis del meato no mejora sola. Si está causando problemas, un procedimiento corto llamado meatotomía la corrige.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      meatotomy: {
        name: 'Meatotomía',
        summary:
          'El médico hace un corte muy pequeño en la parte de abajo de la abertura para agrandarla, y luego pone unos puntos muy pequeños que se disuelven. Se hace con el niño dormido (anestesia general) o con sedación profunda.',
        steps: [
          'La abertura en la punta está demasiado estrecha. El chorro es delgado y sale hacia arriba.',
          'Al niño se le da medicina para dormir (anestesia general) o para estar muy relajado y dormido (sedación), así que no lo siente.',
          'Se pone por un momento una pinza pequeña en la parte de abajo de la abertura. Esto aprieta el tejido para que haya poco o nada de sangrado.',
          'Se hace un corte muy pequeño a lo largo de esa línea apretada en la parte de abajo. La abertura queda más ancha.',
          'Por lo general se ponen de 3 a 5 puntos muy pequeños que se disuelven a lo largo de los bordes para que la abertura se mantenga ancha mientras sana.',
          'En casa, ponga pomada (como vaselina) en la punta varias veces al día. Si se le enseñó cómo, abra con cuidado la abertura por unas semanas para que no se pegue. Orinar puede arder por unos días.',
          'Ahora el chorro sale derecho y fuerte.',
        ],
        pros: ['Rápida: solo unos minutos', 'Endereza el chorro de inmediato', 'Funciona muy bien'],
        cons: ['Arde al orinar por unos días', 'Se puede volver a estrechar si no se hacen los cuidados'],
      },
      aftercare: {
        name: 'Cuidados después',
        summary: 'Durante las primeras semanas, evitar que la abertura nueva se pegue ayuda a que sane amplia.',
        tips: [
          'Poner pomada (como vaselina) en la punta varias veces al día',
          'Si se lo enseñaron, abrir con cuidado la abertura una o dos veces al día por unas semanas',
          'Un baño tibio puede aliviar el ardor',
        ],
        pros: ['Ayuda a evitar que la abertura se vuelva a estrechar'],
        cons: ['Unas semanas de cuidado diario'],
      },
    },
  },

  takeaways: {
    points: [
      'La estenosis del meato es una abertura estrecha en la punta del pene.',
      'Pasa sobre todo en niños circuncidados, por la irritación del pañal.',
      'Muchas veces causa un chorro delgado que sale hacia arriba o se dispersa.',
      'Un procedimiento rápido (meatotomía) agranda la abertura.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo tiene',
    call: ['Fiebre con dolor al orinar', 'No puede orinar, o solo gotea', 'Sangrado que no para después de una meatotomía'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
