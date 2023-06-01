let add = () =>{
    //obtengo los valores introducidos por teclado del html
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    //Creo un elemento tipo td
    let td = document.createElement("td"); //td-table data cell element
    let saveName = document.createTextNode(name); //toma el elemento almacenado en "name" y lo guarda en saveName como nuevo texto
    td.appendChild(saveName); //agrega el texto como un hijo del tag td

    let labelContainer = document.getElementById("tableRow"); //almacena el tag con el id "tableRow" 
    labelContainer.appendChild(td); //agg en el tag almacenado en labelContainer el hijo td creado anteriormente

    console.log(name);
    console.log(email);
    console.log(phone);
}