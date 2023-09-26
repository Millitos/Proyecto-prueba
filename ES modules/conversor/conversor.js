import {Distance} from "./js/distancia.js";
import {Weight} from "./js/peso.js";
import {Temperature} from "./js/temperatura.js";

//temperaturas
const pTemperatura = document.querySelector("#result-temp");
const selectTemperatura = document.querySelector("#select-temp");
const temperature = document.querySelector("#temp");

selectTemperatura.addEventListener('input',function(e){

    //comprobar input de temperatura
    if(temperature.value === ""){
        alert("Debes poner un valor de temperatura en celsius!");
    }else{
        
        const unitSelected = e.target.value;
        const temperatureValue = temperature.value;

        const temp = new Temperature(temperatureValue,unitSelected);
        
        pTemperatura.innerHTML = `${temp.newT} ${unitSelected}`;
    
        
        
    }
});

//peso
const pPeso = document.querySelector('#result-peso');
const selectPeso  = document.querySelector("#select-peso");
const peso = document.querySelector("#peso");

selectPeso.addEventListener('input',function(e){
    if(peso.value === ""){
        alert("Debes poner un valor de peso en kilogramos!")
    }else{
        const unitSelected = e.target.value;
        const pesoValue = peso.value;

        const weight = new Weight(pesoValue,unitSelected);

        pPeso.innerHTML = `${weight.newW} ${unitSelected}`;

    };
});

//distancia
const pDistancia = document.querySelector('#result-dist');
const selectDistancia = document.querySelector('#select-distancia');
const distancia = document.querySelector('#distancia');

selectDistancia.addEventListener('input', function(e){
    if(distancia.value === ""){
        alert("Debes poner un valor de distancia en metros!");
    }else{
        const unitSelected = e.target.value;
        const distanciaValue = distancia.value;

        const distance = new Distance(distanciaValue,unitSelected);

        pDistancia.innerHTML = `${distance.newD} ${unitSelected}`;
    }   
})