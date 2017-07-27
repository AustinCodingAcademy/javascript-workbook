
function mutate () {
  var cars = ['Ford', 'BMW', 'Toyota', 'Nissan'];
  var moreCars = ['Chevy', 'Mercedes', 'Lexus', 'Honda'];
  var totalCars = cars.concat(moreCars);

  console.log(cars.length);
  console.log(totalCars.indexOf('Honda'));
  console.log(totalCars.lastIndexOf('Ford'));
  var stringOfCars = totalCars.join();
  totalCars = stringOfCars.split(',');
  var carsInReverse = totalCars.reverse();
  carsInReverse.sort();
  var removedCars = carsInReverse.slice(2, 4);
  carsInReverse.splice(1, 2, 'Ford', 'Honda');
  console.log(carsInReverse);
  carsInReverse.push.apply(carsInReverse, removedCars);
  carsInReverse.pop();
  carsInReverse.shift();
  carsInReverse.unshift('New');
}
mutate();

function addTwo() {
  var numbers = [23, 45, 0, 2];
  numbers.forEach(function(element) {
    console.log(element + 2);
  });
  return;
}

addTwo();
