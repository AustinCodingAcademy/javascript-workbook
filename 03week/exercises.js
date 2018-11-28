// Complete each of the following exercises.

// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.
let cars = ["Ford", "Dodge", "Chevrolet", "Mclaren"];
console.log("Length of cars array =", cars.length);

// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let moreCars = ["BMW", "Nissan", "Jeep", "Honda"];
let totalCars = cars.concat(moreCars);

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
console.log("Index of Honda =", totalCars.indexOf("Honda"));
console.log("Index of Ford =", totalCars.lastIndexOf("Ford"));

// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log("stringOfCars = ", stringOfCars);

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(",");
console.log("totalCars = ", totalCars);

// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log("carsInReverse = ", carsInReverse);

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:

carsInReverse.sort();
console.log("My prediction =", carsInReverse.indexOf("BMW"));
console.log("carsInReverse sorted = ", carsInReverse);

// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let carsRemoved = carsInReverse.splice(1, 2);
console.log("carsInReverse after slice/splice = ", carsInReverse);

// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push("Chevrolet");
carsInReverse.push("Dodge");
console.log("carsInReverse after push  = ", carsInReverse);

// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
let poppedCar = carsInReverse.pop();
console.log("Popping '", poppedCar, "' from the array");

// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
let firstCar = carsInReverse.shift();
console.log("First car = ", firstCar);

// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Bentley");
console.log("carsInReverse after pop/shift/unshift = ", carsInReverse);

// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = [23, 45, 0, 2];
console.log(numbers);
numbers.forEach(function(number){
  number += 2;
  console.log(number);
});