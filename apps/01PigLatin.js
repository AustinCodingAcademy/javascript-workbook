'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var word = 'CRaz';
var vowelIndex = -1;

function pigLatin(word) {
    // Your code here

    if ( ( word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('a');
    }
    if ( ( word.indexOf('A') > -1 && word.indexOf('A') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('A');
    }
    if ( ( word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('e');
    }
    if ( ( word.indexOf('E') > -1 && word.indexOf('E') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('E');
    }
    if ( ( word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('i');
    }
    if ( ( word.indexOf('I') > -1 && word.indexOf('I') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('I');
    }
    if ( ( word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('o');
    }
    if ( ( word.indexOf('O') > -1 && word.indexOf('O') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('O');
    }
    if ( ( word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('u');
    }
    if ( ( word.indexOf('U') > -1 && word.indexOf('U') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('U');
    }
    if ( ( word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('y');
    }
    if ( ( word.indexOf('Y') > -1 && word.indexOf('Y') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = word.indexOf('Y');
    }

    if (vowelIndex >0){
        var firstPart=word.slice(0, vowelIndex);
        var restWord=word.slice(vowelIndex, word.length);
      //  console.log(restWord.toLowerCase()+ firstPart.toLowerCase() +'ay');
        return = restWord.toLowerCase()+ firstPart.toLowerCase() +'ay';
    //    return (word);
    }
    else {
        console.log(word.toLowerCase()+'ay');
       return  = word.toLowerCase()+'ay';
    //    return (word);
         }
}



function getPrompt() {
    prompt.get(['word'], function (error, result) {

        console.log( pigLatin(result['word']) );

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
