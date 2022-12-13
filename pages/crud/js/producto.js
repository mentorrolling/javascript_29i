const params = location.search.split("?");
console.log(params[1]);

let productos = JSON.parse(localStorage.getItem("productos")) || [];
let contenedor = document.querySelector("#contenedor");

const traerDatosProducto = () => {
  let producto = productos.find((item) => item.id == params[1]);

  if (producto) {
    let col = document.createElement("div");
    col.classList = "col";
    let tarjeta = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${producto.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${producto.description}</p>
          <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
        </div>
      </div>
    </div>
  </div>`;

    col.innerHTML = tarjeta;
    contenedor.append(col);
  } else {
    console.log("No existe un producto con el id recibido");
  }
};

traerDatosProducto();
