// Obstrucción de la unión pieloureteral — textos del capítulo en español.
export default {
  title: 'Obstrucción de la unión pieloureteral',

  embryology: {
    intro:
      'La unión pieloureteral es donde la parte del riñón que recoge la orina, la pelvis renal, se une al uréter. Una obstrucción aquí es un estrechamiento que hace más lenta la salida de la orina del riñón.',
    causeLabel: 'Causa',
    causes: {
      narrow: {
        name: 'Un tramo estrecho y rígido',
        text: 'Antes de nacer, un tramo corto del uréter no forma su músculo normalmente. El uréter normalmente empuja la orina hacia abajo en olas, como cuando se aprieta un tubo de pasta de dientes. El tramo rígido no puede apretar, así que la orina se acumula en el riñón. Es la causa más común en bebés.',
      },
      vessel: {
        name: 'Un vaso sanguíneo que cruza',
        text: 'Un vaso sanguíneo que va a la parte baja del riñón pasa por encima del uréter y lo aprieta. Esto es más común en niños más grandes y muchas veces causa episodios de dolor.',
      },
    },
    strip: { stiff: 'Tramo rígido', kidney: 'Riñón', bladder: 'A la vejiga' },
    stripCaption: 'Mire cómo las olas llevan la orina por el uréter',
  },

  pathology: {
    intro:
      'La orina se produce todo el tiempo. Si no puede salir del riñón lo bastante rápido, la parte que recoge la orina se estira como un globo con agua. El uréter debajo del estrechamiento se ve normal.',
    severityLabel: 'Cantidad de obstrucción',
    severity: ['Leve', 'Moderada', 'Grave'],
    severityText: [
      'Leve: la orina drena un poco lento. El riñón por lo general funciona normal.',
      'Moderada: la parte que recoge la orina está claramente estirada. Revisamos qué tan bien drena el riñón.',
      'Grave: el riñón está muy estirado y su tejido se adelgaza. Con el tiempo, el riñón puede funcionar menos.',
    ],
    drink: 'Toma mucho líquido',
    drinkText:
      'Tomar mucho líquido produce más orina. Si no puede drenar, el riñón se hincha rápido y puede causar dolor de barriga o de costado, muchas veces con vómito. El dolor por lo general mejora conforme la orina drena poco a poco.',
    infection: 'Infección de orina',
    infectionText: 'En la orina que se queda quieta crecen bacterias más fácilmente. Una infección del riñón causa fiebre.',
    symptomsTitle: 'Lo que las familias pueden notar',
    symptoms: [
      'Bebés: por lo general nada. La mayoría se encuentran en un ultrasonido antes de nacer.',
      'Niños más grandes: episodios de dolor de barriga, de costado o de espalda, muchas veces con vómito',
      'Infecciones de orina con fiebre',
      'Sangre en la orina, a veces después de un golpe pequeño',
    ],
  },

  treatment: {
    intro:
      'Muchos bebés con una obstrucción leve o moderada mejoran sin cirugía. Usamos ultrasonidos y estudios del riñón para decidir.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      watch: {
        name: 'Vigilancia',
        summary:
          'Revisamos con ultrasonidos y a veces con una gammagrafía de drenaje renal. Si el riñón sigue funcionando bien y la hinchazón se mantiene igual o mejora, no se necesita cirugía.',
        control: 'Edad',
        months: 'meses',
        pros: ['Sin cirugía', 'Muchos bebés mejoran por sí solos'],
        cons: ['Ultrasonidos y estudios repetidos', 'Todavía puede necesitarse cirugía más adelante'],
      },
      pyeloplasty: {
        name: 'Cirugía de pieloplastia',
        summary:
          'El cirujano quita el tramo estrecho y cose la parte ancha del riñón al uréter sano. Si un vaso sanguíneo está apretando, el uréter se pasa por delante de él. Se puede hacer por una pequeña herida o con cirugía laparoscópica o robótica.',
        before: 'Antes de la cirugía',
        after: 'Después de la cirugía',
        stent: 'Stent temporal',
        stentText: 'Un stent es un tubo blando y delgado que mantiene abierta la nueva unión mientras sana. Por lo general se quita después de 4 a 6 semanas.',
        pros: ['Funciona muy bien, más de 9 de cada 10 veces', 'Quita el dolor y protege el riñón'],
        cons: ['Cirugía con anestesia general', 'Por lo general 1–2 días en el hospital', 'A veces necesita un stent o un drenaje por un tiempo corto'],
      },
    },
  },

  takeaways: {
    points: [
      'La obstrucción de la unión pieloureteral es un estrechamiento donde el riñón se une al uréter.',
      'Hace que se hinche la parte del riñón que recoge la orina (hidronefrosis).',
      'Muchos bebés mejoran sin cirugía.',
      'Los niños más grandes pueden tener episodios de dolor de costado y vómito.',
      'La cirugía de pieloplastia corrige el estrechamiento y funciona muy bien.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'Dolor de barriga, de costado o de espalda, sobre todo con vómito',
      'Sangre en la orina',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
