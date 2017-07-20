var cars = ['Ford', 'Nissan', 'Toyota', 'Lotus'];
var moreCars = ['Chevy', 'Hyundai', 'Benz', 'Honda'];

var totalCars = cars.concat(moreCars);


var stringOfCars = totalCars.join();

// totalCars = stringOfCars.split();

var carsInReverse = totalCars.reverse();
var removedCars = carsInReverse.sort().slice(2,4);
var splicedCars = [];
splicedCars.push(removedCars);
console.log(splicedCars);
