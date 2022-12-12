class Producto {
  constructor(
    id,
    title,
    price,
    description,
    category,
    image,
    favorito = false
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.favorito = favorito;
  }
}

let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  productos.map((item) => {
    let tr = document.createElement("tr");
    let cuerpo = `<th scope="row">${item.title}</th>
        <td>${item.description}</td>
        <td>${item.category}</td>
        <td>$${item.price}</td>
        <td>
        <div>
            <i class="fa fa-trash-o text-danger puntero" onclick="eliminarProducto(${item.id})" aria-hidden="true"></i>
            </div>
        </td>`;

    tr.innerHTML = cuerpo;
    cuerpoTabla.append(tr);
  });
};

//Crear producto-----------------
const guardarProducto = (event) => {
  event.preventDefault();
  let id = new Date().getTime();
  let titulo = document.querySelector("#titulo").value;
  let descripcion = document.querySelector("#descripcion").value;
  let categoria = document.querySelector("#categoria").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  let producto = new Producto(
    id,
    titulo,
    precio,
    descripcion,
    categoria,
    imagen
  );

  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));
  document.querySelector("#titulo").value = "";
  document.querySelector("#precio").value = "";
  document.querySelector("#descripcion").value = "";
  document.querySelector("#categoria").value = "";
  document.querySelector("#imagen").value = "";
  cargarTabla();
};

//-------------------------------

//Eliminar Producto--------------
const eliminarProducto = (id) => {
  const index = productos.findIndex((item) => {
    return item.id == id;
  });

  let validar = confirm(
    `Esta suguro que desea eliminar ${productos[index].title}?`
  );

  if (validar) {
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Producto eliminado");
    cargarTabla();
  }
};
//---------------------------------

cargarTabla();
