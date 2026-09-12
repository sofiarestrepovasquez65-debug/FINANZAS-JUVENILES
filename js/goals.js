/* ===================================================
   Finanzas juveniles — Mis Metas
   =================================================== */

function crearMeta(evento) {
  evento.preventDefault();
  const nombre = document.getElementById("input-nombre-meta").value.trim();
  const objetivo = Number(document.getElementById("input-objetivo-meta").value) || 0;
  const ahorrado = Number(document.getElementById("input-ahorrado-meta").value) || 0;

  if (!nombre || objetivo <= 0) return;

  actualizarEstado((estado) => {
    estado.metas.push({
      id: "meta-" + Date.now(),
      nombre,
      objetivo,
      ahorrado: Math.min(ahorrado, objetivo)
    });
  });

  evento.target.reset();
  renderizarMetas();
}

function renderizarMetas() {
  const contenedor = document.getElementById("grid-metas");
  if (!contenedor) return;

  if (ESTADO.metas.length === 0) {
    contenedor.innerHTML =
      '<p style="grid-column:1/-1;color:var(--ink-soft)">Todavía no tienes metas. ¡Crea la primera arriba! 🎯</p>';
    return;
  }

  contenedor.innerHTML = ESTADO.metas
    .map((meta) => {
      const porcentaje = Math.min(100, Math.round((meta.ahorrado / meta.objetivo) * 100));
      const faltante = Math.max(0, meta.objetivo - meta.ahorrado);
      const lograda = meta.ahorrado >= meta.objetivo;
      return `
        <div class="tarjeta-meta">
          <h3>${lograda ? "🏆 " : "🎯 "}${meta.nombre}</h3>
          <div class="cifras">
            <span>Ahorrado: ${formatearMoneda(meta.ahorrado)}</span>
            <span>Meta: ${formatearMoneda(meta.objetivo)}</span>
          </div>
          <div class="barra-progreso"><div class="relleno" style="width:${porcentaje}%"></div></div>
          <div class="porcentaje">${porcentaje}% completado</div>
          <div class="faltante">${lograda ? "¡Meta alcanzada!" : "Faltan " + formatearMoneda(faltante)}</div>
          <div class="acciones-meta">
            <input type="number" class="actualizar-ahorro" min="0" placeholder="Sumar $" data-meta="${meta.id}">
            <button class="btn btn-secundario btn-pequeno" data-sumar-ahorro="${meta.id}">Agregar</button>
            <button class="btn btn-fantasma btn-pequeno" data-borrar-meta="${meta.id}">Eliminar</button>
          </div>
        </div>
      `;
    })
    .join("");
}

document.addEventListener("submit", (evento) => {
  if (evento.target.id === "form-meta") {
    crearMeta(evento);
  }
});

document.addEventListener("click", (evento) => {
  const sumar = evento.target.closest("[data-sumar-ahorro]");
  if (sumar) {
    const id = sumar.dataset.sumarAhorro;
    const input = document.querySelector(`.actualizar-ahorro[data-meta="${id}"]`);
    const cantidad = Number(input.value) || 0;
    if (cantidad <= 0) return;
    actualizarEstado((estado) => {
      const meta = estado.metas.find((m) => m.id === id);
      if (meta) meta.ahorrado = Math.min(meta.objetivo, meta.ahorrado + cantidad);
    });
    renderizarMetas();
    return;
  }

  const borrar = evento.target.closest("[data-borrar-meta]");
  if (borrar) {
    const id = borrar.dataset.borrarMeta;
    actualizarEstado((estado) => {
      estado.metas = estado.metas.filter((m) => m.id !== id);
    });
    renderizarMetas();
  }
});
