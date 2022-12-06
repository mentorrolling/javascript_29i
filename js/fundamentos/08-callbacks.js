//Callbacks
//son funciones que se envian como parámetros y se ejecutan despues de un método.

const numeros = [37, 11, 2, 15, 26, 52, 48, 8, 100];

let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});

//filter
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

let pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

let mayor10 = numeros.filter(function (num) {
  return num > 10;
});

//find
// El método find() devuelve el valor del primer elemento del array que cumple la condición del callback
let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge", "Lucas"];

let resultadoBusqueda = alumnos.find(function (alumno) {
  return alumno === "Lucas";
});

let resultadoBusquedaNumeros = numeros.find(function (numero) {
  return numero < 10;
});

//map
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let numerosDobles = numeros.map(function (num) {
  return num * 2;
});

let nombresMayus = alumnos.map(function (alumno) {
  return alumno.toUpperCase();
});

//forEach
alumnos.forEach(function (alumno) {
  let nombreMayuscula = alumno.toUpperCase();
  console.log("Hola, soy", nombreMayuscula);
});

/* Tarea 1
-----------
Dado 3 arreglos de números unir todos en uno solo y ordenarlos de mayor a menor

*/
let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];

function ejercicio1() {
  let numerosParaOrdenar = numeros1.concat(numeros2, numeros3);

  numerosParaOrdenar.sort(function (a, b) {
    return b - a;
  });

  console.log(numerosParaOrdenar);
}

/*
Tarea 2
---------
  Filtrar de un arreglo de personas todos los nombres que contengan la letra "m"
*/

let personas = [
  "Joaquín",
  "Daniel",
  "Magdalena",
  "Gonzalo",
  "Armando",
  "Samuel",
  "Valentina",
];

function obtenerNombreConLetra(letra) {
  let nombres = personas.filter(function (nombre) {
    return nombre.toUpperCase().includes(letra.toUpperCase());
  });

  return nombres;
}

console.log(obtenerNombreConLetra("m"));

/*
Tarea 3
----------
Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  // lenguajesOrdenados = lenguajes; NO VA
  let lenguajesOrdenados = lenguajes.slice(0);
  // lenguajesOrdenados=lenguajesOrdenados.concat(lenguajes)
  lenguajesOrdenados.sort().map(function (lenguaje, index) {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
}

//Aplicación de lista de compras

/*
- Agregar un producto a la lista
- Listar los productos de la lista numerados
- Eliminar un producto de la lista por su indice
- Buscar un producto
- Filtrar productos por una letra o palabra
*/

let lista = [];

//agregar productos
const addProducto = () => {
  let producto = prompt("Ingrese el producto");
  while (producto) {
    lista.push(producto.toUpperCase());
    alert(`El producto ${producto} fué agregado a la lista 👍`);
    producto = prompt("Ingrese el producto");
  }
  alert("Finalizado el ingreso de productos");
};

//listar productos
const listarProductos = () => {
  document.body.innerHTML = "";
  document.write("<h1>");
  document.write("Lista de productos");
  document.write("</h1>");
  document.write("<ol>");
  if (lista.length > 0) {
    lista.forEach((producto) => {
      document.write("<li>");
      document.write(producto);
      document.write("</li>");
    });
  } else {
    document.write("No hay productos en la lista");
  }
  document.write("</ol>");
};

//borrar producto
const borrarProducto = () => {
  let buscar = prompt("Ingrese el producto que desea eliminar");
  if (buscar) {
    // let indice = lista.findIndex((producto) => {
    //   return producto == buscar.toUpperCase();
    // });

    let indice = lista.indexOf(buscar.toUpperCase());
    if (indice > -1) {
      let validar = confirm(
        "Está seguro que desea eliminar el producto " + lista[indice] + "?"
      );
      if (validar) {
        lista.splice(indice, 1);
        alert("Producto eliminado 👍");
      }
    } else {
      alert("El producto no está en la lista");
    }
  } else {
    alert("Se canceló la operación");
  }
};

//Buscar un producto
const buscarProducto = (producto = prompt("Ingrese el producto a buscar")) => {
  if (producto) {
    // let encontrado = lista.find((item) => {
    //   return item == producto.toUpperCase();
    // });
    let encontrado = lista.includes(producto.toUpperCase());

    if (encontrado) {
      console.log(`El producto ${producto} está en la lista 👍`);
    } else {
      console.warn(`El producto ${producto} no está en la lista 😭`);
    }
  } else {
    alert("Operación cancelada");
  }
};

//filtrar productos

const filtrarProductos = (termino = prompt("Ingrese el término a buscar")) => {
  if (termino) {
    let resultado = lista.filter((item) => {
      return item.includes(termino.toUpperCase());
    });
    if (resultado.length > 0) {
      console.log("Productos encontrados");
      console.log("----------------");
      for (let index = 0; index < resultado.length; index++) {
        console.log(`${index + 1} - ${resultado[index]}`);
      }
    } else {
      alert("No se encontraron coincidencias");
    }
  } else {
    alert("Operación cancelada");
  }
};

//modificar un producto
const modificarProducto = (
  producto = prompt("Ingrese el producto a modificar")
) => {
  let index = lista.indexOf(producto.toUpperCase());

  if (index > -1) {
    let nuevoValor = prompt("Ingrese el nuevo valor");
    if (nuevoValor) {
      lista.splice(index, 1, nuevoValor.toUpperCase());
      alert("El producto ha sido modificado 👍");
    } else {
      alert("Se canceló la operación");
    }
  } else {
    alert("No se encuentra el producto ingresado");
  }
};
