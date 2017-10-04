console.log('hello');

console.log('Stephanie is here!');

// return current day/time
//assign variable 'today' a new Date instance
//declare a function and return toDateString and toTimeString methods

var today = new Date();

function currentDay() {
  return [today.toDateString(), today.toTimeString()];
}
console.log(currentDay());


//convert number to string
//declare a function, pass one argument
//return the argument using the toString method

function numToString(number) {
  return number.toString();
}
console.log(numToString(2326));


//convert string to number
//declare a function, pass one argument
//return argument using the Number() method

function stringToNumber(item) {
  return Number(item);
}
console.log(stringToNumber('100005'));

//print out datatypes
//declare function, pass one argument
//return argument using typeof method

function findType(dataType) {
  return typeof dataType;
}
console.log(findType('stephanie'));
console.log(findType(206));

//Add two numbers together
//declare function, pass two arguments
//return arguments using the addition operator

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(16, 28));

//declare function, only runs when two things true
// pass in two arguments
//if statement to run comparison
// use logical operator &&

function findTrue(item1, item2) {
  if (item1 && item1 < item2) {
    return 'Both are true';
  }
  else {
    return 'Both are not true';
  }
}
console.log(findTrue(5, 17));

//declare function that runs when one thing is true
// pass two arguments
//if statement to run comparison
// use the || 'or' operator to check for truthy

function findOne(item1, item2) {
  if (item1 || item1 === item2) {
    return 'One is true!';
  }
  else {
    return 'Both are not true';
  }
}
console.log(findOne(5, 17));

//declare function that runs when two things are not true
//pass two arguments
//if statement to run comparison
//use the ! 'not' operator to check if arg. are false
function findFalse(item1, item2) {
  if(item1 !== 0 && item1 !== item2) {
    return 'GoodJob!'
  }
}  
  console.log(findFalse(5, 17));
