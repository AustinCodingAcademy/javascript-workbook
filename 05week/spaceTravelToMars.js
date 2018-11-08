'use strict';

let assert = require('assert');

const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here

class CrewMember {
  constructor(name, job, specialSkill, ship){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  enterShip(ship){
    this.ship = ship;
    ship.crew.push(this.name);
  };
  missionStatement(CrewMember){
    if (CrewMember.enterShip(mav)){
      console.log("Ascend into low orbit");
    } else if (CrewMember.enterShip == 'hermes'){
      console.log("Interplanetary Space Travel");
    } else {
      console.log("Can't perform a mission yet.")
    }
  };
};

class Ship {
  constructor(name, type, ability, crew){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
};

const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
const hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry')
const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

console.log(crewMember1.enterShip(mav));
console.log(mav.crew);


//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      const hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
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
