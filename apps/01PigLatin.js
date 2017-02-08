'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pigLatin(word) {

    // Your code here
    console.log(rl);

    //spec 1 - ensure word is converted to lower case
    word = word.toLowerCase();


    var firstLetter = word[0]; ///track the first character

    var vowelIndex = -1; // Set it to assume there are no vowels & -1 is the default value of index0f when not found

    if ((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('a');
        console.log('vowelIndex ' + vowelIndex)
    }
        else if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('e');
    }
        else if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('i');
    }
        else if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('o');
    }
        else if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('u');
    } // end of ifs

// start concat
    if (vowelIndex === 0){
      //  console.log(word);
        return word + 'yay'; //concatenate if word begins with vowel
    }

console.log(word);
    var firstPart = word.slice(0, vowelIndex); // start at point first vowel
    var restWord = word.slice(vowelIndex, word.length); //put rest of word after vowel

    return restWord + firstPart + 'ay'; //concatenate words with vowel first
}


function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#pigLatin()', function() {
        it('should translate a simple word', function() {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', function() {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', function() {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', function() {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}
