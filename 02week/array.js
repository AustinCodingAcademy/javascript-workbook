let cars = ['Ford', 'Chevy', 'Suburu', 'Mazda'];
console.log(cars.length);

let moreCars = ['Toyota', 'Kia', 'Tesla', 'Honda'];

let totalCars = cars.concat(moreCars);
// console.log(totalCars);
//
// console.log(totalCars.indexOf('Honda'));
// console.log(totalCars.lastIndexOf('Ford'));
let stringOfCars = totalCars.join();
console.log(stringOfCars);
totalCars = stringOfCars.split(',');
// console.log(totalCars);
let carsInReverse;
console.log(totalCars.reverse());
