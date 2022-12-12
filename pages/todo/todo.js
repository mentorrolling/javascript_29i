//Clase para tareas
class Tarea {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
  // cambiarEstado() {
  //   this.done = !this.done;
  // }
}

let tareas = JSON.parse(localStorage.getItem("tareas")) || []; //array para guardar las tareas
let contenedorTarjetas = document.querySelector("#contenedor-tarjetas"); //contenedor de las tarjetas con tareas

//Función para agregar tareas
const agregarTarea = (event) => {
  event.preventDefault();
  let tarea = document.querySelector("#textTarea");
  if (tarea.value) {
    tareas.push(new Tarea(new Date().getTime(), tarea.value));
    localStorage.setItem("tareas", JSON.stringify(tareas));
    tarea.value = "";
    listarTareas();
  }
};

//Función para mostrar las tareas en tarjetas
const listarTareas = () => {
  contenedorTarjetas.innerHTML = "";
  tareas.map((item) => {
    const columna = document.createElement("div");
    columna.classList = "col-12 col-md-6 offset-md-3 mb-2";
    let tarjeta = `<div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <span 
          onclick="marcarTarea(${item.id})"
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

  //Para mostrar el mensaje de tareas pendientes
  let tareasPendientes = tareas.filter((item) => item.done === false);
  document.querySelector("#tareas_pendientes").innerText =
    tareasPendientes.length;
  document.querySelector("#tareas_total").innerText = tareas.length;
};

//Función para marcar las tareas como hechas
const marcarTarea = (id) => {
  //   console.log(id);
  let index = tareas.findIndex((item) => {
    return item.id === id;
  });
  console.log(index);

  tareas[index].done = !tareas[index].done;
  listarTareas();
};

//Función para borrar tarea
const eliminarTarea = (id) => {
  let index = tareas.findIndex((item) => {
    return item.id === id;
  });

  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  listarTareas();
};

//Inicio listando las tareas que haya en el arreglo
listarTareas();
