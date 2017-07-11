// display current date/time
function getDate () {
  return new Date();
}

// convert a number to a string
function convertToString (num) {
  return num.toString();
}

// convert a string to a number
function convertToNumber (val) {
  return parseInt(val);
}

// return data type
function dataType (a) {
  return typeof (a);
}

// add two numbers together
function addNumbers (a, b) {
  return (a + b);
}

// both true statements
function twoTrue (a, b) {
  if ((a + b > 10) && (a + b < 20)) {
    return true;
  } else {
    return 'fail';
  }
}

// one true statement
function oneTrue (a, b) {
  if ((a + b > 10) || (a + b > 20)) {
    return 'pass';
  } else {
    return 'fail';
  }
}

// no true statements
function noTrue (a, b) {
  if ((a + b !== 10) && (a + b !== 20)) {
    return 'pass';
  } else {
    return 'fail';
  }
}
var b;

// run the functions
getDate();
convertToString(7867);
dataType(true);
dataType(3);
dataType('Pizza');
dataType(null);
dataType(parseInt('pizza'));
dataType(b);
addNumbers(3, 4);
convertToNumber('14');
twoTrue(3, 4);
oneTrue(13, 4);
noTrue(13, 4);
