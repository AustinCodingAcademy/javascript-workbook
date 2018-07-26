'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
//     word.indexOf(vowel)
//   }
  
// }

//changes the input word into a pig latin word (simple)
const changeWord = (word)=>{
  const wordArr = word.split('');
  const firstLetter = wordArr.shift();
  const pushFirstLetter = wordArr.push(firstLetter);
  const ay = 'ay';
  const pushAy = wordArr.push(ay);
  const completeWord = wordArr.join('');
  return completeWord
}

//checks to see if the word is not a number
const isInputValid = (word)=>{
  return isNaN(word)
}

//the varible word is whatever string the user inputs
function pigLatin(word) {

  //change word to a lowercase trim word
  word = word.toLowerCase().trim()
  
  //if word is not a number execute this code else return 'please enter a valid word'
  if(isInputValid(word)) {
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
