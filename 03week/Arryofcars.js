const car = ['ford', 'kia', 'mazda', 'volvo'];
console.log(car.length);

const myCars = ['nisan', 'saab', 'bmw','honda']

let totalCars = car.concat(myCars);

console.log(totalCars.indexOf('honda'));

const stringOfCars = totalCars.join(', ');
console.log(stringOfCars);

totalCars = stringOfCars.split(', ');

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

carsInReverse.sort();
console.log(carsInReverse);

const removedCars = carsInReverse.slice(3, 5);

carsInReverse.splice(1, 2, 'Ford', 'Honda');

carsInReverse.push('bmw', 'saab');
console.log(carsInReverse);

const deletedItem = carsInReverse.pop();
console.log(deletedItem);

const shiftedItem = carsInReverse.shift();
console.log(shiftedItem);

carsInReverse.unshift('toyota');
console.log(carsInReverse);

const numbers = [23,45,0,2];
numbers.forEach((item, index)=>{
  numbers[index] = item + 2;
  
});

console.log(numbers);

const num=[23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
num.forEach((item, index)=>{
  num[index]=item+2;
});
console.log(num);