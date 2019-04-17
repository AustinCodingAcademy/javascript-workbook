// length
let cars = ['Ford', 'Audi', 'Mercedes', 'BMW'];
console.log(cars.length);


// concat
let moreCars = ['Wolkswagon', 'Jaguar', 'Toyota', 'Honda'];
let totalCars = (cars.concat(moreCars));
console.log(totalCars);


// indexOf and lastIndexOf
console.log(moreCars.indexOf('Honda'));
console.log(cars.lastIndexOf('Ford'));


// join
let stringOfCars = totalCars.join(',');
console.log(stringOfCars);


// split 
let totalCarz = stringOfCars.split(',');
console.log(totalCarz);


// reverse
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);


// sort
console.log(carsInReverse.sort());


// slicea
let removedCars = carsInReverse.slice(2, 4);
console.log(removedCars);


// splice
let carSpliced = carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);


// push
carsInReverse.push('BMW');
console.log(carsInReverse);


// pop
console.log(carsInReverse.pop());


// shift
let firstElement = carsInReverse.shift();
console.log(firstElement);


// unshift
carsInReverse.unshift('Porshe');
console.log(carsInReverse);


// forEach
let numbers = [23, 45, 0, 2]; 
numbers.forEach(function(currentValue, index){
    numbers[index] = currentValue+2;
});
console.log(numbers);