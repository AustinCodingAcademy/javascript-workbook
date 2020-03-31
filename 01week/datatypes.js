'use strict'
let now = new Date();
console.log('Date and Time',now);
const theNumber = 5;
const theString = theNumber.toString();
const theOtherString = parseInt(theNumber);
console.log (theString, theOtherString);
console.log (typeof 45);
let AddNum = (a,b) => {
  return a+=b;
}
console.log(AddNum(3,9))
const balance = 500;
const jeans = 40;
const shorts = 30;

if (jeans <= balance && shorts <= balance) {
  console.log("You have enough money to purchase the items!");
}
if (jeans <= balance || shorts >= balance) {
  console.log("You have enough money to purchase the shorts or the jeans! ");
}
if (jeans != balance && shorts != balance) {
  console.log("This is a statement!");
}
