var identifier = 0;
let editando = false;

class Ask {
    constructor(pregunta,opcionCorrecta,opcionA,opcionB,opcionC,opcionD){
        this.pregunta = pregunta;
        this.opcionCorrecta = opcionCorrecta;
        this.opcionA = opcionA;
        this.opcionB = opcionB;
        this.opcionC = opcionC;
        this.opcionD = opcionD;
        this.answered = false;
    }
    //método para evaluar si una pregunta ya esta respondida
    askAnswered(){
        this.answered =! this.answered;
    }
}

class AskManager{
    constructor(){
        this.asksList = []; 
    }

    addAsk(ask){
        this.asksList.push(ask);
    }

    removeAsk(index){
        this.asksList.splice(index,1);
    }

    getAsks(){
        return this.asksList;
    }

    setAsk(nPregunta,nOpcionCorrecta,nOpcionA,nOpcionB,nOpcionC,nOpcionD){
        this.pregunta = nPregunta;
        this.opcionCorrecta =nOpcionCorrecta;
        this.opcionA = nOpcionA;
        this.opcionB = nOpcionB;
        this.opcionC = nOpcionC;
        this.opcionD = nOpcionD;
    }
}

const askManager = new AskManager();

//variables - elementos del html
const form = document.querySelector("#form-quiz");
const askList = document.querySelector("#ask-list");
const inputPregunta = document.querySelector('#preguntaa');
const inputOpcionCorrecta = document.querySelector('#inputOpcionCorrecta');
const inputOpcionA = document.querySelector('#a');
const inputOpcionB = document.querySelector('#b');
const inputOpcionC = document.querySelector('#c');  
const inputOpcionD = document.querySelector('#d');

document.addEventListener('DOMContentLoaded',function(e){
    showAsks();
})

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(editando){
        editAsk(identifier);
        editando = false;
    }else{
        let Data = Object.fromEntries(new FormData(e.target));
        const ask = new Ask(Data.pregunta,Data.opcionCorrecta,Data.a,Data.b,Data.c,Data.d);
        askManager.addAsk(ask);
        addAskLocalStorage(ask);
        showAsks();
        form.reset();
    }

})

function showAsks(){
    let counter = 0;
    let asks;
    console.log(askManager);
    askList.innerHTML = '';
    // const asks = askManager.getAsks();
    asks = getAsksLocalStorage();
    asks.forEach((ask)=>{
        console.log(ask);
        counter++;
        const listItem = document.createElement('li');
        listItem.setAttribute('class','li');
        listItem.setAttribute('id',counter);
        listItem.innerHTML = `
                                <b>${counter}.${ask.pregunta}</b>
                                <b>A.</b> ${ask.opcionA}
                                <b>B.</b> ${ask.opcionB}
                                <b>C.</b> ${ask.opcionC}
                                <b>D.</b> ${ask.opcionD}
                                <button onclick="removeASK(${counter-1})">Eliminar</button>
                                <button onclick="uploadAsk(${counter-1})">Editar</button>`;

        askList.appendChild(listItem);
    });

}

function removeASK(index){
    askManager.removeAsk(index);
    deleteAskLocalStorage(index);
    showAsks();
}

function uploadAsk(index){
    const {pregunta,opcionCorrecta,opcionA,opcionB,opcionC,opcionD} = askManager.getAsks()[index];

    inputPregunta.value = pregunta;
    inputOpcionCorrecta.value = opcionCorrecta;
    inputOpcionA.value = opcionA;
    inputOpcionB.value = opcionB;
    inputOpcionC.value = opcionC;
    inputOpcionD.value = opcionD;

    form.querySelector('button[type="submit"]').textContent = 'Actualizar';
    identifier = index;
    editando = true;
    
}

function editAsk(index){
    const pregunta = inputPregunta.value;
    const opcionCorrecta = inputOpcionCorrecta.value;
    const opcionA = inputOpcionA.value;
    const opcionB = inputOpcionB.value;
    const opcionC = inputOpcionC.value;
    const opcionD = inputOpcionD.value;

    askManager.getAsks().map(ask =>{
        if(askManager.getAsks().indexOf(ask) === index){
            const askIndex = askManager.getAsks()[askManager.getAsks().indexOf(ask)]; //obtengo el objeto que quiero editar
            askIndex.pregunta = pregunta;
            askIndex.opcionCorrecta = opcionCorrecta;
            askIndex.opcionA = opcionA;
            askIndex.opcionB = opcionB;
            askIndex.opcionC = opcionC;
            askIndex.opcionD = opcionD;
        }
    })

    showAsks();
    form.reset();
    form.querySelector('button[type="submit"]').textContent = 'Agregar';
    
}


// LOCALSTORAGE******************************************************

function addAskLocalStorage(ask){
    let asks;
    asks = getAsksLocalStorage();

    asks.push(ask);
    localStorage.setItem('asks',JSON.stringify(asks));
}

//comprobar que hayan elementos en localStorage, retorna un array
function getAsksLocalStorage(){
    let asks;

    if(localStorage.getItem('asks') === null){
        asks = [];
    }else{
        asks = JSON.parse(localStorage.getItem('asks'));
    }

    return asks;
}

function deleteAskLocalStorage(askIndex){
    let asks;
    // askDeleted = ask.substring(0,ask.length - 1);
    asks = getAsksLocalStorage();
    // console.log(askIndex); indice del elemento clickeado
    asks.forEach((ask,index)=>{
        if(askIndex === index){
            asks.splice(index,1);
        }
    });

    localStorage.setItem('asks',JSON.stringify(asks));
}