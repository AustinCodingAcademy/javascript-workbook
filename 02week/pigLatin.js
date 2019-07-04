'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

	// scrub the word and convert word to arry
	word = word.trim().toLowerCase().split('');

	// vowles arry
	let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	// newWord arry
	let newWord = [];

	// check if first letter is a vowel
    if ( vowels.includes(word[0]) ) {

        // make the newWord, the word but not as an arry
        newWord = word.join('');

        // add our pig latin
        newWord += "yay";

    } else {

        // loop through the word arry
        for ( let i = 0; i <= word.length; i++ ) {

            // if the word contains a vowel
            if ( !(vowels.includes(word[i]) ) ) {

                // add consonants to new word
                newWord.push(word[i]);

            } else {

                // slice the word from the vowel to the end, concat the newWord, and join it to a string
				newWord = word.slice( i, word.length ).concat(newWord).join('');

                // add our pig latin
                newWord += "ay";

                // break from loop
				break;
				
            }
        }
    }
        
    return newWord;
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
