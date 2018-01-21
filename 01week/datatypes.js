'use strict';

//Write a JavaScript program to display the current day and time
function dateAndTime() {
const today = Date(); // assigns current date and time to a const
return today;
}
dateAndTime(); //calls dateAndTime function


//Write a JavaScript program to convert a number to a string
function numberToString(num) {
  return num.toString(); // converts a number to a string
}
numberToString(5);



//Write a JavaScript program to convert a string to the number
function stringToNumber(str) {
  return Number(str); //converts a string to a number
}
stringToNumber("5");



//Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String
function whatsTheTypeOf(input) {
  return typeof input ; //returns the type information as a string
}
whatsTheTypeOf("hello");



//Write a JavaScript program that adds 2 numbers together
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2; //returns sum of two given numbers
}
sumOfTwoNumbers(3, 4);



//Write a JavaScript program that runs only when 2 things are true
function bothAreTrue(arg1, arg2) {
  if (arg1 && arg2) { //checks if both arguments are true
    return "Both arguments are true";
  }
}
bothAreTrue('hello', 5);



//Write a JavaScript program that runs when 1 of 2 things are true
function atleastOneIsTrue(arg1, arg2) {
  if (arg1 || arg2) { //checks if any of the arguments is true
    return "true";
  }
}
atleastOneIsTrue(0, "hello");



//Write a JavaScript program that runs when both things are not true
function bothAreNotTrue(arg1, arg2) {
  if (!arg1 && !arg2) { //checks if both arguments are false
    return "Both arguments are not true";
  }
}
bothAreNotTrue(0, false);
