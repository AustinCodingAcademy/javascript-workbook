'use strict'
//function that calls current date and time
let displayDate = function(){
  let date = new Date();
  console.log("1. " + date);
}

//convert number to string
let numberToString = function(x){
  if(typeof(x)==='number'){
    x = x.toString();
    console.log("2. " + x + " is now a string. typeof(" + x + ")=" + typeof(x));
  }
}

//convert string to number
let stringToNumber = function(y){
  if(typeof(y)==='string'){
    y = Number(y);
    console.log("3. " + y + " is now a number. typeof(" + y + ")=" + typeof(y));
  }
}

//display datatype of input
let whatDataType = function(z){
  console.log("4. " + z + " has a datatype of " + typeof(z));
}

//add two numbers together
let addition = function(a,b){
  let c = a + b;
  console.log("5. " + a + " + " + b + " = " + c);
}


//function that checks that both inputs are true
let bothThingsTrue = function(a,b){
  if(a&&b){
    console.log("6. bothThingsTrue Inputs: " + a + ", " + b + "---Both inputs are true.");
  }else{
    console.log("6. bothThingsTrue Inputs: " + a + ", " + b + "---NOT both inputs are true.")
  }
}

//function that checks if one input is true
let oneThingTrue = function(a,b){
  if(a||b){
    console.log("7. oneThingTrue Inputs: " + a + ", " + b + " --- At least one input is true.")
  }else{
    console.log("7. oneThingTrue Inputs: " + a + ", " + b + " --- Neither input is true.")
  }
}

//function that checks if both inputs are false
let bothThingsFalse = function(a,b){
  if(!a&&!b){
    console.log("8. bothThingsNotTrue Inputs: " + a + ", " + b + " --- Both inputs are false.");
  }else{
    console.log("8. bothThingsNotTrue Inputs: " + a + ", " + b + " --- NOT both inputs are false.")
  }
}

//run all functions per instructions
displayDate();
numberToString(99);
stringToNumber("100");
whatDataType(null);
whatDataType(true);
whatDataType("words");
addition(4,3);
bothThingsTrue(2,"yep");
oneThingTrue(1,0);
bothThingsFalse(NaN,null);
