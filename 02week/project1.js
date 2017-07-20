
// length
let cars = ['Ford', 'Chevrolet', 'Buick', 'Mustang'];
console.log(cars.length);

// concat
let moreCars = ['Buick', 'Mercedes', 'Dodge', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log (totalCars);

// indexOf && lastIndexOf
var x = totalCars.indexOf('Honda');
console.log (x);
var y = totalCars.lastIndexOf('Ford');
console.log (y);

// join
let stringOfCars = totalCars.join();
console.log(stringOfCars);

// toDo split
let totalCars2 = stringOfCars.split();
console.log (totalCars2);


// reverse
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// sort
