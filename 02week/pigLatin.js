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

  // Multiple Words iteration
  for (let i = 0; i < words.length; i++) {
    const splitWords = words[i]
      .toLowerCase()
      .trim()
      .split("");
    console.log(splitWords);
    for (let i = 0; i < splitWords.length; i++) {
      for (let v = 0; v < vowels.length; v++) {
        if (splitWords[i][0] === vowels[v]) {
          console.log(splitWords[i]);
          // return `${splitWords[i].join("")}yay`;
        }
      }
    }
  }

  // Dinh Way for multiple words: split entries into array at space. make variable words
  // Make for Loop to run through new array words.[i]. pass words[i] into piglatin function.

  // for (let w = 0; w < words.length; w++) {
  //   const splitWords = words[w]
  //     .toLowerCase()
  //     .trim()
  //     .split("");
  //   console.log(Object.prototype.toString.call(splitWords), splitWords, w);
  //   splitWords.forEach(function(element) {
  //     for (let e = 0; e < element.length; e++)
  //       for (let v = 0; v < vowels.length; v++) {
  //         if (element[0] === vowels[v]) {
  //           console.log(element[0], vowels);
  // }
  // if (element[e] === vowels[v]) {
  //   return `${splitWords[element].join("")}yay`;
  // }
  // if (element[0] === vowels[v]) {
  //   return `${splitWord.join("")}yay`;
  // }
  // }
  // });
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
