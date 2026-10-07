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
      'La sangre caliente de más puede impedir que el testículo crezca normalmente. Un testículo mucho más pequeño que el otro (alrededor de 1/5 más pequeño) es una razón principal para considerar el tratamiento.',
    whyTitle: 'Por qué puede importar',
    whyList: ['El testículo de ese lado puede crecer menos', 'Puede afectar los espermatozoides y la fertilidad más adelante', 'Algunos niños tienen dolor'],
  },

  treatment: {
    intro: 'La mayoría de los adolescentes con varicocele solo necesitan revisiones. Se considera el tratamiento si el testículo no está creciendo, si hay dolor que no se quita o si hay estudios de semen anormales en adolescentes mayores.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Revisiones',
        summary: 'Medimos los dos testículos alrededor de una vez al año, muchas veces con un ultrasonido, para asegurarnos de que el izquierdo sigue creciendo.',
        pros: ['Sin procedimiento', 'Muchos niños nunca necesitan tratamiento'],
        cons: ['Visitas una vez al año hasta que termina el crecimiento'],
      },
      surgery: {
        name: 'Cirugía del varicocele',
        summary:
          'El cirujano amarra las venas hinchadas y deja sin tocar la arteria y los canales linfáticos. Hay dos formas principales: cirugía abierta por una pequeña herida justo debajo de la ingle (subinguinal), o cirugía laparoscópica con una cámara pequeña por la barriga.',
        before: 'Antes',
        after: 'Después de la cirugía',
        pros: ['Funciona bien', 'Muchas veces el testículo alcanza su tamaño', 'Por lo general se va a casa el mismo día'],
        cons: ['Anestesia general', 'Líquido alrededor del testículo (hidrocele) después: más común con el método laparoscópico, pero poco común cuando se respetan los canales linfáticos', 'Puede regresar'],
      },
      embolization: {
        name: 'Embolización',
        summary:
          'Un radiólogo pasa un tubo delgado por una vena de la ingle o del cuello hasta la vena del testículo, y luego la tapa por dentro con espirales muy pequeñas.',
        before: 'Antes',
        after: 'Después de las espirales',
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
