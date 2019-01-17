'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  for (i =0; i < word.length; i++) {
    let y = "";
    if ( word.charAt(0)=="a" ||  word.charAt(0)=="e" || word.charAt(0)=="i" || word.charAt(0)=="o" || word.charAt(0)=="u"){
    y = word + "ay";
    return y;
    } else if (word.charAt(i)=="a" || word.charAt(i)=="e" || word.charAt(i)=="i" || word.charAt(i)=="o" || word.charAt(i)=="u"){
      y=word.slice(i)+word.slice(0,i) + "ay";
      return y;
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
