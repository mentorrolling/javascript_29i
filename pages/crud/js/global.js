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

let btnLogin = document.querySelector("#btn-login");

let usuarioLogueado = JSON.parse(localStorage.getItem("user")) || null;

if (usuarioLogueado?.correo) {
  btnLogin.innerText = usuarioLogueado.correo;
} else {
  btnLogin.innerText = "Inicio de sesión";
}

const sesion = () => {
  if (usuarioLogueado) {
    localStorage.removeItem("user");
    btnLogin.innerText = "Inicio de sesión";
    location.replace("http://127.0.0.1:5501/pages/crud/index.html");
  } else {
    location.replace("http://127.0.0.1:5501/pages/crud/pages/login.html");
  }
};
