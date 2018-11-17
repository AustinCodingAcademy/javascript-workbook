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
  //ensure we received a "word"
  if (word) {
    // + should scrub word before searching for vowel
    word = scrubStr(word);
    if (word === result_InputError) return result_InputError;

    // get the index of the first vowel in word
    let firstVowelIndex = findVowel(word);

    // if we didn't find a vowel
    if (firstVowelIndex < 0) {
      // check for a y
      let firstYIndex = findY(word);

      // if no vowel and no y, not a word, throw error
      if (firstYIndex < 0) return result_InputError;
      // return pig latin of weird Y word
      else return pigLatinify(word, firstYIndex);
    }

    // return pig latin
    return pigLatinify(word, firstVowelIndex);
  } else return result_InputError; // "word" was empty or undefined
}

// + find a way to determine if a letter is a vowel (make a function)
// + find a way to determine the location(index) of first vowel in word (make a function)
/**
 * Functions: isVowel(char) and findVowel(word)
 * Description: two functions that work together to locate the index of the first vowel in a string(word)
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

function findVowel(word) {
  // traverse word
  for (var i = 0; i < word.length; i++) {
    // if a letter is a vowel, return index
    if (isVowel(word[i])) {
      return i;
    }
  }
  // didnt find a vowel
  return -1;
}

/**
 * Functions: isY(char) and findY(word)
 * Description: same as isVowel(char) and findVowel(word) used in the case of words that use "Y" as its vowel representation
 */
function isY(char) {
  if (char === "y") return true;
  else return false;
}
function findY(word) {
  for (var i = 0; i < word.length; i++) {
    if (isY(word[i])) {
      return i;
    }
  }
  return -1;
}

// + find a way to move any and all letters before vowel to end of word ( substring() ), then add "ay" to end
/**
 * Function: pigLatinify(word)
 * Description: manipulates a string(word) to it's pig latin form using substring
 */
function pigLatinify(word, index) {
  // + handle word that begins with a vowel (attach yay to end of word)
  if (index === 0) return word + "yay";

  let lettersToMove = word.substring(0, index);
  return word.substring(index) + lettersToMove + "ay";
}

/**
 * Function: scrubInput(str)
 * Description: applies string methods to ensure the returned string is all lowercase and contains no whitespace
 */
function scrubStr(str) {
  let scrubbedStr = str.toLowerCase().trim();
  if (regexStr(scrubbedStr)) return scrubbedStr;
  else return result_InputError;
}

/**
 * Function: regexInput(str)
 * Description: applies a regex to given str, return true if regex true, else return false
 */
function regexStr(str) {
  if (/^[a-zA-Z]+$/.test(str)) return true;
  else return false;
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
    it("should throw an error upon receiving input that contains non letters", () => {
      assert.equal(pigLatin("123notaword"), result_InputError);
      assert.equal(pigLatin("test*="), result_InputError);
    });
    it("should throw an error upon receiving more than one word", () => {
      assert.equal(pigLatin("more then one word"), result_InputError);
      assert.equal(pigLatin("pig latin this"), result_InputError);
    });
    it("should handle weird english words that use Y as the vowel", () => {
      assert.equal(pigLatin("lynx"), "ynxlay");
      assert.equal(pigLatin("pygmy"), "ygmypay");
    });
  });
} else {
  getPrompt();
}
