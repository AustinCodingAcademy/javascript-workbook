'use strict';

// for loop
// Use a for loop to console.log each item in the array carsInReverse.
var carsInReverse = ['Lexus', 'Honda', 'Ford', 'Volvo'];
var text = '';
for (var i = 0; i < carsInReverse.length; i++);
text += carsInReverse[i] + '<br>';
// for...in loop
// Create an object (an array with  keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

  var persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  };
  var text = '';
  var x;
  for (x in persons) {
    text += persons[x] + '';
  }

// Use a for...in loop to console.log each key.
console.log(persons);
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
var x = 'birthDate';
if (x in persons) {
  if (x === 'birthDate') {
    console.log(persons[x]);
  }
}
  // while loop
  // Use a for loop to console.log the numbers 1 to 1000.
  var text = '';
  for (var i = 0; i < 1000; i++) {
    text += 'The number is ' + i + '<br>';
  }
  // do...while loop
  // Use a do...while loop to console.log the numbers from 1 to 1000.
    var text = '';
    var i = 0;
    do {
      text += '<br>The number is ' + i;
      i++;
    }
    while (i < 1000);
