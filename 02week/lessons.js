let cars = ['Ford', 'Mazda', 'Toyota', 'Buick'];
console.log(cars);

let moreCars = ['Scion', 'Pontiac', 'Chevrolet', 'Honda'];

let totalCars = cars.concat(moreCars);

console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

let stringOfCars = totalCars.join();

let totalCars = stringOfCars.split();

let carsInReverse = totalCars.reverse();

carsInReverse.sort();

console.log(carsInReverse);

alert(carsInReverse.indexOf('yourPrediction'));
