// week 3 array exercises:

//length
let cars = ["Ford","Chevy","Dodge","Toyota"];
console.log(cars.length);

//concat
let moreCars = ["Subaru","Mazda","Bmw","Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

//indexOf/lastIndexOf:
console.log(moreCars.indexOf("Honda"))
console.log(cars.lastIndexOf("Ford"));

//join
let stringOfCars = totalCars.join();
console.log(stringOfCars);

//split
console.log(stringOfCars.split());

//reverse
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//sort,
console.log(carsInReverse.sort());
 //slice
let removedCars = carsInReverse.slice(3,5);
console.log(removedCars);

//splice
console.log("my new array: " + carsInReverse.splice(1, 5, "Ford", "Honda"));
console.log(carsInReverse);

//push
console.log(carsInReverse.push("Dodge", "Mazda"));
console.log(carsInReverse);

//pop
console.log(carsInReverse.pop());

//shift
console.log(carsInReverse.shift());

//unshift
console.log(carsInReverse.unshift("Jeep"));
console.log(carsInReverse);

//forEach
let numbers = [23, 45, 0, 2];
numbers.forEach(function(number) {
    console.log(number + 2);
})