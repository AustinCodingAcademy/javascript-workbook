"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function pigLatin(word) {
//   let positionA = word.indexOf("a");
//   let positionE = word.indexOf("e");
//   let positionI = word.indexOf("i");
//   let positionO = word.indexOf("o");
//   let positionU = word.indexOf("u");

  //make an array
  const vowels = ["a", "e", "i", "o", "u"];
  //only add to the array values greater than -1
  //math.min

  //sets all the words to lowercase and trims them
  word = word.trim().toLowerCase();
  //splitting word into indivudual letters
  var splitWord = word.split("");
  let filtered = splitWord.filter(letter => vowels.indexOf(letter) > -1);
  console.log(filtered);
  const indexFirstVowel = word.indexOf(filtered[0]);
  if (indexFirstVowel == 0) {
    return word + "yay";
  } else {
    return (
      splitWord.slice(indexFirstVowel).join("") +
      splitWord.slice(0, indexFirstVowel).join("") +
      "ay"
    );
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
