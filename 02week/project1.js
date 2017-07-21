'use strict';

var cars = ['Ford', 'Chevy', 'Ram', 'Tesla'];               // 1
console.log(cars.length);
var moreCars = ['Toyota', 'Mazda', 'Nissan', 'Honda'];      // 2
var totalCars = cars.concat(moreCars);
console.log(totalCars.indexOf('Honda'));                    // 3
console.log(totalCars.lastIndexOf('Ford'));
var stringOfCars = totalCars.join();                        // 4
totalCars = stringOfCars.split(',');                        // 5
var carsInReverse = totalCars.reverse();                    // 6
carsInReverse.sort();                                       // 7
window.alert(carsInReverse.indexOf('Chevy'));
var removedCars = carsInReverse.slice(1, 3);                // 8
carsInReverse.splice(1, 2, 'Ford', 'Honda');                // 9
carsInReverse.push(removedCars[0]);                         // 10
carsInReverse.push(removedCars[1]);
console.log(carsInReverse.pop());                           // 11
console.log(carsInReverse.shift());                         // 12
carsInReverse.unshift('Smart');                             // 13
var numbers = [23, 45, 0, 2];                               // 14
numbers.forEach(function (element, index, arr) {
  arr[index] += 2;
});
