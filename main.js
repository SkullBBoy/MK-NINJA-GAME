document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("nombreNinja");
    const fotoninja = document.getElementById("fotoninja");
    const respuestafoto = document.getElementById("respuestafoto");
    const btnRespuesta = document.getElementById("btnRespuesta")
    let ninjaActual = localStorage.getItem("NinjaActual");
    const ninjas = [
      { nombre: "scorpion" },
      { nombre: "subzero" },
      { nombre: "ermac" },
      { nombre: "reptile" },
      { nombre: "smoke" },
      { nombre: "rain" }
    ];
  
    
    if (ninjaActual === null) {
      ninjaActual = 0;
    } else {
      ninjaActual = parseInt(ninjaActual);
    }
  
    function mostrarNinjaActual() {
      fotoninja.src = `./assets/${ninjas[ninjaActual].nombre}.jpg`;
      respuestafoto.src = "./assets/pregunta.png";
    }
  
    mostrarNinjaActual();
  
if(btnRespuesta){
    btnRespuesta.addEventListener("click", nashe => {
        const valorInput = input.value.toLowerCase();
    
        if (valorInput === "") {
          alert("Por favor, ingresa una respuesta.");
          return;
        }
    
        if (valorInput === ninjas[ninjaActual].nombre) {
          respuestafoto.src = "./assets/bien.png";
          input.value = "";
          setTimeout(function() {
            ninjaActual = (ninjaActual + 1) % ninjas.length;
            localStorage.setItem("NinjaActual", ninjaActual);
            mostrarNinjaActual();
          }, 2500);
        } else {
          respuestafoto.src = "./assets/mal.png";
          setTimeout(function() {
            respuestafoto.src = "./assets/pregunta.png";
          }, 2500);
        }
      });
}

    
  });
  