

//Write a JavaScript program to display the current day and time.
function displayDate() {
  // console.log("DISPLAY DATE:");
  const myDate = new Date();
  console.log(myDate)
}displayDate();

//Write a JavaScript program to convert a number to a string.
function convertNumToString(myNumber) {
  console.log("ConvertNumToString:");
  const myString = myNumber.toString();
    console.log (myString+" Is now a "+typeof myString);
} convertNumToString(2);

//Write a JavaScript program to convert a string to the number.
function convertStringToNumber(myString) {
  console.log("Convert String to Number:");
  const myNumber = parseInt(myString);
  console.log(myNumber);
} convertStringToNumber("seven");

//Write a JavaScript program that takes in different datatypes and prints out
function printDataType(data) {
  console.log("Print Data Type");
  console.log(data+" is a "+typeof data)
} printDataType(NaN);

//Write a JavaScript program that adds 2 numbers together.
function add(a,b) {
  console.log(a+b);
} add(5,2);

//Write a JavaScript program that runs only when 2 things are true.
function ifBothAreTrue(a,b) {
  if (a&&b) {
    console.log("Both are true");
  } else {
    console.log("I only run if both are true!");
  }
} ifBothAreTrue(true,true);

//Write a JavaScript program that runs when 1 of 2 things are true.
function ifOneAreTrue(a,b) {
  if (a||b) {
    console.log("One is true!");
  } else {
    console.log("I only run if one is true");
  }
} ifOneAreTrue(false,true);

// Write a JavaScript program that runs when both things are not true.
function ifBothAreFalse(a,b) {
  if (a==false&&b==false) {
    console.log("Both are false");
  } else {
    console.log("I only run if both are false");
  }
}
ifBothAreFalse(false,false);
