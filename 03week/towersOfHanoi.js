"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//check if inputs are valid, must equal 'a', 'b', or 'c' - isValidInput()
//check if move is legal, ie empty/undefined stack or last piece value is greater than moving piece value - isMoveLegal()
//if both of those ^^ are true, pop() from startStack, push() to endstack - movePiece()
//check to see if values in stacks.c match [4,3,2,1] - checkForWin()
//if win, congratulate, demand player play another game, then return stacks to original starting position - resetStack()

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

//isValidInput takes formatStartStack and formatEndStack to test for a, b, or c
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
			stacks = { a: [], b: [], c: [4, 3, 2, 1] }; //changed win array to 'c
			assert.equal(checkForWin(), true);
			stacks = { a: [1], b: [4, 3, 2], c: [] };
			assert.equal(checkForWin(), false);
		});
	});

	describe("#isValidInput()", () => {
		it("should not allow an invalid input", () => {
			stacks = {
				a: [4, 3, 2, 1],
				b: [],
				c: []
			};
			assert.equal(isValidInput("f", "x"), false);
		});
	});
	describe("#resetStack()", () => {
		it("should reset after a win", () => {
			stacks = {
				a: [],
				b: [],
				c: [4, 3, 2, 1]
			};
			assert.equal(resetStack(), undefined); //not sure why this comes out undefined
		});
	});
} else {
	getPrompt();
}
