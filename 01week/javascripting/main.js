'use strict'

console.log("Inside my main.js file");

let myDate = new Date ();

console.log("the current date is", myDate);

//get the span from the page/document
let mySpan = document.getElementById('theTime');

//change what theinner text of the span says
mySpan.innerText = myDate.toString();

// //JS program to convert a number to a string
const theNumber = 5;
const theString = theNumber.toString();

console.log("The type of theString variable is", (typeof theString));
console.log("The type of theNumber variable is", (typeof theNumber));
console.log("The string is", theNumber.toString());
console.log("the number is ", theNumber);


// //write a JS program to convert a string to a number
const theOtherString = "11";
const theOtherNumber = parseInt(theOtherString, 10);
console.log("The otherString type is ", (typeof theOtherString));
console.log("The otherString type is ", (typeof theOtherNumber));


//Write a JavaScript program that takes in different datatypes and prints out whether they are a 
// Boolean
// Null
// Undefined
// Number
// NaN
// String

console.log('typeof false', typeof false);
console.log('typeof null', typeof null);
console.log('typeof something', typeof something);
console.log('typeof 10', typeof 10);
console.log('typeof NaN', typeof NaN);
console.log('typeof "JS is hard!"', typeof "JS is hard!");


// Write a JavaScript program that adds 2 numbers together.
function add() {
  var x = Number(document.getElementById('x').value);
  var y = Number(document.getElementById('y').value);

  document.getElementById('result').innerHTML = x + y;
  return false;
}

document.getElementById('go').addEventListener('click', add);

//Write a JavaScript program that runs only when 2 things are true.

Function areStrings(thing1, thing2) {

  Console.log(“thing1 =”, thing1);
  Console.log(“thing2 =”, thing2);

  Let type1 = typeof thing1;
  Let type2 = typeof thing2;

  If(type1 == ‘string’ && type2 ==’string’) {
    Console.log(“they are strings”);
  } else {
    Console.log(“they are not all strings);
  }
}

areStrings(“Mark”, “Bob”);
areStrings(5, ”Matt”);



//Write a JavaScript program that runs when 1 of 2 things are true.

Function areStrings(thing1, thing2) {

  Console.log(“thing1 =”, thing1);
  Console.log(“thing2 =”, thing2);

  Let type1 = typeof thing1;
  Let type2 = typeof thing2;

  If(type1 == ‘string’ && type2 !==’string’) {
    Console.log(“BINGO! Only one is a string.”);
  } else {
    Console.log(“Sorry, something is off.");
	}
}

areStrings(“Mark”, “Bob”);
areStrings(5, ”Matt”);

// Write a JavaScript program that runs when both things are not true.

Function areStrings(thing1, thing2) {

  Console.log(“thing1 =”, thing1);
  Console.log(“thing2 =”, thing2);

  Let type1 = typeof thing1;
  Let type2 = typeof thing2;

  If(type1 !== ‘string’ && type2 !==’string’) {
    Console.log(“Neither are strings”);
  }

  areStrings(“Mark”, “Bob”);
  areStrings(5, ”Matt”);

//only finish questions 4-8 as homework from step 1
// the DOM the sum of 5 and 6 equals 11 - let javascript fill in answer scaffolding provided in index.html
//just do 3 or 4 not all of them from the DOM assignment

//the following comments are in response to an on click question from Erica 

// let mySpan = document.getElementById("theTime");
// mySpan.addEventListener('click', function(){
//   mySpan.innerText = myDate-toString();

// })