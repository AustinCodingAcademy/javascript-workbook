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
var alwaysTrue = function() {
    return true;
}

// Problem 1:
// equals(argument1, argument2) is an empty function
// return a boolean expression that is true when
// argument1 is equal to argument2
var argument = 1;
var argument = 2;

function equals(argument1, argument2) {
    if (argument1 === argument2) {
        return true;
    } else {
        return false;
    }
}

// Problem 2:
// lessThanOrEqualTo(parameter1, parameter2) is an empty function
// return a boolean expression that is true when
// parameter1 is less than or equal to parameter2
var parameter1 = 1;
var parameter2 = 2;

function lessThanOrEqualTo(parameter1, parameter2) {
    if (parameter1 <= parameter2) {
        return true;
    } else {
        return false;
    }
}

// Problem 3:
// write a function named add(number1, number2)
// add will add two numbers and return the result
function add(number1, number2) {

    return number1 + number2;
}

var number3 = add(2, 4);

console.log(number3);
// Problem 4:
// write a function named addThree(number1, number2, number3)
// this function will add three numbers
// you must call your function add() in addThree()
function add(number1, number2) {

    return number1 + number2;
}

function addThree(number1, number2, number3) {

    return add (number3, add(number1, number2));
}

var addFive = add(1, 2) + addThree(3, 4, 5);

addFive;
// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is a function? How do you define a function in Javascript?
//
// Your Answer Goes Here:
//In Javascript a function is a set of statements that performs a task or calculates a value.
//Functions are first-class objects. Like other objects, functions can have properties and methods.
// Functions can be called(invoked). This distinguishes them from other objects.
//To define a function in Javascript we need the following:
// 1. The keyword function
// 2. The name of the function
// 3. A list of arguments for the function, seperated by commas and enclosed in parantheses.
// 4. The statement or statements (code to be executed) enclosed with curly brackets.
// What is a return value?
//
// Your Answer Goes Here:
//In Javascript a return statement will stop the execution of a function and return the value from that // back to the code.
// A return value is the result of executed code in a function.
//
// How do you define a named function?
//
// Your Answer Goes Here:
//We can define a function in Javascript with the following code.
//
//        function myFirstFunction(parameter1, parameter2)
//
// What is a parameter? What is an argument? Is there a difference between the two?
//
// Your Answer Goes Here:
//Function parameters are the names listed in the parentheses in a function definition.
// Function arguments are the values given to those parameters.
// Ex.1 function myFirstFunction(num1, num2) - num1 and num2 are parameters
// Ex.2 function myFirstFunction(5, 12) - 5 and 12 are arguments.
// ****


// ****
// Modulo % Operator
// ****

// Problem 5:
// isEven(number) is a function that
// returns true if number is even (divisible by 2),
// else returns false
// complete isEven() by returning a boolean expression
var number = 8

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// Problem 6:
// isDivisibleByThree(number) is a function that
// returns true if number is divisible by 3,
// else returns false
// complete isDivisibleByThree() by returning a boolean expression
var number = 9;

function isDivisibleByThree(number) {
    if (number % 3 === 0) {
        return true;
    } else {
        return false;
    }
}
// ****
// Conditionals
// ****


// Problem 7:
// whichSpecies(character) is a function that
// should return "dog" when character is 'scooby'
// should return "cat" when character is 'garfield'
// should return "fish" when character is 'nemo'
// should return false if character is anything else
var character = 'scooby';

function whichSpecies(character) {
    if (character === 'scooby') {
        return ('dog');
    } else if (character === 'garfield') {
        return ('cat');
    } else if (character === 'nemo') {
        return ('fish');
    } else {
        return false;
    }
}

