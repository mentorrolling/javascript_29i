let frase = prompt("ingresa una frase");

console.log(`Las vocales que aparecen en la frase: ${frase}`);

if (frase.includes("a")) {
  console.log("a");
}

if (frase.includes("e")) {
  console.log("e");
}

if (frase.includes("i")) {
  console.log("i");
}

if (frase.includes("o")) {
  console.log("o");
}

if (frase.includes("u")) {
  console.log("u");
}

//Bucles
//==========

//while
//-----------
// while (condition) {

//  //tareas o acciones que se tienen que ejecutar

// }

let vecesSumar = 10;
let totalSuma = 0;

while (vecesSumar > 0) {
  totalSuma += 1;
  // totalSuma = totalSuma + 1
  vecesSumar -= 1;

  console.log(
    `Total de la suma: ${totalSuma} | veces que se sumó: ${vecesSumar}`
  );
}
console.log(`Total: ${totalSuma}`);

// Tarea crear un script que calcule la tabla del 2
let tabla = 2;
let valor = 1;

while (valor <= 10) {
  console.log(`${tabla} x ${valor} = ${tabla * valor}`);
  valor++;
}

// do while--------------------------------------
let vueltas = 0;
let respuesta = "";

do {
  //acciones o tareas
  respuesta = prompt("Ingrese un nombre");
  console.log(`Hola ${respuesta}! Bienvenid@ 🎉`);
  vueltas--;
} while (vueltas > 0);

//Tarea
/*
Crear un script tipo trivia que pregunte al usuario la capital de un pais. El usuario tendrá tres intentos, si falla pierde.
*/

let respuestaCorrecta = "HELSINKI";
let acierto = false;
let contador = 3;

while (contador > 0 && acierto === false) {
  let respUsuario = prompt("Capital de Finlandia");

  if (respUsuario.toUpperCase() === respuestaCorrecta) {
    acierto = true;
    console.log("MUY BIEN! ACERTASTE!! 🤩");
  }

  contador--;
}

if (acierto === false) {
  console.error("LO SIENTO PERDISTE...LOSER 😞");
}

//for-----------------------------------

// for (let i = 0; i < 10; i++) {
//   //tareas o acciones

// }

//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla
let tablita = parseInt(prompt("Ingrese la tablita a calcular"));

for (let i = 1; i <= 10; i++) {
  console.log(`${tablita} x ${i} = ${tablita * i}`);
}

while (tabla) {
  console.log("===================");
  console.log(`Tabla del ${tabla}`);
  console.log("===================");
  for (let index = 1; index <= 10; index++) {
    console.log(`${tabla} x ${index} = ${tabla * index}`);
  }

  tabla = parseInt(prompt("Ingrese la tabla a calcular"));
}

// Tarea segun la cantidad de alumnos ingresada cargar los nombres

let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));

let lista = "";
let nombre = "";

if (!isNaN(cantidadDeAlumnos)) {
  for (let i = 0; i < cantidadDeAlumnos; i++) {
    nombre = prompt("Ingrese el nombre del alumno");
    //validarian si no me manda nada
    if (nombre && !parseInt(nombre)) {
      lista += `${nombre} \n`;
    } else {
      console.warn("Uno de los datos no fue válido");
    }
  }
  console.log(lista);
} else {
  console.log("La cantidad ingresada no es válida");
}
