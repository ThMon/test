
/***************************
 * Classe "Creature"
****************************/

class Creature {
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


/***************************
 * Classe "Orque"
****************************/

class Orc extends Creature {
  constructor(name, age, strength) {
    super(name, age, strength);
  }

  scream(words) {
    console.info(this.name + ' screams : ' + words.toUpperCase() + ' !!!');
  }
  
  bite(someone) {
    if (!(someone instanceof Creature)) {
      throw new Error("`someone` is not a Creature");
    }
  
    console.info(this.name + ' bites ' + someone.name + ' to the neck !');
  }
}

/***************************
 * Classe "Uruk-hai"
****************************/

class Urukhai extends Orc {
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

/***************************
 * Classe "Chief Orc"
****************************/

class ChiefOrc extends Orc {
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

/*************
 * Invocation
**************/

let myCreature = new Creature("Kreattur", 45, 10);
let myOrc = new Orc("Orka", 15, 100);
let myUrukhai = new Urukhai("Uruck", 500);
let myChief = new ChiefOrc("BigBoss", 30, 200);


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