// Problem 8:
// write a function named testNumber(number) with the following requirements.
// The function should:
// return the string "divisible by 4" when number % 4 === 0
// return the string "divisible by 2" when number % 2 === 0
// return the string "divisible by 3" when number % 3 === 0
// return the string "divisible by 5" when number % 5 === 0
var number = 8;
function testNumber(number){
     if (number % 4 === 0){
         return ('divisible by 4');
     }
     else if (number % 2 === 0){
         return ('divisible by 2');
     }
     else if (number % 3 === 0){
         return ('divisible by 3');
     }
     else if (number % 5 === 0){
         return ('divisible by 5');
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
//Conditional statements are Javascript statements that instruct code to perform a certain action (usually return
// value back to the function or execute the next line of code) based on the Boolean (true, false) return vale of another statement.
//
// ****

// ****
// Tests
// ****

describe('Lesson 2 Homework', function() {

    describe('Functions', function() {
        describe('Problem 0: alwaysFalse()', function() {
            it('should return false', function() {
                assert.equal(alwaysFalse(), false);
            });
        });

        describe('Problem 0: alwaysTrue()', function() {
            it('should return true', function() {
                assert.equal(alwaysTrue(), true);
            });
        });

        describe('Problem 1: equals()', function() {
            it('should return true when argument 1 equals argument 2, else return false', function() {
                assert.equal(equals(3, 3), true);
                assert.equal(equals(3, null), false);
                assert.equal(equals('bob', ''), false);
                assert.equal(equals('bob', 'bob'), true);
            });
        });

        describe('Problem 2: lessThanOrEqualTo()', function() {
            it('should return true when parameter 1 is less than or equal to parameter 2, else return false', function() {
                assert.equal(lessThanOrEqualTo(3, 3), true);
                assert.equal(lessThanOrEqualTo(3, 4), true);
                assert.equal(lessThanOrEqualTo(4, 1), false);
            });
        });

        describe('Problem 3: add(number1, number2)', function() {
            it('should be defined and of type function', function() {
                assert(!(typeof add === 'undefined'));
                assert(typeof add === 'function');
            });

            it('should add two numbers and return the result', function() {
                assert.equal(add(3, 3), 6);
                assert.equal(add(3, 7), 10);
            });
        });

        describe('Problem 4: addThree(number1, number2, number3)', function() {
            it('should be defined and of type function', function() {
                assert(!(typeof addThree === 'undefined'));
                assert(typeof addThree === 'function');
            });

            it('should add three numbers and return the result', function() {
                assert.equal(addThree(3, 3, 3), 9);
            });
        });
    });

    describe('Modulo % operator', function() {
        describe('Problem 5: isEven(number)', function() {
            it('should return true if number is even, else false', function() {
                assert.equal(isEven(4), true);
                assert.equal(isEven(3), false);
            });
        });

        describe('Problem 6: isDivisibleByThree(number)', function() {
            it('should return true if number is divisible by 3, else false', function() {
                assert.equal(isDivisibleByThree(3), true);
                assert.equal(isDivisibleByThree(4), false);
            });
        });
    });

    describe('Conditionals', function() {
        describe('Problem 7: whichSpecies(character)', function() {
            it('should return "dog" when character is scooby', function() {
                assert.equal(whichSpecies('scooby'), 'dog');
            });
            it('should return "cat" when character is garfield', function() {
                assert.equal(whichSpecies('garfield'), 'cat');
            });
            it('should return "fish" when character is nemo', function() {
                assert.equal(whichSpecies('nemo'), 'fish');
            });
            it('should return false if character is anything else', function() {
                assert.equal(whichSpecies('stitch'), false);
            });
        });

        describe('Problem 8: testNumber(number)', function() {
            it('should be defined and of type function', function() {
                assert(!(typeof testNumber === 'undefined'));
                assert(typeof testNumber === 'function');
            });

            it('should return "divisible by 4" when number is divisible by 4', function() {
                assert.equal(testNumber(4), 'divisible by 4');
            });
            it('should return "divisible by 2" when number is divisible by 2', function() {
                assert.equal(testNumber(2), 'divisible by 2');
            });
            it('should return "divisible by 3" when number is divisible by 3', function() {
                assert.equal(testNumber(3), 'divisible by 3');
            });
            it('should return "divisible by 5" when number is divisible by 5', function() {
                assert.equal(testNumber(5), 'divisible by 5');
            });
        });
    });

});
