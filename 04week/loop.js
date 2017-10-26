//Getting carsInReverse variable -- IGNORE!
//Getting carsInReverse variable -- IGNORE!
// Ex. 1.
let cars = ['ford', 'volvo', 'saab', 'kia'];
// console.log(cars.length);

//Ex. 2.
let moreCars = ['toyota', 'cadillac', 'chrysler', 'honda'];
let totalCars = cars.concat(moreCars);

//Ex. 3.
// console.log(totalCars.indexOf('honda'));
// console.log(totalCars.lastIndexOf('ford'));

//Ex. 4.
let stringOfCars = totalCars.join(', ');

//Ex. 5.
totalCars = stringOfCars.split(', ');

//Ex. 6.
let carsInReverse = totalCars.reverse();
//Getting carsInReverse variable -- IGNORE!
//Getting carsInReverse variable -- IGNORE!


//EX. 1.

// for (let i = 0; i <= carsInReverse.length; i++) {
//   console.log(carsInReverse[i]);
// }

for (let x in carsInReverse) {
  console.log(carsInReverse[x]);
}

//EX. 2.
let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

//log all keys.
for (let x in person) {
  console.log(x);
}

//log value of birthDate
for (let x in person) {
  if (x === 'birthDate') {
    console.log(person[x]);
  }
}

//Ex. 3
for (let i = 1; i < 1001; i++) {
  console.log(i);
}

//Ex. 4
let num = 1
do {
  console.log(num);
  num += 1;
} while (num < 1001)

//Ex. 5
