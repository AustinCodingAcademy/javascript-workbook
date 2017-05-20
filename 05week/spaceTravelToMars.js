'use strict';

var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
function CrewMember (name,job,specialSkill) { //creating a new class for crew members with 3 arguments
  this.name = name; //assign a name
  this.job = job; //assign a job
  this.specialSkill = specialSkill; //assign a skill
  this.ship = null; //declare a ship variable and don't assign anything yet

  this.enterShip = function (ship) { //declare enterShip method to enter a ship
    this.ship = ship; //assign a ship variable
    ship.crew.push(this); //and push the value inside of crew array in Ship. Crew array can't be empty anymore.
  }; //enterShip method ends
} //CrewMember class ends
var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry'); //instantiation of CrewMember with given parameters

function Ship (name,type,ability) { //creating a new class for ship with 3 arguments
  this.name = name; //assign a name
  this.type = type; //assign a type
  this.ability = ability; //assign an ability
  this.crew = []; //declare an empty array and assign to crew

  this.missionStatement = function () { //creating a method to perform a misson
    const correctJob = this.crew.some((person) => { //if crew array isn't empty
      return jobTypes[person.job] === this.type; //return crew member's job and type...
    });// in other words look for key-value match for each pair in jobTypes object.

    if (correctJob) { //if it matches
      return this.ability; //return ship's ability
    } else { //otherwise
      return "Can't perform a mission yet."; //return this string
    }
  }; //missionStatement method ends
} //Ship class ends
var mav = new Ship ('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit'); //instantiation of Ship with given parameters
rick.enterShip(mav);
console.log(mav.missionStatement());

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
