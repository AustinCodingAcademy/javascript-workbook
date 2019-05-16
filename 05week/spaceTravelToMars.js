'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

<<<<<<< HEAD


// Build a class for CrewMember
class CrewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = ship;
  }
}
//Build a class for Ship
class Ship {
 constructor(name, type, ability, crew) {
   this.name = name;
   this.type = type;
   this.ability = ability;
   this.crew = crew [0];
   
   console.log(Ship);
 }
}


// Ship
let MAV = {
  name: 'Enterprise',
  type: 'MAV',
  ability: 'Warp Drive',
  crew: [],
};

// CrewMember
let Kirk = {
  name: 'James T. Kirk',
  job: 'pilot',
  specialSkill: 'being obnoxious',
  ship: null,
  };

MAV.crew.push(Kirk);

Kirk.ship = MAV;

console.log(MAV);

const isPilot = MAV.crew.filter(function(person) {
  return person.job === 'pilot' 
});

console.log(isPilot);

  

// enterShip(ship){
// this.ship;
// ship.crew.push(this);
// console.log()
//  }
// missionStatement(){

// }
=======
class CrewMember {
  constructor(name, job, specialSkill){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
  }

  enterShip(ship) {
    this.ship = ship;
    ship.crew.push(this);
    console.log();
  }
}
class Ship {
  constructor(name, type, ability){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
}

missionStatement(){
  if(this.crew.length > 0){
    return this.ability;
  } else {
    return "Can't perform a mission yet."
  }
}
}
>>>>>>> gh-pages

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
