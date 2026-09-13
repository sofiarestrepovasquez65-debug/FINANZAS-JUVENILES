/* ===================================================
   Finanzas juveniles — Navegación entre pantallas
   =================================================== */

function usuarioAutenticado() {
  try {
    const usuario = localStorage.getItem("finanzasjuveniles.usuario.v1");
    if (!usuario) return false;
    const datos = JSON.parse(usuario);
    return Boolean(datos && datos.loggedIn && datos.email && datos.password);
  } catch (error) {
    return false;
  }
}

function irAPantalla(idPantalla) {
  const permitirAcceso = usuarioAutenticado() || idPantalla === "pantalla-login";

  if (!permitirAcceso) {
    idPantalla = "pantalla-login";
  }

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
  if (idPantalla === "pantalla-decisiones" && typeof renderizarEscenario === "function") {
    renderizarEscenario();
  }
}

document.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-pantalla]");
  if (boton) {
    if (!usuarioAutenticado() && boton.dataset.pantalla !== "pantalla-login") {
      irAPantalla("pantalla-login");
      return;
    }
    irAPantalla(boton.dataset.pantalla);
  }
});
