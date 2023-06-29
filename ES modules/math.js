export const nombre = "Millos Jinete Torres";

//puedo exportar multiples variables al tiempo
export let x=10, y=20;

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

export default {
    multiplicar,
    dividir
}