//peso

export class Weight{
    constructor(pKilogramos,unit){
        this._pKilogramos = parseFloat(pKilogramos);
        this._unit = unit;
        this._newW = 0;

        switch(this._unit){
            case 'libras':
                this.libras(this._pKilogramos);
                break;
            case 'gramos':
                this.gramos(this._pKilogramos);
                break;
        }
    }

    get pKilogramos(){
        return this._pKilogramos;
    }

    get newW(){
        return this._newW;
    }

    set(newPkilogramos){
        this._pKilogramos = newPkilogramos;
    }

    libras(pKilogramos){
        this._newW = pKilogramos * 2.20462;
    }

    gramos(pKilogramos){
        this._newW = pKilogramos * 1000;
    }

}