// Hidrocele — textos del capítulo en español. Las `labels` también las usa el
// capítulo de hernia inguinal.
export default {
  title: 'Hidrocele',

  labels: {
    pouch: 'Bolsa',
    fluid: 'Líquido',
    bowel: 'Intestino',
    testicle: 'Testículo',
    ring: 'Abertura de la barriga',
    stuck: '¡Atorado!',
    tie: 'Amarrado',
  },

  embryology: {
    intro:
      'Cuando el testículo baja de la barriga antes de nacer, jala con él una bolsa delgada del revestimiento de la barriga (el proceso vaginal). Normalmente la parte de arriba de esta bolsa se cierra antes o poco después de nacer. Si no se cierra por completo, puede bajar líquido o intestino.',
    outcomeLabel: 'Qué pasa con la bolsa',
    outcomes: {
      closed: { name: 'Se cierra normal', text: 'La bolsa se sella. Solo queda una capa delgada alrededor del testículo.' },
      fluid: { name: 'Cerrada, con líquido', text: 'La bolsa se cerró, pero quedó algo de líquido alrededor del testículo. Esto es común en recién nacidos y por lo general se quita solo.' },
      thin: { name: 'Abertura pequeña', text: 'Un canal pequeño se queda abierto. El líquido de la barriga puede bajar y volver a subir. Esto es un hidrocele comunicante.' },
      wide: { name: 'Abertura grande', text: 'Un canal ancho se queda abierto. El intestino se puede deslizar adentro. Esto es una hernia inguinal.' },
    },
  },

  pathology: {
    intro:
      'Un hidrocele es una bolsa de líquido alrededor del testículo. Se ve como una hinchazón lisa y blanda del escroto. Por lo general no duele.',
    typeLabel: 'Tipo',
    types: {
      simple: { name: 'No comunicante', text: 'La bolsa está cerrada y el líquido queda atrapado. El tamaño se mantiene más o menos igual. La mayoría se quitan entre 1 y 2 años de edad.' },
      communicating: { name: 'Comunicante', text: 'Un canal pequeño se conecta con la barriga. La hinchazón muchas veces crece durante el día o al llorar, y se hace más pequeña después de dormir.' },
    },
    timeLabel: 'Hora del día',
    times: { morning: 'Mañana', evening: 'Noche' },
    light: 'Alumbrar con una luz',
    lightText: 'El líquido deja pasar la luz, así que un hidrocele brilla. El intestino no. Esta prueba sencilla ayuda a distinguir un hidrocele de una hernia.',
  },

  treatment: {
    intro: 'La mayoría de los hidroceles en bebés no necesitan tratamiento. Se considera la cirugía si dura más de 1 a 2 años, crece, cambia de tamaño durante el día o se encuentra una hernia.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Vigilancia',
        summary: 'Por lo general el cuerpo absorbe el líquido con el tiempo.',
        control: 'Edad',
        months: 'meses',
        pros: ['Sin cirugía', 'La mayoría se quitan entre 1 y 2 años'],
        cons: ['Revisiones para asegurarse de que se está quitando'],
      },
      surgery: {
        name: 'Reparación del hidrocele',
        summary:
          'Por una pequeña herida en el pliegue de la ingle, el cirujano amarra el canal abierto arriba y saca el líquido. Es la misma cirugía que la reparación de una hernia.',
        before: 'Antes',
        after: 'Después de la cirugía',
        pros: ['Lo corrige para siempre', 'Por lo general se va a casa el mismo día', 'Cicatriz pequeña en el pliegue de la piel'],
        cons: ['Anestesia general', 'Algo de hinchazón por unas semanas', 'Rara vez regresa'],
      },
    },
  },

  takeaways: {
    points: [
      'Un hidrocele es líquido alrededor del testículo. Es común en bebés.',
      'Viene de una bolsa que no se cerró por completo antes de nacer.',
      'La mayoría se quitan solos entre 1 y 2 años de edad.',
      'Si el canal se queda abierto, la cirugía lo amarra. Esto también previene una hernia.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo tiene',
    call: [
      'Una hinchazón que se pone dura, duele, está roja o no regresa (vaya a la sala de emergencias)',
      'Vómito con la ingle o el escroto hinchados',
      'Una hinchazón que sigue creciendo',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
