
// length
var cars = ['Ford', 'Chevrolet', 'Buick', 'Mustang'];
// console.log(cars.length);

// concat
var moreCars = ['Civic', 'Mercedes', 'Dodge', 'Honda'];
var totalCars = cars.concat(moreCars);
// console.log (totalCars);

// indexOf && lastIndexOf
var x = totalCars.indexOf('Honda');
// console.log (x);
var y = totalCars.lastIndexOf('Ford');
// console.log (y);

// join
var stringOfCars = totalCars.join();
// console.log(stringOfCars);

// split
var totalCars = stringOfCars.split(',');
// console.log (totalCars);

// reverse
var carsInReverse = totalCars.reverse();
// console.log(carsInReverse);

// sort
var carsInReverse = carsInReverse.sort();
// alert(carsInReverse.indexOf('Buick'));
// console.log(carsInReverse);

// slice
var removedCars = carsInReverse.slice(4, 6);
// console.log(removedCars);

// splice
var removed = carsInReverse.splice(1, 2, 'Ford', 'Honda');
// console.log(carsInReverse);

// push
carsInReverse.push('Chevrolet', 'Civic');
// console.log(carsInReverse);

// pop
carsInReverse.pop();
// console.log(carsInReverse);

// shift
var shift = carsInReverse.shift();
// console.log(shift);

// unshift
var unshift = carsInReverse.unshift('Rolls Royce');
// console.log(unshift);
// console.log(carsInReverse);

// forEach
var numbers = [23, 45, 0, 2];
numbers.forEach(function(number){
  console.log(number + 2);
});
