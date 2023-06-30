//distancias 

export class Distance{
    constructor(dMetros,unit){
        this._dMetros = parseFloat(dMetros);
        this._unit = unit;
        this._newD = 0;

        switch (this._unit){
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

    get newD(){
        return this._newD;
    }
    
    set(newDmetros){
        this._dMetros = newDmetros;
    }

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