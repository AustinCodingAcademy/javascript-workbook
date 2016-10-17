//1. In your own words, explain what conditionals do.

//Answer: Conditionals tell the program what to do based on certain rules.




//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:

if (answer) {
  console.log('good job');
} else {
  console.log('try again');
}




//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:
if (num % 2 === 0) {
  console.log('divisible by 2');
}
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 4 === 0) {
  console.log('divisible by 4');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}



//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:
var printIt = function(someString) {
  console.log(someString);
}




//5. Create a function that prints out the average of a set of numbers.

//Answer:
var printAverage = function(num1, num2) {
  console.log((num1 + num2) / 2);
}




//6. Call your above function and write the code to make the average print out.

//Answer:
printAverage(6,2);
