var cars = ["Ford", "Chevy", "Chrysler", "BMW"];
var moreCars = ["Mercedes", "Toyota", "Mazda", "Honda"];

//length
console.log(cars.length);

//concat
var totalCars = cars.concat(moreCars);
console.log(totalCars);

//indexOf and lastIndexOf
console.log(moreCars.indexOf("Honda"));
console.log(cars.lastIndexOf("Ford"));

//join
var stringOfCars = totalCars.join(", ");
console.log(stringOfCars);

//split
var totalCars = stringOfCars.split();
console.log(totalCars);

//reverse
var carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//sort
carsInReverse.sort();
console.log(carsInReverse);

//slice
var removedCars = carsInReverse.slice(3, 5);
console.log(removedCars);

//splice
carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);

//push
carsInReverse.push("Ford", "Honda");
console.log(carsInReverse);

//pop
carsInReverse.pop();
console.log(carsInReverse);

//shift
carsInReverse.shift();
console.log(carsInReverse);

//unshift
carsInReverse.unshift("Lexus");
console.log(carsInReverse);

//forEach
var numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach(function(num) {
  console.log(num + 2);
});
