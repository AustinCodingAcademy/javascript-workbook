"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(string) {
  // Global variables
  const vowels = ["a", "e", "i", "o", "u"];
  const splitWord = string
    .toLowerCase()
    .trim()
    .split("");
  const words = string.split(" ");

  // for (let w = 0; w < words.length; w++) {
  //   const splitWords = words[w]
  //     .toLowerCase()
  //     .trim()
  //     .split("");
  //   for (let s = 0; s < splitWords.length; s++) {
  //     for (let v = 0; v < vowels.length; v++) {
  //       if (splitWords[0] === vowels[v]) {
  //         return `${splitWords.join("")}yay`;
  //       }
  //     }
  //   }
  // }

  for (let v = 0; v < vowels.length; v++) {
    if (splitWord[0] === vowels[v]) {
      return `${splitWord.join("")}yay`;
    }
  }

  for (let w = 0; w < splitWord.length; w++) {
    for (let v = 0; v < vowels.length; v++) {
      if (splitWord[w] === vowels[v]) {
        let firstPart = `${splitWord.slice(w).join("")}`;
        let secondPart = `${splitWord.slice([0], w).join("")}ay`;
        return `${firstPart}${secondPart}`;
      }
    }
  }
}

// Console
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
