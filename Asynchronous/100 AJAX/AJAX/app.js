//PARA LEER ARCHIVOS TXT CON AJAX
document.querySelector("#cargar").addEventListener('click', cargarDatos);

function cargarDatos(){

    //Este objeto tenemos todos los metodos para poder interactuar con ajax
    const xhr = new XMLHttpRequest(); 

    //2.abrir conexion - open(tipo de request, url)
    // leer datos metodo GET //enviar datos a db POST
    //actualizar PUT //eliminar DELETE
    xhr.open('GET', 'datos.txt', true); //true es el llamado asincrono

    //una vez que carga la pagina
    xhr.onload = function(){
        //ESTADOS (el codigo corre cuando el estado es 200)
        //200:correcto | 403:request prohibido | 404:No encontrado
        if(this.status === 200){ //el this hace referencia al objeto XMLHttpRequest
            console.log(this.responseText);
            const div = document.querySelector('#listado');
            div.innerHTML = this.responseText;
        }
    }

    //Enviar el request con los datos
    xhr.send();
}