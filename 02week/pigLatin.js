'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  word = word.toLowerCase().trim();
//check first letter
  if (isVowel(word.charAt(0))) 
    return word + "yay";
//if second letter is consen
  else if (isVowel(word.charAt(1))) 
    return word.slice(1) + word.charAt(0) + 'ay';
//if third letter is consen
  else if (isVowel(word.charAt(2))) 
    return word.slice(2) + word.slice(0, 2) + 'ay';
//if fourth letter is consen
  else if (isVowel(word.charAt(3))) 
    return word.slice(3) + word.slice(0, 3) + 'ay';
  else return "game done"

}


// return word.substring(2) + word.charAt(0) + word.charAt(1) + 'ay'
//checks for vowels
function isVowel(word) {
if (
word === "a" ||
word === "e" ||
word === "i" ||
word === "o" ||
word === "u"
)
return true;
else return false;
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
    //test for multiple words
    //valid input, no numbers
    //is legal 
  });
} else {

  getPrompt();

}
