"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const vowels = ["a", "e", "i", "o", "u"];
const result_InputError = "Invalid Input.";

function pigLatin(word) {
  // Your code here
  // + should scrub word before searching for vowel (copy pasta function from rockPaperScissors.js)


  // + find a way to determine if a letter is a vowel (make a function)
  // + find a way to determine the location(index) of first vowel in word

  // + handle word that begins with a vowel (attach yay to end of word)

  
  // + find a way to move any and all letters before vowel to end of word ( substring() )


}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

/**
 * Function: isVowel(char)
 * Description: checks if given char matches any index of vowels array
 */
function isVowel(char) {
  // traverse vowels array
  // if char equals one of the vowels, return true
  // else, return false
}

/**
 * Function: scrubADubDub(str)
 * Description: applies string methods to ensure the returned string is all lowercase and contains no whitespace
 */
function scrubADubDub(str) {
  return str.toLowerCase().trim();
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
