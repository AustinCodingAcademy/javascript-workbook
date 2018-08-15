'use strict';

// for loop
// Use a for loop to console.log each item in the array carsInReverse

const carsInReverse = ['kia', 'ford', 'chevy', 'toyota', 'bmw', 'lambo'];

for (let i = 0; i<carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

const persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
};

for (let key in persons) {
  console.log(key, persons[key]);
}

//while loop
// Use a for loop to console.log the numbers 1 to 1000.

let count1 = 0;
while (count1 <= 1000) {
  console.log(count1);
  count1 += 1;
}

//do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.


let count2 = 1;
do {
  console.log(count2);
  count2 += 1;
} while (count2 <= 1000);

// When is a for loop better than a while loop?
// How is the readability of the code affected?

// a for loop is a better choice when you have a known, defined begin and ending value to loop thru
// a while loop is better if the terminating value is dynamic and not known at the start of the loop


// What is the difference between a for loop and a for...in loop?

// a for loop just loops between a range of two numbers
// a for...in loop iterates over iterable objects (ex. objects, arrays, etc)

// What is the difference between a while loop and a do...while loop?\

// a do while loop will always execute at least once, but otherwise functions the exact same as a while loop (will execute 1 iteration and then check conditional)
// a while loop _may_ not execute at all if the conditional expression is falsy (checks conditional first then executes)