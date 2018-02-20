'use strict';

//Write a JavaScript program to display the current day and time.

function findTime(){
  const now = new Date(); //find date
  const date = (now.getMonth() + 1) + "/" + now.getDate(); //display month/day
  const time = now.getHours() + ":" + now.getMinutes(); //display hour:minute
  const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for day of the week
  const day = dayArray[now.getDay()]; //get string day of week
  const dateTime = "It is " + day + ", " + date + " at " + time + "."; //display time and date in string
  return dateTime;
}

findTime();

//Write a JavaScript program to convert a number to a string.

function numToString(num) {
  return num.toString();
}

numToString(6);


// Write a JavaScript program to convert a string to the number.

function stringToNum(str) {
  return Number(str);
}

stringToNum("5");

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

function type(input) {
  return typeof(input);
}

type(9);


// Write a JavaScript program that adds 2 numbers together.

function addition(num1,num2) {
  return num1 + num2;
}

addition(2,7);


// Write a JavaScript program that runs only when 2 things are true.

function truce(arg1,arg2) {
  if (arg1 && arg2) {
    return "Good job, both are true!";
  } else if (arg1 || arg2) {
    return "Almost there, one value is true.";
  } else {
    return "Try again, both values are false...";
  }
}

truce(4,"hello");


// Write a JavaScript program that runs when 1 of 2 things are true.

function onlyOne(arg1,arg2) {
  if (arg1 && arg2) {
    return "Both are true, we need only one to be true...";
  } else if (arg1 || arg2) {
    return "Awesome! One value is true and one is false.";
  } else {
    return "Try again, both values are false...";
  }
}

onlyOne(5,NaN);


// Write a JavaScript program that runs when both things are not true.

function falsey(arg1,arg2) {
  if (!arg1 && !arg2) {
    return "Good job, both are false!";
  } else if (!arg1 || !arg2) {
    return "Almost there, one value is false.";
  } else {
    return "Try again, both values are true...";
  }
}

falsey(NaN,null);
