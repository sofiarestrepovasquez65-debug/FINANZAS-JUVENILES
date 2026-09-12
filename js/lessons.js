/* ===================================================
   Finanzas juveniles — Módulo "Aprende"
   =================================================== */

function renderizarLecciones() {
  const contenedor = document.getElementById("grid-lecciones");
  if (!contenedor) return;

  contenedor.innerHTML = LECCIONES.map((leccion) => {
    const completada = ESTADO.leccionesCompletadas.includes(leccion.id);
    return `
      <button class="tarjeta-leccion" data-abrir-leccion="${leccion.id}">
        <span class="icono">${leccion.icono}</span>
        <h3>${leccion.titulo}</h3>
        ${completada ? '<span class="insignia-completado">✔ Completado</span>' : ""}
      </button>
    `;
  }).join("");
}

function abrirLeccion(idLeccion) {
  const leccion = LECCIONES.find((l) => l.id === idLeccion);
  if (!leccion) return;

  const superposicion = document.getElementById("superposicion-leccion");
  const panel = document.getElementById("contenido-leccion");

  panel.innerHTML = `
    <button class="cerrar" data-cerrar-leccion aria-label="Cerrar">✕</button>
    <span class="icono" style="font-size:2.2rem">${leccion.icono}</span>
    <h2>${leccion.titulo}</h2>
    <p>${leccion.texto}</p>
    <div class="bloque-ejemplo"><strong>Ejemplo de la vida diaria:</strong><br>${leccion.ejemplo}</div>
    <div class="comprobacion" data-leccion="${leccion.id}">
      <h4>Comprueba lo aprendido</h4>
      <p style="margin-bottom:10px">${leccion.pregunta.enunciado}</p>
      <div class="opciones-lista">
        ${leccion.pregunta.opciones
          .map(
            (op, i) =>
              `<button class="opcion-btn" data-indice="${i}">${op}</button>`
          )
          .join("")}
      </div>
      <div class="retroalimentacion" data-retro></div>
    </div>
  `;

  superposicion.classList.add("visible");
}

function cerrarLeccion() {
  document.getElementById("superposicion-leccion").classList.remove("visible");
}

document.addEventListener("click", (evento) => {
  const abrir = evento.target.closest("[data-abrir-leccion]");
  if (abrir) {
    abrirLeccion(abrir.dataset.abrirLeccion);
    return;
  }

  if (evento.target.closest("[data-cerrar-leccion]")) {
    cerrarLeccion();
    return;
  }

  if (evento.target.id === "superposicion-leccion") {
    cerrarLeccion();
    return;
  }

  const opcion = evento.target.closest(".comprobacion .opcion-btn");
  if (opcion) {
    const bloque = opcion.closest(".comprobacion");
    const idLeccion = bloque.dataset.leccion;
    const leccion = LECCIONES.find((l) => l.id === idLeccion);
    const indiceElegido = Number(opcion.dataset.indice);
    const esCorrecta = indiceElegido === leccion.pregunta.correcta;

    bloque.querySelectorAll(".opcion-btn").forEach((btn, i) => {
      btn.disabled = true;
      if (i === leccion.pregunta.correcta) btn.classList.add("correcta");
      if (i === indiceElegido && !esCorrecta) btn.classList.add("incorrecta");
    });

    const retro = bloque.querySelector("[data-retro]");
    retro.textContent = esCorrecta
      ? "¡Correcto! Has completado este tema. 🎉"
      : "Casi. La opción correcta está resaltada en verde, revísala para reforzar la idea.";
    retro.className = "retroalimentacion " + (esCorrecta ? "ok" : "mal");

    if (esCorrecta && !ESTADO.leccionesCompletadas.includes(idLeccion)) {
      actualizarEstado((estado) => {
        estado.leccionesCompletadas.push(idLeccion);
        estado.puntos += 10;
      });
      renderizarLecciones();
    }
  }
});
