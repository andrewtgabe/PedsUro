// Adherencias de labios vulvares — textos del capítulo en español.
export default {
  title: 'Adherencias de labios vulvares',

  labels: {
    outer: 'Labios externos (labios mayores)',
    inner: 'Labios internos (labios menores)',
    urethra: 'Orificio para orinar',
    vagina: 'Vagina',
    fused: 'Piel pegada',
    pool: 'Orina',
  },

  embryology: {
    intro:
      'Las adherencias de labios vulvares pasan cuando los labios internos de la vulva se pegan en el centro. Son comunes en niñas de alrededor de 3 meses a 6 años. No son un defecto de nacimiento y no causan problemas en la pubertad ni para tener hijos más adelante.',
    stepLabel: 'Cómo pasa',
    steps: [
      { name: 'Piel delgada', fused: 0, text: 'Después de los primeros meses de vida, el nivel de la hormona estrógeno de una niña es bajo hasta la pubertad. El estrógeno bajo hace que la piel de los labios internos sea delgada y delicada.' },
      { name: 'Irritación', fused: 0.15, text: 'Los pañales, la humedad, los jabones o limpiarse pueden irritar esta piel delgada.' },
      { name: 'Se pegan', fused: 0.6, text: 'Al sanar los bordes irritados, se tocan y se pegan, empezando desde abajo y cerrándose hacia arriba.' },
    ],
    note: 'Esto no es causado por abuso, y no es algo que los padres hicieron mal.',
  },

  pathology: {
    intro: 'Muchas niñas no tienen síntomas, y las adherencias muchas veces se encuentran en una revisión de rutina. La piel se ve como una línea delgada y lisa donde se juntan los labios internos.',
    amountLabel: 'Cuánto está pegado',
    pee: 'Orinando',
    small: 'Las adherencias pequeñas por lo general no causan problemas.',
    large:
      'Cuando la mayor parte de la abertura está cubierta, la orina puede quedar atrapada detrás de la piel y luego gotear después de orinar. Esto puede causar humedad, irritación y a veces infecciones de orina.',
    signsTitle: 'Lo que las familias pueden notar',
    signs: ['Nada (lo más común)', 'Goteo o humedad después de orinar', 'Enrojecimiento o molestia', 'Infecciones de orina'],
  },

  treatment: {
    intro:
      'La mayoría de las adherencias no necesitan tratamiento y se separan solas, muchas veces en la pubertad cuando sube el estrógeno. Se da tratamiento si causan síntomas.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Vigilancia',
        summary: 'Si no hay síntomas, solo vigilamos. Mantenga la zona limpia y seca, y evite los baños de burbujas y los jabones fuertes.',
        pros: ['No necesita tratamiento', 'La mayoría se separan solas'],
        cons: ['Puede tardar años', 'Puede crecer'],
      },
      estrogen: {
        name: 'Crema de estrógeno',
        summary:
          'Se pone una pequeña cantidad de crema de estrógeno sobre la línea delgada una o dos veces al día por unas semanas, con presión suave. Engruesa la piel para que los labios se separen.',
        control: 'Semanas de crema',
        weeks: 'semanas',
        pros: ['Funciona en la mayoría de las niñas', 'Sin procedimiento'],
        cons: ['Crecimiento temporal del pecho o piel más oscura en la zona, que se quita al dejar la crema', 'Puede regresar'],
      },
      separation: {
        name: 'Separación con cuidado',
        summary:
          'Si la crema no funciona o la orina queda atrapada, los labios se pueden separar con cuidado. Por lo general se hace con sedación o anestesia para que no duela, porque separarlos despierta duele y muchas veces se vuelven a pegar.',
        before: 'Antes',
        after: 'Después',
        pros: ['Funciona de inmediato'],
        cons: ['Por lo general necesita sedación o anestesia', 'Puede regresar si no se hacen los cuidados'],
      },
      aftercare: {
        name: 'Evitar que regrese',
        summary: 'Las adherencias muchas veces regresan hasta la pubertad. Una pomada protectora evita que los bordes que están sanando se peguen.',
        tips: [
          'Poner vaselina en la zona todos los días por varias semanas después de separarlas',
          'Lavar con cuidado solo con agua; evitar baños de burbujas y jabones con perfume',
          'Limpiar de adelante hacia atrás y cambiar pronto los pañales o la ropa interior mojados',
        ],
        pros: ['Baja la probabilidad de que regrese'],
        cons: ['Cuidado diario'],
      },
    },
  },

  takeaways: {
    points: [
      'Las adherencias de labios vulvares son cuando los labios internos se pegan. Son comunes en niñas pequeñas.',
      'Pasan por el estrógeno bajo y la irritación, no por algo que los padres hicieron.',
      'La mayoría se separan solas y no necesitan tratamiento.',
      'La crema de estrógeno ayuda si hay síntomas. La vaselina ayuda a evitar que regresen.',
    ],
    callTitle: 'Llámenos o busque atención si su hija tiene',
    call: ['Fiebre, o dolor o ardor al orinar', 'Dificultad para orinar o solo gotea', 'Enrojecimiento, hinchazón o secreción'],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
