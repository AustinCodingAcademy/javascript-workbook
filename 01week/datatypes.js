'use strict';

/**
 * [getCurrentDate description]
 * @return {time} current time
 */
function getCurrentDate() {
  let currentDate = new Date();
  return currentDate;
}

/**
 * [convertNumToString description]
 * @param  {[type]} myNumber [description]
 * @return {[type]}          [description]
 */
function convertNumToString(myNumber) {
  alert("convertNumToString");
  console.log(typeof myNumber);
  var myString = myNumber.toString();

  return myString;
}

/**
* [convertNumToString description]
* @param  {[type]} myNumber [description]
* @return {[type]}          [description]
*/
function convertStringToNum(myString) {
  var myNumber = parseInt(myString);
  return myNumber;
}

/**
 * [whatDataType description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function whatDataType(data) {
  return typeof(data);
}

/**
 * [add description]
 * @param {[type]} num1 [description]
 * @param {[type]} num2 [description]
 */
function add(num1,num2){
  return num1+num2;
}

/**
 * [ifTwoTrue description]
 * @param  {[type]} oneThing    [description]
 * @param  {[type]} secondThing [description]
 * @return {[type]}             [description]
 */
// function ifTwoTrue(oneThing,secondThing) {
//   if (oneThing && secondThing) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// /**
//  * [ifOneTrue description]
//  * @param  {[type]} oneThing    [description]
//  * @param  {[type]} secondThing [description]
//  * @return {[type]}             [description]
//  */
// function ifOneTrue(oneThing, secondThing) {
//   if (oneThing || secondThing) {
//     return true;
//   } else  {
//     return false;
//   }
// }
//
// /**
//  * [ifFalse description]
//  * @param  {[type]} oneThing    [description]
//  * @param  {[type]} secondThing [description]
//  * @return {[type]}             [description]
//  */
// function ifFalse(oneThing, secondThing) {
//   if (oneThing===false &&  secondThing===false) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function checkBoolean(item1, item2) {
//   if (item1&&item2) {return true}
//   else if (item1||item2){return true}
//   else if (!(item1&&item2)) {return true}
// }

var displayDate = document.getElementById("displayDate");
var convertNumToStringButton = document.getElementById('convertNumToStringButton');
var convertStringToNumButton = document.getElementById("convertNumToStringButton");
var checkDataTypeButton = document.getElementById("checkDataTypeButton");
var addButton = document.getElementById('addButton');
//When the displayDate button is clicked
displayDate.addEventListener("click", function(){
  displayDate.innerHTML=getCurrentDate();
});

//When the "Convert Numbers" button is clicked
convertNumToStringButton.addEventListener("click",function(){
  var oldField = document.getElementById("inputNumber");
  var newField = document.getElementById("outputString");
  newField.value = oldField.value.toString()+" is now a "+typeof newField.value;
});
//When the "Convert String" button is clicked
convertStringToNumButton.addEventListener("click",function(){
  var oldField = document.getElementById("inputString");
  var newField = document.getElementById("outputNumber");
  newField.value = oldField.value+" is now a "+typeof parseInt(newField.value);
});
//Check what Datatype
checkDataTypeButton.addEventListener('click',function(){
  var myValue = document.getElementById("dataTypeName").valueOf();
  console.log(typeof myValue.value);
});

// Add Two Numbers
addButton.addEventListener("click",function(){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var sum = num1+num2;
  document.getElementById("sum").value=parseInt(sum);
});
getResultButton.addEventListener("click",function(){
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var result = document.getElementById("result");



});
