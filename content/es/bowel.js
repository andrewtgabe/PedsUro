// Disfunción de vejiga e intestino — textos del capítulo en español.
export default {
  title: 'Disfunción de vejiga e intestino',

  labels: {
    bladder: 'Vejiga',
    rectum: 'Recto (final del intestino)',
    poop: 'Excremento',
    front: 'Adelante',
    back: 'Atrás',
    pressing: 'Aprieta la vejiga',
    goal: 'Meta',
  },

  embryology: {
    intro:
      'La vejiga y el final del intestino (el recto) son vecinos en la pelvis. Comparten los mismos nervios y los mismos músculos para aguantar y soltar. Cuando uno no funciona bien, muchas veces el otro también se afecta. Esto se llama disfunción de vejiga e intestino.',
    stepLabel: 'Cómo se va formando',
    steps: [
      { name: 'Normal', text: 'El recto se llena, el niño siente las ganas y evacua fácilmente. La vejiga tiene mucho espacio.' },
      { name: 'Aguantar', text: 'Un excremento duro o que duele, o estar ocupado, hace que el niño se aguante. Aguantarse parece más fácil que ir.' },
      { name: 'Estirado', text: 'El excremento que se queda en el recto se seca y se hace más duro y más grande. El recto se estira y aprieta la parte de atrás de la vejiga. Ir al baño duele más, así que el niño se aguanta más.' },
      { name: 'Se desborda', text: 'Un recto muy estirado pierde la sensación. El excremento blando se puede salir alrededor del excremento duro sin que el niño lo note (manchar la ropa interior). No es a propósito.' },
    ],
  },

  pathology: {
    intro:
      'Un recto lleno y estirado aprieta la vejiga e irrita sus nervios. Entonces la vejiga aguanta menos y aprieta demasiado pronto. Muchos niños con esta disfunción están estreñidos aunque evacuen todos los días.',
    fullLabel: '¿Qué tan lleno está el intestino?',
    full: ['Vacío', 'Algo', 'Lleno', 'Muy lleno'],
    hard: 'Excremento duro y seco',
    texts: [
      'La vejiga tiene espacio para llenarse y vaciarse normalmente.',
      'Un poco de excremento en el recto. Por lo general no es problema.',
      'El recto lleno aprieta la vejiga. El niño puede sentir ganas repentinas y correr al baño.',
      'La vejiga está apretada e irritada: son más probables los accidentes, las ganas repentinas y las infecciones de orina. También se puede salir excremento.',
    ],
    signsTitle: 'Señales de disfunción de vejiga e intestino',
    signs: [
      'Menos de 3 evacuaciones a la semana, o excremento duro, que duele o muy grande',
      'Manchas de excremento en la ropa interior, o accidentes con excremento',
      'Aguantar el excremento: esconderse, cruzar las piernas, ponerse rígido cuando vienen las ganas',
      'Ganas repentinas de orinar, accidentes de día o mojar la cama',
      'Infecciones de orina',
      'Dolor de barriga que va y viene',
    ],
    link: 'Aprenda más sobre los escapes de orina durante el día',
  },

  treatment: {
    intro:
      'Tratar el intestino es el primer paso, y muchas veces también corrige los problemas de la vejiga. Toma tiempo: la mayoría de los niños necesitan un plan diario por varios meses.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      cleanout: {
        name: 'Limpieza',
        summary: 'Si el intestino está muy lleno, primero se vacía con unos días de una dosis más alta de ablandador de heces (o a veces enemas). Es mejor hacerlo en casa un fin de semana o en vacaciones de la escuela.',
        control: 'Días de limpieza',
        days: 'días',
        pros: ['Saca el excremento duro y atorado', 'Deja que el recto empiece a regresar a su tamaño'],
        cons: ['Muchas idas al baño por unos días', 'Puede causar cólicos'],
      },
      maintenance: {
        name: 'Ablandador de heces diario',
        summary: 'Un ablandador de heces diario (como el polietilenglicol, mezclado en una bebida) mantiene el excremento blando para que no duela. La dosis se ajusta hasta que el excremento sea blando todos los días. Por lo general se sigue por varios meses mientras el recto regresa a su tamaño normal.',
        pros: ['Seguro para uso largo', 'Rompe el ciclo de aguantarse'],
        cons: ['Necesita meses de uso diario', 'Si se deja muy pronto, puede regresar'],
      },
      routine: {
        name: 'Rutina para ir al baño',
        summary: 'Sentarse en el inodoro a las mismas horas cada día ayuda al cuerpo a volver a aprender las ganas de ir.',
        tips: [
          'Sentarse 5–10 minutos unos 15–30 minutos después de las comidas',
          'Usar un banquito para que las rodillas queden más arriba que la cadera',
          'Inclinarse hacia adelante, relajarse y soplar burbujas o un rehilete para ayudar a pujar',
          'Orinar cada 2–3 horas mientras está despierto',
          'Usar una tabla de calcomanías para felicitar el sentarse, no solo los resultados',
        ],
        pros: ['Aprovecha las ganas naturales después de comer', 'Crea un hábito duradero'],
        cons: ['Necesita recordatorios diarios'],
      },
      goal: {
        name: 'Meta: excremento blando',
        summary: 'La escala de heces de Bristol les ayuda a usted y a su hijo o hija a describir el excremento. La meta es el tipo 4: blando, liso y fácil de sacar. Los tipos 1 y 2 significan estreñimiento.',
        typeLabel: 'Tipo de excremento',
        types: [
          'Tipo 1: bolitas duras separadas, como nueces. Cuesta trabajo sacarlas.',
          'Tipo 2: con bultos y forma de salchicha. Estreñimiento.',
          'Tipo 3: forma de salchicha con grietas. Cerca de la meta.',
          'Tipo 4: liso y blando, como una víbora. ¡La meta!',
          'Tipo 5: pedazos blandos con bordes claros. Está bien, puede estar un poco suelto.',
          'Tipo 6: pedazos blandos y esponjosos. Demasiado suelto: la dosis del ablandador puede estar alta.',
          'Tipo 7: aguado. Demasiado suelto.',
        ],
        tips: ['Tomar agua durante el día', 'Comer frutas, verduras y granos integrales', 'Limitar la leche a unas 2 tazas al día', 'Hacer actividad física todos los días'],
        pros: ['Forma fácil de ver el progreso en casa'],
        cons: ['Al principio hay que revisar todos los días'],
      },
    },
  },

  takeaways: {
    points: [
      'La vejiga y el intestino son vecinos y se afectan uno al otro.',
      'Un recto lleno y estirado aprieta la vejiga y puede causar ganas repentinas, accidentes e infecciones de orina.',
      'Aguantar el excremento hace que sea más duro, que duela más y que se aguante más.',
      'El tratamiento empieza vaciando el intestino, y luego un ablandador diario y una rutina para ir al baño por varios meses.',
      'Manchar la ropa y los accidentes no son a propósito. Felicite el esfuerzo y nunca castigue.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Barriga hinchada, vómito o dolor fuerte de barriga',
      'Sangre en el excremento',
      'Fiebre, o dolor al orinar',
      'Dolor de espalda, debilidad en las piernas o nueva dificultad para controlar la orina o el excremento',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
