'use strict';
//1. In your own words, explain what conditionals do.

//Answer:  Conditionals are a set of instructions based on booleans for your computer program to execute code in one control flow or another.


//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:

function typeChecker(checkedVar) {
  if (typeof checkedVar == "string"){
     return "Good Job"
  } else {
    return "Bad Job";
  }
}

console.log(typeChecker(4));
console.log(typeChecker("greg"));




//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:

function numChecker(num) {
  if (num % 2 === 0) {
    console.log('divisible by 2');
  } else if (num % 3 === 0) {
    console.log('divisible by 3');
  } else if (num % 4 === 0) {
    console.log('divisible by 4');
  } else if (num % 5 === 0) {
    console.log('divisible by 5')
  } else {
    console.log('not divisible')
  }
}

numChecker(1)
numChecker(2)
numChecker(9)
numChecker(24)  // all 4's are also divisible by 2 so not sure how to change this one.
numChecker(25)



//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:

function printReturnedString(string) {
  return string
}

console.log(printReturnedString('Hey you Jamoke!'));

//5. Create a function that prints out the average of a set of numbers.

//Answer:

function averageChecker(num) {
  var average = 0
  var sum = 0

  for(var i = 0; i < num.length; i++) {
    sum += num[i];
  }
  average = sum / num.length;
  
  return average

}
console.log(averageChecker([1, 3, 41, 5]));


//6. Call your above function and write the code to make the average print out.

//Answer:

console.log(averageChecker([221, 33, 4441, 225]));

