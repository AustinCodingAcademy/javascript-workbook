//Display current time in console (date in console)
function date() {
  var now = new Date();
  console.log(now);
}
//Converting a number to a string
function convert() {
  var num = 19;
  var conv = num.toString();
  console.log("string is", conv);
}
//converting a string to a number
function convertAgain() {
  var numA = parseInt("64 72 81");
  console.log(numA);
}
//Conditional Variables
var val1 = "5";
var val2 = "10";
//If two are true = Run
function twoTrue() {
  if (val1 && val2 < 11) {
    console.log("Run");
  } else {
    console.log("Don't run");
  }
}
//If one is true = Run
function oneTrue() {
  if (val1 || val2 < 7) {
    console.log("Run");
  } else {
    console.log("Don't run");
  }
}
//If both are untrue = "run"
function twoUntrue() {
  if (val1 && val2 === 10) {
    console.log("Don't run");
  } else {
    console.log("Run");
  }
}
