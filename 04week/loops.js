// for loop
// "use strict";
//     Use a for loop to console.log each item in the array cars.
console.log("##########################");
console.log("########CARS##############");
console.log("#########################");

const cars = ["porsche", "ferrari", "lamborghini", "lotus"];
let carsLength = cars.length;
for (var i = 0; i < carsLength; i++) {
  console.log(cars[i]);
}
// for...in loop

//     Create an object (an array with keys and values) called persons with the following data:
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};
// [apple, orange, pear]
console.log("###PROfile##########");
console.log("####################");
//     Use a for...in loop to console.log each key.
for (let elem in persons) {
  console.log(persons[elem]);
}
//     Then use a for...in loop and if state to console.log the value associated with the key birthDate.
console.log("The persons");
console.log("birthday is " + persons.birthDate);

// while loop

//     Use a for loop to console.log the numbers 1 to 1000.
let number = 0;
while (number < 10) {
  number += 1;
  console.log(number);
}
// do...while loop

//     Use a do...while loop to console.log the numbers from 1 to 1000.
let numberA = 0;
do {
  numberA += 1;
  console.log(numberA);
} while (numberA < 10);

// When is a for loop better than a while loop?
////For loop will continually run, while stops when condition is met.
//     How is the readability of the code affected?

// What is the difference between a for loop and a for...in loop?
// What is the difference between a while loop and a do...while loop?
