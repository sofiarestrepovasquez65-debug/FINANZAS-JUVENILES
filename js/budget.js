/* ===================================================
   Finanzas juveniles — Mi Presupuesto
   =================================================== */

function formatearMoneda(numero) {
  const valor = Number.isFinite(numero) ? numero : 0;
  return "$" + Math.round(valor).toLocaleString("es-CO");
}

function calcularPresupuesto() {
  const ingresos = Number(document.getElementById("input-ingresos").value) || 0;
  const necesarios = Number(document.getElementById("input-necesarios").value) || 0;
  const deseados = Number(document.getElementById("input-deseados").value) || 0;
  const ahorro = Number(document.getElementById("input-ahorro-deseado").value) || 0;

  const gastosTotales = necesarios + deseados + ahorro;
  const restante = ingresos - gastosTotales;

  const salida = document.getElementById("resultado-presupuesto");
  salida.classList.remove("oculto");

  document.getElementById("valor-gastos-totales").textContent = formatearMoneda(gastosTotales);
  document.getElementById("valor-ahorro").textContent = formatearMoneda(ahorro);
  document.getElementById("valor-restante").textContent = formatearMoneda(restante);

  const mensaje = document.getElementById("mensaje-presupuesto");
  if (ingresos === 0 && gastosTotales === 0) {
    mensaje.className = "mensaje-recomendacion";
    mensaje.textContent = "Ingresa tus datos arriba para ver una recomendación.";
  } else if (restante < 0) {
    mensaje.className = "mensaje-recomendacion negativo";
    mensaje.textContent =
      "Tus gastos superan el dinero disponible por " +
      formatearMoneda(Math.abs(restante)) +
      ". Intenta reducir algún gasto o revisar qué cosas son realmente necesarias.";
  } else if (restante === 0) {
    mensaje.className = "mensaje-recomendacion positivo";
    mensaje.textContent =
      "Tu presupuesto está exactamente equilibrado. Ya destinaste dinero a lo necesario y al ahorro, ¡buen trabajo organizando!";
  } else {
    mensaje.className = "mensaje-recomendacion positivo";
    mensaje.textContent =
      "¡Bien hecho! Te queda " +
      formatearMoneda(restante) +
      " disponible después de cubrir tus gastos y tu ahorro. Podrías destinar parte de eso a ahorrar un poco más.";
  }

  actualizarEstado((estado) => {
    estado.ultimoPresupuesto = { ingresos, necesarios, deseados, ahorro, restante };
  });
}

document.addEventListener("input", (evento) => {
  if (evento.target.closest("#form-presupuesto")) {
    calcularPresupuesto();
  }
});

function cargarPresupuestoGuardado() {
  const previo = ESTADO.ultimoPresupuesto;
  if (!previo) return;
  document.getElementById("input-ingresos").value = previo.ingresos || "";
  document.getElementById("input-necesarios").value = previo.necesarios || "";
  document.getElementById("input-deseados").value = previo.deseados || "";
  document.getElementById("input-ahorro-deseado").value = previo.ahorro || "";
  calcularPresupuesto();
}
