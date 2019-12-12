import Creature from './classes/Creature.js'
import Orc from './classes/Orc.js'
import Urukhai from './classes/Urukhai.js'
import ChiefOrc from './classes/ChiefOrc.js'

/*************
 * Invocation
**************/

let myCreature = new Creature("Kreattur", 45, 10);
let myOrc      = new Orc("Orka", 15, 100);
let myUrukhai  = new Urukhai("Uruck", 500);
let myChief    = new ChiefOrc("BigBoss", 30, 200);


myCreature.identity(); // NOM : Kreattur
                      //  AGE : 45
                      //  STRENGTH : 10
myCreature.saySomething('Salut'); // "Kreattur dit : Salut"

myOrc.scream("heyho!"); // "Orka screams : HEYHO! !!!"
myOrc.bite(myCreature); // "Orka bites Kreattur to the neck !"

myUrukhai.scream("I'm gonna kill you !"); // "Uruck screams : I'M GONNA KILL YOU ! !!!"
myUrukhai.kill(myCreature); // "Uruck kills Kreattur savagely !!!!!"

myChief.isChief; // true
myChief.giveOrder(myUrukhai, "message"); // "BigBoss screams : HEY YOU, URUCK! MESSAGE !!!"
myChief.identity(); // NOM : BigBoss
                    // AGE : 30
                    // STRENGTH : 202
                    // ... and i am THE CHIEF, BITCHES!
