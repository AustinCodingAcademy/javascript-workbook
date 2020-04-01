'use strict'

//program to display current day and time

/*let now = new Date();
console.log("the current date and time", now);

//write js program to convert num to string
const theNumber = 5;
const theString = theNumber.toString();

console.log("The type of theString variable is", (typeof theString))
console.log("The type of theNumber variable is",(typeof theNumber))
console.log("The string is ", theNumber.toString());
console.log("the number is", theNumber);

//covert a string to the number
const theOtherString = "4.5";
const theOtherNumber = parseInt(theOtherString, 10);
console.log("The otherString type is", (typeof theOtherString));
console.log("The otherNumber")


(counting in base 10)
0,1,2,3,4,5,6,7,8,9,10,11

(counting in base 2)
0, 1, 10, 11, 100, 111, 1000

(counting in base 16)
0, 1, 2, 3, 4, 5, 6, 7, 8, 9,A , B, C, D ,E ,F
*/
// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
//console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("showDate").innerHTML = currentDate;
}

 

// Write a JavaScript program to convert a number to a string.

const num = 100;
console.log(num, typeof num);

const grade = String(num);
console.log(grade, typeof grade)



// Write a JavaScript program to convert a string to the number.
const amount = "10.25"
console.log(amount, typeof amount);

const a = parseFloat(amount);
console.log(a, typeof a);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
let untrue = false;
//console.log(a, typeof a)
document.getElementById("booleanTest").innerText = typeof a;


// * Null
let b = null;
console.log(b, typeof b)

// * Undefined
let c;
console.log(c, typeof c)

// * Number
document.getElementById("numDataType").addEventListener("click", function(){
const number = 5;
  document.getElementById("typeOfNum").innerHTML = typeof number;
});

// * NaN
const NotANum = NaN;
console.log(NotANum, typeof NotANum)

// * String
const greeting = "Hello there";
console.log(greeting, typeof greeting)
  

  
// Write a JavaScript program that adds 2 numbers together.
const displaySum = () => {
const num1 = 5;
const num2 = 11;

const total = num1 + num2;
/*document.getElementById("sum").addEventListener("click", function(){
  const num1 = 5;
  const num2 = 11;
  const total = num1 + num2;
  document.getElementById("sumOfTwoNum").innerHTML = total;
});*/

document.getElementById("sum").innerHTML = total;
}

// Write a JavaScript program that runs only when 2 things are true.
const value1 = 10;
const value2 = 20;

const bothAretrue = (arg1, arg2) => {
  if (arg1 && arg2){
    return true
  } else {
    return false
  }
} 

truth(value1, value2)



// Write a JavaScript program that runs when 1 of 2 things are true.

const numeroUno = 13;
const numeroDos = 0;

const oneIsTrue = (argue1, argue2) => {
  if (argue1 || argue2){
    return true
  } else {
    return false
  }
}

oneIsTrue(numeroUno, numeroDos)
// Write a JavaScript program that runs when both things are not true.

const empty = " ";
const zero = 0;

const bothAreFalse = (argument1, argument2) => {
  if (argument1 && argument2){
    return true
  } else {
    return false
  }
}

oneIsFalse(empty, zero)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
