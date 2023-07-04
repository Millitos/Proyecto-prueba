//callbacks
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

//promises
//1. definir la promesa
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
console.log(premiarTribu);

//estado pending promesa
const pending = new Promise((resolve, reject)=>{

})

console.log(pending);


//como utilizar las promesas
//1. invocar promesa
premiarTribu
    .then((result) =>{ //con then se gestiona el resolve
        console.log(result);
    })
    .catch(error =>{ //con el catch se gestiona el reject
        console.log(error);
    })



//Fetch API para consumir datos desde un txt...
const loadTxtBtn = document.querySelector("#loadTxt");
loadTxtBtn.addEventListener('click',getData);

function getData(){
    //1.especificar url del recurso web
    const url = 'data/data.txt'; //ruta 1.carpeta 2.nombre del recurso
    //si se escribe mal la url aparece el error 404

    //2. pasar como argumento a fetch
    fetch(url)
        //establecemos conectividad con el recurso web o servidor
        .then(respuesta=>{ //respuesta del servidor si hubo conectividad o no
            console.log(respuesta);
            console.log(respuesta.status); //ese estado indica que hubo conexion con el recurso
            console.log(respuesta.statusText); //confirmamos q si hubo conexion al servidor
            console.log(respuesta.url); //servidor
            return respuesta.text() //rta del servidor en formato de texto
        })
        //con este then procedemos a hacer el consumo del recurso
        .then(datos =>{
            console.log(datos);
        })
        .catch(error=>{
            console.log(error);
        })
}