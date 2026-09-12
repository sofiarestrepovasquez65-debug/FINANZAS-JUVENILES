/* ===================================================
   Finanzas juveniles — Mi Asesor Financiero Educativo
   No solicita ni almacena información personal sensible.
   No realiza inversiones reales ni recomienda invertir dinero real.
   =================================================== */

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // quita tildes
}

function buscarRespuestaAsesor(mensajeUsuario) {
  const texto = normalizarTexto(mensajeUsuario);
  for (const entrada of ASESOR_BASE) {
    if (entrada.claves.some((clave) => texto.includes(normalizarTexto(clave)))) {
      return entrada.respuesta;
    }
  }
  return ASESOR_RESPUESTA_DEFECTO;
}

function agregarBurbuja(texto, quien) {
  const contenedor = document.getElementById("mensajes-chat");
  const burbuja = document.createElement("div");
  burbuja.className = "burbuja " + quien;
  burbuja.textContent = texto;
  contenedor.appendChild(burbuja);
  contenedor.scrollTop = contenedor.scrollHeight;
}

function enviarMensajeAsesor(texto) {
  const mensaje = texto.trim();
  if (!mensaje) return;
  agregarBurbuja(mensaje, "usuario");

  setTimeout(() => {
    const respuesta = buscarRespuestaAsesor(mensaje);
    agregarBurbuja(respuesta, "asesor");
  }, 350);
}

document.addEventListener("submit", (evento) => {
  if (evento.target.id === "form-chat") {
    evento.preventDefault();
    const input = document.getElementById("input-chat");
    enviarMensajeAsesor(input.value);
    input.value = "";
  }
});

document.addEventListener("click", (evento) => {
  const sugerencia = evento.target.closest("[data-sugerencia-chat]");
  if (sugerencia) {
    enviarMensajeAsesor(sugerencia.dataset.sugerenciaChat);
  }
});
