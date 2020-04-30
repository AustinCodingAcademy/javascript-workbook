//make a  lists of student
//each student should have a name, and a average grade

// let s1 = {
//   name: "Yousif",
//   avg: 85
// }

// let s2 = {
//   name: "Mike",
//   avg: 98
// }

// let s3 ={
//   name: "Bob",
//   avg: 90
// }

// let s4 = {
//   name: "Bridget",
//   avg:103
// }

// let students = [s1,s2,s3,s4]

// students.filter(function(element, index){
//   if (element.avg >= 90) {
//     return true;
//   } else {
//     return false;
//   }

// }).map((element, index) => {
//   return element.avg
// }).forEach((element, index) => {
//   console.log(element);
// });

// let firstA = students.find((element, index) => {
//   if (element.avg >= 90) {
//     return true;
//   } else {
//     return false;
//   }
// });

// let numbers = [3, 73, 21, 19, 4];

// let sum = numbers.reduce(function(prev, curr) {
//   return prev + curr;
// });

// console.log("the sum is ", sum);

'use strict'


let result = "";
let i = 0;
// .1 Use a do...while loop to console.log the numbers from 1 to 1000.
do {
  i = i + 1;
  result = result + i;
} while (i <= 100);

// .2 Create an object (an array with keys and values) called person with the following data:

 let person = {

  firstName: "Jane",
  lastName : "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
 }
// .3Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

 for (let x in person) {
  //console.log(`${person[x]}`);
}
//.4 Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
  {
    firstname: 'Chris',
    lastname: 'Trevino',
    gender: 'male',
    dob: 'October 10, 1995'
  },
  {
    firstname: 'Christina',
    lastname: 'Hamilton',
    gender: 'female',
    dob: 'January 05, 1979'
  },
  {
    firstname: 'John',
    lastname: 'Ginger',
    gender: 'male',
    dob: 'April 20, 1990'
  },
  {
    firstname: 'Lola',
    lastname: 'Moana',
    gender: 'female',
    dob: 'July 4, 1985'
  }
]


//.5 Use .map() to map over the arrayOfPersons and console.log() their information.
// didn't really understand if im not modifying anything?????
const map1 = arrayOfPersons.map(arrayOfPersons);
//console.log(map1);
// 6.Use .filter() to filter the persons array and console.log only males in the array.
//Wow I fudging go it.
const onlyMales = arrayOfPersons.filter(word => (word.gender === 'male'));
//console.log(onlyMales)
const onlyFemales = arrayOfPersons.filter(word => (word.gender === 'female'))
//console.log(onlyFemales);
//7.Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const bornBefore = arrayOfPersons.filter(word => word.dob < 'Jan 1, 1990' );
console.log(bornBefore);







