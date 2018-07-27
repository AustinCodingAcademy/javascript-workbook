// Use repl.it to write the following code. Paste your code into your workbook in the file called datatypes.js.
 
 // Write a JavaScript program to display the current day and time.

 const newDate = ()=> {
  return new Date()
}
newDate();
// Write a JavaScript program to convert a number to a string.

const numberToString=(num)=>{
 return num.toString();
}  
numberToString (7);

//  Write a JavaScript program to convert a string to the number.

const numToString=(num)=> {
 return parseInt (num)
} 
numToString ('7');


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
//  Number
//  NaN
//  String

const typeOfData = (arg1)=>{
return typeof arg1;
}
typeOfData ("Christelle");


// Write a JavaScript program that adds 2 numbers together.

const sumOfTwoNumbers=(num1, num2)=>{
   return num1 + num2;
 }
 sumOfTwoNumbers(5000, 9);


//   Write a JavaScript program that runs only when 2 things are true.

const twoTruthy =( arg1, arg2 ) => {
  if( arg1 && arg2 ){
  return "Both True";
  }
} 
twoTruthy(0,"Christelle");


// Write a JavaScript program that runs when 1 of 2 things are true.

cosnt twoTrue =(arg1, arg2) => {
  if (arg1 || !(arg2){ 
    return "You always win"
  }
}

// Write a JavaScript program that runs when both things are not true.

const twoFalseWins = (faux1,faux2)=>{
  if(!(faux1)&&!(faux2) )
  return "Both False "
}

// © 2017 Austin Coding Academy