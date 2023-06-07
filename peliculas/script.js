//CRUD PELICULAS
//funcion para crear maps a partir de un objeto
function setMap(object){
    const map = new Map(); //creo el map
    for (const key in object) { //recorre los keys del objeto (los names)
        if (object.hasOwnProperty(key)){ //si el objeto tiene esa clave recorrida
            const value = object[key]; //guarda el valor de esa clave
            map.set(key,value); //lo asigno al map
        }
    }
    return map;
} ;

function getRandom(max){
    return Math.floor(Math.random()*max);
}

//READ
const formilaryNav = document.querySelector('#search-form');

formilaryNav.addEventListener('submit',function(e){
    e.preventDefault();
    let action = e.submitter.dataset.action;
    let title = document.querySelectorAll('.card-title');
    

    switch(action){
        case 'search':
            for (const elem of title){
                if (elem.textContent === document.querySelector('#formtext').value){
                    console.log(elem.parentElement.parentElement); 
                    
                }else {
                    elem.parentElement.parentElement.classList.add('fade');
                }
                
            }
            break;
        case 'reset':
            for (const elem of title) {
                elem.parentElement.parentElement.classList.remove('fade');
                // if (getRandom(2) == 1){
                //     // lo agg a la columna principal
                //     let column1 = document.querySelector('#colunm1');
                //     column1.appendChild(elem.parentElement.parentElement);
                // }else{
                //     // lo agg a la columna secundaria
                //     let column2 = document.querySelector('#colunm2');
                //     column2.appendChild(elem.parentElement.parentElement);
                // }
            }
            break;   
        
    }
    document.querySelector('#search-form').reset();
})

var cardColorClass = ['bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-light','bg-dark' ];




//FORMULARIO******************************************

const formulary = document.querySelector('#movies-form'); //obtengo el formulario


formulary.addEventListener('submit',function(e){ //evento de enviar
    //sirve para despues alterar el flujo del codigo con un switch
    let action = e.submitter.dataset.action; //almacena el valor segun el data-action del input oprimido
    e.preventDefault();

    //CREATE
    switch(action){
        case "agregar":
        //Object.fromEntries - toma una lista de pares con clave-valor
        // y devuelve un nuevo objeto cuyas propiedades son dadas por éstas entradas 
        //e.target - referencia el objeto sobre el que se ha enviado el evento
        //formData - crea un nuevo objeto formData que representa los datos del formulario HTML
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);

        //llamo la funcion que convierte el objeto a map
        let map = setMap(data);

        const cardColorClass = ['bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-light' ];
        const indx = getRandom(7);

        //creo un div que va a almacenar toda la info de la pelicula
        let card = document.createElement("div");
        card.classList.add("card" ,cardColorClass[indx], "mb-3");
        card.style.maxWidth = '18rem';

        card.innerHTML = `  <div class="card-header">
                                <h5 class="card-title">${map.get('titulo')}</h5>
                            </div>

                            <div class="card-body">
                                <ul>
                                    <li id="genero"><h6>Género:</h6>${map.get('genero')}</li>
                                    <li id="duracion"><h6>Duración:</h6>${map.get('duracion')} horas</li>
                                    <li id="director"><h6>Director:</h6>${map.get('director')}</li>
                                </ul>
                            </div>`;

        
        if (getRandom(2) == 1){
        // lo agg a la columna principal
        let column1 = document.querySelector('#colunm1');
        column1.appendChild(card);
        }else{
        // lo agg a la columna secundaria
        let column2 = document.querySelector('#colunm2');
        column2.appendChild(card);
        }
        
            break;

        //DELETE

        case "eliminar":
            alert("Para eliminar pulse en el titulo de la pelicula!");
            //agg una clase para que al darle al boton se vea coloreado
            document.querySelector('#eliminarbtn').classList.add('btn-danger');
            //evento que toma los click dados encima de cualquier elemento del card
            document.body.children[1].children[1].children[1].addEventListener('click',del);
            document.body.children[1].children[1].children[2].addEventListener('click',del);
            function del(e){
                e.preventDefault();
                let elemento = e.target; //almacena el elemento html al que se le dio click
                let card = elemento.parentElement.parentElement; //va hasta el padre principal de ese elemento
                //si el elemento tiene 'card' entre sus clases entra al if
                if (card.classList.contains("card") && action == "eliminar"){
                    card.remove(); //elimina el elemento padre
                    action = ""; //altero el valor del action para que no se cumpla la condicion del if
                                //deberia darle de nuevo al btn eliminar para q se cumpla

                    //elimino la clase que acabo de agg para que quede unicamente con las clases iniciales
                    document.querySelector('#eliminarbtn').classList.remove('btn-danger');

            }
            }
            
            break;
        }

    document.querySelector('#movies-form').reset();
})

//FORMULARIO ****************************************

//toma los datos ingresados en los inputs y los convierte en un objeto clave:valor
//donde la clave es el atributo name puesto en el html y el valor es el ingresado
//por el usuario
// formulary.addEventListener('submit',function(e){
//     e.preventDefault();
//     let data = Object.fromEntries(new FormData(e.target));
//     console.log(data)});



//PLACEHOLDERS*******************
//ubica los diferentes atributos de cada pelicula como placeholders sobre los inputs al dar click al header del card
document.body.children[1].children[1].children[1].addEventListener('click',target);
document.body.children[1].children[1].children[2].addEventListener('click',target);
function target(e){
    e.preventDefault();
    let elemento = e.target;
    let card = elemento.parentElement.parentElement;
    if (card.classList.contains("card")){
        document.querySelector('#input-titulo').placeholder = card.children[0].children[0].innerHTML;
        document.querySelector('#input-genero').placeholder = card.children[1].children[0].children[0].textContent;
        document.querySelector('#input-duracion').placeholder = card.children[1].children[0].children[1].textContent;
        document.querySelector('#input-director').placeholder = card.children[1].children[0].children[2].textContent;
        return card;
    }
    
}

