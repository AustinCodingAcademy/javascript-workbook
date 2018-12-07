"use strict";

// for loop
console.log("for loop of every car in cars:");
const cars = ["porsche", "ferrari", "lamborghini", "lotus"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for...in loop
console.log("for...in loop of each key of persons:");
let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};
for (var characteristics in persons) {
  console.log(characteristics);
}

//for...in loop to log value associated with birthdate
console.log("for...in loop of value of birthDate key:");
for (var characteristics in persons) {
  if(characteristics === "birthDate") 
    console.log(persons[characteristics]);
}

//while loop to log 1-10
let num = 1;
console.log("while loop counting from 1 to 10:");
while (num <= 10) { 
  console.log(num);
  num++;
}

//do...while loop to log 1-10
num = 0;
console.log("do...while loop counting from 1 to 10:");
do {
  num++;
  console.log(num);
} while (num < 10);


