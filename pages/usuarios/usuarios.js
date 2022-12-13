class Usuario {
  constructor(id, email, first_name, last_name, avatar) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    (this.last_name = last_name), (this.avatar = avatar);
  }
}

// const usuarios = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg",
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     avatar: "https://reqres.in/img/faces/10-image.jpg",
//   },
//   {
//     id: 11,
//     email: "george.edwards@reqres.in",
//     first_name: "George",
//     last_name: "Edwards",
//     avatar: "https://reqres.in/img/faces/11-image.jpg",
//   },
//   {
//     id: 12,
//     email: "rachel.howell@reqres.in",
//     first_name: "Rachel",
//     last_name: "Howell",
//     avatar: "https://reqres.in/img/faces/12-image.jpg",
//   },
// ];

// localStorage.setItem("usuarios", JSON.stringify(usuarios));

const data = JSON.parse(localStorage.getItem("usuarios")) || [];

let contenedorCrads = document.getElementById("contenedor-cards");

const listarUsuarios = (array) => {
  contenedorCrads.innerHTML = "";
  array.map((item) => {
    let columna = document.createElement("div");
    columna.classList = "col";

    let tarjeta = `<div class="card h-100">
      <div class="text-center">
        <img class="img-avatar" src="${item.avatar}" class="card-img-top" alt="${item.first_name}" />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <p class="card-text">
            ${item.email}
          </p>
        </div>
      </div>`;

    columna.innerHTML = tarjeta;

    return contenedorCrads.appendChild(columna);
    /*
        <div class="col">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
        */
  });
};

const ordenarPorApellido = (valor = 0) => {
  contenedorCrads.innerHTML = "";

  data.sort((u1, u2) => {
    if (u1.last_name < u2.last_name) {
      return -1;
    } else if (u1.last_name > u2.last_name) {
      return 1;
    } else {
      return 0; //si son iguales
    }
  });
  //   console.log(data);
  if (valor != 0) {
    data.reverse();
  }
  listarUsuarios(data);
};

const agregarUsuario = (event) => {
  event.preventDefault();
  let id = data.at(-1).id + 1;
  let first_name = document.getElementById("nombre").value;
  let last_name = document.getElementById("apellido").value;
  let email = document.getElementById("correo").value;
  let avatar = document.getElementById("imagen").value;
  let usuario = new Usuario(id, email, first_name, last_name, avatar);
  data.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(data));
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("imagen").value = "";
  ordenarPorApellido();
};

const filtrarUsuario = (event) => {
  event.preventDefault();
  let termino = document.querySelector("#textBuscar").value;

  let filtro = data.filter((item) => {
    return item.last_name.toUpperCase().includes(termino.toUpperCase());
  });

  // console.log(filtro);
  listarUsuarios(filtro);
};

listarUsuarios(data);
