//INDEXQUIZ******************************************************
// import {LS} from "./app";


function getAsksLocalStorage(){
    let asks;

    if(localStorage.getItem('asks') === null){
        asks = [];
    }else{
        asks = JSON.parse(localStorage.getItem('asks'));
    }

    return asks;
}


document.addEventListener('DOMContentLoaded',function(e){
    console.log(localStorage.getItem('nombre'));
    console.log(e.type); //retorna un string con el nombre del tipo de evento
    console.log(e.defaultPrevented); 
    showQuiz();
})

const quizContainer = document.querySelector(".quiz-container");

function showQuiz(){
    let asks;
    let counter = 0;

    asks =  getAsksLocalStorage();
    console.log(asks);
    asks.forEach((ask)=>{
        counter++;
        const p = document.createElement('p');
        p.setAttribute('class','p');
        p.setAttribute('id',counter);
        p.innerHTML = `
                        ${counter}. ${ask.pregunta}
                        <select id="${counter}">
                            <option value="">Respuesta</option>
                            <option value="a">${ask.opcionA}</option>
                            <option value="b">${ask.opcionB}</option>
                            <option value="c">${ask.opcionC}</option>
                            <option value="d">${ask.opcionD}</option>
                        </select>`;
        quizContainer.appendChild(p);
    });
}