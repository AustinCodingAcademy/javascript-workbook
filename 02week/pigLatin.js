'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function nullNegativeIndex(letterIndex, word){
  if (letterIndex < 0){
    return word.length + 1;
  } else {
    return letterIndex;
  }

}
function pigLatinSentence(sentence){
  var sentenceArray = sentence.split(' ');
  console.log(sentenceArray);
  var pigSentenceArray = sentenceArray.map( pigLatin);
  var pigSentence = pigSentenceArray.join(' ');
  return pigSentence;
}

function pigLatin(word) {
  word = word.toLowerCase();
  // Your code here
  var aIndex = word.indexOf('a');
  var eIndex = word.indexOf('e');
  var iIndex = word.indexOf('i');
  var oIndex = word.indexOf('o');
  var uIndex = word.indexOf('u');


  var finishedWord = '';

  aIndex = nullNegativeIndex(aIndex, word);
  eIndex = nullNegativeIndex(eIndex, word);
  iIndex = nullNegativeIndex(iIndex, word);
  oIndex = nullNegativeIndex(oIndex, word);
  uIndex = nullNegativeIndex(uIndex, word);

  var firstVowel = Math.min(aIndex, eIndex, iIndex, oIndex, uIndex);

  //console.log((aIndex + eIndex + iIndex + oIndex + uIndex) / 5 );
  if ( firstVowel === 0){
    return word + 'yay';
  } else {
    return word.slice(firstVowel) +word.slice(0, firstVowel) + 'ay';
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatinSentence(answer) );
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
