'use strict';
//Use a for loop to print each of the array items.
const carsInReverse = ['Mclaren', 'Toyota', 'Ferrari', 'Ford'];

  for(i=0; i<carsInReverse.length; i++){
    console.log(carsInReverse[i];);
  }

//Make an object (persons) that will list the specified values for 'Jane Doe'.
const persons = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}
//This for loop needs to console log the aforementioned keys.
for(persons){
console.log(Objects.keys(persons))
}
//Then create an if statement with for..in loop for her birthday.
for(persons) {if{
  firstName = 'Jane'}{
  console.log(Objects.values[birthDate];)
}
}
//Use a for loop to console.log numbers 1-1000.
for (x = 1; x <= 1000; x ++){
  console.log(x);
}
//Use a do...while loop to console.log numbers 1-1000.
do {
  x += 1;
  console.log(x);
} while(x<=1000);
//When is a for loop better than a while loop, and how does this affect readability?->A for loop is generally used to loop through code until a false boolean occurs, and a while loop only operates under a specified condition.
//^A for loop works better to shorten repetitive actions(video games), while a 'while' statement is a more efficient choice when certain conditions are met.

//What is the diff. between a for loop and a for...in loop?-> A for loop loops through a block of code a number of times.
//What is the diff. between a while loop and a do while loop?-> The do-while loop allows the input to run at least once, while a 'while'statement checks everything in the beginning(and may not run it at all, if the condition is not met.)
