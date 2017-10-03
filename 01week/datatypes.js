'use strict'

// Write a JavaScript function to display the current day and time.
let displayDate = function(){
	let date = new Date();
	console.log(date);
}

displayDate(); // prints the date

// Write a JavaScript function to convert a number to a string.
let convertNumbertoString = function() {
	let num = 15;
	let n = num.toString();
	console.log(typeof n);
}

convertNumbertoString(); // string

// Write a JavaScript function to convert a string to the number. 
let convertStringtoNumber = function() {
	let hello = "Hello world";
	let n = Number(hello);
	console.log(typeof n);
}

convertStringtoNumber(); // number

// Write a JavaScript function that takes in different datatypes and prints out whether they are a:
function datatype(x) {
	console.log(typeof x);
}

datatype(true); // boolean
datatype(null); // null
datatype(undefined); // undefined
datatype(15); // number
datatype(NaN); // nan
datatype("hello world"); // string


// Write a JavaScript function that adds 2 numbers together.
let addNumbers = function(){
	let a = 1;
	let b = 2; 
	let c = a + b;
	console.log(c);
}

addNumbers(); // 3

// Write a JavaScript function that runs only when 2 things are true.
function goodHotdog(foodType, numberRating){
	if (foodType === "hotdog" && numberRating > 5){
		console.log("Delicious hotdog");
	} else {
		console.log("Not delicious hotdog");
	}
}

goodHotdog("hotdog", 7); // Delicious hotdog
goodHotdog("hotdog", 2); // Not delicious hotdog
goodHotdog("hamburger", 7); // Not delicious hotdog
goodHotdog("hamburger", 2); // Not delicious hotdog

// Write a JavaScript function that runs when 1 of 2 things are true.
function Hotdog(foodType){
	if (foodType === "hotdog" || foodType === "hot dog"){
		console.log("Hotdog");
	} else {
		console.log("Not a hotdog");
	}
}

Hotdog("hotdog"); // hotdog
Hotdog("hot dog"); // hotdog
Hotdog("hamburger"); // Not a hotdog

// Write a JavaScript function that runs when both things are not true.
function bothFalse (x, y){
	if (!(x || y)){
		console.log("Both are false");
	} else {
		console.log("Could be true");
	}
}

bothFalse(0, 0); // both are false
bothFalse(false, false); // both are false
bothFalse(true, true); // could be true