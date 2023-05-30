
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
console.log(arrayAnidado[1][0]); //acceder a un elemento del array
arrayAnidado[1][0] = "lia"; //editar un elementro del array
console.log(arrayAnidado);

//para saber si un objeto es un array
console.log(Array.isArray(array)); //opcion1
console.log(array instanceof Array); //opcion2

//agregar elementos al array push
var arrayN = ['millos','mario','lia'];
arrayN.push(arrayAnidado); //agg los elementos al final del array
arrayN[arrayN.length] = 'jacinto'; //tambien sirve para agregar elementos
console.log(arrayN);

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);

//crear array con la keyword 'new'
const carss = new Array('mazda','toyota','BMW');
console.log(carss);

//toString method
console.log(carss.toString());

//objeto con metodo y funcion dentro de un array
const sArray = new Array({1:{name:'Millos',age:23,presentarse(){return `Hola mi nombre es ${this.name}`}}},saludar = () => 'Hola!');
console.log(sArray[0][1].name); //acceder a un elemento del objeto
console.log(sArray[0][1].presentarse()); //accediendo al metodo
console.log(sArray[1]()); //acceduendo a la funcion

//forEach method
const myFunction = (value) => value;
console.log(carss.forEach(myFunction));

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

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
             //object.map(parametro => parametro.length);
console.log(materials.map(material => material.length));

//funcion flecha con nombre
let bob = a => a+100;
console.log(bob(2));

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

const edade = ({edadd}) => edadd; //desestructurado
console.log(edade(usuario));

console.log(usuario.nombree); //no desestructurado

const f = () => ({
    ciudad:"Boston"
})
console.log(f().ciudad);

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
const {Millos:{old,email}} = user; //{key:{key1,key2}} = ObjectName
console.log(old);
console.log(email);

//para desestructurar el valor asignando al atributo del objeto y darle un nombre de variable nuevo
const {Millos:{old:EDAD, email:CORREO}} = user;
console.log(EDAD);
console.log(CORREO);

//desestructuracion de arrays
var a;
var b;
var c;
[a,b] = [1,2] //asigna valores a las variables haciendo uso de arrays
console.log(a);
console.log(b);

//saltando posiciones
[a,b,,, c] = [1,2,3,4,5,6]; //para poder asginar un valor del final del array a la variable c, las comas saltan posiciones
console.log(c);

//asignacion
var a = 8;
var b = 6;
[b,a] = [a,b]; //asingo el valor de b a a y el valor de a a b
console.log(a);
console.log(b);

//desestructuracion con el operador rest
var arr;
[a,b, ...arr] = [1,2,3,4,5,6,7,8,9]; //ignora los valores de a y b, toma el resto y lo convierte en un array
console.log(arr);
console.log(a,b)

//desestructuracion de objeto
var nuevoPerfilCliente = {
    nombreee:'millos',
    edaddd:23,
    nacionalidad:'Espanola',
    ubicacion:'Espana'
};

const actualizarPerfil = (informacionDePerfil) => { //funcion para desesctructurar un objeto
    const {nombreee,edaddd,nacionalidad,ubicacion} = informacionDePerfil;
    console.log(nombreee);
    console.log(edaddd);
    console.log(nacionalidad);
    console.log(ubicacion);
}
actualizarPerfil(nuevoPerfilCliente);

//opcion2 - de manera mas concisa
const actualizarPerfil2 = ({nombreee,edaddd,nacionalidad,ubicacion}) =>{
    console.log(nombreee);
    console.log(edaddd);
    console.log(nacionalidad);
    console.log(ubicacion);
}
actualizarPerfil2(nuevoPerfilCliente);

//ejercicio
const estadisticas = {
    max:56.78,
    min:4.56,
    mediana:43.4
};
const mitad = ({max,min}) => (max+min)/2; //desesctructura el objeto y usa los parametros para una operacion
console.log(mitad(estadisticas));

//para crear objetos de manera concisa
const crearPersona = (Nombre, Edadd, Idioma) => ({Nombre,Edadd,Idioma}); //creo la funcion flecha para crear objetos
var person1;          //parametros              //objeto
person1 = crearPersona('millos',23,'espanol'); //argumentos - asigno el objeto a una variable para poder usarlo
console.log(person1);

//desestructurado
const desestrcturarPersona = ({Nombre,Edadd,Idioma}) => { //desestructuro el objeto creado en la funcion anterior para usar sus atributos
    return [Nombre,Edadd,Idioma]; //devuelvo una lista con los atributos para poder seleccionarlos facilmente dependiendo cual yo quiera
}
var Names; //creo variable para almacenar el nombre del objeto
Names = desestrcturarPersona(person1)[0]; //guardo el nombre del objeto creado previamente
console.log(Names);

//Metodos - para declarar funciones dentro de los objetos
const persona = {
    nombre:'Isabel',
    presentarse:function(){
        return `Hola mi nombre es ${this.nombre}`; //this se refiere el objeto con el que estoy trabajando, en este caso
    }                                              //al nombre de la persona, al nombre de la persona de ese objeto
};
console.log(persona.presentarse());

//version corta
const persona1 = {
    nombre:'Isabel',
    presentarse(){ //se quita la palabra reserva function y los :
        return `Hola mi nombre es ${this.nombre}`; //this se refiere el objeto con el que estoy trabajando, en este caso
    }                                              //al nombre de la persona, al nombre de ese objeto
};
console.log(persona.presentarse());

//DEFINIR UNA CLASE
//nos permite crear muchos objetos con la misma estructura, las mismas propiedades y la misma funcionalidad
//nos permite escribir codigo y reutilizarlo para crear los objetos que necesitemos

class Mascota {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
        }
}

var miMascota = new Mascota('Lucas',9);
var miMascota2 = new Mascota('Tobby',6);

console.log(miMascota);
console.log(miMascota.nombre);
console.log(miMascota2.edad);

//getters y setters
//para definir funciones en una clase
// estas funciones sirven para proteger la data del objeto

class Libro {
    constructor(autor) {
        this._autor = autor; // el guion bajo le indica a otros desarrolladores que ese valor no se debe modificar
    }                        // porque podria causar errores

    get autor() { //funcion para obtener el valor que no queremos que se modifique
        return this._autor;
    }

    set autor(nuevoAutor) { //funcion que permite actualizar el valor de la propiedad sin tener que cambiar el parametro del constructor
        this._autor = nuevoAutor;
    }
}

const livro = new Libro('Franz Kafka');
console.log(livro.autor); //getter

livro.autor = 'Nietzsche'; //setter
console.log(livro.autor);