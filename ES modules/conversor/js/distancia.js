//distancias 

export class Distance{
    constructor(dMetros,unit){
        this._dMetros = parseFloat(dMetros);
        this._unit = unit;
        this._newD = 0; //creo un atributo que no esta como parametro en el constructor
                        //este atributo almacena el valor luego de ser convertido

        //segun el tipo de unidad al cual se va a convertir los metros evalua el switch
        switch (this._unit){
            //los string de los case deben coincidir con los strings de los value
            //de los option del html
            case 'pies': 
                this.pies(this._dMetros);
                break;
            case 'kilometros':
                this.kilometros(this._dMetros);
                break;
            case 'centimetros':
                this.centimetros(this._dMetros);
        }
    }

    get dMetros(){
        return this._dMetros;
    }

    //funcion que devuelve el valor ya convertido
    get newD(){
        return this._newD;
    }
    
    set(newDmetros){
        this._dMetros = newDmetros;
    }

    //funciones para convertir de metros a otra distancia segun corresponda
    pies(dMetros){
        this._newD = dMetros * 3.28084;
    }

    kilometros(dMetros){
        this._newD = dMetros/1000;
    }

    centimetros(dMetros){
        this._newD = dMetros * 100;
    }
}