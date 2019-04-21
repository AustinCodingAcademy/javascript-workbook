let cars = ["Ford", "Toyota", "BMW", "Ferrari"];

// 1. length of the array.
console.log("TOTAL CARS:", cars.length);

// 2. concat
let more_cars = ["Chevy", "Saab", "Tesla", "Honda"];
let totalCars = cars.concat(more_cars);
console.log("NEW TOTAL CARS:", totalCars);

// 3.i indexOf() Honda item
console.log("INDEX OF HONDA CAR:", totalCars.indexOf("Honda"));

// 3.ii lastIndexOf() Honda item
console.log("INDEX OF FORD CAR:", totalCars.lastIndexOf("Ford"));

// 4. Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log("STRING OF CARS: ", stringOfCars);

// 5. Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(",");
console.log("TOTAL CARS IN ARRAY: ", totalCars);

// 6. Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log("CARS IN REVERSE: ", carsInReverse);

// 7. sort
// Use the sort method to put the array carsInReverse into alphabetical order.
totalCars = carsInReverse.sort();
console.log("CARS SORTED ALPHABETICALLY: ", totalCars);

// 8. slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

carsInReverse = totalCars.reverse();
console.log("CARS IN REVERSE: ", carsInReverse);

let removedCars = carsInReverse.slice(3, 5);
console.log("REMOVED CARS: ", removedCars);

// 9. splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let spliceCars = carsInReverse.splice(2, 2, "Ford", "Honda");
console.log("NEW CARS ADDED: ", spliceCars);
console.log(carsInReverse);

//READ MORE ABOUT SPLICE

// 10. push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
console.log("PUSH NEW CAR:", carsInReverse.push("Ford"));
console.log(carsInReverse);

// 11 pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop());

// 12 shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift());

// 13 unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
console.log(carsInReverse.unshift('Kia'));
console.log(carsInReverse);

// 14 forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = [23, 45, 0, 2];
numbers.forEach(function(number){
    numbers = number + 2;
    console.log(numbers);
}) 