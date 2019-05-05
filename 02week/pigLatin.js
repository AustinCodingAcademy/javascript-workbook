'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  const vowels = ['a','e','i','o','u','y'];
  isConsonant = function(vowels, input) {
    if (vowels.includes(input)) {
      return true;
    } else {return false;}

  }
  console.log(isConsonant(vowels,'a'));
  
  //if the first letter is consonant
  //check if (isConsonant)

  const splitWord = word.split('');
  console.log(splitWord);

    if(vowels.includes(e)) {//if the element is a vowel
      let firstVowelPosition = a.indexOf(e)///Get the position
      array.splice
    }
  });
  // return tranlastion;
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
