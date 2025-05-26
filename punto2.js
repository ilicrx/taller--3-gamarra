var prompt = require('prompt-sync')();

let tiempoUso
let advertencias = 0

do {
    tiempoUso = parseInt(prompt("Ingresa el tiempo de tu ducha: "))

    if(tiempoUso <= 180){
        console.log("Felicidades estás ahorrando agua");
    } else {
        console.log("Advertencia: estás malgastando agua, cuidado");
        advertencias++
        console.log("Numero de advertencias: ", advertencias);
    }
} while (advertencias < 5) {
    console.log("Limite de advertencia alcanzado");
}