/*************************************
 * Déclaration
 *************************************/

class Calculette {
    constructor(nb1, nb2) {
        this._nb1 = nb1;
        this._nb2 = nb2;
    }

    get nombre1() {
        return this._nb1;
    }
    get nombre2() {
        return this._nb2;
    }

    set nombre1(value) {
        if(typeof value !== 'number') { 
            throw new Error(`Ceci n'est pas un nombre !`); 
        }

        this._nb1 = value;
    }
    set nombre2(value) {
        if(typeof value !== 'number') { 
            throw new Error(`Ceci n'est pas un nombre !`); 
        }

        this._nb2 = value;
    }

    additionner() {
        return this._nb1 + this._nb2;
    }

    multiplier() {
        return this._nb1 * this._nb2;
    }

    diviser() {
        if(this.nombre2 == 0) {
            throw new Error('La division par zéro est interdite');
        }

        return this._nb1 / this._nb2;
    }

    soustraire() {
        return this._nb1 - this._nb2;
    }

    modulo() {
        if(this.nombre2 == 0) {
            throw new Error('La division par zéro est interdite');
        }

        return this._nb1 % this._nb2;
    }
}

/*************************************
 * Invocation
 *************************************/

let myCalc = new Calculette(5, 8);

myCalc.additionner(); // 13
myCalc.multiplier(); // 40
myCalc.diviser(); // 0.625
myCalc.soustraire(); // -3
myCalc.modulo(); // 5

myCalc.nombre1 = 4;
myCalc.nombre2 = 3;

myCalc.additionner(); // 7
myCalc.multiplier(); // 12

// Grâce au setter sur les propriétés "nombre1" et "nombre2", on peut contrôler la valeur affectée et si besoin lever une erreur

myCalc.nombre1 = "hacked!"; // Uncaught Error: Ceci n'est pas un nombre !
myCalc.nombre2 = null; // Uncaught Error: Ceci n'est pas un nombre !