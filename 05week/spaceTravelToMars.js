'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
class CrewMember {
  constructor(name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  
  //this method should add THIS crew member to the ship being passed in
  //note: an entire ship instance is passed in, not just the name
  //note: the entire crew member is added to the ships array of crew
  description (){
    if(this.ship == null) {
      return `${this.name} is a ${this.job} and isn't assign too a ship`; 
    } else {
      return `${this.name} is a ${this.job} and is assign to ${this.ship}`;
    }


}
 
  
   
 
  
enterShip(ship) {
  this.ship = ship;
  ship.crew.push(this);
  
  //crewMember1.assignedShip = mav
  //mav.crew.push(crewMember1);

}
}








class Ship {
  constructor(name, type, ability) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
// this method should return the ship's ability if there is a crew member
// whose job matches up with the ship's type

  missionStatement() {
    if(this.crew.length == 0 && this.crew.job == this.ship.ability) {
      return this.ability;
    } else {
      return "Can't perform a mission yet."
    }


  }
  
}
//created first crew member 
let rick = new CrewMember('Rick Martinez', 'pilot', 'Ascend into low orbit');
//console.log(crewMember1);
//created second crew member
let lewis = new CrewMember('Commander Lewis', 'commander', 'geology');
//console.log(crewMember2)
//created third crew member
let chris = new CrewMember('Chris Trevino', 'programmer', 'geology');
//created fourth crew member
let hitzel = new CrewMember('Hitzel Betts', 'mechanic', 'biology');

// ship one was created
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
//console.log(mav);
//ship two was created
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
//console.log(hermes);
// console logged the input below to make sure mission statement works
// put crew members into ship
rick.enterShip(mav)
lewis.enterShip(hermes)
chris.enterShip(mav)
//console.log(mav.missionStatement());

//now need to test PUSH for adding a crew member to ship
//mav.crew.push(crewMember1);
// Testing the output with console log
console.log(mav.missionStatement());
console.log(hermes.missionStatement());
// Putting crewMember1 into MAV
//crewMember1.assignedShip = mav
// wanted to test the get in ship method
//console.log(crewMember1.description());
// shows that crew member one isn't assigned to a ship..... yet
console.log(rick.description());
//console.log(mav);





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
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
