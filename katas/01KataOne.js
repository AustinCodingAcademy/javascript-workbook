'use strict';

var assert = require('assert');

// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

//var test = "is2 Thi1s T4est 3a";
//order(test) 

function order(words) {
    // Your code here
    var arr = words.split(' ');
	arr.sort(function(a, b) {
		if (Number(a.match(/\d+/)[0]) < Number(b.match(/\d+/)[0]))
			return -1;
		else if (Number(a.match(/\d+/)[0]) > Number(b.match(/\d+/)[0]))
			return 1
		else
			return 0
	});
	return arr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"

// Tests

describe('#order()', function () {
    it('Sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result', function () {
        assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
        assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    });
    it('If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.', function () {
        assert.equal(order(""), "");
    });
});
