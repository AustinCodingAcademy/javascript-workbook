//Console.log the length of the array.//
const cars = [ 'Ford', 'BMW', 'VW', 'Chevy'];
console.log("length", cars.length);

const moreCars = [ 'Jeep', 'Saab', 'Izusu', 'Honda'];
//
// arrays into an array called totalCars.  concat method//
const totalCars = cars.concat(moreCars);
console.log("concat", totalCars)

// indexOf and lastIndexOf//
const honda = moreCars.indexOf('Honda');
console.log(honda)

const ford = cars.lastIndexOf('Ford');
console.log("lastIndexOf",ford)

const stringOfCars = totalCars.join(', ');
console.log("join",stringOfCars);

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// const totalCars = alert(carsInReverse.indexOf('Ford')); 
// // console.log("sort",
console.log("Gina",totalCars.indexOf('Honda'));

// sort method to put the array carsInReverse into alphabetical order
carsInReverse.sort();
console.log(carsInReverse);

// slice method to remove Ford and Honda from the carsInReverse array 
const removedCars = carsInReverse.slice(3, 5)
console.log("slice",removedCars)
// Using the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(1, 2, 'Ford', 'Honda');

//Using the push method to add the types of cars that I removed using the splice method to the carsInReverse array.
carsInReverse.push('BMW', 'Chevy');
console.log(carsInReverse);

//Using the pop method to remove and console.log the last item in the array carsInReverse.
const deletedItem = carsInReverse.pop();
console.log(deletedItem);

//using the shift method to remove and console.log the first item in the array carsInReverse.
const shiftedItem = carsInReverse.shift();
console.log(shiftedItem);

//Using the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift('Subaru');
console.log(carsInReverse);

//code that will add 2 to each item in the array numbers.
const numbers = [23,45,0,2];
numbers.forEach((item, index)=>{
  numbers[index] = item + 2;
  
});

console.log(numbers);