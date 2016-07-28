'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();



    function pigLatin(word)  {
        var vowelIndex = 0;

            while(!isVowel(word[vowelIndex]))   {
                vowelIndex = vowelIndex+1;
            }
            if(vowelIndex === 0){
                return (word+'yay').toLowerCase();
            }

            else {
            var consonants = word.slice(0, vowelIndex);
            var remainder = word.slice(vowelIndex);

            return (remainder+consonants+'ay').toLowerCase();
        }

    }
    function isVowel(letter)  {
        if (letter=== 'a' || letter=== 'e' || letter=== 'i' || letter=== 'o' || letter=== 'u'){
            return true;
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
