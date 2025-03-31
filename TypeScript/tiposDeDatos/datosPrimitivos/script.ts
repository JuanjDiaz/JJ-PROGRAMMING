console.log("Datos Primitivos")

//Booleanos
console.log("Booleans")
let estudiasteJS: boolean = true

if (estudiasteJS) {
    console.log("Puedes seguir viendo el curso de TS")
} else {
    console.log("Primero debes ver el curso de JS")
}

//Números
console.log("Numbers")
let interMiami: number | null | undefined=11
let fcDallas: number=11
let messi:number=1
let juegaMessi:boolean=true

let palabras:string = "Me emocioné viendo a Messi"

function jugar(equipo1:number, equipo2: number, juegaMessi:boolean): void {
    let motivo: string = '';
    if (juegaMessi) {
        equipo1+=messi
        motivo=" porque juega Messi"
    }
    if (equipo1>equipo2) console.log(`Gana Inter Miami${motivo}`)
    if (equipo1==equipo2) console.log("Empatan")
    if (equipo1<equipo2) console.log("Gana FC Dallas")
}

jugar(interMiami,fcDallas,juegaMessi)