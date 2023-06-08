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
            person.push(data);

            
            break;

        case 'eliminar':
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

