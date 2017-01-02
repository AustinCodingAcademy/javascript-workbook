//1. In your own words, explain what conditionals do.

//Answer: Conditionals are a cornerstone in the logic of programming. if something then, do this, else do something else, unless if something else is true




//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:

var test = 1;

if (test < 10) {
console.log("good job");
} else {
  console.log("try again");
}




//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:
var divide = 27

if (divide % 2 === 0 && divide % 3 ===0 && divide % 4 ===0 && divide %5 === 0) {
  console.log("divisible by 2,3,4,5");
}
else if (divide % 2 ===0 && divide % 3 ===0 && divide % 4 ===0  ) {
console.log("divisible by 2,3,4");
}
else if (divide % 2 ===0 && divide % 5 ===0 && divide % 4 ===0  ) {
console.log("divisible by 2,4,5");
}
else if (divide % 2 ===0 && divide % 3 ===0) {
console.log("divisible by 2,3");
}
else if (divide % 2 ===0 && divide % 4 ===0) {
console.log("divisible by 2,4");
}
else if (divide % 2 ===0 && divide % 5 ===0) {
console.log("divisible by 2,5");
}
else if (divide % 2 ===0) {
console.log("divisible by 2");
}
else if (divide % 3 ===0) {
console.log("divisible by 3");
}
else if (divide % 4 ===0) {
console.log("divisible by 4");
}
else if (divide % 5 ===0) {
console.log("divisible by 5");
}
else {
  console.log("Try Again");
}


//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:
function myFunction(){
  return "Testing, Testing, 1...2...3...";
}
console.log(myFunction());

//5. Create a function that prints out the average of a set of numbers.

//Answer:



//6. Call your above function and write the code to make the average print out.

//Answer:
