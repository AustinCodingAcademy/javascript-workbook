'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
class CrewMember { // create the class, CrewMember and include properties name, job, and secial skill
  constructor(name, job, specialSkill){ // pass properties here through the constructor 
    this.name = name; // assign the value of the passed perameter name to name (name of CrewMember)
    this.job = job; // assign the value of the  passed peramter job to job (CrewMember job here)
    this.specialSkill = specialSkill; // assign the value of the  passed parameter special skill to special skill
    this.ship = null; // create variable ship and initialize its value to null
    this.enterShip = function(ship) { // create the enter ship method inside crew member, pass parameter ship
         this.ship = ship; // assign the value of the passed parameter ship to ship
         this.ship.crew.push(this); // now push crewmember onto the ship, 
    }
  }
}

var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry'); // create new CrewMember 'rick'


class Ship { //create class ship here
  constructor(name, type, ability){ // pass parameters name,type and ability through the constructor here
    this.name = name; // assign the value of name here (this will be the name of any ships created)
    this.type = type; // assign the value of type here (this will be the type of ship created)
    this.ability = ability; // assign the  value of ability here (This will be the ships ability or purpose)
    this.crew = []; // create empty array to store the crewmembers to be pushed onto the ship
    this.missionStatement = function(theShip) { // missionStatement function, passing theShip as a parameter
         for (var i = 0; i < this.crew.length; i++) { // for loop which cycles over the length of the crew array
             var jobCheck = this.crew[i].job; // jobcheck will take the value of the crewmembers job and store it
             var typeOfShip = jobTypes[jobCheck]; //typeOfShip will equal the value of the jobcheck indexed through 
                                                 // jobTypes and store the string value of that jobtype
             if (typeOfShip === this.type) { // if the typeofShip matches the type of ship passed in Ship(true)
                 return this.ability;       // then return the ships ability
             }
         }
         return "Can't perform a mission yet."; // else return we have no crewmembers that match types
     };

  }
}

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit'); // create new ship here

rick.enterShip(mav);
mav.missionStatement();

rick.enterShip(mav);
console.log(rick.ship.name); //=> 'Mars Ascent Vehicle'
console.log(mav.crew.length); //=> 1
console.log(mav.crew[0].name); //=> 'Rick Martinez'
console.log(rick.ship === mav); //=> true
console.log(mav.crew.indexOf(rick) === 0); //=> true


//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      var hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      var crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
