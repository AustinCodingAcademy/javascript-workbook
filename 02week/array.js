// 1. length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.
//
// var cars = ['Ford', 'Kia', 'Audi', 'Maserati'];
// console.log(cars.length);

// 2.concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.

// var cars = ['Ford', 'Kia', 'Audi', 'Maserati'];
// var moreCars =[ 'Buick', 'Mazda', 'Mitsubishi', 'Honda'];
// var totalCars = cars.concat(moreCars);
// console.log(totalCars);

// 3.indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.

// var moreCars = ['Buick', 'Mazda', 'Mitsubishi', 'Honda']; {
// console.log(moreCars.indexOf('Honda'));
// }
//
// var cars = ['Ford', 'Kia', 'Audi', 'Maserati'];
// var moreCars = ['Buick', 'Mazda', 'Mitsubishi', 'Honda'];{
// console.log(cars.lastIndexOf('Ford'));
// }

// 4.join
// Use the join method to covert the array totalCars into a string called stringOfCars.
var cars = ['Ford', 'Kia', 'Audi', 'Maserati'];
var moreCars =[ 'Buick', 'Mazda', 'Mitsubishi', 'Honda'];
var totalCars = cars.concat(moreCars);
var stringOfCars = cars.concat(moreCars);
console.log(stringOfCars);


var cars = ['Ford', 'Kia', 'Audi', 'Maserati'];
var moreCars =[ 'Buick', 'Mazda', 'Mitsubishi', 'Honda'];
var totalCars = cars.concat(moreCars);
var stringOfCars = cars.concat(moreCars);
stringOfCars.splitString(totalCars)
