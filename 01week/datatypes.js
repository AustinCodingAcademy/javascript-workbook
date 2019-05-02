//1. Write a JavaScript program to display the current day and time.
var today = new Date();
var day = today.getDay();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ', ' + mm + '/' + dd + '/' + yyyy + ".");
document.getElementById('div1').innerHTML = "Today is : " + daylist[day] + ', ' + mm + '/' + dd + '/' + yyyy + ".";


var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

console.log("Current Time : "+hour  + " : " + minute + " : " + second);
document.getElementById('div1a').innerHTML = "Current Time : "+hour  + " : " + minute + " : " + second;

//2. Write a JavaScript program to convert a number to a string.
var num = 15;
var str = num.toString()
document.getElementById('div2').innerHTML = str;

//3. Write a JavaScript program to convert a string to the number.
var text = '42';
var integer = parseInt(text, 10);
console.log(integer);
document.getElementById('div3').innerHTML = integer;

/*4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String */

function myFunc (z) {
    if (typeof "") {
        return typeof z;
    } else if (null) {
        return typeof z;
    } else if (typeof undefined) {
        return typeof z;
    } else if (typeof 1) {
        return typeof z;
    } else if (typeof true) {
        return typeof z;
    }
}

console.log (myFunc("hello"));
console.log (myFunc(true));
console.log (myFunc(5));
console.log (myFunc(undefined));

document.getElementById('div4').innerHTML = myFunc("hello");
document.getElementById('div4a').innerHTML = myFunc(true);
document.getElementById('div4b').innerHTML = myFunc(5);
document.getElementById('div4c').innerHTML = myFunc(undefined);



// 5. Write a JavaScript program that adds 2 numbers together.
var firstNumber = 9;
var secondNumber = 3;
console.log(firstNumber + secondNumber);
document.getElementById('div5').innerHTML = firstNumber + secondNumber;
//6. Write a JavaScript program that runs only when 2 things are true.

var myVariable = 50; //truthy
var yourVariable = 90; // truthy

if(myVariable && yourVariable) { 
    console.log("Both are truthy") 
    document.getElementById('div6').innerHTML = "Both are truthy";
  };

// 7. Write a JavaScript program that runs when 1 of 2 things are true.
var myVariable = 50; // truthy
var yourVariable = 0; // falsey

if(myVariable || yourVariable) { 
    console.log("One is truthy")
    document.getElementById('div7').innerHTML = "One is truthy";
  };