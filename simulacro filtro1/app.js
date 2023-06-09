//MODULO 1 -- CLIENTES******************************************************************************

//variables**************************************************
var formulario = document.querySelector('#form-clientes'); //obtener el formulario
var tableClientes = document.getElementById('tbody-clientes'); //obtener el body de la tabla
var delBtn = document.querySelector('#btn-eliminar-cliente'); //obtiene el boton de eliminar
var modBtn = document.querySelector('#btn-modificar-cliente');
delBtn.classList.add('display'); // lo oculta inicialmente cuando se carga la pagina
modBtn.classList.add('display');

//crea una variable global para poder obtener el elemento clickeado del listener de click en la tabla
//y usarlo en el listener de submit en el caso de eliminar
var clickedElement;

var person = [];
var indx;



//eventListeners**************************************************
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //obtengo todo el formulario en data en forma de objeto
    let data = Object.fromEntries(new FormData(e.target));
    
    //guarda el data action del boton oprimido
    let action = e.submitter.dataset.action;
    //guarda la cantidad de filas de la tabla
    let num = document.querySelector('#tbody-clientes').children.length;

    switch (action) {
        case 'agregar':
            //crea una fila, le agrega la respectiva clase y los datos ingresados en los inputs
            const tr = document.createElement('tr');
            tr.classList.add('table-active');
            tr.innerHTML = `<th scope="row">${num + 1}</th>
                                <td>${data.nit}</td>
                                <td>${data.nombres}</td>
                                <td>${data.apellidos}</td>
                                <td>${data.telefono}</td>
                                <td>${data.email}</td>
                                <td>${data.birth}</td>
                                <td>${data.nacionalidad}</td>`;
            document.querySelector('#tbody-clientes').appendChild(tr);
            formulario.reset();
            person.push(data); //envia el objeto con los datos del form a la lista de personas

            //pasa los nombres y apellidos ingresados en el formulario a la funcion
            //que los agrega al dropdownlist del modulo de tiquetes
            aggClienteTiq(data.nombres,data.apellidos);
            
            break;

        case 'eliminar':

            //funcion que elimina el cliente del dropdownlist del modulo de tiquetes
            //cuando se elimina tambien de la tabla, lo elimina pasandole los nombres
            //que se obtienen con el indice del objeto en la lista de objetos
            delClienteTiq(person[index()].nombres,person[index()].apellidos);

            //elimina el elemento de la lista que los contiene pasandole el indice
            delete(person[index()]);
            person = person.flat();
            //elimina despues de haber dado click en la fila
            //borra toda una fila
            clickedElement.remove(); //clickedElement viene del otro listener y guarda el padre del elemento clickeado
            //oculta los botones despues de haber dado click en eliminar, esto para tener que seleccionar nuevamente
            //una fila para que los muestre de nuevo
            delBtn.classList.add('display'); //oculta de nuevo el boton eliminar
            modBtn.classList.add('display');//ocutla
            formulario.reset();
            
            break;

        case 'modificar':
            
            
            //crea un objeto con los nuevos datos ingresados y lo agg a la lista de objetos
            //en la misma posicion donde se habia creado inicialmente 
            let newData = Object.fromEntries(new FormData(e.target));
            person[index()] = newData;

            //codigo para editar los campos de la tabla al hacer la modificacion
            clickedElement.innerHTML = `<th scope="row">${clickedElement.firstElementChild.innerHTML}</th>
                                        <td>${newData.nit}</td>
                                        <td>${newData.nombres}</td>
                                        <td>${newData.apellidos}</td>
                                        <td>${newData.telefono}</td>
                                        <td>${newData.email}</td>
                                        <td>${newData.birth}</td>
                                        <td>${newData.nacionalidad}</td>`;

            delBtn.classList.add('display'); //oculta de nuevo el boton eliminar
            modBtn.classList.add('display');//ocutl
            formulario.reset();
            break;

        case 'listar':
            //for anidado para recorrer el nit,nombres,apellido de cada fila de clientes
            //comparo con los valores ingresados en el formulario al pulsar btn listar

            //recorre todos los table rows del body de la tabla
            for(let i=0;i<tableClientes.children.length;i++){//i toma los indices
                //al recorrerlos los oculta todos
                tableClientes.children[i].classList.add('display');//recorre los tr uno por uno con i
                //recorre desde el nit hasta el apellido de cada table row
                for(let j=1;j<4;j++){
                        //valores ingresados en el formulario               //nit,nombre y apellido de cada fila de clientes
                    if((data.nit || data.nombres || data.apellidos) === (tableClientes.children[i].children[j].innerHTML)){
                        //si encuentra un nombre,nit,apellido del formulario igual a uno
                        //previamente ingresado que se encuentra en la tabla de clientes
                        //entonces le quita la clase display al table row para mostrarlo
                        tableClientes.children[i].classList.remove('display');
                    }
                }
            }

            break;

        
        case 'reset':
            //recorre todos los table rows del body de la tabla y les quita la clase display
            //para que vuelvan a aparecer en la tabla
            for(let i=0;i<tableClientes.children.length;i++){
                tableClientes.children[i].classList.remove('display');
            }
            formulario.reset();
            break;

}

})

