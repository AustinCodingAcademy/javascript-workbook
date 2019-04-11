'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  let newWord = word.trim().toLowerCase();  // trim removes spaces before or after the word
  let vowels = ['a','e','i','o','u'];

  if (vowels.includes(newWord[0])) {  // if the first letter is a vowel
    return(newWord + "yay");  // remove nothing and add 'yay' to the end of the word
  } else if (vowels.includes(newWord[1])) {  // if the second letter is a vowel
      let letter1 = newWord.charAt(0);  // obtain the first letter of the word
      let letter2 = newWord.substring(1, newWord.length)  // beginning after the first letter obtain the remainder of the word
      return(letter2 + letter1 + "ay");  // remainder of the word after the first letter + the first letter + 'ay'
  } else if (vowels.includes(newWord[2])) {  // if the third letter is a vowel
      let letter3 = newWord.substring(0, 2);  // from the beginning of the word obtain the first 2 letters
      let letter4 = newWord.substring(2, newWord.length)  // after the second letter obtain the remainder of the word
      return(letter4 + letter3 + "ay");  // remainder of the word after the second letter + the first 2 letters + 'ay'
  } else {
    return "isthay igpay atinlay eneratorgay onlyyay anslatestray ordsway omfray ethay englishyay anguagelay"
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
