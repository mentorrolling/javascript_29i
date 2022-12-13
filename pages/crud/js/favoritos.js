let contenedor = document.querySelector("#contenedor");

const productos = JSON.parse(localStorage.getItem("productos")) || [];

const listarProductos = (array) => {
  contenedor.innerHTML = "";
  const productosFavoritos = array.filter((producto) => {
    return producto.favorito === true;
  });

  if (productosFavoritos.length > 0) {
    productosFavoritos.map((item) => {
      let columna = document.createElement("div");
      columna.classList = "col mb-3";
      let tarjeta = `
          <div class="card  h-100" >
          <div class="contenedor-img">
          <img src="${
            item.image
          }" class="img-fluid rounded-start img-tarjeta" alt="${item.title}">
          </div>
          <div class="card-body pb-0">
            <h5 class="card-title">
            <a class="nav-link" href="./producto.html?${item.id}">
            ${item.title}
            </a>
            </h5>
          </div> 
          <div class="d-flex p-2 justify-content-end text-muted" >
          <i class="${
            item.favorito ? "fa fa-times fa-2x" : "fa fa-star-o fa-2x"
          }" aria-hidden="true" onclick="marcarFavorito(${item.id})"></i>
          </div>
        </div>`;

      columna.innerHTML = tarjeta;

      contenedor.append(columna);
    });
  } else {
    let columna = document.createElement("div");
    columna.classList = "col mb-3";
    let mensaje = `<h3>No hay productos para mostrar</h3>`;
    columna.innerHTML = mensaje;
    contenedor.classList = "row";
    contenedor.append(columna);
  }
};

const marcarFavorito = (id) => {
  let index = productos.findIndex((item) => item.id == id);
  productos[index].favorito = !productos[index].favorito;
  localStorage.setItem("productos", JSON.stringify(productos));
  listarProductos(productos);
};

listarProductos(productos);
