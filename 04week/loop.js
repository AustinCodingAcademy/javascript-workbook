
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

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

var num = 1;
for(num=1; num<=1000; num++) {
  console.log(num)
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

var numWhile = 1;

do {
  numWhile++;
  console.log(numWhile);

} while (numWhile<=999);

// When is a for loop better than a while loop? How is the readability of the code affected?
// A for loop is better when you are generating for that specific number and know the specific number of iterations.
// While, a while for loop is the opposite, you use it when you do not know the specific number of iterations.
// So it will keep on looping until a pre-determined scenerio takes place.

// What is the difference between a for loop and a for...in loop?
// The difference between a for loop and a for...in loop is that a for...in loop loops over enumerable property names of an object.
// Where a for loop are to iterate a specific number.

// What is the difference between a while loop and a do...while loop?
// The difference bwetween a while loop and a do...while loop is that a while loop checks the condition first before examining the content.
// While a do while loop executes the content of that loop once before checking the condition of the while.
