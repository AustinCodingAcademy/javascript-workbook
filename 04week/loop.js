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

// 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// RegEx for the Year (YYYY)
let regexYear = /\d{4,}/g;
let str = person.birthDate.match(regexYear);
let year = parseInt(str);
console.log(year);
// console.log(person.birthDate[regexYear]);

// For Loop for the
for (key in person) {
  // console.log('RegEx Type: ', Object.prototype.toString.call(regexYear));
  if (year % 2 !== 0) {
    console.log(`${person.birthDate}`);
  }
  break;
}

console.log("==================================================");

// 4. Create an arrayOfPersons that contains mulitiple objects.
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
    birthDate: "Mar 3, 1992",
    gender: "female"
  },

  {
    firstName: "Reid",
    lastName: "Scott",
    birthDate: "Jan 5, 1941",
    gender: "male"
  }
];

// 5. Use .map() to map over the arrayOfPersons and console.log() their information.
const arrayOfPersons2 = arrayOfPersons.map(person => person);
console.log(arrayOfPersons);

console.log("==================================================");

console.log(arrayOfPersons2);

console.log("==================================================");

// 6. Use .filter() to filter the persons array and console.log only males in the array.
const malesArr = arrayOfPersons2.filter(men => men.gender === "male");
console.log(malesArr);

console.log("==================================================");

// 7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldPeople = arrayOfPersons2.filter(oldest => {
  let oldStr = oldest.birthDate.match(regexYear);
  let birthYear = parseInt(oldStr);
  return birthYear < 1990;
});
console.log(oldPeople);
