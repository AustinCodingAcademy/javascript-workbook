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
//return argument using  Number() method

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

//Combined last 3 questions into one function
//declare function, pass two arguments
//write multiple if/else statements
//Use && operator to check if two things are true
//Use || operator to check if one thing is true
//Use && and ! operators to run function when both things are untrue

function condition(item1, item2) {
    if(item1 && item2 === 7) {
      return 'Both are true';
    }
    else if(item1 === item2 || (item1 / item2) === 2){
      return 'One is true';
    }
    else if(item1 !== 8 && item1 !== item2) {
      return 'Runs when untrue';
    }
    else {
      return 'Try agai';
    }
  }
console.log(condition(12, 7));
console.log(condition(10, 5));
console.log(condition(5, 8));
