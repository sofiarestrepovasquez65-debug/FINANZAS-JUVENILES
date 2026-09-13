/* ===================================================
   Finanzas juveniles — Gastos Inteligentes
   =================================================== */

const EJEMPLOS_COMPRA = [
  "Me quiero comprar unos audífonos de $80.000",
  "Quiero comprar un videojuego por $60.000",
  "Necesito una ropa nueva y cuesta $70.000",
  "Me gustaría comprar comida para el fin de semana por $35.000",
  "Quiero comprar accesorios de $25.000",
  "Necesito útiles escolares por $45.000"
];

const OPCIONES_DECISION = [
  {
    id: "comprar-ahora",
    label: "🛒 Comprar ahora",
    descripcion: "La compra se hace de inmediato, sin revisar antes el impacto que tendrá en el presupuesto."
  },
  {
    id: "ahorrar-primero",
    label: "🐷 Ahorrar primero",
    descripcion: "Se separa dinero para la compra y se protege el ahorro o las metas futuras."
  },
  {
    id: "buscar-alternativa",
    label: "🔎 Buscar otra opción",
    descripcion: "Se compara precios, se busca otra opción o se espera una promoción."
  },
  {
    id: "esperar",
    label: "⏳ Esperar",
    descripcion: "Se toma un tiempo para pensar si realmente lo necesitas antes de gastar."
  }
];

function formatearMoneda(valor) {
  if (valor === null || Number.isNaN(valor)) return "$0";
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(valor);
}

function normalizarNumero(valor) {
  return Number(String(valor).replace(/\./g, "").replace(/,/g, "").replace(/\$/g, "").replace(/[^0-9.-]/g, ""));
}

function obtenerPrecio(texto) {
  const coincidencias = [...texto.matchAll(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?/g)];
  if (!coincidencias.length) return 0;
  return normalizarNumero(coincidencias[0][0]);
}

function obtenerDisponible(texto) {
  const patronDisponible = /(?:tengo|tengo disponible|me quedan|disponible|actualmente|cuenta con|ahora tengo|tengo ahorrado|saldo)(?:[^0-9]*?)(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?)/i;
  const matchDisponible = texto.match(patronDisponible);
  if (matchDisponible) return normalizarNumero(matchDisponible[1]);

  const coincidencias = [...texto.matchAll(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?/g)];
  if (coincidencias.length > 1) {
    return normalizarNumero(coincidencias[1][0]);
  }

  return null;
}

