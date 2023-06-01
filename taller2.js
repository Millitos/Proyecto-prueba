
// let deparment = "Santander";
// let city = "Bucaramanga";
// let neighborhood = "San Francisco";
// let adress = "cra 27 #44-50";

// //document.write(deparment);
// console.log(city);

// //TALLER 2
// //ejercicio 1
// function average(grade1,grade2,grade3) {
//     let prom;
//     prom = (grade1+grade2+grade3)/3;
//     if (prom <= 3.9) {
//         console.log('Estudie');
//     } else {
//         console.log('becado');
//     }
// }
// average(5,3,4);

// //ejercicio 2
// function number(n) {
//     if ((n%2 == 0) && (n>10)) {
//         console.log('the number is greater than 10 and is an even number ');
//     } else if ((n%2 != 0) && (n>10)) {
//         console.log('the number is greater than 10 but is not an even number');
//     } else if ((n%2) == 0 && (n<10)) {
//         console.log('the number is less than 10 and is an even number');
//     } 
//     else if(n==10){
//         console.log('the number is ten');
//     }else {
//         console.log('the number is less than 10 but is not an even number');
//     }

// }number(8);

// //ejercicio 3
// function voltage(current,element) {
//     let volt;
//     volt = current*element;
//     return `The voltage is: ${volt} volts`
// }
// console.log(voltage(5,3));

// //ejercicio 4
// function fmajor(n) {
//     let names = ['millos','mario','lucas'];
//     let ages = [30,43,57];
//     let name,age,major;
    
//     for (let x = 0; x < n; x++) {
//         names.push(name = prompt('enter the name: '));
//         ages.push(age = prompt('enter the age: '));
//     }

//     major = (ages.indexOf(Math.max(...ages)));

//     console.log(major);
//     console.log(`El mayor es: ${names[major]}, con ${ages[major]} años`);
// }
// fmajor(3);

// let list = [2,4,8,5,10,4,9];
// console.log(list.indexOf(Math.max(...list)));
// console.log(Math.max(...list))
// console.log(list.indexOf(2))

// //ejercicio 5
// function fiveExercise(){
//     let num1 = prompt('enter the first number: ');
//     let num2 = prompt('enter the second number: ');

//     if (num1>num2){
//         window.alert(`la suma es: ${num1+num2}`);
//     } else {
//         window.alert(`el producto es: ${num1*num2}`);
//         window.alert(`la division es: ${num1/num2}`);
//     }
// }
// fiveExercise();

//ejercicio clase 29/05/2023
/*elabore un programa que muestre la n-ésima potencia de varios numeros dados por el usuario
el proceso termina cuando la base leida sea cero*/

//const potencia = (fbase,fn) => fbase**fn ; //flecha


// do {
//     var base = prompt("Enter the base number: ") 
//     if (base == 0){
//         alert("Programa terminado...");
//     }else {
//     n = prompt("enter the number power: ")
//     console.log(potencia(base,n));
//     alert(`la potencia es ${potencia(base,n)}`);
// }
// }while (base!=0);

//ejercicio listas

//generador de matrices n*m
var matrixGen = (nRows,nColumns) => {
    let matrix = []; //creo un array vacío que va a almacenar la matriz    
    for (let i = 0; i < nRows; i++) { //crea una cantidad de listas dependiendo del valor pasado como argumento
        let row =[]; //creo la lista vacía que va a almacenar los datos (columnas)
        for (let j = 0; j<nColumns;j++) { //crea una cantidad de elementos según el numero ingresado por argumento
            row.push(Math.floor(Math.random()*101)); //crea valores aleatorios
        }
        matrix.push(row); //agrego cada fila con los elementos dentro de ella a la matriz
    }
    return matrix;
}

const linealizer = matr => matr.flat().sort((a,b) => a-b); //función que toma la matriz y la linealiza

const Sorted = matri => {
    let rows = matri.length; //variable que guarda el numero de filas
    let cols = matri[0].length; //variable que guarda el numero de columnas
    let sort = linealizer(matri); //toma la matriz que pide como parametro y llama a la función que la linealiza
                              //sort guarda el vector de datos como una sola línea

    let newMatrix = []; //variable para almacenar la matriz ordenada
    let index = 0;  //para recorrer el número de elementos linealizados en el vector plano
    for(let i = 0; i < rows; i++) {
        let row = []; //crea otra vez la cantidad de filas que tenia inicialmente la matriz
        for (let j = 0; j < cols; j++) { //organiza nuevamente en cada fila el numero de elementos que tenia la matriz inicial 
            row.push(sort[index]); //recorre cada elemento del vector plano y lo agrega en la fila correspondiente
            index++;
        }
        if (i%2 == 0) {
            newMatrix.push(row); //si el #fila es modulo exacto de 2 la agrega normal
        }else {
            newMatrix.push(row.reverse()); //si el #fila no es modulo exacto la agrega en reversa
        }
    }
    return newMatrix;
}

let matrix = matrixGen(3,3);
let sorted = Sorted(matrix);
console.log(matrix);
console.log(sorted);



