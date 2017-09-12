'use strict';
// Pasted in from project week 2
var cars = ['ford', 'nissan', 'acura', 'buick'];
var moreCars = ['bmw', 'toyota', 'kia', 'honda'];
var totalCars = cars.concat(moreCars);
var carsInReverse = totalCars;

function reverseCars () {
  carsInReverse.reverse();
  return;
}

let persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
};

function loops () {
  for (let i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
  }
}

function keyLoop (user) {
  for (let keys in persons) {
    console.log(keys);
  }
}

function bDay () {
  for (let key in persons) {
    if (key === 'birthDate') {
      console.log(persons[key]);
    }
  }
}

function whileLoop () {
  let i = 0;
  while (i <= 1000) {
    console.log(i);
    i++;
  }
}

function doWhile () {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 1000);
}
reverseCars();
loops();
keyLoop();
bDay();
whileLoop();
doWhile();

// 1. When is a for loop better than a while loop? A for loop seems the better option when you aren't looping over a large amount of values
// - How is the readability of the code affected? While loops seems a bit messier with more lines of code
// What is the difference between a for loop and a for...in loop?
// For loop test a specifed condition while a for in tests the elements in an array
// What is the difference between a while loop and a do...while loop?
// While loop runs while the condition is true and do while always runs once if the condition is true or not
