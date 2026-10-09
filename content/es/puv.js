// Válvulas uretrales posteriores — textos del capítulo en español.
export default {
  title: 'Válvulas uretrales posteriores',

  embryology: {
    intro:
      'La uretra es el tubo que lleva la orina de la vejiga hacia afuera del cuerpo. En los niños con válvulas uretrales posteriores, se forman pliegues de tejido de más (válvulas) dentro de la uretra al principio del embarazo. Funcionan como una puerta de un solo sentido que bloquea en parte la salida de la orina de la vejiga.',
    modeLabel: 'Uretra',
    modes: { typical: 'Típica', valves: 'Con válvulas' },
    pee: 'Orinando',
    texts: {
      typical: 'La orina sale libremente de la vejiga y por la uretra en un chorro fuerte.',
      valves: 'Los pliegues de las válvulas atrapan la orina como las velas atrapan el viento. La uretra de arriba se infla y solo pasa un chorro débil.',
    },
    labels: { bladder: 'Vejiga', neck: 'Cuello de la vejiga', valves: 'Válvulas', urethra: 'Uretra', tip: 'Punta del pene' },
    note: 'Las válvulas uretrales posteriores solo pasan en niños. No las causó nada que los padres hicieron durante el embarazo.',
  },

  pathology: {
    intro:
      'Como la orina no puede salir fácilmente, la presión sube detrás de las válvulas. Con el tiempo esto afecta la vejiga y luego los riñones. Vea paso a paso lo que pasa.',
    stepLabel: 'Paso',
    steps: [
      { name: 'Obstrucción', text: 'Las válvulas bloquean en parte la uretra. La vejiga tiene que apretar muy fuerte para sacar la orina.' },
      { name: 'Vejiga', text: 'El músculo de la vejiga se pone grueso y rígido por trabajar tanto, como un músculo en el gimnasio. Una vejiga gruesa aguanta menos y no se vacía bien.' },
      { name: 'Riñones', text: 'La presión alta en la vejiga hace que la orina suba por los uréteres a los dos riñones, así que los dos se hinchan. Algunos niños también tienen reflujo.' },
      { name: 'Salud de los riñones', text: 'La presión sobre los riñones, a veces desde antes de nacer, puede impedir que crezcan y funcionen normalmente. Cuánto depende de cada niño.' },
    ],
    beforeBirthTitle: 'Antes de nacer',
    beforeBirth:
      'La orina del bebé forma la mayor parte del líquido que lo rodea. Si sale poca orina, el líquido puede estar bajo. El líquido bajo puede afectar cómo crecen los pulmones del bebé. El ultrasonido puede mostrar una vejiga grande y riñones hinchados.',
    signsTitle: 'Lo que las familias pueden notar después de nacer',
    signs: ['Un chorro de orina débil o que gotea', 'Infecciones de orina con fiebre', 'Pujar para orinar', 'Más adelante: escapes de orina de día o mojar la cama'],
  },

  treatment: {
    intro:
      'El tratamiento empieza poco después de nacer. Primero drenamos la vejiga y luego abrimos las válvulas. Como la vejiga y los riñones pueden seguir afectados, los niños con válvulas necesitan revisiones toda la vida.',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    options: {
      catheter: {
        name: 'Sonda al nacer',
        summary:
          'Se pasa un tubo delgado y blando (sonda) por la uretra hasta la vejiga. Drena la orina de inmediato y baja la presión sobre los riñones mientras se revisa al bebé.',
        toggle: 'Sonda puesta',
        pros: ['Alivia la presión de inmediato', 'Sin cirugía'],
        cons: ['Solo es una solución a corto plazo', 'El bebé por lo general se queda en el hospital'],
      },
      ablation: {
        name: 'Ablación de las válvulas',
        summary:
          'El tratamiento principal. Se pasa una cámara muy pequeña por la uretra y el cirujano corta los pliegues de las válvulas para que la orina fluya libremente. No hay cortes en la piel.',
        steps: [
          'Antes: unos pliegues delgados de tejido (las válvulas) bloquean en parte la uretra. La vejiga tiene que apretar fuerte, y el chorro de orina es débil.',
          'Con el bebé completamente dormido, se pasa con cuidado una cámara muy pequeña por la uretra, por la punta del pene. No hay cortes en la piel.',
          'La cámara se sube hasta que el cirujano puede ver los pliegues de las válvulas que bloquean el paso.',
          'Una cuchilla muy pequeña (muchas veces un cuchillo pequeño en forma de gancho) corta los pliegues en algunos puntos. A veces se usa en su lugar una corriente eléctrica pequeña o un láser.',
          'Los pliegues cortados se abren, así que la uretra ya no está bloqueada.',
          'Se saca la cámara. Una sonda pequeña puede drenar la vejiga por un tiempo corto, y muchos bebés se van a casa en uno o dos días.',
          'Ahora la orina sale con un chorro más fuerte. Las revisiones y los estudios confirman que las válvulas quedaron abiertas; algunos niños necesitan otra revisión después.',
        ],
        pros: ['Quita la obstrucción', 'Sin cortes en la piel', 'Por lo general se hace en las primeras semanas de vida'],
        cons: ['Anestesia general', 'A veces se necesita revisar de nuevo después', 'La vejiga y los riñones todavía necesitan seguimiento'],
      },
      vesicostomy: {
        name: 'Vesicostomía',
        summary:
          'Para bebés demasiado pequeños para la cámara, o si los riñones necesitan más ayuda, la vejiga se puede abrir a la piel justo debajo del ombligo. La orina drena al pañal. Se cierra más adelante.',
        steps: [
          'Antes: las válvulas bloquean la orina, así que la vejiga se mantiene llena y los riñones están hinchados.',
          'Con el bebé dormido, se hace una pequeña herida de lado a lado en la piel, más o menos a la mitad entre el ombligo y el hueso del pubis.',
          'La parte de arriba de la vejiga (la cúpula) se libera y se sube a través de la capa de músculo de la barriga, donde se fija con puntos.',
          'Se abre la parte de arriba de la vejiga y sus bordes se cosen a la piel. Esto forma una pequeña abertura (una vesicostomía).',
          'Ahora la orina drena libremente al pañal. La vejiga se mantiene vacía y baja la presión sobre los riñones. No se usa bolsa.',
          'Más adelante, por lo general cuando el bebé es más grande y ya se trataron las válvulas, la abertura se cierra con otra cirugía.',
        ],
        stomaLabel: 'Abertura en la barriga',
        pros: ['Drena bien la vejiga', 'Protege los riñones en bebés muy pequeños'],
        cons: ['Cirugía ahora y otra después para cerrarla', 'Cuidado de la abertura'],
      },
      bladder: {
        name: 'Cuidado de la vejiga de por vida',
        summary:
          'Aun después de abrir las válvulas, la vejiga puede seguir gruesa y no vaciarse por completo. Cuidar la vejiga protege los riñones.',
        tips: [
          'Orinar con horario, y orinar dos veces cada vez (doble micción)',
          'Tratar el estreñimiento',
          'Medicamentos para relajar la vejiga, si se necesitan',
          'Algunos niños necesitan una sonda para vaciar la vejiga, unas veces al día o en la noche',
        ],
        pros: ['Protege la función de los riñones', 'Ayuda con los escapes de orina'],
        cons: ['Rutina diaria', 'Revisiones y estudios con regularidad'],
      },
      kidney: {
        name: 'Cuidado de los riñones',
        summary:
          'Un médico de los riñones (nefrólogo) revisa la presión arterial, análisis de sangre y el crecimiento con el tiempo. En algunos niños los riñones funcionan menos conforme crecen. Alrededor de 1 de cada 5 o más con el tiempo necesitarán diálisis o un trasplante de riñón, por eso son importantes las revisiones regulares de los riñones.',
        damage: 'Riñones afectados',
        pros: ['Encuentra problemas a tiempo', 'Los tratamientos ayudan a que los riñones duren más'],
        cons: ['Seguimiento de por vida'],
      },
    },
  },

  takeaways: {
    points: [
      'Las válvulas uretrales posteriores son tejido de más en la uretra de un niño que bloquea la salida de la orina de la vejiga.',
      'Pueden afectar la vejiga y los dos riñones, a veces desde antes de nacer.',
      'Las válvulas se abren con una cámara muy pequeña, por lo general poco después de nacer.',
      'La vejiga y los riñones necesitan revisiones toda la vida.',
      'Los buenos hábitos de la vejiga ayudan a proteger los riñones.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'Un chorro débil, tiene que pujar o no orina en muchas horas',
      'Vómito, poca alimentación o no se comporta como siempre',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
