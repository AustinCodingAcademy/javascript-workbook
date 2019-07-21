//1.
function getNewDate() {
    document.getElementById("newDate").innerHTML = Date();
}

//2.
function numToString() {
    var numInput = document.getElementById("numString").value;
    var heresYourString = numInput.toString();
    document.getElementById("newString").innerHTML = heresYourString;
}

//3.
function toNumber() {
  var parseNumber = document.getElementById("stringInput").value;
  var parse = parseInt(parseNumber);
  console.log(parseNumber);
  console.log(parse);
  document.getElementById("newString").innerHTML = parse;
}

//4.
function findType() {
  var typeInput = document.getElementById("whatAmI").value;
  var typeOutput = isTypeOf(typeInput);
  document.getElementById("heresYourType").innerHTML = typeOutput;
}

//5.
function addition() {
  var firstNumber = document.getElementById("leftNum").value;
  var secondNumber = document.getElementById("rightNum").value;
  document.getElementById("sum").innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
}

//6.
function bothAreTrue(f) {
  var d = 18;
  var e = 28;
  var f = document.getElementById()
  if (d < f && e < f) {
    console.log("Both are true.");
  } else {
    console.log("Both are false.");
  }
}

function oneIsTrue(f) {
  var d = 18;
  var e = 28;

  if (d < f && e < f) {
    console.log("uh oh")
  } else {
    console.log("One of these is true.");
  }
}

function bothAreFalse(f) {
  var d = 18;
  var e = 28;

  if (d < f && e < f) {
    console.log("uh oh")
  } else {
    console.log("Neither is true.");
  }
}

bothAreTrue(50);
oneIsTrue(20);
bothAreFalse(10);

var bool = true;
var nothing = null;
var dunno = undefined;
var eighteen = 18;
var notNum = NaN;
var helloWorld = "Hello World";

var myBool = false;

function isTypeOf(data) {
  return console.log(typeof data);
}

// isTypeOf(bool);
// isTypeOf(nothing);
// isTypeOf(dunno);
// isTypeOf(eighteen);
// isTypeOf(notNum);
// isTypeOf(helloWorld);
