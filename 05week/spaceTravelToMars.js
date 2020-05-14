'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here

//you wnat CrewMember class
// constructor should take in as input: name, their job, their specialSkill
// have an attribute "ship", this is the ship they are in

class CrewMember {
  constructor(name, job, specialSkill){
      this.name = name;
      this.job = job;
      this.specialSkill = specialSkill;
      this.ship = null;
  }

//this method should ass THIS crewmember to the ship being passed in
//NOTE: an entire ship instance is passed in, not just the name
//NOTE: the entire crewmember iS ADDED 
  enterShip(someShip){
        this.ship = someShip;
        someShip.crew.push(this);
    }
  }

class Ship {
  constructor(name, type, ability){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
//have a list of crew that starts out empty "crew = [];"
  }
//this method should return the ship's ability if there is a crew 
//whose job matches up with the ships type
//otherwise should return "Cant perform a mission statement yet."
  missionStatement(){
    if(this.crew.length === 0){
      return "Can't perform a mission yet."
    }
    else {
      return this.ability;
    }
  }
}


//you want a ship class
//constructor should take in as input: name, type, ability
//have a list of crew, that starts out empty
//ship should have a "missionStatement()",
//if there is a crew member that can activate it, it should return the ships ability 
//otherwise it should return "Can't perform a mission yet."



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
