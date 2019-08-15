var today = new Date();
var date = today.getFullYear()+ '-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+19 + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
console.log(dateTime);

var num = 24;
var xx = num.toString();
console.log(xx)


var text = '42px';
var integer = parseInt(text, 10);
console.log(integer);

// boolean
var myBool = false;

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(myBool);

// null
var myNull = null;

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(myNull);

// undefined
var myUndefined = undefined;

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(myUndefined);

// number
var myNum = 100;

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(myNum);

// NaN
var myNaN = 0/0;

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(myNaN);

// string
var myString = "false";

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(myString);

// var  = null;
// var  = undefined;
// var num = 13


var num1 = 92;
var num2 = 93;
var total = num1++;
console.log(num1 + num2)
   

function bothAreTrue(true1,true2){
  if(true1 && true2){
console.log ('both are true');
}
}

bothAreTrue(true, true);


function oneArgumentIsTrue(arg1,arg2){
  if(arg1 || arg2){
console.log ('one is true');
}
}

oneArgumentIsTrue(true, false);

function neitherAreTrue(arg1,arg2){
  if(arg1 || arg2){
console.log ('neither are true');
}
}

neitherAreTrue(true, true);