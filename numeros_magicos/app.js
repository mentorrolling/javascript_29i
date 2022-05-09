/*
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
let numero = 0;

const playGame = function () {
  numero = Math.ceil(Math.random() * 10);
  document.querySelector("#play").disabled = true;
  console.log(numero);
};

function probarNumero() {
  let numeroJugador = document.getElementById("numero_jugador").value;
  //   console.log(`El número del jugador es: ${numeroJugador}`);

  if (numeroJugador == numero) {
    alert("GANASTE!! 😎");
    document.getElementById("numero_jugador").value = "";
    document.getElementById("numero_jugador").focus();

    document.querySelector("#play").disabled = false;
  } else if (numeroJugador > numero) {
    alert("El número ingresado es MAYOR que el número mágico 😖");
    document.getElementById("numero_jugador").select();
  } else {
    alert("El número ingresado es MENOR que el número mágico 😖");
    document.getElementById("numero_jugador").select();
  }
}
