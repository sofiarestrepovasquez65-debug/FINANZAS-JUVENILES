/* ===================================================
   Finanzas juveniles — Mi Progreso
   =================================================== */

function renderizarProgreso() {
  const totalTemas = LECCIONES.length;
  const totalRetos = RETOS.length;

  const temasHechos = ESTADO.leccionesCompletadas.length;
  const retosHechos = ESTADO.retosCompletados.length;
  const metasCreadas = ESTADO.metas.length;

  document.getElementById("stat-temas").textContent = `${temasHechos}/${totalTemas}`;
  document.getElementById("stat-puntos").textContent = ESTADO.puntos;
  document.getElementById("stat-quizzes").textContent = ESTADO.quizzesRealizados;
  document.getElementById("stat-mejor-quiz").textContent = ESTADO.mejorPuntajeQuiz + "%";
  document.getElementById("stat-retos").textContent = `${retosHechos}/${totalRetos}`;
  document.getElementById("stat-metas").textContent = metasCreadas;

  const pesoTemas = temasHechos / totalTemas;
  const pesoRetos = retosHechos / totalRetos;
  const pesoQuiz = Math.min(1, ESTADO.mejorPuntajeQuiz / 100);
  const pesoMetas = Math.min(1, metasCreadas / 3);

  const progresoGeneral = Math.round(
    (pesoTemas * 0.4 + pesoRetos * 0.25 + pesoQuiz * 0.25 + pesoMetas * 0.1) * 100
  );

  document.getElementById("relleno-progreso-general").style.width = progresoGeneral + "%";
  document.getElementById("texto-progreso-general").textContent = progresoGeneral + "% de tu recorrido completado";

  // Actualizar contador de puntos en la barra superior
  document.querySelectorAll("[data-puntos-header]").forEach((el) => {
    el.textContent = ESTADO.puntos;
  });
}

window.alRenderizarProgreso = () => {
  // Mantener el contador de puntos del header siempre actualizado,
  // sin necesidad de estar en la pantalla de progreso.
  document.querySelectorAll("[data-puntos-header]").forEach((el) => {
    el.textContent = ESTADO.puntos;
  });
};
