"use strict";

//logs current date and time.
let displayDate = function() {
  let date = new Date();
  console.log(date);
}

displayDate();

//Convert a number to a string.
let numString = function(x) {
  let ting = toString(x);
  console.log(typeof(ting));
}

numString(2);

//Convert a string to a number.
let stringNum = function(x) {
  let ting = parseInt(x);
  console.log(typeof(ting));
}

stringNum('55');

//Prints datatype
let printDatat = function(arg) {
  console.log(typeof(arg));
}

printDatat('what is this?');

//adds two numbers
let add = function(x, y) {
  console.log(x + y);
}

add(1, 2);

//Runs if two things are true.
let whatever = function(arg1, arg2) {
  if (arg1 && arg2) {
    console.log('OK!')
  } else {
    return;
  }
}

whatever(1, 1);

//Runs when one of Two things are true.
let whateverTwo = function(arg1, arg2) {
  if (arg1 || arg2) {
    console.log('OK!!')
  } else {
    return;
  }
}

whateverTwo(1, 0);

//Runs if two things are both not true.
let whateverThree = function(arg1, arg2) {
  if (arg1 === false && arg2 === false) {
    console.log('OK!5!');
  } else {
    return;
  }
}

whateverThree(false, true);

//Scratch
