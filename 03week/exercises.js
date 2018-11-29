"use strict";

// Complete each of the following exercises.
// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
let cars = ["Ford", "Audi", "Seat", "BMW"];
// Console.log the length of the array.
console.log(cars);
// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
let moreCars = ["Toyota", "Kia", "Mazda", "Honda"];

// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let totalCars = cars.concat(moreCars);

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
console.log(totalCars.lastIndexOf("Honda"));
// Use the lastIndexOf method to console.log the index of Ford.

// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log(stringOfCars); ///check that!

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.

totalCars = stringOfCars.split(",");
console.log(totalCars);
// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log("carsInReverse: ", carsInReverse);

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.

carsInReverse.sort();
console.log(carsInReverse);
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// splice

// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
console.log(carsInReverse);
console.log("before the reverse cars are spliced");

carsInReverse.splice(1, 2, "Ford", "Honda");
// inserts at 1st index position
console.log(carsInReverse);

// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
console.log("carsInReverse"); /// consol.log before push
console.log(carsInReverse.push("BMW"));
// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop());

// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.

carsInReverse.shift();

console.log(carsInReverse);

// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Fiat", " Dewoo");
console.log(carsInReverse);

// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
var array1 = [23, 45, 0, 2];

array1.forEach(function(element) {
  console.log(element + 2);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
