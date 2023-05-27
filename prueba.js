
// window.alert('alert')

console.log("hola mundo");
var num = 10;
console.log(num);
//VARIABLES
var a; //variable no inicializada
var b = "millos"; //variable inicializada
console.log(a);
console.log(b);
console.log(typeof(b));

a = 10;
var c = a;
console.log(c)

//JS STATEMENTS
//document.getElementById("demo").innerHTML = "hello dolly";
function major(){
    document.write("holis");
}


//OPEREACIONES ARTIMETICAS
var suma = 7 + 12;
console.log(suma);
var resta = 10 - 25;
console.log(resta);
var producto = 5 * 3;
console.log(producto);
var cociente = 10/3;
console.log(cociente.toFixed(2)); //para redcuri cantidad de decimales
var resto = 15 % 6;
console.log(resto);

//numeros decimales
var a = 10.4;
console.log(a);

//aumentar o reducir variables
var librosComprados = 10;
librosComprados = librosComprados + 1; //opc1
console.log(librosComprados);
librosComprados++; //opc2
console.log(librosComprados);
librosComprados += 1; //opc3 
console.log(librosComprados);

//escape comillas
var miCadena = "cadena de caracteres \"con comillas\"";
console.log(miCadena);
//opc 2
miCadena = "cadena de caracteres 'con comillas'";
console.log(miCadena);

//secuencias de escape
console.log("estoy aprendiendo \\ javaScript");
console.log("estoy aprendiendo \n javaScript");
console.log("estoy aprendiendo \r javaScript");
console.log("estoy aprendiendo \t javaScript");
console.log("estoy aprendiendo \b javaScript");

//concatenar strings
var nombre = "Millos" + " " + "Jinete";
console.log(nombre);
var nombreCompleto = "Mi nombre es: ";
console.log(nombreCompleto + nombre);

var edad = 23;
console.log(nombreCompleto + nombre + " y tengo " + edad +" años");
//número de caracteres de una cadena
console.log(nombre.length);
console.log(nombre[1]);
console.log(nombre[(nombre.length)-1]); //acceder al último caracter

//ARRAYS
var array = ['millos', 23];
console.log(array);
console.log(array[1]);

var arrayAnidado = [['millos',23] , ['mario',18]];
console.log(arrayAnidado[1][0]);
arrayAnidado[1][0] = "lia";
console.log(arrayAnidado);

//agregar elementos al array
var arrayN = ['millos','mario','lia'];
arrayN.push(arrayAnidado); //agg los elementos al final del array
console.log(arrayN);

//pop method
var save;
save = arrayN.pop(); //elimina el ultimo elemento del arreglo y lo retorna
console.log(save);

//shift method
save = arrayN.shift(); //elimina el primer elemento del arreglo y lo retorna 
console.log(save);

arrayN.unshift('jazmin'); //agg un elemento en la primera posicion del array
console.log(arrayN);

//FUNCIONES
function showMessage(){
    console.log('hey buddy!');
}
showMessage();

function sum(var1,var2){
    suma = var1 + var2;
    return suma;
}
console.log(sum(3,6));


console.log(JSON.stringify(arrayN)); //muestra el arreglo mas kiut 

console.log(sum("7",7)); //los convierte a string a ambos y los concatenas

console.log(true && false); //and
console.log(false||false); //or 
console.log(!true); //not

//CONDICIONALES
//if
var x = 5;
if (x>7){
    console.log('la condicion es verdadera');
}else {
    console.log('es falsa');
}

//else if
function valueSort(value){
    if (value%2 == 0){
        console.log('is divisible by two');
    }
    else if (value%3 == 0) {
        console.log('is divisible by three');
    }
    else{
        console.log('Is not divisible by the options');
}
}
valueSort(5);

//switch
function valueSort1(value){
    let rta;
    switch(value){
        case 1:
            rta = 'case 1';
            break;
        case 2:
            rta ='case 2';
            break;
        case 3:
            rta = 'case 3';
            break;
        default:
            rta = 'case not supported'
            break;
    }
    return rta;
}

console.log(valueSort1(4)); 

console.log(JSON.stringify(arrayN)); //muestra el arreglo mas kiut 

//OBJETOS
var object = {
    'nombre':'millos',
    'edad':23,
    peso:70, //se pueden omitir las comillas cuando es una sola palabra
    'numero de telefono':'3138678393'
};

console.log(object.peso);
console.log(object["numero de telefono"]);
console.log(object.edad);

var results = {
    1:['millos','enrique'],
    2:'mario',
    3:'lucas',
    4:'benito'
};

//acceder
var names = 'benito';
var position = 3;
console.log(results[position]);

//editar
results[position] = 'andres'; 
console.log(results[3]);
results[1].push('jinete');

//agregar
results[5] = 'freddy';

//eliminar
delete results[3];

var keys = Object.keys(results); //lista los keys
console.log(keys);
console.log(results);

