// Lytter efter om DOM'en er loadet og starter functionen start
window.addEventListener("DOMContentLoaded", start);

// Her lytter vi efter klik på "Spin" knappen
function start() {
  document.querySelector("#spin_knap").addEventListener("click", lykkehjulSpin);
}

// I denne function får vi lykkehjulet til at spinne med en random grad.
function lykkehjulSpin() {
  // Her fjerner vi eventListener så man ikke kan trykke imens animationen er igang.
  document
    .querySelector("#spin_knap")
    .removeEventListener("click", lykkehjulSpin);
  // Her har vi lavet nogle variabler med forskellige tal.
  var x = 1024;
  var b = 9999;
  // Her laver vi en variable ved hjælp af Math random og de tidligere variabler.
  var dgre = Math.floor(Math.random() * (x - b)) + b;
  // Her vælger vi lykkehjulet og får det til at rotere det antal grader
  // linjen over har udregnet.
  document.querySelector("#lykkehjul_skive").style.transform =
    "rotate(" + dgre + "deg)";
  // Her tilføjer vi eventListener igen.
  document.querySelector("#spin_knap").addEventListener("click", lykkehjulSpin);
  // Her starter vi scriptet forfra og gør klar til endnu et spin.
  document
    .querySelector("#lykkehjul_skive")
    .addEventListener("animationend", start);
}
