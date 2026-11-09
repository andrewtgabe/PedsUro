// Guía "Su visita" para padres, madres y tutores.
export default {
  title: 'Su visita: qué esperar',
  card: {
    title: '¿Primera vez en urología pediátrica? Qué esperar en su visita',
    body: 'Qué pasa durante la visita, qué exámenes podríamos hacer y cómo puede ayudar a que su hijo o hija se sienta cómodo.',
  },
  steps: {
    intro: 'La mayoría de las visitas siguen los mismos cinco pasos. Conocerlos antes le ayuda a usted y a su hijo o hija a sentirse preparados.',
    names: ['Registro', 'Conversación', 'Examen', 'Pruebas', 'Plan'],
    captions: [
      'Registro: medimos el peso, la estatura y a veces la presión arterial. Podemos pedir una muestra de orina, así que pregúntenos si su hijo o hija debe llegar con ganas de orinar.',
      'Conversación: el médico pregunta por los síntomas, los hábitos de orinar y hacer popó, y las pruebas o cirugías anteriores. Su hijo o hija también puede responder.',
      'Examen: un examen corto que explicamos antes de empezar. Un padre, madre o tutor se queda en el cuarto.',
      'Pruebas: algunas pruebas, como el análisis de orina o el escaneo de la vejiga, se pueden hacer el mismo día. Otras se programan para otro día.',
      'Plan: explicamos lo que encontramos y los próximos pasos. Es un buen momento para hacer sus preguntas.',
    ],
    tipTitle: 'Es bueno saber',
    tips: [
      'El médico puede hacerle preguntas directamente a su hijo o hija. Deje que responda primero y luego agregue detalles.',
      'Escriba sus preguntas antes de la visita para no olvidarlas.',
    ],
  },
  labels: { genital: 'Zona genital', belly: 'Barriga', bladder: 'Vejiga', back: 'Espalda baja', dimple: '¿Hoyuelo?', cup: 'Vaso de orina', scan: 'Escaneo de vejiga' },
  exams: {
    intro: 'Los exámenes son rápidos y suaves. Siempre explicamos lo que vamos a hacer antes de tocar, y siempre hay en el cuarto un padre, madre, tutor o acompañante del personal.',
    label: 'Examen',
    options: { genital: 'Examen genital', belly: 'Barriga y espalda', urine: 'Orina y escaneo de vejiga' },
    whatTitle: 'Qué pasa',
    helpTitle: 'Cómo puede ayudar',
    what: {
      genital: [
        'El médico mira y toca con cuidado el pene y los testículos, o la parte de afuera de los labios.',
        'Su hijo o hija puede estar acostado, de pie o sentado con las rodillas hacia afuera como una rana. Esto nos ayuda a encontrar los testículos.',
        'Es un examen solo por fuera y dura uno o dos minutos.',
      ],
      belly: [
        'El médico presiona suavemente la barriga para sentir si la vejiga está llena o si hay popó dura.',
        'Miramos la parte baja de la espalda por si hay un hoyuelo, pelo o una mancha. Pueden ser señales de un problema en la columna.',
        'Podemos ver cómo camina su hijo o hija y revisar las piernas.',
      ],
      urine: [
        'Análisis de orina: su hijo o hija orina en un vaso. A los bebés se les puede poner una bolsita, o usar un tubo delgado para tomar una muestra limpia.',
        'Uroflujometría: su hijo o hija orina en un inodoro especial que mide el chorro. Llegue con la vejiga llena si se lo pedimos.',
        'Escaneo de vejiga: después de orinar, ponemos un gel frío en la parte baja de la barriga y usamos una sonda pequeña para ver cuánta orina queda. No duele.',
      ],
    },
    help: {
      genital: [
        'Siéntese cerca de la cabeza de su hijo o hija y tómele la mano.',
        'Un niño o niña pequeño puede sentarse en sus piernas con las piernas abiertas.',
        'Use palabras tranquilas y sencillas, y los nombres reales de las partes del cuerpo.',
      ],
      belly: [
        'Vista a su hijo o hija con ropa suelta y fácil de quitar.',
        'Ayúdele a relajarse con respiraciones lentas.',
        'Cuéntenos si ha notado cambios al caminar, orinar o hacer popó.',
      ],
      urine: [
        'Traiga una botella de agua para que pueda tomar mientras espera.',
        'Pregunte antes de la visita si su hijo o hija debe aguantar la orina.',
        'Traiga un pañal o ropa de cambio, por si acaso.',
      ],
    },
  },
  help: {
    beforeTitle: 'Antes de la visita',
    before: [
      'Dígale a su hijo o hija que el médico hablará con él o ella y quizás mire su cuerpo. Sea honesto y sencillo.',
      'Recuérdele que usted se quedará a su lado todo el tiempo.',
      'Traiga un juguete, una cobija, un programa o un juego favorito.',
    ],
    bringTitle: 'Qué traer',
    bring: [
      'Una lista de los medicamentos de su hijo o hija',
      'Informes o imágenes de pruebas hechas en otro lugar',
      'Un diario de vejiga o de popó, si se lo pedimos',
      'Su lista de preguntas',
      'Una bebida, un refrigerio y un pañal o ropa de cambio',
    ],
    duringTitle: 'Durante el examen',
    during: [
      'Quédese cerca, tómele la mano y hable en voz baja.',
      'Distráigale con un video o una canción.',
      'Felicite a su hijo o hija por ser valiente, aun por pasos pequeños.',
    ],
    rightsTitle: 'Su hijo o hija tiene el control',
    rights: [
      'Siempre hay un padre, madre, tutor o acompañante del personal en el cuarto durante los exámenes genitales.',
      'Explicamos cada paso antes de tocar.',
      'Su hijo o hija puede decir “alto”. Haremos una pausa y lo intentaremos de nuevo solo cuando esté listo.',
    ],
    rescheduleTitle: 'Si su hijo o hija está muy alterado',
    reschedule:
      'Algunos niños tienen demasiado miedo o estrés para dejarse examinar, y eso está bien. No forzaremos un examen. Un examen a la fuerza es angustiante para su hijo o hija y no nos da buena información. En cambio, por lo general cambiamos la cita para otro día. Practicar en casa y traer objetos que le den consuelo puede ayudar la próxima vez.',
  },
};
