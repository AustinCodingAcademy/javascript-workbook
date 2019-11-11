'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(input) {

  //trims words and sets to lowercase "   Dog" => "dog"
  input = input.trim().toLowerCase();

  //split into multiple words if there are spaces in between words:
  input = input.split(' ');

  function translate(word){
    //vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    //finds and stores first letter of given word
    let firstLetter = word[0];

    //will store position of first vowel
    let vowelIndex;

    //will store new word to be returned
    let newWord;

    if(vowels.includes(firstLetter)) {

      //If so, make that word
      newWord = word + 'yay';


  
    } else {

      // find the first vowel 
      for(let i = 0 ; i < word.length ; i++ ) {
  
      // For each letter from the beginning, if this letter is a vowel return the index of the first vowel and stop the loop
        if(vowels.includes(word[i])){
          vowelIndex = i;

          //target and store the consonants before the first vowel:
          let firstConsonants = word.slice(0, vowelIndex);

          //target and store the end of the word after first consnants:
          //slice from the end by multiplying word.length by -1. then add vowel index.
          //if word = Chocolate: wordlength = 9, vowel index = 2. then -9 + 2 = -7. word.slice(-7) targets 'ocolate'
          let endOfWord = word.slice((word.length*(-1) + vowelIndex));

          //build the new word and stop the loop
          newWord = endOfWord + firstConsonants + 'ay';
  
          break;
        }
      }
    }

    return newWord;
  }

  //will store translated words:
  const translatedWords = []

  input.forEach(word=>{
    translatedWords.push(translate(word));
  })

  let finalTranslation = translatedWords.join(' ');

  return finalTranslation;
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
    //'Should separate two words and return them together' 'Hop Fest' => 'Ophay Estfay'

    it('should separate two words and return them together', ()=>{
      assert.equal(pigLatin('hop fest'), 'ophay estfay');
      assert.equal(pigLatin('bright bird'), 'ightbray irdbay');
      assert.equal(pigLatin('eek yikes'), 'eekyay ikesyay');
    })

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
