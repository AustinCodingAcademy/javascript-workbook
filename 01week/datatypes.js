
//Write a JS program to display the current date and time

var today = new Date();
var todaysDate = today.toLocaleString('en-us');
document.getElementById("date").innerHTML = "The date and time are "+ todaysDate;


// convert number to string

var newNum = "";
function makeString(){
var num = document.getElementById("toStr").value;
let newNum = num.toString();
document.getElementById("result").innerHTML = "The number " + newNum + " is now a string";
}


// Write a JavaScript program to convert a string to the number.

function stringToNum(){
    let num = document.getElementById("toNum").value;
    var stringNum = parseInt(num);
    console.log(stringNum);
    document.getElementById("resultNum").innerHTML = "The string " + stringNum + " is now a number";
}


// //Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// // Boolean
// // Null
// // Undefined
// // Number
// // NaN
// // String

function evalData () {
    let leData = typeof false;
    document.getElementById("resultData").innerHTML = "The value is " + leData;
}

evalData();

// // Write a JavaScript program that adds 2 numbers together.

function addTwo() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;

    console.log(a);
    console.log(b);

    let addResult = Number(a) + Number(b)
    document.getElementById("resultAdd").innerHTML = "The result is " + addResult;

}

// Write a JavaScript program that runs only when 2 things are true.
function evalStuff(thing1, thing2) {
    if (thing1 == true && thing2 == true) {
        console.log("run!");
    }
}

// // Write a JavaScript program that runs when 1 of 2 things are true.


function evalMore(thing1, thing2) {
    if (thing1 == true || thing2 == true) {
        console.log("run!");
    }
}

// // Write a JavaScript program that runs when both things are not true.

function evalFalse(thing1, thing2) {
    if (thing1 != true && thing2 != true) {
        console.log("run!");
    }
}