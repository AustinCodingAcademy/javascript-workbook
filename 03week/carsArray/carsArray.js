// define an array
let cars = ["Ford", "Toyota", "Isuzu", "Jeep"];
// print length
console.log(cars.length);
// define second array
let moreCars = ["Chevrolet", "Subaru", "Mercedes", "Honda"];
// concat the two arrays into new array
let totalCar = cars.concat(moreCars);
// print to ensure it works
console.log(totalCar);
// index of to find ford and honda
console.log(totalCar.indexOf("Honda"));
console.log(totalCar.lastIndexOf("Ford"));
// join totalCars into string
let stringOfCars = totalCar.join(", ");
// Did it work? Let's see
console.log(stringOfCars);
// Turn it back now
let totalCars = stringOfCars.split(", ");
console.log(totalCars);
// create new array in reverse
let carsInReverse = totalCars.reverse();
// show it
console.log(carsInReverse);
// alphabetical order
carsInReverse.sort();
// Chevrolet comes first
console.log(carsInReverse.indexOf('Chevrolet'));
// console.log(carsInReverse);
// alert(carsInReverse.indexOf('Chevrolet'));
// take out ford and honda and add them to removedCars
let removedCars = carsInReverse.slice(1,3);
// console.log(removedCars);
// splice carsInReverse and replace with "ford" and "honda"
carsInReverse.splice(1,2,"Ford", "Honda");
// console.log(carsInReverse);
// add spliced items using push
carsInReverse.push("Ford","Honda");
// console.log(carsInReverse);
// pop and log it
console.log(carsInReverse.pop());
// shift and log it 
console.log(carsInReverse.shift());
// unshift summat new
carsInReverse.unshift("Fiat");
console.log(carsInReverse);

// create array called numbers
const numbers = [23, 45, 0, 2];
// forEach function to add two
numbers.forEach((num, i) => {
  numbers[i] = num + 2;
});
// show your answer
console.log(numbers);

  







