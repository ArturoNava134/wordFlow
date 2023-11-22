document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("my-button");
  button.classList.remove("hidden");

  // Agregar la animación cuando se carga la página
  button.style.animation = "appear 1s ease forwards";
});
