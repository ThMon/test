var Perso = function(name, hp, attack, defense, magie) {

	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.magie = magie;
	

}


Perso.prototype.attaquer = function(perso) {
	var degats = this.attack - perso.defense
	if (degats < 10) {
		
		console.log(perso.name +'ne sent plus rien....' );
		degats = 10
	}

	perso.hp -= degats
	console.log(this.name +' Attaque, il enlève '+ degats + ' hp a '+ perso.name )

	if  (perso.hp <= 0) {
		perso.hp = 0;
	}

	console.log(perso.name +' a  '+ perso.hp+ ' hp' );

}

Perso.prototype.sort = function(perso) {

	if (this.magie > 0) {
		var degats = getRandomInteger(1, this.magie);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
		perso.hp -= degats;
		this.magie -=  degats;

		if  (perso.hp <= 0) {
			perso.hp = 0;
		}
		console.log(perso.name +' a  '+ perso.hp+ ' hp' );
	} else {
		console.log('Vous n avez plus de point de magie....')
	}
}

Perso.prototype.defendre = function() {
	var ratio =  Math.round(this.defense * Math.random());
	console.log(this.name+' augmente sa defense de '+ ratio + ' point ');
	this.defense += ratio/2;

	console.log(this.name +'a une defense à :'+ this.defense);
}

