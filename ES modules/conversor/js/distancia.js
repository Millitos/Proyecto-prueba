//distancias 

export class Distance{
    constructor(dMetros){
        this._dMetros = dMetros;
    }

    get(){
        return this._dMetros;
    }
    
    set(newDmetros){
        this._dMetros = newDmetros;
    }

    pies(dMetros){
        return dMetros * 3.28084;
    }

    kilometros(dMetros){
        return dMetros/1000;
    }

    centimetros(dMetros){
        return dMetros * 100;
    }
}