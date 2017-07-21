var cars = ['Ford', 'Nissan', 'Toyota', 'Lotus'];
var moreCars = ['Chevy', 'Hyundai', 'Benz', 'Honda'];
var totalCars;
var stringOfCars;
var carsInReverse;


// var stringOfCars = totalCars.join();
// //
// //
// //
// //
//
//
// var carsInReverse = totalCars.reverse();
// var removedCars = carsInReverse.sort().slice(2,4);
// var splicedCars = [];
// splicedCars.push(removedCars);
// console.log(splicedCars);



// Complete each of the following exercises.
// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.
function logCars(){
  console.log(cars.length);
}

logCars();

// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
function concatCars() {
  totalCars = cars.concat(moreCars);
  console.log(totalCars);
}

concatCars();

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.

function indexCars() {
  console.log(totalCars.indexOf('Honda'));
  console.log(totalCars.lastIndexOf('Ford'));
}

indexCars();

// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
function joinCarArray() {
  stringOfCars = totalCars.join(' ');
  console.log(stringOfCars);
}
joinCarArray();

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
function splitCarArray() {
  totalCars = stringOfCars.split(" ");
  console.log(totalCars);
}

splitCarArray();
// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
function reverseCarArray() {
  // console.log(totalCars);
  carsInReverse = totalCars.reverse();
  console.log(carsInReverse);
}

reverseCarArray();

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
function alphabetizeCars() {
  carsInReverse.sort();
  console.log(carsInReverse);
}

alphabetizeCars();
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
console.log(carsInReverse.indexOf('Benz'));

// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
function sliceCars() {
  var removedCars;
  removedCars = carsInReverse.slice(2,4);
  console.log(removedCars);
}

sliceCars();

// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
function spliceCars() {
  carsInReverse.splice(2,2, 'Monkey', 'Badger');
  console.log(carsInReverse);
}

spliceCars();
// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
function pushCars() {
  carsInReverse.push('Ford', 'Honda');
  console.log(carsInReverse);
}
 pushCars();

// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
function popCars() {
  carsInReverse.pop('Honda');
  console.log(carsInReverse);
}

popCars();
// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
function shiftCars() {
  carsInReverse.shift(carsInReverse[0]);
  console.log(carsInReverse);
}
shiftCars();
// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
function unshiftCars() {
  carsInReverse.unshift('Penismobile');
  console.log(carsInReverse);
}

unshiftCars();
// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
function forEachPracticeFunction() {
  var numbers = [23,45,0,2];
  numbers.forEach(function(element) {
    console.log(element + 2);
  });
}

forEachPracticeFunction();
