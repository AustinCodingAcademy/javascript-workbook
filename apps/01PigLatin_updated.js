'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

    word = word.toLowerCase();

    var wordArray = word.split(' ');
    var solutionArray = [];
    //console.log('wordArray is ' + wordArray);

    var wordArrayLength = wordArray.length;

    //console.log('wordArrayLength is ' + wordArrayLength);

    for (var i = 0; i <= wordArrayLength - 1; i++) {

        var thisWord = wordArray[i];

        //console.log('i is ' + i);

        //console.log('this word is ' + wordArray[i]);
        var vowelIndex = -1;

        if ((wordArray[i].indexOf('a') > -1 && wordArray[i].indexOf('a') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('a');
        }

        if ((wordArray[i].indexOf('e') > -1 && wordArray[i].indexOf('e') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('e');
        }

        if ((wordArray[i].indexOf('i') > -1 && wordArray[i].indexOf('i') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('i');
        }

        if ((wordArray[i].indexOf('o') > -1 && wordArray[i].indexOf('o') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('o');
        }

        if ((wordArray[i].indexOf('u') > -1 && wordArray[i].indexOf('u') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('u');
        }

        //if the word begins with y, treat it as a consonant and not a vowel
        if(wordArray[i].indexOf('y') != 0) {

          if ((wordArray[i].indexOf('y') > -1 && wordArray[i].indexOf('y') < vowelIndex) || vowelIndex === -1) {
              vowelIndex = wordArray[i].indexOf('y');
          }
        }
        var firstPart = wordArray[i].slice(0, vowelIndex);
        var restWord = wordArray[i].slice(vowelIndex, wordArray[i].length);

        if (vowelIndex === 0) {
            solutionArray.push(wordArray[i] + 'yay');
        } else {
            solutionArray.push(restWord + firstPart + 'ay');
        }

    }

    //console.log('solutionArray is ' + solutionArray);

    var solutionString = solutionArray.toString();
    var regex = new RegExp(',', 'g');
    solutionString = solutionString.replace(regex, ' ');

    //solutionString.replace(/,/g , "newchar");
    console.log(solutionString);
}

function getPrompt() {
    prompt.get(['word'], function(error, result) {

        console.log(pigLatin(result['word']));

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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
