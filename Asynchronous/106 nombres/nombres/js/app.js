let form = document.querySelector("#generar-nombre");

form.addEventListener('submit', function(e){
    e.preventDefault();
    //llamada a ajax e imprimir resultados
    let data = Object.fromEntries(new FormData(e.target));
    
    //https://github.com/thm/uinames
    //arma una URL la cual luego busca en una base de datos la informacion requerida
    let url = '';
    //el ? se utiliza para enviar mas argumentos o parametros en la url
    url += 'http://uinames.com/api/?';

    //si hay origen agregarlo a la url
    if(data.origen !== ''){
        url += `region=${data.origen}`;
    }
    //si hay un genero agregarlo a la url
    if(data.genero !== ''){
        url += `gender=${data.genero}`;
    }
    //si hay una cantidad de nombres agregarlo a la url
    if(data.cantidad !== ''){
        url += `amount=${data.cantidad}`;
    }

    //conectar con ajax
    //iniciar XMLHTTPrequest

    const xhr = new XMLHttpRequest();

    //abrimos la conexion
    xhr.open('GET',url,true);

    //datos e impresion del template
    xhr.onload = function(){
        console.log(this.status);
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    //enviar el request
    xhr.send();
})