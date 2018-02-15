
const carsInReverse = ['honda', 'toyota', 'bmw', 'jeep', 'ford', 'tesla']

// for loop

for (let cars of carsInReverse) {
  console.log(cars);
}

// for...in

const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

// Use a for...in loop to console.log each key.

for (info in persons) {
  console.log(persons[info]);
}

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

console.log(persons.birthDate)
