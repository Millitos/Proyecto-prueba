//variables**************************************************
const twList = document.querySelector('#lista-tweets');

//eventListeners***********************************************
//crea una funcion para guardar todos los evenListeners y luego los llama
eventListeners();

function eventListeners() {
    //cuando se envia el formulario
    //el listener de cuando se envia un formulario se llama submit
    document.querySelector('#formulario').addEventListener('submit',aggTweet);

    //Borrar tweets
    twList.addEventListener('click',borrarTweet);


    //contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo);
}

//funciones**************************************************
function aggTweet(e){
    //el preventDefault es para evitar que el submit abra el action
    e.preventDefault();
    //leer el valor del textarea
    let tweet = document.querySelector('#tweet').value;
    
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //crear elemento y anadirle el contenido a la lista
    let li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar); //agg la x al final de cada tweet
    twList.appendChild(li);//agg el tweet a la lista

    //anadir a local storage
    agregarTweetLocalStorage(tweet);
}

//elimina el tweet del dom
function borrarTweet(e) {
    e.preventDefault();

    if(e.target.classList.contains('borrar-tweet')){
        listTweets = document.querySelectorAll('.borrar-tweet');
        e.target.parentElement.remove();
        alert('Tweet eliminado!');
    }
}

//agg tweet a localStorage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //anadir el nuevo tweet
    tweets.push(tweet);

    //convertir de string a array para localStorage
    localStorage.setItem('Tweets', JSON.stringify(tweets));
    //agregar a localStorage
    //localStorage.setItem('Tweets',tweet)
}

//mostrar datos de localStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //crear elemento y anadirle el contenido a la lista
        let li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar); //agg la x al final de cada tweet
        twList.appendChild(li);//agg el tweet a la lista
    })
}

//comprobar que haya elementos en localStorage , rtorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;

    //revisamos valores de localStorage
    if(localStorage.getItem('Tweets') === null){
        tweets = [];
    }else {
        tweets = JSON.parse(localStorage.getItem('Tweets'));
    }
    return tweets;
}

