"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

// function movePiece()
const isValidInput = x => {
	const acceptableInputs = ["a", "b", "c"];
	return acceptableInputs.includes(x);
};

// function isLegal()
const isMoveLegal = (formatStartStack, formatEndStack) => {
	const lastPiecePosition = stacks[formatEndStack].length - 1;
	const lastPieceValue = stacks[formatEndStack][lastPiecePosition];
	const movingPiecePosition = stacks[formatStartStack].length - 1;
	const movingPieceValue = stacks[formatStartStack][movingPiecePosition];
	return lastPieceValue == undefined || movingPieceValue < lastPieceValue;
};

const movePiece = (formatStartStack, formatEndStack) => {
	const movingPiecePosition = stacks[formatStartStack].length - 1;
	const piece = stacks[formatStartStack].pop(movingPiecePosition);
	stacks[formatEndStack].push(piece);
};

// function checkForWin()
const checkForWin = () => {
	return (
		stacks.c[0] == 4 && stacks.c[1] == 3 && stacks.c[2] == 2 && stacks.c[3] == 1
	);
};

const resetStack = () => {
	stacks = {
		a: [4, 3, 2, 1],
		b: [],
		c: []
	};
};

// function towersOfHanoi(startStack, endStack)

const towersOfHanoi = (startStack, endStack) => {
	const formatStartStack = startStack.trim().toLowerCase();
	const formatEndStack = endStack.trim().toLowerCase();
	if (isValidInput(formatStartStack) && isValidInput(formatEndStack)) {
		if (isMoveLegal(formatStartStack, formatEndStack)) {
			movePiece(formatStartStack, formatEndStack);
			if (checkForWin()) {
				console.log("Congratulations you win! Play again now.");
				resetStack();
			}
		} else console.log("Illegal move!");
	} else console.log("First entry should be a, b, or c!");
};

function getPrompt() {
	printStacks();
	rl.question("start stack: ", startStack => {
		rl.question("end stack: ", endStack => {
			towersOfHanoi(startStack, endStack);
			getPrompt();
		});
	});
}

// Tests

if (typeof describe === "function") {
	describe("#towersOfHanoi()", () => {
		it("should be able to move a block", () => {
			towersOfHanoi("a", "b");
			assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
		});
	});

	describe("#isMoveLegal()", () => {
		it("should not allow an illegal move", () => {
			stacks = {
				a: [4, 3, 2],
				b: [1],
				c: []
			};
			assert.equal(isLegal("a", "b"), false);
		});
		it("should allow a legal move", () => {
			stacks = {
				a: [4, 3, 2, 1],
				b: [],
				c: []
			};
			assert.equal(isLegal("a", "c"), true);
		});
	});
	describe("#checkForWin()", () => {
		it("should detect a win", () => {
			stacks = { a: [], b: [4, 3, 2, 1], c: [] };
			assert.equal(checkForWin(), true);
			stacks = { a: [1], b: [4, 3, 2], c: [] };
			assert.equal(checkForWin(), false);
		});
	});
} else {
	getPrompt();
}
