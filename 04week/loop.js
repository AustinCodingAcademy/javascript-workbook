/* Create a new file called loops.js in the /04week folder of your workbook.
Complete each of the following exercises.
for loop
Use a for loop to console.log each item in the array carsInReverse.
for...in loop
Create an object (an array with keys and values) called persons with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
Use a for...in loop to console.log each key.
Then use a for...in loop and if state to console.log the value associated with the key birthDate.
while loop
Use a for loop to console.log the numbers 1 to 1000.
do...while loop
Use a do...while loop to console.log the numbers from 1 to 1000.
When is a for loop better than a while loop?
How is the readability of the code affected?
What is the difference between a for loop and a for...in loop?
What is the difference between a while loop and a do...while loop? */
'use strict';
let cars = ['ford','audi','bmw','jaguar'];
console.log(cars.length);
let moreCars = ['toyota','nissan','hyundai','honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);
console.log(totalCars.indexOf('honda'));
console.log(totalCars.lastIndexOf('ford'));
let stringOfCars = totalCars.join(' ');
console.log(stringOfCars);
totalCars = stringOfCars.split(' ');
console.log(totalCars);
let carsInReverse = totalCars.reverse();
console.log('=====================================');
console.log('CarsInReverse array display:');
for(let i=0;i<carsInReverse.length;i++){
    console.log(carsInReverse[i]);
}
console.log('=====================================');
let persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

let x;
for(x in persons){
    console.log('Key is:',x);
    if(x === 'birthDate')
        console.log('Birth date is:',persons[x]);
}
let j=1
console.log('=============for loop=============');
for(j=1;j<=10;j++){
    console.log(j);
}
console.log('=====================================');
j = 1;
do{
    console.log(j);
    j++;
}while(j <= 10);
console.log('=====================================');
carsInReverse.sort();
console.log(carsInReverse.indexOf('audi'));
let removedCars = carsInReverse.slice(2,4);
console.log(removedCars);
console.log(carsInReverse);
// carsInReverse.splice(2,2);
// console.log('After the remove',carsInReverse);
carsInReverse.splice(2,2,'ford','honda');
console.log('After the add',carsInReverse);
carsInReverse.push('ford','honda');
console.log(carsInReverse);
console.log(carsInReverse.pop());
console.log(carsInReverse.unshift('dodge'));
let numbers = [23,45,0,2];
numbers.forEach((item,index) => numbers[index]+=2);
console.log(numbers);

