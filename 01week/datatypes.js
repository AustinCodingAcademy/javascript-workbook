// Create a function that returns the current date by using the new Date() object.
function dateAndTime() {
  const day = "Today is : " + new Date();
  
  return day;
}
console.log(dateAndTime());

// Create a function (numberToString(num)) with argument that converts a number or integer to a string 
// when using the toString() method.
function numberToString(num) {
  const n1 = num.toString();
  const x = (typeof n1);
  
  return "Number " + num +
      " has been converted to : " + x;
}
console.log(numberToString(20));


// Create a function (stringToNumber(num)) with argument that converts a string to a number or integer
// when using the parseInt() method.
function stringToNumber(str) {
  const n2 = parseInt(str);
  const x = (typeof n2);
  
  return "String " + str +
      " has been converted to : " + x;
}
console.log(stringToNumber("10"));

// Create a function (typeOfFunction(value)) with a value as an argument and return its type. 
function typeOfFunction(value) {
  const x = (typeof value);
  
  return "The value of " + value + " is a type of : " + x;
}
console.log(typeOfFunction(0));

// Create a function (add2Numbers(num1, num2)) that returns the sum of 2 arguments.
function add2Numbers(num1, num2) {
  const sum = num1 + num2
  return num1 + " + " + num2 + " = " + sum;
}
console.log(add2Numbers(5, 5));

// Create a function (trueFunction()) that evaluates to true when 
// values are divisible by two values (ex. 3 and 5) when using the && operand.
function trueFunction(num1, num2) {
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
  console.log(trueFunction(3, 5));
  
// Create a function (trueFunctionII(num1, num2)) that evaluates to true when 
// values are divisible by at least one of the two values (ex. 3 and 5) when using the || operand.
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








