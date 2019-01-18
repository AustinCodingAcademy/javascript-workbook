'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  var array = word.split("");
  var newWord = '';
  var regex = /[aeiou]/gi;
  if(word[0].match(regex)) {
    newWord = word + "yay";
  } else {
    var vowelIndice = word.indexOf(word.match(regex)[0]);
    newWord = word.substr(vowelIndice) + word.substr(0, vowelIndice) + 'ay';
  }
  return newWord;
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}


module.exports = pigLatin;
