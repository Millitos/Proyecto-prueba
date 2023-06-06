//getElementById
const pruebaa = document.getElementById("message").innerHTML = "Hello world";
console.log(pruebaa); //Hello World

const element = document.getElementById("a"); //almaceno en elemento el texto del tag de html con id = "a"
document.getElementById("demo0").innerHTML = "The text from the message paragraph is:" + element.innerHTML;

//getElementByTagName
const element1 = document.getElementsByTagName("p"); //almacena element1 todos los tags de tipo "p"
document.getElementById("demo1").innerHTML = 
"1. the text in first paragraph (index 0) is:" + element1[0].innerHTML; //los indices empiezan de arriba hacia abajo segun el tag usado

//This example finds the element with id="main", and then finds all <p> elements inside "main":
const x = document.getElementById("main"); //en x almaceno el objeto con id "main"
const y = x.getElementsByTagName("p"); //almaceno los tags "p" dentro del objeto almacenado en x

document.getElementById("demo2").innerHTML =  //muestro en el objeto con id "demo2" el parrafo con el indice cero
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML; //que esta dentro del objeto con id "main"

//getEelementsByClassName
const z = document.getElementsByClassName("intro"); //toma todos los elementos html con la misma clase
document.getElementById("demo3").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + z[0].innerHTML;

//HTML elements by CSS selectors
//If you want to find all HTML elements that match a specified CSS selector
                                    //"tag.class"
const b = document.querySelectorAll("p.intro1");
document.getElementById("demo4").innerHTML =
'The first paragraph (index 0) with class="intro" is: ' + b[0].innerHTML;

// const o = document.querySelectorAll("intro1#");
// document.getElementById("demo4#").innerHTML = "hola" + " "+o.innerHTML;

//Finding HTML Elements by HTML Object Collections
const e = document.forms["frm1"]; //guarda los elementos del formulario en la variable e
let text = ""; //variable vacia para recorrer el formulario y almacenar ahi los valores del mismo
for (let i=0; i<e.length; i++){ //recorro el formulario
    text+= e.elements[i].value + "<br>"; //tomo unicamente los value - elements es una palabra reservada
}
document.getElementById("demo5").innerHTML = text;

//This example changes the value of the src attribute of an <img> element:
document.getElementById("image").src = "img/calculos dimensionales.png";

//Dynamic HTML content
document.getElementById("date").innerHTML=
"Date: " + Date();




//JavaScript Form Validation
/*If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted: */
const validate = () => {
    let x = document.forms["myForm"]["fname"].value; //toma el valor almacenado en fname que esta dentro de myForm
    if (x == "") {
        alert("name must be filled out");
        return false; //debe retornar false para que no se haga el envio
    }
}

//JavaScript Can Validate Numeric Input
const validateNumber = () =>{
    let text;
    let x = parseInt(document.forms["myForm2"]["numb"].value);
    if(isNaN(x) || x<1 || x>10) {
        text = 'input not valid';
        document.getElementById("demo6").innerHTML = text;
        return false;
    }else {
        text = 'input OK';
        document.getElementById("demo6").innerHTML = text;
        return false;
    } 
};

//crear nodos y agg al html
const newParagraph = () => {
    
    //crear nodo de tipo element
    let parrafo = document.createElement("p");

    //crear nodo de tipo text
    let contenido = document.createTextNode("Hola mundo!");

    //añadir el nodo Text como hijo del nodo tipo element
    parrafo.appendChild(contenido);

    //para agregar a un elemento ya existente
    let labelContainer = document.getElementsByClassName("divOne"); //retorna una lista siempre asi solo sea un elemento
    containerOne = labelContainer[0]; //almaceno el div en la variable containerOne
    containerOne.appendChild(parrafo); //a ese container le agg el parrafo
};

const deleteF = () => {
    //para eliminar un elemento
    let eliminado = document.getElementById("DivOne"); //obtengo los objetos creados en divOne
    //eliminado.remove(); //elimina un elemento
  //primerDiv.removeChild(remueve el primer elemento del primer div)
    //eliminado[0].removeChild(eliminado[0].firstElementChild); //para borrar con getElementsByClassName
    eliminado.removeChild(eliminado.firstElementChild)
};




//changing the CSS
document.getElementById("test").style.color = "blue";

//para cambiar el color a rojo al darle click
const cssChange = () => document.getElementById("h3").style.color = "red";

//JavaScript HTML DOM Events
const testF = id => id.innerHTML = "oops!";

const fDate = id => id.innerHTML = Date();

