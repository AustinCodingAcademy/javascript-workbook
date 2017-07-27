'use strict';

var carsInReverse = ['Ford', 'BMW', 'Toyota', 'Nissan', 'Chevy', 'Mercedes', 'Lexus', 'Honda'];


// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2
// Write code that will add 2 to each item in the array numbers.
var numbers = [23, 45, 0, 2];
function addTwo() {
  numbers.forEach(function(element) {
    console.log(element + 2);
  });
  return;
}

addTwo();

// for loop
// Use a for loop to console.log each item in the array carsInReverse.

function manipulate () {
  for (var i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
  }
}

manipulate();

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let thisObject = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
};

// Use a for...in loop to console.log each key.

function manipulateTwo () {
  for (var i in thisObject) {
    console.log(thisObject[i]);
  }
}

manipulateTwo();

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

function manipulateThree () {
  for (var i in thisObject) {
    if (i === 'birthDate') {
      console.log(thisObject[i]);
      break;
    }
  }
}

manipulateThree();

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

function count () {
  for (var i = 0; i <= 1000; i++) {
    console.log(i);
  }
}

count();

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

function countTwo () {
  var num = 0;
  do {
    num += 1;
    console.log(num);
  } while (num < 1000);
}

countTwo();
