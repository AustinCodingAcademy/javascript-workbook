//Complete each of the following exercises.
//length
//Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
const cars = ['ford', 'chevy', 'toyota'];

//Console.log the length of the array.
console.log(cars.length);

//concat
//Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
const moreCars = ['lexis', 'gmc', 'volvo', 'honda'];

//Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
const totalCars = cars.concat(moreCars);

//indexOf and lastIndexOf
//Use the indexOf method to console.log the index of Honda.
console.log(totalCars.indexOf('honda'));

//Use the lastIndexOf method to console.log the index of Ford.
console.log(totalCars.lastIndexOf('ford'));

//join
//Use the join method to covert the array totalCars into a string called stringOfCars.
console.log(totalCars.join());

//split
//Use the split method to convert stringOfCars back intro an array called totalCars.


//reverse
//Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.


//sort
//Use the sort method to put the array carsInReverse into alphabetical order.


//Based on the types of cars you used, predict which item in the array should be at index 0.


//Use the following code to confirm or reject your prediction:
//alert(carsInReverse.indexOf('yourPrediction'));

//splice
//Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
//push
//Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
//pop
//Use the pop method to remove and console.log the last item in the array carsInReverse.
//shift
//Use the shift method to remove and console.log the first item in the array carsInReverse.
//unshift
//Use the unshift method to add a new type of car to the array carsInReverse.
//forEach
//Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
//Project 2