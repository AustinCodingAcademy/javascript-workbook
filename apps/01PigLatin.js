'use strict';

var assert = require('assert');
var prompt = require('prompt');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pigLatin(word) {
    word = word.toLowerCase();
    var vowelIndex = -1; // Set it to assume there are no vowels
    //do you see anything wrong with the following code.
    if ( ( word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('a');
    }

    if ( ( word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('e');
    }

    if ( ( word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('i');
    }
    if ( ( word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('o');
    }

    if ( ( word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('u');
    }

    if ( ( word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('y');
    }
    var firstPart = word;
    var restWord = '';
    var postfix = 'ay';
    if(vowelIndex > 0){
        firstPart = word.slice(0, vowelIndex);
        restWord = word.slice(vowelIndex, word.length);
    }
    else
        postfix = 'yay';

    return restWord +firstPart + postfix;
}


function getPrompt() {
    rl.question('word ', (answer) => {
        console.log( pigLatin(answer) );
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#pigLatin()', function () {
        it('should translate a simple word', function () {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', function () {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', function () {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', function () {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}
