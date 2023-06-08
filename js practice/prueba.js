

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

//ARRAYS***************************************************************************
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

//length method
console.log(array.length); //cantidad de elementos del array

//join method 
//es como el toString() pero le puedo especificar el caracter para separar el string
console.log(array.join("|"))

//push method - agregar elementos al array
var arrayN = ['millos','mario','lia'];
const arrayLength = arrayN.push(arrayAnidado); //agg los elementos al final del array
console.log(arrayLength); //retorna la cantidad de elementos del array actualizado
arrayN[arrayN.length] = 'jacinto'; //tambien sirve para agregar elementos
console.log(arrayN);

//se puede agregar elementos al array así sea const
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

//forEach method - recorre los elementos del array
const forE = [1,2,3,4,5];
forE.forEach(e => {console.log(e)});

//map method
/*Devuelve un nuevo array que contiene los resultados tras
haber sido tratados por la función que se proporciona por parámetro */
const map = [1,2,3,4,5];
const mappedArray = map.map(i => i*2);
console.log(mappedArray);

//pop method
var save;
save = arrayN.pop(); //elimina el ultimo elemento del arreglo y lo retorna
console.log(save);

//shift method
save = arrayN.shift(); //elimina el primer elemento del arreglo y lo retorna 
console.log(save);

//unshift method
arrayN.unshift('jazmin'); //agg un elemento en la primera posicion del array
console.log(arrayN);

//concat method
const arr1 = [1,2,3];
const arr2 = new Array(4,5,6);
//se puede concatenar incluso elementos declarados ahi mismo
console.log(arr1.concat(arr2,"millos")); //puede tomar cualquier cantidad de arrays

//flat method (plano) - toma los subArrays y los convierte en un solo arreglo en conjunto
const myArr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(myArr.flat());

//splice method (empalmar)- agrega varios elementos a un array
const MyArr = ["millos","mario","lia"];
        //(splice elements position, # of deleted elements, elementsToSplice)
MyArr.splice(2,0,"Juan","Lucas");
console.log(MyArr);

//se pueden elminar elementos
        //(start to delete,# of elements to delete)
console.log(MyArr.splice(2,1)); //retorna los elementos que borra
console.log(MyArr);

//slice method (cortar)
//toma los elementos desde el indice 1 hasta el indice 3(n-1) y los agg a un nuevo array
const carBrands = ["toyota","mazda","renault","mercedes","BMW"];
const sliceBrands = carBrands.slice(1,4); // (1,4]
console.log(sliceBrands);

//filter method  
/*devuelve un array que contiene los resultados que cumplen con la función 
indicada que se pasa como parametro*/
const filter = ['Manzana','Banano','Kiwi','Pera'];
let prueba = filter.filter(fff = x => x.length>4); //función - (fff = x => x.length>4);
console.log(prueba);

//indexOf method
/*Devuelve la primera posición en la que aparezca el valor proporcionado por parametro
si el resultado de busqueda no se encuentra retorna -1.
El segundo parametro opcional indica desde la posición en que empieza a buscar y por defecto es 0*/ 
const index = ['pablo','elena','adrian'];
console.log(index.indexOf('adrian'));

//lastIndexOf - devuelve la ultima posicion donde aparece el valor proporcionado
const lastI = [1,3,4,5,1,2];
console.log(lastI.lastIndexOf(1));

//reverse method - devuelve el array en orden inverso
console.log(lastI.reverse());

//para borrar un elemento con delete
const del = [1,2,3];
console.log(delete(del[1])); //borro el elemento
console.log(del); //al borrarlo deja un espacio vacío
console.log(del.flat()); //uso flat para aplanar el array

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

//OBJETOS *****************************************************************
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
results[1].push('jinete'); //agg elemento a la lista 
console.log(results);

//agregar
results[5] = 'freddy';

//eliminar
delete results[3];

//keys method
var keys = Object.keys(results); //lista los keys
console.log(keys);
console.log(results);

//values method
/*devuelve un array con los valores de las claves enumerables del objeto proporcionado por parametro */
var val = Object.values(results);
console.log(val);

//assign method 
/*copia el objeto referenciado por el seguno parametro en el objeto referenciado
en el primer parametro y lo retorna */
var copy = {};
Object.assign(copy,results);
console.log(copy);

//entries method
/*devuelve un array multidimensional que contiene los pares clave valor en cada array subyacente
Esto es util para poder iterar un objeto que, a primera vista, no parece iterable */
var entries = Object.entries(results);
console.log(entries);

