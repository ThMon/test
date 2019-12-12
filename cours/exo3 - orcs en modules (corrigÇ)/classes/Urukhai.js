import Orc from './Orc.js'
import Creature from './Creature.js'

/***************************
 * Classe "Uruk-hai"
 ****************************/

export default class Urukhai extends Orc {
    constructor(name, strength) {
        super(name, null, strength + 10);
    }

    kill(someone) {
        if (!(someone instanceof Creature)) {
            throw new Error("`someone` is not a Creature");
        }

        console.error(this.name + ' kills ' + someone.name + ' savagely !!!!!');
    }
}