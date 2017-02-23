'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// var jobMatch = false; //don't have to do this: could just use the return statement's feature (jumping out of the loop)

// Your code here

//create the crewMember class
class CrewMember{
  constructor(name, job, specialSkill) {
//assign the parameters to the newly-created propeties of the crewMember class 
    this.name = name;
    this.job = job;
    this.jobType = jobTypes[this.job];
    this.specialSkill = specialSkill;
    this.ship = null;
    this.enterShip = function(Ship) {
//assign the ship to the crewmember class's property
    this.ship = Ship;
//push the crew member into the ship class's crew array 
    Ship.crew.push(this);
    }
  } 
}

//create the ship class
class Ship{
  constructor(name, type, ability) {
    //assign the parameters to the newly-created propeties of the ship class 
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  this.missionStatement = function() {
  //see if any of this ship's crew member's special skill matches the ship's type 
    var shipType = this.type;
    var shipAbility = this.ability;
    for (var crewStaff of this.crew) {
    // this.crew.forEach(function(crewStaff){
      // why doesn't forEach() method work? 
      //look for the type match 
      if (crewStaff.jobType === shipType) {
        // return the ship's ability
        return shipAbility;
      } 
    };
    //otherwise, just print out the error message 
    return "Can't perform a mission yet."; 
    }
  }
}

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
