// Código compartido para las tres páginas.

(() => {
  'use strict';

  // ---------- Helper: safe selector ----------
  const $ = id => document.getElementById(id);

  // ---------- Año automático en el footer ----------
  const anioEl = $('anio');
  if (anioEl) anioEl.textContent = new Date().getFullYear();

  // ---------- Index: botón "Saludar" (fecha y hora exactas) ----------
  const btnSaludar = $('btnSaludar');
  const resultadoSaludo = $('resultadoSaludo');
  if (btnSaludar) {
    btnSaludar.addEventListener('click', () => {
      const ahora = new Date();
      const texto = `Hola — fecha y hora: ${ahora.toLocaleString()}`;
      if (resultadoSaludo) resultadoSaludo.textContent = texto;
      else alert(texto);
    });
  }

  // ---------- Fundamentos: Variables (guardar / cambiar nombre) ----------
  const nombreInput = $('inputNombre');
  const btnGuardarNombre = $('btnGuardarNombre');
  const btnCambiarNombre = $('btnCambiarNombre');
  const muestraNombre = $('muestraNombre');

  if (btnGuardarNombre) {
    btnGuardarNombre.addEventListener('click', () => {
      const val = nombreInput ? nombreInput.value.trim() : '';
      if (!val) { alert('Escribe un nombre válido'); return; }
      if (muestraNombre) muestraNombre.textContent = val;
    });
  }

  if (btnCambiarNombre) {
    btnCambiarNombre.addEventListener('click', () => {
      const nuevo = prompt('Escribe el nuevo nombre:');
      if (nuevo === null) return; // canceló
      const v = nuevo.trim();
      if (!v) { alert('Nombre no válido'); return; }
      if (muestraNombre) muestraNombre.textContent = v;
      if (nombreInput) nombreInput.value = v;
    });
  }

  // ---------- Fundamentos: Tipos y typeof (demo) ----------
  const btnMostrarTipo = $('btnMostrarTipo');
  const tipoEjemplo = $('tipoEjemplo');
  const tipoResultado = $('tipoResultado');
  if (btnMostrarTipo) {
    btnMostrarTipo.addEventListener('click', () => {
      const sel = tipoEjemplo ? tipoEjemplo.value : 'string';
      let valor;
      switch (sel) {
        case 'string': valor = 'Hola'; break;
        case 'number': valor = 19; break;
        case 'boolean': valor = true; break;
        case 'undefined': valor = undefined; break;
        case 'null': valor = null; break;
        case 'bigint': valor = 9007199254740993n; break;
        case 'symbol': valor = Symbol('id'); break;
        case 'object': valor = { a: 1 }; break;
        default: valor = '---';
      }
      const tipo = typeof valor;
      const muestra = (valor === null) ? 'null' : String(valor);
      if (tipoResultado) tipoResultado.textContent = `Valor: ${muestra} — typeof: ${tipo}`;
      else alert(`typeof => ${tipo}`);
    });
  }

  // ---------- Fundamentos: Contador (asignaciones, ++/--) ----------
  const btnSumar = $('btnSumar');
  const btnRestar = $('btnRestar');
  const btnReiniciar = $('btnReiniciar');
  const valorContador = $('valorContador');
  let contador = 0;
  function actualizarContador() {
    if (!valorContador) return;
    valorContador.textContent = String(contador);
    if (contador < 0) valorContador.classList.add('negativo');
    else valorContador.classList.remove('negativo');
  }
  if (btnSumar) btnSumar.addEventListener('click', () => { contador += 1; actualizarContador(); });
  if (btnRestar) btnRestar.addEventListener('click', () => { contador -= 1; actualizarContador(); });
  if (btnReiniciar) btnReiniciar.addEventListener('click', () => { contador = 0; actualizarContador(); });
  actualizarContador();

  // ------------------------------------------------------------------
  // Control: condicionales y ciclos (control.html)
  // ------------------------------------------------------------------

  // Clasificador de notas (0-5)
  const notaInput = $('notaInput');
  const btnClasificarNota = $('btnClasificarNota');
  const resultadoNota = $('resultadoNota');
  if (btnClasificarNota) {
    btnClasificarNota.addEventListener('click', () => {
      const raw = notaInput ? notaInput.value.trim() : '';
      const num = Number(raw);
      if (raw === '' || Number.isNaN(num)) { if (resultadoNota) resultadoNota.textContent = 'Por favor escribe un número válido.'; return; }
      if (num < 0 || num > 5) { if (resultadoNota) resultadoNota.textContent = 'La nota debe estar entre 0 y 5.'; return; }
      let clasif = '';
      if (num >= 4.8) clasif = 'Superior';
      else if (num >= 4.2) clasif = 'Alto';
      else if (num >= 3.5) clasif = 'Básico';
      else clasif = 'Bajo';
      if (resultadoNota) resultadoNota.textContent = `Nota: ${num} → ${clasif}`;
    });
  }

  // Tabla de multiplicar (1..10)
  const numeroMultiplicar = $('numeroMultiplicar');
  const btnGenerarTabla = $('btnGenerarTabla');
  const tablaMultiplicar = $('tablaMultiplicar');
  if (btnGenerarTabla) {
    btnGenerarTabla.addEventListener('click', () => {
      const raw = numeroMultiplicar ? numeroMultiplicar.value.trim() : '';
      const n = Number(raw);
      if (raw === '' || Number.isNaN(n)) { if (tablaMultiplicar) tablaMultiplicar.textContent = 'Escribe un número válido.'; return; }
      let out = '';
      for (let i = 1; i <= 10; i++) out += `${n} x ${i} = ${n * i}\n`;
      if (tablaMultiplicar) tablaMultiplicar.textContent = out;
    });
  }

  // Ejemplo for...of con break/continue
  const btnEjemploForOf = $('btnEjemploForOf');
  const resultadoForOf = $('resultadoForOf');
  if (btnEjemploForOf) {
    btnEjemploForOf.addEventListener('click', () => {
      const palabra = 'javascript';
      let salida = '';
      for (const letra of palabra) {
        if (letra === 'a') continue; // saltar vocal 'a'
        salida += letra;
        if (letra === 'o') break; // detener si llega a 'o'
        salida += ' ';
      }
      if (resultadoForOf) resultadoForOf.textContent = `Entrada: ${palabra}\nSalida: ${salida}`;
    });
  }

})();

