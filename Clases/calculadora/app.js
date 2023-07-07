//seleccion de elementos del html
const displayValorAnterior = document.querySelector('#valor-anterior');
const displayValorActual = document.querySelector('#valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
//console.log(botonesNumeros);

//Calculadora - clase que hace las operaciones - no necesita metodo constructor
class Calculadora{
    sumar(num1,num2){
        return num1 + num2;
    }
    restar(num1,num2){
        return num1 - num2;
    }
    dividir(num1,num2){
        return num1 / num2;
    }
    multiplicar(num1,num2){
        return num1 * num2;
    }
}

//valor anterior -> valor de arriba del display
//valor actual -> valor de abajo del display

//Display - clase que interactua con los botones y muestra lo que necesitemos mostrar en el display
class Display{
    //1. se setean los valores iniciales, vacíos
    constructor(displayValorAnterior,displayValorActual){
        //valores que se muestran en el html
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        // console.log(this.displayValorActual);
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined; //guarda el tipo de operación que está usando el usuario
        //variables que almacenan los valores que se guardan al dar click a un btn con clase numero
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-'
        };
    }

    borrar(){
        //recorta la ultima posicion del valor actual
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined; //reinicia el tipo de operación previamente clickeado
        this.imprimirValores();
    }

    //3.
    computar(tipo){
        //si tipoOperación es diferente de igual, entonces y solo entonces
        //se procede a calcular,no queremos que se sobrescriba la operación en curso
        //solo hasta que se use el boton igual, entonces ahi si se hace el calculo final
        this.tipoOperacion !== 'igual' && this.calcular();
        //luego de computar se va a calcular donde nuevamente reinicia el tipo de operación
        this.tipoOperacion = tipo; //se actualiza el tipo de operación al tipo actual
        //el valorAnterior, el que va arriba, pasa a ser el valorActual que estaba abajo
        //si no hay valor actual simplemente se deja el valorAnterior y solo se cambia el signo
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ''; //se vacía el valorActual para poder hacer mas operaciones
        this.imprimirValores();
    }

    //4.
    //función que guarda los valores como números para poder operar con ellos
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        //si alguno de los dos valores no es un numero entonces lo saca de la función
        if(isNaN(valorActual) || isNaN(valorAnterior)){
            // console.log('ola'); la 1ra vez siempre entra acá
            return
        }else{
            //busca en la clase Calculadora el tipo de operación
            //guarda en valorActual la operación que se haga con los valores previamente seteados
            this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
        }
    }

    /*2. se van cargando los valores en las respectivas variables del método constructor 
        gracias al eventListener creado para los botones con números*/
    //cuando pulsemos un boton,vamos a setear el valorActual del display como ese numero clickeado
    agregarNumero(numero){
        //si el numero pasado como argumento es un punto y ademas el valor actual previamente
        //seteado tambien es un punto, entonces se sale del metodo y no agrega el numero
        if(numero === '.' && this.valorActual.includes('.')){
            return
        }  
        //para que los valores se concatenen y no se sobreescriban
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    //muestra los valores de los btnes clickeados en el display de la calculadora html
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;         //if exists || else 
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion]|| ''}`;
    }

}

//crea una instancia con valores en los display vacios
const display = new Display(displayValorAnterior,displayValorActual);


botonesNumeros.forEach(boton =>{ //recorre todos los botones que tengan numeros 
    boton.addEventListener('click', ()=>{ //agg eventlistener de click a cada boton
        display.agregarNumero(boton.innerHTML); //llama la funcion aggNumero de la instancia display y pasa el valor de ese bton
    });
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value);
    })
})