// Write a JavaScript program to display the current day and time.
const date = new Date()
console.log("date:", date)

// Write a JavaScript program to convert a number to a string.
// function numToString(num) {
//   return num.toString()
// }
// numToString(2)
// works the same as below
const numToString = (num) => {
  return num.toString()
}
numToString(2)
// Array.isArray -- checks if object is array

// Write a JavaScript program to convert a string to the number.
function stringToNum(string) {
  return parseInt(string)
}
stringToNum('3')

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

const something = undefined;
const nullSomething = null;
function datatype(data) {
  return typeof data
}
// Boolean below
datatype(5 != '5')
// Null below
datatype(nullSomething)
// Undefined below
datatype(something)
// Number below
datatype(8)
// NaN (not a number) below
const add = (num1, num2) => {
  return isNaN (num1 + num2)
}
add(7, 8)
// String below
datatype("Pizza, anyone?")

// Write a JavaScript program that adds 2 numbers together.
function addNumbers(number1, number2) {
  return number1 + number2
}
addNumbers(2, 3)

// Write a JavaScript program that runs only when 2 things are true.
const isAwesome = true;
const isCool = true;
const isSad = false;
const isFunny = false;

function twoTrue(answer1, answer2) {
  return answer1 && answer2
  // if(answer1 && answer2){
  //   return true
  // } else {
  //   return false
  // }

  // console.log("answer1:", answer1, "answer2:", answer2)
}
twoTrue(isAwesome, isCool)

// Write a JavaScript program that runs when 1 of 2 things are true.
// const oneTrue = (thing1, thing2) => thing1 || thing2;
// oneTrue(isFunny, isCool)

function oneTrue(thing1, thing2) {
  return thing1 || thing2
//   // if(thing1 === true || thing2 === true){
//   //   return true
//   // } else {
//   //   return false
//   // }
}
oneTrue(isAwesome, isFunny)


// Write a JavaScript program that runs when both things are not true.
function notTrue(wrong1, wrong2) {
  return !wrong1 && !wrong2
}
notTrue(isAwesome, isCool)