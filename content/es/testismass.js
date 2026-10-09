// Masa testicular — textos del capítulo en español.
export default {
  title: 'Masa testicular',

  labels: {
    testicle: 'Testículo',
    mass: 'Masa',
    cord: 'Cordón espermático',
    scrotum: 'Escroto',
    clamp: 'Pinza suave',
    prosthesis: 'Testículo artificial',
    germ: 'Células germinales',
    stromal: 'Células de soporte y de hormonas',
    para: 'Tejido alrededor del testículo',
    covering: 'Cubierta externa',
    epididymis: 'Epidídimo',
  },

  embryology: {
    intro:
      'Un testículo tiene varios tipos de tejido. Unos tubos enrollados muy pequeños tienen células germinales, que van a producir espermatozoides después de la pubertad. Las células de soporte cubren los tubos, y las células de hormonas entre los tubos producen testosterona. Una bolita (masa) puede crecer de cualquiera de estos tejidos, o del tejido alrededor del testículo.',
    tissueLabel: 'Dónde puede empezar una masa',
    tissues: {
      germ: {
        name: 'Células germinales',
        text: 'Aquí empiezan los tumores de células germinales. En niños pequeños, por lo general son teratomas (casi siempre no son cáncer) o tumores del saco vitelino (un cáncer). En adolescentes son como los tumores de células germinales de los adultos, como el seminoma y el no seminoma.',
      },
      stromal: {
        name: 'Células de soporte y de hormonas',
        text: 'Los tumores del estroma empiezan en las células de soporte (Sertoli) o en las células de hormonas (Leydig), o son tumores de células de la granulosa juvenil en bebés. En niños por lo general no son cáncer. Algunos producen hormonas y pueden causar señales tempranas de pubertad.',
      },
      para: {
        name: 'Alrededor del testículo',
        text: 'Una masa también puede empezar junto al testículo, en el cordón o el tejido alrededor (paratesticular). La más importante en niños es el rabdomiosarcoma, un cáncer de células de tipo muscular. La leucemia y el linfoma también pueden aparecer en el testículo.',
      },
    },
    ages: 'Las masas testiculares son raras en niños. Aparecen más seguido en dos grupos de edad: bebés y niños pequeños menores de unos 3 años, y adolescentes después de la pubertad. Los tipos son muy diferentes en estos dos grupos.',
    note: 'Nada de lo que hicieron los padres causa una masa testicular. Un testículo que no bajó solo (no descendido) aumenta la probabilidad de un tumor de células germinales más adelante en la vida.',
  },

  pathology: {
    intro:
      'Una masa testicular por lo general se encuentra como una bolita o hinchazón que no duele. Muchas masas en niños pequeños no son cáncer. En adolescentes, la mayoría de las masas sólidas son cáncer, pero aun así la tasa de curación es muy alta.',
    ageLabel: 'Edad',
    typeLabel: 'Tipo',
    ages: {
      young: { name: 'Antes de la pubertad', types: ['teratoma', 'yolkSac', 'epidermoid', 'stromal', 'other'] },
      teen: { name: 'Después de la pubertad', types: ['gct', 'stromal', 'other'] },
    },
    types: {
      teratoma: {
        name: 'Teratoma',
        text: 'La masa testicular más común en niños pequeños. Crece de las células germinales y puede tener distintos tipos de tejido, a veces con pequeñas bolsas de líquido. Los análisis de sangre (marcadores tumorales) son normales para la edad.',
        verdict: 'Antes de la pubertad, casi siempre no es cáncer. Muchas veces se puede salvar el testículo.',
        cancer: false,
      },
      yolkSac: {
        name: 'Tumor del saco vitelino',
        text: 'El cáncer testicular más común en niños pequeños, por lo general menores de 2 a 3 años. Casi siempre sube un marcador en la sangre llamado AFP (alfafetoproteína), que ayuda con el diagnóstico y a revisar si regresa más adelante.',
        verdict: 'Es un cáncer, pero la mayoría se encuentran temprano y se curan. Muchos solo necesitan cirugía y revisiones de cerca.',
        cancer: true,
      },
      epidermoid: {
        name: 'Quiste epidermoide',
        text: 'Un quiste pequeño y firme lleno de capas de material parecido a la piel. En el ultrasonido muchas veces se ve como los anillos de una cebolla. Los marcadores tumorales son normales.',
        verdict: 'No es cáncer. Por lo general se puede quitar el quiste y salvar el testículo.',
        cancer: false,
      },
      stromal: {
        name: 'Tumor del estroma',
        text: 'Crece de las células de soporte o de hormonas (tumores de Leydig, de Sertoli o de células de la granulosa juvenil). Algunos producen hormonas, que pueden causar señales tempranas de pubertad o crecimiento de los pechos.',
        verdict: 'En niños, por lo general no es cáncer. A veces se puede salvar el testículo.',
        cancer: false,
      },
      gct: {
        name: 'Tumor de células germinales',
        text: 'Después de la pubertad, las masas testiculares se comportan como en los adultos. Los tipos incluyen seminoma y no seminoma (carcinoma embrionario, tumor del saco vitelino, coriocarcinoma, teratoma o una mezcla). Se revisan los marcadores en sangre AFP, hCG y LDH.',
        verdict: 'Por lo general es cáncer, pero es muy curable. Se quita todo el testículo.',
        cancer: true,
      },
      other: {
        name: 'Otras masas',
        text: 'Algunas masas empiezan junto al testículo, como el rabdomiosarcoma paratesticular, un cáncer de células de tipo muscular. La leucemia o el linfoma también pueden afectar el testículo.',
        verdict: 'Estas necesitan cirugía para confirmarlas y muchas veces tratamiento con un equipo de cáncer.',
        cancer: true,
      },
    },
    testsTitle: 'Estudios antes de la cirugía',
    tests: [
      'El ultrasonido del escroto muestra si la masa está dentro o junto al testículo, y si se ve sólida o con líquido.',
      'Análisis de sangre (marcadores tumorales): AFP, y en adolescentes también hCG y LDH. La AFP normalmente es alta en bebés menores de unos 8 a 12 meses, así que los resultados se comparan con los niveles normales para la edad.',
      'A veces un estudio de la barriga y del pecho para ver si se ha extendido.',
    ],
  },

  treatment: {
    intro:
      'Casi toda masa testicular se quita con cirugía. La cirugía se hace por un corte en la ingle, no en el escroto. Así el cirujano controla primero el cordón y evita que células del tumor se extiendan a la piel del escroto.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      partial: {
        name: 'Orquiectomía parcial',
        summary:
          'Cirugía que conserva el testículo: solo se quita la masa y se deja el testículo. Es una opción sobre todo para niños antes de la pubertad cuando el ultrasonido muestra una masa que parece no ser cáncer y los marcadores tumorales son normales para la edad.',
        steps: [
          'El ultrasonido muestra una masa que parece de un tipo que no es cáncer, y los marcadores tumorales en sangre son normales para la edad.',
          'Con el niño dormido, se hace un corte en el pliegue de la ingle.',
          'Se encuentra el cordón espermático en la ingle y se cierra con cuidado con una pinza cerca de arriba. Esto controla los vasos sanguíneos antes de tocar el testículo.',
          'Se sube el testículo fuera del escroto hasta el corte de la ingle.',
          'Se abre la cubierta y se quita la masa con un borde pequeño de tejido normal. Un pedazo se revisa de inmediato con el microscopio (biopsia por congelación) para confirmar que no es cáncer. Luego se cierra el testículo con puntos.',
          'Si la masa no es cáncer, se quita la pinza y el testículo se regresa al escroto. Si se encuentra cáncer, se quita todo el testículo.',
          'Se cierra el corte de la ingle. La mayoría de los niños se van a casa el mismo día. Después se hacen revisiones con ultrasonido.',
        ],
        pros: ['Conserva el testículo', 'Buenos resultados para masas que no son cáncer', 'Por lo general se va a casa el mismo día'],
        cons: ['No es segura para toda masa', 'Puede cambiar a quitar todo el testículo durante la cirugía', 'Seguimiento con ultrasonido'],
      },
      radical: {
        name: 'Orquiectomía inguinal radical',
        summary:
          'Se quitan todo el testículo y el cordón espermático, hasta donde entra a la barriga, por un corte en la ingle. Es la cirugía de rutina para una masa que puede ser cáncer, y para la mayoría de las masas sólidas después de la pubertad.',
        steps: [
          'El ultrasonido o los marcadores tumorales en sangre indican que la masa puede ser cáncer.',
          'Con el niño dormido, se hace un corte en el pliegue de la ingle.',
          'Se encuentra el cordón espermático y se cierra con una pinza bien arriba, cerca de donde entra a la barriga, antes de tocar el testículo.',
          'Se sube el testículo fuera del escroto hasta el corte de la ingle.',
          'Se amarra el cordón bien arriba, y se quitan juntos el testículo y el cordón. No se corta el escroto.',
          'Se puede poner un testículo artificial (prótesis) ahora o más adelante para que los dos lados se vean parecidos. La mayoría de los niños se van a casa el mismo día.',
        ],
        pros: ['Quita todo el tumor', 'Da el diagnóstico completo para planear los siguientes pasos', 'El otro testículo todavía puede producir hormonas y espermatozoides'],
        cons: ['Pérdida de un testículo', 'Puede necesitarse más tratamiento según los resultados'],
      },
      after: {
        name: 'Después de la cirugía',
        summary: 'Los siguientes pasos dependen de lo que encuentre el laboratorio y de si hay alguna extensión.',
        tips: [
          'Si no es cáncer: por lo general solo revisiones con ultrasonido.',
          'Si es cáncer: estudios de la barriga y del pecho, y repetir los marcadores tumorales, muestran si se ha extendido.',
          'Muchos niños con un cáncer que está solo en el testículo solo necesitan revisiones de cerca (vigilancia).',
          'Algunos necesitan quimioterapia, o rara vez más cirugía, con un equipo de cáncer infantil.',
          'Los adolescentes deben hablar sobre guardar espermatozoides (banco de esperma) antes de cualquier quimioterapia, de preferencia antes de la cirugía.',
        ],
        pros: ['Tasas de curación muy altas', 'La mayoría de los niños tienen una vida normal con un solo testículo'],
        cons: ['Seguimiento regular por varios años'],
      },
    },
  },

  takeaways: {
    points: [
      'Las masas testiculares son raras en niños, y muchas en niños pequeños no son cáncer.',
      'La mayoría en adolescentes son cáncer, pero son muy curables.',
      'El ultrasonido y los marcadores tumorales en sangre ayudan a saber el tipo antes de la cirugía.',
      'La cirugía se hace por la ingle, no por el escroto.',
      'A veces solo se quita la masa y se conserva el testículo. Si no, se quita todo el testículo.',
      'Los adolescentes deben revisarse los testículos cada mes desde que llegan a la pubertad.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo tiene',
    call: [
      'Una bolita nueva, una parte dura o hinchazón en un testículo',
      'Un testículo que se pone más grande o más pesado',
      'Después de la cirugía: fiebre, o enrojecimiento o hinchazón en el corte de la ingle que sigue empeorando',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
