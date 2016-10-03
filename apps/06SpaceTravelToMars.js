'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

function CrewMember(name, job, specialSkill){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
  // added the enter ship method for the crew members to board the ship.  Takes ship and calls the
  // the addCrewMember method and takes ship.
  this.enterShip = function(ship) {
    this.ship = ship;
    ship.addCrewMember(this);
  }
}

function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
  // Here we are simply creating a method to push a new crew member to the empty array and at that member
  // to the ship.
  this.addCrewMember = function(crewMember) {
    this.crew.push(crewMember);
  }
  // This method runs a loop through the crew also checking the job of that crew member and if
  // it equals the correct type the returns the ability, the crew member doesn't have the correct type
  // then they can't perform the mission.
  this.missionStatement = function() {
    for (var i = 0; i < this.crew.length; i++) {
      var jobs = this.crew[i].job;
      if (jobTypes[jobs] === this.type) {
        return this.ability;
      }
    }
    return 'Can\'t perform a mission yet.';
  }
}

// Created a main ship for ya boy to board and captain. El Capitan
var texan = new Ship('Texan', 'Main Ship', 'Hyper Drive');

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

// Created me as a new crew member and set me as a programmer since I aspire to be one.
var crewGabe = new CrewMember('Gabe Amaya', 'programmer', 'Beast Mode');

// calls crew member, Rick, to to enter the ship 'Mav' and ya boy to enter the main ship.
crewMember1.enterShip(mav);
crewGabe.enterShip(texan);


//tests
if (typeof describe !== 'undefined'){
describe('CrewMember', function(){
  it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
    var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    assert.equal(crewMember1.name, 'Rick Martinez');
    assert.equal(crewMember1.job, 'pilot');
    assert.equal(crewMember1.specialSkill, 'chemistry');
    assert.equal(crewMember1.ship, null);
  })

  it('can enter a ship', function(){
    var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    crewMember1.enterShip(mav);
    assert.equal(crewMember1.ship, mav);
    assert.equal(mav.crew.length, 1);
    assert.equal(mav.crew[0], crewMember1);
  })
})

describe('Ship', function(){
  it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
    var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    assert.equal(mav.name, 'Mars Ascent Vehicle');
    assert.equal(mav.type, 'MAV');
    assert.equal(mav.ability, 'Ascend into low orbit');
    assert.equal(mav.crew.length, 0);
  })

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
  })
})
}
