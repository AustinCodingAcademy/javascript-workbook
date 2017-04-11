'use strict';

var assert = require('assert');

// Create two classes, Car and Garage
// The Car class should take one parameter, color. Set the passed in color to be an attribute of the object
// The Garage should also take one parameter, size. The size will be an integer, and set it to an attribute
// Give the Garage object an attribute, this.cars, and set it to an empty array
// The Garage class should have two methods, .add and .remove
// .add should take one argument, car. If the length of this.cars is less than this.size, push the car into this.cars, else return "Not enough space!"
// .remove should also take one argument, car. look for the index of the car in this.cars. If it is found, splice it out of this.cars. If it isn't found, return "That car isn't here!"

// Your code here

// Tests

var redCar, blueCar, greenCar, yellowCar, twoCarGarage, threeCarGarage;

it('should be able to instatiate car objects', function () {
  redCar = new Car('red');
  assert.equal(redCar.color, 'red');

  blueCar = new Car('blue');
  assert.equal(blueCar.color, 'blue');

  greenCar = new Car('green');
  assert.equal(greenCar.color, 'green');

  yellowCar = new Car('yellow');
  assert.equal(yellowCar.color, 'yellow');
});

it('should be able to instatiate garage objects', function () {
  twoCarGarage = new Garage(2);
  assert.equal(twoCarGarage.size, 2);

  threeCarGarage = new Garage(3);
  assert.equal(threeCarGarage.size, 3);
});

it('should be able to add cars to a garage', function () {
  twoCarGarage.add(redCar);
  twoCarGarage.add(blueCar);
  assert.equal(twoCarGarage.cars.length, 2);

  threeCarGarage.add(greenCar);
  threeCarGarage.add(yellowCar);
  assert.equal(threeCarGarage.cars.length, 2);
});

it('should be able to remove cars from a garage', function () {
  twoCarGarage.remove(redCar);
  assert.equal(twoCarGarage.cars.length, 1);

  threeCarGarage.add(redCar);
  assert.equal(threeCarGarage.cars.length, 3);
});

it('should be able to detect of a garage is full', function () {
  twoCarGarage.remove(blueCar);
  assert.equal(twoCarGarage.cars.length, 0);

  threeCarGarage.add(blueCar);
  assert.equal(threeCarGarage.add(blueCar), 'Not enough space!');
});

it('should be able to detect if a car is not in a garage', function () {
  assert.equal(twoCarGarage.remove(blueCar), "That car isn't here!");
});
