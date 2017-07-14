'use strict';

// Write a JavaScript program to display the current day and time.

function currentDateTime(){
  console.log(new Date());
}
currentDateTime();


// Write a JavaScript program to convert a number to a string.

function numberToString(num){
  console.log(num.toString());
}
numberToString(10);



// Write a JavaScript program to convert a string to the number.

function stringToNumber(number){
  console.log(parseInt(number));
}
stringToNumber(224);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

function ReturnType(someData){
  console.log(typeof someData);
}
ReturnType('Hello');
ReturnType(10);
ReturnType();
ReturnType(true);
ReturnType(0/0);


// Write a JavaScript program that adds 2 numbers together.

function addingStuff(dig1, dig2){
  console.log( dig1 + dig2 );
}
addingStuff(4, 7);

// Write a JavaScript program that runs only when 2 things are true.
function trueTings (x, y){
  if(x === true && y === true) {
    console.log("It's True!");
  }
}
trueTings(true,true);


// Write a JavaScript program that runs when 1 of 2 things are true.

function oneTingTrue (z, p) {
  if (p || z === true) {
    console.log("There can only be one");
  }
}
oneTingTrue(true, true);

// Write a JavaScript program that runs when both things are not true.

function noTrueTings (w, r) {
  if (w != 2 && r != 13){
    console.log("Yeah right! Neither are true");
  }
}
noTrueTings(true, true);
