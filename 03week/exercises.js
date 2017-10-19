'use strict'


//1. Length
const cars = ['Ford','Toyota','BMW','Dodge'];
console.log(cars.length);

//2. Concat
const moreCars = ['Lotus','Porche','Tesla','Honda'];
const totalCars = cars.concat(moreCars); 

//3. indexof and lastindexof
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

//4. join
const stringOfCars = totalCars.join();

//5. split
stringOfCars.split(",");

//6. reverse
let carsInReverse = totalCars.reverse();

//7. sort
const sortedCars = totalCars.sort();
//alert(carsInReverse.indexOf('BMW')); <--- Caused error 

//8. slice
const removedCars = carsInReverse.slice(2, 4);
carsInReverse.splice(2, 2, 'Ford', 'Honda');

//10. push
carsInReverse.push('Ford', 'Honda');

//11. pop
console.log(carsInReverse.pop());

//12. shift
console.log(carsInReverse.shift());

//13. unshift
carsInReverse.unshift('Saturn');

//14. forEach
let numbers = [23, 45, 0, 2];
