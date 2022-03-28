let valor1 = 12; //declaro variables cuyo valor puedo modificar
valor1 = 33;

const valor2 = "Hola"; //declaro variables cuyo valor no se podrán modificar
// valor2 = "Chau";

//nombre de variables aceptadas
let nombre_de_variable = "Hellow";
let nombreDeVariable = "Your welcome";
let sumarDosNumeros = 0;
let nombre = "José";
// let nombredepersona='Pepito'

//concatenar string con variables
let num1 = 45;
let num2 = 78;
let apellido = "Gonzalez";
let apellidoMayus = apellido.toLowerCase();

// console.log("La suma de los números es", num1 + num2);
// console.log("Hola, mi apellido es " + apellido);

// console.log(`Hola mi apellido es ${apellidoMayus}`);

/*
Tarea 1
Obtener un número aleatorio entre 1 y 100
Calcular su raíz cuadrada y mostrar en consola el resultado
Elevarlo a la quinta potencia y mostrar en consola el resultado
*/

let numeroAleatorio = Math.ceil(Math.random() * 100);
let raiz = Math.sqrt(numeroAleatorio);
let numeroDecimal = parseFloat(raiz.toFixed(2));

// console.log(
//   `La raiz cuadrada del número ${numeroAleatorio} es de ${numeroDecimal}`
// );

/*
Tarea 2
Según la siguiente lista de números: 120,250,78,96,-38,45.72,1450,2380
Mostrar en consola el menor
Mostrar en consola el mayor
*/

/*
Tarea 3
Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582

Plus: devolver las consignas de las tareas en un template string que indique qué es lo que estamos obteniendo.

*/

//condicionales

/*
si tal cosa se cumple
entonces hacer algo
sino
hacer otra cosa o no hacer nada
*/

//if else

// if (condition) {
//   //tareas
// }

// let numero = prompt("Ingrese un número");
// console.log(numero);
// numero = parseInt(numero);

//numero par
// if (isNaN(numero)) {
//   console.warn("El valor ingresado no es un número");
// } else {
//   if (numero % 2 === 0) {
//     console.log("El número es par");
//   } else {
//     //tarea
//     console.error("El número no es par");
//   }
// }

/*
===
>=
<=
!=
<
>
*/

let valor = true;
if (valor) {
  console.log("El valor es verdadero");
} else {
  console.warn("El valor es falso");
}

/*
VALORES EVALUADOS COMO FALSOS
- null
- undefined
- ""
- 0
- NaN

*/

/*
1.- En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta, asi:
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.

*/

// OR || y AND &&

// si el precio es mayor a 500 o menor o igual a 1000 entonces el descuento es del 5%
let monto = parseFloat(prompt("Ingrese el monto del repuesto"));

if (monto < 500) {
  console.log("Montos menores a $500 no tienen descuento");
} else if (monto >= 500 && monto <= 1000) {
  console.log("El descuento es de 5%");
  //Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
} else if (monto > 1000 && monto <= 7000) {
  console.log("El descuento es del 11%");
} else if (monto > 7000 && monto <= 15000) {
  console.log("El descuento es del 18%");
} else {
  console.log("El descuento es del 25%");
}
