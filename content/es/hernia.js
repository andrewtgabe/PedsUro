// Hernia inguinal — textos del capítulo en español.
export default {
  title: 'Hernia inguinal',

  embryology: {
    intro:
      'Cuando el testículo baja de la barriga antes de nacer, jala con él una bolsa delgada del revestimiento de la barriga. Normalmente la parte de arriba de esta bolsa se cierra. En un niño con hernia inguinal, se queda muy abierta, así que el intestino se puede deslizar hacia la ingle o el escroto. Las niñas tienen la misma bolsa y también pueden tener hernias. En las niñas, el ovario se puede deslizar adentro.',
    outcomeLabel: 'Qué pasa con la bolsa',
  },

  pathology: {
    intro:
      'Una hernia se ve como un bulto en la ingle o el escroto. Muchas veces aparece al llorar, toser o pujar, y se quita cuando el niño o la niña está tranquilo o acostado. Las hernias son más comunes en bebés que nacieron antes de tiempo.',
    stateLabel: 'Intestino',
    states: {
      in: { name: 'En la barriga', text: 'Cuando el niño está relajado, el intestino se queda en la barriga y puede que no haya bulto.' },
      out: { name: 'Se desliza', text: 'Al llorar o pujar, el intestino se desliza hacia la bolsa abierta y hace un bulto blando que se puede regresar con cuidado.' },
      stuck: { name: 'Atorado', text: 'Esto es una hernia encarcelada y es una emergencia. El intestino queda atrapado y no puede regresar. El bulto está duro y duele, y el niño puede vomitar. Se puede cortar el riego de sangre al intestino, y al testículo o al ovario.' },
    },
    light: 'Alumbrar con una luz',
    lightText: 'El intestino no deja pasar la luz como el líquido, y eso ayuda a distinguir una hernia de un hidrocele.',
  },

  treatment: {
    intro:
      'En los niños, las hernias no se cierran solas. La cirugía se programa poco después del diagnóstico para evitar que el intestino se atore. Solo se vuelve urgente si la hernia se atora.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      reduce: {
        name: 'Regresarla con la mano',
        summary:
          'Si el intestino se atora, un médico lo aprieta con cuidado para regresarlo a la barriga, a veces después de un medicamento para que el niño se relaje. Como estuvo atorado, la cirugía se planea en los siguientes uno o dos días. Si no regresa, o si se corta el riego de sangre, se necesita cirugía de emergencia.',
        action: 'Regresar con cuidado',
        pros: ['Alivia la emergencia', 'Permite planear la cirugía con seguridad'],
        cons: ['Puede ser incómodo', 'No siempre funciona', 'Todavía se necesita cirugía'],
      },
      open: {
        name: 'Reparación abierta de la hernia',
        summary:
          'Por una pequeña herida en el pliegue de la ingle, el cirujano encuentra la bolsa abierta y la amarra arriba para que nada pueda volver a bajar. Es el método que más usan los urólogos pediatras.',
        steps: [
          'Se hace una pequeña herida en el pliegue de la piel de la ingle.',
          'Debajo de la capa de músculo, el cirujano encuentra la bolsa abierta junto al cordón espermático.',
          'Si hay intestino en la bolsa, se regresa con cuidado a la barriga.',
          'La bolsa se separa con cuidado del cordón y luego se amarra muy arriba, justo en la abertura de la barriga.',
          'Se quita el resto de la bolsa y se cierran las capas y la piel con puntos que se disuelven. La mayoría de los niños se van a casa el mismo día.',
        ],
        pros: ['La corrige para siempre', 'Por lo general se va a casa el mismo día', 'Cicatriz pequeña en el pliegue de la piel'],
        cons: ['Anestesia general', 'Rara vez regresa (alrededor de 1 de cada 100)', 'Los bebés que nacieron antes de tiempo pueden necesitar quedarse una noche para vigilar su respiración'],
      },
      laparoscopic: {
        name: 'Reparación laparoscópica',
        summary:
          'Otra opción: una cámara pequeña por el ombligo permite al cirujano cerrar la abertura desde adentro. El cirujano también puede revisar el otro lado y cerrarlo si está abierto.',
        steps: [
          'Una cámara pequeña entra por el ombligo, con uno o dos instrumentos muy pequeños.',
          'Desde dentro de la barriga, el cirujano ve el anillo abierto en la parte de arriba de la bolsa.',
          'Si hay intestino en la bolsa, se regresa con cuidado a la barriga.',
          'Se pone un punto alrededor de la abertura y se amarra, cerrándola desde adentro.',
          'También se revisa el otro lado y se cierra si está abierto. Las heridas muy pequeñas se cierran con pegamento o un punto.',
        ],
        pros: ['Puede revisar y corregir ambos lados', 'Heridas muy pequeñas'],
        cons: ['Anestesia general', 'No se usa en todos los niños'],
      },
    },
  },

  takeaways: {
    points: [
      'Una hernia inguinal es una bolsa abierta que deja que el intestino se deslice hacia la ingle o el escroto.',
      'En los niños no se quita sola.',
      'Se recomienda cirugía para amarrar la bolsa poco después del diagnóstico.',
      'Una hernia atorada es una emergencia.',
    ],
    callTitle: 'Vaya a la sala de emergencias de inmediato si hay',
    call: [
      'Un bulto duro, que duele, está rojo o no regresa',
      'Un bulto con vómito, irritabilidad que no se calma o la barriga hinchada',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
