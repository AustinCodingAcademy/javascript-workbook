'use strict';
var cars = ['ford', 'nissan', 'acura', 'buick'];
var moreCars = ['bmw', 'toyota', 'kia', 'honda'];
var totalCars = cars.concat(moreCars);
var stringOfCars = totalCars;
var carsInReverse = totalCars;
var removedCars = carsInReverse;
var numbers = [23, 45, 0, 2];

function checkLength () {
  console.log(cars.length);
}

function combineCars () {
  return;
}

function checkIndexOf () {
  console.log(totalCars.indexOf('honda'));
  console.log(totalCars.lastIndexOf('ford'));
}

function joinCars () {
  stringOfCars = totalCars.join(', ');
  return;
}

function splitCars () {
  totalCars = stringOfCars.split(' ');
  return;
}

function reverseCars () {
  carsInReverse.reverse();
  return;
}

function sortCars () {
  carsInReverse.sort();
  // alert(carsInReverse.indexOf('acura'));
  return;
}

function sliceCars () {
  removedCars = carsInReverse.slice(3, 5);
  return;
}

function spliceCars () {
  carsInReverse.splice(2, 2, 'ford', 'honda');
}

function pushNewCars () {
  carsInReverse.push('buick', 'ford');
}

function popLastCar () {
  carsInReverse.pop();
  console.log(carsInReverse[8]);
}

function shiftFirstCar () {
  carsInReverse.shift();
  console.log(carsInReverse[0]);
}

function addCarToFront () {
  carsInReverse.unshift('dodge');
  return;
}

function addTwo () {
  numbers.forEach(function (element) {
    console.log(element + 2);
  });
  return;
}

checkLength();
combineCars();
checkIndexOf();
joinCars();
splitCars();
reverseCars();
sortCars();
sliceCars();
spliceCars();
pushNewCars();
popLastCar();
shiftFirstCar();
addCarToFront();
addTwo();
