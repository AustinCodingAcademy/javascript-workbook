'use strict'

console.log("my main js ");

// program to display date and time.
let myDate = new Date();
// get the span from the page/document
let mySpan = document.getElementById("theTime");
// change inner text of the span
mySpan.innerText = myDate.toDateString() + " | " + myDate.getHours() + ":" + myDate.getMinutes();


// progam to add two numnbers
let mySum = 1 + 5;
let myParagraph = document.getElementById("addition");
myParagraph.innerText = mySum;

// program to convert a number to a string.
let myNumber = 24;
let myNewString = myNumber.toString();
let anotherParagraph = document.getElementById("number-to-string");
let myStringType = typeof(myNewString);
anotherParagraph.innerText = myNewString + " - " + myStringType;


// progam to convert a string to a number.
let myString = "11";
let myNewNum = parseInt(myString);
let lastParagraph = document.getElementById("string-to-number");
let myNumType = typeof(myNewNum);
lastParagraph.innerText = myNewNum +  " - " + myNumType;








