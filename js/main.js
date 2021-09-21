const nombreUsuario1 = "sofia"
const nombreUsuario2 = "julian"
const nombreUsuario3 = "tomas"

let nombreDinamico = prompt("Decime tu nombre de usuario").toLowerCase();

//nombreDinamico = nombreDinamico.toLowerCase();

if((nombreDinamico === nombreUsuario1) || (nombreDinamico === nombreUsuario2) || (nombreDinamico === nombreUsuario3)){
    alert(`Hola ${nombreDinamico}!`);

    const passAdmin = "admin"
    const passAlumno = "alumno"
    let cont = prompt("Decime tu contraseña").toLocaleLowerCase();

    if(passAdmin == cont){
        alert("Ya podes administrar el sistema");
    } else if(passAlumno == cont){
        alert("Bienvenido alumno")
    } else {
        alert("Contraseña incorrecta")
    }

} else {
    alert(`${nombreDinamico} no estas registrado`)
}