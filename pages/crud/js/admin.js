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

let main = document.querySelector("#main");
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("productoModal"));
let productos = JSON.parse(localStorage.getItem("productos")) || [];
let indexUpdate = null;

const validarUsuario = () => {
  let usuario = JSON.parse(localStorage.getItem("user")) || null;

  if (usuario?.correo !== "admin@admin.com") {
    main.innerHTML = "";
    let col = document.createElement("div");
    col.classList = "row mt-3";

    let contenido = `<div class="col-12 col-md-6 offset-md-3">
    <div class="alert alert-danger" role="alert">
    No dispone de los permisos para acceder a este sitio
  </div>
  </div>`;

    col.innerHTML = contenido;
    return main.append(col);
  } else {
    cargarTabla();
  }
};

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  productos.map((item) => {
    let tr = document.createElement("tr");
    let cuerpo = `<th scope="row">${item.title}</th>
        <td>${item.description}</td>
        <td>${item.category}</td>
        <td>$${item.price}</td>
        <td>
        <div class=" d-flex gap-2">
        <i class="fa fa-pencil text-success puntero" onclick="abrirModalProducto(${item.id})" aria-hidden="true"></i>
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

//Abrir modal para actualizar Producto
const abrirModalProducto = (id) => {
  indexUpdate = productos.findIndex((item) => {
    return item.id == id;
  });

  document.querySelector("#tituloModal").value = productos[indexUpdate].title;
  document.querySelector("#precioModal").value = productos[indexUpdate].price;
  document.querySelector("#descripcionModal").value =
    productos[indexUpdate].description;
  document.querySelector("#categoriaModal").value =
    productos[indexUpdate].category;
  document.querySelector("#imagenModal").value = productos[indexUpdate].image;

  myModal.show();
};

//Actualizar datos de producto
const actualizarProducto = (event) => {
  event.preventDefault();
  productos[indexUpdate].title = document.querySelector("#tituloModal").value;
  productos[indexUpdate].description =
    document.querySelector("#descripcionModal").value;
  productos[indexUpdate].category =
    document.querySelector("#categoriaModal").value;
  productos[indexUpdate].price = document.querySelector("#precioModal").value;
  productos[indexUpdate].image = document.querySelector("#imagenModal").value;

  localStorage.setItem("productos", JSON.stringify(productos));
  myModal.hide();
  cargarTabla();
};

// cargarTabla();
validarUsuario();
