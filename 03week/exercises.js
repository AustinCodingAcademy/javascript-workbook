'use strict';
//length
var cars = ['Ford'];
console.log(cars.length);
//concat
var more_cars = ['Yugo', 'Toyota', 'Chevy', 'Honda'];
let totalCars = cars.concat(more_cars);
console.log(totalCars);
//indexOF and lastIndexOf
const n = totalCars.indexOf('Honda');
console.log(n);
const n2 = totalCars.lastIndexOf('Ford');
console.log(n2);
//join
const strcars = totalCars.join(', ');
console.log(strcars);
//split
totalCars = strcars.split(', ');
console.log(totalCars);
//reverse
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);
//sort
carsInReverse.sort();
console.log(carsInReverse);
//slice
carsInReverse.slice(1, 3);
console.log(carsInReverse);
//splice
carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);
//push
//shift
carsInReverse.shift(0);
console.log(carsInReverse);
//unshift
carsInReverse.unshift("Tesla");
console.log(carsInReverse);
//for each
const numbers = [23, 45, 0, 2];
numbers.forEach(function(currentValue, index){
    numbers[index] = currentValue + 2;
})
console.log(numbers);





