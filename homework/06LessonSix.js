'use strict';

var assert = require('assert');

// ****
// Are you down with OOP?
// ****


// Problem 1:
// Associative Array Refresh
// Add properties x: 1, y: 2 to point to make it a point
// in two dimensional space.
var point = {
};

// Problem 2:
// Fill in this Point constructor function so that it defines
// a class of points with properties x and y.
// In order to do this, you should add parameters x and y
// as properties to "this".
// example: this.propName = propValue;
function Point(x, y) {
}

// Problem 3:
// Create a new point using the class constructor Point.
// Set x to 5, and y to -3
// This can be done as follows: new Point(someX, someY)
var anotherPoint;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between point (an object literal, or associative array)
// and anotherPoint (a point object constructed from the Point class)?
//
//

// ****
// Methods
// ****

// DO NOT MODIFY THIS CLASS!!
// ConferenceRoom() is a class that models a conference room.
// It has some data, this.people, which contains the people in the room.
//
// ConferenceRoom() also has three methods:
// this.enter(): which adds people to the room
// this.clearRoom(): which clears the room
// this.sayHi(): which calls person.sayHi() for every person in this.people
//
// Note how methods in one class can call methods in another class
function ConferenceRoom() {
  this.people = [];

  this.enter = function(person) {
    this.people.push(person);
  };

  this.clearRoom = function() {
    this.people = [];
  };

  this.sayHi = function() {
    for(var index = 0; index < this.people.length; index++) {
      console.log(this.people[index].sayHi());
    }
  };
}

// Problem 4:
// finish the definition of class Person()
// Add a method called sayHi() that returns "Hi, I'm " + this.name + '!';
function Person(name) {
  this.name = name;
}

// Problem 5:
// create a new Person named Jen
var jen;

// Problem 6:
// add jen to the conferenceRoom
var conferenceRoom = new ConferenceRoom();
// you can do this by calling the method enter() as follows:
// conferenceRoom.enter(somePerson);
// add your code for Problem 6 here


// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is a method?
//
//

// ****
// Tests
// DO NOT MODIFY CODE BELOW!!!!!
// ****

describe('Lesson 6 Homework', function () {

  describe('Are you down with OOP?', function () {

    describe('Problem 1: Associative Array Refresh', function () {
      it('should be { x: 1, y: 2 }', function () {
        assert.deepStrictEqual(point, { x: 1, y: 2 });
      });
    });

    describe('Problem 2: Finish Point class', function () {
      it('should generate points with properties x and y', function () {
        var myPoint = new Point(4, 4);
        assert.equal(myPoint.x, 4);
        assert.equal(myPoint.y, 4);
      });
    });

    describe('Problem 3: another good point', function () {
      it('should be anotherPoint.x === 5, anotherPoint.y === -3', function () {
        assert.equal(anotherPoint.x, 5);
        assert.equal(anotherPoint.y, -3);
      });
    });

  });

  describe('Methods', function () {

    describe('Problem 4: Finish Person class', function () {
      it('should have method sayHi()', function () {
        var instructor = new Person('Teach');
        assert(typeof instructor.sayHi === 'function');
        assert(typeof instructor.sayHi() === 'string');
      });
    });

    describe('Problem 5: new Person Jen', function () {
      it('should be a new Person Jen', function () {
        assert.equal(jen.name.toLowerCase(), 'jen');
      });
    });

    describe('Problem 6: Conference of One', function () {
      it('should be the case that conferenceRoom contains jen', function () {
        assert.equal(conferenceRoom.people.length, 1);
        assert.deepStrictEqual(jen, conferenceRoom.people[0]);
        conferenceRoom.sayHi();
      });
    });

  });


});
