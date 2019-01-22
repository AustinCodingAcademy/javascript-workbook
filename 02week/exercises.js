// 1. create an arrary called cars; console log the length of cars
let cars = ['Ford','Dodge','GMC','Chevrolet']
// console log the length of cars
console.log(cars.length);

// 2. crate an array called moreCarsl use concat, create new variable and combine cars and moreCars
let moreCars = ['Audi','BMW','Toyota','Honda'];
// create new variable and combine cars and moreCars
let totalCars = cars.concat(moreCars);

//3. Use the indexOf method to conole.log the index of Honda;
console.log(moreCars.indexOf('Honda'));
//use the lastIndexOf methon to console.log the index of Ford
console.log(cars.lastIndexOf('Ford'));

//4. use join to covert totalCars to a string
let stringOfCars = totalCars.join();

//5. use split to convert stringOfCars into array called totalCars
totalCars = stringOfCars.split();

//6. use the reverse method to creare array which is totalCars in reverse
let carsInReverse = totalCars.reverse();

//7. use sort to put in alphabetical order
carsInReverse.sort();
//predcict which iteam in the array should be at index 0
alert(carsInReverse.indexOf('Audi'));
