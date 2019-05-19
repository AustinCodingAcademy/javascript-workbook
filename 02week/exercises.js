// Off of master create a new branch called 'ArrayOfCars'
// Create a new file called exercises.js in the /02week folder of your workbook.
// Inside the file complete each of the following exercises.

// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
let cars = ['Ford', 'Honda', 'Toyota', 'GMC'];
// Console.log the length of the array.
console.log("The length of cars is " + cars.length)
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
let moreCars = ['Fiat', 'Chevy', 'BMW', 'Honda'];
// concat
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let totalCars = cars.concat(moreCars)
console.log('Concat: ' , totalCars)
// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
console.log(cars.indexOf('Honda'))
// Use the lastIndexOf method to console.log the index of Ford.
console.log(cars.lastIndexOf('Ford'))
// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log('Join: Array to String ', stringOfCars)
// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
let totalCarsSplit = stringOfCars.split();
console.log('Split: String to Array ', totalCarsSplit)
// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log('Reversed: ', carsInReverse)
// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
carsInReverse.sort();
console.log('Sort Alphabetical: ', carsInReverse)
// Based on the types of cars you used, predict which item in the array should be at index 0.
// ** BMW
// Use the following code to confirm or reject your prediction:
//alert(carsInReverse.indexOf('BMW'));
// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = carsInReverse.slice(3,5);
console.log('Removed Cars: ', removedCars)
// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(1,2, 'Honda', 'Ford'); //Honda and Ford
console.log('Splice: ', carsInReverse)
// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push('Fiat', 'Ford');
console.log('Push: ', carsInReverse)
// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
let deletedItem = carsInReverse.pop();
console.log('Pop, removed last item: ', deletedItem)
// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
let firstItem = carsInReverse.shift();
console.log('Shift, removed first item: ', firstItem)
// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift('Volvo');
console.log('Unshift, add new car to array: ', carsInReverse)
// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = ['23', '45', '0', '2'];
numbers.forEach((item, index)=>{
  numbers[index] = item + 2;
});
console.log(numbers);
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
