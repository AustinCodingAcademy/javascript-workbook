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
  let ending = new Array();
  let firstVowelPosition = new Array();

  const somethingSomething = splitWord.find(function(element){

  });
  console.log(somethingSomething);


  for (let i=0;i<splitWord.length;i++) {//foreach (letters as letter):
    if (vowels.includes(splitWord[i])) {// if the letter is a vowel, then stop
      //the trim the array to the beginning
        //Get the position of the first vowel

        // console.log(splitWord.indexOf(splitWord[i]));

        // let firstVowelPosition = splitWord.indexOf(splitWord[i])///Get the position
        // console.log(firstVowelPosition);
    }
  }
  // console.log(ending);
  // console.log(splitWord);
  // console.log(ending);
  // return ret;

  //   if(vowels.includes(e)) {//if the element is a vowel
  //     let firstVowelPosition = a.indexOf(e)///Get the position
  //   }
  //   }
  }
  pigLatin('create')//, 'eatecray');
// assert.equal(pigLatin('car'), 'arcay');
// assert.equal(pigLatin('valley'), 'alleyvay');
