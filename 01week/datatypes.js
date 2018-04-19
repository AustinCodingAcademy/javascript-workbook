
function dateAndTime() {
  const day = "Today is : " + new Date();
  
  return day;
}
console.log(dateAndTime());

function numberToString(num) {
  // const num = 15;
  const n1 = num.toString();
  const x = (typeof n1);
  
  return "Number " + num +
      " has been converted to : " + x;
}
console.log(numberToString(20));

function stringToNumber(str) {
  // const num = "15";
  const n2 = parseInt(str);
  const x = (typeof n2);
  
  return "String " + str +
      " has been converted to : " + x;
}
console.log(stringToNumber("10"));

function typeOfFunction(value) {
  // const n2 = parseInt(value);
  const x = (typeof value);
  return "The value of " + value + " is a type of : " + x;
}
console.log(typeOfFunction(0));

function add2Numbers(num1, num2) {
  const sum = num1 + num2
  return num1 + " + " + num2 + " = " + sum;
}
console.log(add2Numbers(5, 5));

function trueFunction() {
  let text = "";
  let i;
  for(i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      text += i + ", ";
    }
  }
  return "Function that executes when " +
    "2 statements are true : " + text;
}
  console.log(trueFunction());
  
// Write a JavaScript program that runs when 1 of 2 things are true.
function trueFunctionII() {
  let text = "";
  for(var i = 1; i <= 15; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      text += i + ", ";
    }
  }
  return "Function that executes when " +
    "1 of 2 statements is true : " + text;
}
console.log(trueFunctionII());


// Write a JavaScript program that runs when both things are not true.


// Create a function that returns the current date by using the new Date() object.

// Create a function numberToString() that returns a string and converts it by using the toString() method.

// Create a function stringToNumber() that returns an integer and  converts it to a string by using parseInt();

// Create a function with a value as an argument and return its type. 







