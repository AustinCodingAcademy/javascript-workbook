'use strict';
console.log('Step 1: Use a for loop to console.log each item in the array ');

let carsInReverse = ['Ford', 'Chevy', 'Mini', 'Dodge', 'Tesla', 'General Motors', 'Aston Martin'];

for(let i = 0; i < carsInReverse.length; i++){
  console.log(carsInReverse[i]);
}
console.log('');
console.log('Step 2: for...in loop to print the key of the object and the birthDate')

const persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 25, 1995',
  gender: 'female'
};

for(let key in persons) {
  console.log(key);
}

for(let key in persons) {
  if(key === 'birthDate'){
    console.log(persons[key]);
  }
}

console.log('');
console.log('Step 3: Use a for loop to console.log the numbers 1 to 1000')

let numCounter = ''
while(numCounter <= 1000){
  console.log(numCounter);
  numCounter++;
}

console.log('');
console.log('Step 4: Use a do...while loop to console.log the numbers from 1 to 1000');

let doNumCounter = ''
do {
  console.log(doNumCounter);
  doNumCounter++;
} while (doNumCounter < 1000);
  console.log(doNumCounter);

console.log('');
console.log('Step 4: Use a do...while loop to console.log the numbers from 1 to 1000');
