"use strict";
let dev = {
    nombre: "Juan Diaz",
    tecnologias: ["React", "Angular", "Svelte"],
    tomaCafe: false
};
let dev2 = {
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    apellido: "XXXXxX",
    recibido: false
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(dev2);
