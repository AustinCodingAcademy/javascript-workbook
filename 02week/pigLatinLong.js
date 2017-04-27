'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function wordToPig(thing) {
  let x = thing.toLowerCase();
  const vwl = ["a","e","i","o","u","y"];
  let pos = [];
  for (var key in vwl) {
    if (x.indexOf(vwl[key]) > -1) {
      pos.push(x.indexOf(vwl[key]));
    }
  }
  let low = Math.min.apply(null, pos);
  let firstVwl = (low===0?'y':'');
  return (
    x.slice(low) + x.slice(0,low) + firstVwl + 'ay'
  );
}

function pigLatin(word) {
  let sentence = word.split(' ');
  for (var key in sentence) {
    sentence[key] = wordToPig(sentence[key]);
  }
  return sentence.join(' ');
}

function getPrompt() {
  rl.question('\nWord: ', (answer) => {
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
