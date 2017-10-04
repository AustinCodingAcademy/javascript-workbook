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

let dataTypes = function(y) {
	let type = typeof(y);
	console.log(type);
}

dataTypes('true');

// adding two integers

let calculator = function(a, b){ 
	let sum = a + b;
	console.log(sum);
}
calculator(2, 6);


// run if both things are true


let twoTruths = function(c,d){

	if ( c > 0 && d > 0 ) {
		console.log('both true');
	} else {
		console.log('incorrect');
	}
}

twoTruths(3, 6);

// run if one of two things are true

let oneTruth = function(e,f){

	if ( e > 0 || f > 0 ) {
		console.log('one is true');
	} else {
		console.log('incorrect');
	}
}

oneTruth(3, -6);

// run if both things are false

let twoFalse = function(c,d){

	if ( c < 0 && d < 0 ) {
		console.log('incorrect');
	} else {
		console.log('both false');
	}
}

twoFalse(3, 6);









