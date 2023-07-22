//variables
const presupuesto = prompt('Ingrese su presupuesto:');
let cantidadPresupuesto;
const formulario = document.querySelector('#agregar-gasto');

//clases
class Presupuesto{
    constructor(presupuesto){
        this._presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0){
        return this.restante = this.restante - Number(cantidad);
    }

    get presupuesto(){
        return this._presupuesto;
    }
}

//maneja todo lo relacionado con el html
class Interfaz {
    insertarPresupuesto(cantidad, restante){
        const pspSpan = document.querySelector('#total');
        const restSpan = document.querySelector('#restante');
        
        pspSpan.innerHTML = cantidad;
        restSpan.innerHTML = restante;
    }

    insertarGasto(gasto, cantidad){
        const ul = document.querySelector('.list-group');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${gasto}
        <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;
        ul.appendChild(li);
    }

    //esta funcion es para mostrar un div verde(success) o rojo(error)
    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert'); //clases de boostrap
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        //agg el texto al div
        divMensaje.appendChild(document.createTextNode(mensaje));

        //insertar en el dom
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //quitar el alert dsp de 3 segundos
        //selecciono el elemento por una clase que tenga para poder eliminarlo 
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000)
    }
}

//eventlisteners
document.addEventListener('DOMContentLoaded', function(e){
    //verificar que se llene correctamente el prompt
    if(presupuesto === null || presupuesto ===''){
        window.location.reload();
    }else{
        // console.log(presupuesto);
        cantidadPresupuesto = new Presupuesto(presupuesto);
        
        //instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto, cantidadPresupuesto.restante);
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const ui = new Interfaz();
    // console.log(data);
    //validar formulario
    if(data.cantidad === '' || data.gasto === ''){
        //2 parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{
        ui.insertarGasto(data.gasto, data.cantidad);
        ui.imprimirMensaje('Agreago correctamente','success');

        const presRest = cantidadPresupuesto.presupuestoRestante(data.cantidad);
        ui.insertarPresupuesto( cantidadPresupuesto.presupuesto, presRest);

        colorRestante(presRest);
    }

    formulario.reset();
})

function colorRestante(presRest){
    const rest = document.querySelector('.restante');
    console.log(presRest);
    console.log(cantidadPresupuesto.presupuesto*0.75);

    if(presRest <= cantidadPresupuesto.presupuesto*0.25){    
        rest.classList.add('alert-danger');
    }

    if(presRest <= cantidadPresupuesto.presupuesto*0.5){
        rest.classList.add('alert-warning');
    }
}