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

//Display - clase que interactua con los botones y muestra lo que necesitemos mostrar en el display
class Display{
    constructor(displayValorAnterior,displayValorActual){
        //valores que se muestran en el html
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        //valores que se guardan al dar click a un btn con clase numero
        this.valorActual = '';
        this.valorAnterior = '';
    }

    //cuando pulsemos un boton,vamos a setear el valorActual del display como ese numero clickeado
    agregarNumero(numero){
        //si el numero pasado como argumento es un punto y ademas el valor actual previamente
        //seteado tambien es un punto, entonces se sale del metodo y no agrega el numero
        if(numero === '.' && this.valorActual.includes('.')){
            return
        }  
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    //muestra los valores de los btnes clickeados en el display de la calculadora html
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

}

//crea una instancia con valores en los display vacios
const display = new Display(displayValorAnterior,displayValorActual);


botonesNumeros.forEach(boton =>{ //recorre todos los botones que tengan numeros 
    boton.addEventListener('click', ()=>{ //agg eventlistener de click a cada boton
        display.agregarNumero(boton.innerHTML); //llama la funcion aggNumero de la instancia display y pasa el valor de ese bton
    });
});