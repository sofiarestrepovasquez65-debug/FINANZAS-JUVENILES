/* ===================================================
   Finanzas juveniles — Banco de contenido
   =================================================== */

const LECCIONES = [
  {
    id: "dinero-que-es",
    icono: "🪙",
    titulo: "¿Qué es el dinero?",
    texto: "El dinero es una herramienta que las personas usan para intercambiar cosas. Antes, la gente cambiaba objetos directamente (por ejemplo, huevos por leche). Eso se llama trueque. El dinero apareció para hacer los intercambios más fáciles: en vez de cargar huevos, cargas monedas o billetes que todos aceptan como pago.",
    ejemplo: "Cuando compras un helado, le das dinero al vendedor en vez de cambiarlo por otra cosa que tengas. El vendedor acepta ese dinero porque sabe que puede usarlo para comprar lo que él necesite.",
    pregunta: {
      enunciado: "¿Para qué sirve principalmente el dinero?",
      opciones: [
        "Para intercambiar bienes y servicios fácilmente",
        "Para decorar la billetera",
        "Solo para guardarlo sin usarlo"
      ],
      correcta: 0
    }
  },
  {
    id: "dinero-como-funciona",
    icono: "🔄",
    titulo: "¿Cómo funciona el dinero?",
    texto: "El dinero circula: pasa de una persona a otra cuando se hacen pagos. Tú recibes dinero (por una mesada, un regalo o un trabajo pequeño) y lo usas para pagar cosas. Ese dinero luego pasa a otras personas, y así sigue circulando en la economía.",
    ejemplo: "Tu abuela te da $10.000. Usas $4.000 para comprar un cuaderno. La papelería usa ese dinero para pagarle a quien le vende el papel. El dinero sigue viajando de mano en mano.",
    pregunta: {
      enunciado: "¿Qué pasa con el dinero después de que lo gastas?",
      opciones: [
        "Desaparece para siempre",
        "Sigue circulando: otra persona lo recibe y lo vuelve a usar",
        "Se queda guardado en la tienda sin usarse nunca"
      ],
      correcta: 1
    }
  },
  {
    id: "ingresos-gastos",
    icono: "📥",
    titulo: "Ingresos y gastos",
    texto: "Un ingreso es todo el dinero que recibes: una mesada, un regalo, dinero por ayudar en casa. Un gasto es todo el dinero que usas para pagar algo. Para manejar bien el dinero necesitas saber cuánto entra (ingresos) y cuánto sale (gastos).",
    ejemplo: "Si recibes $20.000 de mesada (ingreso) y gastas $8.000 en materiales para el colegio (gasto), te quedan $12.000 disponibles.",
    pregunta: {
      enunciado: "Si compras un cuaderno, ¿eso es un ingreso o un gasto?",
      opciones: ["Un ingreso", "Un gasto", "Ninguno de los dos"],
      correcta: 1
    }
  },
  {
    id: "presupuesto-que-es",
    icono: "📋",
    titulo: "¿Qué es un presupuesto?",
    texto: "Un presupuesto es un plan que organiza cuánto dinero tienes y en qué lo vas a usar antes de gastarlo. Sirve para no quedarte sin dinero para lo importante y para tomar decisiones antes de gastar, no después.",
    ejemplo: "Antes de que empiece el mes, decides: '$10.000 para transporte, $5.000 para snacks, $5.000 para ahorrar'. Eso es un presupuesto.",
    pregunta: {
      enunciado: "¿Cuándo se hace un presupuesto?",
      opciones: [
        "Después de gastar todo el dinero",
        "Antes de recibir o gastar el dinero, como un plan",
        "Un presupuesto no tiene relación con el tiempo"
      ],
      correcta: 1
    }
  },
  {
    id: "ahorrar-que-significa",
    icono: "🐷",
    titulo: "¿Qué significa ahorrar?",
    texto: "Ahorrar es guardar una parte del dinero que recibes en vez de gastarlo todo de inmediato. No se trata de dejar de disfrutar, sino de separar un poquito para el futuro, para una meta o para una emergencia.",
    ejemplo: "Si recibes $15.000 y guardas $3.000 en tu alcancía, estás ahorrando el 20% de lo que recibiste.",
    pregunta: {
      enunciado: "Ahorrar significa...",
      opciones: [
        "Gastar todo el dinero rápido",
        "Guardar una parte del dinero para usarla después",
        "Pedir dinero prestado"
      ],
      correcta: 1
    }
  },
  {
    id: "necesidades-deseos",
    icono: "⚖️",
    titulo: "Necesidades vs. deseos",
    texto: "Una necesidad es algo que realmente requieres para vivir o funcionar bien (comida, útiles escolares, ropa básica). Un deseo es algo que te gustaría tener, pero que no es indispensable (un juego nuevo, un dulce, ropa de moda). Ambos son válidos, pero reconocer la diferencia ayuda a decidir en qué gastar primero.",
    ejemplo: "Unos zapatos porque los tuyos ya no sirven son una necesidad. Unos zapatos nuevos solo porque te gusta el color, siendo que los tuyos aún sirven, son un deseo.",
    pregunta: {
      enunciado: "¿Cuál de estas es normalmente una necesidad?",
      opciones: [
        "Comprar un videojuego nuevo",
        "Comprar útiles escolares que se te acabaron",
        "Comprar una figura de colección"
      ],
      correcta: 1
    }
  },
  {
    id: "gastos-necesarios-innecesarios",
    icono: "🧾",
    titulo: "Gastos necesarios e innecesarios",
    texto: "Un gasto necesario cubre algo esencial para ti en ese momento. Un gasto innecesario es uno que podrías evitar sin que te afecte realmente. No todos los gastos innecesarios son 'malos', pero deben planearse para que no afecten tus metas de ahorro.",
    ejemplo: "Pagar el pasaje del bus para ir al colegio es un gasto necesario. Comprar dulces todos los días puede ser un gasto innecesario si no lo habías planeado.",
    pregunta: {
      enunciado: "Un gasto innecesario es aquel que...",
      opciones: [
        "No puedes evitar de ninguna forma",
        "Podrías evitar sin que te afecte realmente",
        "Siempre es indispensable"
      ],
      correcta: 1
    }
  },
  {
    id: "metas-financieras",
    icono: "🎯",
    titulo: "Metas financieras",
    texto: "Una meta financiera es algo que quieres lograr con tu dinero, como comprar algo especial o juntar una cantidad para una emergencia. Poner una meta clara (qué quieres, cuánto cuesta y para cuándo) te ayuda a ahorrar con más motivación.",
    ejemplo: "Meta: comprar unos audífonos de $60.000 en 3 meses. Eso significa ahorrar $20.000 cada mes.",
    pregunta: {
      enunciado: "¿Qué necesita tener una buena meta financiera?",
      opciones: [
        "Solo un nombre, sin cantidad ni plazo",
        "Un objetivo claro, una cantidad de dinero y un plazo",
        "No necesita ninguna planeación"
      ],
      correcta: 1
    }
  },
  {
    id: "invertir-que-es",
    icono: "🌱",
    titulo: "¿Qué es invertir?",
    texto: "Invertir es usar dinero con la idea de que, con el tiempo, se convierta en más dinero. Por ejemplo, poner dinero en un negocio o en una cuenta especial que genera ganancias. A diferencia de ahorrar, invertir busca hacer crecer el dinero, aunque también tiene riesgos.",
    ejemplo: "Si una persona compra materiales por $10.000 para hacer pulseras y las vende por $18.000, invirtió dinero para generar una ganancia de $8.000.",
    pregunta: {
      enunciado: "¿Cuál es la idea principal de invertir?",
      opciones: [
        "Guardar el dinero sin moverlo",
        "Usar el dinero buscando que crezca con el tiempo",
        "Gastar el dinero en cosas que no necesitas"
      ],
      correcta: 1
    }
  },
  {
    id: "ahorrar-vs-invertir",
    icono: "🔀",
    titulo: "Diferencia entre ahorrar e invertir",
    texto: "Ahorrar es guardar dinero de forma segura para usarlo después. Invertir es poner ese dinero a trabajar para que crezca, aceptando que existe algo de riesgo. Ahorrar es como poner el dinero en una caja fuerte; invertir es como plantar una semilla que puede crecer, pero también necesita cuidado.",
    ejemplo: "Ahorras $50.000 en una alcancía (seguro, no crece). Si en cambio compras materiales para vender manualidades, estás invirtiendo (puede crecer, pero también puedes no vender todo).",
    pregunta: {
      enunciado: "¿Qué opción describe mejor 'invertir'?",
      opciones: [
        "Guardar el dinero sin ningún riesgo ni crecimiento",
        "Poner el dinero a trabajar, buscando que crezca, con algo de riesgo",
        "Es exactamente lo mismo que ahorrar"
      ],
      correcta: 1
    }
  },
  {
    id: "riesgo-rendimiento",
    icono: "📈",
    titulo: "Riesgo y rendimiento",
    texto: "El rendimiento es la ganancia que puede darte una inversión. El riesgo es la posibilidad de que las cosas no salgan como esperabas y pierdas parte del dinero. Generalmente, entre más rendimiento promete algo, más riesgo suele tener. Por eso es importante pensar bien antes de invertir.",
    ejemplo: "Prestarle dinero a un amigo muy responsable tiene bajo riesgo. Invertir todos tus ahorros en un negocio nuevo y desconocido tiene más riesgo, aunque también podría dar más ganancia.",
    pregunta: {
      enunciado: "En general, ¿qué relación existe entre riesgo y rendimiento?",
      opciones: [
        "No tienen ninguna relación",
        "A mayor rendimiento posible, generalmente hay mayor riesgo",
        "El riesgo siempre es igual a cero"
      ],
      correcta: 1
    }
  },
  {
    id: "intereses-que-son",
    icono: "💹",
    titulo: "¿Qué son los intereses?",
    texto: "El interés es una cantidad extra de dinero que se paga por usar dinero prestado, o que se recibe por dejar tu dinero guardado en algún lugar que te lo hace crecer. Es como un 'premio' o un 'costo' asociado al tiempo que el dinero está en uso.",
    ejemplo: "Si guardas $100.000 en una cuenta que da 5% de interés al año, después de un año tendrás $105.000, porque ganaste $5.000 de interés.",
    pregunta: {
      enunciado: "El interés es...",
      opciones: [
        "Dinero extra que se gana o se paga por el uso del dinero en el tiempo",
        "El nombre de una moneda",
        "Un tipo de gasto innecesario"
      ],
      correcta: 0
    }
  },
  {
    id: "interes-compuesto",
    icono: "🌀",
    titulo: "¿Qué es el interés compuesto?",
    texto: "El interés compuesto ocurre cuando los intereses que ganas se suman a tu dinero, y luego también generan más intereses. Es como una bola de nieve que crece más rápido con el tiempo, porque cada vez ganas intereses sobre una cantidad más grande.",
    ejemplo: "Con $100.000 y 10% de interés anual: el primer año ganas $10.000 (tienes $110.000). El segundo año ganas 10% sobre $110.000, es decir $11.000 (tienes $121.000), y así sigue creciendo cada vez más rápido.",
    pregunta: {
      enunciado: "¿Qué hace especial al interés compuesto?",
      opciones: [
        "Los intereses ganados también generan más intereses",
        "Es un interés que nunca cambia",
        "Solo se aplica a los gastos, no al ahorro"
      ],
      correcta: 0
    }
  },
  {
    id: "deuda-que-es",
    icono: "📄",
    titulo: "¿Qué es una deuda?",
    texto: "Una deuda es dinero que debes porque alguien te lo prestó, con el compromiso de devolverlo, a veces con intereses. Las deudas no son necesariamente malas, pero deben manejarse con cuidado, porque si no se pagan a tiempo pueden generar problemas y más costos.",
    ejemplo: "Si un amigo te presta $5.000 para completar una compra y le prometes devolvérselo la próxima semana, tienes una deuda de $5.000 con él.",
    pregunta: {
      enunciado: "Una deuda es...",
      opciones: [
        "Dinero que te regalaron y no debes devolver",
        "Dinero que debes devolver a quien te lo prestó",
        "Dinero que ahorraste"
      ],
      correcta: 1
    }
  },
  {
    id: "economia-basica",
    icono: "🌍",
    titulo: "Conceptos básicos de la economía",
    texto: "La economía estudia cómo las personas producen, intercambian y usan bienes y servicios. Dos ideas clave son la oferta (cuánto de algo hay disponible) y la demanda (cuánto quiere la gente ese algo). Cuando algo es escaso y muy deseado, suele costar más.",
    ejemplo: "Si un juguete nuevo es muy popular pero hay pocas unidades (alta demanda, baja oferta), es común que su precio suba o que sea difícil de conseguir.",
    pregunta: {
      enunciado: "Si algo es muy deseado pero hay poca cantidad disponible, ¿qué suele pasar con su precio?",
      opciones: ["Suele bajar", "Suele subir", "Siempre queda igual"],
      correcta: 1
    }
  }
];

