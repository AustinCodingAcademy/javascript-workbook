//display the current day and time
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth();
const yyyy = today.getFullYear();
Date(dd,mm,yyyy)

//convert a number to a string
var num = 15;
var n = num.toString();
console.log(num);

//string to the number
Number("5");

//takes in different datatypes and prints out what they are
console.log (typeof 42);
console.log (typeof true);

//adds 2 numbers together
const num1 = 5;
const num2 = 5;
const num3 = num1 + num2;
console.log(num3);

//runs only when 2 things are true
const num1 = 5;
const num2 = 10;
const num3 = 15;
if (num1 + num2 && num3 - num2) {
  console.log(true);
}

//runs only when 1 of 2 things are true
const num1 = 10;
const num2 = 5;
if (num1 > num2 || num1 < num2) {
  console.log(true);
}

//runs when both things are not true
const num1 = 10;
const num2 = 5;
if (num1 < num2 && num1 === num2) {
  console.log(true);
} 
