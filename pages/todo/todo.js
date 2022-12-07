class Tarea {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
  cambiarEstado() {
    this.done = !this.done;
  }
}

let tareas = [];
let contenedorTarjetas = document.querySelector("#contenedor-tarjetas");

const agregarTarea = (event) => {
  event.preventDefault();
  let tarea = document.querySelector("#textTarea");
  if (tarea.value) {
    tareas.push(new Tarea(new Date().getTime(), tarea.value));
    tarea.value = "";
    listarTareas();
  }
};

const listarTareas = () => {
  contenedorTarjetas.innerHTML = "";
  //   contenedorTarjetas.remove();

  tareas.map((item) => {
    const columna = document.createElement("div");
    columna.classList = "col-12 col-md-6 offset-md-3 mb-2";
    let tarjeta = `<div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <span 
          onclick="marcarTarea(${item.id})" id="text${item.id}"
          class="${item.done ? "text-decoration-line-through" : ""}"
          >${item.text}</span>
          <div>
          <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${
            item.id
          })">x</button>
          </div>
        </div>
      </div>`;
    columna.innerHTML = tarjeta;
    contenedorTarjetas.append(columna);
  });

  let tareasPendientes = tareas.filter((item) => item.done === false);

  document.querySelector("#tareas_pendientes").innerText =
    tareasPendientes.length;
  document.querySelector("#tareas_total").innerText = tareas.length;
};

const marcarTarea = (id) => {
  //   console.log(id);
  let index = tareas.findIndex((item) => {
    return item.id === id;
  });
  console.log(index);

  tareas[index].cambiarEstado();
  listarTareas();
};

const eliminarTarea = (id) => {
  let index = tareas.findIndex((item) => {
    return item.id === id;
  });

  tareas.splice(index, 1);
  listarTareas();
};

listarTareas();
