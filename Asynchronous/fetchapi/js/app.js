let resultado = document.querySelector('#resultado');
//txt
const textBtn = document.querySelector('#txtBtn');

textBtn.addEventListener('click',cargarTxt);

function cargarTxt(){
    
    const url = './datos.txt';
    //funcion que carga la api
    fetch(url) //usualmente requiere 2 then(1.Conexion y traer info y 2.Ya tengo los datos)
        //conexion
        .then((res)=>{
            //con el .text le digo a la api como quiero que me devuelva los datos
            return res.text();//dentro del prototype estan los tipos de datos que puedo pedir text,json,etc...
        })
        //aca ya tengo los datos para acceder a ellos
        .then((data)=>{
            console.log(data);
            // const resultado = document.querySelector('#resultado');
            resultado.innerHTML = data;
        })
        //si es error
        .catch((error)=>{
            console.log(error);
        })
}

//json
const json = document.querySelector('#jsonBtn');

json.addEventListener('click',cargarJson);

function cargarJson(){

    const url = './empleados.json';

    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // console.log(data);
            resultado.innerHTML = ''; // limpia el elemento resultado del html
            data.forEach((dat)=>{
                console.log(dat);
                
                // const resultado = document.querySelector('#resultado');
                resultado.innerHTML += `<li>${dat.nombre} : ${dat.puesto}</li>`;
            })
        })
        .catch((error)=>{
            console.log(error);
        })
}

//rest api
const api = document.querySelector("#apiBTN");

api.addEventListener('click', cargarRest);

function cargarRest(){

    url ='https://picsum.photos/list';

    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            data.forEach((dat)=>{
                // const resultado = document.querySelector('#resultado');
                resultado.innerHTML += `<li>
                                        <a target="_blank" href="${dat.post_url}">Ver imagen</a> : 
                                        ${dat.author}
                                        </li>`;
            })
        })
}