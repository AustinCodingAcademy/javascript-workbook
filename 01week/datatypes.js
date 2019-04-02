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
function ifTwoTrue(oneThing,secondThing) {
  if (oneThing && secondThing) {
    return true;
  } else {
    return false;
  }
}
/**
 * [ifOneTrue description]
 * @param  {[type]} oneThing    [description]
 * @param  {[type]} secondThing [description]
 * @return {[type]}             [description]
 */
function ifOneTrue(oneThing, secondThing) {
  if (oneThing || secondThing) {
    return true;
  } else  {
    return false;
  }
}
/**
 * [ifFalse description]
 * @param  {[type]} oneThing    [description]
 * @param  {[type]} secondThing [description]
 * @return {[type]}             [description]
 */
function ifFalse(oneThing, secondThing) {
  if (oneThing===false &&  secondThing===false) {
    return true;
  } else {
    return false;
  }
}
//Client Coding
// console.log(getCurrentDate());
// console.log(typeof convertNumToString('77'));
// console.log(typeof convertStringToNum('911'));
// console.log(whatDataType({name:'mitchell'}));
// console.log(add(4,5));
// console.log(ifTwoTrue(true, true));
// console.log(ifOneTrue(false, 1));
// console.log(ifFalse(false,false));
