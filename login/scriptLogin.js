function alertt(input,msg) {
    const eLabel = document.createElement("label");
    eLabel.setAttribute("id", input === "email" ? "eAlert":"e2Alert");
    eLabel.classList.add("form-label","text-danger");
    eLabel.textContent = msg;
    document.getElementById(input ==="email"?"divOne":"divSec").append(eLabel);
    
};


function submitt() {
    //e.preventDefault();
    if(document.getElementById("eAlert")){
        document.getElementById("eAlert").remove();
    }if(document.getElementById("e2Alert")){ //pongo dos if para que entre en ambos
        document.getElementById("e2Alert").remove();
    };
    let x = document.getElementById("email").value;
    let y = document.getElementById("password").value;
    //let f = document.getElementById("fform");
    
    if (x === ""){
        alertt('email',"PLease fill out the email!");
    }if (y === ""){ //pongo dos if para que entre en ambos
        alertt("password","Please fill out the password!");
    }
    
    //f.reset();
};

