// Use a do...while loop to console.log the numbers from 1 to 1000.
var result = "";
var i = 0;

do {
  i = i + 1;
  console.log(i);
} while (i < 1000);

// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let person = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"};

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for (const key in person) {
  // console.log(person[key])
  var birthYear = person[key].slice(person[key].length -5);
   if (birthYear % 2 == 1) {
     console.log(person[key]);
  }
}

// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

  //duplicate object and push to new array

let arrayOfSamePersons = [];

for (i = 0; i < 5; i++ ) {
  arrayOfSamePersons.push(person);
}

console.log(arrayOfSamePersons);

  //use constructor function to create objects

let arrayOfPersons = [];

function Person(first, last, birthday, gender) {
  this.firstName = first;
  this.lastName = last;
  this.birthDate = birthday;
  this.gender = gender;
}

function addPerson(first, last, birthday, gender) {
  let p = new Person(first, last, birthday, gender);
  arrayOfPersons.push(p);
}

addPerson("Nicole", "Durst", "August 27, 1988", "female");
addPerson("Kai", "Durst", "August 7, 2017", "male");
addPerson("Yuna", "Durst", "June 4, 2019", "female");

console.log(arrayOfPersons);

// Use .map() to map over the arrayOfPersons and console.log() their information.

let arrayOfMappedPersons = arrayOfPersons.map(person => console.log(person));

// Use .filter() to filter the persons array and console.log only males in the array.

let males = arrayOfPersons.filter(person => person.gender === "male");

console.log(males);

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let bornBefore1990 = arrayOfPersons.filter(person => person.birthDate.slice(person.birthDate.length -5) < 1990);

console.log(bornBefore1990);