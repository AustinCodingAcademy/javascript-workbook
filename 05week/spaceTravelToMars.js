'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};



// Build a class of CrewMember 
// build an instance of CrewMember --- crew member that requires name, job, skill and ship.
// check for rick martinez & make sure that his job and skills align with the test 
// build the entership method to push the crew member to the ship
// build a class of ship, add requirements to it based off of tests
// write the mission statement to declare if ship can succesfully complete mission
// if there are no crewmembers, ship will not be able to complete mission, if there are CMs, ship can.
class CrewMember {
constructor(name,job,specialSkill){
  this.name=name;
  this.job=job;
  this.specialSkill=specialSkill;
  this.ship=null;
}

enterShip(ship){
  this.ship = ship;
  ship.crew.push(this);
}
  

}
class Ship{
  constructor(name,type,ability){
    this.name=name;
    this.type=type;
    this.ability=ability;
    this.crew=[];
  }
  missionStatement(){
    if(this.crew.length > 0 ){
      return this.ability;
    }else{
       return "Can't perform a mission yet.";
    }
  }
}





// const crewMember1=new crewMember ('Rick Martinez','pilot','Chemistry');
// crewMember1.printOutName();
// // const crewMember2=new crewMember('commander Lewis','commander','geology');
// // crewMember2.printOutName();

// const crew= new crew('','roll out');






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
// checking to see if Rick can enter the ship (MAV).
// ship would be a class 
// instance is MAV 
    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });
// create a class of ship 
// create instance of ship called MAV, have it's props align with the test descripts

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    // call the 'enterShip' and the ship will do what it's supposed to do
    // if no CM return 'can't perform mission statement'
    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      // ship
      
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      // cm1
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      // another ship 
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      // cm2
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}

