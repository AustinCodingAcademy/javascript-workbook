const cars = ["porsche", "ferrari", "lamborghini", "lotus"];

//length.array
console.log(".length array",
  cars.length);


const moreCars = ["ford", "chevy", "toyota", "honda"];
//concat cars with moreCars name it totalCars
let totalCars = (cars.concat(moreCars));
console.log("totalCars length array with concat",
  totalCars.length);

// use indexOf array to check for placement of "honda"
console.log("index of array to check for placement of honda", totalCars.indexOf("honda"));

// use lastIndexOf to check for placement of "ford"
console.log("use lastIndexOf to check for placement of ford", totalCars.lastIndexOf("ford"));

// use .join to covert the array totaCars into a string called "stringOfCars"
const stringOfCars = totalCars.join(",");
console.log("use .join to convert array into string called stringOfCars", stringOfCars);


// use .split method to convert stringOfCars back into an array called totalCars
totalCars = stringOfCars.split(",");
console.log("using split method to convert stringofcars back into totalcars array", totalCars);

// use .reverse method to create an array carsInReverse which is the array totalCars in reverse
let carsInReverse = totalCars.reverse();
console.log(".reverse method creating carsInReverse", carsInReverse);


// use sort method to put array carsInReverse into alphabeltical order
//based on the types of cars you used, predict which item in the array should be at index 0
// Use the following code to confirm or reject your prediction
carsInReverse.sort();
console.log("sorting cars in reverse in aplhabetical order", carsInReverse);

console.log(carsInReverse.indexOf("yourPrediction"));

// use .slice method to remove "ford" and "honda" from carsInReverse array and move them into a new array called removedCars
let removedCars = [];
// use .splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place
removedCars.push(carsInReverse.splice(1, 1, "Ford"));
removedCars.push(carsInReverse.splice(2, 1, "Honda"));
console.log("removed cars", removedCars);
let stringOfRemovedCars = removedCars.join(",");
removedCars = stringOfRemovedCars.split(",");
console.log("removed cars added back to list as part of array", removedCars);


// use .push method to add the types of cars that you removed using the splice method to the carsInReverse array

for (let i = 0; i < removedCars.length; i++) {
  carsInReverse.push(removedCars[i])
};
console.log(carsInReverse);

// use .pop method to remove and console.log the last item in the array carsInReverse

console.log("pop(remove last item): ", carsInReverse.pop());

// use the shift method to remove and console.log the first item in the array carsInReverse

console.log("shift(remove first item): ", carsInReverse.shift());


// use .unshift method to add a new type of car to the array carsInReverse

console.log("unshift(add item to array): ", carsInReverse.unshift("BMW"));
console.log(carsInReverse);

// create an array called numbers with the following items: 23,45,0,2. Write code that will add 2 to each item in the array numbers

let numbers = [23, 45, 0, 2];
numbers.forEach(function (number, i, numbers) {
  numbers[i] = number + 2;
});
console.log(numbers);


//BURN THIS DOWN AND DO IT FOUR TIMES AT LEAST!!!!