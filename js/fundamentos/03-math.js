//Math
let num1 = 78.9;

//Redondeando números
console.log(Math.floor(num1));
console.log(Math.ceil(360.22));
console.log(Math.round(125.15));
//Obtener el valor máximo de una lista de números
console.log(
  `El número máximo de la lista es ${Math.max(
    56,
    23,
    -802,
    1000,
    2356,
    1000000,
    2563987
  )} `
);
//Obtener el valor mínimo
console.log(
  `El número mínimo de la lista es ${Math.min(
    56,
    23,
    -802,
    1000,
    2356,
    1000000,
    2563987
  )}`
);

//Convertir a número entero
let numero = 67.8523169;
console.log(parseInt(numero));
//Convertir número a decimal
let numero2 = "456.23598";
console.log(parseFloat(numero2));

//Elevar un número a una potencia
let base = 12;
let exponente = 2;

console.log(
  `El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(
    base,
    exponente
  )}`
);

//Raiz cuadrada
console.log(`La raiz cuadrada de 64 es ${Math.sqrt(64)}`);

//Números aleatorios
console.log(Math.ceil(Math.random() * 50));

//Devolver dos decimales
//67.8523169
console.log(Math.round(numero * 100) / 100);

console.log(parseFloat(numero.toFixed(2)));

/*
Tarea 1
-------

- Obtener un número aleatorio entre 1 y 100

- Calcular su raiz cuadrada y mostrar en consola el resultado
- Elevarlo a la quinta potencia y mostrar en consola el resultado


Tarea 2
--------

- Según la siguiente lista de números 120,250,78,96,-38,45.72,1450,2380
- Mostrar en consola el menor 
- Mostrar en consola el mayor

Tarea 3
--------

- Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582
*/

let numerito = prompt("Ingrese un número decimal");

console.log(numerito * 2);

console.log(`El número ${numerito} redondeado es ${Math.round(numerito)}`);
