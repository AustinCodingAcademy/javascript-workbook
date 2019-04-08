
//Write a JS program to display the current date and time

var today = new Date();
var todaysDate = today.toLocaleString('en-us');
document.getElementById("date").innerHTML = "The date and time are "+ todaysDate;


// convert number to string

// var newNum = "";
// function makeString(){
// var num = document.getElementById("toStr").value;
// let newNum = num.toString();
// document.getElementById("result").innerHTML = "The number " + newNum + " is now a string";
// }

// makeString();

// Write a JavaScript program to convert a string to the number.

function stringToNum(){
    let num = document.getElementById("toNum").value;
    var stringNum = parseInt(num);
    console.log(stringNum);
    document.getElementById("resultNum").innerHTML = "The string " + stringNum + " is now a number";

}

stringToNum();

// //Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// // Boolean
// // Null
// // Undefined
// // Number
// // NaN
// // String

// function evalData (someData) {
// let n = typeof someData;
// console.log(n);
// }

// evalData("hi mom");

// // Write a JavaScript program that adds 2 numbers together.

// function addTwo(a,b) {
// let result = a + b;
// console.log(result);

//  }

// // Write a JavaScript program that runs only when 2 things are true.
// function evalStuff (thing1,thing2) {
//     if (thing1 == true && thing2 == true) {
//         console.log("run!");
//     }
// }

// // Write a JavaScript program that runs when 1 of 2 things are true.


// function evalMore (thing1,thing2) {
//     if (thing1 == true || thing2 == true) {
//         console.log("run!");
//     }
// }

// // Write a JavaScript program that runs when both things are not true.

// function evalFalse (thing1,thing2) {
//     if (thing1 != true && thing2 != true) {
//         console.log("run!");
//     }
// }