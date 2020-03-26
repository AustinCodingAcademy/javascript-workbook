'use strict'

console.log("my main js ");

// program to display date and time.
let myDate = new Date();
// get the span from the page/document
let mySpan = document.getElementById("theTime");
// change inner text of the span
mySpan.innerText = myDate.toString();


// progam to add two numnbers
let mySum = 1 + 5;
let myParagraph = document.getElementById("addition");
myParagraph.innerText = mySum;

// program to convert a number to a string.
let myNumber = 24;
let myNewString = myNumber.toString();
let anotherParagraph = document.getElementById("number-to-string");
anotherParagraph.innerText = myNewString;
let myStringType = typeof(myNewString);
let variablePar = document.getElementById("var-type");
variablePar.innerText = myStringType;

// progam to convert a string to a number.
let myString = "11";
let myNewNum = parseInt(myString);
let lastParagraph = document.getElementById("string-to-number");
lastParagraph.innerText = myNewNum;
let myNumType = typeof(myNewNum);
let myNewType = document.getElementById("new-var-type");
myNewType.innerText = myNumType;







