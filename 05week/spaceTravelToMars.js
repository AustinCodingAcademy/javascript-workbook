'use strict';

var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
// Spec 1
function CrewMember(name, job, specialSkill) {
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
  // Spec 3
  // Crew member can enter a ship via the method enterShip -- Right there, we
  // know it is a function.
  this.enterShip = function(ship) {
    // We are redefining this ship here, in the previous line, it was null.
    this.ship = ship;
    // The dot notation is kind of confusing to me, what is another way to write this out?
    ship.crew.push(this);
  };
}

var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
rick;

// Spec 2
function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];

// Mission Statement should loop through the array to make sure you have
// the right crewmember on board.

  this.missionStatement = function () {
    const found = this.crew.some((crewMember) => {
      return jobTypes[crewMember.job] === this.type;
    });
    if (found) {
      return this.ability;
    } else {
      return "Can't perform a mission yet.";
    }
  }
}

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
mav;

// Spec 3
rick.enterShip(mav);
console.log(rick.ship.name);
console.log(mav.crew.length);
console.log(mav.crew[0].name);
console.log(rick.ship === mav);
console.log(mav.crew.indexOf(rick) === 0);
// function enterShip(CrewMember())



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