//evento que se activa cuando se clickea dentro del table row
tableClientes.addEventListener('click', function (e) {
    e.preventDefault();
    let element = e.target.parentElement; //obtiene el padre del elemento clickeado 'tr'
    console.log(element);
    //muestra los botones al darle click a una fila de la tabla 
    delBtn.classList.remove('display'); // al darle click a una fila se elimina la ocultacion del btn eliminar
    modBtn.classList.remove('display');

    if (element.classList.contains('table-active')) { //si el tr contiene 'table-active'
        clickedElement = element; //guarda el padre del elemento clickeado
        //rellena los inputs con los datos del cliente
        document.querySelector('#nit').value = clickedElement.children[1].innerHTML;
        document.querySelector('#nombres').value = clickedElement.children[2].innerHTML;
        document.querySelector('#apellidos').value = clickedElement.children[3].innerHTML;
        document.querySelector('#telefono').value = clickedElement.children[4].innerHTML;
        document.querySelector('#email').value = clickedElement.children[5].innerHTML;
        document.querySelector('#birth').value = clickedElement.children[6].innerHTML;
        document.querySelector('#nacionalidad').value = clickedElement.children[7].innerHTML;
    }
    
})





//funciones**************************************************

//codigo para recorrer el arreglo de objetos
//codigo para devolver el indice segun el elemento seleccionado del html
//a partir del indice del objeto puedo manejar la lista que me va a almacenar los cambios que se hagan
function index(){
    for (let i = 0; i < person.length; i++) { //i toma los indices de la lista
        let object = person[i]; //segun el indice recorre los objetos
        if (object.nit === clickedElement.children[1].innerHTML) {
            indx = i;
            //console.log(person[indx]);
        }
    }
    return indx;
}

//MODULO 1 -- CLIENTES******************************************************************************


//MODULO 2 -- RUTAS AEREAS******************************************************************************
//variables
var rutas = []; //lista para almacenar las rutas agregadas
var tableRutas = document.querySelector('#table-rutas');//guarda la tabla completa de las rutas
var idRutas = 0; //contador inicializado en cero para asignar id a los tr

//eventListeners
tableRutas.addEventListener('click',function(e){ //evento que se activa al dar click en la tabla
    e.preventDefault();

    //guardo el elemento sobre el que se dio click
    let elem = e.target;

    //agregar
    if(elem.classList.contains("bi-plus-square-fill")){ //si dan click encima del icono de agg
        idRutas++; //suma 1 al id del tr 
        //pide la informacion para agg
        // let ruta = prompt('ingrese el nombre de la ruta');
        let origen = prompt('ingrese el origen');
        let destino = prompt('ingrese el destino');
        let puntos = parseInt(prompt('ingrese el # de puntos'));
        let valor = prompt('ingrese el valor');
        let trRutas = document.createElement('tr'); //crea el tr
        trRutas.setAttribute('id',`trRutas${idRutas}`); //le asigna id 'trRutas1'....
        trRutas.innerHTML = `<th id="th-rutas" scope="row">${idRutas}</th>
                            <td>${origen}-${destino}</td>
                            <td>${origen}</td>
                            <td>${destino}</td>
                            <td>${puntos}</td>
                            <td>COP ${valor}</td>
                            <td class="pr del"><i class="bi bi-trash3-fill"></i></td>`;
        document.querySelector('#tbody-rutas').appendChild(trRutas);//agg el tr al tbody
        rutas.push(objRutasCreator(idRutas,origen,destino,puntos,valor));
        addRutaTiq(origen,destino,idRutas);
    }

    //eliminar
    if(elem.classList.contains("bi-trash3-fill")){//si pulsan en el icono de la basura
        let ask = confirm('Desea eliminar la ruta?') //alert para confirmar
        if (ask){ //si pulsan aceptar == true
            elem.parentElement.parentElement.remove();
            alert('ruta eliminada!');
        }else{
            alert('operacion cancelada!')
        }

        //guarda el id del elemento clickeado
        let idClickedElement = elem.parentElement.parentElement.children[0].innerHTML;
        
        //elimina de la lista el elemento con el indice clickeado menos 1
        //los id empiezan desde 1 en la tabla de rutas y siempre van aumentando
        //y al agg a la lista las rutas empiezan desde 0, por eso se resta 1
        delete(rutas[idClickedElement - 1]);
        rutas = rutas.flat();
        console.log(rutas);

        // for (let i = 0; i < rutas.length; i++) { //i toma los indices de la lista
        //     let object = rutas[i]; //segun el indice recorre los objetos
        //     if (object.id == idClickedElement) {
        //         //console.log(object.id);
        //         let inddx = i;
        //         delete(rutas[inddx]);
        //         rutas = rutas.flat();
        //     }
        // }

    }
})


//funciones
//para crear objetos
                        //parametros                                //objeto
const objRutasCreator = (id,origen,destino,puntos,valor) => ({id,origen,destino,puntos,valor});


//MODULO 2***************************************************************

//MODULO 3********************************************************************
//variables
var selectClientes = document.querySelector("#list-clientes");
var selectRutas = document.querySelector("#list-rutas");

//eventListeners


//funciones
//toma el nombre y el apellido, crea un tag tipo option y le agrega los arg pasados
function aggClienteTiq(clienteName,clienteApellido){
    let opt = document.createElement('option');
    opt.textContent = clienteName +" "+ clienteApellido;
    selectClientes.appendChild(opt); //agg al select el option con los nombres del cliente
}

//toma el nombre y el apellido traidos del caso eliminar del evento
function delClienteTiq(clienteName,clienteApellido){
    for(let i of selectClientes.children){ //recorre los option
        //si en el texto de unos de esos option se encuentra el nombre y el apellido
        //de un cliente que ya habia sido agg, lo elimina
        if(clienteName +" "+ clienteApellido === i.innerHTML){ 
            i.remove(); //elimina el elemento
        }
    }
}

function addRutaTiq(rutOrigen,rutDestino,id){
    let opt = document.createElement('option');
    opt.textContent =`${rutOrigen}-${rutDestino}`;
    opt.setAttribute('id',id);
    selectRutas.appendChild(opt);
}

//debo comparar el id del elemento clickeado con el id de los elementos dentro del select
function delRutaTiq(idRutas){
    if( idRutas === ){

    }
}
//MODULO 3********************************************************************