//se puede crear el evento desde js
document.getElementById("myBtn").onclick = dDate;
function dDate() {
    document.getElementById("testDate").innerHTML = Date();
}

// const dDate = () => document.getElementById("testDate").innerHTML = Date();

//onchange
function upperCase() {
    let x = document.getElementById("fname");
    //millos =  MILLOS;
    x.value = x.value.toUpperCase();
};

//onmouseover - onmouseout
function mouseOver(id) {
    id.innerHTML =`<b>Hello folks</b>`;
};

function mouseOut(id) {
    id.innerHTML = "<b>"+"Mouse Over me"+"</b>";
};




//NodeList
//devuevle una lista estatica con todos los elementos que sean hijos directos de la etiqueta body
console.log(document.querySelectorAll("body")); 

//item method
//permite acceder a un elemento del objeto NodeList devuelto a traves de su indice
console.log(document.querySelectorAll("body").item(0));

//forEach method
//permite recorrer el objeto NodeList devuelto 
                                    //(padre,hijo)    
var list = document.querySelectorAll('body > *');
list.forEach(function (element) {
    //console.log(element);
});





//SELECTORES
//encontrar el primer elemento que contenga la clase button
console.log(document.querySelector(".button"));

//encontrar todos los elementos con la clase button
console.log(document.querySelectorAll(".button"));

//querySelector method - devueleve el primer nodo o elemento que coincida con el selector proporcionado por parametro
//tag name
console.log(document.querySelector("h1"));
//class name
console.log(document.querySelector(".intro"));
//id name
console.log(document.querySelector("#message"));

//querySelectorAll method - devuelve todos los nodos o elementos que coincidan con el selector proporcionado por parametro
//tag name
console.log(document.querySelectorAll("h2"));
//class name
console.log(document.querySelectorAll(".intro"));




//DOMTokenList
//length propertie
const span =document.querySelector("span");
// const classes1 = document.querySelector("span").classList; //mas corto
const classes = span.classList; //retorna un objeto key:value con las clases del tag span
const length = classes.length;
span.textContent = `la longitud del objeto es:${length}`;

//value propertie
const value = classes.value;
console.log(value); //retorna las clases del tag span
//obtiene una clase especifica, funciona como un array
console.log(classes[2]);
console.log(document.querySelector("span").classList[2]);

//add() method
classes.add("d","e"); //agg nuevas clases
console.log(classes);

//contains() method - para saber si una clase pertenece o no al tag
const contains = classes.contains("d"); //devuelve un booleano
console.log(contains);

const contains2 = classes.contains("a") 
                ? "si contiene la clase a"
                : "no contiene la clase a";
console.log(contains2);

//entries() method 
//retorna un iterador permieitendo ir a traves de las key:value en el tag definido
//los key:value los retorna como arrays cada uno por separado
console.log(classes.entries());
for (const i of classes.entries()) {
    console.log(i); 
}; 

//item() method
//retorna un item de la lista de clases determinado por su posicion en la lista con el indx
console.log(classes.item(classes.length-1)); //retorna la ultima clase
console.log(classes.item(2));//retorna la clase en la posicion 2

//keys() method
//retorna un iterador que permite ir a traves de los keys contenidos dentro de la clase del tag
console.log(classes.keys());
for (const i of classes.keys()) {
    console.log(i);
    console.log(classes.item(i)); //retorna los values de cada key que recorre i
};

//remove method
//elimina la clase especifica de la lista de clases
classes.remove("a","d");
console.log(classes);

//replace method
//replace una clase existente con una nueva, si la clase que se va a reemplazar no existe
//retorna un false y no agg la nueva clase a la lista
classes.replace("b","h");
console.log(classes);

//operador ternario para hacer la validacion
const replace = classes.replace("h","l") ? classes : "esa clase no existe";
console.log(replace);

//toggle() method
//permite agg o quitar una clase concreta de una lista de clases, si la clase existe ejecutara un metodo remove
//si la clase no existe ejecutara un metodo add
const toggle = classes.toggle("i")
            ? "added"
            : "removed";
console.log(toggle); //added
console.log(classes);

//values() method
//retorna un iterador permitiendo ir a traves de los values contenidos en la clase
//retorna los valores como strings
for (const i of classes.values()) {
    console.log(i);
};

//createElement method
var label = document.createElement("label"); //crea un elemento html
//propiedad ID
label.id = "labelId"; //establece el nombre identificador unico en el documento
//propiedad innerHTML
console.log(document.body.innerHTML); // obtiene todo el body
label.innerHTML = "Hola soy Millos"; //agg ese texto al label creado
const test = document.getElementsByTagName("h3");
const h3length = test[test.length-1]; //obtiene el ultimo h3
h3length.append(label); //agg el label al h3
console.log(h3length);
console.log(label);

