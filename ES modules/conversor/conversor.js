import {Distance} from "./js/distancia.js";
import {Weight} from "./js/peso.js";
import {Temperature} from "./js/temperatura.js";

//temperaturas
const pTemperatura = document.querySelector("#result-temp");
const selectTemperatura = document.querySelector("#select-temp");

selectTemperatura.addEventListener('input',function(e){
    //comprobar input de temperatura

    console.log(e.target.value);
})
