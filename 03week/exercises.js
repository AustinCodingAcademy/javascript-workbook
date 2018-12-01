"use strict";

// Complete each of the following exercises.
// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
let cars = ["Ford", "Chevy", "Toyota", "Audi"];
// Console.log the length of the array.
console.log("Console.log the length of the array. ", cars.length);

// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
let moreCars = ["Saab", "Mercedes", "Ferrari", "Honda"];
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let totalCars = cars.concat(moreCars);
console.log(
  "Use the concat method to combine the cars and moreCars arrays into an array called totalCars. ",
  cars.concat(moreCars)
);
console.log(
  "Use the concat method to combine the cars and moreCars arrays into an array called totalCars. ",
  totalCars
);

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
console.log(
  "Use the indexOf method to console.log the index of Honda. ",
  totalCars.indexOf("Honda")
);
// Use the lastIndexOf method to console.log the index of Ford.
console.log(
  "Use the lastIndexOf method to console.log the index of Ford. ",
  totalCars.lastIndexOf("Ford")
);
// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join(",");
console.log(
  "Use the join method to covert the array totalCars into a string called stringOfCars. ",
  stringOfCars
);
// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(",");
console.log(
  "Use the split method to convert stringOfCars back intro an array called totalCars. ",
  totalCars
);
// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log(
  "Use the reverse method to create an array carsInReverse which is the array totalCars in reverse. ",
  carsInReverse
);
// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
console.log(
  "Use the reverse method to create an array carsInReverse which is the array totalCars in reverse. ",
  carsInReverse.sort()
);

// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf("yourPrediction"));
console.log(
  "Based on the types of cars you used, predict which item in the array should be at index 0. I guessed ford, but it was actually Audi ",
  totalCars.indexOf("Audi")
);
// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
console.log(
  "Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place. ",
  totalCars.splice(1, 2)
);
// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
console.log(
  "Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array. ",
  carsInReverse.push("Chevy", "Ford")
);
console.log(carsInReverse);
// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(
  "Use the pop method to remove and console.log the last item in the array carsInReverse. ",
  carsInReverse.pop()
);
// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(
  "Use the shift method to remove and console.log the first item in the array carsInReverse. ",
  carsInReverse.shift()
);
// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
console.log(
  "Use the unshift method to add a new type of car to the array carsInReverse. ",
  carsInReverse.unshift("Lambo")
);
console.log(carsInReverse);
// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
const numbers = [23, 45, 0, 2];
numbers.forEach(function(num, i) {
  numbers[i] = 2 + num;
  if (i === 3) {
    console.log(
      "Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers. ",
      numbers
    );
  }
});

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

function compareArray() {
  if (arr1 === arr2) {
    return true;
  }
  return false;
}
console.log(compareArray());

// attach the .compare method to Array's prototype to call it on any array
var array1 = ["1", "2", ["3", "4"]];
var array2 = ["1", "2", ["3", "4"]];

var compare = function(array1, array2) {
  // if the other array is a falsy value, return
  if (!array2) return false;

  // compare leng ths - can save a lot of time
  if (array1.length != array2.length) return false;

  for (var i = 0; i < array1.length; i++) {
    // Check if we have nested arrays
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!compare(array1[i], array2[i])) return false;
    } else if (array1[i] != array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

console.log(compare(array1, array2));
