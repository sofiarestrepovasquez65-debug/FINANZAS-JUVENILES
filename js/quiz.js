/* ===================================================
   Finanzas juveniles — Quiz Financiero
   =================================================== */

const TOTAL_PREGUNTAS_QUIZ = 8;

let quizPreguntas = [];
let quizIndice = 0;
let quizRespuestas = []; // { pregunta, elegida, correcta, acerto }

function mezclarArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function iniciarQuiz() {
  quizPreguntas = mezclarArray(QUIZ_BANCO).slice(0, TOTAL_PREGUNTAS_QUIZ);
  quizIndice = 0;
  quizRespuestas = [];
  renderizarPreguntaQuiz();
}

function renderizarPreguntaQuiz() {
  const contenedor = document.getElementById("contenedor-quiz");
  const pregunta = quizPreguntas[quizIndice];

  contenedor.innerHTML = `
    <div class="progreso-quiz">Pregunta ${quizIndice + 1} de ${quizPreguntas.length}</div>
    <h3 style="margin-bottom:16px">${pregunta.pregunta}</h3>
    <div class="opciones-lista">
      ${pregunta.opciones
        .map((op, i) => `<button class="opcion-btn" data-indice="${i}">${op}</button>`)
        .join("")}
    </div>
    <div class="retroalimentacion" data-retro-quiz></div>
    <div style="margin-top:16px; text-align:right">
      <button class="btn btn-primario btn-pequeno oculto" id="btn-siguiente-pregunta">
        ${quizIndice === quizPreguntas.length - 1 ? "Ver resultados" : "Siguiente"}
      </button>
    </div>
  `;
}

function renderizarResultadosQuiz() {
  const aciertos = quizRespuestas.filter((r) => r.acerto).length;
  const porcentaje = Math.round((aciertos / quizRespuestas.length) * 100);

  let mensaje;
  if (porcentaje >= 90) mensaje = "¡Impresionante! Dominas estos temas de finanzas. 🌟";
  else if (porcentaje >= 70) mensaje = "¡Muy bien! Vas por muy buen camino. 💪";
  else if (porcentaje >= 50) mensaje = "Vas bien, sigue repasando los temas del módulo Aprende. 📘";
  else mensaje = "Es un buen comienzo. Repasa los temas y vuelve a intentarlo. 🌱";

  const contenedor = document.getElementById("contenedor-quiz");
  contenedor.innerHTML = `
    <div class="resumen-quiz">
      <div class="puntaje-grande">${porcentaje}%</div>
      <p>${aciertos} de ${quizRespuestas.length} respuestas correctas</p>
      <div class="mensaje-motivador">${mensaje}</div>
    </div>
    <div class="lista-repaso">
      ${quizRespuestas
        .map(
          (r) => `
        <div class="item-repaso ${r.acerto ? "acerto" : "fallo"}">
          <strong>${r.pregunta}</strong><br>
          ${r.acerto ? "✔ Correcto." : "✘ La respuesta correcta era: " + r.correctaTexto + "."}
          <br><span style="color:var(--ink-soft)">${r.explicacion}</span>
        </div>`
        )
        .join("")}
    </div>
    <div style="text-align:center">
      <button class="btn btn-primario" id="btn-repetir-quiz">Volver a hacer el quiz</button>
    </div>
  `;

  actualizarEstado((estado) => {
    estado.quizzesRealizados += 1;
    estado.mejorPuntajeQuiz = Math.max(estado.mejorPuntajeQuiz, porcentaje);
    estado.puntos += aciertos * 5;
    if (porcentaje >= 70 && !estado.retosCompletados.includes("reto-quiz")) {
      estado.retosCompletados.push("reto-quiz");
    }
  });
}

document.addEventListener("click", (evento) => {
  if (evento.target.id === "btn-empezar-quiz" || evento.target.id === "btn-repetir-quiz") {
    iniciarQuiz();
    return;
  }

  const opcion = evento.target.closest("#contenedor-quiz .opciones-lista .opcion-btn");
  if (opcion) {
    const pregunta = quizPreguntas[quizIndice];
    const indiceElegido = Number(opcion.dataset.indice);
    const acerto = indiceElegido === pregunta.correcta;

    document.querySelectorAll("#contenedor-quiz .opcion-btn").forEach((btn, i) => {
      btn.disabled = true;
      if (i === pregunta.correcta) btn.classList.add("correcta");
      if (i === indiceElegido && !acerto) btn.classList.add("incorrecta");
    });

    const retro = document.querySelector("[data-retro-quiz]");
    retro.textContent = acerto ? "¡Correcto!" : "No es la opción correcta, sigue con la siguiente.";
    retro.className = "retroalimentacion " + (acerto ? "ok" : "mal");

    quizRespuestas.push({
      pregunta: pregunta.pregunta,
      correctaTexto: pregunta.opciones[pregunta.correcta],
      explicacion: pregunta.explicacion,
      acerto
    });

    document.getElementById("btn-siguiente-pregunta").classList.remove("oculto");
    return;
  }

  if (evento.target.id === "btn-siguiente-pregunta") {
    if (quizIndice < quizPreguntas.length - 1) {
      quizIndice += 1;
      renderizarPreguntaQuiz();
    } else {
      renderizarResultadosQuiz();
    }
  }
});
