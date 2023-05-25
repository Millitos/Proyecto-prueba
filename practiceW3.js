
let deparment = "Santander";
let city = "Bucaramanga";
let neighborhood = "San Francisco";
let adress = "cra 27 #44-50";

//document.write(deparment);
console.log(city);

//TALLER 2
//ejercicio 1
function average(grade1,grade2,grade3) {
    let prom;
    prom = (grade1+grade2+grade3)/3;
    if (prom <= 3.9) {
        console.log('Estudie');
    } else {
        console.log('becado');
    }
}
average(5,3,4);

//ejercicio 2
function number(n) {
    if ((n%2 == 0) && (n>10)) {
        console.log('the number is greater than 10 and is an even number ');
    } else if ((n%2 != 0) && (n>10)) {
        console.log('the number is greater than 10 but is not an even number');
    } else if ((n%2) == 0 && (n<10)) {
        console.log('the number is less than 10 and is an even number');
    } 
    else if(n==10){
        console.log('the number is ten');
    }else {
        console.log('the number is less than 10 but is not an even number');
    }

}number(8);

//ejercicio 3
function voltage(current,element) {
    let volt;
    volt = current*element;
    return `The voltage is: ${volt} volts`
}
console.log(voltage(5,3));

//ejercicio 4
function fmajor(n) {
    let names = ['millos','mario','lucas'];
    let ages = [30,43,57];
    let name,age,major;
    
    for (let x = 0; x < n; x++) {
        //names.push(name = prompt('enter the name: '));
        //ages.push(age = prompt('enter the age: '));
    }

    major = (ages.indexOf(Math.max(...ages)));

    console.log(major);
    console.log(`El mayor es: ${names[major]}, con ${ages[major]} anos`);
}
fmajor(3);

let list = [2,4,8,5,10,4,9];
console.log(list.indexOf(Math.max(...list)));
console.log(Math.max(...list))