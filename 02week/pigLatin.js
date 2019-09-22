"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//study this//
function pigLatin(word) {
  let newWord = word.trim().toLowerCase();

  let vowels = "aeiou";

  function vowelsDetected(newWord) {
    for (let i = 0; i < newWord.lenth; i++) {
      if (vowels.indexOf(newWord[i]) !== -1) {
        return i;
      }
    }
  }
  //study this//
  let firstVowel = vowelsDetected(newWord);
  if (firstVowel > 0) {
    return newWord.slice(firstVowel) + newWord.slice(0, firstVowel) + "ay";
  } else {
    return newWord + "yay";
  }
}

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
