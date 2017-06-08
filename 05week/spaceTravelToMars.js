'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

function crewMember(name, job, specialSkill, ship){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;

}

//Spec 1
var jason = new crewMember('Jason Rowlett', 'pilot', 'aeronautics');
console.log(jason);

function Ship(name, type, ability, crew) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];

}

//Spec 2
var oss = new Ship('Orbital Spaceship', 'OSS', 'Orbiting Earth at slow speed');
console.log(oss);

oss.crew.push(1);
console.log(oss.crew);

//Spec 3
var oss = new Ship('Orbital Spaceship', 'OSS', 'Orbit Earth and slow speed');
var zoidberg = new CrewMember('John Zoidberg', 'pilot', 'commander');

zoidberg.enterShip(OSS);
console.log(zoidberg.ship.oss);
console.log(oss.crew.length);
console.log(oss.crew[0].name);
console.log(zoidberg.ship === oss);
console.log(oss.crew.indexOf(zoidberg) === 0);

//Spec 4
class missionStatement = 'Can/t perform a mission yet';
function(){
  var oss = new Ship('Orbital Spaceship', 'OSS', 'orbit earth at slow speed');
  var crewMember1 = new CrewMember('Jason Rowlett', 'pilot', 'aeronautics');
  var crewMember2 = new CrewMember('John Zoidberg', 'doctor', 'psychiatry');
  assert.equal(oss.missionStatement(), "Can't perform a mission yet.");
  assert.equal(zoidberg.missionStatement(), "Can't perform a mission yet.");

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