function extraerProducto(texto) {
  const textoLimpio = texto
    .replace(/\$/g, " ")
    .replace(/\b(?:me quiero comprar|quiero comprar|me gustaría comprar|quiero|comprar|compra|me compraria|comprarme)\b/gi, " ")
    .replace(/\b(?:unos?|unas?|un|una)\b/gi, " ")
    .replace(/\b(?:de|por|y|tengo|disponible|actualmente|ahora|mi|mis|para|con)\b/gi, " ")
    .replace(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?/g, " ")
    .replace(/[^\wáéíóúüñ\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!textoLimpio) return "producto";
  return textoLimpio.charAt(0).toUpperCase() + textoLimpio.slice(1);
}

function clasificarCompra(producto) {
  const texto = producto.toLowerCase();
  const necesidades = ["útiles", "cuaderno", "mochila", "comida", "ropa", "medicina", "zapatos", "transporte", "servicio", "celular", "pantalon", "saco"];
  const deseos = ["videojuego", "audífonos", "reloj", "accesorios", "juguete", "pelota", "scooter", "camiseta", "chaqueta", "cosmeticos"];

  if (necesidades.some((palabra) => texto.includes(palabra))) return { tipo: "Necesidad", detalle: "Puede ser una necesidad si te ayuda a cubrir algo importante en tu día a día." };
  if (deseos.some((palabra) => texto.includes(palabra))) return { tipo: "Deseo", detalle: "Parece más un deseo que una necesidad, por eso vale la pena pensar si puedes esperar." };

  return { tipo: "Deseo o compra impulsiva", detalle: "No siempre es fácil distinguir entre necesidad y deseo; revisa si te aporta algo real a largo plazo." };
}

function generarImpacto(precio, disponible) {
  if (disponible === null || disponible === 0) {
    return {
      texto: "Todavía no hay suficiente información sobre tu dinero disponible. Revisa tus ingresos y gastos antes de decidir.",
      valor: null
    };
  }

  const restante = disponible - precio;
  if (restante >= 0) {
    return {
      texto: `Si compras ahora, te quedarían ${formatearMoneda(restante)} disponibles. Antes de decidir, revisa si ese saldo sigue cubriendo tus necesidades y ahorro.`,
      valor: restante
    };
  }

  const faltante = Math.abs(restante);
  return {
    texto: `Si compras ahora, te faltarían ${formatearMoneda(faltante)} para cubrir el gasto sin afectar tus otras prioridades. Eso puede poner presión a tu presupuesto.`,
    valor: restante
  };
}

function generarConsecuencia(opcion, precio, disponible, categoria) {
  const base = categoria.tipo;
  switch (opcion.id) {
    case "comprar-ahora":
      return `Comprar ahora puede darte alegría rápida, pero también puede reducir el dinero que necesitas para tus gastos esenciales o para tus metas. Si compras sin revisar el saldo, es más fácil que el gasto se vuelva impulsivo.`;
    case "ahorrar-primero":
      return `Ahorrar primero ayuda a separar una parte del dinero para la compra sin dejar de cuidar tus metas. Esa estrategia te enseña a ahorrar con intención y a disfrutar compras más planificadas.`;
    case "buscar-alternativa":
      return `Buscar otra opción puede ayudarte a encontrar una alternativa más económica o esperar una oferta. Eso te permite comprar con menos presión y más criterio.`;
    case "esperar":
      return `Esperar da tiempo para pensar si realmente necesitas ese producto. Muchas veces la emoción de comprar pasa, y entonces puedes decidir con más calma.`;
    default:
      return `La mejor decisión suele ser la que te permite cuidar tus necesidades, tu ahorro y tu tranquilidad.`;
  }
}

function analizarCompra(texto) {
  const producto = extraerProducto(texto);
  const precio = obtenerPrecio(texto) || 0;
  const disponible = obtenerDisponible(texto);
  const categoria = clasificarCompra(producto);
  const impacto = generarImpacto(precio, disponible);

  return {
    textoOriginal: texto,
    producto,
    precio,
    disponible,
    categoria,
    impacto,
    opciones: OPCIONES_DECISION.map((opcion) => ({
      ...opcion,
      detalle: generarConsecuencia(opcion, precio, disponible, categoria)
    })),
    consejo: precio > 0 && disponible !== null && disponible >= precio
      ? "Tienes dinero suficiente para comprar, pero antes revisa si ese gasto deja margen para tus necesidades, ahorro y metas."
      : "Antes de gastar, piensa si la compra es un deseo o una necesidad y si no te afecta tus prioridades."
  };
}

function renderizarEscenario() {
  const contenedor = document.getElementById("contenedor-escenario");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="chat-simulador">
      <div class="mensaje-asistente">
        <div class="burbuja-asistente">
          <strong>🛒 Gastos Inteligentes</strong><br>
          Cuéntanos qué quieres comprar y te ayudaremos a pensar antes de gastar.
        </div>
      </div>

      <div class="panel-entrada">
        <label class="label-entrada" for="input-compra">¿Qué quieres comprar?</label>
        <input id="input-compra" type="text" placeholder="Ejemplo: Me quiero comprar unos audífonos de $80.000" value="" />
        <button class="btn btn-primario" id="btn-analizar-compra">Analizar mi compra</button>
      </div>

      <div class="chips-ejemplos">
        ${EJEMPLOS_COMPRA.map((ejemplo) => `<button class="chip-ejemplo" data-ejemplo="${ejemplo}">${ejemplo}</button>`).join("")}
      </div>
    </div>

    <div id="resultado-compra" class="resultado-compra"></div>
  `;
}

function renderizarAnalisis(analisis) {
  const contenedorResultado = document.getElementById("resultado-compra");
  if (!contenedorResultado) return;

  const dineroRestante = analisis.disponible !== null ? analisis.disponible - analisis.precio : null;

  contenedorResultado.innerHTML = `
    <div class="tarjeta-analisis">
      <h3>💰 Análisis de la compra</h3>
      <div class="fila-analisis">
        <span>Producto</span>
        <strong>${analisis.producto}</strong>
      </div>
      <div class="fila-analisis">
        <span>Precio</span>
        <strong>${formatearMoneda(analisis.precio)}</strong>
      </div>
      <div class="fila-analisis">
        <span>Dinero disponible</span>
        <strong>${analisis.disponible !== null ? formatearMoneda(analisis.disponible) : "No indicado"}</strong>
      </div>
      <div class="fila-analisis">
        <span>Dinero después de comprar</span>
        <strong>${dineroRestante !== null ? formatearMoneda(dineroRestante) : "Pendiente"}</strong>
      </div>
      <div class="fila-analisis">
        <span>¿Necesidad o deseo?</span>
        <strong>${analisis.categoria.tipo}</strong>
      </div>

      <div class="bloque-analisis">
        <strong>🎯 Posible impacto en el dinero</strong>
        <p>${analisis.impacto.texto}</p>
      </div>

      <div class="bloque-analisis">
        <strong>📊 Opciones disponibles</strong>
        <div class="opciones-analisis">
          ${analisis.opciones
            .map(
              (opcion) => `
                <button class="opcion-decision compra" data-decision="${opcion.id}">
                  ${opcion.label}
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="bloque-analisis">
        <strong>⚠️ Preguntas para pensar</strong>
        <ul class="lista-preguntas">
          <li>¿Realmente necesitas comprarlo?</li>
          <li>¿Es una necesidad o un deseo?</li>
          <li>¿Tienes suficiente dinero después de la compra?</li>
          <li>¿Afectaría tus gastos necesarios o tu ahorro?</li>
          <li>¿Podrías esperar para comprarlo?</li>
        </ul>
      </div>

      <div class="bloque-analisis">
        <strong>💡 Consejo financiero</strong>
        <p>${analisis.consejo}</p>
      </div>

      <div id="resultado-decision" class="resultado-decision" aria-live="polite"></div>
    </div>
  `;
}

document.addEventListener("click", (evento) => {
  const ejemplo = evento.target.closest("[data-ejemplo]");
  if (ejemplo) {
    const input = document.getElementById("input-compra");
    if (input) {
      input.value = ejemplo.dataset.ejemplo;
      input.focus();
    }
    return;
  }

  if (evento.target.closest("#btn-analizar-compra")) {
    const input = document.getElementById("input-compra");
    if (!input) return;

    const texto = input.value.trim();
    if (!texto) {
      const contenedorResultado = document.getElementById("resultado-compra");
      if (contenedorResultado) {
        contenedorResultado.innerHTML = `
          <div class="tarjeta-analisis error">
            <strong>Escribe lo que quieres comprar</strong>
            <p>Cuéntanos el producto o la compra que tienes en mente para analizarla con una mirada financiera.</p>
          </div>
        `;
      }
      return;
    }

    const analisis = analizarCompra(texto);
    renderizarAnalisis(analisis);
    return;
  }

  const decision = evento.target.closest("[data-decision]");
  if (decision) {
    const contenedorResultado = document.getElementById("resultado-decision");
    if (!contenedorResultado) return;

    const opcion = OPCIONES_DECISION.find((item) => item.id === decision.dataset.decision);
    const analisis = analizarCompra(document.getElementById("input-compra")?.value || "");
    const opcionSeleccionada = analisis.opciones.find((item) => item.id === opcion.id);

    contenedorResultado.innerHTML = `
      <div class="consecuencia-decision">
        <strong>${opcion.label}</strong>
        <p>${opcionSeleccionada.detalle}</p>
      </div>
    `;
  }
});