// Botón Cambiar nombre: solicita un nuevo nombre y actualiza la muestra
const btnCambiarNombre = document.getElementById('btnCambiarNombre');
if (btnCambiarNombre) {
  btnCambiarNombre.addEventListener('click', function () {
    const nuevo = prompt('Escribe el nuevo nombre:');
    if (nuevo === null) return; // cancel
    const v = nuevo.trim();
    if (!v) {
      alert('Nombre no válido');
      return;
    }
    if (muestraNombre) muestraNombre.textContent = v;
    if (nombreInput) nombreInput.value = v;
  });
}

// Demostración de tipos y typeof
const btnMostrarTipo = document.getElementById('btnMostrarTipo');
const tipoEjemplo = document.getElementById('tipoEjemplo');
const tipoResultado = document.getElementById('tipoResultado');
if (btnMostrarTipo) {
  btnMostrarTipo.addEventListener('click', function () {
    const sel = tipoEjemplo ? tipoEjemplo.value : 'string';
    let valor;
    switch (sel) {
      case 'string': valor = 'Hola'; break;
      case 'number': valor = 19; break;
      case 'boolean': valor = true; break;
      case 'undefined': valor = undefined; break;
      case 'null': valor = null; break;
      case 'bigint': valor = 9007199254740993n; break;
      case 'symbol': valor = Symbol('id'); break;
      case 'object': valor = { a: 1 }; break;
      default: valor = '---';
    }
    const tipo = typeof valor;
    if (tipoResultado) {
      tipoResultado.textContent = `Valor: ${String(valor)} — typeof: ${tipo}`;
    } else {
      alert(`typeof => ${tipo}`);
    }
  });
}

