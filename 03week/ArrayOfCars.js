let cars = ["Ford", "Toyota", "BMW", "Ferrari"];

// 1. length of the array.
console.log("TOTAL CARS:", cars.length);

// 2. concat
let more_cars = ["Chevy", "Saab", "Tesla", "Honda"];
let totalCars = cars.concat(more_cars);
console.log("NEW TOTAL CARS:", totalCars);

/*
NOTE
indexOf() function is match first occurance, LastindexOf() function is match last occurance
Both function are using for finding index in String or Array;
sample code with String operation

var state = "abcdtmpefgtmp";
var temp =state.indexOf("tmp"); //match first occurance
console.log(temp);
//>4

var temp =state.lastIndexOf("tmp"); //match last occurance
console.log(temp);
//>10
*/

// 3.i indexOf() Honda item
console.log("INDEX OF HONDA CAR:", totalCars.indexOf("Honda"));

// 3.ii lastIndexOf() Honda item
console.log("INDEX OF FORD CAR:", totalCars.lastIndexOf("Ford"));

// 4. Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log("STRING OF CARS: ", stringOfCars);

// 5. Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(",");
console.log("TOTAL CARS: ", totalCars);

// 6. Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log("CARS IN REVERSE: ", carsInReverse);

// 7. sort
// Use the sort method to put the array carsInReverse into alphabetical order.
totalCars = carsInReverse.sort();
console.log("CARS SORTED ALPHABETICALLY: ", totalCars);
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));


// 8. slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// let carsInReverse1 = totalCars.reverse();
// console.log("CARS IN REVERSE: ", carsInReverse1);
// let removedCars = carsInReverse1.slice(4, 6);
// console.log("REMOVED CARS: ", removedCars);


carsInReverse = totalCars.reverse();
console.log("CARS IN REVERSE: ", carsInReverse);

let removedCars = carsInReverse.slice(3, 5);
console.log("REMOVED CARS: ",removedCars);

// // 9. splice
// // Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
// // NOTE: READ ABOUT SPLICE..................................
// let carsInReverse2 = totalCars.reverse();
// console.log("REMOVE 2ND AND 3RD CARS & ADD FORD & HONDA: ", carsInReverse2.splice(4, 6, "Ford", "Honda"));

// // Example
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 0, "Lemon", "Kiwi");
// console.log(fruits);





