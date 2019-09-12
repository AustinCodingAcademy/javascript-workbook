
// >> Use a do...while loop to console.log the numbers from 1 to 1000.
// let counter = 1
// do {
//   console.log(counter);
//   counter += 1;
// }while (counter <= 1000);

// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

// let person = {
//   firstName: "Jane",
//   lastName: "Doe",
//   birthDate: "Jan 5, 1925",
//   gender: "female"
// }

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

// function isOdd(year){
//   return year % 2 !== 0;
// }

// for(x in person){
//   let regEx = /\d{4}/;
//   let date = Number(person[x].match(regEx));
//   if (x === "birthDate" && isOdd(date)){
//     console.log(date);
//   } else if (x === "birthDate" && !isOdd(date)) {
//     console.log("Date is even.");
//   }
// }

// Create an arrayOfPersons that contains mulitiple objects. 
// You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in 
// your database.

let arrayOfPersons = [
  {
    firstName: "Gemma",
    lastName: "Galvan",
    birthDate: "Aug 31, 1994",
    gender: "female"},
  {
    firstName: "Rodolfo",
    lastName: "Galvan",
    birthDate: "Feb 15, 1997",
    gender: "male"},
  {
    firstName: "Edwin",
    lastName: "Torres",
    birthDate: "Feb 29, 1996",
    gender: "male"},
  {
    firstName: "Ashley",
    lastName: "Guevara",
    birthDate: "May 10, 1997",
    gender: "female"},
  {
    firstName: "Alan",
    lastName: "Turing",
    birthDate: "June 23, 1912",
    gender: "male"},
  {
    firstName: "Ada",
    lastName: "Lovelace",
    birthDate: "December 10, 1815",
    gender: "female"}
];

// let mapped = arrayOfPersons.map(x => {
//   console.log(`${x.firstName} ${x.lastName} is a ${x.gender} that was born in ${x.birthDate}.`);
//   console.log(``);
// });



// Use .filter() to filter the persons array and console.log only males in the array.

// let males = arrayOfPersons.filter(person => person.gender === "male");
// for (let i = 0; i < males.length; i++){
//   console.log(males[i].firstName);
// }


// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let regEx = /\d{4}/;
let oldBirthdays = arrayOfPersons.filter(persons => Number(persons.birthDate.match(regEx)) < 1990);

for (let i = 0; i < oldBirthdays.length; i++){
  console.log(oldBirthdays[i].firstName);
}