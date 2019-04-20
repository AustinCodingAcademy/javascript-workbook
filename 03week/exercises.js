'use strict';


const cars = ["ford", "toyota", "bmw","gmc"];
console.log(cars.length);

const moreCars = ["hyundai", "chevy", "audi", "honda"];
const totalCars = cars.concat(moreCars);


console.log(moreCars.indexOf("honda"));
console.log(cars.lastIndexOf("ford"));

const stringOfCars = totalCars.join();

const totalCars = stringOfCars.split(" ");

function reverse() {
    const carsInReverse = cars.reverse();
}


carsInReverse.sort();

alert(carsInReverse.indexOf("bmw"));

const removedCars = totalCars.slice(0,7);

function splice() {
    const moreRemovedCars = carsInReverse.splice(1,2,"ford","honda");
}

function push() {
    carsInReverse.push(moreRemovedCars);
}

function pop() {
    console.log(carsInReverse.pop());
}

const firstElement = carsInReverse.shift();
console.log(firstElement);

carsInReverse.unshift("dodge");

const numbers = [23, 45, 0, 2];
numbers.forEach(function(i) {
    console.log(i + 2)
});