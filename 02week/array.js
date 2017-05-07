'Use strict'

var cars = ['Ford', 'Chevy', 'Jeep', 'Buick'];

console.log(cars.length);

var moreCars = ['Nissan', 'Toyota', 'Hyundai', 'Honda'];

var totalCars = cars.concat(moreCars);

console.log(totalCars);

console.log(totalCars.indexOf('Honda'));

console.log(totalCars.lastIndexOf('Ford'));

 var stringOfCars = totalCars.join();

 console.log(stringOfCars);

 console.log(stringOfCars.split());

 var carsInReverse = totalCars.reverse();

 console.log(carsInReverse);

 console.log(carsInReverse.sort())

 // this code made everything in console move alert(carsInReverse.indexOf('Buick'));
carsInReverse.slice(2,4);

var removedCars = carsInReverse.slice(2, 4);

console.log(removedCars);

carsInReverse.splice(3,4,'Ford','Honda');
console.log(carsInReverse);

carsInReverse.push(removedCars);
