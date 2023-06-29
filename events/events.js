// OBJETO EVENT***********************************

//target - cotiene la refenrecia al objeto del elemento que lanzó el evento
function test1(e){
    console.log(e.target);
    console.log(e.target.textContent);
};

//OTRA FORMA DE CREAR EVENTOS*************
const btn = document.querySelector("#btn-test1");
btn.onmouseover = prueba;
function prueba(e){
    console.log("btn clicked!");
    console.log(e.type);
}
// btn.onmouseover = (e)=>(console.log(e.type));


//type- string con el nombre o identificador del tipo de evento
const typeProperty = document.querySelector("#type-test");
const pShow = document.querySelector("#p-type");
typeProperty.addEventListener('click',function(e){
    console.log(e.type);
    pShow.innerHTML = e.type;

    //defaultPrevented - contiene un valor booleano que indica si el evento
    //lanzó una llamada al método preventDefault
    console.log(e.defaultPrevented);

    //clientX,clientY - permiten conocer la posición del puntero del raton
    //en el momento que el evento ocurrió
    console.log(e.clientX, e.clientY);
})


const keydown = document.querySelector("#keydown-test");
keydown.addEventListener('keydown',function(e){
    //keyCode-permite conocer el código de la tecla que se presionó
    console.log(e.keyCode);
    // console.log(e.which); hace lo mismo que keyCode
})






