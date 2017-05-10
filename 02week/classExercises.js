var cars = ["Ford", "Chevy", "Batmobile", "Citroen"];
var moreCars = ["BMW", "Fiesta", "Carname", "Honda"];
var totalCars = cars.concat(moreCars);

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.indexOf("Ford"));

var stringOfCars = totalCars.join(',');
stringOfCars.split(',');
var carsInReverse = totalCars.reverse();

carsInReverse = carsInReverse.sort();
console.log(carsInReverse.indexOf('BMW'));
console.log(carsInReverse);

carsInReverse = carsInReverse.slice(0,6);
console.log(carsInReverse);

carsInReverse.splice(1,2,"Ford","Honda");
console.log(carsInReverse);

carsInReverse.push("Batmobile", "Carname");
console.log(carsInReverse);

console.log(carsInReverse.pop());
console.log(carsInReverse);

console.log(carsInReverse.shift());
console.log(carsInReverse);

console.log(carsInReverse.unshift("F1"));
console.log(carsInReverse);

var arr = [23,45,0,2];

arr.forEach( (item, index) => {
  arr[index] += 2;
});

console.log(arr);
