// Use a do...while loop to console.log the numbers from 1 to 1000.

let number = 0;
do {
  number += 1;
  console.log(number);
} while (number < 1001 -1);

// Create an object (an array with keys and values) called person with the following data:

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

for (let value of Object.values(person)) {
  console.log(person);
  break;
}

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for (let birthDate in person) {
  let lastNumber = birthDate[birthDate.length -1];
  if (lastNumber % 2 != 0) {
    console.log(person.birthDate + " is an odd year.");
    break;
  }
}

// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
  { 
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female", 
  },
  {
    firstName: "Jack",
    lastName: "Johnson",
    birthDate: "Jun 15, 1945",
    gender: "male", 
  },
  {
    firstName: "Jaclyn",
    lastName: "Jones",
    birthDate: "Jun 17, 1930",
    gender: "female",
  }
];

for (let value of Object.values(arrayOfPersons)) {
  console.log(arrayOfPersons);
  break;
};

// Use .map() to map over the arrayOfPersons and console.log() their information.
let info = arrayOfPersons.map(function(currentValue) {
  let information = [currentValue.firstName, currentValue.lastName, currentValue.birthDate, currentValue.gender];
  console.log(information);
})

// Use .filter() to filter the persons array and console.log only males in the array.

let males = arrayOfPersons.filter(function(currentValue) {
  let onlyMales = currentValue.gender;
  if (onlyMales == 'male') {
    console.log([currentValue.firstName, currentValue.lastName, currentValue.birthDate, currentValue.gender]);
  }
});

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let bornBefore = arrayOfPersons.filter(function(currentValue) {
  let bornDate = currentValue.birthDate.substring(1, 1);
  if (bornDate <= 1990) {
    console.log([currentValue.firstName, currentValue.lastName, currentValue.birthDate, currentValue.gender]);
  }
});