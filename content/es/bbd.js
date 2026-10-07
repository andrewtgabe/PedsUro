// Escapes de orina durante el día — textos del capítulo en español.
// Las `labels` y el `cycle` también los usa el capítulo de vejiga neurogénica.
export default {
  title: 'Escapes de orina durante el día',

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
      'Los escapes de orina durante el día son comunes en niños de edad escolar. Por lo general se deben a los hábitos de la vejiga, no a una enfermedad, y no son a propósito. Los problemas de vejiga y de intestino muchas veces van juntos.',
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
        name: 'El músculo no se relaja',
        text: 'El músculo de control se aprieta en lugar de relajarse al orinar. El chorro empieza y se para, y la vejiga no se vacía por completo. La orina que queda aumenta la probabilidad de infecciones.',
      },
      constipation: {
        name: 'Estreñimiento',
        text: 'Mucho excremento en el intestino aprieta la vejiga e irrita sus nervios. Muchas veces, tratar solo el estreñimiento quita los escapes.',
      },
    },
    signsTitle: 'Señales comunes',
    signs: ['Ganas repentinas, correr al baño', 'Ropa interior húmeda', 'Orinar menos de 4 o más de 7 veces al día', 'Maniobras para aguantar: cruzar las piernas, agacharse', 'Excremento duro o evacuar pocas veces', 'Infecciones de orina'],
  },

  treatment: {
    intro: 'La mayoría de los niños mejoran con cambios sencillos de hábitos en unos meses. El primer paso por lo general es un diario de vejiga e intestino.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      schedule: {
        name: 'Orinar con horario',
        summary: 'Orinar con horario evita que la vejiga se llene demasiado o que haya que correr.',
        tips: ['Orinar cada 2–3 horas mientras está despierto (una alarma de reloj ayuda)', 'Orinar antes de la escuela, en el almuerzo, después de la escuela y antes de dormir', 'Tomar agua durante el día, sobre todo en la escuela', 'Sentarse por completo en el inodoro con los pies apoyados y las rodillas separadas', 'Tomarse su tiempo; no pujar ni apurarse'],
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
        before: 'Antes',
        after: 'Después de la terapia',
        pros: ['Trata la causa del chorro que se corta', 'Sin medicamentos'],
        cons: ['Varias visitas', 'Necesita práctica en casa'],
      },
      medicine: {
        name: 'Medicamento para calmar la vejiga',
        summary: 'Medicamentos como la oxibutinina relajan la vejiga para que no apriete demasiado pronto. Por lo general se usan junto con buenos hábitos.',
        dose: 'Medicamento',
        pros: ['Menos urgencia y menos accidentes'],
        cons: ['Puede causar estreñimiento, boca seca o enrojecimiento de la cara', 'Los hábitos siguen siendo importantes'],
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
    call: ['Fiebre, o dolor al orinar', 'Goteo constante (siempre mojado)', 'Chorro débil o tiene que pujar', 'Dolor de espalda, debilidad en las piernas o accidentes nuevos con excremento'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
