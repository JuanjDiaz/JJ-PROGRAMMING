"use strict";
console.log("Datos Primitivos");
//Booleanos
console.log("Booleans");
let estudiasteJS = true;
if (estudiasteJS) {
    console.log("Puedes seguir viendo el curso de TS");
}
else {
    console.log("Primero debes ver el curso de JS");
}
//Números
console.log("Numbers");
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocioné viendo a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