//getOwnPropertyDescriptors method
/*devuelve un objeto con la descripcion de todas las propiedades que posee el objeto */
var getOwnPDs = Object.getOwnPropertyDescriptors(results);
console.log(getOwnPDs);

//getOwnPropertyDescriptor method
/*devuelve un objeto con la descripcion de la propiedad que se pasa como segundo parametro */
var getOwnPD = Object.getOwnPropertyDescriptor(results,2);
console.log(getOwnPD);

//hasOwnProperty method
/*devuelve un booleano si el objeto contiene la propiedad proporcionada por parametro */
var hasOwnP = results.hasOwnProperty(1);
console.log(hasOwnP);

//getOenPropertyNames - devuelve un array con los nombres de las claves enumerables y no enumerables
console.log(Object.getOwnPropertyNames(results));

//para obtener el key pasando el value
for(let i in results) {
    if (results[i] == names){
        console.log(i);
    }
}

//Para saber si un objeto tiene una propiedad
console.log(results.hasOwnProperty(2)); 


//CICLOS******************************************************
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

//operador terniario**********************************************
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

//Funciones flecha ********************************************************
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

//sintaxis de desestructuracion********************************************************
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

//desestructuracion objetos anidados*****************************************
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

//desestructuracion de objeto**************************************************
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

//para crear objetos de manera concisa*************************************************
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

//METODOS****************************************************
//para declarar funciones dentro de los objetos
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

//ejemplo1 -metodos
var person = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar() {
      console.log("Hola, soy " + this.nombre + "!");
    }
  };

console.log(person.nombre);  // Resultado: "Juan"
console.log(person.edad);    // Resultado: 30
console.log(person.ciudad);  // Resultado: "Madrid"

person.saludar();  // Resultado: "Hola, soy Juan!"

person.profesion = "Ingeniero"; //añade elemento al obj
person.cambiarCiudad = function(nuevaCiudad) { //añade un nuevo método
  this.ciudad = nuevaCiudad;
};

console.log(person.profesion);  // Resultado: "Ingeniero"
//llama el nuevo metodo y pasa un argumento
person.cambiarCiudad("Barcelona");
console.log(person.ciudad);


//DEFINIR UNA CLASE****************************************************************
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

//getters y setters**************************************************
//para definir funciones en una clase
// estas funciones sirven para proteger la data del objeto

class Libro {
    constructor(autor) {
        this._autor = autor; // el guion bajo le indica a otros desarrolladores que ese valor no se debe modificar
    }                        // porque podria causar errores

    get autor() { //funcion para obtener el valor que no queremos que se modifique
        console.log("get");
        return this._autor;
    }

    set autor(nuevoAutor) { //funcion que permite actualizar el valor de la propiedad sin tener que cambiar el parametro del constructor
        console.log("set");
        this._autor = nuevoAutor;
    }
}

const livro = new Libro('Franz Kafka');
console.log(livro.autor); //getter

livro.autor = 'Nietzsche'; //setter
console.log(livro.autor);


//MAPS -son los equivalentes a diccionarios******************************************************
//la diferencia entre un map y un objeto es q el map no tiene metodos
let miMapa = new Map();
miMapa.set('clave1','valor1');
miMapa.set('clave2','valor2');
miMapa.set('clave3','valor3');

//obtener el tamaño del map
console.log('el tamaño del map:' + miMapa.size)

//obtener un valor del map
console.log('valor clave2: ',miMapa.get('clave2'));

//comprobar si una clave existe en el map
console.log(miMapa.has('clave2'));

//eliminar un elemento del map
miMapa.delete('clave2');
console.log(miMapa.size);

//recorrer un map
for (const [clave,valor] of miMapa) {
    console.log(clave , '-', valor);
}


//SETS -conjuntos*********************************************************
//en un conjunto no hay orden, no se sabe quien esta primero de cual
const conjunto = new Set();

//agg elementos
conjunto.add('elemento1');
conjunto.add('elemento2');
conjunto.add('elemento3');
conjunto.add('elemento3'); //no se agregan duplicados

//tamaño del conjunto
console.log(conjunto.size);

//comprobar si el elemento existe
console.log(conjunto.has('elemento1'));

//recorrer el conjunto
for (const elem of conjunto){
    console.log(elem);
}

//eliminar elemento del conjunto
conjunto.delete('elemento2');
console.log(conjunto);

//vaciar conjunto
conjunto.clear();