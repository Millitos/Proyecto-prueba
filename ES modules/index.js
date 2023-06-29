//import por defecto debe ir sin corchetes
import  math, {nombre, sumar, restar as subtract} from './math.js';

//para importar todo-> 
// import * as math from './math.js';

console.log(nombre);
console.log(sumar(3,5));
console.log(subtract(10,4));

//funcion exportada por defecto
console.log(math.multiplicar(4,3));
console.log(math.dividir(10,2));