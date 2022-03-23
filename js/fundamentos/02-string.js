// alert("Hola soy fan de Javascript");

// document.write("Hello World!!");

// document.write(3 + 5);

// console.log(3 + 5);

//String

let nombre = "Eugenio Daniel";
let apellido = "Marinaro";
let edad = 38;
let frase = "               Bienvenidos a la clase     ";

//cuantos caracteres
console.log("El nombre tiene", nombre.length, "caracteres");
console.log(frase.length);

//como quitar los espacios en blanco adelente y atras
console.log(frase);
frase = frase.trim();

console.log(frase.length);
console.log(frase);

//mayúsculas
console.log(apellido.toUpperCase());
console.log(frase.toUpperCase());
//minúsculas
console.log(nombre.toLowerCase());
//extraer una letra
console.log(frase.charAt(10));
console.log(frase.substring(2));
//separar letras
console.log(apellido.split(""));
console.log(frase.split(" "));

let texto = "Hola-que-así";
let arregloTexto = texto.split("-");
//unir el arreglo de palabras
console.log(arregloTexto.join(" "));

//Obtener la ultima letra de una palabra o frase
console.log(apellido.length);
console.log(apellido.charAt(7));
apellido = "Polich";
console.log(apellido.charAt(apellido.length - 1));

//Tarea
let palabra = "marmota";

//pasarla a mayúsculas
console.log(palabra.toUpperCase());
//pasarla a minúsculas
console.log(palabra.toLowerCase());
//Capitalizar la palabra (la primera letra esté en mayúscula)

console.log(palabra.charAt(0).toUpperCase());

// let primerLetra = palabra.charAt(0);
// let primerLetraMayus = primerLetra.toUpperCase();
// let restoPalabra = palabra.substring(1);
// let palabraCapitalizada = primerLetraMayus + restoPalabra;
let palabraCapitalizada =
  palabra.charAt(0).toUpperCase() + palabra.substring(1);
console.log(palabraCapitalizada);

//template string
// console.log('Bienvenido nombre apellido, gracias por tu visita')
console.log(
  `Bienvenido ${nombre} ${apellido}, gracias por tu visita, tu edad es de ${edad}`
);
