'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {
    word = word.toLowerCase();
    var firstLetter = word[0];

    if (firstLetter == 'a' || 'e' || 'i' || 'o' || 'u') {
        var pigLatinWord = word + "yay";
        return pigLatinWord;
    }
    else {
        var vowelIndex = -1;
        if((word.indexOf('a') > -1 && word.indexOf('a') < vow$ || vowelIndex === -1) { vowelIndex = wordIndexOf('a');
    } 
        if((word.indexOf('e') > -1 && word.indexOf('e') < vow$ || vowelIndex === -1) { vowelIndex = wordIndexOf('e');
    } 
        if((word.indexOf('i') > -1 && word.indexOf('i') < vow$ || vowelIndex === -1) { vowelIndex = wordIndexOf('i');
    } 
        if((word.indexOf('o') > -1 && word.indexOf('o') < vow$ || vowelIndex === -1) { vowelIndex = wordIndexOf('o');
    } 
        if((word.indexOf('u') > -1 && word.indexOf('u') < vow$ || vowelIndex === -1) { vowelIndex = wordIndexOf('u');
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
