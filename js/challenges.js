/* ===================================================
   Finanzas juveniles — Retos
   =================================================== */

function renderizarRetos() {
  const contenedor = document.getElementById("grid-retos");
  if (!contenedor) return;

  contenedor.innerHTML = RETOS.map((reto) => {
    const completado = ESTADO.retosCompletados.includes(reto.id);
    return `
      <div class="tarjeta-reto ${completado ? "completado" : ""}">
        <div class="encabezado-reto">
          <span class="icono">${reto.icono}</span>
          <h3 style="margin:0; font-size:1rem">${reto.titulo}</h3>
          <span class="puntos-reto">+${reto.puntos} pts</span>
        </div>
        <p>${reto.descripcion}</p>
        <button class="btn ${completado ? "btn-fantasma" : "btn-secundario"} btn-pequeno" data-reto="${reto.id}" ${completado ? "disabled" : ""}>
          ${completado ? "✔ Completado" : "Marcar como completado"}
        </button>
      </div>
    `;
  }).join("");
}

document.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-reto]");
  if (!boton) return;
  const idReto = boton.dataset.reto;
  const reto = RETOS.find((r) => r.id === idReto);
  if (!reto || ESTADO.retosCompletados.includes(idReto)) return;

  actualizarEstado((estado) => {
    estado.retosCompletados.push(idReto);
    estado.puntos += reto.puntos;
  });
  renderizarRetos();
});
