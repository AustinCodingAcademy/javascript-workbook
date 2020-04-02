'Use Strict'

// Write a JavaScript program to display the current day and time

let now = new Date();
console.log("the current date and time is: " + now);

let myButton = document.getElementById("theTime");
myButton.addEventListener('click', function(){
 myButton.innerText = now.toString();
});

// Write a JavaScript program to convert a number to a string.

const theNumber = 5;
const theString = theNumber.toString();

console.log(theNumber.toString());
console.log(theNumber);

// Write a JavaScript program to convert a string to the number.

const theOtherString = "4.5";
const theOtherNumber = parseInt(theOtherString, 10);
console.log(theOtherNumber);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
const myBool = true;
console.log(typeof myBool);
// Null
const myNull = null;
console.log(typeof myNull);
// Undefined
const myUndefined = undefined;
console.log(typeof myUndefined);
// Number
const myNumber = 3;
console.log(typeof myNumber);
// NaNconst
const myNaN = NaN;
console.log(typeof myNaN);

// String
const myString = 'Joe';
console.log(typeof myString);

// Write a JavaScript program that adds 2 numbers together.
const mySum = 2+3;
console.log(mySum);

let displaySum = document.getElementById("Sum");
displaySum.innerText = mySum.toString();
// Write a JavaScript program that runs only when 2 things are true.
const num1 = true;
const num2 = true;

if(num1&&num2){
  console.log('both are true');
};
// Write a JavaScript program that runs when 1 of 2 things are true.
const num3 = true;
const num4 = false;

if(num3||num4){
  console.log('one is true');
};
// Write a JavaScript program that runs when both things are not true.
const num5 = false;
const num6 = false;

if(!num5&&!num6){
  console.log('both are false');
};