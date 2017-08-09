// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.
let cars = [
  'Toyota',
  'Ford',
  'Audi',
  'VW'
];
console.log(cars.length);


// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let moreCars = [
  'BMW',
  'Ferrari',
  'Mercedez',
  'Honda'
];
let totalCars = cars.concat(moreCars);
console.log(totalCars);


// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));


// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log(stringOfCars);


// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
let totalCars2 = stringOfCars.split();
console.log(totalCars2);


// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// An array of strings that is turned into a singular string, then turned back into an array is no longer an array of strings.
// Therefore we used the 1st array 'totalCars' of strings


// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
let alphaCars = carsInReverse.sort();
console.log(alphaCars);
alert(carsInReverse.indexOf('BMW'));


// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = alphaCars.slice(3,5);
console.log(removedCars);


// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let carsSpliced = alphaCars.splice(1,2,"Ford", "Honda");
console.log(carsSpliced);
console.log(alphaCars);


// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
let joinedCars = alphaCars.push('BMW', 'Ferrari');
console.log(joinedCars);
console.log(alphaCars);


// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop());


// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift());


// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
console.log(carsInReverse.unshift('Acura'));
console.log(carsInReverse);


// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2
// Write code that will add 2 to each item in the array numbers.
var numbers = [23, 45, 0 , 2];
function addTwo(item) {
  console.log(item + 2);
}
console.log(numbers.forEach(addTwo));
