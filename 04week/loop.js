// Complete each of the following exercises.
// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
function doWhile(i) {
  do {
    console.log(i++);
  } while (i < 1000);
}
doWhile(1);

// 2. Create an object (an array with keys and values) called person with the following data:
function myFunction() {
  let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  };
  let personBirthDate = person.birthDate.substring(7, 11); // Extract year from birth date
  console.log(isNaN(personBirthDate)); // check if number is a number
  // 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
  for (let {} in person) {
    if (personBirthDate % 2 !== 0) {
      console.log(personBirthDate);
    }
  }
}
myFunction();

const colors = ["orange", "red", "blue", "yellow", "green", "purple"];

const tieDyes = colors.map(color => {
  return `tieDyed-${color}`;
});

console.log(tieDyes);
// 4. Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times.
// Feel free to change the values to reflect multiple people you might have in your database.
const arrayOfPersons = {
  firstName: ["Sarad", "Preeza", "Jane"],
  lastName: ["Rajbhandari", "Shrestha", "Doe"],
  birthDate: ["Jan 2, 1930", "Jan 1, 1935", "Dec 21, 1992"],
  gender: ["male", "female", "male"]
};
// 5. Use .map() to map over the arrayOfPersons and console.log() their information.
// get all first names and print them
const fname = arrayOfPersons.firstName.map(personFirstName => {
  return `First Name-${personFirstName}`;
});
console.log(fname);

// get all last names and print them
const lname = arrayOfPersons.lastName.map(personLastName => {
  return `Last Name-${personLastName}`;
});
console.log(lname);

// 6. Use .filter() to filter the persons array and console.log only males in the array.
const malesOnly = arrayOfPersons.gender.filter(male => {
  return male.length <= 4;
});
console.log(malesOnly);

// 7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const personBirthday = arrayOfPersons.birthDate.filter((dob) => {
    return dob.length < "Jan 1, 1990";
})
console.log(personBirthday);
