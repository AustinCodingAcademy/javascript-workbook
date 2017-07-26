'use strict';
// Step one: Create array of cars and console.log the length of the cars array.
const cars = ['Ford', 'Chevy', 'Acura', 'Tesla'];
console.log(cars.length);

// Step two: Create another array of cars called moreCars.
const moreCars = ['Mini', 'Dodge', 'Porsche', 'Honda'];

// use the concat to combine two arrays into one variable called totalCars.
let totalCars = (cars.concat(moreCars));
console.log(totalCars);

// Step three: Use indexOf and lastIndexOf to console.log the the index of Honda and Ford.
console.log(totalCars.indexOf('Honda'));

console.log(totalCars.lastIndexOf('Ford'));

// Step four: Use the join method to convert totalCars into a string named stringOfCars.
const stringOfCars = totalCars.join(',');
console.log(stringOfCars);

// Step five: Use the split method to convert stringOfCars back into an array named totalCars.
totalCars = stringOfCars.split(',');
console.log(totalCars);

// Step six: Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//Step Seven: Use the sort method to put the array carsInReverse into alphabetical order.
console.log(carsInReverse.sort());

// Based on the types of cars you used, predict which item in the array should be at index 0.
alert(carsInReverse.sort().indexOf('Acura'));
//console.log(carsInReverse);
 //alert(carsInReverse.indexOf('Chevy'));

// Step Eight: Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = carsInReverse.slice(3,5);
console.log(removedCars);

//Step Nine: Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(1,2, 'Ford', 'Honda');
console.log(carsInReverse);

//Step Ten: Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push('Chevy', 'Dodge');
console.log(carsInReverse);

//Step Eleven: Use the pop method to remove and console.log the last item in the array carsInReverse.
let lastItem = carsInReverse.pop();
console.log(lastItem);

//Step Twelve: Use the shift method to remove and console.log the first item in the array carsInReverse.
let firstItem = carsInReverse.shift();
console.log(carsInReverse);

//Step Thirteen: Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift('Chrysler');
console.log(carsInReverse);

//Step Fourteen: Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = [23, 45, 0, 2];
for (let i = 0; i < numbers.length; i++){
  numbers[i] += 2;
}
console.log(numbers);
