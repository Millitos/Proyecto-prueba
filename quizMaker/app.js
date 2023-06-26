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
}

const askManager = new AskManager();

//variables - elementos del html
const form = document.querySelector("#form-quiz");

form.addEventListener('submit', function(e){
    e.preventDefault()
    let Data = Object.fromEntries(new FormData(e.target));
    const ask = new Ask(Data.pregunta,Data.opcionCorrecta,Data.a,Data.b,Data.c,Data.d);
    askManager.addAsk(ask);
    showAsks();
    form.reset();
})

function showAsks(){
    
}
