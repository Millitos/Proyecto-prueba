//temperaturas

export class Temperature{
    constructor(Tcelsius,unit){
        this._Tcelsius = parseFloat(Tcelsius);
        this._unit = unit;
        this._newT = 0;
        switch(this._unit){
            case 'kelvin':
                this.kelvin(this._Tcelsius);
                break;
            case 'farenheit':
                this.farenheit(this._Tcelsius);
                break;
        }
    };

    get Tcelsius(){
        return this._Tcelsius;
    }

    get newT(){ 
        return this._newT;
    }

    set(newTcelsius){
        this._Tcelsius = newTcelsius;
    }

    farenheit(Tcelsius){
        this._newT = (Tcelsius * (9/5)) + 32;
    }

    kelvin(Tcelsius){
        this._newT = Tcelsius + 273.15;
    }
}
