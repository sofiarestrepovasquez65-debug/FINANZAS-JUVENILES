/* ===================================================
   Finanzas juveniles — Navegación entre pantallas
   =================================================== */

function irAPantalla(idPantalla) {
  document.querySelectorAll(".pantalla").forEach((el) => {
    el.classList.toggle("activa", el.id === idPantalla);
  });
  document.querySelectorAll("[data-pantalla]").forEach((btn) => {
    btn.classList.toggle("activo", btn.dataset.pantalla === idPantalla);
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  // Renderizar contenido de la pantalla al entrar (por si cambió el estado)
  if (idPantalla === "pantalla-progreso" && typeof renderizarProgreso === "function") {
    renderizarProgreso();
  }
  if (idPantalla === "pantalla-metas" && typeof renderizarMetas === "function") {
    renderizarMetas();
  }
  if (idPantalla === "pantalla-retos" && typeof renderizarRetos === "function") {
    renderizarRetos();
  }
}

document.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-pantalla]");
  if (boton) {
    irAPantalla(boton.dataset.pantalla);
  }
});
