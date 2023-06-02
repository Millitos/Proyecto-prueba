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