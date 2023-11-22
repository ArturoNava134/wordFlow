console.log("conectado");


let arreglo = ["", ""];

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    if(arreglo[parseInt(ev.target.id)] == ""){
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }

    if(arreglo[0] !="" && arreglo[1] !=""){
        if(arreglo[0] == "derecha" && arreglo[1] == "izquierda"){
            document.querySelector("h1").innerHTML = "Muy bien!"
        }else{
            document.querySelector("h1").innerHTML = "Intentalo de nuevo!"
        }
    }
}