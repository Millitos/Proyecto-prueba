const cargarPost = document.querySelector('#cargar');
const divContainer = document.querySelector('#listado');

cargarPost.addEventListener('click', cargarAPI);

function cargarAPI(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
            const users = JSON.parse(this.responseText);

            let templateHTML = ``;

            users.forEach((user)=>{
                templateHTML += `<ul>
                                    <li>${user.id}</li><br>
                                    <h3>${user.title}</h3>
                                    <p>${user.body}</p>
                                </ul>`;
            });
            divContainer.innerHTML = templateHTML;
        }
    }

    xhr.send();
}