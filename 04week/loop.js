// Project
// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const cars = ["porsche", "ferrari", "lamborghini", "lotus"];

for(let i = 0 ; i< cars.length; i++) {
    console.log(cars[i]);
}
console.log("...............");
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
}
// Use a for...in loop to console.log each key.

let keyperson;
for(keyperson in persons){
    console.log(keyperson);
}
console.log("...............");

//console.log(Object.keys(persons));

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

for (keyperson in persons) {
    if(keyperson == 'birthDate') {
        console.log(persons[keyperson]);
    }
}

console.log(".................");
// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let count = 1;
while (count < 1001) {
    console.log(count);
    count++;
}
// for(let i = 1; i < 1001; i++){
//     console.log(i);
// }

console.log("...............");
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

 count = 1;
do {
    console.log(count);
    count ++;

}while(count < 1001);
// When is a for loop better than a while loop?
// For conditions where we need to check it constantly and unknown iterations it is better to use while loop and if you have a condition and limited/known number of iterations for loop is better.
// How is the readability of the code affected?
// when using for loop, looking at the loop definition we can say what is the condition and number of iterations but with while loop we need to go through the entire loop to know the number of iterations.
// What is the difference between a for loop and a for...in loop?
// for in loop loops through the entire entries in the array this will effect performance if the array is big. With for loop we can jump to  different entries and not go through all entries.
// What is the difference between a while loop and a do...while loop?
// do while loop exectues once and then checks for condition, while loop checks for condition and executes the loop.