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

function CrewMember(name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    //this.ship = [];
    this.ship = null;

    this.enterShip = function(newShip) {

        //assign the newShip to the crew member's ship
        this.ship = newShip;

        //push the crewmember into the ship's crew
        newShip.crew.push(this);
    }
}

function Ship(name, type, ability) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];

    //console.log('crew length ' + this.crew.length);

    this.missionStatement = function() {

        // create a variable to count the valid jobs
        var countValidJobs = 0;

        // check if there are crew members assigned to this ship.
        // if there are no crew members, return "can't perform a mission"
        // if yes, then you loop through the crew members comparing their job to the jobtypes array to see if there is a match.  If there is a match, increase the countValidJobs by one.  If no match, return "can't perform a mission"

        //if no crew members, can't perform a mission
        if (this.crew.length === 0) {
            return "Can't perform a mission yet.";
        }

        //if there are crew members, let's loop through to see if we have any with the correct jobs
        else {

            for (var i = 0; i < this.crew.length; i++) {

                if (jobTypes[this.crew[i]['job']] == this.type) {
                    countValidJobs++;
                }
            }

            //Look at countValidJobs variable to see if there are any valid jobs. (should be greater than zero)
            if (countValidJobs > 0) {
                return this.ability;
            } else {
                return "Can't perform a mission yet.";
            }
        }
    }
}

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

var hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
var crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');


// crewMember1.enterShip(mav);
// crewMember2.enterShip(hermes);


//
// console.log(crewMember1.ship); //mav
// console.log(mav.crew); //[crewMember1]
// console.log(crewMember1.ship === mav); //true
// console.log(mav.crew.indexOf(crewMember1) === 0); //true


// console.log(mav.missionStatement());
// console.log(hermes.missionStatement());


//tests
if (typeof describe !== 'undefined') {
    describe('CrewMember', function() {
        it('should have a name, a job, a specialSkill and ship upon instantiation', function() {
            var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
            assert.equal(crewMember1.name, 'Rick Martinez');
            assert.equal(crewMember1.job, 'pilot');
            assert.equal(crewMember1.specialSkill, 'chemistry');
            assert.equal(crewMember1.ship, null);
        })

        it('can enter a ship', function() {
            var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
            var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
            crewMember1.enterShip(mav);
            assert.equal(crewMember1.ship, mav);
            assert.equal(mav.crew.length, 1);
            assert.equal(mav.crew[0], crewMember1);
        })
    })

    describe('Ship', function() {
        it('should have a name, a type, an ability and an empty crew upon instantiation', function() {
            var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
            assert.equal(mav.name, 'Mars Ascent Vehicle');
            assert.equal(mav.type, 'MAV');
            assert.equal(mav.ability, 'Ascend into low orbit');
            assert.equal(mav.crew.length, 0);
        })

        it('can return a mission statement correctly', function() {
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
