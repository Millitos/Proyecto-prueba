//conexion con empleado
const boton1 = document.querySelector('#boton1');

boton1.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);
    
    xhr.onload = function(){
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
            const persona = JSON.parse(this.responseText);
            cargarPersona(persona);
        }
    }

    xhr.send();
});

function cargarPersona(persona){

    const container = document.querySelector('#empleado');
    const ul = document.createElement('ul');
    // container.insertBefore(ul,document.querySelector("h2"));
    let claves = Object.keys(persona); // claves = ['id','nombre','empresa'...]
    for(let i=0; i<claves.length; i++){
        let clave = claves[i];
        const li = document.createElement('li');
        li.innerHTML = persona[clave];
        ul.appendChild(li);
    }

    container.appendChild(ul);
}

//conexion con empleados
const boton2 = document.querySelector('#boton2');

boton2.addEventListener('click', function(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET','empleados.json', true);

    xhr.onload = function(){
        // console.log(this.status);
        if(this.status === 200){
            const personas = JSON.parse(this.responseText);
            cargarPersonas(personas);
        }
    }

    xhr.send();
});

function cargarPersonas(personas){
    const container = document.querySelector('#empleados');

    const ul = document.createElement('ul');
    console.log(personas);
    personas.forEach((persona)=>{
        const li = document.createElement('li');
        li.innerHTML = `${persona.id}<br>
                        ${persona.nombre}<br>
                        ${persona.empresa}<br>
                        ${persona.trabajo}`;
        ul.appendChild(li);
    })

    container.appendChild(ul);
}