"use strict";
// function wordInput() { document.getElementById("pigLatinWord");
// }
const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const isString = formattedWord => {
	return typeof formattedWord == "string";
};

const hasOnlyLetters = formattedWord => {
	const letter = "abcdefghijklmnopqrstuvwxyz";
	let isLetter = false;
	for (let n = 0; n < formattedWord.length; n++) {
		for (let m = 0; m < letter.length; m++) {
			if (formattedWord[n] == letter[m]) {
				isLetter = true;
			}
		}
	}
	return isLetter;
};

const firstVowel = splitWord => {
	const vowel = ["a", "e", "i", "o", "u"];
	for (let x = 0; x < splitWord.length; x++) {
		for (let y = 0; y < vowel.length; y++) {
			if (splitWord[x] == vowel[y]) {
				return x;
			}
		}
	}
};

const pigLatin = word => {
	const formattedWord = word.trim().toLowerCase();
	if (isString(formattedWord) && hasOnlyLetters(formattedWord)) {
		const splitWord = formattedWord.split("");
		const theFirstVowel = firstVowel(splitWord);
		if (theFirstVowel == 0) {
			return splitWord.join("") + "yay";
		} else {
			const middle = splitWord.slice(0, theFirstVowel).join("");
			const beginning = splitWord.slice(theFirstVowel).join("");
			return beginning + middle + "ay";
		}
	} else return "Please enter words with letters!";
};

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
			assert.equal(pigLatin("Hello "), "ellohay");
			assert.equal(pigLatin(" Rocket"), "ocketray");
		});
	});
} else {
	getPrompt();
}
