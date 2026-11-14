// Escapes de orina durante el día — textos del capítulo en español.
// Las `labels` y el `cycle` también los usa el capítulo de vejiga neurogénica.
export default {
  title: 'Escapes de orina de día y micción disfuncional',

  labels: {
    brain: 'Cerebro',
    cord: 'Médula espinal',
    bladder: 'Vejiga',
    sphincter: 'Músculo de control',
    poop: 'Excremento',
    lesion: 'Señales bloqueadas',
    augment: 'Intestino agregado',
    channel: 'Canal del ombligo',
  },

  cycle: [
    { name: 'Llenado', message: '', text: 'La vejiga se relaja y se estira mientras se llena. El músculo de control de abajo se mantiene cerrado.' },
    { name: 'Se está llenando', message: '¡Me estoy llenando!', text: 'Los nervios mandan un mensaje por la médula espinal al cerebro: “Me estoy llenando.”' },
    { name: 'Aguantar', message: 'Aguanta', text: 'Si no es buen momento, el cerebro le dice a la vejiga que se quede relajada y al músculo de control que se quede cerrado.' },
    { name: 'Orinar', message: '¡Ya!', text: 'En el baño, el cerebro dice “ya.” El músculo de control se relaja y se abre, y la vejiga aprieta para vaciarse por completo.' },
  ],

  embryology: {
    intro:
      'Mantenerse seco es trabajo en equipo entre la vejiga, el músculo de control (esfínter) y el cerebro. La mayoría de los niños aprenden a controlar durante el día alrededor de los 4 años, pero estas habilidades siguen madurando por años.',
    stepLabel: 'Ciclo de la vejiga',
  },

  pathology: {
    intro:
      'Los escapes de orina durante el día son comunes en niños de edad escolar. Por lo general se deben a los hábitos de la vejiga, no a una enfermedad, y no son a propósito. Los problemas de vejiga y de intestino muchas veces van juntos. Alrededor de 1 de cada 10 niños de 5 a 7 años tienen escapes durante el día, y es más común en las niñas.',
    typeLabel: 'Tipo',
    types: {
      overactive: {
        name: 'Vejiga hiperactiva',
        text: 'La vejiga aprieta de repente antes de estar llena. El niño o la niña siente ganas repentinas, corre y puede mojarse en el camino. Muchos se agachan, cruzan las piernas o se sientan sobre el talón para aguantar.',
      },
      holding: {
        name: 'Aguantar demasiado',
        text: 'El niño está ocupado y espera demasiado para ir. La vejiga se llena mucho y se desborda, muchas veces con accidentes grandes. Por lo general orina solo 2–3 veces al día.',
      },
      dysfunctional: {
        name: 'El músculo no se relaja (micción disfuncional)',
        text: 'El músculo de control se aprieta en lugar de relajarse al orinar. El chorro empieza y se para, y la vejiga no se vacía por completo. La orina que queda aumenta la probabilidad de infecciones.',
      },
      constipation: {
        name: 'Estreñimiento',
        text: 'Mucho excremento en el intestino aprieta la vejiga e irrita sus nervios. Muchas veces, tratar solo el estreñimiento quita los escapes.',
      },
      vaginal: {
        name: 'Orina atrapada en la vagina',
        text: 'En las niñas que se sientan con las piernas juntas, algo de orina regresa a la vagina al orinar. Luego gotea al pararse, así que la ropa interior se moja justo después de ir al baño. Sentarse bien atrás con las rodillas bien separadas (o mirando hacia la parte de atrás del inodoro) lo corrige.',
      },
      giggle: {
        name: 'Escapes al reírse',
        text: 'Algunos niños, sobre todo niñas, se mojan mucho cuando se ríen fuerte (incontinencia por risa). La vejiga se aprieta con la risa. Muchas veces mejora con la edad, y orinar con horario o un medicamento pueden ayudar.',
      },
    },
    bowelLink: 'Aprenda más sobre la disfunción de vejiga e intestino',
    signsTitle: 'Señales comunes',
    signs: ['Ganas repentinas, correr al baño', 'Ropa interior húmeda', 'Orinar menos de 4 o más de 7 veces al día', 'Maniobras para aguantar: cruzar las piernas, agacharse', 'Excremento duro o evacuar pocas veces', 'Infecciones de orina'],
  },

  treatment: {
    intro: 'La mayoría de los niños mejoran con cambios sencillos de hábitos en unos meses. El primer paso por lo general es un diario de vejiga e intestino.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      firstVisit: {
        name: 'En la primera visita',
        summary: 'La mayoría de los niños solo necesitan unas revisiones sencillas. La uroflujometría muestra cómo sale la orina: una curva suave es normal, y una curva que se corta significa que el músculo de control no se relaja.',
        tips: [
          'Un diario de vejiga e intestino de 2 a 3 días',
          'Un análisis de orina',
          'Uroflujometría: orinar en un inodoro especial que dibuja el chorro',
          'Un escaneo de la vejiga justo después de orinar para ver cuánta orina queda',
          'Una revisión de la espalda baja y las piernas para buscar señales de un problema en la columna',
          'Un ultrasonido de los riñones y la vejiga en algunos niños',
        ],
        patternLabel: 'Tipo de curva',
        patterns: { normal: 'Suave (normal)', staccato: 'Se corta', interrupted: 'En partes' },
        chart: { title: 'Uroflujometría', time: 'Tiempo', flow: 'Flujo' },
        pros: ['Pruebas sencillas y sin dolor', 'Muestra qué tipo de problema es'],
        cons: ['El diario toma unos días en casa', 'Venga con la vejiga llena para la uroflujometría'],
      },
      schedule: {
        name: 'Orinar con horario',
        summary: 'Orinar con horario evita que la vejiga se llene demasiado o que haya que correr.',
        habits: ['Orinar cada 2–3 horas mientras está despierto (una alarma de reloj ayuda)', 'Orinar antes de la escuela, en el almuerzo, después de la escuela y antes de dormir', 'Tomar agua durante el día, sobre todo en la escuela', 'Sentarse por completo en el inodoro con los pies apoyados y las rodillas separadas', 'Tomarse su tiempo; no pujar ni apurarse'],
        pros: ['Seguro y sencillo', 'Ayuda en todos los tipos'],
        cons: ['Necesita recordatorios diarios', 'Toma de semanas a meses'],
      },
      constipation: {
        name: 'Tratar el estreñimiento',
        summary: 'Ablandador de heces y fibra todos los días hasta que el excremento sea blando y diario. A veces una radiografía de la barriga muestra estreñimiento escondido.',
        control: 'Semanas de tratamiento',
        weeks: 'semanas',
        pros: ['Muchas veces quita los escapes', 'Baja el riesgo de infección'],
        cons: ['Necesita meses de medicina diaria', 'Si se deja muy pronto, puede regresar'],
      },
      biofeedback: {
        name: 'Terapia del piso pélvico',
        summary: 'Un terapeuta usa juegos y sensores para enseñarle al niño a relajar el músculo de control al orinar, para que la vejiga se vacíe por completo.',
        scene: { screen: 'Pantalla de terapia', muscle: 'Músculo de control', game: '¡Relájate para volar!', stickers: 'Calcomanías' },
        steps: [
          'Antes: el músculo de control se aprieta al orinar, así que el chorro se corta y queda orina en la vejiga.',
          'Unas calcomanías pequeñas en la piel cerca del trasero muestran la actividad del músculo de control en una pantalla. Nada entra al cuerpo.',
          'El niño o la niña juega: relajar el músculo hace volar el cohete. Un músculo apretado se ve como una línea que brinca.',
          'El niño o la niña practica relajar el músculo al orinar. El chorro se vuelve suave.',
          'Después de varias visitas y práctica en casa, la vejiga se vacía por completo.',
        ],
        pros: ['Trata la causa del chorro que se corta', 'Sin medicamentos'],
        cons: ['Varias visitas', 'Necesita práctica en casa'],
      },
      medicine: {
        name: 'Medicamento para calmar la vejiga',
        summary: 'La oxibutinina es la opción más común. Relaja la vejiga para que no apriete demasiado pronto. El mirabegrón es otra opción con menos efectos secundarios. Primero hay que tratar el estreñimiento, porque estos medicamentos lo pueden empeorar. Por lo general se prueba por unos meses, luego se deja para ver si todavía se necesita, y se usa junto con buenos hábitos.',
        dose: 'Medicamento',
        pros: ['Menos urgencia y menos accidentes'],
        cons: ['La oxibutinina puede causar estreñimiento, boca seca o enrojecimiento de la cara', 'Los hábitos siguen siendo importantes'],
      },
      more: {
        name: 'Si los hábitos no son suficientes',
        summary: 'Para niños que siguen con escapes después de los hábitos, el tratamiento del estreñimiento y la terapia, hay otras opciones.',
        items: [
          'Estimulación de los nervios con parches adhesivos en la espalda baja (TENS), en casa',
          'Estimulación de los nervios con una aguja muy delgada cerca del tobillo (PTNS), en la clínica una vez por semana',
          'Un medicamento alfabloqueador para ayudar a que el músculo de control se relaje cuando no se relaja solo',
        ],
        pros: ['Ayuda a algunos niños que no respondieron a otros tratamientos'],
        cons: ['Toma semanas de sesiones regulares', 'No está disponible en todas partes'],
      },
    },
  },

  takeaways: {
    points: [
      'Los escapes de orina durante el día son comunes y no son a propósito.',
      'Por lo general se deben a los hábitos de la vejiga y al estreñimiento.',
      'Orinar cada 2–3 horas, tomar agua y mantener el excremento blando.',
      'La mayoría de los niños mejoran en unos meses.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: ['Fiebre, o dolor al orinar', 'Goteo constante (siempre mojado, aun justo después de orinar), que puede ser señal de un <a href="#/duplex/pathology">uréter ectópico</a>', 'Chorro débil o tiene que pujar', 'Dolor de espalda, debilidad en las piernas o accidentes nuevos con excremento'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
