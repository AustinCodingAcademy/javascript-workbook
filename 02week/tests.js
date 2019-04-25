'use strict';
//
// const assert = require('assert');
//
// assert.equal
const assert = require('assert');



function pigLatin(word) {


  // Your code here
  // console.log3(word);
  const vowels = ['a','e','i','o','u','y'];
  const splitWord = word.split('');//['c','a','r']
  console.log(splitWord);

  let ending = new String();
  let firstVowelPosition = new Number();
  let vowelPositions = new Array();

  // firstVowelPosition = (vowels.includes(splitWord[0])?0:false);
  let isFirstCharVowel =  (vowels.includes(splitWord[0])?true:false);
  
  // console.log(isFirstCharVowel)
  
  if (isFirstCharVowel) {
    splitWord.push('y','a','y');
    console.log(splitWord);
  } else {
    let ending = new Array();
    splitWord.forEach(element => {
      while (!vowels.includes(element)) {
        console.log(element);
      }
    });
  }
  // console.log(splitWord);
  //string is like ['c','a','r']
  // console.log(vowelPositions.length);
  // console.log(word.length);
}
// console.log(car);
pigLatin('cali')//, 'lleyyay');
// assert.equal(pigLatin('car'), 'arcay');
// assert.equal(pigLatin('valley'), 'alleyvay');
