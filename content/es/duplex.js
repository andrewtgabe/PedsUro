// Riñón duplicado — textos del capítulo en español.
export default {
  title: 'Riñón duplicado',

  embryology: {
    intro:
      'Un riñón duplicado tiene dos sistemas de drenaje en lugar de uno: una parte de arriba y una parte de abajo. Es común (alrededor de 1 a 5 de cada 100 personas), y la mayoría de las personas nunca saben que lo tienen.',
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
      'La mayoría de los riñones duplicados funcionan normalmente. Cuando hay problemas, dependen de dónde se abre cada uréter.',
    typeLabel: 'Tipo',
    types: { partial: 'Parcial', complete: 'Completo' },
    problemLabel: 'Problema',
    problems: {
      none: {
        name: 'Sin problema',
        text: 'Las dos partes del riñón drenan bien. No se necesita tratamiento.',
      },
      reflux: {
        name: 'Reflujo a la parte de abajo',
        text: 'El uréter de la parte de abajo tiene un túnel corto, así que la orina regresa cuando el niño o la niña orina. Esto puede causar infecciones del riñón.',
      },
      ureterocele: {
        name: 'Ureterocele',
        text: 'El extremo del uréter de la parte de arriba se hincha como una bolsa en forma de globo dentro de la vejiga. La bolsa tiene una abertura muy pequeña, así que la parte de arriba del riñón se llena y se hincha. Una bolsa grande también puede tapar otras aberturas.',
      },
      ectopic: {
        name: 'Uréter ectópico',
        text: 'El uréter de la parte de arriba se abre debajo del músculo de control de la vejiga. En las niñas esto puede causar goteo constante aunque ya sepan ir al baño. En los niños no causa goteo, pero puede causar infecciones. La parte de arriba muchas veces funciona poco.',
      },
    },
    partialText: 'Los dos uréteres se juntan antes de la vejiga. Esto casi nunca causa problemas.',
  },

  treatment: {
    intro:
      'La mayoría de los niños con un riñón duplicado no necesitan tratamiento. Cuando hay un problema, la mejor opción depende del problema y de qué tan bien funciona la parte de arriba del riñón.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      none: {
        name: 'No necesita tratamiento',
        summary: 'Si las dos partes drenan bien y no hay infecciones, no hay que hacer nada.',
        pros: ['Ningún estudio ni procedimiento aparte de las revisiones'],
        cons: ['Llámenos si hay fiebre o síntomas al orinar'],
      },
      puncture: {
        name: 'Punción del ureterocele',
        summary:
          'Con una cámara pequeña que pasa por la uretra, el cirujano hace una abertura pequeña en el ureterocele para que la parte de arriba pueda drenar. Sin cortes en la piel.',
        before: 'Antes',
        after: 'Después de la punción',
        pros: ['Sin cortes en la piel', 'Alivia rápido la obstrucción', 'Se usa mucho en bebés'],
        cons: ['Anestesia general', 'Después la orina puede regresar a la parte de arriba', 'Algunos niños necesitan otra cirugía más adelante'],
      },
      joining: {
        name: 'Unir los uréteres',
        summary:
          'El uréter de la parte de arriba se une al uréter de la parte de abajo, así que los dos drenan por una sola abertura sana. Se puede hacer por una pequeña herida o con cirugía robótica.',
        before: 'Antes',
        after: 'Después de la cirugía',
        pros: ['Conserva la parte de arriba del riñón', 'Quita el goteo de un uréter ectópico'],
        cons: ['Cirugía con anestesia general', 'Funciona mejor cuando la parte de abajo no tiene reflujo'],
      },
      reimplant: {
        name: 'Cirugía de reimplante',
        summary:
          'Los dos uréteres se pasan juntos a un túnel nuevo y más largo en la pared de la vejiga. Esto corrige el reflujo y puede quitar un ureterocele.',
        before: 'Antes',
        after: 'Después de la cirugía',
        pros: ['Corrige el reflujo y la obstrucción en la vejiga', 'Alta tasa de éxito'],
        cons: ['Cirugía con anestesia general', 'Estancia corta en el hospital', 'Espasmos de la vejiga por un tiempo corto después'],
      },
      removal: {
        name: 'Quitar la parte de arriba',
        summary:
          'Si la parte de arriba del riñón no funciona, se puede quitar y conservar la parte de abajo sana. Esto se llama nefrectomía parcial.',
        before: 'Antes',
        after: 'Después de la cirugía',
        pros: ['Quita la causa de las infecciones o del goteo', 'Se queda la parte de abajo sana'],
        cons: ['Cirugía con anestesia general', 'Solo se usa si la parte de arriba funciona muy poco'],
      },
    },
  },

  takeaways: {
    points: [
      'Un riñón duplicado tiene dos sistemas de drenaje, una parte de arriba y una parte de abajo.',
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
