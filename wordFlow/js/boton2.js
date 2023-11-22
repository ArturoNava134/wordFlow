document.addEventListener("DOMContentLoaded", function () {
    var buttonTop = document.getElementById("my-button-top");
    var buttonBottom = document.getElementById("my-button-bottom");
    
    buttonTop.classList.remove("hidden");
    buttonBottom.classList.remove("hidden");
  
    // Agregar la animación a ambos botones cuando se carga la página
    buttonTop.style.animation = "appear 1s ease forwards";
    buttonBottom.style.animation = "appear 1s ease forwards";
  });
  