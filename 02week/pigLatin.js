"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  let tempWord = word.trim().toLowerCase();
  tempWord = tempWord.split("");
  if (
    tempWord[0] === "a" ||
    tempWord[0] === "e" ||
    tempWord[0] === "i" ||
    tempWord[0] === "o" ||
    tempWord[0] === "u"
  ) {
    const yay = "yay";
    tempWord = tempWord.join("").concat(yay);

    console.log(tempWord);
    return tempWord;
  } else {
    let consonantWord = [];
    for (let i = 0; i < word.length; i++) {
      if (
        tempWord[i] !== "a" &&
        tempWord[i] !== "e" &&
        tempWord[i] !== "i" &&
        tempWord[i] !== "o" &&
        tempWord[i] !== "u"
      ) {
        consonantWord.push(tempWord[i]);
      } else {
        let oldWorld = tempWord.slice(i, tempWord.length).join("");
        consonantWord = consonantWord.join("");
        oldWorld = oldWorld.concat(consonantWord) + "ay";
        console.log(oldWorld);
        return oldWorld;
        break;
      }
    }
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
