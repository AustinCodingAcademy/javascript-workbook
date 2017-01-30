'use strict';

var assert = require('assert');

// ****
// Functions
// ****

// Problem 0:
// alwaysFalse() is a function that always
// returns the boolean value false

function alwaysFalse() {
	return false;
}

// You can also define functions this way,
// by assigning function definitions to variable
var alwaysTrue = function () {
	return true;
};

// Problem 1:
// equals(argument1, argument2) is an empty function
// return a boolean expression that is true when
// argument1 is equal to argument2

function equals(argument1, argument2) {
	if(argument1 === argument2)
		return true;
	return false;
}

// Problem 2:
// lessThanOrEqualTo(parameter1, parameter2) is an empty function
// return a boolean expression that is true when
// parameter1 is less than or equal to parameter2

function lessThanOrEqualTo(parameter1, parameter2) {
	return (parameter1 <= parameter2) ? true : false;
}

// Problem 3:
// write a function named add(number1, number2)
// add will add two numbers and return the result
function add(number1, number2) {
	return (number1 + number2);
}

// Problem 4:
// write a function named addThree(number1, number2, number3)
// this function will add three numbers
// you must call your function add() in addThree()
function addThree(number1, number2, number3) {
	var firstSum = add(number1, number2);
	return add(firstSum, number3);
}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is a function? How do you define a function in Javascript?
//
// Your Answer Goes Here:
// Functions help break large problems into smaller, solvable problems.
// Functions can be declared in two ways - on its own, or as the result of a variable.
// function myCustomName(parameter1, parameter2) {    // on its own
//    //=> Do something with the parameters in here
// }
// var anotherFunction = function (parameter3, parameter4) {  // the result of a variable
//    //=> Do something with the parameters in here
// };
// 
// What is a return value?
//
// Your Answer Goes Here:
// The value that is sent back to the calling function.
//
// How do you define a named function?
//
// Your Answer Goes Here:
// When defining a variable that is defined by a function, give the function a name.
// var foo = function foo() {
			//=> Do something with the parameters in here
// };
//
// What is a parameter? What is an argument? Is there a difference between the two?
//
// Your Answer Goes Here:
// A parameter is a value that the defined function uses.
// An argument is a value that the declared function uses.
// There is a difference in the use of the word, but they describe the same part of the function.
// 'Parameter' is only used in the definition of the function. 'Argument' is only used when the function is called.
// For example, 'thisFunctionIsCalled("argument that the function takes");' has a string argument.
// 'function definedFunction(parameter) {}' is the definition of the function, so a parameter is used.
// 
// ****


// ****
// Modulo % Operator
// ****

// Problem 5:
// isEven(number) is a function that
// returns true if number is even (divisible by 2),
// else returns false
// complete isEven() by returning a boolean expression

function isEven(number) {
	return (number % 2 == 0) ? true : false;
}

// Problem 6:
// isDivisibleByThree(number) is a function that
// returns true if number is divisible by 3,
// else returns false
// complete isDivisibleByThree() by returning a boolean expression

function isDivisibleByThree(number) {
	return (number % 3 == 0) ? true : false;
}

// ****
// Conditionals
// ****


// Problem 7: *
// whichSpecies(character) is a function that
// should return "dog" when character is 'scooby'
// should return "cat" when character is 'garfield'
// should return "fish" when character is 'nemo'
// should return false if character is anything else


function whichSpecies(character) {
	var animal = "";
	switch(character) {
		case 'scooby':
			animal = "dog";
			break;
		case 'garfield':
			animal = "cat";
			break;
		case 'nemo':
			animal = "fish";
			break;
		default:
			return false;
		}
	return animal;
}

