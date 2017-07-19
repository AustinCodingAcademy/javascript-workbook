'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(str) {
  let validateStr = str.split('')
  for (var i = 0; i < validateStr.length; i++) {
    if (parseInt(validateStr[i])) {
      return 'This string cannot contain numbers';
    }
  }
  const vowels = 'aeiou'.split('')
  const results = []
  str = str.trim().toLowerCase()
  if (vowels.includes(str[0])) {
    return `${str}yay`
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        results.push(str[i])
      } else {
          let newString = str.split('').splice(str.indexOf(str[i]), str.length)
         return newString.join('') + results.join('') + 'ay'
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
    it('should not container numbers', () => {
      assert.equal(pigLatin('m1212'), "This string cannot contain numbers");

    });

  });
} else {

  getPrompt();

}
