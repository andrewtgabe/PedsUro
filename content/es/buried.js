// Pene oculto — todo el texto del capítulo de pene oculto.
export default {
  title: 'Pene oculto',

  labels: {
    fat: 'Almohadilla de grasa',
    shaft: 'Cuerpo del pene',
    glans: 'Cabeza (glande)',
    scrotum: 'Escroto',
    web: 'Membrana',
    anchor: 'Puntos de anclaje',
    flap: 'Colgajo de piel',
    scar: 'Cicatriz',
  },

  embryology: {
    intro:
      'Con un pene oculto, el pene tiene un tamaño normal, pero está escondido bajo la piel y la grasa de la parte baja del vientre o del escroto. Elija una causa para ver cómo sucede.',
    causeLabel: 'Causa',
    causes: { normal: 'Típico', fat: 'Grasa', skin: 'Piel suelta', web: 'Membrana', scar: 'Cicatriz tras circuncisión' },
    texts: {
      normal: 'La piel del pene está unida en la base, así que el pene sobresale del cuerpo.',
      fat: 'Una almohadilla gruesa de grasa sobre el pene empuja hacia adelante y lo cubre. Es común en bebés y en niños con peso extra.',
      skin: 'La piel no está bien unida en la base del pene, así que se desliza hacia adelante y lo cubre.',
      web: 'La piel del escroto sube por la parte de abajo del pene como una membrana, lo jala hacia abajo y lo esconde.',
      scar: 'Después de una circuncisión, la piel puede sanar formando un anillo de cicatriz apretado que atrapa el pene bajo la piel (pene atrapado).',
    },
    note: 'A menudo hay más de una causa. No es culpa de los padres. Un pene oculto es una razón para no circuncidar a un recién nacido, porque la circuncisión puede empeorarlo.',
  },

  pathology: {
    intro: 'En el pene oculto, el pene es de tamaño normal pero está escondido bajo grasa o piel. La causa puede ser una almohadilla de grasa, piel suelta, una membrana hacia el escroto o una cicatriz (vea Por qué pasa). Deslice para presionar suavemente la almohadilla de grasa, como lo hace el médico en el examen. El pene completo está ahí, solo escondido.',
    pressLabel: 'Presión sobre la grasa',
    pressTicks: ['Nada', 'Firme'],
    hidden: 'Solo se ve la punta. El pene parece pequeño, pero su largo es normal.',
    pressed: 'Al empujar la grasa hacia atrás se ve el largo completo del pene. Así se distingue un pene oculto de un pene realmente pequeño.',
    signsTitle: 'Lo que las familias pueden notar',
    signs: [
      'El pene se ve pequeño o difícil de ver',
      'La orina sale en rocío o gotea, o la piel se infla al orinar',
      'Es difícil mantenerlo limpio; enrojecimiento, hinchazón o infección de la piel',
      'Dificultad para apuntar o necesidad de sentarse para orinar',
      'Los niños mayores pueden sentir vergüenza',
    ],
  },

  treatment: {
    intro: 'Muchos bebés mejoran al crecer y perder la grasa de bebé. Se considera la cirugía cuando el pene oculto causa problemas o no mejora.',
    pros: 'Beneficios',
    cons: 'Aspectos a considerar',
    options: {
      watch: {
        name: 'Observar y cuidar',
        summary: 'Si no hay problemas, el médico puede esperar y ver cómo cambia con el crecimiento.',
        tips: [
          'Limpie suavemente la zona a la hora del baño',
          'No fuerce la piel hacia atrás',
          'En niños mayores, un peso saludable puede hacer que el pene se vea mejor',
        ],
        pros: ['Sin cirugía', 'Muchos mejoran al crecer'],
        cons: ['Puede no mejorar si la causa es la piel o una cicatriz', 'Pueden seguir problemas como infecciones'],
      },
      penoplasty: {
        name: 'Circuncisión con penoplastia',
        summary:
          'El cirujano separa la piel del pene, la ancla en la base para que no vuelva a deslizarse hacia adelante y gira colgajos de piel para cubrirlo. Por lo general se hace con el niño dormido, y la mayoría regresa a casa el mismo día.',
        steps: [
          'Antes de la cirugía: la grasa y la piel suelta esconden la mayor parte del pene.',
          'El niño está dormido (anestesia general). Se empuja la grasa hacia atrás y se marca una línea de corte justo debajo de la cabeza del pene.',
          'La piel se desliza hacia atrás, como quitar una manga, y se sueltan las bandas de tejido que jalan el pene hacia abajo.',
          'Unos puntos anclan la piel a la base del pene, arriba y abajo, para que no vuelva a deslizarse hacia adelante.',
          'Se giran colgajos de piel alrededor del pene para cubrirlo, incluida la parte de abajo.',
          'Se quita el prepucio sobrante (circuncisión) y los bordes se cierran con puntos que se disuelven. Si hay membrana, se corrige al mismo tiempo.',
          'Se coloca un vendaje suave. La hinchazón y los moretones son normales por unas semanas.',
          'Después de sanar, el pene sobresale del cuerpo y es más fácil de ver y mantener limpio.',
        ],
        pros: ['Muestra el largo completo del pene', 'Facilita orinar y la limpieza', 'El anclaje reduce la probabilidad de que vuelva a ocultarse'],
        cons: ['Hinchazón y moretones por varias semanas', 'A veces se necesita una segunda cirugía', 'El peso extra puede volver a ocultarlo'],
      },
      scrotoplasty: {
        name: 'Escrotoplastia (corrección de la membrana)',
        summary:
          'Para la membrana, el cirujano corta a lo ancho de la membrana y la cierra a lo largo. Esto libera la parte de abajo del pene y forma un ángulo claro entre el pene y el escroto. Se puede hacer sola o junto con la penoplastia.',
        steps: [
          'La piel del escroto sube por la parte de abajo del pene como una membrana.',
          'Con el niño dormido, se marca una línea a lo ancho de la membrana.',
          'Se corta la membrana por esa línea. La abertura se abre en forma de diamante al levantarse el pene.',
          'El diamante se cierra a lo largo con puntos que se disuelven. Así la piel queda más larga debajo del pene.',
          'El pene y el escroto ahora están separados, con un ángulo claro entre ellos.',
        ],
        pros: ['Procedimiento corto', 'Libera la parte de abajo del pene', 'Se puede combinar con otras correcciones'],
        cons: ['Hinchazón por unas semanas', 'La membrana puede volver si la piel se aprieta al sanar'],
      },
    },
  },

  takeaways: {
    points: [
      'Un pene oculto tiene un tamaño normal, pero está escondido bajo grasa o piel.',
      'Las causas incluyen grasa, piel suelta, una membrana hacia el escroto o una cicatriz tras la circuncisión.',
      'Los recién nacidos con pene oculto no deben ser circuncidados.',
      'Muchos bebés mejoran al crecer; la cirugía ayuda cuando hay problemas.',
      'La penoplastia ancla y gira la piel; la escrotoplastia corrige la membrana.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo tiene',
    call: ['Fiebre, o enrojecimiento o hinchazón que se extiende', 'No puede orinar o solo gotea', 'Sangrado que no para después de la cirugía'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
