function CrewMember(name, job, specialSkill){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
  this.enterShip = function(someShip){
    // console.log(someShip);
    this.ship = someShip.type;
    someShip.crew.push(this);
    console.log(someShip.crew);
  }
}

function Ship(name, type, ability){
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
}

var mav = new Ship('Mars Ascent Vehicle', 'mav', 'Ascend into low orbit');
var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');


crewMember1.enterShip(mav);
console.log(crewMember1.ship); //mav
console.log(mav.crew); //[crewMember1]
console.log(crewMember1.ship === mav); //true
console.log(mav.crew.indexOf(crewMember1) === 0); //true


//add to crewlist











// function CrewMember(name, job, specialSkill){
//   this.name = name;
//   this.job = job;
//   this.specialSkill = specialSkill;
//   this.ship = null;
// }
//
// function Ship(name, type, ability){
//   this.name = name;
//   this.type = type;
//   this.ability = ability;
//   this.crew = [];
// }
//
// function enterShip(ship){
//   //should print mav right???
//   return ship;
//   // ship.crew.push(this);
//   // this.ship = someShip;
// }
//
// var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
// var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//
// mav.crew(crewMember1);
// console.log(mav);
// // console.log(enterShip(mav));
//
//
//
// // console.log(crewMember1.ship); //mav
// // console.log(mav.crew); //[crewMember1]
// // console.log(crewMember1.ship === mav); //true
// // console.log(mav.crew.indexOf(crewMember1) === 0); //true
