//código de javascript

//   alert("Bienvenidos a Javscript!!");

//Mensajes en consola
console.log("Bienvenidos a Javascript!!");
console.log(5 + 3);

//mostrar en el navegador
document.write("Es un gusto saludarte en este curso 😎");

//Variables
//las variables son espacios en memoria que usamos para guardar datos

//declara: se las crea
//inicializa: asignar un valor

var nombre;
nombre = "Pepito";

let apellido = "Gonzalez";

const pi = 3.14;

apellido = "Perez";

// pi = "otra cosa";

//tipos de datos

//String
let cliente = "Fabrizio";
let alumno = "Roberto Gonzalez";
let mensaje = "Hola mundo, soy feliz";

//camelCase
let alumnoPrincipal = "dhkhh";
let alumno_malo = "gsfgs";

// UpperCamelCase
// let AlumnoSecundario=''

//number
let numero1 = 34;
let numero2 = -52;
let numero3 = 56.89;

//Boolean
let comprar = true;
let comer = false;

//null
let billetera = null;

//undefined
let caja;

//Array o arreglos
let arreglo = ["Pablo", 45, false];
let alumnos = ["José", "Alberto", "Florinda"];

//Object u Objetos
let persona = {
  nombre: "Josefina",
  apellido: "Mandarino",
  edad: 33,
};

//Operadores
//--------------
let num1 = 20;
let num2 = 2;

//Aritmeticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero3;
let division = numero1 / numero2;
let resto = num1 % num2;

//unitarios
++num2;
--num2;

//relacionales
num1 = 22;
num2 = "22";
console.log(num1 === num2);
console.log(num1 >= num2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

console.log("El resultado de la suma es " + suma);
console.log("El resultado de la resta es", resta);

//Negación
let activado = true;
console.log(!activado);
