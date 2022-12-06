//BOM
//Browser Object Model

// window

//Navigator
const obtenerUbicacion = function () {
  navigator.geolocation.getCurrentPosition(function (posicion) {
    console.log(posicion.coords.latitude, posicion.coords.longitude);
  });
};

//Location

// location.reload() //recargar la página
// location.href="https://google.com"
// location.assign('https://google.com')

// location.replace('https://rollingcodeschool.com')

//history
// history.go(1) //me lleva a la página siguiente en el historial
// history.go(-2) //me lleva dos páginas para atras en el historial

//Funciones de tiempo

//setTimeout
//nos permite ejecutar acciones DESPUÉS de transcurrido un cierto tiempo

const redireccionar = function () {
  setTimeout(function () {
    // location.href = "https://rollingcodeschool.com";
    console.log("Hola que tal");
  }, 3000);
};

//setInterval
//Nos permite ejecutar acciones CADA cierto tiempo
let repetir;

function contador() {
  let num = 0;
  repetir = setInterval(function () {
    console.log(num++);
  }, 1000);
}

function segundero() {
  repetir = setInterval(function () {
    console.log(new Date().getSeconds());
  }, 1000);
}

//clearInterval
//Detener los intervalos que yo defina

const detenerIntervalo = function () {
  clearInterval(repetir);
};

//Clse de muestra---------------05/12/22
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Tu ubicación actual es:");
  console.log(`Latitud : ${crd.latitude}`);
  console.log(`Longitud: ${crd.longitude}`);
  console.log(`Más o menos ${crd.accuracy} metros.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

//BOM
// navigator.onLine : Para saber si estoy conectado a internet

// navigator.deviceMemory: Devuelve la info de memoria del dispositivo

// navigator.geolocation: ubicación del dispositivo

// location.assign
// location.href
// location.replace

//history

//time

const inicio = () => {
  document.write(`<h3>Redireccionando a la página principal...</h3>`);
  setTimeout(() => {
    location.assign("https://rollingcodeschool.com");
  }, 2000);
};

let intervalo = null;
const fechaActualizada = () => {
  intervalo = setInterval(() => {
    let fecha = new Date();
    document.body.innerText = "";
    document.write(`<h3>${fecha}<h3>`);
  }, 1000);
};

const detener = () => {
  clearInterval(intervalo);
};

// inicio();
// fechaActualizada();

//DOM---------------------------------------------------------
