'use strict';

let cars = ["Ford", "Benz", "Volvo", "BMW"];
console.log("Length of cars arr: " + cars.length);

let moreCars = ["Subaru", "Totota", "Tesla", "Honda"];
let totalCars = cars.concat(moreCars);
console.log("totalCars arr: " + totalCars);

console.log("indexOf Honda: " + totalCars.indexOf("Honda"));
console.log("lastIndexOf Ford: " + totalCars.lastIndexOf("Ford"));

const stringOfCars = totalCars.join(", ");
console.log("stringOfCars: " + stringOfCars);

totalCars = stringOfCars.split(", ");
console.log("totalCars: " + totalCars);

let carsInReverse = totalCars.reverse();
console.log("carsInReverse: " + carsInReverse);

let removedCars = carsInReverse.slice(1, 6);
console.log("removedCars: " + removedCars);

carsInReverse.splice(1, 2, "Ford", "Honda");
console.log("New carsInReverse: " + carsInReverse);

carsInReverse.push("Tesla");
carsInReverse.push("Toyota");
console.log("pushNewCars: " + carsInReverse);

console.log("popLastItem: " + carsInReverse.pop());
console.log("popLastItem: " + carsInReverse.shift());
console.log("popLastItem: " + carsInReverse.unshift("Mazda"));
console.log("Final: " + carsInReverse);

const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

numbers.forEach(function (number) {
    console.log(number + 2);
});
