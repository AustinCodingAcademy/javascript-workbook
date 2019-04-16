 // 1.Write a JavaScript program to display the current day and time.
 'use strict'
  function displayDate() {
    document.getElementById("showDate").innerHTML = Date();
  };

  //2. Write a JavaScript program to convert a number to a string.
var number = 10;
console.log(number.toString());          
  
  
//3. Write a JavaScript program to convert a string to the number.

var count = Number('1234')
console.log(count);

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:Boolean Null Undefined Number NaN String
function DataType(arg){
  console.log(typeof(arg));
}




//5. Write a JavaScript program that adds 2 numbers together.
function numTogether(a, b) {
var c = a + b;
console.log(c);
};
numTogether(4, 5);

function addTwoNumbers(num1, num2) {
  console.log (num1 + num2);
  }

  addTwoNumbers(45, 6)

// 6.Write a JavaScript program that runs only when 2 things are true.

var i = 6;
if(i > 5 && i < 10);
console.log(true);

//7.Write a JavaScript program that runs when 1 of 2 things are true.

var a = "jake";
  if(a ==="Jake"){
  console.log("hello");
 } else {
   console.log("that is not the same name");
 }
 
//8. Write a JavaScript program that runs when both things are not true.

function truthy(){
if(i< 5 || i > 20);
 console.log("not true");
};
truthy(10);