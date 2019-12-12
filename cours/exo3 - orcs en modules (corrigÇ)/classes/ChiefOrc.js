import Orc from './Orc.js'
import Creature from './Creature.js'

/***************************
 * Classe "Chief Orc"
 ****************************/

export default class ChiefOrc extends Orc {
    constructor(name, age, strength) {
        super(name, age, strength + 2);
        this.isChief = true;
    }

    giveOrder(someone, message) {
        if (!(someone instanceof Creature)) {
            throw new Error("`someone` is not a Creature");
        }

        this.scream("Hey you, " + someone.name + "! " + message);
    }

    identity() {
        super.identity();
        console.info("... and i am THE CHIEF, BITCHES!");
    }
}