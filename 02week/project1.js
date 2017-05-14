const cars = ['Ford', 'Fiat', 'Tesla', 'Dodge']
console.log(cars);

const morecars = ['Kia', 'Ferrari', 'LandRover', 'Honda']
cars.concat(morecars);

const totalcars = cars.concat(morecars);

totalcars.indexOf('Honda');

totalcars.lastIndexOf('Ford');

var stringOfCars = totalcars.join();
stringOfCars.split();

const carsInReverse = totalcars.reverse();
