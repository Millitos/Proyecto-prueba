//temperaturas

export class Temperature{
    constructor(Tcelsius){
        this._Tcelsius = Tcelsius;
    };

    get(){
        return this._Tcelsius;
    }

    set(newTcelsius){
        this._Tcelsius = newTcelsius;
    }

    farenheit(Tcelsius){
        return (Tcelsius * (9/5)) + 32;
    }

    kelvin(Tcelsius){
        return Tcelsius + 273.15;
    }
}
