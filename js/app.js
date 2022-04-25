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
