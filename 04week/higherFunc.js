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

do {
  i = i + 1;
  result = result + i;
} while (i <= 100);


 let person = {

  firstName: "Jane",
  lastName : "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
 }

 for (let x in person) {
  console.log(`${person[x]}`);
}

