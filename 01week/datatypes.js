'use strict'

// logs current date

let displayDate = function() {
	let date = new Date();
	console.log(date);
}

displayDate();

// convert number to string

let convertNumber = function() {
	let newNumber = 5;
	toString(newNumber);
	console.log(newNumber);
}

convertNumber();

// Convert string to number

let convertString = function(x) {
	parseInt(x);
	console.log(x);
}

convertString('6');

// display datatype of variable

let dataTypes = function(x) {
	let type = typeof(x);
	console.log(type);
}

dataTypes('true');

// adding two integers

