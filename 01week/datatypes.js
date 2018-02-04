'use strict';
console.log('here');
//Write a JavaScript program to display the current day and time
function timeDay(){
  const today = new Date();//creating a const var, which equals to the Date() method.
  const day = today.getDay();//const var to display the date.
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];// a string of the days of the week.
  console.log("Today is " + daylist[day] + ".");//to display the date.

  const time = today.getHours() + ":" + today.getMinutes();
  const dayTime = "The time is "+ time + "."; //to display the hour and minutes.
  return dayTime;
}
timeDay();

//Write a JavaScript program to convert a number to a string.
function numToString (num) {
  const n = 5; // const var. 'n' equals '5'
  console.log("the number is: " + n);// console.log to conver the number to a string.
}
numToString();

//Write a JavaScript program to convert a string to the number.
const str = '10'; //create a const with name and then add the string.
console.log(parseInt(str)); //use console.log() and add the parseInt function with the const name as the parameter.

//Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, string
function whatsMyType (arg) { //create a function and add a argument
return typeof arg // use the 'typeof' operator to get the data type
}

whatsMyType(false)// add arguments; for ex. false will show as Boolean. Add a # and it will show as a Number. Add a "#", show as a string, etc.


//Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers=(num1, mum2)=>{ // having two parameters/arguments as num1 and mum2.
  return num1 + mum2; // use the return statement to add both num1 and mum2.
}
sumOfTwoNumbers(4,10);// in this case, num1 = 4 and mum2 = 10; 4 + 10 = 14.



// Write a Javascript Program that runs only when 2 things are true.
function bothAreArgumentsAreTrue(arg1,arg2){ // have two arguments
  console.log(arg1 && arg2, 'line 5')// use console.log to log that arg1 & arg2 if one or both equal to true
  if(arg1 && arg2){ // if arg1 and arg2 are both "truthy"
    return 'both are true' // results will show that they are both true
  }
}

bothAreArgumentsAreTrue(4,null);
console.log(bothAreArgumentsAreTrue(4,3000)), 'second';

//Write a JavaScript program that runs when 1 of 2 things are true.
function trueOrFalse (arg1) {
  if (arg1 > 0) { // if arg1 is greater than 0
    return "true";// return as true
  }else{          // else
    return "false"// if it is not greater than 0, return as false
  }
}

console.log(trueOrFalse(4)); // add negative or positive integer to determine if it is false or true

// function that receives two items, if those two things are true.
// methods: function, 2 arguments, if/ then statement

function evaluatesToTrue(arg1, arg2) {
  if(arg1 && arg2){ // if arg1 and arg2 are one or both equal to true
    return 'both are true' // return both are true
  }else{           // or else if it one or both do not equal to true
    return 'false' // return as false
  }
}
//made changes

evaluatesToTrue(4, 6);
evaluatesToTrue(null, 6);
