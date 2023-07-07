let listaClientes = [];

const objCliente = {
    id:"",
    nit:"",
    nombres:"",
    apellidos:"",
    telefono:"",
    email:"",
    nacimiento:"",
    nacionalidad:"",
    puntos:0
};

let editando = false;

//elementos del formulario, inputs y botones
const formulario = document.querySelector('#form-clientes');
const nitInput = document.querySelector('#nit');
const nombresInput = document.querySelector('#nombres');
const apellidosInput = document.querySelector('#apellidos');
const telefonoInput = document.querySelector('#telefono');
const emailInput = document.querySelector('#email');
const nacimientoInput = document.querySelector('#nit');
const nacionalidadInput = document.querySelector('#nacionalidad');

//listener
formulario.addEventListener('submit',validarFormulario);

//creo funcion validarFormulario
function validarFormulario(e){
    //let action = e.submitter.dataset.action;
    e.preventDefault();

    //validacion
    if(nitInput.value === "" ||nombresInput.value === "" ||apellidosInput.value === ""
    ||telefonoInput.value === "" ||emailInput.value === "" ||nacimientoInput.value === "" ||nacionalidadInput.value === ""){
        alert('Todos los campos son obligatorios');
        return;
    }

    //revisar variable editando para agg o actualizar
    if(editando){
        editarCliente();
        editando = false;
    }else{
        //genero id aleatorio
        objCliente.id = Date.now();
        objCliente.nit = nitInput.value;
        objCliente.nombres = nombresInput.value;
        objCliente.apellidos = apellidosInput.value;
        objCliente.telefono = telefonoInput.value;
        objCliente.email = emailInput.value;
        objCliente.nacimiento = nacimientoInput.value;
        objCliente.nacionalidad = nacionalidadInput.value;

        agregarCliente();
    }

    
}

function agregarCliente(){
    listaClientes.push({...objCliente});

    mostrarClientes();
    formulario.reset();

}

function mostrarClientes(){
    
    limpiarHTML();

    const tbodyClientes = document.querySelector('#tbody-clientes');

    listaClientes.forEach((cliente)=>{
        const {id,nit,nombres,apellidos,telefono,email,nacimiento,nacionalidad} = cliente;

        const trBody = document.createElement('tr');
        trBody.setAttribute('id',id);
        trBody.innerHTML = `<th scope="row">${id}</th>
                            <td>${nit}</td>
                            <td>${nombres}</td>
                            <td>${apellidos}</td>
                            <td>${telefono}</td>
                            <td>${email}</td>
                            <td>${nacimiento}</td>
                            <td>${nacionalidad}</td>`;

        //botones
        //editar
        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarCliente(cliente);
        editarBoton.textContent = "Editar";
        editarBoton.classList.add('btn','btn-warning');
        trBody.append(editarBoton);

        //eliminar
        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarCliente(id);
        eliminarBoton.textContent = "Eliminar";
        eliminarBoton.classList.add('btn','btn-danger');
        trBody.append(eliminarBoton);

        tbodyClientes.appendChild(trBody);
    })
}

function cargarCliente(cliente){

    const {id,nit,nombres,apellidos,telefono,email,nacimiento,nacionalidad} = cliente;
    nitInput.value = nit;
    nombresInput.value = nombres;
    apellidosInput.value = apellidos;
    telefonoInput.value = telefono;
    emailInput.value = email;
    nacimientoInput.value = nacimiento;
    nacionalidadInput.value = nacionalidad;

    objCliente.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarCliente(){
    //toma los valores nuevos de los inputs
    objCliente.nit = nitInput.value;
    objCliente.nombres = nombresInput.value;
    objCliente.apellidos = apellidosInput.value;
    objCliente.telefono = telefonoInput.value;
    objCliente.email = emailInput.value;
    objCliente.nacimiento = nacimientoInput.value;
    objCliente.nacionalidad = nacionalidadInput.value;

    listaClientes.map((cliente)=>{
        if(cliente.id === objCliente.id){
            cliente.id = objCliente.id;
            cliente.nit = objCliente.nit;
            cliente.nombres = objCliente.nombres;
            cliente.apellidos = objCliente.apellidos;
            cliente.telefono = objCliente.telefono;
            cliente.email = objCliente.email;
            cliente.nacimiento = objCliente.nacimiento;
            cliente.nacionalidad = objCliente.nacionalidad;
        }
    });

    limpiarHTML();
    mostrarClientes();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando = false;
}

function eliminarCliente(id){
    listaClientes = listaClientes.filter(cliente => cliente.id !== id);

    limpiarHTML();
    mostrarClientes();
}

function limpiarHTML(){
    const tbodyClientes = document.querySelector('#tbody-clientes');
    tbodyClientes.innerHTML = "";
}

//buscar
const search = document.querySelector('#search');
const btnBuscar = document.querySelector('#btnBuscar');

btnBuscar.addEventListener('click',function(e){
    //buscar
    e.preventDefault();
    
    let nuevaListaClientes = listaClientes;
    console.log(listaClientes);

    listaClientes = listaClientes.filter(cliente =>(cliente.nit === search.value ));
    console.log(listaClientes);

    mostrarClientes();

    listaClientes = nuevaListaClientes;


})

search.addEventListener('input',function(e){
    if(search.value ===""){
        mostrarClientes();
    }
});

//debo crear una variable que me atrape la lista antes de editarla y luego
//volver a asignar la lista a listaClientes para que funcione mostrarClientes