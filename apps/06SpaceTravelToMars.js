'use strict';
//require assert
var assert = require('assert');

var jobTypes = {
  "pilot": 'MAV',
  "mechanic": 'Repair Ship',
  "commander": 'Main Ship',
  "programmer": 'Any Ship!'
};

var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
//Spec 1
//if i was going to make rick as a normal plain object, what would I do
var rick = {
  name:'rick',
  job: 'pilot',
  specialSkill:'chemistry',
  ship:null
}

//Spec2
var mav = {
  name:'Mars Ascent Vehicle',
  type:'MAV', 
  ability:'Ascend into low orbit',
  crew:[]
}

enterShip(rick,mav);
//but i could have done this:
enterShip("rick",mav)// this isn't good
//Spec 3 - 
function enterShip(crewMember, myship){
  //ship property of crewmember should be assigned to the ship variable
  //what does that look like

  crewMember.ship = myship;
  //should also push the 'CrewMember' instance to the ship's crew array using .push(this)

  crewMember.ship.crew.push(crewMember);
  //or you could just do myship.crew.push(crewMember);
}

//Spec 4
function missionStatement(myship){
  //key words, if none
  //what does the phrase "ship's crew" translate to in terms of our code
  //how to get access to the specific crew of this ship

  //we need to look at every crew member
  //we need to look at everything in the crew member array
  //what does looking at everything in an array mean......



  for(var i =0; i < myship.crew.length;i++){
    var individualcrewmember =  myship.crew[i];//what is this line of code doing
    var jobofthecrewmember = individualcrewmember.job; 

    //this is the variable that holds the object of key jobs to value ship types
    //how do we get out the ship type per job
    //if the job was "pilot", then the ship type would be "MAV"
    var shiptypethatthiscrewmembercanfly = jobTypes[jobofthecrewmember];
    if(myship.type === shiptypethatthiscrewmembercanfly){
      return myship.ability; //why are we returning here
    }
  }
  return "Can't perform a mission yet.";

}

missionStatement(mav);
//again we can do a bad anything
missionStatement('mav');














// I don't want people to just create crew member object willy nilly
// I need to make sure they are created properly
//so i create a class
class CrewMember{
  constructor(name, job, specialSkill){
    //var this = {}; remember javascript creates the this variable for use
    // i could do something like this 
    if(name === ''){
      console.log("please give a crew member a name");
    }
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null; //putting this as null indcates crew members don't require a ship assigned to them, they can be on vacation
    //but we still want to show the existence of a property because it could be assigned


    //there is a method called enterShip
    //crew member is now ready to go to work
    //i don't want anything other than a crew member to enter a ship so i make enterShip a method to enforce this rule,
    this.enterShip = function(myship){ // 
      //i am in a function right now
      //there is a secret variable called this//
 
      //now every where you used the crew member variable before, just use "this" keyword
      this.ship = myship;

      //where is the ship instance
      //this.ship
      //where is the ship's crew array
      //this works because you just put ship here on line 132
      this.ship.crew.push(this);
      //you could have also done
      //myship.crew.push(this);

    }
    //return this - javascript does this for us
  }
}
///again,  I don't want people making Ship objects free hand so i create a class
class Ship {
  constructor(name, type, ability){
    //var this = {}
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];

    //again, the missionStatement function should only work with ships, so make it a method
    this.missionStatement = function(){

        //lets use ES6 for/of
        //what does of do 
        //it simplifies a wordy pattern
        //go rid of a wordy for loop didn't have to get the index of the specific item in the array
        for(var c of myship.crew){  // for(var i =0; i < myship.crew.length;i++)
          //didn't have to do var individualcrewmember =  myship.crew[i];
          //c is already the thing you want at the index
          if(jobTypes[c.job] == myship.type){
            return myship.ability;
          }
        }


        return "Can't Perform Mission Yet";
    }
  }
}

//this is how we create objects now, instead of with curly braces, object literals
//but the end result is the same thing
var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var rick = new CrewMember('Rick Martinez', 'mechanic', 'chemistry');
var jon = new CrewMember('jon','janitor','')

//the entership function is no longer just floating out in space globally
//you can only call it when you have an instance of a crew member
//you don't pass the crew member into it, javascript does that for you when you call the method off the object
// you can no longer make the mistake of passing in something other than a crew member
//you still have to pass the ship in because there can only be one thing that represents "this"
rick.enterShip(mav);
jon.enterShip(mav);

//same thing here. missionStatement is not just globally accesible, you have to have an instance of a ship object
//you no longer have to pass anything in because you are calling it off the object and javascript handles passing it in for you as "this"
//this method doesn't require anythign else so you don't have to pass anything in
var message = mav.missionStatement();



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
