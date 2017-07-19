'use strict'


// Write a JavaScript program to display the current day and time.
function CurrentDateTime() {
<<<<<<< HEAD
  console.log(new Date());
=======
   return new Date();
>>>>>>> 9f433fbac03c6dacd3e9ef66f5ce1a0d5f69bf02
}
CurrentDateTime();



// Write a JavaScript program to convert a number to a string.
function NumberToString(num) {
  console.log(num.toString());
}
NumberToString(37);



// Write a JavaScript program to convert a string to the number.
function StringToNumber(nummer) {
  console.log(parseInt(nummer));
}
StringToNumber(23);



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
function ReturnType(someData) {
  console.log(typeof someData);
}
ReturnType(9);



// Write a JavaScript program that adds 2 numbers together.
function Addem(num1, num2) {
  console.log(num1 + num2);
}
Addem(4,5);



// Write a JavaScript program that runs only when 2 things are true.
function TwoTrue(x,y) {
  if (x && y) {
    console.log("Yeah! Both things are true!");
  }
}
TwoTrue(true,true);



// Write a JavaScript program that runs when 1 of 2 things are true.
function OnlyOneisTrue(z,a) {
  if (z === true || a === true) {
    console.log("Booyah! Only one thing is true!");
  }
}
OnlyOneisTrue(true,false);



// Write a JavaScript program that runs when both things are not true.
function NoneTrue(b,c) {
  if (b !== true && c !== true) {
    console.log("Neither statement evaluates to true!");
  }
}
NoneTrue(false, false);
