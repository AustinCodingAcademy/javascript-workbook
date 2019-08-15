//Get new date and display in the console.
console.log(new Date());

//Convert a number to a string.
let num=10
console.log(num.toString());

//Convert a string to a number.
let str = "2"
console.log(parseInt(str));

//Take different datatypes and print out whether they are a "Boolean"; "Null"; "Undefined"; "Number"; "NaN"; "String".

let Boolean = true;
let Null = null;
let Undefined;
let Number = 2;
let notNumber = Math.sqrt(-1);
let String = "This is a String";

console.log(typeof Boolean);
console.log(typeof Null);
console.log(typeof Undefined);
console.log(typeof Number);
console.log(isNaN(notNumber)); //console.log() "true" if the value equates to "NaN."
console.log(typeof String); 

//Add two numbers together
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;

  console.log(numOne+numTwo);
}
addTwoNumbers();

//Run program when two things are true.
function ifBothTrue(){
let a = 5;
let b = 5;

  if (a===b){
    console.log("Both things are True");
  }
}
ifBothTrue();

//Run program when one of two things is true.
function ifOneThingTrue(){
  let colorOne = "red";
  let colorTwo = "blue";
  
  if (colorOne==="blue"){
    console.log("One thing is True");
  }
  if (colorTwo==="blue"){
    console.log("One thing is True");
  }
}
ifOneThingTrue();


//Run program when both things are not true.

function ifNeitherTrue(){
  let water = "think";
  let wine = "do";

  if(water&&wine!=="drink") {
    console.log("Neither things are True");
  }
}
ifNeitherTrue();