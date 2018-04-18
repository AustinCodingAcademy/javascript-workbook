
// #1 use the Date() method which returns day and time 

function theDate() {
  return Date();
}


/* #2 - create a function with one variable (a number) that is returns the number converted to a string using .toString(); */

function convertToString(number) {
  return number.toString();
}

// #3 function with one variable (string) that returns .parseInt on the number

function toNumber(string) {
  return parseInt(string);
}

// #4 function that takes one variable then returns typeof method on the variable

function type(input) {
  return typeof (input);
}

// #5 function with two variables, function returns sum of both

function sum(num1, num2) {
  return num1 + num2;
}

// #6 function with two variables, test if both are true, only if both true run, test using if statement

function mustBeTrue(test1, test2) {
  if (test1 && test2) {
    // run any code here
  }
  
  else {
    return 'no code was run';
  }
}

// #7 function with two variables, check if either one is true using if statement

function oneMustBeTrue(x, y) {
  if (x || y) {
    console.log("test")
    // run any code here
  }
  else {
    return 'no code was run';
  }
}

// #8 only run if both are false, use if statement to taste for false 

function runIfFalse(x, y) {
  if (!x && !y) {
    // run any code here
  }
  else {
    return 'no code was run';
  }
}


