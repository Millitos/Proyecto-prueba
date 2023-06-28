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
    // localStorage.setItem('tweets',JSON.stringify('prueba'));
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

    document.querySelector('#formulario').reset();

    //ANADIR A LOCALSTORAGE
    agregarTweetLocalStorage(tweet); //1

}

//elimina el tweet del dom
function borrarTweet(e) {
    e.preventDefault();

    if(e.target.classList.contains('borrar-tweet')){
        //listTweets = document.querySelectorAll('.borrar-tweet');
        //console.log(e.target);
        e.target.parentElement.remove();
        alert('Tweet eliminado!');
        //console.log(e.target.parentElement.innerText);
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//mostrar datos de localstorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    
    //recorre la lista de tweets traidos del localstorage y los imprime
    //en el html
    tweets.forEach((tweet)=>{
         //crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //crear elemento y anadirle el contenido a la lista
        let li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar); //agg la x al final de cada tweet
        twList.appendChild(li);//agg el tweet a la lista
    });
}


//Agrega tweet a localstorage
function agregarTweetLocalStorage(tweet){ //2
    let tweets;
    //traigo el arreglo de tweets de localstorage, vacio o lleno
    tweets = obtenerTweetsLocalStorage(); //2.1
    
    tweets.push(tweet); //agg el tweet a la lista

    //convertir de array a string para enviar al localstorage
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

//comprobar que haya elementos en localstorage, retorna un array
function obtenerTweetsLocalStorage(){ //2.1
    let tweets;

    //revisamos los valores de localstorage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    
    return tweets;
}

//eliminar tweet de localstorage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    //funcion para eliminar una porcion de un string
                                //(inicio,fin); corta lo que no este dentro del inicio y fin
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    // console.log(tweetBorrar);
    // console.log(tweet);
    tweets = obtenerTweetsLocalStorage();

    //index guarda el indice del elemento eliminado
    tweets.forEach((tweet, index)=>{
        if(tweetBorrar === tweet){
            console.log(index);
            //(start to delete,# of elements to delete)
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}