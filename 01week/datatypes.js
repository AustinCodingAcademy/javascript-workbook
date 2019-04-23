'use strict';
 //Display the current day and time in javascript.
 function displayDate(){
   document.getElementById("show-date").innerHTML=
   Date();
  console.log(Date());
 
   //Display the current day and time in javascript.
  var d = new Date(2020, 1, 5, 13, 15, 21, 0);
    document.write(new Date);
  
document.write("<hr/>") 
  //Convert a number, 7 to a string, "7" in javascript.
  var a=7;
  var b="7";
    document.write(a==b);
  
document.write("<hr/>") 
  //Convert a string, "7" to the number, 7 in javascript.
  var c="7";
  var d=7;
    function convert(c, d){
      return c==d;
    }
    document.write(convert("7"==7));
  
document.write("<hr/>") 
  //Add 2 numbers together in javascript.
  var a = 3;
  var b = 8;
  const addNums = (a, b)=>{
    return a + b ;
  }
  document.write(addNums(3, 8));  // => 11
  
document.write("<hr/>") 
  //Prints out "Both are TRUE" only when 2 things are true.
  var m= 1 < 2;
  var w= 4 < 6;
  document .write(1 < 2 )&&
  document.write(4 < 6);
  
document.write("<hr/>") 
  //prints out "One of these is TRUE" when 1 of 2 things are true.
  var x=new Boolean(true);
  var y=new Boolean(false);
  document.write(x==y);
  
  
document.write("<hr/>") 
  //Prints out "Neither is TRUE" when both things are not true.
  var x=3<2;
  var y=2<1;
  function pr(x,y){
    return(x==true || y==true);
  }return(x==true || y==true);
  
  
document.write("<hr/>") 

  //Boolean i.e. var myBool = false;
  var x=2;
  var y=3;
  (x==y);
  
  //Null
  var x={color:"red", shape:"circle", size:"2cm"};
  x=Null
  //Undefined
   var x;
  
  //Number
  var y=1;
  
  //NaN
  var x="";
  
  //String
  var x="car";
  
  // your variable
  var x= false;
  
document.write("<hr/>") 
  // function declaration
  function isTypeOf(data){
    return console.log(typeof data);
  
  
  // function invocation
  isTypeOf(myBool);
}
  //Solve this problem: given an array of numbers: [2, 4, 6, 8, 10], divide each number by two, return the new array and the product (multiplied all together) of the new array.

  //divide each by two
//   const myArry=[2, 4, 6, 8, 10]
//   const divideEachNumber=(myArry)=>{
//   for (let i=0, i< myArry.length, i++){
//        myArry[i] / 2;
//   }
// }

 }
 const number = parseInt(Math.random() * 100, 10);

  if (number < 10) {
    console.log(`The 'number' - ${number} - is less than 10.`);
  } else if (number > 11 && number < 20) {
    console.log(`The 'number' - ${number} - is less than 20, but greater than 11.`);
  } else {
    console.log(`The 'number' - ${number} - is greater than 20, but less than 100.`);
  }


