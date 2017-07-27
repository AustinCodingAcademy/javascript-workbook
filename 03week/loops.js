// for loop
// Use a for loop to console.log each item in the array carsInReverse.
// function printCarsInReverse () {
  var carsInReverse = [ 'Buick', 'Ford', 'Honda', 'Dodge' ];
    for (var i = 0; i < carsInReverse.length; i++) {
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


  let persons = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
    };
  for (var prop in persons) {
    console.log(persons[prop]);
}

// while loop
// Use a for loop to console.log the numbers 1 to 1000.
var i = 1;
while (i < 1000) {
  console.log(i++);
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
do {
  var i = 1;
  console.log(i++);
}
while (i < 1000);
