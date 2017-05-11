var cars = ['Ford', 'Chevrolet', 'Nissan', 'Hyundai'];
// console.log(cars.length);

var morecars = ['Toyota', 'BMW', 'Bentley', 'Honda'];
var totalCars = cars.concat(morecars);
// console.log(totalCars);

// console.log(totalCars.indexOf('Honda'));
// console.log(totalCars.lastIndexOf('Ford'));

var stringOfCars = (totalCars.join('/'));
// console.log(stringOfCars);

// var totalCars = stringOfCars.split('-');
// console.log(totalCars);

// var carsInReverse = totalCars.reverse();
// console.log(carsInReverse);
var totalCars
nums.sort((a, b) => {
  if (a < b) {
    return -1;
  }

  if (b > a) {
    return 1;
  } else return 0;
});
