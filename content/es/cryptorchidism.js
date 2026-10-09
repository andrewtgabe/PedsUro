// Testículo no descendido (criptorquidia) — textos del capítulo en español.
export default {
  title: 'Testículo no descendido',

  embryology: {
    intro:
      'Los testículos empiezan a crecer dentro de la barriga, cerca de los riñones. Antes de nacer, bajan por un canal en la ingle hasta el escroto. Una guía como un cordón (el gubernáculo) ayuda a mostrar el camino.',
    stageLabel: 'Etapa',
    stages: [
      { name: 'Al inicio', title: 'Cerca de los riñones', text: 'Los testículos se forman arriba en la barriga, cerca de los riñones.', pos: 0.05 },
      { name: '3 meses', title: 'Bajan a la ingle', text: 'Alrededor de los 3 meses de embarazo, los testículos han bajado hasta la abertura interna del canal de la ingle.', pos: 0.25 },
      { name: '6–7 meses', title: 'Por el canal', text: 'Alrededor de los 6 a 7 meses de embarazo, los testículos pasan por el canal de la ingle. Las hormonas de los testículos ayudan con esto.', pos: 0.6 },
      { name: 'Nacimiento', title: 'En el escroto', text: 'La mayoría de los testículos llegan al escroto al nacer. Los bebés que nacen antes de tiempo tienen más probabilidad de tener un testículo que no terminó el viaje.', pos: 1 },
    ],
    stopTitle: '¿Dónde se puede quedar un testículo?',
    stopText:
      'Un testículo se puede quedar en cualquier parte del camino. La mayoría de los testículos no descendidos están en la ingle y se pueden sentir. Alrededor de 3 de cada 10 no se pueden sentir porque están dentro de la barriga o no existen.',
    labels: { kidney: 'Riñón', ring: 'Abertura interna', canal: 'Canal de la ingle', scrotum: 'Escroto', muscle: 'El músculo lo sube', guide: 'Guía', clip: 'Vasos con grapa', collateral: 'Riego de sangre de respaldo', camera: 'Cámara', sacTie: 'Bolsa amarrada' },
  },

  pathology: {
    intro:
      'Alrededor de 3 de cada 100 bebés varones nacidos a término tienen un testículo no descendido. Muchos bajan solos en los primeros meses. Si a los 6 meses todavía no ha bajado, es poco probable que baje por sí solo.',
    whereLabel: '¿Dónde está el testículo?',
    where: {
      abdomen: { name: 'En la barriga', text: 'No se puede sentir en el examen. Se usa una cirugía con cámara pequeña (laparoscopía) para encontrarlo.' },
      canal: { name: 'En la ingle', text: 'Muchas veces se puede sentir en la ingle. Es el lugar más común.' },
      high: { name: 'Arriba del escroto', text: 'Está en la parte alta del escroto y no se queda abajo.' },
      retractile: { name: 'Sube y baja', text: 'Un testículo retráctil sí bajó por completo, pero un músculo fuerte lo sube, sobre todo cuando el niño tiene frío o está nervioso. Se puede bajar con cuidado y se queda un rato. Por lo general solo necesita revisiones una vez al año, no cirugía.' },
    },
    whyTitle: 'Por qué importa',
    why: [
      'Fertilidad: el escroto mantiene los testículos un poco más frescos que el cuerpo, y eso lo necesitan para producir espermatozoides más adelante.',
      'Cáncer: el riesgo de cáncer de testículo es un poco más alto. Tener el testículo en el escroto hace que sea fácil revisarlo.',
      'Hernia: muchos testículos no descendidos tienen una bolsa abierta (hernia) al lado.',
      'Torsión y golpes: un testículo en la ingle se puede torcer o lastimar más fácilmente.',
    ],
  },

  treatment: {
    intro:
      'La cirugía tiene dos metas principales: ayudar a que el testículo produzca espermatozoides normalmente más adelante y ponerlo donde se pueda sentir con facilidad. Los niños con un testículo no descendido tienen un riesgo un poco mayor de cáncer de testículo, y un testículo en el escroto se puede revisar para buscar bolitas. Si el testículo no ha bajado a los 6 meses de edad, se recomienda cirugía, idealmente antes de los 18 meses. Por lo general no se recomiendan las inyecciones de hormonas.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      wait: {
        name: 'Esperar hasta los 6 meses',
        summary:
          'Muchos testículos bajan solos en los primeros meses después de nacer. Revisamos de nuevo antes de decidir sobre la cirugía.',
        control: 'Edad',
        months: 'meses',
        pros: ['Algunos testículos bajan sin cirugía'],
        cons: ['Después de los 6 meses, rara vez bajan solos'],
      },
      orchiopexy: {
        name: 'Orquidopexia',
        summary:
          'Por una pequeña herida en la ingle o en el escroto, el cirujano libera el testículo, cierra cualquier bolsa de hernia y baja el testículo a un pequeño bolsillo en el escroto. Un punto lo mantiene ahí.',
        steps: [
          'Se hace una pequeña herida en el pliegue de la piel de la ingle.',
          'Se encuentra el testículo en el canal de la ingle y se libera del tejido que lo sujeta ahí.',
          'La mayoría de los testículos no descendidos tienen una bolsa abierta (saco de hernia) junto al cordón. Se separa del cordón y se amarra muy arriba.',
          'Los vasos sanguíneos y el conducto deferente se liberan con cuidado para que haya suficiente largo para llegar al escroto.',
          'Se hace una segunda herida pequeña en el escroto para hacer un bolsillo debajo de la piel, y se baja el testículo hasta ahí.',
          'El testículo se cose en su lugar en el bolsillo, y las dos heridas se cierran con puntos que se disuelven. La mayoría de los niños se van a casa el mismo día.',
        ],
        pros: ['Pone el testículo donde puede funcionar y revisarse', 'Por lo general se va a casa el mismo día', 'Funciona muy bien, más de 9 de cada 10 veces'],
        cons: ['Anestesia general', 'Rara vez el testículo vuelve a subir o se hace más pequeño'],
      },
      fsOne: {
        name: 'Fowler-Stephens en una etapa',
        summary:
          'Para un testículo que no se puede sentir, una cámara pequeña por el ombligo lo encuentra. Si sus vasos sanguíneos principales son demasiado cortos para llegar al escroto, el cirujano los engrapa y los corta, y baja el testículo en la misma cirugía. Después, el testículo vive de vasos de respaldo más pequeños que van junto al conducto deferente. Si el testículo es muy pequeño o no existe, se puede quitar en su lugar.',
        steps: [
          'Una cámara pequeña entra por el ombligo, con dos instrumentos muy pequeños.',
          'Se encuentra el testículo dentro de la barriga, cerca de la abertura interna del canal de la ingle.',
          'Sus vasos sanguíneos principales son demasiado cortos para llegar al escroto, así que se engrapan y se cortan.',
          'Ahora el testículo vive de los vasos de respaldo más pequeños que van junto al conducto deferente.',
          'El testículo se jala con cuidado hacia abajo por un camino nuevo y más corto hasta el escroto.',
          'Se cose en un pequeño bolsillo en el escroto. Todo se hace en una sola cirugía.',
        ],
        pros: ['Una sola cirugía', 'Heridas pequeñas', 'Encuentra testículos que no se pueden sentir'],
        cons: ['Anestesia general', 'El testículo se puede hacer más pequeño si el riego de sangre de respaldo no es suficiente'],
      },
      fsTwo: {
        name: 'Fowler-Stephens en dos etapas',
        summary:
          'La misma idea, en dos cirugías. En la primera, se engrapan los vasos sanguíneos principales con una cámara pequeña y el testículo se deja en su lugar. Durante unos 6 meses, los vasos de respaldo junto al conducto deferente se hacen más fuertes. En la segunda cirugía, se baja el testículo al escroto.',
        steps: [
          'Etapa 1: una cámara pequeña entra por el ombligo.',
          'Se encuentra el testículo dentro de la barriga.',
          'Se engrapan los vasos sanguíneos principales. El testículo se deja donde está.',
          'Durante unos 6 meses, los vasos de respaldo junto al conducto deferente se hacen más fuertes.',
          'Etapa 2: la cámara vuelve a entrar y se cortan los vasos engrapados.',
          'El testículo se jala con cuidado hacia abajo hasta el escroto.',
          'Se cose en un pequeño bolsillo en el escroto.',
        ],
        pros: ['Da tiempo a que crezca el riego de sangre de respaldo', 'Heridas pequeñas'],
        cons: ['Dos cirugías, con unos 6 meses de diferencia', 'Anestesia general cada vez', 'El testículo todavía se puede hacer más pequeño'],
      },
      retractile: {
        name: 'Testículo retráctil',
        summary:
          'No se necesita cirugía. Como algunos testículos retráctiles después se quedan arriba (ascienden), los revisamos una vez al año hasta la pubertad.',
        pull: 'El músculo lo sube',
        pros: ['Sin cirugía'],
        cons: ['Revisiones una vez al año'],
      },
    },
  },

  takeaways: {
    points: [
      'Un testículo no descendido no terminó su viaje de la barriga al escroto antes de nacer.',
      'Muchos bajan solos en los primeros 6 meses.',
      'Si no, la cirugía (orquidopexia) es mejor entre los 6 y los 18 meses de edad.',
      'La cirugía ayuda a que el testículo produzca espermatozoides más adelante y permite revisarlo para buscar bolitas, ya que el riesgo de cáncer es un poco más alto.',
      'De adolescentes, los niños deben aprender a revisarse los testículos con regularidad.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo tiene',
    call: [
      'Dolor o hinchazón repentina en la ingle o el escroto (vaya a la sala de emergencias)',
      'Un bulto en la ingle que aparece y desaparece',
      'Enrojecimiento o secreción en la herida después de la cirugía',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
