 "use strict"

//1. Write a JavaScript program to display the current day and time
function getDateAndTime(){
  return new Date()
}
getDateAndTime()

//2. Write a JavaScript program to convert a number to a string
function changeNumToStr(num){
  return num.toString()
}
changeNumToStr(9)

//3. Write a JavaScript program to convert a string to the number.
function changeStrToNum(str){
  return Number(str)
}
changeStrToNum("9")

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
function whatDataTypeIsIt(data){
  if(data===null){return 'Null'}
  else if(Number.isNaN(data)){return 'NaN'}
  else{return typeof data}
}
whatDataTypeIsIt(NaN)

//5. Write a JavaScript program that adds 2 numbers together.
function sumTwoNums(num1,num2){
  return num1 + num2
}
sumTwoNums(4,5)

//6. Write a JavaScript program that runs only when 2 things are true.
function twoTruths(thing1,thing2){
  if(thing1 && thing2){return 'Both are true.'}
}
twoTruths("hello","goodbye")

//7. Write a JavaScript program that runs when 1 of 2 things are true.
function oneTruth(thing1,thing2){
  if(thing1 || thing2){return 'One is true.'}
}
oneTruth("hello","goodbye")

// 8. Write a JavaScript program that runs when both things are not true.
function twoNotTrue(thing1,thing2){
  if(thing1 && thing2){return}
  else if(thing1 || thing2){return}
  else{return "both are not true"}
}
twoNotTrue(0,null)
