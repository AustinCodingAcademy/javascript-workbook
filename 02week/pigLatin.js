'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const vowelsAsArray = ['a', 'e', 'i', 'o', 'u'];

const pigLatin = (word) => {
  if (validation(word)) {
    word = convert(word);
    let englishWord = word;
    englishWord = word.split('');
    if (vowelsAsArray.includes(word[0])) {
      return word += 'yay';
    } else {
      for (let i = 0; i < englishWord.length; i++) {
        if (!vowelsAsArray.includes(word[i])) {
          englishWord.push(englishWord.shift());

        } else {
          englishWord.push('ay');
          return englishWord.join('');
        }
      }
    }
  } else {
    return console.log('Bad Input, Yo');

  }
}

const validation = (word) => {
  if (typeof word === 'string') {
    return true;
  }else{
    return false;
  }
}

const convert = (word) => {
  let trimmedWord = word.trim();
  let convertedWord = trimmedWord.toLowerCase();
  return convertedWord;
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
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
