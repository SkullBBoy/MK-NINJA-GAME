document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("nombreNinja");
    const fotoninja = document.getElementById("fotoninja");
    const respuestafoto = document.getElementById("respuestafoto");
    const puntuacionElement = document.getElementById("puntuacion");
    const rachaElement = document.getElementById("racha");
    const btnRespuesta = document.getElementById("btnRespuesta")
    const ninjas = [
        { nombre: "scorpion" },
        { nombre: "subzero" },
        { nombre: "ermac" },
        { nombre: "reptile" },
        { nombre: "smoke" },
        { nombre: "rain" }
      ];

    let ninjaActual = parseInt(localStorage.getItem("NinjaActual")) || 0;
    let puntuacion = parseInt(localStorage.getItem("Puntuacion")) || 0;
    let racha = parseInt(localStorage.getItem("Racha")) || 0;
  
    function mostrarNinjaActual() {
      fotoninja.src = `./assets/${ninjas[ninjaActual].nombre}.jpg`;
      respuestafoto.src = "./assets/pregunta.png";
      puntuacionElement.textContent = `Puntuación: ${puntuacion}`;
      rachaElement.textContent = `Racha: ${racha}`;
    }
  
    mostrarNinjaActual();
  
    if(btnRespuesta){
        btnRespuesta.addEventListener("click", function() {
            const valorInput = input.value.toLowerCase();
        
            if (valorInput === "") {
              alert("Por favor, ingresa una respuesta.");
              return;
            }
        
            if (valorInput === ninjas[ninjaActual].nombre) {
              respuestafoto.src = "./assets/bien.png";
              input.value = "";
              puntuacion += 10;
              racha += 1;
              setTimeout(function() {
                ninjaActual = (ninjaActual + 1) % ninjas.length;
                localStorage.setItem("NinjaActual", ninjaActual);
                localStorage.setItem("Puntuacion", puntuacion);
                localStorage.setItem("Racha", racha);
                mostrarNinjaActual();
              }, 2500);
            } else {
              respuestafoto.src = "./assets/mal.png";
              input.value = "";
              puntuacion -= 10;
              if (puntuacion < 0) {
                puntuacion = 0;
              }
              racha = 0;
              setTimeout(function() {
                respuestafoto.src = "./assets/pregunta.png";
                localStorage.setItem("Puntuacion", puntuacion);
                localStorage.setItem("Racha", racha);
                mostrarNinjaActual();
              }, 2500);
            }
          });
    }
    
    
    
  });
  