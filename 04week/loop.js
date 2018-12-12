// Create a new file called loops.js in the / 04 week folder of your workbook.
// Complete each of the following exercises.
// for loop
// Use a
// for loop to console.log each item in the array carsInReverse.
let cars = ["porsche", "ferrari", "lamborghini", "lotus"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for... in loop
// Create an object(an array with keys and values) called persons with the following data:
//   firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
let persons = {
  firstname: "Jane",
  LastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
}
// for... in loop to console.log each key.
for (let bleh in persons) {
  console.log(bleh);
}
for (let value in persons) {
  console.log(persons[value]);
}

// Use a
// Then use a
// for... in loop and
// if state to console.log the value associated with the key birthDate.
for (let key in persons) {
  if (key === "birthDate") {
    console.log(persons[key]);
  }
}
// while loop

let number = 1;
while (number < 1000) {
  number++;
  console.log(number);
}

// Use a
// for loop to console.log the numbers 1 to 1000.

// do ...
//   while loop
number = 1
do {
  number++
  console.log(number);
} while (number < 1000)
// Use a do ...
//   while loop to console.log the numbers from 1 to 1000.
// When is a
// for loop better than a
// while loop ?
//   How is the readability of the code affected ?
//   What is the difference between a
// for loop and a
// for... in loop ?
//   What is the difference between a
// while loop and a do ...
//   while loop ?