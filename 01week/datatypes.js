'use strict'

// 1. display current date and time
var currentdate = new Date();
console.log(currentdate);
var newBtnOne = document.createElement("button");
newBtnOne.setAttribute("id", "newBtn1");
var newBr1 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnOne);
mainDiv.appendChild(newBr1);
newBtnOne.innerHTML = "Date & Time";

// 2. convert a number to a string
var num = 27 + 15;
var newNum = num.toString();
console.log(newNum);
var newBtnTwo = document.createElement("button");
var newBr2 = document.createElement("br");
mainDiv.appendChild(newBtnTwo);
mainDiv.appendChild(newBr2);
newBtnTwo.innerHTML = "Convert a # to a 'String'";

// 3. convert a string to a number
var numb = parseInt("48567");
console.log(numb);
var newBtnThree = document.createElement("button");
var newBr3 = document.createElement("br");
mainDiv.appendChild(newBtnThree);
mainDiv.appendChild(newBr3);
newBtnThree.innerHTML = "Convert a 'String' to a #";

// 4. different datatypes
//Boolean
console.log(typeof true);
var newBtnFour = document.createElement("button");
var newBr4 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnFour);
mainDiv.appendChild(newBr4);
newBtnFour.innerHTML = "Boolean";

//Null
console.log(typeof null);
var newBtnFive = document.createElement("button");
var newBr5 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnFive);
mainDiv.appendChild(newBr5);
newBtnFive.innerHTML = "Null";

//Undefined
console.log(typeof g);
var newBtnSix = document.createElement("button");
var newBr6 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnSix);
mainDiv.appendChild(newBr6);
newBtnSix.innerHTML = "Undefined";

//Number
console.log(typeof 43);
var newBtnSeven = document.createElement("button");
var newBr7 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnSeven);
mainDiv.appendChild(newBr7);
newBtnSeven.innerHTML = "Number";

//NaN
console.log(typeof 0/0);
var newBtnEight = document.createElement("button");
var newBr8 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnEight);
mainDiv.appendChild(newBr8);
newBtnEight.innerHTML = "NaN";

//String
console.log(typeof 'String');
var newBtnNine = document.createElement("button");
var newBr9 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnNine);
mainDiv.appendChild(newBr9);
newBtnNine.innerHTML = "String";

// 5. adds 2 numbers together
var a = 999;
var b = 1;
console.log(a + b);
var newBtnTen = document.createElement("button");
var newBr10 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnTen);
mainDiv.appendChild(newBr10);
newBtnTen.innerHTML = "Addition";

// 6. 2 truthy
var c = 14;
var d = 14;
if (c === d) {
console.log('This is true!');
};
var newBtnEleven = document.createElement("button");
var newBr11 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnEleven);
mainDiv.appendChild(newBr11);
newBtnEleven.innerHTML = "Double Truthy";


// 7. 1 of 2 things are true
var f = true;
var g = false;
if (f || g !== false && f !== g) {
    console.log('One of these is true')
};
var newBtnTwelve = document.createElement("button");
var newBr12 = document.createElement("br");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnTwelve);
mainDiv.appendChild(newBr12);
newBtnTwelve.innerHTML = "True or Flase";

// 8. 2 falsy
var h = false;
var i = false;
if (h === i && h !== true) {
    console.log('Falsy')
};
var newBtnThirteen = document.createElement("button");
var mainDiv = document.getElementById("main");
mainDiv.appendChild(newBtnThirteen);
newBtnThirteen.innerHTML = "Double Flasy";