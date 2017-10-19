'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


 //is the first letter a vowel? If so, just add 'yay' at end.
  //test for complex first letters. 
  // ch th cr ph 

function pigLatin(word) {


  if( (word.charAt(0) === 'e') || (word.charAt(0) === 'a') || (word.charAt(0) === 'i') || (word.charAt(0) === 'o') || (word.charAt(0) === 'u') ) {
    return word + 'yay';
    }else 
      if((word.charAt(1) === 'r') || (word.charAt(1) === 'h') || (word.charAt(1) === 'l') || (word.slice(0, 2) === 'qu') ) {
        return word.slice(2) + word.slice(0, 2) + 'ay';
    }else{
      return word.slice(1) + word.slice(0, 1) + 'ay';
  }
  //is there a way to modify the return after it has done the above? Can the '.trim' method work at the end of the function without putting it in each return?
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
