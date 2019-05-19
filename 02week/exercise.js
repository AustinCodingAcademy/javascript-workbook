const cars = ['Ford', 'Honda', 'Fiat','Toyota'];

console.log(cars.length);

const moreCars = ['Isuzu', 'Chevy', 'Subaru', 'Honda'];

//gives totalCars a value of cars + moreCars
const totalCars = cars.concat(moreCars);

//gives index position of Honda = 7
console.log(totalCars.indexOf('Honda'));

//gives index position of Ford = 0
console.log(totalCars.lastIndexOf('Ford'));

//gives a string value of totalCars separated by commas = 
//Ford,Dodge,Fiat,Toyota,Isuzu,Chevy,Subaru,Honda
const stringOfCars = totalCars.join();
console.log(stringOfCars);

//gives an array from the string below
const stringOfCars = "Ford,Dodge,Fiat,Toyota,Isuzu,Chevy,Subaru,Honda"
const totalCars = stringOfCars.split();
console.log(totalCars);

//gives a reversed array but everything has to be in individual ""
const totalCars = [ 'Ford','Dodge','Fiat','Toyota','Isuzu','Chevy','Subaru','Honda' ];

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);
 
//sorting in alphabetical order
const carsInReverse = [ 'Honda','Subaru','Chevy','Isuzu','Toyota','Fiat','Dodge','Ford' ]
const sortedCars = carsInReverse.sort();
console.log(sortedCars);

//.slice()
const carsInReverse = [ 'Honda','Subaru', 'Chevy','Isuzu','Toyota',
'Fiat','Dodge','Ford' ];
const slicedCars = carsInReverse.slice(1,7);
console.log(slicedCars);

//.splice()
const carsInReverse = [ 'Subaru', 'Chevy','Isuzu','Toyota',
'Fiat','Dodge'];
carsInReverse.splice(1,1,'Ford');

carsInReverse.splice(2,1,'Honda');

console.log(carsInReverse);

//.push()
const carsInReverse = [ 'Subaru', 'Chevy','Isuzu','Toyota',
'Fiat','Dodge'];
carsInReverse.splice(1,1,'Ford');

carsInReverse.splice(2,1,'Honda');


carsInReverse.push('Chevy','Isuzu');


console.log(carsInReverse);

//.pop()
const carsInReverse = [ 'Subaru','Ford','Honda','Toyota','Fiat', 'Dodge','Chevy','Isuzu' ];


console.log(carsInReverse.pop()); //answer = 'Isuzu'

//.shift()
const carsInReverse = [ 'Subaru','Ford','Honda','Toyota','Fiat', 'Dodge','Chevy','Isuzu' ];


console.log(carsInReverse.shift()); //answer = 'Subaru'

//.unshift()
const carsInReverse = [ 'Subaru','Ford','Honda','Toyota','Fiat', 'Dodge','Chevy','Isuzu' ];
carsInReverse.unshift('Rari');

console.log(carsInReverse); //answers = [ 'Subaru','Ford','Honda','Toyota','Fiat', 'Dodge','Chevy','Isuzu','Rari' ]

//forEach
const numbers = ['23','45','0','2' ];


