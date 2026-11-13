// Riñón duplicado — textos del capítulo en español.
export default {
  title: 'Sistema colector duplicado',

  embryology: {
    intro:
      'Un sistema colector duplicado (también llamado riñón duplicado) tiene dos sistemas de drenaje en lugar de uno: una parte de arriba y una parte de abajo. Es bastante común (alrededor de 1 de cada 125 personas), y la mayoría de las personas nunca saben que lo tienen.',
    typeLabel: 'Tipo',
    types: { single: 'Típico', partial: 'Parcial', complete: 'Completo' },
    texts: {
      single: 'Una yema crece del conducto y se convierte en un uréter y un sistema de drenaje.',
      partial: 'La yema se divide temprano en dos ramas. Dos uréteres salen del riñón pero se juntan antes de llegar a la vejiga, así que hay una sola abertura. Por lo general no causa problemas.',
      complete: 'Dos yemas separadas crecen del conducto. Cada una se convierte en su propio uréter con su propia abertura en la vejiga.',
    },
    ruleTitle: 'Dónde quedan las dos aberturas',
    rule:
      'El uréter de la parte de abajo se abre más arriba y hacia el lado, así que puede tener un túnel corto y reflujo. El uréter de la parte de arriba se abre más abajo y hacia el centro. Puede terminar en una bolsa como globo (ureterocele) o fuera de la vejiga (uréter ectópico).',
    panelEmbryo: 'Bebé en desarrollo',
    panelBirth: 'Al nacer: dentro de la vejiga',
    labelDuct: 'Conducto',
    labelKidney: 'Riñón',
    labelSinus: 'Futura vejiga',
    labelTop: 'Parte de arriba',
    labelBottom: 'Parte de abajo',
    labelNeck: 'Cuello de la vejiga',
  },

  pathology: {
    intro:
      'Un sistema colector duplicado tiene dos sistemas de drenaje en un riñón, una parte de arriba y una de abajo, a veces con dos uréteres. Se encuentra en alrededor de 1 de cada 125 personas, es más común en las niñas, y alrededor de 1 de cada 5 lo tienen en los dos lados. La mayoría funcionan normalmente. Cuando hay problemas, dependen de dónde se abre cada uréter.',
    typeLabel: 'Tipo',
    types: { partial: 'Parcial', complete: 'Completo' },
    problemLabel: 'Problema',
    sexLabel: 'Niño o niña',
    sexes: { girl: 'Niña', boy: 'Niño' },
    problems: {
      none: {
        name: 'Drenaje típico',
        text: 'Las dos partes del riñón drenan bien. No se necesita tratamiento.',
      },
      reflux: {
        name: 'Reflujo a la parte de abajo',
        text: 'El uréter de la parte de abajo tiene un túnel corto, así que la orina regresa cuando el niño o la niña orina. Esto puede causar infecciones del riñón.',
      },
      ureterocele: {
        name: 'Ureterocele',
        text: 'El extremo del uréter de la parte de arriba se hincha como una bolsa en forma de globo dentro de la vejiga. La bolsa tiene una abertura muy pequeña, así que la orina drena despacio y la parte de arriba del riñón se llena y se hincha. Una bolsa grande también puede tapar otras aberturas.',
      },
      ectopic: {
        name: 'Uréter ectópico',
        girl: 'En las niñas, el uréter de la parte de arriba se puede abrir debajo del músculo de control de la vejiga, por ejemplo en la uretra o la vagina. La orina no pasa por el músculo de control, así que hay goteo constante aunque la niña ya sepa ir al baño. La parte de arriba muchas veces funciona poco.',
        boy: 'En los niños, el uréter de la parte de arriba se abre por encima del músculo de control, por ejemplo en la uretra cerca de la próstata o en los tubos que llevan los espermatozoides. Los niños no tienen goteo, pero pueden tener infecciones, incluso del testículo (epididimitis). La parte de arriba muchas veces funciona poco.',
      },
    },
    partialText: 'Los dos uréteres se juntan antes de la vejiga. Esto casi nunca causa problemas.',
  },

  treatment: {
    intro:
      'La mayoría de los niños con un sistema colector duplicado no necesitan tratamiento. Cuando hay un problema, la mejor opción depende del problema y de qué tan bien funciona la parte de arriba del riñón.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      ultrasound: {
        name: 'Ultrasonido de los riñones',
        summary:
          'El ultrasonido usa ondas de sonido para ver las dos partes del riñón. Puede mostrar una parte de arriba hinchada, un uréter ancho o un ureterocele dentro de la vejiga. No duele y no usa radiación.',
        probe: 'Ultrasonido',
        pros: ['Sin dolor, sin agujas, sin radiación', 'Útil para las visitas de seguimiento'],
        cons: ['No muestra el reflujo ni qué tan bien funciona cada parte'],
      },
      vcug: {
        summary:
          'Una cistouretrografía miccional (VCUG) revisa si hay orina que regresa (reflujo), casi siempre a la parte de abajo del riñón. También muestra un ureterocele como una sombra redonda en la vejiga. Un tubo delgado pone tinte en la vejiga y se toman radiografías mientras el niño o la niña orina. Por lo general le pedimos que tome un antibiótico preventivo antes de la prueba para ayudar a prevenir una infección del riñón.',
      },
      scan: {
        name: 'Estudio de función del riñón',
        summary:
          'Una gammagrafía DMSA o MAG3 usa una cantidad muy pequeña de trazador por una vía IV para medir qué parte del trabajo del riñón hace cada parte. Esto ayuda a decidir si conservar la parte de arriba (unir los uréteres o reimplante) o quitarla.',
        label: 'Parte de arriba',
        views: { good: 'Funciona bien', poor: 'Funciona poco' },
        top: 'Arriba',
        bottom: 'Abajo',
        pros: ['Muestra cuánto trabaja cada parte', 'Ayuda a escoger la cirugía correcta'],
        cons: ['Necesita una vía IV', 'Una pequeña cantidad de radiación'],
      },
      antibiotic: {
        name: 'Antibiótico preventivo',
        summary:
          'Los bebés con reflujo o con un ureterocele muchas veces toman una dosis pequeña de antibiótico cada día. Ayuda a que una infección de la vejiga no se vuelva una infección del riñón mientras vigilamos o planeamos la cirugía.',
        pros: ['Baja la probabilidad de una infección del riñón'],
        cons: ['Un medicamento todos los días', 'Las bacterias pueden volverse resistentes'],
      },
      none: {
        name: 'No necesita tratamiento',
        summary: 'Si las dos partes drenan bien y no hay infecciones, no hay que hacer nada.',
        pros: ['Ningún estudio ni procedimiento aparte de las revisiones'],
        cons: ['Llámenos si hay fiebre o síntomas al orinar'],
      },
      puncture: {
        name: 'Punción del ureterocele',
        summary:
          'Con una cámara pequeña que pasa por la uretra, el cirujano hace una abertura pequeña en el ureterocele para que la parte de arriba pueda drenar. Sin cortes en la piel. Alrededor de 1 de cada 3 a 1 de cada 2 niños necesitan otra cirugía más adelante, sobre todo cuando el ureterocele llega fuera de la vejiga.',
        steps: [
          'El ureterocele es una bolsa en forma de globo dentro de la vejiga. La parte de arriba del riñón está llena e hinchada.',
          'Con su hijo o hija dormido, se pasa una cámara pequeña por la uretra hasta la vejiga. Sin cortes en la piel.',
          'El cirujano hace una abertura muy pequeña en el ureterocele.',
          'La orina drena de la parte de arriba, la bolsa se hace más pequeña y la hinchazón baja con el tiempo.',
        ],
        pros: ['Sin cortes en la piel', 'Alivia rápido la obstrucción', 'Se usa mucho en bebés'],
        cons: ['Anestesia general', 'Después la orina puede regresar a la parte de arriba', 'Alrededor de 1 de cada 3 a 1 de cada 2 necesitan otra cirugía más adelante'],
      },
      joining: {
        name: 'Unir los uréteres',
        summary:
          'El uréter de la parte de arriba se une al uréter de la parte de abajo, así que los dos drenan por una sola abertura sana. Se puede hacer por una pequeña herida o con cirugía robótica. Esto solo es una opción en un sistema colector duplicado. Un uréter ectópico de un sistema sencillo (un solo uréter de ese lado) no tiene un segundo uréter al cual unirse.',
        steps: [
          'El uréter de la parte de arriba se abre en el lugar equivocado (o termina en un ureterocele), así que la parte de arriba no drena bien.',
          'Con su hijo o hija dormido, se corta el uréter de la parte de arriba cerca de la vejiga.',
          'Se cose al costado del uréter de la parte de abajo, así que las dos partes drenan por una sola abertura sana.',
          'Después de sanar, las dos partes drenan a la vejiga y la hinchazón baja.',
        ],
        pros: ['Conserva la parte de arriba del riñón', 'Quita el goteo de un uréter ectópico'],
        cons: ['Cirugía con anestesia general', 'Funciona mejor cuando la parte de abajo no tiene reflujo', 'No es posible con un sistema sencillo'],
      },
      reimplant: {
        name: 'Cirugía de reimplante',
        summary:
          'Los dos uréteres se pasan juntos a un túnel nuevo y más largo en la pared de la vejiga. Esto corrige el reflujo y puede quitar un ureterocele.',
        steps: [
          'La orina regresa a la parte de abajo, y la parte de arriba puede estar tapada por un ureterocele.',
          'Con su hijo o hija dormido, se abre la vejiga. Se quita cualquier ureterocele y se repara la pared de la vejiga detrás de él.',
          'Los dos uréteres, que comparten su capa de afuera, se pasan juntos a un túnel nuevo y más largo en la pared de la vejiga (verde).',
          'Después de sanar, las dos partes drenan bien y el reflujo se corrige.',
        ],
        pros: ['Corrige el reflujo y la obstrucción en la vejiga', 'Alta tasa de éxito'],
        cons: ['Cirugía con anestesia general', 'Estancia corta en el hospital', 'Espasmos de la vejiga por un tiempo corto después'],
      },
      removal: {
        name: 'Quitar el uréter de arriba y la mitad de arriba del riñón',
        summary:
          'Si la parte de arriba del riñón no funciona, se puede quitar junto con su uréter, y conservar la parte de abajo sana. Esto se llama nefrectomía parcial (o heminefrectomía del polo superior).',
        steps: [
          'La parte de arriba funciona muy poco y su uréter está causando infecciones o goteo.',
          'Con su hijo o hija dormido, por una pequeña herida o con cirugía robótica, se amarran los vasos sanguíneos de la parte de arriba. El riñón se divide en la línea entre las dos partes.',
          'Se quitan la mitad de arriba del riñón y la mayor parte de su uréter.',
          'La parte de abajo sana sigue drenando normalmente.',
        ],
        pros: ['Quita la causa de las infecciones o del goteo', 'Se queda la parte de abajo sana'],
        cons: ['Cirugía con anestesia general', 'Solo se usa si la parte de arriba funciona muy poco', 'Una pequeña probabilidad de que la parte de abajo pierda algo de función'],
      },
    },
  },

  takeaways: {
    points: [
      'Un sistema colector duplicado tiene dos sistemas de drenaje en un riñón, una parte de arriba y una parte de abajo.',
      'Es común, y la mayoría de las personas nunca tienen problemas.',
      'Posibles problemas: reflujo a la parte de abajo, o un uréter de la parte de arriba obstruido o fuera de lugar.',
      'El tratamiento depende del problema. Las opciones van desde vigilar hasta la cirugía.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'Goteo constante o ropa interior siempre húmeda en un niño que ya sabe ir al baño',
      'Dolor de barriga, de costado o de espalda, o dolor al orinar',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
