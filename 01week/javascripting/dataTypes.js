'use strict';
/**
 * Display current Date,
 * get JS date
 * format
 * return string
 */
function displayCurrentDate(){
  const today = new Date();
  return `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`
}
console.log(new Date)
displayCurrentDate();

/** Write a JavaScript program to convert a number to a string.
 *  check if input is a number, if a number, use toString and retrun
 * if string return string
 */
function convertNumberToString(num){
  return typeof num === 'number' ? num.toString() : num;
}
convertNumberToString(5);

/** Write a JavaScript program to convert a string to the number.
 * use parseInt to convert, if it's not a number, give errror
 */
function convertStringToNumber(str){
  const parsedStr = parseInt(str);
  return parsedStr ? parsedStr : 'Please Enter a String';
}
/** Write a JavaScript program that takes in different datatypes and prints out what they are
 *
 * use typeof
 */
function printDataType(input){
  return typeof input
}

/** Write a JavaScript program that adds 2 numbers together.
 * argumnets need to be numbers or convertable to numbers
 */
function sum(arg1, arg2){
  const arg1Formatted = parseInt(arg1);
  const arg2Formatted = parseInt(arg2);
  return arg1Formatted && arg2Formatted ? arg1Formatted + arg2Formatted : 'Enter 2 Numbers'
}
/** Write a JavaScript program that runs only when 2 things are true.
 */
function bothAreTrue(arg1, arg2){
  return arg1 && arg2
}
/** Write a JavaScript program that runs when 1 of 2 things are true.
 */
function oneIsTrue(arg1, arg2){
  return arg1 || arg2
}

/** Write a JavaScript program that runs when both things are not true.
 */
function noneAreTrue(arg1, arg2){
  return !arg1 && !arg2
}
console.log(displayCurrentDate(), convertNumberToString(5), convertStringToNumber('b'), printDataType(true), sum(3,2))