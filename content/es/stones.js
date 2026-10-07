// Piedras en el riñón, uréter y vejiga — textos del capítulo en español.
export default {
  title: 'Piedras en el riñón, uréter y vejiga',

  embryology: {
    intro:
      'La orina tiene minerales y sales disueltos, como azúcar mezclada en agua. Cuando la orina está demasiado concentrada, se pueden formar cristales muy pequeños. Con el tiempo, los cristales se pueden pegar y crecer hasta formar una piedra.',
    waterLabel: 'Agua',
    water: { low: 'No suficiente', ok: 'Algo', high: 'Bastante' },
    saltLabel: 'Sal en la comida',
    salt: { low: 'Poca', high: 'Mucha' },
    jar: { urine: 'Orina', crystals: 'Cristales', stone: 'Se forma una piedra' },
    texts: {
      bad: 'La orina oscura y concentrada deja que se formen cristales y que se junten en piedras.',
      mid: 'Se forman algunos cristales, pero la mayoría salen con la orina.',
      good: 'La orina clara y aguada mantiene los minerales disueltos, así que no se pueden formar piedras.',
    },
    riskTitle: 'Qué aumenta el riesgo',
    risks: ['No tomar suficiente agua', 'Comidas saladas y procesadas', 'Familiares que han tenido piedras', 'Algunas condiciones médicas, medicamentos o una obstrucción de la orina', 'Moverse poco (por ejemplo, después de una cirugía o con una discapacidad)'],
    bladderTitle: 'Piedras que se forman en la vejiga',
    bladder: 'En los niños, las piedras de la vejiga por lo general se forman cuando la orina se queda en la vejiga: una vejiga que no se vacía por completo (como una vejiga neurogénica), una vejiga agrandada con intestino (ampliación), infecciones repetidas o moco. Tomar bastante líquido y vaciar la vejiga con regularidad, incluyendo lavados de vejiga si se los recetaron, ayuda a prevenirlas.',
  },

  pathology: {
    intro: 'Una piedra que está en el riñón muchas veces no causa dolor. El dolor empieza cuando la piedra pasa al uréter y bloquea la orina.',
    whereLabel: '¿Dónde está la piedra?',
    where: {
      calyx: { name: 'En el riñón', text: 'Por lo general no duele. Se puede encontrar por casualidad en un ultrasonido, o causar sangre en la orina.' },
      upj: { name: 'Saliendo del riñón', text: 'La piedra no deja salir la orina, así que el riñón se hincha. Esto puede causar dolor repentino y fuerte de costado o de espalda.' },
      ureter: { name: 'En el uréter', text: 'Una piedra en el uréter es la que más duele. El uréter aprieta para empujar la piedra hacia abajo, así que el dolor viene en olas fuertes (cólico renal) y puede moverse del costado hacia la barriga o la ingle. Los niños pueden no poder quedarse quietos y muchas veces vomitan.' },
      uvj: { name: 'Cerca de la vejiga', text: 'Es el lugar más estrecho. El dolor baja y puede haber ganas de orinar seguido. Cuando la piedra pasa a la vejiga, el dolor por lo general se quita.' },
      bladder: { name: 'Pasó a la vejiga', text: 'Cuando una piedra del riñón cae a la vejiga, el dolor por lo general se quita. La mayoría salen con la orina en pocos días.' },
      bladderFormed: { name: 'Formada en la vejiga', text: 'Una piedra que se forma en la vejiga puede crecer mucho. Puede causar dolor al terminar de orinar, sangre en la orina, un chorro que se corta de repente, infecciones o escapes nuevos de orina. En niños que usan sonda, puede costar trabajo pasar la sonda.' },
    },
    sizeLabel: 'Tamaño de la piedra',
    sizes: { small: 'Pequeña', large: 'Grande' },
    sizeText: { small: 'Las piedras pequeñas (menos de unos 5 mm, el tamaño de la punta de un borrador de lápiz) por lo general salen solas.', large: 'Las piedras más grandes tienen menos probabilidad de salir solas y más probabilidad de necesitar un procedimiento.' },
    signsTitle: 'Lo que las familias pueden notar',
    signs: ['Dolor fuerte en el costado, la espalda, la barriga o la ingle que viene en olas', 'Vómito', 'Sangre en la orina (rosada, roja o café)', 'Niños pequeños: irritabilidad o dolor de barriga difícil de ubicar', 'Fiebre (una emergencia si una piedra bloquea un riñón infectado)'],
  },

  treatment: {
    intro: 'El tratamiento depende del tamaño de la piedra, de dónde está y de los síntomas. Muchas piedras salen solas.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      pass: {
        name: 'Dejarla salir',
        summary: 'Tomar bastante líquido, medicina para el dolor y a veces un medicamento (como la tamsulosina) que relaja el uréter para ayudar a que salga una piedra del uréter. Cuele la orina para atrapar la piedra y poder analizarla.',
        control: 'Días',
        days: 'días',
        pros: ['Sin procedimiento', 'La mayoría de las piedras pequeñas salen en pocas semanas'],
        cons: ['Dolor mientras sale', 'Necesita seguimiento para asegurarse de que salió'],
      },
      ureteroscopy: {
        name: 'Ureteroscopía',
        summary: 'Una cámara delgada sube por la uretra y la vejiga hasta el uréter. Un láser rompe la piedra y se sacan los pedazos. Se puede dejar un stent (tubito blando) por un tiempo corto.',
        before: 'Antes',
        after: 'Después',
        pros: ['Sin cortes en la piel', 'Saca la piedra directamente'],
        cons: ['Anestesia general', 'Un stent puede ser incómodo hasta que se quita'],
      },
      swl: {
        name: 'Litotricia con ondas de choque',
        summary: 'Ondas de sonido dirigidas desde fuera del cuerpo rompen la piedra en pedazos pequeños que salen con la orina en las siguientes semanas.',
        before: 'Antes',
        after: 'Después',
        pros: ['Sin cortes y sin cámara adentro', 'Buena para algunas piedras del riñón'],
        cons: ['Anestesia general en niños', 'Los pedazos todavía tienen que salir', 'Puede necesitar más de un tratamiento'],
      },
      bladderRemoval: {
        name: 'Sacar una piedra de la vejiga',
        summary:
          'La mayoría de las piedras de la vejiga se rompen con un láser usando una cámara pequeña dentro de la vejiga, y luego se lavan hacia afuera. Las piedras grandes, o las piedras en una vejiga ampliada, se pueden sacar por una pequeña abertura en la parte baja de la barriga.',
        before: 'Antes',
        laser: 'Rota',
        after: 'Sacada',
        pros: ['Saca la piedra por completo', 'Muchas veces sin cortes en la piel'],
        cons: ['Anestesia general', 'Las piedras pueden regresar si la orina sigue quedándose en la vejiga'],
      },
      pcnl: {
        name: 'Por la espalda (NLPC)',
        summary: 'Para piedras grandes del riñón, se hace un pequeño túnel por la espalda directo al riñón para romper y sacar la piedra.',
        pros: ['Mejor para piedras grandes', 'Saca la mayor cantidad de piedra en una sola cirugía'],
        cons: ['Una estancia corta en el hospital', 'Más riesgo de sangrado que otras opciones'],
      },
      prevention: {
        name: 'Prevenir las piedras',
        summary: 'Cuando un niño ya tuvo una piedra, se pueden formar más. Cambios sencillos ayudan mucho. Un examen de orina de 24 horas puede mostrar qué cambiar.',
        tips: ['Tomar agua todo el día; la orina debe verse amarillo claro', 'Comer menos sal y menos comida procesada', 'Mantener cantidades normales de lácteos (no quitar el calcio)', 'El jugo de limón o de naranja puede ayudar', 'Limitar las bebidas azucaradas'],
        pros: ['Baja la probabilidad de piedras nuevas'],
        cons: ['Hábitos a largo plazo'],
      },
    },
  },

  takeaways: {
    points: [
      'Las piedras se forman cuando los minerales de la orina concentrada se pegan, en el riñón o en la vejiga.',
      'Las piedras duelen más cuando bajan por el uréter y bloquean la orina.',
      'Las piedras de la vejiga por lo general se forman cuando la vejiga no se vacía por completo.',
      'Muchas piedras pequeñas salen solas.',
      'Las piedras más grandes se pueden romper o sacar con una cámara, ondas de sonido o una cirugía pequeña.',
      'Tomar más agua y comer menos sal ayudan a prevenir piedras nuevas.',
    ],
    callTitle: 'Vaya a la sala de emergencias de inmediato si hay',
    call: ['Fiebre con dolor de piedra', 'Dolor que no se controla con medicina', 'Vómito y no puede retener líquidos', 'No puede orinar'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
