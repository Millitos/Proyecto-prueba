
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
