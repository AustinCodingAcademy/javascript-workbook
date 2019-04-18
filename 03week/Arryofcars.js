'use strict';

//Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
//Console.log the length of the array.
const cars= ["Ford","Kia", "Saab", "Volvo"];

 function myFunction(cars) {
  console.log(cars.length);
   return(cars.length);

 }
 
myFunction(cars)
//Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
const myArry=["BMW","Mazda","Honda"]
console.log (cars.concat(myArry));

//Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
const totalCars=cars.concat(myArry);
console.log(totalCars);
// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
console.log(myArry.indexOf("Honda"));

// Use the lastIndexOf method to console.log the index of Ford.
console.log(cars.lastIndexOf("Ford"));

// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log(totalCars.join(" "));

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
console.log(stringOfCars.split(','));

// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse= totalCars;
console.log(carsInReverse.reverse(','));

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
carsInReverse.sort();
console.log(carsInReverse);

// Based on the types of cars you used, predict which item in the array should be at index 0.

// Use the following code to confirm or reject your prediction:
console.log('prediction: ', carsInReverse.indexOf(carsInReverse[0]));
console.log('car at index 0', carsInReverse[0])

// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// function myFunction(){
   let removedCars = carsInReverse.slice(1, 3)
 console.log(carsInReverse.slice(1, 3));
// return(removedCars = carsInReverse.slice(1, 2));
// }
// myFunction(removedCars);

// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
// console.log('carsInReverse', carsInReverse);
console.log(carsInReverse.splice(3, 2, "Ford","Honda"));
// console.log('carsInReverse', carsInReverse)
// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
const carsTwo=["Kia","Mazda"]
console.log('push method',carsInReverse.splice(carsTwo));
// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop());
// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift())
// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
console.log(carsInReverse(Nisan))
// forEach

// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]