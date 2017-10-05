// 1 look up javascript printing unix timestamp & builtin time formatting
// create new var object of Date
function state_time(){
  getDate = new Date();
  // print and format output into a complete sentence
  console.log('the current day and time is ' + getDate.toLocaleString());
}
state_time();
// function that takes one argument and applies builtin toString
function turnIntoString(arg) {
  //return stringified output and  print output to console
  return arg.toString();
}
console.log(turnIntoString(4));
//3 apple parseInt on arg with a radix of 10
function toNumber(arg) {
  return parseInt(arg, 10);
}
console.log(toNumber('45'));
// apply typeof to arg and assign to var type, then format in a nice log
function whatTypeAmI(arg) {
    var type = typeof(arg);
    console.log('the input is a ' + type);
}
whatTypeAmI(4);
//5 define two agruments and return arg1 plus arg2
function addUs(arg1, arg2) {
  // format to state both args and display the sum as well as the math operation
  return arg1 + ' + ' + arg2 + ' = ' + (arg1 + arg2);
}
console.log(addUs(2, 4));
//6 write an if statement and use an AND operataor on arg1 and arg2
function truthCheck(arg1, arg2) {
  if (arg1 && arg2) {
    // function  runs if both arg 1 and arg2 are true
    console.log('both are true!');
  }
}
truthCheck(1, 1);
//7 write an if statement and use an OR operataor on arg1 and arg2
function orCheck(arg1, arg2) {
  if (arg1 || agr2) {
    // function  runs if arg 1 or arg2 are true
    console.log('at least one is true!');
  }
}
orCheck(1, 0);
//8 write an if statement and use an nAND operataor on arg1 and arg2
function neitherCheck(arg1, arg2) {
  // set an not and statement so both arg evaulations must fail
  if (!arg1 && !arg2) {
    // function  runs if neither arg 1 nor arg2 are true
    console.log('both are false!');
  }
}
neitherCheck(false, 0);
