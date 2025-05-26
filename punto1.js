var prompt = require('prompt-sync')()

//va sumando los valores del 1 al 6 pero en cada numero par resta 1 a la suma total

let x = 1; //define el contador
let total = 0; //variable que guarda la suma

let numImpares = 0
let numPares = 0
let limite
let numMax

limite = parseInt(prompt("Ingresa el limite deseado: "))
numMax = parseInt(prompt("¿Hasta que numero quieres sumar?: "))

do { //ciclo que se repite al menos una vez 
    total += x; // suma el valor de x al total

    if (total < limite){ //--> analiza que la suma hecha no haya superado el limite

        if (x % 2 === 0) { //analiza si el valor de x es par o no
            total -= 1; //en caso de ser par, resta 1 al total

            numPares++; //--> suma 1 cada que llega a un numero par

        } else {

            numImpares++ //--> suma 1 cada que llega a un numero impar

        }
        x++; //incrementa en 1 el valor de x

    } else { //--> en caso de haber superado el limite

        total -= x; //--> deshace la suma realizada en el total
        console.log("Limite de 15 superado");
        console.log("Detenido en la iteración numero ", x);
        x = numMax + 1 // --> detiene el ciclo automaticamente
    }
 
} while (x <= numMax); //analiza si x es menor a 6 para poder repetir el ciclo
console.log(total); //al finalizar muestra el valor total
console.log("Numeros Impares sumados = ", numImpares);
console.log("Numeros Pares sumados = ", numPares);
