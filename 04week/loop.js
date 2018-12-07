"use strict";

// for loop
// Use a for loop to console.log each item in the array carsInReverse.
let carsInReverse = [
  "Volvo",
  "Saturn",
  "Jeep",
  "Chevrolet",
  "BMW",
  "Alfa Romeo"
];
console.log(
  "==============================FIRST EXERCISE==============================="
);
console.log(
  "Use a for loop to console.log each item in the array carsInReverse."
);
console.log(
  "================================================================================"
);

for (let i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}
// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};
console.log(
  "==============================NEXT EXERCISE==============================="
);
console.log("Use a for...in loop to console.log each key.");
console.log(
  "================================================================================"
);
// Use a for...in loop to console.log each key.
for (let key in persons) {
  console.log(key);
}
console.log(
  "==============================NEXT EXERCISE==============================="
);
console.log(
  "Then use a for...in loop and if state to console.log the value associated with the key birthDate."
);
console.log(
  "================================================================================"
);
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (let value in persons) {
  if (value === "birthDate") {
    console.log("this is the birthday: " + persons[value]);
  }
}

console.log(
  "==============================NEXT EXERCISE==============================="
);
console.log("Use a while loop to console.log the numbers 1 to 1000.");
console.log(
  "================================================================================"
);
//while loop
//Use a while loop to console.log the numbers 1 to 1000.
let number = 1;
while (number < 1000) {
  number++;
}
console.log("Number is now: " + number);

console.log(
  "==============================NEXT EXERCISE==============================="
);
console.log("Use a do...while loop to console.log the numbers from 1 to 1000.");
console.log(
  "================================================================================"
);
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let number2 = 1;
do {
  number2++;
} while (number2 < 1000);
console.log("Number2 is now: " + number2);

// Q: When is a for loop better than a while loop?
//A: When you want to iterate through an fixed length and do something for each number in the length
//  ex: for(let i=0; i<number.length;i++){
//console.log(i);
//}

//Versus a while loop where you do something while the statement is still false.
//ex: let number = 0;
//while(number < 10){
//number++;
//console.log(number);
//}

// Q: How is the readability of the code affected?

// Q: What is the difference between a for loop and a for...in loop?
//A:

// Q: What is the difference between a while loop and a do...while loop?
//A: while loops will run the condition only if the statement in the while is true,
//do.while's will run the condition first then check the statement to see if it should run again
