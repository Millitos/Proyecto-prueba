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
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //obtengo todo el formulario en data en forma de objeto
    let data = Object.fromEntries(new FormData(e.target));
    
    //guarda el data action del boton oprimido
    let action = e.submitter.dataset.action;
    //guarda la cantidad de filas de la tabla
    let num = document.querySelector('#tbody-clientes').children.length;

    switch(action){
        case 'agregar':
            //crea una fila, le agrega la respectiva clase y los datos ingresados en los inputs
            const tr = document.createElement('tr');
            tr.classList.add('table-active');
            tr.innerHTML = `<th scope="row">${num+1}</th>
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
            //codigo para recorrer el arreglo de objetos
            //codigo para devolver el indice segun el elemento seleccionado del html
            //a partir del indice del objeto puedo manejar la lista que me va a almacenar los cambios que se hagan
            for (let i=0; i<person.length; i++){ //i toma los indices de la lista
                let object = person[i]; //segun el indice recorre los objetos
                if(object.nit === clickedElement.children[1].innerHTML){
                    indx = i;
                    //console.log(person[indx]);
                }
            }
            //crea un objeto con los nuevos datos ingresados y lo agg a la lista de objetos
            //en la misma posicion donde se habia creado inicialmente 
            let newData = Object.fromEntries(new FormData(e.target));
            person[indx] = newData;
            
            //codigo para editar los campos de la tabla al hacer la modificacion

            delBtn.classList.add('display'); //oculta de nuevo el boton eliminar
            modBtn.classList.add('display');//ocutl
            break;
    }   
    
})

//evento que se activa cuando se clickea dentro del table row
tableClientes.addEventListener('click', function(e){
    e.preventDefault();
    let element = e.target.parentElement; //obtiene el padre del elemento clickeado 'tr'

    //muestra los botones al darle click a una fila de la tabla 
    delBtn.classList.remove('display'); // al darle click a una fila se elimina la ocultacion del btn eliminar
    modBtn.classList.remove('display');

    if (element.classList.contains('table-active')){ //si el tr contiene 'table-active'
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
    //elimina la clase table-active para que el elemento clickeado se vea de otro color
    element.classList.remove('table-active'); 
})





//funciones**************************************************