'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};


// Whiteboarding - 
// Build classes called CrewMember and Ship 
// In the constructor for CrewMember, assign name, job, special skill. This.ship is null.
// In the constructor for Ship, assign name, nickname, mission. This.crew is an empty array with a length of 0 []. 
// Ship has a missionStatement() method
// CrewMember has a enterShip() method
// Build the instance of CrewMember for Rick Martinez
// Build the instance of CrewMember for Commander Lewis 
// Build the instance of Ship for mav
// Build the instance of Ship for Hermes
// Create method enterShip() within to put correct crew member on correct ship


// Your code here

class CrewMember {
  constructor(name, job, specialSkill, ship){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  enterShip(Ship) { 
    this.ship = shipName;
    shipName.crew.push(this)
    console.log(this)
  }
}

class Ship {
  constructor(name, type, ability, crew){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  missionStatement() {
  if (this.crew.length === 0) {
    return "Can't perform a mission yet";
  } else {
    return this.ability;
  }
  }
}

const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
const hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

crewMember1.enterShip(hermes)

//does a CrewMember class exist that requires name, job, skill, etc. 
// Checking for Rick Martinez as the instance of the class. 
// Ensure Rick's job and skills etc. align with test. 

if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });
// checking if crew member Rick Martinez can enter the Ship mav
    it('can enter a ship', function(){
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });
// does Ship class exist that requires name, type, ability, etc. 
// Checking that mav as the instance includes specific name, type, etc.
  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });
    // call enterShip method and the ship will complete mission if correct crew member aboard
    // if entership not called and crew member not aboard, mission cannot be performed 
    it('can return a mission statement correctly', function(){
      // ship
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    // crew member
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      // ship 2
      const hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      // crew member 2
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");
    crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");
      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");

    });
  });
}
