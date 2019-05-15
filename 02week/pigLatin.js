"use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let newWord = word
// var pigLatin = 'ay'
// newWord = word.substring(1) + word.charAt(0) + pigLatin
// console.log(newWord)


  var inputText = document.getElementById("input");
  var outputText = document.getElementById("output");
 


  document.getElementById("btn").onclick = function(){
    outputText.value = pigLatin(inputText.value);
  }


//transforms word
function pigLatin(word) {
  word = word.toLowerCase().trim();



  if (isVowel(word.charAt(0))) 
    return  word + "yay";
  else if (isVowel(word.charAt(1))) 
    return word.slice(1) + word.charAt(0) + 'ay' ;
  else if (isVowel(word.charAt(2))) 
    return word.slice(2) + word.slice(0, 2) +  'ay';
  else if (isVowel(word.charAt(3))) 
    return word.slice(3) + word.slice(0, 3) +  'ay' ;
  else 
    return "go home you are drunk"
}
 

// return word.substring(2) + word.charAt(0) + word.charAt(1) + 'ay'
//checks for vowels
function isVowel(word) {
  if (
    word === "a" ||
    word === "e" ||
    word === "i" ||
    word === "o" ||
    word === "u"
  )
    return true;
  else return false;
}

//   console.log(pigLatin('dog'))

// word1 = 'the'
// pigLatin = 'ay'
// newword1 = word1.substring(1) + word1.charAt(0) + pigLatin
// console.log(word)

// function getPrompt() {
//   rl.question("word ", answer => {
//     console.log(pigLatin(answer));
//     getPrompt();
//   });
// }

// Tests

// if (typeof describe === "function") {
//   describe("#pigLatin()", () => {
//     it("should translate a simple word", () => {
//       assert.equal(pigLatin("car"), "arcay");
//       assert.equal(pigLatin("dog"), "ogday");
//     });
//     it("should translate a complex word", () => {
//       assert.equal(pigLatin("create"), "eatecray");
//       assert.equal(pigLatin("valley"), "alleyvay");
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin("egg"), "eggyay");
//       assert.equal(pigLatin("emission"), "emissionyay");
//     });
//     it("should lowercase and trim word before translation", () => {
//       assert.equal(pigLatin("HeLlO "), "ellohay");
//       assert.equal(pigLatin(" RoCkEt"), "ocketray");
//     });
//   });
// } else {
//   getPrompt();
// }
