/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras *
- primera palabra *
- última palabra *
- las palabras colocadas en orden inverso *
- las palabras ordenadas de la a la z  *
- las palabras ordenadas de la z a la a. *
- Sacar toda esta información en consola
*/

let frase = "La sonrisa es la mejor respuesta para una mirada";

let palabras = frase.toLowerCase().split(" ");

console.log(`La cantidad de palabras es de ${palabras.length}`);
console.log(`La primera palabra es "${palabras[0]}"`);
console.log(`La última palabra es "${palabras[palabras.length - 1]}"`);
console.log(palabras.reverse());
console.log(palabras.sort());

console.log(palabras.sort().reverse());

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

let lista = [23, 45, 78, 96, 145, 745];
let numero = parseInt(prompt("ingrese un número"));

if (lista.includes(numero)) {
  console.log(`El número ${numero} se encuentra en la lista 🙂`);
} else {
  console.log(`El número ingresado no está en la lista 😞`);
}
