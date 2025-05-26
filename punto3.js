var prompt = require('prompt-sync')();

let cantUsuarios

cantUsuarios = parseInt(prompt("Ingresa la cantida de usuarios a atender:   "))

while(cantUsuarios > 0){
    let seguir = false
    do {
        let tipoUsuario = prompt("Eres estudiante, docente o visitante:     ")
        let cantLibros = parseInt(prompt("Ingresa la cantidad de libros que vas a llevar:   "))

        switch (tipoUsuario) {
            case "estudiante":
                if(cantLibros > 3){
                    console.log("Lo sentimos no tienes permitido llevar esa cantidad de libros");
                    seguir = false
                } else {
                    console.log("Gracias por visitarnos vuelve pronto!");
                    seguir = true
                }
                break;

            case "docente":
                if(cantLibros > 5){
                    console.log("Lo sentimos no tienes permitido llevar esa cantidad de libros");
                    seguir = false
                } else {
                    console.log("Gracias por visitarnos vuelve pronto!");
                    seguir = true
                }
                break;

            case "visitante":
                if(cantLibros > 1){
                    console.log("Lo sentimos no tienes permitido llevar esa cantidad de libros");
                    seguir = false
                } else {
                    console.log("Gracias por visitarnos vuelve pronto!");
                    seguir = true
                }
                break;
            default: console.log("Tipo de usuario incorrecto");
                break;
        }
    } while(seguir === false)
    cantUsuarios--
}