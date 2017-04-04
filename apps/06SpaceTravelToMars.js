'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// This Creates a CrewMember class (factory) to create CrewMembers with different properties.
class CrewMember {
    // create a constructor: to tell the user what is required to build a CrewMember.
    // To create a CrewMember we would type: var rick = new CrewMember("Rick Martinez", "Pilot", "Chemistry");
    constructor(name, job, specialSkill, ship){
      // Then I set out what properties are used to build each CrewMember.
      // this. creates a var this = {};
      // and inside the {} are properties like name, job, specialSkill, ship and the METHOD enterShip.
      this.name = name;
      this.job = job;
      this.specialSkill = specialSkill;
      this.ship = null;
      this.enterShip = function(name){
        // This is the code that is calling on the METHOD enterSHip and passing mav as an argument
        // crewMember1.enterShip(mav);
        // It needs to assign the ship(name) of the property ship of CrewMember. 
        this.ship = name;
        // Then it needs to .push a CrewMember on to the array of the crew property in Ship. 
        name.crew.push(this);
        // This is the example Jon gave me to ask what is the value of: var me = this?? = mav
        // These are the tests it is running against:
        // crewMember1.enterShip(mav);
        // assert.equal(crewMember1.ship, mav);
        // assert.equal(mav.crew.length, 1);
        // assert.equal(mav.crew[0], crewMember1);
        }
    }
}

class Ship {
  constructor(name, type, ability, crew){
    this.name = name;
    this.type = type;
    // Need to access the object jobTypes then assign the value of that property to it to later compare it to the abilities of the crewMember
    this.ability = ability;
    // jobTypes.this.type;
    this.crew = [];
    this.missionStatement = function(){
      // Need to evaluate if this.type matches the value of jobType[this.crew[job]]
      // maybe create a var like target = this.crew[i] use a 
      console.log(this.crew);
      for (var i = 0; i < this.crew.length; i++){
        console.log(this.crew[i].job);
        // var crewMemberJob = this.crew[i];
        // if (jobTypes[crewMemberJob].job = this.type){
        // create a var that stores the value of 
        if (jobTypes[this.crew[i].job] === this.type){
          return this.ability;
        }    
      }  
      return "Can't perform a mission yet.";
    }
  }
}

        // for(var crewmember of smyship.crew) { 
        // if(jobTypes[crewmember.job] == myship.type){
        // return myship.ability;
        // or
        // this.crew.forEach()
        // After writing line 47 and 51 I am failing three instead of ONE!!
        // if (jobTypes.this.crew.job === jobTypes[this.crew.job]){
        // Problem is in line 52, it can't read the undefined crew
        // how to we access each and every crew that's on the ship and read their job?
        // this.crew.index !> -1 
        // this.crew[i.job !== this.ability]
        // Need to compare the ships type to the key that corresponds in var jobTypes
        // Then need to 
        // jobtypes.i === this.type {
        // return (ability);
        // this.ability = this.crew.job;

        // this method will return "Can't perform a mission yet." if none of the ship's crew has the correct job that matches this ship type; 
        // and it will return this ship's ability if there is a crew member that has a correct job that matches the ship type.

        // This creates an example Ship named Mav.
        // var mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into Low Orbit");

        // This is the function I need to build. After I build this I should be able to put any CrewMember in to any Ship
        // rick.enterShip(mav);

        //  var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
        //  var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

        //  crewMember1.enterShip(mav);

        //  tests


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
