"use strict";

// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
const cars = ["Ford", "Chevrolet", "Toyota", "BMW"];
console.log(cars);
// Console.log the length of the array.
console.log("Length of cars array: " + cars.length); //Expects '4'

// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
const moreCars = ["Volvo", "Buick", "Nissan", "Honda"];
console.log(moreCars);
let totalCars = cars.concat(moreCars);
console.log("'morecars' added to 'cars' to become 'totalCars': ");
console.log(totalCars);

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
console.log("Index of 'Honda': " + totalCars.indexOf("Honda")); //Expects '7'
// Use the lastIndexOf method to console.log the index of Ford.
console.log("Index of 'Ford': " + totalCars.lastIndexOf("Ford")); //Expects '0'

// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join(",");
console.log("'totalCars' turned into stringOfCars: ", stringOfCars);

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
console.log(
  "split stringOfCars back into array: ",
  (totalCars = stringOfCars.split(","))
);

// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log("reversed totalCars array: ", carsInReverse);

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
console.log("carsInReverse sorted alphabetically: ", carsInReverse.sort());
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
console.log(carsInReverse.indexOf("BMW")); //Alert does not run, Expects 0
//alert(carsInReverse.indexOf("BMW")); //Expects 0

// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = carsInReverse.slice(3, 5); //With slice, original array not modified.  Copy is placed into new array.
console.log("removed cars: ", removedCars);

// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let indexesToRemove = [1, 2];
removedCars = []; //Empties removedCars
//Loops through array in revserse order and removed items at index to not mess up indexes if going if forwards direction
for (let i = indexesToRemove.length - 1; i >= 0; i--) {
  if (i === 0) {
    console.log(
      "removing index " +
        indexesToRemove[i] +
        "(" +
        carsInReverse[indexesToRemove[i]] +
        "), replacing with Ford"
    );
    removedCars.push(carsInReverse.splice(indexesToRemove[i], 1, "Ford")); //Removed item at index 2(Chevrolet), replace with Ford
    console.log("replacing with Ford");
  } else if (i === 1) {
    console.log(
      "removing index " +
        indexesToRemove[i] +
        "(" +
        carsInReverse[indexesToRemove[i]] +
        "), replacing with Honda"
    );
    removedCars.push(carsInReverse.splice(indexesToRemove[i], 1, "Honda")); //Removed item at index 3(Ford), replace with Honda
  }
}
let stringOfRemovedCars = removedCars.join(",");
removedCars = stringOfRemovedCars.split(",").sort(); //Splits back into array, sorted alphabetically
console.log("removed cars: ", removedCars);

// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
//Use for loop to add each entry in removed cars to end of array carsInReverse
for (let i = 0; i < removedCars.length; i++) {
  carsInReverse.push(removedCars[i]);
}
console.log(carsInReverse);

// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log("pop(remove last item): ", carsInReverse.pop());

// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log("shift(remove first item): ", carsInReverse.shift());

// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
console.log(
  "unshift(add new item to beginning): ",
  carsInReverse.unshift("Lexus")
);
console.log(carsInReverse);

// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = [23, 45, 0, 2];
numbers.forEach(function(number, i, numbers) {
  numbers[i] = number + 2;
});
console.log(numbers);
