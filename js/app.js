/* ===================================================
   Finanzas juveniles — Arranque de la aplicación
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderizarLecciones();
  renderizarMetas();
  renderizarRetos();
  renderizarProgreso();
  cargarPresupuestoGuardado();

  // Mensaje de bienvenida del asesor
  agregarBurbuja(
    "¡Hola! Soy tu asesor financiero educativo. 👋 Puedes preguntarme sobre ahorro, presupuesto, metas, invertir o cualquier tema del módulo Aprende.",
    "asesor"
  );

  irAPantalla("pantalla-inicio");
});
