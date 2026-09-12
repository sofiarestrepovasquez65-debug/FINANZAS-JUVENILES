/* ===================================================
   Finanzas juveniles — Gastos Inteligentes
   =================================================== */

const ESCENARIOS = [
  {
    situacion: "Tienes $50.000. Puedes comprar algo que quieres por $40.000, o guardar ese dinero para tu meta de ahorro.",
    opciones: [
      {
        texto: "Comprar lo que quiero",
        consecuencia:
          "Disfrutas la compra ahora, pero tu meta de ahorro avanza más lento. No está mal darte un gusto de vez en cuando, siempre que lo hayas decidido a propósito y no te afecte otras prioridades."
      },
      {
        texto: "Guardar el dinero para mi meta",
        consecuencia:
          "Tu meta de ahorro avanza $50.000 más cerca. Postergar un deseo por un objetivo más grande es una de las decisiones financieras más poderosas que existen."
      }
    ]
  },
  {
    situacion: "Un amigo te invita a comprar algo divertido, pero no lo tenías planeado en tu presupuesto de la semana.",
    opciones: [
      {
        texto: "Comprarlo de todas formas",
        consecuencia:
          "Puede que disfrutes el momento, pero tendrás menos dinero para lo que sí habías planeado. Los gastos no planeados, si se repiten seguido, desordenan el presupuesto."
      },
      {
        texto: "Decir que no por ahora",
        consecuencia:
          "Mantienes tu presupuesto bajo control. Siempre puedes replantear ese gasto para la próxima semana si lo incluyes en tu plan."
      }
    ]
  },
  {
    situacion: "Tienes que elegir entre comprar útiles escolares que se te acabaron o un juego nuevo que salió esta semana.",
    opciones: [
      {
        texto: "Comprar los útiles escolares",
        consecuencia:
          "Elegiste cubrir una necesidad antes que un deseo. Es una buena práctica: primero lo indispensable, luego lo que te gustaría tener."
      },
      {
        texto: "Comprar el juego nuevo",
        consecuencia:
          "El juego es un deseo, no una necesidad. Podrías quedarte sin algo indispensable para el colegio. Piensa si puedes esperar un poco para el juego."
      }
    ]
  },
  {
    situacion: "Recibes $30.000 de regalo. Nadie te está pidiendo que lo gastes en nada en particular.",
    opciones: [
      {
        texto: "Gastarlo todo en cuanto llega",
        consecuencia:
          "Es tentador gastar el dinero apenas llega, pero así es difícil construir un ahorro. Probar la regla de separar una parte antes de gastar puede ayudarte."
      },
      {
        texto: "Separar una parte para ahorrar y usar el resto",
        consecuencia:
          "¡Buena estrategia! Al separar una parte antes de gastar, avanzas en tus metas sin dejar de disfrutar el resto del dinero."
      }
    ]
  },
  {
    situacion: "Tienes un gasto innecesario que haces casi todos los días (por ejemplo, comprar algo pequeño en el descanso).",
    opciones: [
      {
        texto: "Seguir haciéndolo sin pensarlo",
        consecuencia:
          "Un gasto pequeño repetido muchas veces puede sumar una cantidad grande al final del mes. Vale la pena sumarlo y ver cuánto representa."
      },
      {
        texto: "Reducirlo algunos días para ahorrar la diferencia",
        consecuencia:
          "Reducir un gasto pequeño y repetido es una de las formas más fáciles de encontrar dinero extra para ahorrar, sin sentir que te estás privando de todo."
      }
    ]
  }
];

let indiceEscenarioActual = 0;

function renderizarEscenario() {
  const contenedor = document.getElementById("contenedor-escenario");
  if (!contenedor) return;
  const escenario = ESCENARIOS[indiceEscenarioActual];

  contenedor.innerHTML = `
    <p class="situacion">${escenario.situacion}</p>
    <div class="opciones-decision dos-col">
      ${escenario.opciones
        .map((op, i) => `<button class="opcion-decision" data-opcion="${i}">${op.texto}</button>`)
        .join("")}
    </div>
    <div id="consecuencia-decision"></div>
    <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center;">
      <span style="color:var(--ink-soft); font-size:0.85rem">Situación ${indiceEscenarioActual + 1} de ${ESCENARIOS.length}</span>
      <button class="btn btn-fantasma btn-pequeno" id="btn-siguiente-escenario" disabled>Siguiente situación →</button>
    </div>
  `;
}

document.addEventListener("click", (evento) => {
  const opcion = evento.target.closest("#contenedor-escenario .opcion-decision");
  if (opcion) {
    const escenario = ESCENARIOS[indiceEscenarioActual];
    const elegida = escenario.opciones[Number(opcion.dataset.opcion)];

    document.querySelectorAll("#contenedor-escenario .opcion-decision").forEach((b) => (b.disabled = true));
    document.getElementById("consecuencia-decision").innerHTML =
      `<div class="consecuencia"><strong>Qué puede pasar:</strong><br>${elegida.consecuencia}</div>`;
    document.getElementById("btn-siguiente-escenario").disabled = false;
    return;
  }

  if (evento.target.id === "btn-siguiente-escenario") {
    indiceEscenarioActual = (indiceEscenarioActual + 1) % ESCENARIOS.length;
    renderizarEscenario();
  }
});
