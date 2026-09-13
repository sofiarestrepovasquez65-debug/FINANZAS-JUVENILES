/* ===================================================
   Finanzas juveniles — Arranque de la aplicación
   =================================================== */

const LOGIN_STORAGE_KEY = "finanzasjuveniles.usuario.v1";

function obtenerUsuarioGuardado() {
  try {
    const usuario = localStorage.getItem(LOGIN_STORAGE_KEY);
    return usuario ? JSON.parse(usuario) : null;
  } catch (error) {
    console.warn("No se pudo leer el usuario guardado.", error);
    return null;
  }
}

function guardarUsuarioActual(usuario) {
  try {
    localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(usuario));
  } catch (error) {
    console.warn("No se pudo guardar el usuario.", error);
  }
}

function cerrarSesion() {
  const usuarioGuardado = obtenerUsuarioGuardado();

  if (usuarioGuardado) {
    guardarUsuarioActual({ ...usuarioGuardado, loggedIn: false });
  } else {
    localStorage.removeItem(LOGIN_STORAGE_KEY);
  }

  document.body.classList.add("no-autenticado");
  document.getElementById("btn-logout")?.classList.add("oculto");
  irAPantalla("pantalla-login");
  const mensaje = document.getElementById("login-mensaje");
  if (mensaje) {
    mensaje.textContent = "Sesión cerrada. Puedes volver a entrar cuando quieras.";
  }
}

function actualizarEstadoUsuario(usuario) {
  const logoutBtn = document.getElementById("btn-logout");
  const nombre = usuario && usuario.nombre ? usuario.nombre : "";

  if (logoutBtn) {
    logoutBtn.classList.toggle("oculto", !usuario || !usuario.loggedIn);
    logoutBtn.textContent = usuario && usuario.loggedIn ? `Salir · ${nombre}` : "Salir";
  }
}

function iniciarSesion(usuario) {
  const usuarioConSesion = { ...usuario, loggedIn: true };
  guardarUsuarioActual(usuarioConSesion);
  document.body.classList.remove("no-autenticado");
  actualizarEstadoUsuario(usuarioConSesion);
  irAPantalla("pantalla-inicio");
}

function mostrarModoAuth(modo) {
  const nombreCampo = document.getElementById("campo-nombre");
  const titulo = document.getElementById("auth-title");
  const boton = document.getElementById("btn-auth-submit");
  const tabs = document.querySelectorAll(".auth-tab");
  const esRegistro = modo === "register";

  if (nombreCampo) nombreCampo.classList.toggle("hidden", !esRegistro);
  if (titulo) titulo.textContent = esRegistro ? "Registrarse" : "Inicia sesión";
  if (boton) boton.textContent = esRegistro ? "Crear cuenta" : "Entrar";

  tabs.forEach((tab) => {
    const activo = tab.dataset.authMode === modo;
    tab.classList.toggle("active", activo);
    tab.setAttribute("aria-selected", String(activo));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarLecciones();
  renderizarMetas();
  renderizarRetos();
  renderizarProgreso();
  cargarPresupuestoGuardado();

  if (typeof renderizarEscenario === "function") {
    renderizarEscenario();
  }

  const usuarioActual = obtenerUsuarioGuardado();
  if (usuarioActual && usuarioActual.loggedIn) {
    document.body.classList.remove("no-autenticado");
    actualizarEstadoUsuario(usuarioActual);
    irAPantalla("pantalla-inicio");
  } else {
    document.body.classList.add("no-autenticado");
    actualizarEstadoUsuario(null);
    irAPantalla("pantalla-login");
  }

  // Mensaje de bienvenida del asesor
  agregarBurbuja(
    "¡Hola! Soy tu asesor financiero educativo. 👋 Puedes preguntarme sobre ahorro, presupuesto, metas, invertir o cualquier tema del módulo Aprende.",
    "asesor"
  );
});

document.addEventListener("submit", (evento) => {
  if (evento.target.id !== "form-auth") return;

  evento.preventDefault();
  const nombre = document.getElementById("login-nombre").value.trim();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const mensaje = document.getElementById("login-mensaje");
  const modo = document.querySelector(".auth-tab.active")?.dataset.authMode || "login";

  if (modo === "register") {
    if (!nombre || !email || !password) {
      if (mensaje) mensaje.textContent = "Completa nombre, correo y contraseña para registrarte.";
      return;
    }

    const nuevoUsuario = { nombre, email, password, loggedIn: true };
    iniciarSesion(nuevoUsuario);
    if (mensaje) mensaje.textContent = "Cuenta creada correctamente.";
    return;
  }

  if (!email || !password) {
    if (mensaje) mensaje.textContent = "Ingresa tu correo y contraseña para iniciar sesión.";
    return;
  }

  const usuarioGuardado = obtenerUsuarioGuardado();

  if (!usuarioGuardado) {
    if (mensaje) mensaje.textContent = "Correo o contraseña incorrectos.";
    return;
  }

  if (usuarioGuardado.email && usuarioGuardado.email.toLowerCase() === email.toLowerCase() && usuarioGuardado.password === password) {
    iniciarSesion({ nombre: usuarioGuardado.nombre || nombre, email: usuarioGuardado.email, password: usuarioGuardado.password });
    if (mensaje) mensaje.textContent = "¡Sesión iniciada correctamente!";
    return;
  }

  if (mensaje) mensaje.textContent = "Correo o contraseña incorrectos.";
});

document.addEventListener("click", (evento) => {
  const botonLogout = evento.target.closest("#btn-logout");
  if (botonLogout) {
    cerrarSesion();
    return;
  }

  const tab = evento.target.closest(".auth-tab");
  if (tab) {
    mostrarModoAuth(tab.dataset.authMode);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  mostrarModoAuth("login");
});
