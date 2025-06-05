//Definimos las variables iniciales
let primerNumero = "";
let segundoNumero = "";
let operacion = "";
let isSegundoIngreso = false; 

// Obtenemos las referencias a los elementos del DOM para mostrar los datos
const display = document.getElementById("display");
const operacionDisplay = document.getElementById("operacionDisplay");

// Función para leer y asignar los números que ingresa el usuario
function leerNumero(num) {
  if (!isSegundoIngreso) {
    primerNumero += num;
    display.value = primerNumero;
  } else {
    segundoNumero += num;
    display.value = segundoNumero;
  }
}

// Función que identifica la operación seleccionada
function setOperacion(op) {
  if (primerNumero === "") return;

  operacion = op;
  isSegundoIngreso = true;

  // Convertimos el símbolo de operación en el nombre de la operación

  let tipoOperacion = "";
  switch (op) {
    case '+': tipoOperacion = "suma"; break;
    case '-': tipoOperacion = "resta"; break;
    case '*': tipoOperacion = "multiplicación"; break;
    case '/': tipoOperacion = "división"; break;
  }
  //Mostramos el tipo de operación

  display.value = `→ ${tipoOperacion}`;
  mensajeDisplay.textContent = ""; 

  setTimeout(() => {
    display.value = "";
    mensajeDisplay.textContent = `La operación seleccionada es: ${tipoOperacion}`;
  }, 1000);
}

// Función que realiza el cálculo según los valores y operación ingresados
function calcular() {
  if (primerNumero === "" || segundoNumero === "") return;

  const a = parseFloat(primerNumero);
  const b = parseFloat(segundoNumero);
  let result;


  // Validación para evitar división por cero

  if (operacion === '/' && b === 0) {
    alert("No se puede dividir por cero");
    limpiarCaja();
    return;
  }

  switch (operacion) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
  }

    // Mostramos el resultado en pantalla

  display.value = result;
  mensajeDisplay.textContent = "El resultado es:";
  primerNumero = result.toString();
  segundoNumero = "";
  isSegundoIngreso = false;
  operacion = "";
}

// Función para limpiar todos los datos y reiniciar la calculadora
function limpiarCaja() {
  primerNumero = "";
  segundoNumero = "";
  operacion = "";
  isSegundoIngreso = false;
  display.value = "";
  mensajeDisplay.textContent = "";
}
