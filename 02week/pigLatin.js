//student:Jon Gorman
//Assignment: pigLatin
//Instructor: Reneee Dudley
//Date: 10/14/2017

//**Whitboard
//Make a function that utilizes pigLatin game which includes the following constraints:
//must split a word back to its first vowel and add it to the end with a "ay".
  //*Use split function ".split()"
  //*must be able to look for first vowel
  //*must add the consonants to the end in original order. ie brew would be ewbray ".concat()"
//must handle small words like car and dog
//must handle larger words like "create" and "valley"
//must handle words that start in vowel, returning the word with just ay on the end. eggya
//must lowercase and trim.

//** whiteboard revision "
//find a way to index where in the string the vowel is located
//then use slice or split to remove previous consonants
// then concatonate the previous consonants with the variable = "ay"
//some more stuff....................
//is this working

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here

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
