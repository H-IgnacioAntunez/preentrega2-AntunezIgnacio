//Mensaje de inicio
alert("PROMEDIOS - Ingrese sus usuarios y 3 notas para calcular el promedio de notas de la materia");

// Array para almacenar los datos de cada alumno
let usuarios = [];

// Función para calcular el promedio del array
function calcularPromedio(notas) {
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

// Función para obtener un número válido
function obtenerNumeroValido(mensaje) {
  let numero;
  do {
    numero = parseFloat(prompt(mensaje));
  } while (isNaN(numero));
  return numero;
}

// Función para el ingreso de usuarios y notas
function ingresarUsuario() {
  let nombreUsuario;
  do {
    nombreUsuario = prompt("Ingrese el nombre del alumno (o escriba 'no' para salir): ");
    if (!nombreUsuario) {
      alert("Por favor, ingrese al menos un alumno.");
    }
  } while (!nombreUsuario && nombreUsuario.toLowerCase() !== "no");

  if (nombreUsuario.toLowerCase() === "no") {
    if (usuarios.length === 0) {
      alert("No se ingresaron alumnos. El programa finalizará.");
    }
    return false;
  }

  let notas = {
    nombre: nombreUsuario,
    matematica: obtenerNumeroValido("Ingrese la nota de matemática para " + nombreUsuario + ": "),
    lengua: obtenerNumeroValido("Ingrese la nota de lengua para " + nombreUsuario + ": "),
    geografia: obtenerNumeroValido("Ingrese la nota de geografía para " + nombreUsuario + ": ")
  };

  usuarios.push(notas);
  return true;
}

// Variable para controlar el ingreso de alumnos
let continuarIngresandoUsuarios = true;

// Ciclo para ingresar alumnos
while (continuarIngresandoUsuarios) {
  if (!ingresarUsuario()) {
    break;
  }
}

if (usuarios.length === 0) {
  console.log("No se ingresaron usuarios. El programa ha finalizado.");
} else {
  // Mostrar la cantidad de alumnos analizados
  console.log(`La cantidad de alumnos analizados para el promedio es de: ${usuarios.length}`);

  // Mostrar las notas de cada alumno
  console.log("Notas de los Usuarios:");
  usuarios.forEach(usuario => {
    console.log(`${usuario.nombre}: Matemática: ${usuario.matematica}, Lengua: ${usuario.lengua}, Geografía: ${usuario.geografia}`);
  });

  // Objeto para almacenar los promedios totales
  let promediosTotales = {
    matematica: calcularPromedio(usuarios.map(usuario => usuario.matematica)),
    lengua: calcularPromedio(usuarios.map(usuario => usuario.lengua)),
    geografia: calcularPromedio(usuarios.map(usuario => usuario.geografia))
  };

  // Mostrar los promedios totales por materia
  console.log("\nPromedios Totales por Materia:");
  console.log("Matemática :", promediosTotales.matematica.toFixed(1));
  console.log("Lengua :", promediosTotales.lengua.toFixed(1));
  console.log("Geografía :", promediosTotales.geografia.toFixed(1));

  // Calcular y mostrar los promedios entre todos los alumnos
  let promedioTotalAlumnos = (promediosTotales.matematica + promediosTotales.lengua + promediosTotales.geografia) / 3;
  console.log("\nPromedio Total entre todos los alumnos: ", promedioTotalAlumnos.toFixed(1));
}
