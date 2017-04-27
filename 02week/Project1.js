var cars = ['Ford','Toyota','Nissan','Mazda'];
// console.log(cars.length);

var moreCars = ['Subaru','GMC','Chevrolet','Honda'];
var totalCars = cars.concat(moreCars);
// console.log(totalCars);

// console.log(totalCars.indexOf('Honda'));
// console.log(totalCars.lastIndexOf('Ford'));

var stringOfCars = totalCars.join(' - ');
// console.log(stringOfCars);


stringOfCars = totalCars.join();
// console.log(stringOfCars);

totalCars = stringOfCars.split();
// console.log(totalCars);

var carsInReverse = cars.concat(moreCars).reverse();
// console.log(carsInReverse);

var sortedArray = carsInReverse.sort();
// alert(sortedArray.indexOf('Chevrolet'));
// console.log(sortedArray);

// console.log(carsInReverse);
var removedCars = carsInReverse.slice(1,4);
// console.log(removedCars);
// console.log(carsInReverse);

var newArray = carsInReverse.slice(1,4).splice(2,2,'Ford','Honda');
// console.log(newArray);

carsInReverse.push('Honda');
// console.log(carsInReverse.pop());

// console.log(carsInReverse.shift());
// console.log(carsInReverse.unshift('Ferrari'));
// console.log(carsInReverse);

var number = [23,45,0,2];
number.forEach(function(newNumber) {
  newNumber += 2;
  console.log(newNumber);
});
