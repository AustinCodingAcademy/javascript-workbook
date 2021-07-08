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
  let myString = myNumber.toString();

  return myString;
}

/**
* [convertNumToString description]
* @param  {[type]} myNumber [description]
* @return {[type]}          [description]
*/
function convertStringToNum(myString) {
  let myNumber = parseInt(myString);
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


let displayDate = document.getElementById("displayDate");
let convertNumToStringButton = document.getElementById('convertNumToStringButton');
let convertStringToNumButton = document.getElementById("convertNumToStringButton");
let checkDataTypeButton = document.getElementById("checkDataTypeButton");
let addButton = document.getElementById('addButton');
//When the displayDate button is clicked
displayDate.addEventListener("click", function(){
  displayDate.innerHTML=getCurrentDate();
});

//When the "Convert Numbers" button is clicked
convertNumToStringButton.addEventListener("click",function(){
  const oldField = document.getElementById("inputNumber");
  const newField = document.getElementById("outputString");
  newField.value = oldField.value.toString()+" is now a "+typeof newField.value;
});
//When the "Convert String" button is clicked
convertStringToNumButton.addEventListener("click",function(){
  const oldField = document.getElementById("inputString");
  const newField = document.getElementById("outputNumber");
  newField.value = oldField.value+" is now a "+typeof parseInt(newField.value);
});
//Check what Datatype
checkDataTypeButton.addEventListener('click',function(){
  const myValue = document.getElementById("dataTypeName").valueOf();
  console.log(typeof myValue.value);
});

// Add Two Numbers
addButton.addEventListener("click",function(){
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let sum = num1+num2;
  document.getElementById("sum").value=parseInt(sum);
});
getResultButton.addEventListener("click",function(){
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const result = document.getElementById("result");

  console.log(result.innerHTML+=result);
});
