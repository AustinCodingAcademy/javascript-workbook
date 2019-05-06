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




var a = 10 > 9;
document.write(typeof a);

var b = null;
document.write(b);

var c;
document.write(typeof c);

var d = 7;
document.write(typeof d);

var e;
if (isNaN(e) == true) {
    document.write("NaN");
}
else {
    document.write("no");
}

var f = "sixteen";
document.write(typeof f);





// addition
function addNums(first, second) {
    var first = Number(document.getElementById("first").value);
    var second = Number(document.getElementById("second").value);
    document.getElementById("addNums").innerHTML = first + second;
}




var j = 10;
var k = 4;
if (j > 9 && k < 5) {
    document.write("both are true");
}
else {
    document.write("");
}



var l = 10 > 9;
var m = 10 < 9;
if (l || m == true) {
    document.write("only one is true");
}
else {
    document.write("")
}



var n = 10;
var o = 4;
if (n < 9 && o > 5) {
    document.write("");
}
else {
    document.write("both are not true");
}


// function bothNotTrue(a, b) {
//     if (!a && !b) {
//       console.log('success')
//     } else {
//       console.log('fail')
//     }
//   }
  
//   const a = 23;
//   const b = null;
  
//   bothNotTrue(a, b)