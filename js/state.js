/* ===================================================
   Finanzas juveniles — Manejo de estado (localStorage)
   No se solicita ni se guarda información personal real.
   =================================================== */

const STORAGE_KEY = "finanzasjuveniles.v1";

function estadoPorDefecto() {
  return {
    puntos: 0,
    leccionesCompletadas: [],   // ids de LECCIONES
    quizzesRealizados: 0,
    mejorPuntajeQuiz: 0,        // porcentaje 0-100
    retosCompletados: [],       // ids de RETOS
    metas: [],                  // {id, nombre, objetivo, ahorrado}
    ultimoPresupuesto: null
  };
}

function cargarEstado() {
  try {
    const crudo = localStorage.getItem(STORAGE_KEY);
    if (!crudo) return estadoPorDefecto();
    const datos = JSON.parse(crudo);
    return { ...estadoPorDefecto(), ...datos };
  } catch (e) {
    console.warn("No se pudo leer el progreso guardado, empezando de cero.", e);
    return estadoPorDefecto();
  }
}

function guardarEstado(estado) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
  } catch (e) {
    console.warn("No se pudo guardar el progreso.", e);
  }
}

// Estado global en memoria, cargado al iniciar
let ESTADO = cargarEstado();

function actualizarEstado(mutador) {
  mutador(ESTADO);
  guardarEstado(ESTADO);
  if (typeof window.alRenderizarProgreso === "function") {
    window.alRenderizarProgreso();
  }
}

function sumarPuntos(cantidad) {
  actualizarEstado((estado) => {
    estado.puntos += cantidad;
  });
}
