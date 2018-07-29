'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Plan:
//function pigLatin() - parent function
//isInputValid() - evaluation function
//order of nested functions:
//lowercase and trim
//vowel loop? for yay
//complex word loop until you find a vowel 
//simple word

// const checkForVowel = (word)=>{
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   for (var i = 0; i < word.length; i++) {
//     return word.indexOf(vowel)
//   }
  
// }


//changes the input word into a pig latin word (simple)
const changeWord = (word)=>{
  const wordArr = word.split('');
  // const firstLetter = wordArr[0];
  // const vowels = new Array('a', 'e', 'i', 'o', 'u');
  // console.log(wordArr[0].includes(vowels))
  const firstLetter = wordArr.shift();
  const pushFirstLetter = wordArr.push(firstLetter);
  const ay = 'ay';
  const pushAy = wordArr.push(ay);
  const completeWord = wordArr.join('');
  return completeWord
}

//checks to see if the word is not a number
const isInputValid = (word)=>{
  //return true or false
  const pattern = new RegExp(/[a-z]/);
  let i = 0;

  for(i = 0; i<word.length; i++){
    if(pattern.test(word[i]) !== true){
      return false;
    }
  } 
  return true;

  //other things I tried:

  // return isNaN(word)
  // const letters = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  // return word.match(/[letters]/g);
  
}

//the varible word is whatever string the user inputs
function pigLatin(word) {

  //change word to a lowercase trim word
  word = word.toLowerCase().trim()

  //if word is not a number execute this code else return 'please enter a valid word'
  if(isInputValid(word)){
    return changeWord(word)
  } else {
    return 'please enter a valid word'
  }
}

//dont do anything to this
function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