// Contador (operaciones de asignación)
const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnReiniciar = document.getElementById('btnReiniciar');
const valorContador = document.getElementById('valorContador');
let contador = 0;
function actualizarContador() {
  if (!valorContador) return;
  valorContador.textContent = String(contador);
  if (contador < 0) valorContador.classList.add('negativo');
  else valorContador.classList.remove('negativo');
}
if (btnSumar) {
  btnSumar.addEventListener('click', function () {
    contador += 1;
    actualizarContador();
  });
}
if (btnRestar) {
  btnRestar.addEventListener('click', function () {
    contador -= 1;
    actualizarContador();
  });
}
if (btnReiniciar) {
  btnReiniciar.addEventListener('click', function () {
    contador = 0;
    actualizarContador();
  });
}

// Estilo para contador negativo: añade clase si está presente en CSS
// ------------------------------------------------------------------
// Control: condicionales y ciclos (control.html)
// ------------------------------------------------------------------

// Clasificador de notas (0-5)
const notaInput = document.getElementById('notaInput');
const btnClasificarNota = document.getElementById('btnClasificarNota');
const resultadoNota = document.getElementById('resultadoNota');
if (btnClasificarNota) {
  btnClasificarNota.addEventListener('click', function () {
    const raw = notaInput ? notaInput.value.trim() : '';
    const num = Number(raw);
    if (raw === '' || Number.isNaN(num)) {
      if (resultadoNota) resultadoNota.textContent = 'Por favor escribe un número válido.';
      return;
    }
    if (num < 0 || num > 5) {
      if (resultadoNota) resultadoNota.textContent = 'La nota debe estar entre 0 y 5.';
      return;
    }
    let clasif = '';
    if (num >= 4.8) clasif = 'Superior';
    else if (num >= 4.2) clasif = 'Alto';
    else if (num >= 3.5) clasif = 'Básico';
    else clasif = 'Bajo';
    if (resultadoNota) resultadoNota.textContent = `Nota: ${num} → ${clasif}`;
  });
}

// Tabla de multiplicar
const numeroMultiplicar = document.getElementById('numeroMultiplicar');
const btnGenerarTabla = document.getElementById('btnGenerarTabla');
const tablaMultiplicar = document.getElementById('tablaMultiplicar');
if (btnGenerarTabla) {
  btnGenerarTabla.addEventListener('click', function () {
    const raw = numeroMultiplicar ? numeroMultiplicar.value.trim() : '';
    const n = Number(raw);
    if (raw === '' || Number.isNaN(n)) {
      if (tablaMultiplicar) tablaMultiplicar.textContent = 'Escribe un número válido.';
      return;
    }
    let out = '';
    for (let i = 1; i <= 10; i++) {
      out += `${n} x ${i} = ${n * i}\n`;
    }
    if (tablaMultiplicar) tablaMultiplicar.textContent = out;
  });
}

// Ejemplo for...of con break/continue
const btnEjemploForOf = document.getElementById('btnEjemploForOf');
const resultadoForOf = document.getElementById('resultadoForOf');
if (btnEjemploForOf) {
  btnEjemploForOf.addEventListener('click', function () {
    const palabra = 'javascript';
    let salida = '';
    for (const letra of palabra) {
      if (letra === 'a') continue; // saltar vocal a
      salida += letra;
      if (letra === 'o') break; // detener si llega a 'o'
      salida += ' ';
    }
    if (resultadoForOf) resultadoForOf.textContent = `Entrada: ${palabra}\nSalida: ${salida}`;
  });
}

