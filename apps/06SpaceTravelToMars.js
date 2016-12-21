'use strict';
//require assert
var assert = require('assert');

// in this object, the jobs are the keys and the ships are the values
// this object shows which jobs can fly which vehicles, i.e., a pilot can only fly a MAV, etc...
var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// CrewMember tests:
// 1) should have a name, a job, a specialSkill and ship upon instantiation
// 2) can enter a ship

// Ship tests:
// 1) should have a name, a type, an ability and an empty crew upon instantiation
// 2) can return a mission statement correctly

// Spec 1
function CrewMember(name, job, specialSkill) {
  // var this = {}
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
  // Spec 3
  // a CrewMember enters the ship thru the enterShip function
  // the enterShip function sets the Ship to the CrewMember
  // by calling enterShip method (function) on a CrewMember instance (this.enterShip)...
  // the ship property of that instance will be assigned to the argument passed into this method (function(myShip))..
  this.enterShip = function(myShip) {
    // which should be a Ship instance (myShip is the Ship Instance)...
    // pass an instance of Ship class (myShip) into enterShip method (function)...
    this.ship = myShip;
    // where is the CrewMember at this point?
    var whereIsTheCrewMember = this;
    // The ship instance is this.ship
    // The ship's crew array is in the function Ship() below, this.crew[], is where the [] bracket is the array of the crew
    // this method (enterShip function) should also push the 'CrewMember' instance (actual CrewMember)...
    // to the ship's crew array using .push(this)...
    // this is the crew that is on the ship
    this.ship.crew.push(this);
  }
}

// Spec 2
function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
  // Spec 4
  // in Ship class, write a method (function) missionStatement:
  this.missionStatement = function() {
    // if none of the ship's crew has the correct job that matches this ship type...
    // need to look at every crew member (i.e. everything in the crew array), meaning need to use a for loop

    for(var i = 0; i < this.crew.length; i++) {
      // what is the type of ship, to see if crew matches ship
      // the type of ship is this.type in the Ship function above
      // it will return this ship's ability (the property ability in the Ship function above)...
      var jobOfCrewMember = this.crew[i].job;
      // this is the variable that holds the object of key jobs to value ship types
      // how do we get out the ship type per job?
      // if the job type was 'pilot', the ship type would be 'MAV'
      var shipTypeCrewMemberCanFly = jobTypes[jobOfCrewMember];

      // and if there is a crew member that has a correct job that matches the ship type...
      if (this.type === shipTypeCrewMemberCanFly) {
        return this.ability;
      }
    }
    // this method (missionStatement function) will return "Can't perform a mission yet."...
    return "Can't perform a mission yet.";
  }
}

// Spec 3
var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
mav;
var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

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
