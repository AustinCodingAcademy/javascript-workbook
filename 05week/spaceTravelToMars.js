'use strict';

var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

function CrewMember(name, job, specialSkill, ship) { //creating class for Crewmembers
  this.name = name; //name passed in from above
  this.job = job; //job from above
  this.specialSkill = specialSkill; //skill from above
  this.ship = null; //ship from above--as to why it is null I cant remember
  this.enterShip = function(ship) { //creating method within crewmember object
    this.ship = ship; //setting this.ship to value being passed in as arg to method. has to be null originally because ship is unknown originally
    ship.crew.push(this); //pushing the crewmember object data into the Ship objects crew array
  }
}
var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry'); //creating an instance of CrewMember

function Ship(name, type, ability) { //creating class for ships
  this.name = name; //name of ship passed as arg
  this.type = type; //tyoe of ship also passed as arg
  this.ability = ability; //ability of ship also arg
  this.crew = []; //empty array to be filled as crew members are created and assigned to a ship
  this.missionStatement = function() { //creating method to check job type of crew member against ship type and accept into crew or reject on that basis
    if (this.crew.length > 0 && jobTypes[this.crew[0].job] === this.type) { //1st saying if crew exists inside this.crew array. -exists && the jobType for crew at index 0 matches type of job provided by ship
      return this.ability; //returning arg passed above as tests wants
    } else {
      return "Can't perform a mission yet."; //returning that the mission cant be performed, this may be unnecessary
    }
  }
}
var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit')

//tests
if (typeof describe === 'function') {
  describe('CrewMember', function() {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function() {
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function() {
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function() {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function() {
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function() {
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
