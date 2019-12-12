/***************************
 * Classe "Creature"
 ****************************/

export default class Creature {
    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    saySomething(words) {
        console.info(this.name + " dit : " + words);
    }

    identity() {
        console.info(`
        NOM : ${this.name},
        AGE : ${this.age},
        STRENGTH : ${this.strength}`);
    }
}