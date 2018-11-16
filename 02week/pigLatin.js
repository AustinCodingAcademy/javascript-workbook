"use strict";

// tests and cl stuff
const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// given variables
const vowels = ["a", "e", "i", "o", "u"];
const result_InputError = "Invalid Input.";

function pigLatin(word) {
  // Your code here
  //ensure valid input
  if (word) {
    // + should scrub word before searching for vowel (copy pasta function from rockPaperScissors.js)
    word = scrubADubDub(word);

    // + handle word that begins with a vowel (attach yay to end of word)
    if (isVowel(word[0])) {
      word += "yay";
      return word;
    }

    // get the index of the first vowel in word
    let firstVowelIndex = findVowel(word);

    // + find a way to move any and all letters before vowel to end of word ( substring() ), then add "ay" to end
    let lettersToMove = word.substring(0, firstVowelIndex);
    word = word.substring(firstVowelIndex) + lettersToMove + "ay";

    // return word
    return word;
  } else return result_InputError;
}

// + find a way to determine if a letter is a vowel (make a function)
/**
 * Function: isVowel(char)
 * Description: checks if given char matches any index of vowels array
 */
function isVowel(char) {
  // traverse vowels array
  for (var i = 0; i < vowels.length; i++) {
    // if char equals one of the vowels, return true
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}

// + find a way to determine the location(index) of first vowel in word (make a function)
/**
 * Function: findVowel(word)
 * Description: traverses through word and returns index of first vowel
 */
function findVowel(word) {
  for (var i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      return i;
    }
  }
}

/**
 * Function: scrubADubDub(str)
 * Description: applies string methods to ensure the returned string is all lowercase and contains no whitespace
 */
function scrubADubDub(str) {
  return str.toLowerCase().trim();
}

/**
 * Stuff we started with
 * =================================================================
 */

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
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
