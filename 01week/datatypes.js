'use strict';

//date and time
function dateAndTime() {
    var d = new Date();
    document.getElementById("dateAndTime").innerHTML = d;
}


//number to string
function numToString() {
    var num = document.getElementById("myText").value;
    document.getElementById("numToString").innerHTML = num;
}


// string to number
function stringToNum() {
    var str = document.getElementById("myNum").value;
    document.getElementById("stringToNum").innerHTML = Number(str);
}


// data type of input

function whatType() {
    var data = document.getElementById("inputType").value;
    document.getElementById("whatType").innerHTML = typeof data;
}

//how to do this if every input is a string
// where would js take in the datatypes from to print out what they are - not user submitted?





var a = 10 > 9;
console.log(typeof a);

var b = null;
console.log(b);

var c;
console.log(typeof c);

var d = 7;
console.log(typeof d);

var e;
if (isNaN(e) == true) {
    console.log("NaN");
}
else {
    console.log("no");
}

var f = "sixteen";
console.log(typeof f);




// var g = 5;
// var h = 6;
// console.log(g + h);


// addition

function addNums(first, second) {
    var first = Number(document.getElementById("first").value);
    var second = Number(document.getElementById("second").value);
    document.getElementById("addNums").innerHTML = first + second;
}


var j = 10;
var k = 4;
if (j > 9 && k < 5) {
    console.log("both are true");
}
else {
    console.log("");
}



var l = 10 > 9;
var m = 10 < 9;
if (l || m == true) {
    console.log("only one is true");
}
else {
    console.log("")
}



var n = 10;
var o = 4;
if (n < 9 && o > 5) {
    console.log("");
}
else {
    console.log("both are not true");
}