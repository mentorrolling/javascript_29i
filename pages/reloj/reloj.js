let reloj = document.getElementById("reloj");

let relojito = null;

const mostrarReloj = () => {
  reloj.innerText = "";
  let hora = new Date().getHours();
  let minutos = new Date().getMinutes();
  let segundos = new Date().getSeconds();

  if (new Date().getHours() <= 9) {
    hora = `0${new Date().getHours()}`;
  }
  if (new Date().getMinutes() <= 9) {
    minutos = `0${new Date().getMinutes()}`;
  }
  if (new Date().getSeconds() <= 9) {
    segundos = `0${new Date().getSeconds()}`;
  }

  relojito = `${hora} : ${minutos} : ${segundos}`;
  reloj.innerText = relojito;
};

setInterval(() => {
  mostrarReloj();
}, 1000);
