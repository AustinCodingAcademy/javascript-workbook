'use strict'

//Write a javascript program to display the current date and time

function getCurrentDateTime() { //create the function
  const rightNow = Date() //set the variable to the current date/time
  return rightNow //return the variable value
}

getCurrentDateTime() //call the function


//Write a javascript program to convert a number to a string

function toString(num) { //create the function with a number argument
return num.toString() //convert the number (num) to a string
}

toString(20) //call the function with an argument


//Write a JavaScript program to convert a string to the number

function toNumber(str) { //create the function with a string argument
  return Number(str); //convert the string (str) to a number
}

toNumber('8') //call the function with an argument


//Write a JavaScript program that takes in different datatypes and prints out whether they are a...

function whatIsIt(data) {//create the function with a data argument
  return typeof(data)//return the data type
}

whatIsIt('4')//call the function with an argument


//Write a JavaScript program that adds 2 numbers together.

function addNumbers(num1, num2) {//create the function with 2 num arguments
  return num1 + num2 //add the two numbers and return the result
}

addNumbers(3, 5)//call the funcition with arguments


//Write a JavaScript program that runs only when 2 things are true.

function areTheyTrue(arg1, arg2) {//create the function with 2 arguments
  if (arg1 && arg2) { //set condition that both arguments need to be true
    return 'Both are true' //only return if both are true
  }
}

areTheyTrue(7, 'hello')//call the funcition with arguments


//Write a JavaScript program that runs when 1 of 2 things are true.

function areAnyTrue(arg1, arg2) {//create the function with 2 arguments
  if (arg1 || arg2) {//set condition that one of the arguments needs to be true
    return "One is true" //only return if one of them are true
  }
}

areAnyTrue("hello", false)//call the funcition with arguments


//Write a JavaScript program that runs when both things are not true.

function areBothFalse(arg1, arg2) {//create the function with 2 arguments
  if (!arg1 && !arg2) {//set condition that both arguments need to be false
    return 'Both are false'//only return if both of them are false
  }
}

areBothFalse(NaN, false)//call the funcition with arguments
