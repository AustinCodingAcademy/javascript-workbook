// Write a JavaScript program to display the current day and time.

const today = new Date(); //gets todays current date & time
const day = today.getDay(); //gets a day as a number
const dayOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];  // array to change numbers to days
const hour = today.getHours(); // gets current hour
const minute  = today.getMinutes(); // gets current minute
console.log(`Today is ${dayOfWeek[day]}`)
console.log(`The time is: ${hour}:${minute}`);


//Write a JavaScript program to convert a number to a string.
 const int = 20;
 const num = int.toString();
 console.log(num);


//Write a JavaScript program to convert a string to the number.
var a = parseInt("88.99 is the number",10);
console.log(a);


//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const isBoolean = (val) => {
   return typeof val
} 
console.log(isBoolean(false)) //Boolean

const isNull = (val) => {
  return typeof val
   }
  console.log(isNull(null));//Null

const isundefined= (val) => {
  return typeof val
   }
  console.log(isundefined())//Undefined

const isNum = (val) => {
  return typeof val
   }
  console.log(isNum(1));//Number

const isNotNumber = (val) => {
  if(isNaN(val)){return NaN}
   }
  console.log(isNotNumber(7)); //NaN how to get it to log NaN?


const isString = (val) => {
  return typeof val
   }
  console.log(isString("boo"));// string


//Write a JavaScript program that adds 2 numbers together.
const addTwo = (one,two)=> {
return one + two;
}
console.log(addTwo(1,2));


//Write a JavaScript program that runs only when 2 things are true.
 const twoTrue = (num) => {
  if(num > 1 && num < 100) {
    return "you chose a number between 1 and 100";
  }
}
console.log(twoTrue(99));


//Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (num1,num2) => {
  if(num1 || num2) {
    return "1 of 2 things are true";
  }
}
console.log(oneTrue(1))


//Write a JavaScript program that runs when both things are not true.
const notTrue = (condition1,condition2)=> {
  if(condition1===0 && condition2 <1) {
    return "how";
  }else {
    return "it worked";
  }
}
console.log(notTrue(0))