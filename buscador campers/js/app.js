console.log(campers);

/*1. Llenar dinamicamente valores en el select de nombres de campers */ //******************************************* */
                //iterador - recorre el arrays
campers.forEach((camper)=>{
    const opcion = document.createElement('option');
    opcion.value = camper.nombre;
    opcion.textContent = camper.nombre;
    document.querySelector('#nombre').appendChild(opcion);
})

/*2. Llenar el select con edades dentro del rango permitido */ //************************************************ */

for(i=15; i<31;i++){
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    document.querySelector('#edad').appendChild(opcion);
}

/*3.eventListener*/ //*************************************************************** */

/*para inyectar los cards a la pagina, pero se debe esperar que la pagina
cargue completamente y ahi si se agregan los cards*/
document.addEventListener('DOMContentLoaded',()=>{
    showCampers(campers);
    console.log(parametros);
    selectCamper();
})

/*4. Funciones */ //******************************************************************** */
//funcion para inyectar dinamicamente html
function showCampers(campers){
    //selecciono el elemento html que contendra los cards
    const contenedorTarjetas = document.querySelector('#tarjetas');
    
    //card para cada camper
    campers.forEach((camper)=>{
        //desesctructuracion
        const {imagen,nombre,detalle,promedio,especialidad,expertoTecnologia} = camper

        const camperHTML = document.createElement('p');
        camperHTML.style = "margin:5px";
        camperHTML.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="../img/${imagen}" class="card-img-top" alt="..." id="imgcard">
                                    <div class="card-body">
                                        <h5 class="card-title">${nombre}</h5>
                                        <p class="card-text">${detalle}</p>
                                    </div>
                                    <ul class="list-group list-group-flush"> 
                                        <a href="#" class="btn btn-danger" data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal" imagen="${imagen}" 
                                        promedio="${promedio}" expTecnologia="${expertoTecnologia}" especialidad="${especialidad}">Details</a>
                                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" 
                                        data-bs-target="#modaljob">Job Cart - Hire</a>
                                    </ul>
                                </div>`;
        contenedorTarjetas.appendChild(camperHTML);
    })
}
//data-bs-toggle="modal" data-bs-target="#exampleModal" - atributos que hacen referencia al modal

/*5. Objeto con los parametros para la busqueda */ //*********************************************** */
const parametros = {
    nombre:"",
    edad:"",
    minPromedio:"",
    maxPromedio:"",
    nivelCampus:"",
    nivelIngles:"",
    especialidad:"",
    expertoTecnologia:""
};

/*6. Selectors */ //************************************************************************** */
const nombreCamper = document.querySelector('#nombre');
const edad = document.querySelector('#edad');
const minPromedio = document.querySelector('#minimo');
const maxPromedio = document.querySelector('#maximo');
const nivelCampus = document.querySelector('#nivelCampus');
const nivelIngles = document.querySelector('#nivelIngles');
const especialidad = document.querySelector('#especialidad');
const expertoTecnologia = document.querySelector('#expertoTecnologia');

/*7.Event Listeners Filters */ //********************************************************* */
//evento input se activa al darle click a un option dentro del elemento select
nombreCamper.addEventListener('input',function(e){
    console.log(e.target.value); //retorna : Esteban, Haissam, Millos, Mario...
    parametros.nombre = e.target.value;
    /*8. Llamado funcion de alto nivel */
    filtrarCamper();
})

edad.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna : 15,16,17,18...
    parametros.edad = Number(e.target.value);
    filtrarCamper();
})

minPromedio.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna : 3.0,3.1,3.2,3.3...
    parametros.minPromedio = e.target.value;
    filtrarCamper();
})

maxPromedio.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna :3.0,3.1,3.2,3.3...
    parametros.maxPromedio = e.target.value;
    filtrarCamper();
})

nivelCampus.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna basico,ibtermedio,avanzado...
    parametros.nivelCampus = e.target.value;
    filtrarCamper();
})

nivelIngles.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna basic,middle,advanced...
    parametros.nivelIngles = e.target.value;
    filtrarCamper();
})

especialidad.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna front,back,full...
    parametros.especialidad = e.target.value;
    filtrarCamper();
})

expertoTecnologia.addEventListener('input',function(e){
    //console.log(e.target.value); //retorna html,Php,mongo,vue...
    parametros.expertoTecnologia = e.target.value;
    filtrarCamper();
})

/*8.1 Declaracion de funcion de alto nivel */
/*filtrarCamper, en pocas palabras toma el elemento seleccionado en el option del html, y 
filtra segun ese elemento en la lista de campers*/
function filtrarCamper(){ //filter convierte en una lista segun la funcion pasada como parametro
                    //arrayQueVaFiltrar.filter(condicion filtro)
    const resultado = campers.filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarNivelCampus)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia);
    console.log(resultado);
    //para mostrar en la interfaz los elementos ya filtrados guardados en resultado
    limpiarHTML(); //limpia el html
    showCampers(resultado);
}
                    //iterador - repasa cada camper
function filtrarNombre(camper){
    if(parametros.nombre){//si el campo tiene algun valor entra

            //recorre los nombres de los elementos dentro de la lista campers                       
                                //obj creado dinamicamente con los eventListener
        return camper.nombre === parametros.nombre;
        //devuelve una lista de los campers que estan dentro del array campers que coinciden
        //con el nombre puesto como parametro en el select
    }
    return camper; //si no se filtra por nombre o por alguno de los filtros, de todas formas
                    //se debe retornar la lista completa de campers para que el siguiente filter
                    //pueda funcionar
}
function filtrarEdad(camper){
    if(parametros.edad){
            //elemento LISTA   //elemento seleccionado HTML
        return camper.edad === parametros.edad;
    }
    return camper;
}
function filtrarMinimo(camper){
    if(parametros.minPromedio){ //valor seleccionado en el select del html
        return camper.promedio >= parametros.minPromedio;
    }
    return camper;
}
function filtrarMaximo(camper){
    if(parametros.maxPromedio){
        //elemento LISTA        //elemento seleccionado HTML
        return camper.promedio <= parametros.maxPromedio;
    }
    return camper;
}
function filtrarNivelCampus(camper){
    if(parametros.nivelCampus){
        //elemento LISTA            //elemento seleccionado HTML
        return camper.nivelCampus === parametros.nivelCampus;
    }
    return camper;
}
function filtrarNivelIngles(camper){
    if(parametros.nivelIngles){
        //elemento LISTA               //elemento seleccionado HTML
        return camper.nivelIngles === parametros.nivelIngles;
    }
    return camper;
}
function filtrarEspecialidad(camper){
    if(parametros.especialidad){
        //elemento LISTA            //elemento seleccionado HTML
        return camper.especialidad === parametros.especialidad;
    }
    return camper;
}
function filtrarExpertoTecnologia(camper){
    if(parametros.expertoTecnologia){
        //elemento LISTA                    //elemento seleccionado HTML
        return camper.expertoTecnologia === parametros.expertoTecnologia;
    }
    return camper;
}

//funcion para limpiar los cards del html 
function limpiarHTML(){
    const contenedorTarjetas = document.querySelector('#tarjetas');
    contenedorTarjetas.innerHTML = "";
}



//TALLER
//1. AGG un input de tipo text para buscar un camper digitando sus nombres
const search = document.querySelector('#search');

//el evento se activa cada que se escribe dentro del input
search.addEventListener('input',function(e){
    //console.log(e.target.value); va imprimiendo lo que se va escribiendo en el input
    let list = []; //lista vacia para agg los elementos q cumplan con la condicion
    campers.forEach((camper)=>{
        if(camper.nombre === search.value){
            list.push(camper);
        }else{
            limpiarHTML();
            let contenedorTarjetas = document.querySelector('#tarjetas');
            const div = document.createElement('div');
            div.classList.add('alert');
            div.textContent = 'No se encontraron resultados';
            contenedorTarjetas.appendChild(div);
        }
    })
    
    //solo entra cuando en la lista ya hay elementos, para que no deje la interfaz
    //vacia mientras estoy escribiendo en el input
    if(list.length>0){
        console.log(list);
        limpiarHTML(); //limpia el div que contiene los cards
        showCampers(list); //mando al elemento que cumplio con el condicional como una lista
                            //para que showCampers lo pueda leer
    }
    
    if(e.target.value === ""){ //si el input esta vacio limpia nuevamente los cards y agg los que tiene en la lista
        limpiarHTML();
        showCampers(campers);
    }
})

//3. agg funcionalidad btn details usando un modal, donde se informe en una tabla
//1era columna imagen del camper
//2da columna promedio del camper, si fue mayor a 4.5 imprimir apto para trabajo remoto, de lo contrario imprimir debe estuidar mas
//3ra columna especialidad
//4ta columna tecnologia experto
const tbody = document.querySelector('#tbody');
const rowModal = document.createElement('tr');
function selectCamper(){ //la funcion se carga siempre q se inicia el index
    const camperDetails = document.querySelector('#tarjetas');//guarda el div donde se meten los cards
    camperDetails.addEventListener('click',loadDetail);
}

function loadDetail(e){
    e.preventDefault();
    //console.log(e.target);
    if(e.target.classList.contains('btn-danger')){ //delegation al btn details
        //los atributos los traigo del tag a agregado en la funcion showCampers,
        //estan puestos ahi debido que es donde estoy escuchando el evento del click con e.target
        // console.log(e.target);
        const imagen = e.target.getAttribute("imagen"); //traigo la imagen guardada en el p 'details'
        const promedio = e.target.getAttribute("promedio"); //traigo el atributo promedio de la funcion showCampers
        const especialidad = e.target.getAttribute("especialidad");
        const expTecnologia = e.target.getAttribute("expTecnologia");
        rowModal.innerHTML =`
        <td>
            <img src="../img/${imagen}" width ="150px">
        </td>
        <td>
            Obtuvo un promedio de: ${promedio} ${promedio >4.5?'Apto para trabajo remoto':'Debe estudiar mas'}
        </td>
        <td>
            Especialista en : ${especialidad}
        </td>
        <td>
            Experto en : ${expTecnologia}
        </td>`;
        tbody.appendChild(rowModal);
    }
    
}
/*job card hiring campers********************************************** */
const cardsContainer = document.querySelector('#tarjetas');
let arrayCards = [];
const tobdyJob = document.querySelector('#tbody-job');
//listeners
cardsContainer.addEventListener('click',selectCards);

//funciones
function selectCards(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-primary')){
        const selectedCardCamper = e.target.parentElement.parentElement;
        console.log(selectedCardCamper);
        detail(selectedCardCamper);
    }
}

function detail(selectedCamper){
    //console.log(selectedCamper.children[1].children[1].textContent);
    const camperDetail ={
        imagen:selectedCamper.firstElementChild.src,
        nombre:selectedCamper.children[1].firstElementChild.textContent,
        detalles:selectedCamper.children[1].children[1].textContent,
    }
    //arrayCards.push(camperDetail);
                //...arrayCards - son los valores que ya tenia , camperDetail - agg el nuevo al final
    arrayCards = [...arrayCards,camperDetail];//va guardando los elementos seleccionados
    console.log(arrayCards);
    
}