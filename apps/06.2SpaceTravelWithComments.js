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
//Spec 1
//if i was going to make rick as a normal plain object, what would I do
var rick = {
  name:'rick',
  job: 'pilot',
  specialSkill:'chemistry',
  //ship:null maybe he is suppose to have a ship but i forgot to put one there
}

//Spec2
//make a normal plain object to represent a MAV ship
var mav = {
  name:'Mars Ascent Vehicle',
  type:'MAV', 
  //ability:'Ascend into low orbit', //maybe its suppose to have an ability but i forgot to put it there
  crew:[]
}

//Spec 3 - 
//how do i make a normal function that takes a crewmember object and a ship object and does something with them
function enterShip(crewMember, myship){
  //ship property of crewmember should be assigned to the ship variable
  //what does that look like
  crewMember.ship = myship;
  //should also push the 'CrewMember' instance to the ship's crew array using .push(this)
  myship.crew.push(crewMember);
  //or you could just do myship.crew.push(crewMember);
}
//call the function sending in arguments rick, ship. 
//we can just call the function here because its global
enterShip(rick,mav);
//but i could have done this:
enterShip("rick",mav)// this isn't good. this would cause unexpected behavior
//Spec 4
//how do i make a normal function that takes a ship object as a parameter and does something to it
function missionStatement(myship){
  //what does the phrase "ship's crew" translate to in terms of our code
  //how to get access to the specific crew of this ship
  //we need to look at every crew member
  //we need to look at everything in the crew member array
  //what does looking at everything in an array mean...... for loop
  for(var i =0; i < myship.crew.length;i++){
    //we have a loop that is counting i =  0,1,2..... so we use that number to get the thing out of that index of the array
    var individualcrewmember =  myship.crew[i];//what is this line of code doing?
    var jobofthecrewmember = individualcrewmember.job; 
    //this is the variable that holds the object of key jobs to value ship types
    //how do we get out the ship type per job
    //if the job was "pilot", then the ship type would be "MAV"
    //this is normal bracket notation to get property from object
    //when getting a property using a variable, we have to use bracket notation
    var shiptypethatthiscrewmembercanfly = jobTypes[jobofthecrewmember]; 
    if(myship.type === shiptypethatthiscrewmembercanfly){
      return myship.ability; //why are we returning here
    }
    //else{ why is this else not good? 
      //return "Can't perform a mission yet.";
    //}
    //if/else means that one of the 2 will always happen. we can't do a return everytime or the loop will stop right away

  }
  // if i get here, after the end of the loop
  //that means no match was found
  //so return this string
  return "Can't perform a mission yet.";
}
//call the function 
//is this function going to work? i forgot to put the ability property on the ship
missionStatement(mav);
//again we can send anything in we want
missionStatement('mav');

//we have seen 2 problems
//1) we forgot to put properties on our objects
//2) we called the functions with the wrong type of arguments
 
//////======== NOW TURN THE ABOVE CODE INTO OOP
//compare the objects to the classes and the functions to the methods to see how they change

// what if someone else is going to use my code to make a game
// I don't want other coders to just create crew member object willy nilly
// I need to make sure they are created properly
//so i create a class
class CrewMember{ //change function keyword to class and remove the parens
  constructor(name, job, specialSkill){ //create a constructor method and put the parameters here
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
    //if a crew member is now ready to go to work we need to do some stuff, so make a function called enterShip
    //i don't want anything other than a crew member to enter a ship so i make enterShip a method of the CreMember class to enforce this rule, 
    this.enterShip = function(myship){ // where did the crewmember parameter go?
      //i am in a function right now
      //there is a secret variable called "this"
      //javascript sends in the object for you as the "this"" key word (it will make more sense when you look at the method call)
      //now, every place in the code you used the "crewmember" variable, just use "this" keyword
      this.ship = myship;
      //where is the ship instance
      //this.ship
      //where is the ship's crew array
      //this works because you just put ship here 4 lines above
      this.ship.crew.push(this);
      //you could have also done
      //myship.crew.push(this);

    }
    //return this; - javascript does this for us
  }
}
///again,  I don't want my coding team to make Ship objects free hand so i create a class to tell them how
class Ship {
  constructor(name, type, ability){
    //var this = {}
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];

    //again, the missionStatement function should only work with ships, so make it a method
    this.missionStatement = function(){ //where did the ship parameter go?
      //remember.. what is in the "this" variable at this point
        //lets use ES6 for/of
        //what does of do 
        //it simplifies a wordy pattern
        //get rid of a wordy for loop and we didn't have to get the index of the specific item in the array
      for(var crewmember of this.crew){  // for(var i =0; i < myship.crew.length;i++)
          //didn't have to do var individualcrewmember =  myship.crew[i];
          //crewmember variable is already the thing you want at the index
        if(jobTypes[crewmember.job] === this.type){
            return this.ability;
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

//the entership function is no longer just available everywhere globally
//you can only call it when you have an instance of a crew member
//you don't pass the crew member into it, javascript does that for you when you call the method off the object
// you can no longer make the mistake of passing in something other than a crew member
//you still have to pass the ship in because there can only be one thing that represents "this"
rick.enterShip(mav); //rick will be the "this" of this method call
//so when we say "call the enterShip method off the object jon" we mean this:
jon.enterShip(mav); // jon will be the "this"" of this method call

//same thing here. missionStatement is not just globally accesible, you have to have an instance of a ship object
//you no longer have to pass anything in because you are calling it off the object and javascript handles passing it in for you as "this"
//missionStatement doesn't require anythign else so you don't have to pass anything in
var message = mav.missionStatement(); //mav will be the "this" of this method call

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
var hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
var crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
mav.missionStatement()
hermes.missionStatement()
crewMember1.enterShip(mav);
mav.missionStatement()
crewMember2.enterShip(hermes);
hermes.missionStatement()






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