//para obtener el key pasando el value
for(let i in results) {
    if (results[i] == names){
        console.log(i);
    }
}

//Para saber si un objeto tiene una propiedad
console.log(results.hasOwnProperty(2)); 

//CICLOS
//while
let i=0;
while ( i<3 ){
    console.log('millos');
    i++;
}

//for
var arre = [];
for (let i=0; i<5; i++){
    arre.push(i);
}
console.log(arre);

var myarray = [2,3,4,5,6];
for (let i of myarray) { //OF toma los valores del array
    console.log(i)
}

for (let i in myarray) {//in toma los indices o la ubicacion de los valores en el array
    console.log(i);
}

//do while
/*se usa cuando necesito pedir un valor al usuario y verificar si el valor
es valido o no, pero toca pedirselo al menos una vez, luego de pedir el valor
hay que verificar si el valor es valido, hasta que el usuario ingrese un valor 
valido*/
var x =8;
do {
    console.log(x);
    x++;
}while (x<10);

//ejercicio
var contacts = [
    {
        'nombre':'Millos',
        'apellido':'Jinete Torres',
        'numero':'3138678393',
        'gustos':['musica','libros']
    },
    {
        'nombre':'Mario',
        'apellido':'Torres Lugo',
        'numero':'3138632393',
        'gustos':'psicologia'
    },
    {
        'nombre':'Lia',
        'apellido':'Rangel Torres',
        'numero':'3138678373',
        'gustos':['musica','pizza']
    }
]

function seekContacts(nombre,atri){
    for (let i in contacts){
        if (contacts[i].nombre === nombre) {
            return contacts[i][atri] || `that attribute doesn't exists`; //OR 
        }
    }
    return `The user ${nombre} is not in the contacts`; 
} 

console.log(seekContacts('Millos','gustos'));

//generar valores aleatorios entre 0 y un valor limite superior
function randomGenerator(boundary){
    return Math.floor(Math.random()*boundary);
}

console.log(randomGenerator(50));

//operador terniario
function returnLower(x,y){ //devuelve el valor menor
    return x<y ? x : y;
}
console.log(returnLower(6,8));
console.log(returnLower(7,3));

var k = 5;
var l = 9;
console.log(k > l ? k+2 : l*3);

//varias condiciones con el operador terniario
function compareNumbers(a,b) {
    return a == b ? 'a y b son iguales'  //if
        : a < b ? 'a es menor que b'   //else if
        : 'a es mayor que b';          //else
}
console.log(compareNumbers(1,3));

//mutar un arreglo definido constante
const MY_ARRAY = [1,2,3,4];
MY_ARRAY[0] = 5;
MY_ARRAY[1] = 6;
MY_ARRAY[2] = 7;
MY_ARRAY[3] = 8;
console.log(MY_ARRAY);

//hacer un objeto inmutable
let colores = {
    'nombre':'millos',
    'apellido':'jinete',
    'apellido2':'torres'
}
Object.freeze(colores);

//Funciones flecha
const date = () => new Date();

//con parametros
const sumarf = (x) => x + 3;
console.log(sumarf(2)); 

const concatenadeArrays = (array1,array2) => array1.concat(array2);
console.log(concatenadeArrays([1,2,3],[4,5,6]));

//si la funcion tiene varias lineas
const sumar = (a,b) => { //hay que mantener los corchetes
    let num = 6;
    return num + a + b;
}; 
console.log(sumar(2,3));

//valores por defecto
const incrementar = (num , valor = 1) => num + valor;
console.log(incrementar(3)); //no es necesario poner un segundo argumento
console.log(incrementar(3,4)); //de igual manera se puede pasar el argumento y este se edita

//operador rest
//convierte todos los argumentos en un arreglo
function mifuncion(...args) {
    console.log(args);
    console.log(args.length);
}
//mifuncion(1,2,3,4); //se puede pasar cualquier cantidad de argumentos
mifuncion([1,2,3],[4,5,6]);

//spread
const numeros = [1,2,3];
const sumarr = (x,y,z) => x + y + z;
console.log(sumarr(...numeros)); //separa los numeros individualmente para pasarlos como argumentos

//sintaxis de desestructuracion
//para poder asignar los atributos de un objeto a variables en el codigo
const usuario = {
    nombree:'millos enrique',
    edadd:20
};
const {nombree,Edad} = usuario;
console.log(nombree); //desestructurado
console.log(usuario.nombree); //no desestructurado

var coordenadas = {
    xi:1,
    yi:3,
    zi:6
}
const {xi,yi,zi} = coordenadas;
console.log(xi);
console.log(zi);

//desestructuracion objetos anidados
const user = {
    Millos:{
        old:23,
        email:'millos@hotmail.com'
    }
};
const {Millos:{old,email}} = user;
console.log(old);
console.log(email);

//para desestructurar asignando al atributo del objeto un nombre de variable nuevo
const {Millos:{old:EDAD, email:CORREO}} = user;
console.log(EDAD);
console.log(CORREO);