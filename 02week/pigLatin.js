'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//function will return word in piglatin
function pigLatin(str) {
  //arr1 to new array
  const arr1 = arr2(str);
  if(arr1 > 0) {
    //if it doesnt start with a vowel, select first half of letters
    //add to end of word and add "ay"
    return str.slice(arr1) + str.slice(0, arr1) + 'ay';
  }
  //if it starts with a vowel, return with "yay" at end of word
  return str + "yay";
}
//
function arr2(str) {
  for (let i=0; i<str.length; i++) {
    //locate vowel and check value and type
    if ("aeiou".indexOf(str[i]) !== -1) {
      return i;
    }
  }
}

// console.log(pigLatin("hello"));



  //call function isVaild()- checks lowercase and trim white space and if its a string
  //first check if word starts with a vowel, no symbols, no numbers
  //if word starts with a vowel, just add 'yay' to end of word

  // use split() to insert string into array

  //use for loop() through array to check for a vowel




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
