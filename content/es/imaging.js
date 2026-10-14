// Estudios de imagen — textos del capítulo en español.
export default {
  title: 'Estudios de riñones y vejiga',
  factsTitle: 'Datos rápidos',
  modes: { shows: 'Qué muestra', day: 'El día del estudio' },

  ultrasound: {
    intro:
      'Un ultrasonido renal y de vejiga usa ondas de sonido para tomar imágenes de los riñones y la vejiga. Por lo general es el primer estudio que pedimos. No duele y no usa radiación.',
    facts: ['Dura unos 15 a 30 minutos', 'Sin agujas y sin radiación', 'Niños mayores: tomar agua antes para que la vejiga esté llena', 'Bebés: alimentarlos como siempre'],
    shows: {
      label: 'Qué revisamos',
      views: { normal: 'Normal', hydro: 'Riñón hinchado', wall: 'Pared de la vejiga gruesa' },
      texts: {
        normal: 'Los riñones tienen tamaño y forma normales, y la parte que recoge la orina no está estirada. La pared de la vejiga es delgada.',
        hydro: 'La parte del riñón que recoge la orina está estirada (hidronefrosis). El ultrasonido muestra cuánto, y podemos seguirlo con el tiempo.',
        wall: 'Una pared de la vejiga gruesa puede significar que la vejiga está trabajando de más, por ejemplo por aguantar la orina, una obstrucción o un problema de los nervios.',
      },
      after: 'Después de orinar',
      afterText: 'Las imágenes después de orinar muestran cuánta orina queda en la vejiga. Si queda mucha, puede significar que la vejiga no se vacía bien.',
    },
    steps: [
      'Los niños mayores toman agua antes del estudio para que la vejiga esté llena. Los bebés pueden comer como siempre.',
      'Su hijo o hija se acuesta en una cama, y se pone un gel tibio en la barriga y la espalda.',
      'Un aparato pequeño de mano (sonda) se desliza sobre cada riñón para tomar imágenes. Solo se siente como que presionan suavemente.',
      'El aparato pasa a la parte baja de la barriga para ver la vejiga llena.',
      'A veces su hijo o hija orina y se revisa la vejiga otra vez para ver cuánta orina queda. Luego se limpia el gel y terminan.',
    ],
  },

  mag3: {
    intro:
      'Un estudio MAG3 (renograma con diurético) muestra cuánto trabajo hace cada riñón y qué tan bien drena la orina de cada riñón. Ayuda a saber si un riñón hinchado está realmente bloqueado.',
    facts: ['Dura en total de 1 a 2 horas', 'Necesita una vía en la vena (IV); muchos niños pequeños también necesitan una sonda en la vejiga', 'Una cantidad pequeña de radiación, más o menos lo que todos recibimos de la naturaleza en unos meses', 'Tomar bastante líquido antes del estudio, a menos que le digan otra cosa', 'Por lo general sin sedación; su hijo o hija debe quedarse quieto'],
    shows: {
      patternLabel: 'Drenaje',
      patterns: { normal: 'Drena bien', slow: 'Lento, luego drena', blocked: 'Bloqueado' },
      patternTexts: {
        normal: 'El trazador entra al riñón y sale rápido. No hay obstrucción.',
        slow: 'El riñón está ancho y drena despacio al principio, pero se vacía después de la medicina para orinar (Lasix). Por lo general no es una obstrucción real.',
        blocked: 'El trazador se queda en el riñón aun después del Lasix. Esto indica una obstrucción real que puede necesitar cirugía.',
      },
      splitLabel: 'Función de cada riñón',
      splits: { even: 'Pareja', mild: 'Un poco desigual', low: 'Un riñón bajo' },
      splitTitle: 'Parte del trabajo que hace cada riñón',
      splitTexts: {
        even: 'Cada riñón hace más o menos la mitad del trabajo. Esto es normal.',
        mild: 'Una diferencia pequeña (alrededor de 45/55 o menos) por lo general se considera normal.',
        low: 'Si un riñón hace mucho menos de su parte (menos de alrededor de 40%), o su parte baja en estudios repetidos, se puede recomendar cirugía.',
      },
      left: 'Izquierdo',
      right: 'Derecho',
      chart: { title: 'Curva de drenaje', minutes: 'Minutos', amount: 'Trazador en el riñón', lasix: 'Se da Lasix' },
    },
    steps: [
      'Se puede usar una crema para adormecer, y se pone una vía (IV) en el brazo o la mano. Se dan líquidos extra por la vía o tomando.',
      'En muchos niños pequeños se pone un tubo delgado y suave (sonda) en la vejiga para mantenerla vacía durante el estudio.',
      'Su hijo o hija se acuesta quieto en una mesa debajo de una cámara especial. Una cantidad muy pequeña de trazador entra por la vía. No duele.',
      'La cámara observa cómo los riñones toman el trazador y lo mandan a la vejiga. Ver videos o tener a un papá o mamá cerca ayuda a quedarse quieto.',
      'Se da por la vía una medicina que hace más orina (Lasix). Esto muestra si el riñón drena bien o está bloqueado.',
      'Se quitan la vía y la sonda. Tome líquidos extra; el trazador sale del cuerpo con la orina en alrededor de un día.',
    ],
  },

  dmsa: {
    intro:
      'Un estudio DMSA muestra el tejido sano que trabaja en cada riñón. Es el mejor estudio para encontrar cicatrices en el riñón, por ejemplo después de una infección del riñón, y también muestra cuánto trabajo hace cada riñón.',
    facts: ['Una inyección por la vena, luego una espera de unas 2 a 3 horas, luego de 30 a 60 minutos de imágenes', 'Sin sonda en la vejiga', 'Una cantidad pequeña de radiación, más o menos lo que todos recibimos de la naturaleza en unos meses', 'Su hijo o hija debe quedarse quieto; los niños pequeños a veces necesitan sedación', 'Para buscar cicatrices, por lo general se hace unos 6 meses después de una infección'],
    shows: {
      label: 'Qué muestran las imágenes',
      findings: { normal: 'Normal', scar: 'Cicatriz', infection: 'Infección activa' },
      texts: {
        normal: 'Los dos riñones se ven parejos y con bordes lisos. Cada uno hace más o menos la mitad del trabajo.',
        scar: 'Una cicatriz se ve como un lugar que falta o que está aplanado, muchas veces arriba o abajo del riñón. Ese riñón puede hacer un poco menos del trabajo.',
        infection: 'Durante una infección del riñón, las partes inflamadas toman menos trazador y se ven pálidas. Pueden sanar, por eso las cicatrices se revisan meses después.',
      },
      picture: { title: 'Estudio DMSA', left: 'Izquierdo', right: 'Derecho', view: 'Visto desde la espalda' },
    },
    steps: [
      'Se pone una vía pequeña y se inyecta una cantidad muy pequeña de trazador. Después se puede quitar la vía.',
      'Se espera unas 2 a 3 horas mientras el trazador se acomoda en el tejido del riñón. Por lo general su hijo o hija puede comer, tomar y jugar.',
      'Su hijo o hija se acuesta quieto en una mesa mientras una cámara cerca de la espalda toma imágenes por 30 a 60 minutos.',
      'Las imágenes muestran el tejido sano del riñón con brillo. Las cicatrices se ven como lugares que faltan.',
      'Pueden irse a casa. Tome líquidos extra; el trazador sale del cuerpo con la orina en alrededor de un día.',
    ],
  },

  vcug: {
    intro:
      'Un CUGM (cistouretrograma miccional) es un estudio con rayos X que muestra si la orina regresa de la vejiga hacia los riñones (reflujo). También muestra la forma de la vejiga y de la uretra.',
    facts: ['Dura unos 30 a 60 minutos', 'Necesita una sonda en la vejiga; se usa un gel para adormecer', 'Una cantidad pequeña de rayos X', 'Por lo general sin sedación, porque su hijo o hija necesita orinar durante el estudio', 'No se hace durante una infección de orina activa'],
    shows: {
      label: 'Durante el estudio',
      views: { filling: 'La vejiga se llena', none: 'Orinando, sin reflujo', reflux: 'Orinando, con reflujo' },
      texts: {
        filling: 'El tinte pasa por la sonda y llena la vejiga. Las imágenes de rayos X muestran la forma de la vejiga y cualquier reflujo mientras se llena.',
        none: 'Mientras su hijo o hija orina, el tinte sale por la uretra y nada sube por los uréteres. No hay reflujo.',
        reflux: 'Mientras su hijo o hija orina, algo de tinte regresa por un uréter hacia el riñón. Esto es reflujo, y las imágenes muestran su grado.',
      },
    },
    steps: [
      'Por lo general un especialista en vida infantil y un papá o mamá pueden quedarse con su hijo o hija. La mayoría de los niños no necesitan sedación.',
      'Se limpia alrededor de la abertura de la uretra, se usa un gel para adormecer y se desliza con cuidado una sonda delgada y suave a la vejiga. Esta parte es rápida.',
      'El tinte llena despacio la vejiga por la sonda mientras se toman imágenes de rayos X.',
      'Cuando la vejiga está llena, su hijo o hija orina en la mesa sobre almohadillas suaves. La sonda sale sola o se quita.',
      'Las imágenes tomadas al orinar muestran si el tinte regresa hacia los riñones. En los bebés a veces se llena la vejiga dos veces.',
      'Terminaron. Orinar puede arder las primeras veces. Tome líquidos extra y llame si su hijo o hija tiene fiebre.',
    ],
  },

  uroflow: {
    intro:
      'Una uroflujometría mide qué tan rápido sale la orina mientras su hijo o hija orina en un baño especial. La forma de la curva muestra cómo trabajan juntos la vejiga y el músculo de control.',
    facts: ['Venga con la vejiga llena: tome agua antes', 'Sin agujas y sin radiación', 'Su hijo o hija orina en privado, de la forma más normal posible', 'Después, un ultrasonido rápido revisa si queda orina', 'A veces se repite 2 veces para tener una buena lectura'],
    shows: {
      label: 'Curva de flujo',
      patterns: { bell: 'Campana', tower: 'Torre', staccato: 'Entrecortada', interrupted: 'Interrumpida', plateau: 'Plana' },
      texts: {
        bell: 'Una curva suave y redonda. Es una orinada normal: la vejiga aprieta y el músculo de control se relaja.',
        tower: 'Un flujo repentino y muy alto que termina rápido. Muchas veces se ve con una vejiga hiperactiva que aprieta fuerte.',
        staccato: 'Una curva con altibajos. El músculo de control se aprieta y se suelta mientras orina. Es común en la micción disfuncional.',
        interrupted: 'El flujo se detiene y vuelve a empezar en chorros separados. La vejiga aprieta poco, y el niño o la niña puja con la barriga para orinar.',
        plateau: 'Una curva baja y plana. La orina sale despacio todo el tiempo, lo que puede significar un lugar estrecho o un músculo de control apretado.',
      },
      chart: { title: 'Curva de uroflujometría', time: 'Tiempo', flow: 'Velocidad del flujo' },
    },
    steps: [
      'Su hijo o hija toma agua y espera hasta sentir la vejiga llena.',
      'A veces se ponen almohadillas pequeñas adhesivas cerca de las nalgas para revisar el músculo de control. No duelen.',
      'Su hijo o hija orina en un baño o embudo especial, en privado, de la forma más normal posible. Una máquina registra qué tan rápido sale la orina.',
      'Justo después, un ultrasonido rápido de la parte baja de la barriga revisa cuánta orina queda en la vejiga.',
      'Terminaron. La curva y la orina que queda se revisan junto con un diario de vejiga e intestino.',
    ],
  },

  urodynamics: {
    intro:
      'La urodinamia mide la presión dentro de la vejiga mientras se llena y se vacía. Muestra cuánto guarda la vejiga, qué tan elástica es y si la presión sube tanto que puede dañar los riñones. Muchas veces se usa en la vejiga neurogénica, las válvulas de uretra posterior o los escapes de orina difíciles de tratar.',
    facts: ['Dura alrededor de 1 hora', 'Una sonda delgada en la vejiga y un tubo suave y pequeño en el recto; se usa un gel para adormecer', 'Almohadillas adhesivas cerca de las nalgas revisan el músculo de control', 'Por lo general sin sedación, porque su hijo o hija necesita decirnos cómo siente la vejiga y orinar', 'A veces se hace con imágenes de rayos X (videourodinamia)'],
    shows: {
      label: 'Presión de la vejiga al llenarse',
      patterns: { normal: 'Normal', overactive: 'Hiperactiva', stiff: 'Rígida, presión alta' },
      texts: {
        normal: 'La presión se mantiene baja mientras la vejiga se llena, hasta que está llena. La vejiga es elástica y guarda la orina con seguridad.',
        overactive: 'La vejiga aprieta sola mientras se está llenando. Esto puede causar ganas repentinas y escapes.',
        stiff: 'La presión sigue subiendo mientras la vejiga se llena. La presión alta (en la zona roja) puede empujar hacia los riñones y dañarlos con el tiempo, así que se necesita tratamiento para mantener la presión baja.',
      },
      warm: 'Líquido tibio llenando la vejiga',
      chart: { title: 'Presión de la vejiga', volume: 'Cantidad en la vejiga', pressure: 'Presión', high: 'Presión alta: riesgo para los riñones' },
    },
    steps: [
      'Su hijo o hija puede orinar primero, a veces en un baño de uroflujometría.',
      'Se usa un gel para adormecer y se pasa una sonda muy delgada a la vejiga para medir la presión de la vejiga.',
      'Un tubo suave y pequeño se pone justo dentro del recto para medir la presión de la barriga, y se ponen almohadillas adhesivas cerca de las nalgas. No duelen.',
      'Líquido tibio llena despacio la vejiga por la sonda. Su hijo o hija nos dice cuándo siente las primeras ganas de orinar y cuándo se siente lleno.',
      'Cuando está lleno, su hijo o hija orina con los tubos puestos para ver cómo se vacía la vejiga.',
      'Se quitan los tubos y terminaron. Orinar puede arder un poco al principio. Tome líquidos extra y llame si su hijo o hija tiene fiebre.',
    ],
  },

  prep: {
    points: [
      'Explique el estudio con palabras sencillas y honestas uno o dos días antes. No diga que no va a doler si hay una aguja o una sonda.',
      'Traiga un objeto que le dé consuelo, su programa o juego favorito, y un bocadillo para después.',
      'Pregunte si un especialista en vida infantil puede ayudar. Son expertos en ayudar a los niños a sobrellevar estas situaciones.',
      'Por lo general un papá o mamá puede quedarse en el cuarto.',
      'Pregunte al equipo de imágenes sobre las instrucciones de tomar, comer o sedación para el estudio de su hijo o hija.',
      'El ultrasonido y la uroflujometría no usan radiación. El MAG3, el DMSA y el CUGM usan cantidades pequeñas, lo más bajas posible para niños.',
    ],
    callTitle: 'Llámenos después de un estudio si su hijo o hija tiene',
    call: [
      'Fiebre después de un CUGM, una urodinamia u otro estudio con sonda',
      'Ardor al orinar, o sangre en la orina, que dura más de uno o dos días',
      'Enrojecimiento, hinchazón o dolor en el lugar de la vía que empeora',
    ],
    planTitle: 'Estudios que pedimos',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
