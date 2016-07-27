'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

    //First convert into lowercase.  
    word = word.toLowerCase();

    //Define the first vowel
    var vowelIndex = -1; // Set it to assume there are no vowels

    if ( ( word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('a');
} 

    if ( ( word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('e');
} 

    if ( ( word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('i');
}









//

    //1.) Make isVowel to check if its a vowel.   --DONE--
    //2.) Make a vowelIndex to count where you are.  --DONE--
    //3.) Words that start with vowels should just have 'ay'
    //4.) Else keep going until you find a vowel.
    //5.) Then take the previous consonants and put them on the end + add "ay"
    //6.) Output should be lower case.  


    //1.) isVowel returns true if something is a vowel.




    var isVowel;
    
    if (isVowel ===  ('a' || 'e' || 'i' ||  'o' || 'u') ){
        return true;
    }



    //2.) Make a vowelIndex. Then keep making it +1 until a vowel is hit.  
    var vowelIndex = 0;
    
    while (isVowel !== true){
        vowelIndex + 1;
    }



    //3.) Words that start with vowels should just have 'ay'
    if (isVowel (word[vowelIndex] === true){

    }
        
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
