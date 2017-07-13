'use strict';
/**Pick a random student from this class
*Store names in a variable-array
*generate a random number, less than amount in class
*apply index to array
*from that array, pick a random name
*return a name
**/

const studentArray = ['dude','person','thing'];

function randomNumberInRange(top, bottom) {
  return Math.floor (Math.random()*(1 + top - bottom ))+bottom;
}


function generateRandomName(){
  const index = randomNumberInRange(studentArray.length-1, 0);
  return studentArray[index];
}
console.log(generateRandomName());
