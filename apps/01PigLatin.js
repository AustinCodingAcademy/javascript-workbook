'use strict';
var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) 
{
    var vowelIndex = 0;

//See if the first letter is a vowel.------------------------

    while(!isVowel(vowelIndex)) 
        { 
        vowelIndex = vowelIndex + 1; 
        }
    if(vowelIndex===0)
        {
        return word + 'yay';
        }    
            else 
            {
            var consonants = word.slice(0, vowelIndex);
            var remainder = word.slice(vowelIndex);
            return (remainder+consonants+"ay").toLowerCase();    
            }
}



var firstLetter = word[0];

if(word[0] === 'a' || word[0] === 'e' ||  word[0] === 'i' ||  word[0] === 'o' || word[0] === 'u') 
    {
    return word + "ay";
    }



return word.replace(firstLetter, '') + firstLetter + 'ay';

}




function isVowel(letter) {
(letter[0] === 'a' || letter[0] === 'e' ||  letter[0] === 'i' ||  letter[0] === 'o' || letter[0] === 'u')
    {
    return true;
    }

 }

function notVowel(letter) {
!(letter[0] === 'a' || letter[0] === 'e' ||  letter[0] === 'i' ||  letter[0] === 'o' || letter[0] === 'u')
    {
    return true;
    }

 }



else (word[1])
{

}

//--------------DIIFERENT APPROACH------keep looping until it finds.  

var index = 0

var isVowel = (word[0] === 'a' || word[0] === 'e' ||  word[0] === 'i' ||  word[0] === 'o' || word[0] === 'u');
var notVowel = !(word[0] === 'a' || word[0] === 'e' ||  word[0] === 'i' ||  word[0] === 'o' || word[0] === 'u');

while (word = notVowel)
    {
    index+1;    
    }












function getPrompt() {
    prompt.get(['word'], function (error, result) {

        console.log( pigLatin(result['word']) );

        getPrompt();
    });
}


// Tests-------------------------------------------

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

