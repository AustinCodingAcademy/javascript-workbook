// for loop
// Use a for loop to console.log each item in the array carsInReverse.
// for...in loop

const carsInReverse = ['Sports Car', 'Van', 'Convertible', 'School Bus'];
   for(i=0; i<carsInReverse.length; i++){
    console.log(carsInReverse[i]);
  }

// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

const persons = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}

// Use a for...in loop to console.log each key.

for(persons) {
    console.log(Objects.keys(persons))
    }

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

for(persons) {if{
    firstName = 'Jane'}{
    console.log(Objects.values[birthDate])
  }

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

for (x = 1; x <= 1000; x ++){
    console.log(x);
  }

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

do {
    x += 1;
    console.log(x);
  } while(x<=1000);


// When is a for loop better than a while loop?
// You would use a while loop to loop through code while some condition is true such as boolean.
// A for loop is mostly used to loop through a given number of times ( the length of an array or x number of time /5). 
// How is the readability of the code affected?
// For loop is more readable that a while loop

// What is the difference between a for loop and a for...in loop?
// for-in loop is a shorter form for loop

// What is the difference between a while loop and a do...while loop?
// While loop executes its statements as long as a specified condition evaluates to true whereas a do...while loop will always be executed at least once, even if the condition is false

