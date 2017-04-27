'use strict';


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
word = word.toLowerCase();

var sa = word.search('a')
var se = word.search('e')
var si = word.search('i')
var so = word.search('o')
var su = word.search('u')

var lowestVowel = word.length

if (sa < lowestVowel && sa != -1){
  lowestVowel = sa;
}
if (se < lowestVowel && se != -1){
  lowestVowel = se;
}
if (si < lowestVowel && si != -1){
  lowestVowel = si;
}
if (so < lowestVowel && so != -1){
  lowestVowel = so;
}
if (su < lowestVowel && su != -1){
  lowestVowel = su;
}
if (lowestVowel === 0){
  return word + 'yay';
}
return word.slice(lowestVowel) + word.slice(0, lowestVowel) + 'ay';

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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
