'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here

function CrewMember(name, job, specialSkill){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
    this.enterShip = function(thisShip){
        this.ship=thisShip;
        thisShip.crew.push(this);
    }
}
var rick = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var commander = new CrewMember('Commander Lewis', 'commander', 'geology');
var hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  //missionStatement
  this.crew = [];
    this.missionStatement = function(){
      console.log("IM IN MISSION STATEMENT");
      if(this.crew.length > 0){
      for (var i = 0; i<this.crew.length; i++){
         if(this.crew[i].job ==="pilot" && this.type==="MAV"){
            console.log(this.ability);
         return this.ability;
         }
         else if(this.crew[i].job ==="mechanic" && this.type==="Repair Ship"){
            console.log(this.ability);
            return this.ability;
         }
         else if(this.crew[i].job ==="commander" && this.type==="Main Ship"){
            console.log(this.ability);
            return this.ability;
         }
         else if(this.crew[i].job ==="programmer" && this.type==="Any Ship"){
            console.log(this.ability);
            //console.log("result of this.crew[i].job "+this.crew[i].job);
            return this.ability;
         }

       else {
     return this.crew[i] + ' ' + this.type + "Can't perform this mission yet!";
  }}}else{
     return "Can\'t perform a mission yet.";
 }
}
}

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var hermes = new Ship ('Hermes', 'Main Ship', 'Interplanetary Space Travel');
rick.enterShip(mav);
console.log("ABOUT TO TEST MAV");
console.log(mav.missionStatement());


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
