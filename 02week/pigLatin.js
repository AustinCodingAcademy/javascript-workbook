'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var vowels = ['a','e','i','o','u'];
var wordArray = [];
var pigLatinWord = '';

//check if word is valid
function checkWord(word) {
  if (typeof word==='string') {
    return word.trim().toLowerCase();
  }
}

//check 1st letter for vowels
function check1stLetter (word) {
  return vowels.includes(word[0])
}

//convert word to pig latin
function pigLatin(word) {
  let newWord = checkWord(word);
    if (check1stLetter(newWord)) {
      return newWord + 'yay'
    } else {
      for ( let i = 0; i < newWord.length; i++ ) {
        if (vowels.includes(newWord[i])) {
      return pigLatinWord + wordArray.join('') + 'ay' ;  
        } else {
          wordArray.push(newWord[i]);
          pigLatinWord= newWord.slice(i+1);
        }
      }
    }
}


  


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