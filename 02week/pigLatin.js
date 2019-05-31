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
  const splitWord = word.toLowerCase().trim().split('');//['c','a','r']
  
  const ending = new Array('a','y');
  const firstLetter = splitWord[0];
  const word = word.split(" ");


  if (vowels.includes(firstLetter)) {//is the first letter a vowel?
    const myTranslation = word.concat('yay'); //then add 'yay' and we are done!
    return myTranslation;
  } else {
    splitWord.push((splitWord.shift()));//remove the first consonant, send to end

    for (let i=0;i<splitWord.length;i++) {
      //check the next letters (is or isNotVowel)
      if (!vowels.includes(splitWord[i])) {//if not vowel
        splitWord.push(splitWord.shift());//remove the first vowel, sent to end.
      } else {
        const myTranslation = splitWord.join('');
        return myTranslation.concat('ay');
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
    it('Should separate two words and return them together',() => {
      assert.equal(pigLatin('Hop Fest'), 'Ophay Estfay');
    });
  });
} else {

  getPrompt();

}