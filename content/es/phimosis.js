// Fimosis y parafimosis — textos del capítulo en español.
export default {
  title: 'Fimosis y parafimosis',

  labels: {
    glans: 'Cabeza (glande)',
    foreskin: 'Prepucio',
    opening: 'Abertura',
    shaft: 'Tronco',
    tight: 'Muy apretado',
    trapped: 'Atorado e hinchado',
  },

  embryology: {
    intro:
      'El prepucio es la piel que cubre la cabeza del pene. Al nacer, normalmente está pegado a la cabeza y la abertura es pequeña. Esto se llama fimosis fisiológica y es normal. Con los años, el prepucio se despega y se afloja poco a poco por sí solo.',
    ageLabel: 'Edad',
    ages: [
      { name: 'Recién nacido', limit: 0.08, text: 'El prepucio está pegado a la cabeza y no se puede bajar. Esto es normal.' },
      { name: '3 años', limit: 0.35, text: 'Empieza a aflojarse. Puede bajar un poco.' },
      { name: '6 años', limit: 0.55, text: 'Se despega más. Las bolitas blancas (esmegma) debajo del prepucio son células normales de la piel, no una infección.' },
      { name: '10 años', limit: 0.8, text: 'Muchos niños ya pueden bajarlo casi por completo.' },
      { name: 'Adolescente', limit: 1, text: 'La mayoría de los niños pueden bajar el prepucio por completo en la adolescencia.' },
    ],
    pullLabel: 'Bajar con cuidado',
    note: 'Nunca baje el prepucio a la fuerza. Forzarlo puede causar desgarros y cicatrices que lo aprietan más.',
  },

  pathology: {
    intro: 'Un prepucio apretado por lo general es normal en niños pequeños. Algunas situaciones necesitan atención.',
    typeLabel: 'Situación',
    types: {
      normal: { name: 'Prepucio apretado normal', text: 'Piel apretada pero sana que se aflojará con el tiempo. No necesita tratamiento a menos que cause problemas.' },
      balloon: { name: 'Se infla', text: 'El prepucio se infla como un globo al orinar y luego se vacía. Esto es común y por lo general no hace daño en niños pequeños.' },
      scarred: { name: 'Abertura con cicatriz', text: 'Un anillo blanco y firme de cicatriz en la abertura (muchas veces por una condición de la piel llamada liquen escleroso). No se afloja por sí solo y por lo general necesita tratamiento.' },
      para: { name: 'Parafimosis', text: 'El prepucio se bajó y se quedó atorado detrás de la cabeza. Aprieta como una liga apretada, así que la cabeza y el prepucio se hinchan. Esto es una emergencia.' },
    },
    pee: 'Orinando',
    pullLabel: 'Bajar con cuidado',
  },

  treatment: {
    intro: 'La mayoría de los niños solo necesitan un cuidado suave. El tratamiento es para una abertura con cicatriz, infecciones o hinchazón repetidas, dificultad para orinar o parafimosis.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      care: {
        name: 'Cuidado suave',
        summary: 'Lave por fuera con agua durante el baño. Cuando el prepucio se afloje, bájelo con cuidado para limpiar y luego siempre regréselo hacia adelante.',
        tips: ['Nunca lo baje a la fuerza', 'Siempre regréselo para cubrir la cabeza', 'En bebés no hace falta limpiar por debajo'],
        pros: ['No hay que comprar nada', 'Deja que la naturaleza haga su trabajo'],
        cons: ['Toma años'],
      },
      steroid: {
        name: 'Crema de esteroide',
        summary: 'Se pone una crema suave de esteroide en el anillo apretado del prepucio dos veces al día durante 4 a 6 semanas. Cada vez, jale el prepucio con cuidado hacia atrás solo hasta que se vea el anillo apretado y la piel se vea brillante. Esto no debe doler. La crema suaviza la piel para que se pueda abrir.',
        steps: [
          'La abertura del prepucio está apretada, así que no se puede jalar hacia atrás sobre la cabeza.',
          'Lávese las manos. Jale el prepucio con cuidado hacia el cuerpo, solo hasta que se vea el anillo apretado de la punta y la piel ahí se vea estirada y brillante. Esto no debe doler. Si a su hijo le duele, jaló demasiado.',
          'Ponga una capa delgada de la crema de esteroide justo sobre el anillo apretado y brillante.',
          'Regrese el prepucio con cuidado hacia adelante sobre la cabeza.',
          'Hágalo dos veces al día por 4 a 6 semanas. Poco a poco, el anillo se ablanda y el prepucio se puede jalar un poco más cada semana. Nunca lo fuerce.',
          'En la mayoría de los niños, después de 4 a 6 semanas el prepucio se jala hacia atrás con facilidad.',
          'Siempre regrese el prepucio hacia adelante después de jalarlo. Siga jalándolo con cuidado durante el baño para que se mantenga suelto.',
        ],
        pros: ['Funciona en la mayoría de los niños', 'Sin cirugía', 'Muy segura en esta piel'],
        cons: ['Requiere esfuerzo diario', 'Se puede volver a apretar si se deja antes de tiempo'],
      },
      preputioplasty: {
        name: 'Prepucioplastia',
        summary: 'Una cirugía pequeña que hace un corte corto en el anillo apretado y lo cose para agrandar la abertura, conservando el prepucio.',
        steps: [
          'La abertura del prepucio está apretada.',
          'Con el niño dormido, se jala el prepucio hacia atrás para ver el anillo apretado.',
          'Se hace un corte corto a través del anillo apretado.',
          'El corte se cierra con puntos en la otra dirección, y eso hace la abertura más ancha. Se usan puntos que se disuelven.',
          'Se conserva el prepucio, y ahora se jala hacia atrás con facilidad. Jalarlo con cuidado cada día mientras sana evita que se vuelva a apretar.',
        ],
        pros: ['Conserva el prepucio', 'Recuperación rápida'],
        cons: ['Anestesia general', 'No sirve para piel con cicatriz (liquen escleroso)'],
      },
      circumcision: {
        name: 'Circuncisión',
        summary: 'Se quita el prepucio. Corrige el problema para siempre y es el tratamiento usual para una abertura con cicatriz.',
        steps: [
          'La abertura del prepucio está apretada o tiene cicatriz.',
          'Con el niño dormido, el cirujano marca dónde se va a quitar el prepucio.',
          'Se quita el prepucio, y la cabeza queda descubierta.',
          'Los bordes se unen con puntos que se disuelven solos.',
          'La mayoría de los niños se van a casa el mismo día. La hinchazón y el dolor duran de 1 a 2 semanas. La vaselina evita que la punta se pegue al pañal o a la ropa interior.',
        ],
        pros: ['Solución permanente', 'Trata el liquen escleroso'],
        cons: ['Anestesia general', 'Hinchazón y molestia por 1–2 semanas', 'No se puede deshacer'],
      },
      reduction: {
        name: 'Corregir la parafimosis',
        summary:
          'En la sala de emergencias, el médico aprieta con cuidado para bajar la hinchazón, muchas veces después de un medicamento para adormecer o hielo, y luego empuja la cabeza hacia atrás mientras jala el prepucio hacia adelante. Si eso no funciona, un corte pequeño (corte dorsal) libera la banda.',
        action: 'Corregirla',
        pros: ['Por lo general funciona sin cirugía', 'Alivio rápido'],
        cons: ['Incómodo', 'Puede que más adelante se sugiera la circuncisión'],
      },
    },
  },

  takeaways: {
    points: [
      'Un prepucio apretado es normal en niños pequeños y se afloja con los años.',
      'Nunca baje el prepucio a la fuerza, y siempre regréselo hacia adelante.',
      'La crema de esteroide ayuda a la mayoría de los niños que necesitan tratamiento.',
      'Un anillo blanco con cicatriz o problemas repetidos pueden necesitar cirugía.',
      'La parafimosis (prepucio atorado detrás de la cabeza) es una emergencia.',
    ],
    callTitle: 'Vaya a la sala de emergencias de inmediato si hay',
    call: ['Prepucio atorado detrás de la cabeza con hinchazón', 'No puede orinar, o dolor fuerte'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
