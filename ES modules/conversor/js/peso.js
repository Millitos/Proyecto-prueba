//peso

export class Weight{
    constructor(pKilogramos){
        this._pKilogramos = pKilogramos;
    }

    get(){
        return this._pKilogramos;
    }

    set(newPkilogramos){
        this._pKilogramos = newPkilogramos;
    }

    libras(pKilogramos){
        return pKilogramos * 2.20462;
    }

    gramos(pKilogramos){
        return pKilogramos * 1000;
    }

}