const QUIZ_BANCO = [
  { pregunta: "¿Qué es un presupuesto?", opciones: ["Un plan para organizar ingresos y gastos", "Un tipo de moneda", "Un préstamo bancario"], correcta: 0, explicacion: "El presupuesto es un plan que organiza cuánto dinero entra y en qué se va a usar." },
  { pregunta: "¿Cuál es un ejemplo de necesidad?", opciones: ["Un juguete de colección", "Útiles escolares", "Un juego nuevo"], correcta: 1, explicacion: "Los útiles escolares son indispensables para estudiar, por eso son una necesidad." },
  { pregunta: "Ahorrar significa...", opciones: ["Gastar todo de inmediato", "Guardar una parte del dinero para después", "Pedir dinero prestado"], correcta: 1, explicacion: "Ahorrar es separar una parte del dinero para usarla en el futuro." },
  { pregunta: "¿Qué busca principalmente invertir?", opciones: ["Que el dinero crezca con el tiempo", "Perder dinero a propósito", "Guardar el dinero sin moverlo"], correcta: 0, explicacion: "Invertir busca hacer crecer el dinero, aceptando cierto riesgo." },
  { pregunta: "El interés compuesto es especial porque...", opciones: ["Nunca cambia de valor", "Los intereses generan más intereses", "Solo aplica una vez"], correcta: 1, explicacion: "En el interés compuesto, lo que ganas también empieza a generar ganancias." },
  { pregunta: "Una deuda es...", opciones: ["Dinero regalado", "Dinero que debes devolver", "Dinero ahorrado"], correcta: 1, explicacion: "La deuda es dinero prestado que debes devolver, a veces con intereses." },
  { pregunta: "¿Qué relación existe generalmente entre riesgo y rendimiento?", opciones: ["Ninguna relación", "A mayor rendimiento posible, mayor riesgo", "El riesgo siempre es cero"], correcta: 1, explicacion: "Las inversiones con mayor ganancia posible suelen tener mayor riesgo." },
  { pregunta: "Un gasto innecesario es aquel que...", opciones: ["No se puede evitar nunca", "Se podría evitar sin afectarte realmente", "Siempre es indispensable"], correcta: 1, explicacion: "Los gastos innecesarios se pueden evitar o posponer sin que te afecten de verdad." },
  { pregunta: "¿Qué necesita una buena meta financiera?", opciones: ["Objetivo claro, cantidad y plazo", "Nada en especial", "Solo un nombre bonito"], correcta: 0, explicacion: "Una meta clara define qué quieres, cuánto cuesta y en cuánto tiempo lo lograrás." },
  { pregunta: "El dinero sirve principalmente para...", opciones: ["Decorar la billetera", "Intercambiar bienes y servicios", "No usarse nunca"], correcta: 1, explicacion: "El dinero facilita el intercambio de bienes y servicios entre personas." },
  { pregunta: "¿Qué es un ingreso?", opciones: ["Dinero que recibes", "Dinero que gastas", "Dinero que pierdes"], correcta: 0, explicacion: "Un ingreso es todo el dinero que entra a tus manos, como una mesada o un regalo." },
  { pregunta: "Si algo es muy deseado pero escasea, su precio suele...", opciones: ["Bajar", "Subir", "No cambiar"], correcta: 1, explicacion: "La alta demanda combinada con baja oferta suele hacer subir los precios." }
];

