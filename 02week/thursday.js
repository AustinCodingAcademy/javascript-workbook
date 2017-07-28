"use strict";

//1. length
const cars = ['Ford', 'Chevy', 'BMW', 'Toyota']
const carLoop = (arr) => {
  return arr.length;
}
console.log(carLoop(cars));

//2. concat
const moreCars = ['Ferarri', 'Jaguar', 'Tesla', 'Honda']
const totalCars = cars.concat(moreCars);
console.log(totalCars);

//3. index of/last index of
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

//4. join
const stringOfCars = totalCars.join();
console.log(stringOfCars);

//5. split
const res = stringOfCars.split('totalCars');
console.log(res);

//6. reverse
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//7. sort
carsInReverse.sort();
console.log(carsInReverse);
// alert(carsInReverse.indexOf('BMW'));

// //8. slice
let removedCars = carsInReverse.slice(3,5);
console.log(removedCars, 'SLICE');


//10 push
carsInReverse.push("Chevy", "Ferrari");
console.log(carsInReverse);

//11 pop
let popped = carsInReverse.pop();
console.log(popped);

//12 shift
let b = carsInReverse.shift();
console.log(b);

//13 unshift
carsInReverse.unshift("Land Rover");
console.log(carsInReverse);

//14 forEach
function plusTwo() {
  let numbers = [23, 45, 0, 2];
  numbers.forEach((num, index) => {
    numbers[index] = num + 2});
  console.log(numbers);
}
plusTwo();
