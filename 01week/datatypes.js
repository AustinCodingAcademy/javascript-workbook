'use strict';

//display date
function findTime(){
  const now = new Date(); //find date
  const date = `${(now.getMonth() + 1)}/${now.getDate()}`;
  const time = `${now.getHours()}:${now.getMinutes()}`;
  const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = dayArray[now.getDay()];
  const dateTime = `It is ${day}, ${date} at ${time}.`;
  return dateTime;
}

//also displays date
Date();


//convert number to string
function numToString(num) {
  return num.toString()
};


//return data type but not NaN
function dataType(value) {
  return typeof value
};

//adds two numbers together
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2
};

//converts string to number
function stringToNum(str) {
  return Number(str)
};

//tests if both arguments are true
function twoAreTrue(arg1, arg2){
  if(arg1 && arg2){
    return "both arguments are true"
  } else {
    return "nope"
  }
};

//test if one of two arguments is true
function oneIsTrue(arg1, arg2){
  if(arg1 || arg2){
    return "one argument is true"
  } else {
    return "nope"
  }
};

//test if both arguments are not true
function neitherAreTrue(arg1, arg2){
  if(!arg1 && !arg2){
    return "neither argument is true"
  } else {
    return "nope"
  }
};