const RETOS = [
  { id: "reto-ahorro", icono: "💰", titulo: "Reto de ahorro", descripcion: "Guarda una cantidad de dinero esta semana, aunque sea pequeña, y anótala en tu alcancía imaginaria.", puntos: 20 },
  { id: "reto-necesidad-deseo", icono: "🔍", titulo: "Identifica necesidades y deseos", descripcion: "Haz una lista de 3 necesidades y 3 deseos que tengas actualmente.", puntos: 15 },
  { id: "reto-presupuesto", icono: "📋", titulo: "Organiza un presupuesto", descripcion: "Usa la herramienta 'Mi Presupuesto' con tus datos reales o inventados y guarda el resultado.", puntos: 20 },
  { id: "reto-gasto-innecesario", icono: "🚫", titulo: "Controla un gasto innecesario", descripcion: "Elige un gasto innecesario que sueles hacer y evita hacerlo durante 3 días.", puntos: 15 },
  { id: "reto-meta", icono: "🎯", titulo: "Crea tu primera meta", descripcion: "Usa la herramienta 'Mis Metas' para crear una meta de ahorro con nombre, cantidad y plazo.", puntos: 15 },
  { id: "reto-quiz", icono: "🧠", titulo: "Aprueba el Quiz Financiero", descripcion: "Responde el quiz y obtén al menos 70% de respuestas correctas.", puntos: 15 }
];

