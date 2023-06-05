//CRUD PELICULAS

const formulary = document.querySelector('#movies-form');

function takeAction(e) {
    e.preventDefault();
    //console.log('hola');
    if (e.target.classList.contains()){

    }
}



//CREATE
function add(e){
    e.preventDefault();
    let titulo = document.querySelector("#input-titulo");
    let genero = document.querySelector("#input-genero");
    let duracion = document.querySelector("#input-duracion");
    let director = document.querySelector("#input-director");

    let mainCard = document.createElement("div");
    mainCard.classList.add("card" ,"text-bg-primary", "mb-3");
    


    let card = document.createElement("div");
    card.classList.add("card-body");
    card.innerHTML = ``;


}



//READ



//UPDATE





//DELETE