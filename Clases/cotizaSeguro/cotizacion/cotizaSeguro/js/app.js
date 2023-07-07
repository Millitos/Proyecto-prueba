//constructor para seguro
function Seguro(marca, anio, tipoSeguro){
    this.marca = marca;
    this.anio = anio;
    this.tipoSeguro = tipoSeguro;
}

//todo lo que se muestra
function Interfaz() {}

Seguro.prototype.cotizarSeguro = function(){
    /*
    1 = americano 1.15
    2 = asiatico 1.05
    3 = europeo 1.35
    */
    
    let cantidad;
    const precioBase = 2000;

    switch(this.marca){
        case '1':
        cantidad = precioBase * 1.15;
        break;
        
        case '2':
        cantidad = precioBase * 1.05;
        break;

        case '3':
        cantidad = precioBase * 1.35;
        break;
    }
    
    //leer el anio
    const diferencia = new Date().getFullYear() - this.anio;
    
    //cada anio de diferencia hay que reducir el 3% del valor del seguro
    let valorReducido = cantidad - ((cantidad * 0.03) * diferencia)
    
    /*
        si el seguro es basico se multiplica por 30%
        si es completo 50%
    */
    
        if(this.tipoSeguro == 'basico'){
            valorReducido *= 1.30;
        }else{
            valorReducido *= 1.50;
        }
        
        return valorReducido;
}

Interfaz.prototype.mostrarMensaje = function(mensaje, tipo){
    const div = document.createElement('div');

    if(tipo == 'error'){
        div.classList.add('mensaje', 'error');
    }else{
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;

    //(elementoAinsertar, antesDeCualElemento)
    form.insertBefore(div,document.querySelector('.form-group'));

    //luego de 3 segundos se borra el div con el mensaje 
    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },2000);
}

//imprime el resultado de la cotizacion
Interfaz.prototype.mostrarResultado = function(seguro, cantidad){
    const divResultado = document.querySelector('#resultado');
    
    let marca;
    switch(seguro.marca){
        case '1':
            marca = 'Americano';
            break;
        
        case '2':
            marca = 'Asiatico';
            break;
        
        case '3':
            marca = 'Europeo';
            break;
    }

    //crear div
    const div = document.createElement('div');
    
    // insertar informacion
    div.innerHTML = `
        <p class='header'>Tu resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Anio: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipoSeguro}</p>
        <p>Total: ${cantidad}</p>
    `;

    const spinner = document.querySelector('#cargando img'); //selecciona el elemento img dentro del elemento con id 'cargando'
    spinner.style.display = 'block'; //cambia la propiedad display pre-establecida con css para mostrar el gif
    setTimeout(function(){
        spinner.style.display = 'none'; //oculta el spinner gif
        divResultado.appendChild(div);
    },2000)
    

}


//eventListeners

const form = document.querySelector('#cotizar-seguro');
form.addEventListener('submit', function(e){
    e.preventDefault();
    //obtengo la informacion seleccionada en el formulario
    const data = Object.fromEntries(new FormData(e.target));
    
    
    //crear una instancia de la interfaz
    const interfaz = new Interfaz();

    //validar entradas del formulario
    if(data.marca ==='' || data.anio === ''){
        interfaz.mostrarMensaje('Debes llenar todos los campos','error');
    }else{
        //eliminar los anteriores resultados
        const div = document.querySelector('#resultado');
        div.innerHTML = '';

        //instanciar seguro y mostrar interfaz
        const seguro = new Seguro(data.marca, data.anio, data.tipo);

        //cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        //mostrar resultado
        interfaz.mostrarResultado(seguro,cantidad);

        interfaz.mostrarMensaje('Cotizando...','exito');
    }
})


//para obtener el anio actual
const max = new Date().getFullYear();

//lleno dinamicamente el select de anio
const selectAnio = document.querySelector('#anio');

for(let i=max;i>=max-20;i--){
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnio.appendChild(option);
}