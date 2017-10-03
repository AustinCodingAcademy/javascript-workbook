'use strict'
//function that calls current date and time
let displayDate = function(){
  let date = new Date();
  console.log(date);
}

//convert number to string
let numberToString = function(x){
  if(typeof(x)==='number'){
    console.log(x.toString() + " is now a string");
  }
}

//convert string to number
let stringToNumber = function(y){
  if(typeof(y)==='string'){
    console.log(Number(y) + " is now a number");
  }
}

//function that checks that both inputs are true
let bothThingsTrue = function(a,b){
  if(a&&b){
    console.log("Inputs: " + a + ", " + b + "---Both inputs are true.");
  }
}

//function that checks if one input is true
let oneThingTrue = function(a,b){
  if(a||b){
    console.log("Inputs: " + a + ", " + b + "---At least input is true.")
  }
}

displayDate();
numberToString(99);
stringToNumber("100");
bothThingsTrue(2,"no");
oneThingTrue(1,0);
