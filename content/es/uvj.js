// Obstrucción ureterovesical / megauréter — textos del capítulo en español.
export default {
  title: 'Obstrucción ureterovesical (megauréter)',

  embryology: {
    intro:
      'La unión ureterovesical es donde el uréter se une a la vejiga. En una obstrucción aquí, el último tramo del uréter no forma su músculo normalmente. El uréter de arriba se pone muy ancho. Un uréter muy ancho se llama megauréter.',
    modeLabel: 'Parte baja del uréter',
    modes: { normal: 'Típico', block: 'Tramo rígido' },
    texts: {
      normal: 'El uréter empuja la orina hacia la vejiga en olas, como cuando se aprieta un tubo de pasta de dientes.',
      block: 'El tramo rígido de abajo no puede apretar. La orina pasa lento, así que se acumula. Con el tiempo todo el uréter se estira y se ensancha.',
    },
    strip: { stiff: 'Tramo rígido', kidney: 'Riñón', bladder: 'A la vejiga' },
    note:
      'No todo uréter ancho está obstruido. Algunos están anchos por reflujo, y otros están anchos pero drenan bien. Los estudios ayudan a distinguirlos.',
  },

  pathology: {
    intro:
      'Como el estrechamiento está abajo, la orina se acumula en todo el camino: se hinchan tanto el uréter como la parte del riñón que recoge la orina.',
    severityLabel: 'Ancho del uréter',
    severity: ['Leve', 'Moderado', 'Grave'],
    severityText: [
      'Leve: el uréter está un poco más ancho de lo normal.',
      'Moderado: el uréter está claramente ancho y el riñón está hinchado.',
      'Grave: el uréter está muy ancho y torcido, y el tejido del riñón se puede adelgazar.',
    ],
    infection: 'Infección de orina',
    infectionText:
      'En la orina que se queda en un uréter ancho crecen bacterias más fácilmente. Este es el problema más común del megauréter, sobre todo en bebés.',
    symptomsTitle: 'Lo que las familias pueden notar',
    symptoms: [
      'Por lo general nada. La mayoría se encuentran en un ultrasonido antes de nacer.',
      'Infecciones de orina con fiebre',
      'Dolor de barriga o de costado',
      'Sangre en la orina o piedras en el riñón (menos común)',
    ],
  },

  treatment: {
    intro:
      'La mayoría de los megauréteres mejoran por sí solos en los primeros años, así que a la mayoría de los bebés se les vigila mientras toman un antibiótico preventivo. Se usa cirugía cuando el riñón está en riesgo, la hinchazón empeora o las infecciones siguen. El tipo de cirugía depende sobre todo de la edad del niño y del tamaño de la vejiga.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Vigilancia',
        summary:
          'Conforme los niños crecen, muchos uréteres anchos se hacen más angostos poco a poco y drenan mejor. Revisamos con ultrasonidos y a veces con una gammagrafía de drenaje renal.',
        control: 'Edad',
        years: 'años',
        pros: ['Sin cirugía', 'La mayoría mejoran por sí solos'],
        cons: ['Ultrasonidos y estudios repetidos', 'Todavía pueden ocurrir infecciones'],
      },
      antibiotic: {
        name: 'Antibiótico preventivo',
        summary:
          'Los bebés con megauréter muchas veces toman una dosis pequeña de antibiótico cada día. Ayuda a prevenir infecciones mientras vigilamos.',
        bacteria: 'Entran bacterias a la orina',
        dose: 'Antibiótico diario en dosis baja',
        pros: ['Baja la probabilidad de una infección del riñón'],
        cons: ['Un medicamento todos los días', 'Las bacterias pueden volverse resistentes'],
      },
      balloon: {
        name: 'Globo y stent',
        summary:
          'Con una cámara pequeña que pasa por la uretra, el cirujano estira el estrechamiento con un globo y deja un stent (tubo blando) por unas semanas. Sin cortes en la piel. No se hace muy seguido, y no todos los centros lo ofrecen.',
        before: 'Antes',
        after: 'Después del globo',
        pros: ['Sin cortes en la piel', 'Puede evitar o retrasar una cirugía mayor'],
        cons: ['Anestesia general', 'Un segundo procedimiento para quitar el stent', 'No funciona en todos', 'No se usa mucho'],
      },
      ureterostomy: {
        name: 'Ureterostomía temporal',
        summary:
          'Para un bebé que sigue teniendo infecciones del riñón aunque tome antibiótico, el uréter ancho se puede sacar por una pequeña abertura en la parte baja de la barriga. La orina drena directo al pañal, así que no se puede acumular. Cuando el niño es más grande y la vejiga ha crecido, se reimplanta el uréter y se cierra la abertura.',
        before: 'Antes',
        after: 'Con ureterostomía',
        pros: ['Drena bien el riñón', 'Detiene las infecciones repetidas', 'Deja que el uréter se haga más pequeño antes del reimplante'],
        cons: ['Dos cirugías (ahora y después)', 'Cuidado de la abertura en la zona del pañal'],
      },
      reimplant: {
        name: 'Reimplante con estrechamiento del uréter',
        summary:
          'El cirujano quita el tramo estrecho, recorta el uréter ancho a un tamaño más normal y lo vuelve a unir a la vejiga por un túnel nuevo. Muchas veces se deja un stent por un tiempo corto. Por lo general se hace cuando el niño tiene por lo menos alrededor de 1 año y la vejiga es lo bastante grande, ya sea como primera cirugía o después de una ureterostomía.',
        before: 'Antes de la cirugía',
        after: 'Después de la cirugía',
        pros: ['Corrige la obstrucción para siempre', 'Funciona muy bien'],
        cons: ['Cirugía con anestesia general', 'Unos días en el hospital', 'Mejor después de alrededor de 1 año de edad, cuando la vejiga es lo bastante grande'],
      },
    },
  },

  takeaways: {
    points: [
      'Una obstrucción ureterovesical es un estrechamiento donde el uréter entra a la vejiga.',
      'El uréter de arriba se ensancha (megauréter) y el riñón se puede hinchar.',
      'La mayoría mejoran por sí solos en los primeros años.',
      'El riesgo principal son las infecciones de orina, por eso algunos bebés toman un antibiótico preventivo.',
      'Algunos niños necesitan cirugía, y funciona bien.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'En bebés: fiebre, irritabilidad, poca alimentación o vómito',
      'Dolor de barriga, de costado o de espalda, o sangre en la orina',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
