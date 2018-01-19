//display date


//convert number to string
function numToString(num) {
  return num.toString();
};

//convert string to number
function stringToNum(str) {
  return Number(str)
};

//program runs if both arguments are true
function twoAreTrue(arg1, arg2){
  if(arg1 && arg2){
    return "both arguments are true"
  }
};

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2
};


//test if one of two arguments is true
function oneIsTrue(arg1, arg2){
  if(arg1 || arg2){
    return "one argument is true"
  }
};
