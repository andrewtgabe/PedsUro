// Reflujo vesicoureteral (RVU) — textos del capítulo en español.
export default {
  title: 'Reflujo vesicoureteral (RVU)',
  short: 'RVU',

  embryology: {
    intro:
      'Al principio del embarazo, una pequeña rama llamada yema ureteral crece de un tubo cerca de la futura vejiga. Esa yema se convierte en el uréter y en el sistema de drenaje del riñón. El lugar donde empieza la yema decide dónde se unirá el uréter a la vejiga.',
    stepLabel: 'Etapa',
    steps: [
      {
        name: 'Semana 5',
        title: 'Brota la yema ureteral',
        text: 'Una yema crece del conducto mesonéfrico (de Wolff) y se extiende hacia un grupo de tejido que se convertirá en el riñón.',
      },
      {
        name: 'Semanas 5–7',
        title: 'Empieza a formarse el riñón',
        text: 'La yema se ramifica una y otra vez para formar el sistema de drenaje del riñón. El tejido a su alrededor se convierte en la parte del riñón que filtra.',
      },
      {
        name: 'Semanas 7–8',
        title: 'El uréter se une a la vejiga',
        text: 'La base de la yema se absorbe en la pared de la vejiga. El uréter obtiene su propia abertura, que se mueve hacia arriba y hacia afuera, mientras el conducto baja.',
      },
    ],
    posLabel: 'Dónde empieza la yema',
    positions: {
      normal: 'Lugar típico',
      low: 'Más cerca de la vejiga',
      high: 'Más lejos de la vejiga',
    },
    results: {
      normal: {
        title: 'Resultado típico',
        text: 'El uréter se abre en la esquina del trígono y pasa por un túnel largo en la pared de la vejiga. Cuando la vejiga aprieta, el túnel se cierra como una válvula de un solo sentido.',
      },
      low: {
        title: 'Resultado: reflujo',
        text: 'La yema se absorbe temprano, así que la abertura queda más arriba y hacia el lado. El túnel en la pared de la vejiga es corto, así que la válvula puede no cerrarse y la orina puede regresar. Esto es el RVU primario.',
      },
      high: {
        title: 'Resultado: otro problema',
        text: 'La abertura queda demasiado abajo, cerca del cuello de la vejiga o más allá. Esto es un uréter ectópico, que puede causar obstrucción o escape de orina en lugar de reflujo. Tiene su propio capítulo.',
      },
    },
    panelEmbryo: 'Bebé en desarrollo',
    panelBirth: 'Al nacer: dentro de la vejiga',
    labelDuct: 'Conducto de Wolff',
    labelBud: 'Yema ureteral',
    labelBlastema: 'Futuro tejido del riñón',
    labelKidney: 'Riñón',
    labelSinus: 'Futura vejiga',
    labelTrigone: 'Trígono',
    labelNeck: 'Cuello de la vejiga',
    labelTunnel: 'Largo del túnel',
    tunnelLong: 'Largo',
    tunnelShort: 'Corto',
    note: 'El RVU muchas veces es de familia. Los hermanos y hermanas de un niño o niña con RVU tienen más probabilidad de tenerlo también.',
  },

  pathology: {
    intro:
      'Normalmente la orina va en un solo sentido: de los riñones, por los uréteres, a la vejiga. En el RVU, algo de orina regresa hacia el riñón, por lo general cuando la vejiga aprieta para orinar.',
    gradeLabel: 'Grado',
    play: 'Verlo pasar',
    infection: 'Bacterias en la vejiga',
    scarring: 'Cicatrices en el riñón',
    healthySide: 'Lado típico',
    refluxSide: 'Lado con reflujo',
    vcugNote:
      'El grado se mide con un CUGM, una radiografía en la que se llena la vejiga con tinte por un tubo pequeño. Muestra qué tan arriba regresa la orina.',
    grades: [
      { title: 'Sin reflujo', text: 'La orina solo baja. La válvula donde el uréter entra a la vejiga se mantiene cerrada.' },
      { title: 'Grado I', text: 'La orina sube por parte del uréter pero no llega al riñón.' },
      { title: 'Grado II', text: 'La orina llega al riñón, pero nada está estirado ni ensanchado.' },
      { title: 'Grado III', text: 'La orina llega al riñón, y el uréter y la zona de drenaje del riñón están un poco ensanchados.' },
      { title: 'Grado IV', text: 'La orina llega al riñón con ensanchamiento moderado. El uréter empieza a doblarse y torcerse.' },
      { title: 'Grado V', text: 'La orina llega al riñón con ensanchamiento grave y un uréter muy torcido.' },
    ],
    whyMatters: 'Por qué importa',
    infectionText:
      'El reflujo por sí solo no duele y no causa infección. Pero si entran bacterias a la vejiga, el reflujo puede llevarlas hasta el riñón. Una infección del riñón (pielonefritis) causa fiebre y puede dejar cicatrices.',
    scarText:
      'Las infecciones repetidas del riñón pueden dejar cicatrices en parte del riñón. Las cicatrices no sanan, y muchas cicatrices pueden causar presión alta o un riñón más débil más adelante. Prevenir las infecciones del riñón es la meta principal del tratamiento.',
  },

  treatment: {
    intro:
      'No hay una sola opción correcta. El tratamiento depende del grado, la edad, las infecciones que ha tenido, los estudios del riñón y las preferencias de su familia. Muchos niños usan más de una opción.',
    squeeze: 'La vejiga aprieta',
    relax: 'La vejiga se relaja',
    pros: 'Beneficios',
    cons: 'A tomar en cuenta',
    valveClosed: 'Válvula cerrada',
    valveOpen: 'La orina regresa',
    labelMuscle: 'Músculo de la vejiga',
    labelInside: 'Dentro de la vejiga',
    labelFromKidney: 'Desde el riñón',
    labelTunnel: 'Túnel',
    options: {
      habits: {
        name: 'Hábitos sanos de vejiga e intestino',
        summary:
          'Aguantar la orina y el estreñimiento suben la presión dentro de la vejiga. La presión alta puede abrir una válvula que de otra forma aguantaría, y hace más probables las infecciones.',
        control: 'Presión en la vejiga',
        low: 'Relajado, orinar con regularidad',
        high: 'Aguantar la orina / estreñimiento',
        pros: ['Ayuda a todo niño o niña con RVU', 'Baja el riesgo de infección', 'Ayuda a que el reflujo se quite y a que otros tratamientos funcionen'],
        cons: ['Requiere rutina diaria y paciencia', 'Puede necesitar un ablandador de heces'],
        tips: ['Orinar cada 2–3 horas mientras está despierto', 'Evacuar blando todos los días', 'Tomar agua durante el día', 'Relajarse por completo al orinar'],
      },
      observation: {
        name: 'Vigilancia',
        summary:
          'Conforme los niños crecen, el túnel en la pared de la vejiga se alarga. Muchos niños, sobre todo con grados más bajos, superan el reflujo por sí solos.',
        control: 'Edad del niño o niña',
        ageUnit: 'años',
        pros: ['Sin procedimiento', 'Los grados bajos muchas veces se quitan con el tiempo'],
        cons: ['Todavía pueden ocurrir infecciones', 'Necesita estudios de seguimiento', 'Es menos probable que los grados altos se quiten'],
      },
      antibiotic: {
        name: 'Antibiótico preventivo',
        summary:
          'Una dosis pequeña de antibiótico cada día evita que crezcan bacterias en la orina. No corrige el reflujo, pero baja la probabilidad de que orina infectada llegue al riñón.',
        bacteria: 'Entran bacterias a la vejiga',
        dose: 'Antibiótico diario en dosis baja',
        pros: ['Sin procedimiento', 'Baja la probabilidad de infección del riñón'],
        cons: ['Un medicamento todos los días', 'Algunas bacterias se vuelven resistentes', 'Todavía pueden ocurrir infecciones'],
      },
      injection: {
        name: 'Inyección endoscópica',
        summary:
          'Con una cámara pequeña que pasa por la uretra, se inyecta un gel justo debajo de la abertura del uréter. El bulto ayuda a que la válvula se cierre.',
        action: 'Inyectar gel',
        undo: 'Antes de la inyección',
        pros: ['Sin cortes en la piel', 'Por lo general se va a casa el mismo día', 'Recuperación rápida'],
        cons: ['Anestesia general', 'Menos éxito en grados altos', 'A veces necesita una segunda inyección'],
      },
      reimplant: {
        name: 'Cirugía de reimplante ureteral',
        summary:
          'El cirujano hace un túnel nuevo y más largo para el uréter en la pared de la vejiga, para que la válvula cierre como debe. Puede hacerse por una pequeña herida en la parte baja de la barriga o con cirugía robótica.',
        approachLabel: 'Método',
        approaches: { extra: 'Por fuera de la vejiga', intra: 'Por dentro de la vejiga' },
        extraSteps: [
          'Por una pequeña herida en la parte baja de la barriga, o con cirugía robótica, el cirujano llega a la parte de afuera de la vejiga donde entra el uréter.',
          'Se abre el músculo de la vejiga en una línea arriba de donde entra el uréter, hasta el revestimiento interno delgado. La vejiga en sí no se abre.',
          'El uréter se acomoda en este surco contra el revestimiento, así que ahora recorre un camino mucho más largo dentro de la pared de la vejiga.',
          'Se cierra el músculo sobre el uréter con puntos, formando un túnel largo.',
          'Cuando la vejiga aprieta, el túnel largo se cierra, así que la orina ya no regresa.',
          'Una sonda por lo general drena la vejiga por alrededor de un día. Los espasmos de la vejiga son comunes por un tiempo corto, y la mayoría de los niños se van a casa en 1–2 días.',
        ],
        intraSteps: [
          'Por una pequeña herida en la parte baja de la barriga, el cirujano abre la vejiga para trabajar desde adentro.',
          'Se libera el uréter donde entra a la vejiga y se jala con cuidado hacia adentro.',
          'Se hace un túnel nuevo y más largo debajo del revestimiento de la vejiga, muchas veces hacia el otro lado de la vejiga.',
          'El uréter se pasa por el túnel, y su abertura se cose en su nuevo lugar.',
          'Cuando la vejiga aprieta, el túnel largo se cierra, así que la orina ya no regresa.',
          'Una sonda drena la vejiga por unos días. Los espasmos de la vejiga son comunes por un tiempo corto, y por lo general los niños se quedan unos días en el hospital.',
        ],
        pros: ['La tasa de éxito más alta', 'Funciona en grados altos'],
        cons: ['Cirugía con anestesia general', 'Muchas veces una estancia corta en el hospital', 'Espasmos de la vejiga por un tiempo corto después'],
      },
    },
  },

  takeaways: {
    points: [
      'RVU significa que la orina regresa de la vejiga hacia el riñón.',
      'Por lo general empieza antes de nacer y muchas veces es de familia.',
      'El reflujo por sí solo no duele. La preocupación son las infecciones del riñón, que pueden dejar cicatrices.',
      'Muchos niños, sobre todo con grados más bajos, superan el RVU.',
      'Buenos hábitos para orinar y evacuar ayudan a todo niño o niña con RVU.',
      'Las opciones incluyen vigilar, un antibiótico preventivo, una inyección o cirugía.',
    ],
    callTitle: 'Llámenos o busque atención si su hijo o hija tiene',
    call: [
      'Fiebre de 101°F (38.3°C) o más sin una causa clara como un resfriado',
      'Bebés menores de 3 meses: cualquier fiebre de 100.4°F (38.0°C) o más',
      'Dolor o ardor al orinar, o dolor de barriga, de costado o de espalda',
      'En bebés: fiebre, irritabilidad, poca alimentación o vómito',
    ],
    planTitle: 'Nuestro plan',
    planHint: 'Escriba notas aquí antes de imprimir (no se guardan).',
  },
};
