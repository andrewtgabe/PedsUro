// Torsión testicular — textos del capítulo en español.
export default {
  title: 'Torsión testicular',

  embryology: {
    intro:
      'Cada testículo cuelga de un cordón (el cordón espermático). El cordón lleva los vasos sanguíneos que alimentan al testículo. Normalmente la parte de atrás del testículo está pegada dentro del escroto, así que no puede girar.',
    shapeLabel: 'Cómo está sujeto el testículo',
    shapes: { typical: 'Típico', bell: 'Badajo de campana' },
    spin: 'Intente torcerlo',
    texts: {
      typical: 'El testículo está pegado al escroto por la parte de atrás. Se puede mover un poco, pero no puede dar vueltas.',
      bell: 'La bolsa alrededor del testículo se une muy arriba en el cordón, así que el testículo cuelga suelto como el badajo dentro de una campana. Puede girar y torcer el cordón. Esta forma por lo general está en los dos lados.',
    },
    note: 'La torsión es más común en adolescentes, pero puede pasar a cualquier edad, incluso antes de nacer. En recién nacidos la torsión pasa de otra forma: se tuerce todo el cordón, con todo y bolsa.',
    labels: { cord: 'Cordón espermático', testicle: 'Testículo', epididymis: 'Epidídimo', sac: 'Bolsa (túnica)', attached: 'Pegado aquí', artery: 'Arteria' },
  },

  pathology: {
    intro:
      'Cuando el testículo gira, su cordón se tuerce como una toalla exprimida. La torsión aprieta los vasos sanguíneos. Sin riego de sangre, el testículo empieza a dañarse en pocas horas.',
    twistLabel: 'Torsión',
    hoursLabel: 'Horas desde que empezó el dolor',
    hoursUnit: 'horas',
    savedLabel: 'Probabilidad de salvar el testículo',
    saved: [
      [6, 'Muy buena: casi todos (alrededor de 97 de cada 100)'],
      [12, 'Buena: alrededor de 8 de cada 10'],
      [24, 'Alrededor de la mitad'],
      [48, 'Más baja: alrededor de 1 de cada 4'],
      [Infinity, 'Baja: menos de 1 de cada 10'],
    ],
    savedNote: 'Estos son números aproximados de estudios. Cada caso es diferente, por eso la cirugía nunca debe esperar.',
    flowOpen: 'La sangre todavía fluye.',
    flowClosed: 'Se cortó el riego de sangre.',
    signsTitle: 'Señales de alarma: vaya a la sala de emergencias de inmediato',
    signs: [
      'Dolor repentino y fuerte en un testículo o en el escroto',
      'Hinchazón o enrojecimiento del escroto',
      'Dolor de barriga, náusea o vómito',
      'Un testículo más arriba de lo normal o acostado de lado',
      'Dolor que despierta al niño o que empieza durante el deporte',
    ],
    noteTitle: 'No espere',
    note: 'A los niños y adolescentes les puede dar vergüenza decirlo. Enséñeles a avisar de inmediato si les duele un testículo.',
  },

  treatment: {
    intro:
      'La torsión es una emergencia. Se puede hacer un ultrasonido si no retrasa la cirugía, pero la cirugía no debe esperar.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      surgery: {
        name: 'Cirugía de emergencia',
        summary:
          'Por una pequeña herida en el escroto, el cirujano destuerce el cordón y espera a que regrese el color. Luego se cose el testículo en su lugar para que no se pueda volver a torcer (orquidopexia). También se cose el otro lado, porque por lo general tiene la misma forma de badajo de campana.',
        steps: [
          'El cordón está torcido. La sangre no llega al testículo, y empieza a ponerse oscuro.',
          'Con el niño dormido, se hace un corte pequeño en la piel del escroto.',
          'Se abre la bolsa alrededor del testículo y se saca el testículo para que el cirujano pueda ver el cordón torcido.',
          'Se destuerce el cordón.',
          'El testículo se envuelve en gasa tibia y húmeda, y el cirujano espera a que regresen el color rosado y el flujo de sangre.',
          'Si se ve sano, se cose por dentro del escroto para que no se pueda volver a torcer (orquidopexia).',
          'El otro testículo también se cose en su lugar, porque por lo general tiene la misma forma. La mayoría de los niños se van a casa el mismo día.',
        ],
        pros: ['La mejor oportunidad de salvar el testículo', 'Previene torsiones futuras en los dos lados', 'Por lo general se va a casa el mismo día'],
        cons: ['Anestesia general', 'Hinchazón y molestia por una o dos semanas'],
      },
      manual: {
        name: 'Destorcer con la mano',
        summary:
          'A veces un médico puede girar el testículo de regreso con la mano en la sala de emergencias, por lo general hacia afuera, como abriendo un libro. Esto puede regresar el riego de sangre más rápido, pero todavía se necesita cirugía para coser los dos testículos en su lugar.',
        action: 'Girarlo de regreso',
        pros: ['Puede regresar el riego de sangre rápidamente'],
        cons: ['Duele', 'No siempre funciona', 'Todavía se necesita cirugía'],
      },
      removal: {
        name: 'Si no se puede salvar el testículo',
        summary:
          'Si el testículo estuvo demasiado tiempo sin sangre, se quita (orquiectomía). El otro testículo se cose en su lugar para protegerlo. Un testículo sano por lo general es suficiente para tener hormonas y fertilidad normales. Más adelante se puede poner un testículo artificial (prótesis) si se desea.',
        steps: [
          'El cordón ha estado torcido por mucho tiempo, y el testículo se puso muy oscuro.',
          'Con el niño dormido, se hace un corte pequeño en el escroto.',
          'Se destuerce el cordón, pero aun después de esperar, el color y el flujo de sangre no regresan.',
          'Se amarra el cordón y se quita el testículo (orquiectomía). El otro testículo se cose en su lugar para protegerlo.',
          'Más adelante, si se desea, se puede poner un testículo artificial (prótesis) para que el escroto se vea igual de los dos lados.',
        ],
        pros: ['Quita el tejido muerto que puede causar problemas', 'El otro testículo queda protegido'],
        cons: ['Pérdida de un testículo', 'Una prótesis necesita otra cirugía'],
      },
    },
  },

  takeaways: {
    points: [
      'La torsión testicular es cuando el testículo se tuerce y se corta su propio riego de sangre.',
      'Es una emergencia. Mientras más rápido el tratamiento, mejor la probabilidad de salvar el testículo.',
      'La cirugía destuerce el testículo y cose los dos lados en su lugar.',
      'Los niños deben saber que tienen que avisar a un adulto de inmediato si les duele un testículo.',
    ],
    callTitle: 'Vaya a la sala de emergencias de inmediato si hay',
    call: [
      'Dolor repentino y fuerte en el testículo o el escroto',
      'Dolor de testículo con náusea o vómito',
      'Un testículo hinchado, rojo o duro',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