/* Base de conocimiento del asesor: cada entrada tiene palabras clave y una respuesta educativa */
const ASESOR_BASE = [
  {
    claves: ["ahorrar", "ahorro", "guardar dinero"],
    respuesta: "Ahorrar es guardar una parte de tu dinero en vez de gastarlo todo. Un buen truco es, apenas recibas dinero, separar primero la parte que quieres ahorrar y luego pensar en el resto. Puedes probar la herramienta 'Mis Metas' para ponerte un objetivo concreto de ahorro. 🐷"
  },
  {
    claves: ["presupuesto", "organizar mis gastos", "organizar dinero"],
    respuesta: "Un presupuesto es un plan de cuánto dinero tienes y en qué lo vas a usar. Anota tus ingresos, luego tus gastos necesarios, luego cuánto quieres ahorrar, y lo que sobra es para tus deseos. Puedes hacerlo ahora mismo en la sección 'Mi Presupuesto'. 📋"
  },
  {
    claves: ["meta", "metas", "objetivo de ahorro"],
    respuesta: "Para crear una meta necesitas tres cosas: qué quieres lograr, cuánto dinero necesitas y cuánto tiempo te vas a dar. Ve a la sección 'Mis Metas', escribe tu meta y verás una barra de progreso que se actualiza cada vez que ahorras más. 🎯"
  },
  {
    claves: ["invertir", "inversion", "inversión"],
    respuesta: "Invertir es usar el dinero buscando que crezca con el tiempo, aunque siempre existe algo de riesgo. Es distinto de ahorrar, que es simplemente guardar el dinero de forma segura. Aquí no manejamos dinero real ni damos consejos de inversión real: esto es solo para aprender el concepto. 🌱"
  },
  {
    claves: ["interes", "interés", "intereses"],
    respuesta: "El interés es dinero extra que se gana o se paga por el uso del dinero durante un tiempo. Si guardas dinero en un lugar que da interés, con el tiempo tendrás un poco más. Si pides dinero prestado, normalmente devuelves un poco más de lo que te prestaron. 💹"
  },
  {
    claves: ["interes compuesto", "interés compuesto"],
    respuesta: "El interés compuesto pasa cuando los intereses que ganas se suman a tu dinero, y ese nuevo total también empieza a generar más intereses. Por eso crece cada vez más rápido, como una bola de nieve rodando cuesta abajo. ⛄"
  },
  {
    claves: ["deuda", "debo dinero", "prestamo", "préstamo"],
    respuesta: "Una deuda es dinero que debes devolver porque alguien te lo prestó. No es algo malo si se maneja con cuidado, pero es importante devolverlo a tiempo y no pedir prestado más de lo que puedes pagar. 📄"
  },
  {
    claves: ["necesidad", "necesidades", "deseo", "deseos"],
    respuesta: "Una necesidad es algo indispensable, como comida o útiles escolares. Un deseo es algo que te gustaría tener, pero no es indispensable, como un juguete nuevo. Antes de gastar, pregúntate: ¿esto es algo que necesito o algo que quiero? ⚖️"
  },
  {
    claves: ["gasto", "gastos", "gastar"],
    respuesta: "Un gasto es todo el dinero que usas para pagar algo. Es útil dividir tus gastos en necesarios (los indispensables) e innecesarios (los que podrías evitar), para saber en qué se va tu dinero. 🧾"
  },
  {
    claves: ["dinero", "que es el dinero", "qué es el dinero"],
    respuesta: "El dinero es una herramienta que usamos para intercambiar bienes y servicios de forma fácil, en vez de tener que cambiar objetos directamente como se hacía antes con el trueque. 🪙"
  },
  {
    claves: ["riesgo", "rendimiento"],
    respuesta: "El rendimiento es la ganancia que algo puede darte, y el riesgo es la posibilidad de que no salga como esperabas. Generalmente, entre más ganancia promete algo, más riesgo suele tener. Por eso siempre hay que pensar bien antes de decidir. 📈"
  },
  {
    claves: ["hola", "buenas", "hey"],
    respuesta: "¡Hola! Soy tu asesor financiero educativo. 👋 Puedes preguntarme cosas como '¿cómo hago un presupuesto?', '¿qué es invertir?' o 'quiero aprender a ahorrar'. ¿Sobre qué tema quieres aprender hoy?"
  }
];

const ASESOR_RESPUESTA_DEFECTO = "Todavía estoy aprendiendo sobre ese tema. 🤔 Puedes preguntarme sobre ahorro, presupuesto, metas, necesidades y deseos, inversión, intereses o deudas. Recuerda que nunca voy a pedirte contraseñas, datos bancarios ni información personal, porque mi función es solo educativa.";
