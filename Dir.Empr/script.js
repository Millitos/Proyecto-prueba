const add = () =>{
    //obtengo los valores introducidos por teclado del html
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let tbodyContainer = document.getElementById("tbody"); //almaceno el tag tbody donde voy a meter los tr
    let thQuantity = document.getElementsByTagName("tr").length; //almacena la cantidad de table rows
    let saveThQuantity = document.createTextNode(thQuantity); //pasa como texto la cantidad de tr dentro del tbody

    //creo los tags donde voy a agregar los datos de la tabla
    //tbody-> tr -> th,td
    let tr = document.createElement("tr");
    let th = document.createElement("th"); //crea un table header
    
    //le agrego al th el numero que va a almacenar y despues agrego el th al tr
    th.appendChild(saveThQuantity); //agg la cantidad de tr como hijo del th
    tr.appendChild(th); //agg dentro del tr el th y el td

    for (let i = 0; i<3; i++){ //para crear y llenar los 3 td
        let list = [document.createTextNode(name),
            document.createTextNode(email),
            document.createTextNode(phone)];
        var td = document.createElement("td"); //td-table data cell element
        //agg el nombre al td y luego ese td lo agrego al tr
        td.appendChild(list[i]);
        tr.appendChild(td);
    };

    tbodyContainer.appendChild(tr); //agg al tag padre tbody el tr y con el tr todo lo anterior 
};

const del = () => {
    let deleted = document.getElementsByTagName("tr");
    let deletedQ = deleted.length - 1;
    deleted[deletedQ].remove();
}