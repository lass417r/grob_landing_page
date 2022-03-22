window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#spin_knap").addEventListener("click", lykkehjulSpin);
  // document.querySelector("#email").classList.remove("skjult");
}

function lykkehjulSpin() {
  // document.querySelector("#email").classList.add("skjult");
  var x = 1024;
  var b = 9999;
  var dgre = Math.floor(Math.random() * (x - b)) + b;
  document.querySelector("#lykkehjul_skive").style.transform =
    "rotate(" + dgre + "deg)";
  document
    .querySelector("#lykkehjul_skive")
    .addEventListener("animationend", start);
}
