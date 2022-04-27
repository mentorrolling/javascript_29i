//Usuarios modelo

class Usuario {
  constructor(nombre, username, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.pass = password;
    this.estado = estado;
  }

  presentacion() {
    console.log("-----Tarjeta de presentación-----");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nombre de usuario: ${this.username}`);
  }
}
let user1 = new Usuario("Pepito", "pepe", "123456", false);
let user2 = new Usuario("Josefina", "jose2022", "123ttt");

Usuario.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`);
};

//Herencia

class Administrador extends Usuario {
  constructor(nombre, username, password, puesto, estado = true) {
    super(nombre, username, password, estado);
    this.puesto = puesto;
  }
  cambiarEstado() {
    this.estado = !this.estado;
  }
  superPresentacion() {
    this.presentacion();
    console.log(`Puesto: ${this.puesto}`);
  }
}

let admin = new Administrador(
  "Gabriela Perez",
  "gabyCopada",
  "holamiundo",
  true,
  "Gerente regional"
);

let admin2 = new Administrador(
  "Jose",
  "josecito",
  "123456",
  undefined,
  "Gerente de ventas"
);

/*
    Cuenta bancaria
    1-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
    - Una propiedad titular.
    - Una propiedad saldo, teniendo como valor inicial 0.
    - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    - Un método extraer() que permita retirar la cantidad pasada como parámetro.
    - Un método informar() que retorne la información del estado de la cuenta. 
    - Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
    
    */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor = 0) {
    if (valor > 0) {
      this.saldo += valor;
    } else {
      console.error("El monto debe ser mayor que 0");
    }
    this.informar();
  }
  extraer(valor = 0) {
    if (valor > this.saldo || valor < 0) {
      console.error("Monto inválido o Saldo insuficiente ");
    } else {
      this.saldo -= valor;
    }
    this.informar();
  }
  informar() {
    console.log(`-----Estado de Cuenta-----`);
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: $${this.saldo}`);
  }
}

let cuenta001 = new Cuenta("Alejandro Gordillo", 80000);
let cuenta002 = new Cuenta("Lucia Perez");

/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento >= 1930 && this.nacimiento <= 1948:
        console.log(
          `Perteneces a la generación Silent Generation y tu razgo característico es la Austeridad 😐`
        );
        break;
      case this.nacimiento >= 1949 && this.nacimiento <= 1968:
        console.log(
          `Perteneces a la generación Baby Boom y tu razgo característico es la Ambicion 🤑`
        );
        break;
      case this.nacimiento >= 1969 && this.nacimiento <= 1980:
        console.log(
          "Perteneces a la generación X y tu razco característico es Obsesión por el Éxito 😎"
        );
        break;
      case this.nacimiento >= 1981 && this.nacimiento <= 1993:
        console.log(
          "Perteneces a la generación Y y tu razco característico es Frustación 😖"
        );
        break;
      case this.nacimiento >= 1994 && this.nacimiento <= 2010:
        console.log(
          "Perteneces a la generación Z y tu razco característico es Irreverencia 😜"
        );
        break;
      default:
        console.log(
          "Perteneces a una generación nueva y tu rasgo característico está por descubrirse 🤔"
        );
        break;
    }
  }
  mostrarDatos() {
    console.log("------Datos personales------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Dni: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de nacimiento: ${this.nacimiento}`);
  }
  generarDni() {
    if (!this.dni) {
      for (let i = 0; i < 8; i++) {
        let numerito = Math.round(Math.random() * 9);
        this.dni += String(numerito);
      }
      console.log(`El DNI generado es: ${this.dni}`);
    }
  }
}
