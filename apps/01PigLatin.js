'use strict';
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function pigLatin(word) {
  //after the user types in a word and hits the enter key, they code right here will start running
  //take it for granted that the variable word will have whatever the user typed into it
  //your code goes here
  word = word.toLowerCase();





  
//do not type any code below this line. Do not remove this curly brace
}
//why is this function called getPrompt - what is a prompt
//how can i reorganize this to make more sense
function getPrompt() {
  //what is rl
  //what is .question
  var handleTheAnswer = function(a,b,c,lksdjfldskf){
    var translatedword = pigLatin(a);
    console.log( translatedword );
    getPrompt();
  };

  rl.question('please type in a word to translate to pig latin ', handleTheAnswer );
}
getPrompt();

