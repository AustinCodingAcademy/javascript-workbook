const cars = ["Ford", "Buick", "Toyota", "Audi"];
console.log("cars: " + cars);
console.log("cars length: " + cars.length);
const moreCars = ["Chevy", "BMW", "Kia", "Honda"];
console.log("moreCars: " + moreCars);
const totalCars = cars.concat(moreCars);
console.log("totalCars: " + totalCars);
console.log("totalCars length: " + totalCars.length);
console.log("index of Honda: " +totalCars.indexOf("Honda"));
console.log("last Index Of Ford: " + totalCars.lastIndexOf("Ford"));
const stringOfCars = totalCars.join(" ");
console.log("Joined Array to string: " + stringOfCars);
const totalCars2 = stringOfCars.split(",");
console.log("Split string into totalCars2 Array: " + totalCars2);
const carsInReverse = totalCars.reverse();
console.log("cars in reverse: " + carsInReverse);
console.log("Sorted Cars: " + carsInReverse.sort());
var removedCars = carsInReverse.slice(4,6);
console.log("removedCars: " + removedCars)
console.log("Cars in reverse Edit: " + carsInReverse);
carsInReverse.splice(1,2, "Ford", "Honda");
console.log("Cars spliced: " + carsInReverse);
carsInReverse.push("BMW", "Buick");
console.log("Pushed BMW and Buick back on: " + carsInReverse);
carsInReverse.unshift("Nissan");
console.log("Unshifted Nissan to array: " + carsInReverse);
var numbers = [23, 45, 0, 2];
console.log("Numbers array: " + numbers)
numbers.forEach(function(number){
	var added = number + 2;
	console.log("Numbers plus 2: " + added);
	});
