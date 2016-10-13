'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

//declare a variable to locate the first vowel, set it to undefined
var vowelIndex =-1;
//convert the word to lower case
word = word.toLowerCase();

//run through different checks to locate the first word.
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

//if the vowel is the first letter or nonexistent, just attach "yay" and return
	if (vowelIndex === 0 || vowelIndex === -1){
		return word + "yay";
		}
//if the vowel is not the first letter (and exists), slice the word at the vowel, print the rest of the word and attach the first part and "ay"
	else{
		var firstPart = word.slice(0, vowelIndex);
		var restWord = word.slice(vowelIndex,word.length);
		return restWord +firstPart+"ay";
	    }
}


/* original Code from my brain:
//set up the finalword to be returned
  	var finalword = "";
//check to see if the word begins with a vowel, if not, do the following
  	
	if (word[0] !== "a" || word[0] !== "e" ||  word[0] !== "i" || word[0] !== "o" || word[0] !== "u"){ 
//convert the first letter to letter + "ay"
		var firstletter = word[0]+"";
		while (

  		firstletter = firstletter+"ay";
//loop through the rest of the word and create a new string with the remaining letters
	for (var i=1;i<word.length;i++){
		  finalword= finalword+word[i]+"";
	  }
//put the new first string on the backend of the first 
	finalword=finalword+firstletter;
//return the final word 
	return finalword;
  	 }
//if the constenance does not
 	 else {
	  word = word + "way";
	 return word;
	 }
	 
}
*/

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

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
