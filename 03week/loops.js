const nameArr = ['Bob', 'Mike', 'Alex'];

const stringArr = nameArr.map(name => `My name is ${name}`);

stringArr;



// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = [
  'Acura',
  'Ford',
  'Honda',
  'Ford',
  'Honda',
  'Mercedez',
  'Toyota',
  'VW',
  'BMW' ];

function showCars(listOfCars) {
  for (let i = 0; i < listOfCars.length; i++) {
    console.log(listOfCars[i]);
  }
}
showCars(carsInReverse);


// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}


// Use a for...in loop to console.log each key.
let key;
for (key in persons) {
  console.log(key);
}


// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (let key in persons) {
  if (key === 'birthDate') {
    console.log(persons[key]);
  } else {
    console.log("This key isn't a birthday");
  }
}


// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let i = 0;
while(i < 1001) {
  console.log(i);
  i++;
}


// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let j = 1;
do {
  console.log(j);
  j++;
}
while (j < 1001);


// When is a for loop better than a while loop?
// 'For' loop is best for when the dev knows the set number of times the loop should run.
// 'While' loop is best for when condition(s) are true or false


// How is the readability of the code affected?
// For loops are easier to read, generally
// While loops are easier to read if there's an existing var that can be replaced as conditions change



// What is the difference between a for loop and a for...in loop?
// For loop runs an expected amount of times and can iterate even or odd, etc over the array
// For In loop allows dev to get the property name in the iteration variable.


// What is the difference between a while loop and a do...while loop?
// While loop runs while condition(s) are true/false
// Do While loop runs at least once, then tests the condition(s)
