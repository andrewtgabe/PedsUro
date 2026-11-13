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
      'En una obstrucción de la unión ureterovesical, hay un estrechamiento donde el uréter se une a la vejiga. Como el estrechamiento está abajo, la orina se acumula en todo el camino: se hinchan tanto el uréter como la parte del riñón que recoge la orina. El megauréter es la segunda causa más común de hinchazón del riñón que se encuentra antes de nacer, después de la obstrucción de la unión pieloureteral. Es más común en los niños y en el lado izquierdo, y alrededor de 1 de cada 4 niños lo tienen en los dos lados.',
    typeLabel: 'Tipo de megauréter',
    types: { blocked: 'Bloqueado', reflux: 'Con reflujo', wide: 'Ancho, sin bloqueo' },
    typeText: {
      blocked: 'Bloqueado: un tramo estrecho y rígido en la parte de abajo hace que la orina entre despacio a la vejiga, así que se acumula.',
      reflux: 'Con reflujo: la válvula donde el uréter se une a la vejiga no cierra bien, así que la orina regresa desde la vejiga. Se trata como el reflujo vesicoureteral (RVU).',
      wide: 'Ancho pero sin bloqueo: el uréter es ancho, pero la orina sí drena a la vejiga. Es común en bebés y muchas veces mejora solo.',
    },
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
          'Conforme los niños crecen, muchos uréteres anchos se hacen más angostos poco a poco y drenan mejor. Alrededor del 70% mejoran sin cirugía. Revisamos con ultrasonidos y a veces con una gammagrafía de drenaje renal.',
        control: 'Edad',
        years: 'años',
        pros: ['Sin cirugía', 'La mayoría mejoran por sí solos'],
        cons: ['Ultrasonidos y estudios repetidos', 'Todavía pueden ocurrir infecciones'],
      },
      ultrasound: {
        name: 'Ultrasonido de los riñones',
        summary:
          'El ultrasonido usa ondas de sonido para medir qué tan ancho está el uréter y qué tan hinchado está el riñón. No duele y no usa radiación. Se repite con el tiempo para ver si el uréter se hace más angosto.',
        probe: 'Ultrasonido',
        pros: ['Sin dolor, sin agujas, sin radiación', 'Útil para las visitas de seguimiento'],
        cons: ['No muestra el reflujo ni qué tan bien drena el riñón'],
      },
      vcug: {
        summary:
          'Una cistouretrografía miccional (VCUG) revisa si el uréter ancho se debe a orina que regresa desde la vejiga (reflujo). Un tubo delgado pone tinte en la vejiga y se toman radiografías mientras el niño o la niña orina. Si se ve reflujo, se trata como el RVU. Por lo general le pedimos que tome un antibiótico preventivo antes de la prueba para ayudar a prevenir una infección del riñón.',
      },
      scan: {
        summary:
          'Una gammagrafía renal (muchas veces llamada MAG3) muestra qué tan bien funciona cada riñón y si la orina está realmente bloqueada en la parte de abajo del uréter. El trazador entra por una vía IV, y a mitad de la prueba se da Lasix para producir más orina.',
        steps: [
          'Se pone una vía IV en el brazo o la mano, y se da líquido extra.',
          'Un tubo delgado y suave (sonda) mantiene la vejiga vacía, a menos que su hijo o hija sea más grande y ya vaya al baño solo.',
          'Una cantidad muy pequeña de trazador entra por la vía IV. Una cámara especial toma fotos cada pocos segundos mientras los riñones lo recogen.',
          'La computadora mide qué parte del trabajo hace cada riñón. En este ejemplo, el riñón con el megauréter hace el 45% y el otro riñón el 55%.',
          'El trazador sale del riñón sano. Con un megauréter bloqueado, se queda en el riñón y en el uréter ancho.',
          'Se da Lasix por la vía IV. Si el trazador todavía se queda, el megauréter está bloqueado. Esto forma la curva plana de “bloqueado” que se ve abajo.',
        ],
      },
      antibiotic: {
        name: 'Antibiótico preventivo',
        summary:
          'Los bebés con megauréter muchas veces toman una dosis pequeña de antibiótico cada día. Ayuda a prevenir infecciones mientras vigilamos.',
        pros: ['Baja la probabilidad de una infección del riñón'],
        cons: ['Un medicamento todos los días', 'Las bacterias pueden volverse resistentes'],
      },
      balloon: {
        name: 'Globo y stent',
        summary:
          'Con una cámara pequeña que pasa por la uretra, el cirujano estira el estrechamiento con un globo y deja un stent (tubo blando) por unas semanas. Sin cortes en la piel. No se hace muy seguido, y no todos los centros lo ofrecen.',
        steps: [
          'El estrechamiento está en la parte de abajo del uréter ancho, donde entra a la vejiga.',
          'Con su hijo o hija dormido, se pasa una cámara pequeña por la uretra hasta la vejiga, y se guía un alambre delgado a través del estrechamiento.',
          'Se pasa un globo pequeño sobre el alambre y se infla por unos minutos para estirar y abrir el estrechamiento.',
          'Se deja un stent (tubo blando y delgado) en el uréter por unas semanas para mantenerlo abierto mientras sana.',
          'El stent se saca en un segundo procedimiento corto. La orina drena más fácil y el uréter se hace más angosto poco a poco.',
        ],
        pros: ['Sin cortes en la piel', 'Puede evitar o retrasar una cirugía mayor'],
        cons: ['Anestesia general', 'Un segundo procedimiento para quitar el stent', 'No funciona en todos', 'No se usa mucho'],
      },
      ureterostomy: {
        name: 'Ureterostomía temporal',
        summary:
          'Para un bebé que sigue teniendo infecciones del riñón aunque tome antibiótico, el uréter ancho se puede sacar por una pequeña abertura en la parte baja de la barriga. La orina drena directo al pañal, así que no se puede acumular. Cuando el niño es más grande y la vejiga ha crecido, se reimplanta el uréter y se cierra la abertura.',
        steps: [
          'Aun con un antibiótico diario, la orina se queda en el uréter ancho y siguen las infecciones del riñón.',
          'Con su bebé dormido, se hace una pequeña herida en la parte baja de la barriga. Se separa el uréter de la vejiga y su extremo se saca a la piel como una pequeña abertura.',
          'La orina drena directo al pañal, así que no se puede acumular. Las infecciones paran y el uréter y el riñón se hacen más pequeños poco a poco.',
          'Cuando su hijo o hija es más grande y la vejiga ha crecido, el uréter se reimplanta en la vejiga por un túnel nuevo y se cierra la abertura.',
        ],
        pros: ['Drena bien el riñón', 'Detiene las infecciones repetidas', 'Deja que el uréter se haga más pequeño antes del reimplante'],
        cons: ['Dos cirugías (ahora y después)', 'Cuidado de la abertura en la zona del pañal'],
      },
      reimplant: {
        name: 'Reimplante con estrechamiento del uréter',
        summary:
          'El cirujano quita el tramo estrecho, recorta el uréter ancho a un tamaño más normal y lo vuelve a unir a la vejiga por un túnel nuevo. Muchas veces se deja un stent por un tiempo corto. <strong>Por lo general esperamos hasta que su hijo o hija tenga por lo menos 1 año</strong>, cuando la vejiga es lo bastante grande para el túnel nuevo. Puede ser la primera cirugía o hacerse después de una ureterostomía. Por lo general se recomienda la cirugía si hay:',
        steps: [
          'El tramo estrecho está en la parte de abajo del uréter ancho, donde entra a la vejiga.',
          'Con su hijo o hija dormido, se separa el uréter de la vejiga y se quita el tramo estrecho.',
          'El uréter ancho se recorta (se estrecha) a un tamaño más normal para que quepa en un túnel y drene bien.',
          'El uréter se vuelve a unir a la vejiga por un túnel nuevo en la pared de la vejiga (verde), que también ayuda a prevenir el reflujo. Muchas veces se deja un stent por un tiempo corto.',
          'Después de sanar, la orina drena fácilmente a la vejiga y baja la hinchazón del uréter y del riñón.',
        ],
        tips: [
          'Infecciones del riñón aun con un antibiótico preventivo',
          'Un riñón que hace menos de alrededor del 40% del trabajo, o que pierde función en estudios repetidos',
          'Hinchazón que sigue empeorando',
          'Dolor o piedras en el riñón',
        ],
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
