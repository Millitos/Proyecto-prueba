//1. crear arreglo vacio lista empleados
let listaEmpleados = [];

//2. crear objeto con los atributos de los empleados
// const objEmpleado ={
//     id:'',
//     nombre:'',
//     puesto:''
// }
let idElementoClickeado = "";

//3. esta variable sirve para saber cuando tiene que agregar y cuando tiene que actualizar la info
let editando = false;

//4. crear ctntes para los elementos de formulario, inputs y botones
const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregar = document.querySelector('#btnAgregar');

//5. crear evento tipo submit sobre el elemento formulario
//LISTENERS*********
formulario.addEventListener('submit',validarFormulario); //se activa al dar click al btn


//6.crear funcion validarFormulario que recibe el evento
// FUNCIONES**********
function validarFormulario(e){ //valida la info del formulario
    e.preventDefault();

    //7. validacion - verifica si los campos estan vacios
    if(nombreInput.value === '' || puestoInput.value === ''){
        alert('Todos los campos son obligatorios')
        return; //para salir de la funcion y que no revise los demas if
    }
    //8. revisar si la variable editando esta en true o false,
    //para saber si va a agg info o a actualizar
    if(editando){
        editarEmpleado(); //21.
        editando = false;
    //9. si no, inicializa el obj con los datos de los inputs, es decir lo agrega
    }else{  
                        //nunca se repite
        //objEmpleado.id = Date.now(); //devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 hasta el momento actual
        //objEmpleado.nombre = nombreInput.value;
        //objEmpleado.puesto = puestoInput.value;
        const objEmpleado = crearEmpleado(Date.now(),nombreInput.value,puestoInput.value);

        //10.
        //esta estableciendo los valores de id,nombre,puesto en el objeto inicialmente creado globalmente
        //la funcion aggEmpleado crea una copia del objeto en ese momento con esos valores establecidos
        //y envia la copia del objeto a la lista de empleados
        agregarEmpleado(objEmpleado);
    }
}
//10.
function agregarEmpleado(objEmpleado){
    //En resumen, ...objEmpleado se utiliza para crear una copia del objeto objEmpleado
    //antes de agregarlo a la lista listaEmpleados, lo que garantiza que cada objeto en
    //la lista sea independiente y no una referencia al objeto original.
    //agg empleados a la lista - ...objEmpleado - se refiere a una copia del objEmpleado global
    listaEmpleados.push(objEmpleado); 
    console.log(listaEmpleados);
    //11. crear funcion para mostrar los empleados
    mostrarEmpleados(listaEmpleados); //para enviar la lista al html
    //16.
    formulario.reset(); //reinicia los inputs del formulario
    //17.
    //limpiarObjeto(); no necesito limpiar el objEmpleado pq se sobreescribe autmcmente
    //console.log(objEmpleado);
}

//18.
//limpia el objeto empleado luego de haberle asignado valores en las lineas
//40,41,42 para poder hacer la copia del obj y enviarla a la lista
// function limpiarObjeto(){
//     objEmpleado.id = '';
//     objEmpleado.nombre = '';
//     objEmpleado.puesto = '';
// }

//12.
function mostrarEmpleados(listaEmpleados){
    //para que no se repitan los empleados en el html cuando se recorre la lista
    limpiarHTML(); //14.

    //13.
    //donde voy a mostrar los empleados
    const divEmpleados = document.querySelector('.div-empleados');
    console.log(listaEmpleados);
    //recorrer lista empleados
                            //iterador
    listaEmpleados.forEach((empleado)=>{
        //desesctructuacion - para acceder mas facilmente
        const {id, nombre, puesto} = empleado;
        
        const parrafo = document.createElement('p'); //etiqueta que muestra cada empleado en el div
        parrafo.textContent = `${id} - ${nombre} - ${puesto} -`;
        parrafo.setAttribute('id',id); //para poder identificar luego el elemento parrafo que voy a borrar

        //btnes de cada uno de los elementos para poder editar y borrar
        //editar
        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);//19. //al dar click en el btn editar carga la info del empleado en los inputs
        editarBoton.textContent = "Editar";
        editarBoton.classList.add('btn','btn-editar');
        parrafo.append(editarBoton);

        //eliminar
        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id); //27.
        eliminarBoton.textContent = "Eliminar";
        eliminarBoton.classList.add('btn','btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr'); //linea separadora

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);

    });
}

//20.
//al dar click en el btn editar carga la info del empleado en los inputs
function cargarEmpleado(empleado){
    const {id,nombre,puesto} = empleado; //desestructuracion 

    //se ponen los valores en los inputs del formulario
    nombreInput.value = nombre;
    puestoInput.value = puesto;

    //para seguir manteniendo el identificador del empleado que seleccionamos para editar
    // objEmpleado.id = id;
    idElementoClickeado = id;

    //para cambiar el texto del boton a actualizar
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    //para que sepa que debe editar y no agg
    editando = true;
    
}

//22. crear funcion editar empleado
function editarEmpleado(){
    //toma los valores nuevos de los inputs
    // objEmpleado.nombre = nombreInput.value;
    // objEmpleado.puesto = puestoInput.value;
    //no se pasa el id pq ya se cargo previamente cuando se selecciona el empleado - linea 132
    

    //23. reemplazar el elemento
    //El método map() en JavaScript se utiliza para iterar sobre los elementos 
    //de un array y crear un nuevo array con los resultados de aplicar una 
    //función a cada elemento del array original.
                    //iterador
    listaEmpleados.map(empleado =>{//recorre el array y solo edita el que coincide con el id
        if(empleado.id === idElementoClickeado){ //toma el id del objeto global, el id se establecio previamente en cargarEmpleado
            empleado.id = idElementoClickeado;
            empleado.nombre = nombreInput.value;
            empleado.puesto = puestoInput.value;
        }
    });
    console.log(listaEmpleados);
    //24. para que muestre nuevamente con los datos actualizados
    limpiarHTML();
    mostrarEmpleados(listaEmpleados);

    formulario.reset();

    //25.
    //cambiamos nuevamente el texto del btn
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false; //26. para salir de editar
}

//28. funcion para eliminar un empleado
function eliminarEmpleado(id){
    //filtra todos los elementos que no sean iguales al id
    //reescribe la lista dejando todos los elementos menos el eliminado
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
    
    //29. para que muestre nuevamente con los datos actualizados
    limpiarHTML();
    mostrarEmpleados(listaEmpleados);
}

//15.
function limpiarHTML(){
    const divEmpleados = document.querySelector('.div-empleados');
    divEmpleados.innerHTML = '';
//     otra forma de vaciar el div
//     while(divEmpleados.firstChild){ mientras en divEmpleados exita un hijo, entonces
//         divEmpleados.removeChild(divEmpleados.firstChild); elimine el hijo hasta q no quede ninguno
//     }
//
} 

//funcion para crear objetos
const crearEmpleado = (id, nombre, puesto) => ({id,nombre,puesto}); 