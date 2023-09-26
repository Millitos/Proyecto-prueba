//callbacks - se ejecutan al final de un proceso - llama la funcion mostrarCampers cada vez que se agg un camper

const campers = ['millos','mario','lia'];

//funcion para anadir un camper
function nuevoCamper(camper, callback){ //para listar tambien el nuevo camper
    setTimeout(()=>{
        campers.push(camper);
        //dsp de agg llamo la funcion que muestra los campers
        callback();
    },3000)
}

function mostrarCampers(){
    setTimeout(()=>{ //callback para iterar el arreglo
        campers.forEach((camper)=>{
            console.log(camper);
        })
    },1000) //se muestra en la consola dsp de 1 segundo
}

mostrarCampers();
nuevoCamper('lucas',mostrarCampers);

//ejemplo 2
const ciudades = ['londres','bogota','medellin'];

//inline callback   
ciudades.forEach(function(ciudad){
    console.log(ciudad);
})

//promises - la promesa es un contenedor para un valor futuro
//1. definir la promesa         //función ejecutora(recibe dos funciones como argumentos)
//los argumentos son los que resuelven o rachazan la promesa en función de si se provocó o no un error
const premiarTribu = new Promise((resolve, reject)=>{
    //logica de la promesa
    const premio = true; //fulfilled
    // const premio = false rejected
    if(premio){
        //se ejecuta cuando se cumple la promesa
        resolve('tribu premiada');
    }else{
        //se ejecuta cuando la promesa no se cumple o hay error
        reject('no se pudo cumplir la promesa');
    }
});

//verificando los estados de la promesa 
//si se asgina la definicion de la promesa a una variable se puede recuperar el objeto Promise
console.log(premiarTribu);

//cómo utilizar las promesas
//1. invocar promesa
premiarTribu
    //el consumidor finally no tiene argumentos, su objetivo es hacer que el codigo que tenga asociado se ejecute
    //si o si, independiente de que tenga exito o error(se puede ubicar en cualquier sitio el consumidor)
    .finally(()=>(console.log('se ejecuto la promesa')))

    .then((result) =>{ //con then se gestiona el resolve
        console.log(result); //true
    })
    .catch(error =>{ //con el catch se gestiona el reject
        console.log(error); //false
    })

//estado pending promesa - le falta el then
const pending = new Promise((resolve, reject)=>{

})

console.log(pending);

//ejemplo 2 - el then se ejecuta despues del resolve, deben ir de la mano
//se crea un promise suponiendo que voy a leer 5000 fotos de una rest api,el tiempo que tarde en
//leer los datos es desconocido, se crea un promise que ejecute una vez que el resolve se haya terminado
//es decir cuando las 'imagenes' se hayan cargado (cuando termine de leer los registros), en el then 
//se escribe el codigo que debe hacer despues de cargar los registros
const esperando = new Promise((resolve, reject)=>{
    setTimeout(() => {//el settimeout simula el tiempo que demoraria en conectar con la api o db
        resolve('se ejecuto correctly');
    }, 5000);
})

esperando.then((mensaje)=>{
    console.log(mensaje);
})

//Fetch API para consumir datos desde un txt...
const loadTxtBtn = document.querySelector("#loadTxt");
loadTxtBtn.addEventListener('click',getData);
let nameTest;

function getData(){
    //1.especificar url del recurso web
    const url = 'data/dataj.json'; //ruta 1.carpeta 2.nombre del recurso
    //si se escribe mal la url aparece el error 404

    //2. pasar la url como argumento a fetch
    fetch(url)
        //establecemos conectividad con el recurso web o servidor - se ejecuta para recuperar el texto
        .then(respuesta=>{ //respuesta del servidor si hubo conectividad o no
            console.log(respuesta);

            //propiedades del objeto almacenado en respuesta
            console.log(respuesta.status); //ese estado indica que hubo conexion con el recurso,si la petición fue exitosa
                                            //retorna el valor 200, de lo contrario si hay un error retorna el valor 500
            console.log(respuesta.statusText); //confirmamos q si hubo conexion al servidor, si la petición fue exitosa retorna "200 OK"
                                                // de lo contrario, por falta de comunicación con el servidor retorna "404 Not Found"
            console.log(respuesta.url); //servidor
            // return respuesta.text() //rta del servidor en formato de texto
            return respuesta.json(); //rta del servidor usando formato json
        })
        //con este then procedemos a hacer el consumo del recurso
        .then(datos =>{
            console.log(datos);
            console.log(datos[0].name);
        })
        .catch(error=>{
            console.log(error);
        })
}