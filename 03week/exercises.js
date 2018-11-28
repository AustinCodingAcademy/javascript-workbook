// Create a new file called exercises.js in the /02week folder of your workbook.
// Complete each of the following exercises.
// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
let cars = ["Ford","Merc","Audi","BMW"];
// Console.log the length of the array.
console.log(cars.length);
// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
let moreCars = ["Hyundai","Marserati","Jeep","Honda"];
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let totalCars = cars.concat(moreCars);
console.log(totalCars);
// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
let first = totalCars.indexOf("Honda");
console.log("Index of Honda is: "+first);
// Use the lastIndexOf method to console.log the index of Ford.
let last = totalCars.lastIndexOf("Ford");
console.log("Last index of Ford is :" +last)
// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log(stringOfCars);
// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(",");
console.log(totalCars);
// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log("Before sorting :" +carsInReverse);
// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
carsInReverse.sort();
console.log("After sort :" +carsInReverse);
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
console.log(carsInReverse.indexOf("Audi"));
// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let temp = carsInReverse.indexOf("Ford");
let temp1 = carsInReverse.indexOf("Honda");
let removedCars = carsInReverse.slice(temp,temp1+1);
console.log(carsInReverse);
console.log(removedCars);
// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.

carsInReverse.splice(temp,temp,"Ford","Honda");
console.log(carsInReverse);
// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push("sports");
console.log(carsInReverse);
// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
carsInReverse.pop();
// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
carsInReverse.shift();
console.log(carsInReverse);
// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Audi");
console.log(carsInReverse);
// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = [23,45,0,2];
numbers.forEach((item,index) => {
    numbers[index] = numbers[index] + 2;
});
console.log(numbers);