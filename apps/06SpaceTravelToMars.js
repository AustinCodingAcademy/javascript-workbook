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
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
  this.enterShip = function(ship){
    this.ship = ship;
    ship.crew.push(this); // enterShip() is a method. This means it is a function attached to an object.
  };
}
var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');

var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
var manny = new CrewMember('Manny Hagman', 'commander')
rick.enterShip(mav); // rick is an instance of CrewMember

function Ship(name, type, ability){
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
//enterShip() will add Ship to CrewMember

  this.missionStatement = function(name) {
    for (var i=0; i < this.crew.length; i++){
      var job = this.crew[i].job;
      if (jobTypes[job] === this.type) {
        return this.ability;
      }
    }
    return "Can't perform a mission yet."
  };
}


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
