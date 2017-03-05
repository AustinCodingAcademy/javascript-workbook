'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

function CrewMember(name, job, specialSkill) {
  // this = the particular CrewMember (ie. rick)
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  //ship is set to null because it's a status that says whether or not he is inside of a ship.
  this.ship = null;
  this.enterShip = function(someShip) {
    //we use the parameter someShip so that we know to pass in a ship, but we're not using Ship. This will help us not get confused. :)
    someShip.crew.push(this);
    //here we're pushing a crew member into the ship we passed into the parameter above. 'this' is the particular crew member that we're pushing into the ship. Since enterShip is a method taught to this object, we can just use 'this' instead of stating the CrewMember.
    this.ship = someShip;
    //here we're updating ship because the CrewMember (or 'this') is now inside of a particularship.
  }
  // this.exitShip = function(someShip) {
  //
  //   someShip.crew.pop(this);
  // }
}

function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
  this.missionStatement = function() {
    console.log(this.crew)
    for (var i = 0; i < this.crew.length; i++) {
      var currentCrewMemberJob = this.crew[i].job;
      if (jobTypes[currentCrewMemberJob] === this.type) {
        // compare this job to a key in the jobTypes variable. Then we need to use the value of the matched jobType key and compare that to the Ship.type
        // Dont search through to see if it matches, use the string as a key.
        return this.ability;
      }
    }
    return "Can't perform a mission yet."
    //Must use 'this' is the method when referring to the particular ship. the crew member isn't a parameter, it's in the crew. Maybe it's the jobType?
    //So I know that I need to need to loop over each crew member in the crew array, then in the body of the loop, check the job of the 'current crew member' sure that it correctly matches up with the ship's type.
    //I know that the link to these connections is the jobType variable.
    //I do not need to pass anything into the function like we did with enterShip.
    //I know that I cannot make a new part of Ship called jobNeeded bc that won't pass the tests below.
  }
}

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
