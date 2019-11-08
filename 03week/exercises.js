// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.

const cars = ['Ford', 'Jeep', 'Mercedes', 'Hyundai'];

// Console.log the length of the array.
console.log(cars.length);

// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
const moreCars = ['El_Camino','Corvette', 'Subaru', 'Honda']


// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
let totalCars = cars.concat(moreCars);
console.log('total cars: ', totalCars)

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
console.log(totalCars.indexOf('Honda'));

// Use the lastIndexOf method to console.log the index of Ford.
console.log(totalCars.lastIndexOf('Ford'));

// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join(' ');
console.log(stringOfCars);

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.

totalCars = stringOfCars.split(' ');

// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.

let carsInReverse = totalCars.reverse();
console.log('cars in reverse: ', carsInReverse);

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.

carsInReverse.sort()
console.log(carsInReverse);

// Based on the types of cars you used, predict which item in the array should be at index 0.
    //Corvette should be index 0.

// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));

//alert(carsInReverse.indexOf('Corvette'));

// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

const removedCars = carsInReverse.splice(2, 2);

console.log('removed Cars : ', removedCars);
console.log('cars in reverse : ', carsInReverse);

// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.

const slicedCars = carsInReverse.splice(1, 2, removedCars[0], removedCars[1]);
console.log('Cars in reverse : ', carsInReverse);

// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
slicedCars.forEach(item => {
  carsInReverse.push(item);
})

console.log(carsInReverse)

// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.

console.log(carsInReverse.pop())
console.log(carsInReverse)

// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift())
console.log(carsInReverse)

// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift('Hummer')
console.log(carsInReverse);

// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.

const numbers = [23, 45, 0, 2];
numbers.forEach((item, index) => {
  numbers[index] = item + 2;
})

console.log(numbers)

// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const moreNumbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

moreNumbers.forEach(plusTwo);

function plusTwo(item, index, array) {
  array[index] = item + 2
}

console.log('More Numbers : ', moreNumbers)

// const plusTwo = (item, index, array) => {array[index] = item + 2}