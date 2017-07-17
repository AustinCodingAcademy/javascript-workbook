'use strict';

// This is test #1 - return the current date
function currentDate() {
  return Date();
}

console.log('Test 1');
console.log(currentDate());
console.log('');

// Test #2 - convert number to string.
function numberToString (theNumber) {
  if (typeof theNumber === 'number') {
    return theNumber.toString();
  } else {
    return 'Please pass a number';
  }
}

console.log('Test 2');
console.log(numberToString(28));       // positive test
console.log(numberToString('Hello'));  // negative test
console.log('');


// Test #3 - convert string to a number.
function stringToNumber (theString) {
  return parseInt(theString);
}

console.log('Test 3');
console.log(stringToNumber('17'));        // positive test
console.log(stringToNumber('84 apples')); // positive test
console.log(stringToNumber('apple 24'));  // negative test
console.log('');


// Test #4 - display datatypes
function displayDataTypes(theArg, runParseInt = false) {
  if (runParseInt) {
    return parseInt(theArg);
  } else if (theArg === '') {
    return null;
  } else {
    return typeof theArg;
  }
}

console.log('Test 4');
console.log(displayDataTypes(false));                   // boolean
console.log(displayDataTypes(''));                      // null
let myUndefined;
console.log(displayDataTypes(myUndefined));             // undefined
console.log(displayDataTypes(42));                      // number
console.log(displayDataTypes('I am a string', true));   // NaN
console.log(displayDataTypes('I am a string'));         // string
console.log('');


// Test #5 - Add two numbers
function add(number1, number2) {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    return number1 + number2;
  } else {
    return 'Please try again and provide two numbers'
  }
}

console.log('Test 5');
console.log(add(28, 34));    // positive test
console.log(add('4', '8'));  // negative test
console.log('');


// test #6 - tests if 2 things are true
function twoThingsTrue(expr1, expr2) {
  if (expr1 && expr2) {
    return 'TWO THINGS ARE TRUE: Executing code inside conditional statement';
  }
  return 'Nothing happened';
}

console.log('Test 6');
console.log(twoThingsTrue(5<6, 7<8));  // positive test
console.log(twoThingsTrue(5<6, 7>8));  // negative test
console.log('');

// test #7 - tests if at least one thing is true
function oneThingTrue(expr1, expr2) {
  if (expr1 || expr2) {
    return 'AT LEAST ONE THING IS TRUE: Executing code inside conditional statement';
  }
  return 'Nothing happened';
}

console.log('Test 7');
console.log(oneThingTrue(5<6, 7>8));  // positive test
console.log(oneThingTrue(5>6, 7>8));  // negative test

console.log('');


// test #8 - tests if neither thing is true
function neitherThingTrue(expr1, expr2) {
  if (!expr1 && !expr2) {
    return 'NEITHER THING IS TRUE: Executing code inside conditional statement';
  }
  return 'Nothing happened';
}

console.log('Test 8');
console.log(neitherThingTrue(5>6, 7>8));  // positive test
console.log(neitherThingTrue(5<6, 7>8));  // negative test
