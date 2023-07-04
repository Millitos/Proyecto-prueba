//import por defecto debe ir sin corchetes
//el export default se puede importar con cualquier nombre pq solo hay uno
import  math, {nombre, age, sumar, restar as subtract,Camper} from './math.js';

//para importar todo-> 
// import * as math from './math.js';

//variables
console.log(nombre);
console.log(age);

//funciones
console.log(sumar(3,5));
console.log(subtract(10,4));

//clase - instanciar
const camper = new Camper('Millos Jinete',23);
console.log(Camper); //imprime la informacion acerca de la clase
console.log(camper);
console.log(camper.showInformation); //imprime la informacion acerca del metodo
console.log(camper.showInformation());//imprime el metodo


//funcion exportada por defecto
console.log(math.multiplicar(4,3));
console.log(math.dividir(10,2));