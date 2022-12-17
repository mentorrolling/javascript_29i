const admin = {
  correo: "admin@admin.com",
  password: "12345678",
};

const logIn = (e) => {
  e.preventDefault();
  let correo = document.querySelector("#email");
  let pass = document.querySelector("#password");

  if (correo.value === admin.correo) {
    if (pass.value === admin.password) {
      localStorage.setItem("user", JSON.stringify(admin));
      location.replace("./admin.html");
    } else {
      alert("Correo o contraseña incorrecto");
    }
  } else {
    alert("Correo o contraseña incorrecto");
  }
};

document.querySelector("#formulario").addEventListener("submit", logIn);
