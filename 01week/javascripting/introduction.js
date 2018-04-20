// This will show the current date and time

function dateAndTime () {
  const day = 'It is currently ' + new Date();
  return day;
}
console.log(dateAndTime());

// This will convert a number to a String

function newString (num) {
  const resultString = num.toString();
  return resultString;
}
console.log(newString(40));

//  This will convert a string to a number

function newNum (string) {
  const resultNum = Number(string);
  return resultNum;
}
console.log(newNum("45"));

// This will determine the type of each of various variables

function findType (input) {
  console.log(typeof(input));
  return typeof(input);
}
findType("30");
findType(20);
findType(false);
findType(undefined);
findType(null);

// This will add two numbers

function addThese (num1, num2) {
  return num1 + num2;
}
console.log(addThese(4,900));

// This will succeed only if two things are true

function pickyAdder (aNumber, aString) {
  if (typeof(aNumber) === "number" && typeof(aString) === "string") {
    console.log("I would like to buy " + aNumber + " " + aString + "s");
  } else console.log("Please input a number and a string to make this purchase");
}
pickyAdder("six hundred", "balloon")
pickyAdder(12, "rattlesnake");

// This will succeed as long as one of its two conditions are met

function lessPicky (firstNum, secNum) {
  if (firstNum > 0 || secNum > 0) {
    console.log(firstNum + secNum);
  } else console.log("Please choose at least one positive number, as it is more fun");
}
lessPicky(-4, 0);
lessPicky(-2, 3);

// This will only succeed if none of its conditions are true

function grouchy (aNewString) {
  if (aNewString.length > 10 || typeof(aNewString) != "string") {
  } else console.log("ty for being brief")
}
grouchy("this function is rude");
grouchy("okay");
