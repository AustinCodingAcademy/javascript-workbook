'use strict';


let cars = ['Ford', 'Nissan', 'Toyota', 'Hyundai']
console.log(cars.length);

let moreCars = ['Chevrolet', 'Mazda', 'Audi', 'Honda']

let totalCars = cars.concat(moreCars);
console.log(totalCars);

totalCars.indexOf('Honda')

totalCars.lastIndexOf('Honda')

console.log(totalCars.lastIndexOf('Ford'))
