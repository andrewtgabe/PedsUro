// Varicocele — textos del capítulo en español.
export default {
  title: 'Varicocele',

  labels: {
    kidney: 'Riñón',
    ivc: 'Vena principal',
    aorta: 'Arteria principal',
    renalVein: 'Vena del riñón',
    leftVein: 'Vena del testículo izquierdo',
    rightVein: 'Vena del testículo derecho',
    testicle: 'Testículo',
    plexus: 'Grupo de venas',
    left: 'Izquierdo',
    right: 'Derecho',
  },

  embryology: {
    intro:
      'Un varicocele es un grupo de venas hinchadas encima del testículo, muy parecido a las várices de las piernas. Las venas llevan la sangre de regreso al corazón y tienen pequeñas válvulas de un solo sentido para que la sangre no regrese.',
    whyTitle: 'Por qué casi siempre es del lado izquierdo',
    why: [
      'La vena del testículo izquierdo es más larga y sube derecho hasta la vena del riñón.',
      'Se une a la vena del riñón en ángulo recto, y eso hace más lento el drenaje.',
      'La vena del riñón se puede apretar entre dos arterias, y eso sube la presión.',
    ],
    valvesLabel: 'Válvulas de las venas',
    valves: { working: 'Funcionan', leaky: 'Con fugas' },
    texts: {
      working: 'Las válvulas mantienen la sangre subiendo hacia el corazón.',
      leaky: 'Cuando las válvulas tienen fugas, la sangre se acumula y regresa. Las venas encima del testículo se estiran y se tuercen.',
    },
    note: 'Los varicoceles por lo general aparecen alrededor de la pubertad. Alrededor de 15 de cada 100 adolescentes varones tienen uno.',
  },

  pathology: {
    intro:
      'Un varicocele muchas veces se siente como una “bolsa de gusanos” encima del testículo. Por lo general no duele, pero algunos niños sienten un dolor sordo, sobre todo después de estar de pie o de hacer ejercicio.',
    gradeLabel: 'Tamaño',
    grades: [
      { name: 'Muy pequeño', text: 'Solo se ve en el ultrasonido. No se puede sentir.' },
      { name: 'Grado 1', text: 'Solo se siente cuando el niño puja (como al hacer del baño).' },
      { name: 'Grado 2', text: 'Se puede sentir de pie, pero no se ve.' },
      { name: 'Grado 3', text: 'Se puede ver a través de la piel del escroto.' },
    ],
    strain: 'Pujar',
    strainText: 'Pujar sube la presión en la barriga y empuja más sangre de regreso, así que las venas se hinchan más. Así lo revisamos durante el examen.',
    small: 'Testículo más pequeño',
    smallText:
      'La sangre caliente de más puede impedir que el testículo crezca normalmente. Un testículo que sigue más de un 20% más pequeño que el otro (o 2 mL más pequeño) en dos revisiones con unos 6 meses de diferencia es una razón principal para considerar el tratamiento. Las diferencias más pequeñas muchas veces se emparejan solas durante la pubertad.',
    whyTitle: 'Por qué puede importar',
    whyList: ['El testículo de ese lado puede crecer menos', 'Puede afectar los espermatozoides y la fertilidad más adelante', 'Algunos niños tienen dolor'],
  },

  treatment: {
    intro: 'La mayoría de los adolescentes con varicocele solo necesitan revisiones. Se considera el tratamiento si el testículo sigue mucho más pequeño, si hay dolor que no se quita, si hay varicocele de los dos lados o si hay estudios de semen anormales en adolescentes mayores. Un varicocele solo del lado derecho, o uno que no baja al acostarse, necesita un ultrasonido de la barriga.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Revisiones',
        summary: 'Medimos los dos testículos cada 6 a 12 meses, muchas veces con un ultrasonido, para asegurarnos de que el izquierdo sigue creciendo. Muchos niños con una diferencia pequeña de tamaño se emparejan solos, así que la diferencia se confirma en revisiones repetidas antes de decidir la cirugía. En adolescentes mayores, los estudios de semen y de hormonas pueden dar más información.',
        pros: ['Sin procedimiento', 'Muchos niños nunca necesitan tratamiento'],
        cons: ['Visitas una vez al año hasta que termina el crecimiento'],
      },
      surgery: {
        name: 'Cirugía del varicocele',
        summary:
          'El cirujano amarra las venas hinchadas y deja sin tocar la arteria y los canales linfáticos. Hay dos formas principales: cirugía abierta por una pequeña herida justo debajo de la ingle (subinguinal), o cirugía laparoscópica con una cámara pequeña por la barriga.',
        approachLabel: 'Método',
        approaches: { microsurgical: 'Microcirugía (debajo de la ingle)', laparoscopic: 'Laparoscopía' },
        microsurgicalSteps: [
          'Antes: las venas del testículo izquierdo están hinchadas, y el testículo izquierdo puede ser más pequeño.',
          'Con el niño dormido, se hace un corte pequeño justo debajo del pliegue de la ingle.',
          'Se levanta el cordón y se usa un microscopio quirúrgico para ver bien sus partes pequeñas: la arteria, los canales linfáticos y las venas.',
          'Cada vena hinchada se amarra y se corta. La arteria y los canales linfáticos se protegen.',
          'Se cierra el corte. Ahora la sangre regresa por otras venas sanas, y la hinchazón baja en los siguientes meses.',
          'La mayoría de los niños se van a casa el mismo día. Este método tiene la menor probabilidad de que el varicocele regrese o de que se junte líquido alrededor del testículo. Las revisiones confirman que el testículo siga creciendo.',
        ],
        laparoscopicSteps: [
          'Antes: las venas del testículo izquierdo están hinchadas, y el testículo izquierdo puede ser más pequeño.',
          'Con el niño dormido, se pasa una cámara pequeña por el ombligo, con uno o dos instrumentos muy pequeños por cortes pequeños.',
          'Dentro de la barriga, se encuentra la vena hinchada donde sale de la barriga hacia la ingle. Se puede poner un tinte azul en el testículo para que los canales linfáticos se vean bien.',
          'La vena se separa de los canales linfáticos (y muchas veces de la arteria), y luego se cierra con grapas o se amarra y se corta.',
          'Ahora la sangre regresa por otras venas sanas, y la hinchazón baja en los siguientes meses.',
          'La mayoría de los niños se van a casa el mismo día. Proteger los canales linfáticos baja la probabilidad de que se junte líquido alrededor del testículo (hidrocele). Las revisiones confirman que el testículo siga creciendo.',
        ],
        pros: ['Funciona bien', 'Muchas veces el testículo alcanza su tamaño', 'Muy buena para quitar el dolor del varicocele', 'Por lo general se va a casa el mismo día'],
        cons: ['Anestesia general', 'Líquido alrededor del testículo (hidrocele) después: más común con el método laparoscópico, pero poco común cuando se respetan los canales linfáticos', 'Puede regresar', 'No se sabe del todo su efecto en la fertilidad futura'],
      },
      embolization: {
        name: 'Embolización',
        summary:
          'Un radiólogo pasa un tubo delgado por una vena de la ingle o del cuello hasta la vena del testículo, y luego la tapa por dentro con espirales muy pequeñas.',
        steps: [
          'Antes: las venas del testículo izquierdo están hinchadas, y el testículo izquierdo puede ser más pequeño.',
          'Con medicina para relajarse o dormir, un radiólogo pone un tubo delgado en una vena de la ingle (o a veces del cuello).',
          'Con rayos X, el tubo se guía hasta la vena del riñón izquierdo y luego hacia abajo, a la vena del testículo.',
          'Se inyecta un tinte para ver la vena y la sangre que va en sentido contrario.',
          'Se ponen espirales de metal muy pequeños, a veces con una medicina que sella la vena, para bloquearla desde adentro.',
          'Se saca el tubo y se pone un vendaje pequeño. La mayoría de los niños se van a casa el mismo día y vuelven a su actividad normal en uno o dos días.',
        ],
        pros: ['Sin herida quirúrgica', 'Recuperación rápida'],
        cons: ['Usa rayos X', 'No está disponible en todas partes', 'Puede regresar'],
      },
    },
  },

  takeaways: {
    points: [
      'Un varicocele es un grupo de venas hinchadas encima del testículo, casi siempre del lado izquierdo.',
      'Es común en adolescentes varones y por lo general no duele.',
      'Vigilamos que el testículo siga creciendo normalmente.',
      'Se usa cirugía o embolización si el testículo no está creciendo o si hay dolor.',
    ],
    callTitle: 'Llámenos si su hijo tiene',
    call: ['Dolor que le impide hacer sus actividades', 'Un testículo que parece estar haciéndose más pequeño', 'Una hinchazón nueva del lado derecho, o una que no baja al acostarse'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
