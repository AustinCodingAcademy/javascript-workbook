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
  if (argument1 === argument2){
    return true;
  } else {
    return false;
  }
}


// Problem 2:
// lessThanOrEqualTo(parameter1, parameter2) is an empty function
// return a boolean expression that is true when
// parameter1 is less than or equal to parameter2

function lessThanOrEqualTo() {
  if (parameter1 <= paramater2) {
    return true;
  } else {
    return false;
  }
}

// Problem 3:
// write a function named add(number1, number2)
// add will add two numbers and return the result
function addTwo(number1, number2) {
  return addTwo;
}

// Problem 4:
// write a function named addThree(number1, number2, number3)
// this function will add three numbers
// you must call your function add() in addThree()
function addThree(number1, number2, number3){
  console.log(addThree);

}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is a function? How do you define a function in Javascript?
//
 // A funtion is a set of statements to define an action however you have to call the function to perform the actions.
//
//
// What is a return value?
//
 // Return value is the output of the function.
//
//
// How do you define a named function?
//
// You use the word 'Function' then name the function then within parantheses define the paremeters of that function.
//
//
// What is a parameter? What is an argument? Is there a difference between the two?
//
 // Parameter is the variable of the within the parenthesis of a function and an argument is the actual value of
// those variable that is passed to the funtion.
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

function isDivisibleByThree(number) {
  if (number % 3 ===0){
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

function whichSpecies(character) {
  if (character === 'scooby'){
    return 'dog';
  }
  if (character === 'garfield') {
    return 'cat';
  }
  if (character === 'nemo') {
    return 'fish';
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
function testNumber (number) {
  if (number % 4 === 0) {
    return 'divisible by 4';
  }
  if (number % 2 === 0) {
    return 'divisible by 2';
  }
  if (number % 3 === 0){
    return 'divisible by 3';
  }
  if (number % 5 === 0){
    return 'divisible by 5';
  } else {
    return false;
  }
}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// In your own words, explain what conditionals do.
//
// A conditional is a statement that relies on the information given to it in an "if" "else" form. It does different things under different conditions.
//
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