//propiedad value
//permite devolver o establecer el valor de un elemento de formulario del DOM.
//solo esta disponible para elementos de formulario
document.querySelector(".nombre").value = "hola world";
console.log(document.querySelector(".nombre").value);

//setAttribute method
//permite establecer atributos a los elementos accesibles de Js
const p = document.createElement("p");
  //setAttribute(tipo[id,class],name);
p.setAttribute("class","testClass");
p.append("hola bro");
document.getElementsByClassName("nombre")[0].append(p);
console.log(p);

//propiedad classList
var body =document.body; //guarda todo el body
body.classList.add("prueba");
console.log(body);

//previousElementSibling propiedad
//devuelve el elemento que se encuentra justo antes del referenciado
var elem = document.querySelector("#h3");
console.log(elem.previousElementSibling); //<p>This example...

//previousSibling - no se muy bien para que sirve
console.log(elem.previousSibling);

//nextElementSibling propiedad
//esta propiedad devuelve el elemento que se encuentra justo despues del referenciado
console.log(elem.nextElementSibling);
console.log(elem.nextSibling);

//parentElement propiedad
//retorna el contenedor del elemento referenciado, es decir retorna su padre
console.log(document.getElementById("testDate").parentElement);
console.log(document.getElementById("well").parentElement); //<div id="main"></div>

//parentNode
console.log(document.getElementById("well").parentNode); //<div id="main">

//append method
//append acepta objects y DOMStrings
//appendChild solo acepta objects
const div = document.createElement("div");
div.id = "divTest";
const script = document.getElementById("script");
script.parentElement.insertBefore(div,script); //lo agrega al final del body
let lastDiv =document.getElementById("divTest"); //obtengo el div acabado de agg
console.log(lastDiv);
const pElem = document.createElement("p"); //creo un p
p.textContent = "prueba append method"; //le agg texto

lastDiv.appendChild(p); //agg el p al div previamente creado
// The div would then look like this <div><p></p></div>

lastDiv.append("apprending text...");
// The div would then look like this <div>Appending Text</div>

//insertBefore method
const labe = document.createElement("label");
labe.textContent = "yo soy millos";
const h = document.getElementById("pr");
h.parentElement.insertBefore(labe,h);

//ELIMINACION DE NODOS Y ELEMENTOS
//remove method() - elimina el elemento o nodo referenciado en el DOM
labe.remove();

//removeChild() method 
//elimina un objeto o nodo hijo proporcionado como parametro
const la = document.createElement("label");
la.setAttribute('class','labl');
document.body.appendChild(la);
//elimino el  elemento
const del = document.body.removeChild(la); //almacena el label eliminado
console.log(del); 

//DEFINICION DE ESTILOS
//cssText - retorna o establece una declaracion en formato string de estilos del elemento referenciado
const form = document.querySelector(".nombre");
console.log(form);
console.log(form.style.cssText);
//establece un estilo
form.style.cssText = "background-color: red;"
console.log(form);

//setProperty method
//styleSheets - selecciona la hoja de estilos segun cuantas hayan
//cssRules - selecciona de la hoja de estilos el elemento referenciado por el indice
const declaration = document.styleSheets[0].cssRules[0].style;
console.log(declaration); //#demo0
declaration.setProperty("background-color","yellow");

//getPropertyValue method
//permite recuperar la propiedad CSS solicitada del elemento referenciado
console.log(declaration.getPropertyValue("font-family"));

//removeProperty method
//elimina la propiedad CSS del elemento referenciado y la retorna antes de eliminarla
console.log(declaration.removeProperty("font-family"));

//styleSheets -retorna un array con todas las hojas de estilo definidas
console.log(document.styleSheets);


//PROPIEDAD STYLE
//para establecer una propiedad CSS
document.getElementById("message").style.backgroundColor = "lightblue";

//para recuperar el valor
console.log(document.getElementById("message").style.backgroundColor);

//para eliminarlo
document.getElementById("message").style.backgroundColor = "";

//insertRule method
//recuperamos la hoja de estilo
var s = document.styleSheets[0];
//add la regla al final de la hoja de estilo
s.insertRule("p {font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;}",s.cssRules.length);

//deleteRule method
//elimina una regla CSS de una hoja de estilos
s.deleteRule(1); //indice - posicion