// Create an array called cars which consists of 4 different types of cars. 
// The first car type should be Ford.
// Console.log the length of the array.
const car = ['ford', 'chevy', 'mazda', 'subaru'];
console.log("CAR ARRAY LENGTH: ", car.length);
// Create another array called more cars with 4 more different types of cars. 
// The last car type should be Honda
const moreCars = ['jeep', 'benz', 'bmw','honda']
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let totalCars = car.concat(moreCars);
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
console.log("INDEX OF HONDA: ", totalCars.indexOf('honda'));
// Use the join method to covert the array totalCars into a string called stringOfCars.
const stringOfCars = totalCars.join(', ');
console.log("STRING OF CARS: ", stringOfCars);
// Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(', ');
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
const carsInReverse = totalCars.reverse();
console.log("CARS IN REVERSE ORDER: ", carsInReverse);
// Use the sort method to put the array carsInReverse into alphabetical order.
carsInReverse.sort();
console.log("CARS SORTED ALPHABETICALLY: ", carsInReverse);
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
// alert(carsInReverse.indexOf('benz'));
// Use the slice method to remove Ford and Honda from the carsInReverse array 
// and move them into a new array called removedCars.
const removedCars = carsInReverse.slice(3, 5)
console.log("REMOVED CARS: ", removedCars)
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse 
// and add Ford and Honda in their place.
carsInReverse.splice(1, 2, 'Ford', 'Honda');
// Use the push method to add the types of cars that you removed 
// using the splice method to the carsInReverse array.
carsInReverse.push('bmw', 'chevy');
console.log("SPLICE AND PUSHED: ", carsInReverse);
// Use the pop method to remove and console.log the last item in the array carsInReverse.
const deletedItem = carsInReverse.pop();
console.log("REMOVED LAST ITEM: ", deletedItem);
// Use the shift method to remove and console.log the first item in the array carsInReverse.
const shiftedItem = carsInReverse.shift();
console.log("SHIFT: ", shiftedItem);
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift('Tesla');
console.log("UNSHIFT: ", carsInReverse);
// Create an array called numbers with the following items: 23, 45, 0, 2 
// Write code that will add 2 to each item in the array numbers.
const numbers = [23,45,0,2];
numbers.forEach((item, index)=>{
  numbers[index] = item + 2;
});
console.log("NUMBERS ADDED: ", numbers);