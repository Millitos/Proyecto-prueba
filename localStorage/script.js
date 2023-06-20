//1. agregar elementos en el localStorage
localStorage.setItem('company','campus');

//2. como guardar objetos o arrays en localStorage
const camper = {
    nombre:'Millos',
    celular:3138678393
};

//JSON.stringify
const camperString = JSON.stringify(camper);
console.log(camperString);
console.log(typeof camperString);

//3. registrar en localStorage un objeto
localStorage.setItem('camper',camperString);

//convertir array a string
const campers = ['Millos Jinete','Mario Andres','Lia Gabriela'];

//4. convertir array a string
const campersString = JSON.stringify(campers);
console.log(campersString);

//registro en localStorage la lista
localStorage.setItem('campers',campersString);

//OBTENER ELEMENTOS DESDE LOCALSTORAGE
const company = localStorage.getItem('company');
console.log(company);

//1. obtener un string con formato de objeto desde el localStorage
const camperObject = localStorage.getItem('camper');
console.log(camperObject);

//2. convertir un string con formato de objeto en un objeto real
console.log(JSON.parse(camperObject));

//3. convertir un string con formato de array en un array real
const campersArray = localStorage.getItem('campers');
console.log(campersArray); //string
console.log(JSON.parse(campersArray)); //array

// ELIMINAR DEL LOCALSTORAGE
localStorage.removeItem('company');

//ejercicio
//1.creo un elemento de tipo array
let arrayTest = ['juan','lucas','mario'];
//2.lo convierto string
const stringArrayTest = JSON.stringify(arrayTest);
//3.lo registro en el localstorage
localStorage.setItem('array',stringArrayTest);
//4.obtengo el array en forma de string y lo convierto a un array real
const arrayGet = localStorage.getItem('array');
const realArrayGet = JSON.parse(arrayGet);
console.log(realArrayGet);
//5.creo el nuevo elemento que agg al array
const elem = 'millos';
realArrayGet.push(elem);
console.log(realArrayGet);
//6.convierto nuevamente en string con el nuevo elemento
const arrayStringAgain = JSON.stringify(realArrayGet);
localStorage.setItem('array',arrayStringAgain);

