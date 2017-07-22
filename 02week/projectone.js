'use strict';

// length
var cars = ['Ford', 'Chevy', 'Kia', 'Toyota'];
console.log(cars);

cars.length;

var morecars = ['Subaru', 'Lexus', 'Mazda', 'Honda'];
console.log(morecars);

// Concat
var cars = ['Ford', 'Chevy', 'Kia', 'Toyota'];
var morecars = ['Subaru', 'Lexus', 'Mazda', 'Honda'];

cars.concat(morecars);
var totalCars = cars.concat(morecars);

// IndexOf and lastIndexOf
console.log(morecars.indexOf('Honda'));

console.log(cars.lastIndexOf('Ford'));

// Join
var stringOfCars = totalCars.join();
console.log(stringOfCars);

// Split
totalCars = stringOfCars.split(" ");
console.log(totalCars);

// Reverse
var carsInReverse = totalCars.reverse();
carsInReverse.reverse();
console.log(carsInReverse);

// Sort
var carsInReverse = ['Honda', 'Mazda', 'Lexus', 'Subaru', 'Toyota', 'Kia', 'Chevy', 'Ford'];
carsInReverse.sort();

// Alert(carsInReverse.indexOf('yourPrediction'));
console.log(carsInReverse.indexOf('Mazda'));

// Slice
var removedCars;
removedCars = carsInReverse.slice(2, 4);
console.log(removedCars);

// Splice
var splicedCars = [2, 4];
carsInReverse.splice(2, 4);
console.log(removedCars);

// Push
carsInReverse.push('Ford', 'Honda');
console.log(carsInReverse);

// Pop
carsInReverse.pop('Honda');
console.log(carsInReverse);

// Shift
carsInReverse.shift(carsInReverse[0]);
console.log(carsInReverse);

// Unshift
carsInReverse.unshift('Volkswagen');
console.log(carsInReverse);

// ForEach
var numbers = [23, 45, 0, 2];
numbers.forEach (function(element) {
  console.log(element + 2);
});
