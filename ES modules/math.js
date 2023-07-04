//exportar variables
export const nombre = "Millos Jinete Torres";
export const age = 23;

//puedo exportar multiples variables al tiempo
export let x=10, y=20;

//exportar funciones
export function sumar(a,b){
    return a+b;
};

export function restar(a,b){
    return a-b;
};

export function multiplicar(a,b){
    return a*b;
};

function dividir(a,b){
    return a/b;
};

//exportar clases
export class Camper{
    constructor(camperName,camperAge){
        this.name = camperName;
        this.age = camperAge;
    }

    showInformation(){
        return `${this.name} tiene ${this.age} anhos`;
    }
}

//default 
//por modulo solo se puede tener un export default
export default {
    multiplicar,
    dividir
}