'use strict';

// concept of map in programming
// map means a function that takes an array and a function

//call that function on every item in an array and put the results of each call into a new array and return that new array.

function map (arry, func) {
  var newArray = [];
  for(var i =0; i < arry.length;i++) {
    newArray.push(func(arry[i]));
  }
  return newArray;

}


function filter (arry, func) {
  var newArray = [];
  for(var i =0; i < arry.length;i++) {
    if(fnc(arry[i])){
      newArray.push(arry[i]);    
    }
     
  }
  return newArray;

}