// Problem 8: *
// write a function named testNumber(number) with the following requirements.
// The function should:
// return the string "divisible by 4" when number % 4 === 0
// return the string "divisible by 2" when number % 2 === 0
// return the string "divisible by 3" when number % 3 === 0
// return the string "divisible by 5" when number % 5 === 0
function testNumber(number) {
	switch(true) {
		case (number % 4 === 0):
			return "divisible by 4";
		case (number % 2 === 0):
			return "divisible by 2";    
		case (number % 3 === 0):
			return "divisible by 3";
		case (number % 5 === 0):
			return "divisible by 5";    
	}
}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// In your own words, explain what conditionals do.
//
// Your Answer Goes Here:
// A conditional only executes when an expression is evaluated as true
//
// ****

// ****
// Tests
// ****

describe('Lesson 2 Homework', function () {

	describe('Functions', function () {
		describe('Problem 0: alwaysFalse()', function () {
			it('should return false', function () {
				assert.equal(alwaysFalse(), false);
			});
		});

		describe('Problem 0: alwaysTrue()', function () {
			it('should return true', function () {
				assert.equal(alwaysTrue(), true);
			});
		});

		describe('Problem 1: equals()', function () {
			it('should return true when argument 1 equals argument 2, else return false', function () {
				assert.equal(equals(3, 3), true);
				assert.equal(equals(3, null), false);
				assert.equal(equals('bob', ''), false);
				assert.equal(equals('bob', 'bob'), true);
			});
		});

		describe('Problem 2: lessThanOrEqualTo()', function () {
			it('should return true when parameter 1 is less than or equal to parameter 2, else return false', function () {
				assert.equal(lessThanOrEqualTo(3, 3), true);
				assert.equal(lessThanOrEqualTo(3, 4), true);
				assert.equal(lessThanOrEqualTo(4, 1), false);
			});
		});

		describe('Problem 3: add(number1, number2)', function () {
			it('should be defined and of type function', function () {
				assert(!(typeof add === 'undefined'));
				assert(typeof add === 'function');
			});

			it('should add two numbers and return the result', function () {
				assert.equal(add(3, 3), 6);
				assert.equal(add(3, 7), 10);
			});
		});

		describe('Problem 4: addThree(number1, number2, number3)', function () {
			it('should be defined and of type function', function () {
				assert(!(typeof addThree === 'undefined'));
				assert(typeof addThree === 'function');
			});

			it('should add three numbers and return the result', function () {
				assert.equal(addThree(3, 3, 3), 9);
			});
		});
	});

	describe('Modulo % operator', function () {
		describe('Problem 5: isEven(number)', function () {
			it('should return true if number is even, else false', function () {
				assert.equal(isEven(4), true);
				assert.equal(isEven(3), false);
			});
		});

		describe('Problem 6: isDivisibleByThree(number)', function () {
			it('should return true if number is divisible by 3, else false', function () {
				assert.equal(isDivisibleByThree(3), true);
				assert.equal(isDivisibleByThree(4), false);
			});
		});
	});

	describe('Conditionals', function() {
		describe('Problem 7: whichSpecies(character)', function () {
			it('should return "dog" when character is scooby', function () {
				assert.equal(whichSpecies('scooby'), 'dog');
			});
			it('should return "cat" when character is garfield', function () {
				assert.equal(whichSpecies('garfield'), 'cat');
			});
			it('should return "fish" when character is nemo', function () {
				assert.equal(whichSpecies('nemo'), 'fish');
			});
			it('should return false if character is anything else', function () {
				assert.equal(whichSpecies('stitch'), false);
			});
		});

		describe('Problem 8: testNumber(number)', function () {
			it('should be defined and of type function', function () {
				assert(!(typeof testNumber === 'undefined'));
				assert(typeof testNumber === 'function');
			});

			it('should return "divisible by 4" when number is divisible by 4', function () {
				assert.equal(testNumber(4), 'divisible by 4');
			});
			it('should return "divisible by 2" when number is divisible by 2', function () {
				assert.equal(testNumber(2), 'divisible by 2');
			});
			it('should return "divisible by 3" when number is divisible by 3', function () {
				assert.equal(testNumber(3), 'divisible by 3');
			});
			it('should return "divisible by 5" when number is divisible by 5', function () {
				assert.equal(testNumber(5), 'divisible by 5');
			});
		});
	});

});
