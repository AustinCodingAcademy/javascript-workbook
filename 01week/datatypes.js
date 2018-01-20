//Write a JavaScript program to display the current day and time

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

// Write a JavaScript program to convert a number to a string.

function numToString(num) {
return num.toString();
};

numToString(4);

// Write a JavaScript program to convert a string to the number.

function strToNum(str){
  return parseInt(str);
}
strToNum('10');

// Write a JavaScript program that takes in different datatypes and prints out whether they are a ....


function whatsMyType (arg) {
return typeof (arg)
}

whatsMyType('allofthethings')

// Write a JavaScript program that adds 2 numbers together.

function sumNum(num1, num2){
  return num1 + num2
}
sumNum(40576.1237775,3.99873564);

// Write a JavaScript program that runs only when 2 things are true.

function truthOnly (youBetter, youBet){
  return (youBetter && youBet)
}
truthOnly (false, true);

// Write a JavaScript program that runs when 1 of 2 things are true.

function truthish (youCan, youWill){
  return (youCan || youWill)
}
truthish (false, true);

// Write a JavaScript program that runs when both things are not true.

function betterNot (option1, option2){
  return (!option1 && !option2)
}
betterNot (false, false);
