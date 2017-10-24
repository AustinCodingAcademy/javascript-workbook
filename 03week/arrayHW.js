let cars = ["Ford", "Mustang", "Chevy", "Saturn"];

console.log(cars.length);

let moreCars = ["Acura", "BMW", "Audi", "Honda"];

let totalCars = cars.concat(moreCars);

console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join();

totalCars = stringOfCars.split(',');

let carsInReverse = totalCars.reverse();

carsInReverse.sort();

console.log(carsInReverse);

alert(carsInReverse.indexOf('Acura'));

carsInReverse.splice(1, 2, 'Ford', 'Honda');

carsInReverse.push('Audi','BMW');

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

carsInReverse.unshift('Jeep');

let numbers =[23, 45, 0, 2];

numbers.forEach(function(item, index, array){
  array[index]=item+2;
});

console.log(numbers);
