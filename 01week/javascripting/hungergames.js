'use strict';

/**
* pick a ronadom student from this class
*
* store names in a variable- array
*
* generate a random number, less than amount in class
*
* apply the index to the array
*
* from that array, pick a random one
*
* return a name
* */

const studentArray = [];

function randomNumberInRange (top, bottom){
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}

console.log(randomNumberInRange(14, 0));
function generateRandomName() {
  const index = randomNumberInRange(studentArray.length -1, 0);
  return studentArray[index];
}
