type Programador = {
    nombre : string,
    tecnologias : string[],
    tomaCafe?: boolean|null
}

let programador1 :Programador = {
    nombre : "Juan Diaz",
    tecnologias : ["React", "Angular", "Svelte"],
    tomaCafe : false  
}

let programador2 : Programador={
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    tomaCafe:null
}