class Ninja{
    constructor (name, health = 100, speed = 3, strength = 3){
        this._name = name;
        this._speed = speed;
        this._strength = strength;
        this._health = health;
    }
    sayName(){
        console.log(`${this._name} is a ninja`);
    }
    showStats(){
        if(this._health <= 0 ){
            console.log(`${this._name} is no more`);
        }
        else{
        console.log(`Name: ${this._name}\nSpeed: ${this._speed}\nstrength: ${this._strength}\nhealth: ${this._health}`);
        }

    }
    drinkSake(){
        this._health += 10;
        console.log(`${this._name} just drank sake.`);
    }   
    
    kick(ninja){
        var damage = this._speed * this._strength;
        ninja._health -= damage;
        console.log(`${this._name} tornado kicked ${ninja._name} and almost killed him`);
    }
    punch(ninja){
        this._health -= 5;
        console.log(`${this._name} Just dealth 5 damage`);
    }
}
var anisong = new Ninja ("Anisong");
var victor =  new Ninja ("Victor");
anisong.sayName();
victor.sayName();
anisong.showStats();
victor.showStats();
anisong.kick(victor);
victor.showStats();
