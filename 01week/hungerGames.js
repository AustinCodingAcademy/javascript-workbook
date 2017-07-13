'use strict';

/*
* Pick a random student from this class
*
* Store names in a variable - array
*
* generate a random number, less than amount in class
*
* apply the index to the array
*
* from that array, pick a random name
*
* return a name
*/

const classArray = ['Cameron', 'Craig', 'Trevor', 'Ty', 'Ryan'];

function genRanNum(max, min) {
  return Math.floor(Math.random() * (1 + max - min) ) + min;
}
console.log(genRanNum(5,0));

function genRanName() {
  const index = genRanNum(classArray.length - 1, 0);
  console.log(index);
  return classArray[index];

}
console.log(genRanName());
