  // display the current day and time 
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  console.log("Today is : " + date + ".");
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("Current Time : " + time);

  // convert a number to a string
  var number = 7;
  var string1 = String(number);
  console.log(string1)

  // convert a string to the number.
  console.log(parseFloat('7kg')) ;

  // different datatypes and prints out whether they are a
  var myBool = false;
  var myVar = null;
  var TestVar;
  var num = 5;
  var string = "string";

  // function declaration
  function isTypeOf(data) {
    return console.log(typeof data);
  }

  // function invocation
  isTypeOf(myBool);

  // adds 2 numbers together
  var num1 = 5;
  var num2 = 10;
  function result(a, b) {
  let plus = a + b;
  console.log(plus);
  }

  result(num1,num2)

  //only when 2 things are true
  let a = 6;
  let b = 5;

  if ((a > b) && (a != b)) {
  console.log("Both are TRUE")
  }

 //when 1 of 2 things are true
  let c = 4;
  let d = 5;

  if ((c > d) && (c != d)) {
  console.log("Both are TRUE")}
  else if (c > d) { 
  console.log("One of these is TRUE");}
  else if (c != d) {
  console.log("One of these is TRUE");
  }  

  // when both things are not true
  let e = 4;
  let f = 4;

  if ((e > f) && (e != f)) {
  console.log("Both are TRUE")}
  else if (e > f) { 
  console.log("One of these is TRUE");}
  else if (e != f) {
  console.log("One of these is TRUE");} 
  else {
  console.log("Neither is TRUE");} 



 