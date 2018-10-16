
// Write a JavaScript program to display the current day and time.
const getThatTime =()=> {
  const today = new Date(); //gets todays current date & time
  const day = today.getDay(); //gets a day as a number
  const dayOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];  // array to change numbers to days
  const hour = today.getHours(); // gets current hour
  const minute  = today.getMinutes(); // gets current minute
  console.log(`Today is ${dayOfWeek[day]}`)
  console.log(`The time is: ${hour}:${minute}`)}
getThatTime();
  
  
//Write a JavaScript program to convert a number to a string.
const numtoString = (num) =>{ 
  const digit = num.toString()
  console.log(num);}
numtoString(33);
  
  
  
  
//Write a JavaScript program to convert a string to the number.
const stringToNum =()=>{
  const str = "39 years";
  const parse = parseInt(str,10);
  console.log(parse)
}
stringToNum();
  
  
//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const whatTypes=()=> {
  console.log(typeof false);
  console.log(typeof null);
  console.log(typeof undef);
  console.log(typeof 55);
  console.log(typeof "doggo");
  console.log(typeof NaN)};
whatTypes();
  
  
  
  
  
  
//Write a JavaScript program that adds 2 numbers together.
const addTwo = (one,two)=> {
  return one + two;
}
console.log(addTwo(1,2));
  
  
//Write a JavaScript program that runs only when 2 things are true.
const twoTrue = (num1,num2) => {
  if(num1 && num2) {
    return "two true"
  }
}
console.log(twoTrue(6,8));
  
//Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (num1,num2) => {
  if(num1 || num2) {
    return "1 of 2 things are true";
  }
}
console.log(oneTrue(1,7))
  
  
//Write a JavaScript program that runs when both things are not true.
const notTrue = (condition1,condition2)=> {
  if(!condition1 && !condition2  ) {
    return "how";
  }
}
console.log(notTrue(false, NaN))
  