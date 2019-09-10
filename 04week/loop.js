// 1. Use a do...while loop to console.log numbers from 1 to 1000.
let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 1000);

console.log(result);

console.log("==================================================");

// 2. Create an object (an array with keys and values) called person with the following data:

person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// RegEx for the Year (YYYY)
let regexYear = /\d{4,}/g;

// For Loop for the
for (key in person) {
  if (person.birthDate[regexYear] % 2 !== 1) {
    console.log(`${person.birthDate}`);
  }
  break;
}

console.log("==================================================");

arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },

  {
    firstName: "Sara",
    lastName: "Wolf",
    birthDate: "Mar 3, 1932",
    gender: "female"
  },

  {
    firstName: "Reid",
    lastName: "Scott",
    birthDate: "Jan 5, 1941",
    gender: "male"
  }
];

console.log(arrayOfPersons);
