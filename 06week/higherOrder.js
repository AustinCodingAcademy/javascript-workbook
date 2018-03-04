'use strict';

const assert = require('assert');

const forEach = (arr, callback) => {
	// Your code here
	// Create a forEach() function that takes an array of items and a function
	// that runs the function arr.length number of times.

	for (let i = 0; i < arr.length; i++) {
		callback();
	}
};

const map = (arr, callback) => {
	// Your code here

	// Create a map() function that takes an array of items and a function that
	// returns an array with each item manipulated by that function.

	// Have an empty array
	const arr2 = [];
	arr2.forEach(item => {
		callback(item);
		arr2.push(callback(item));
	});
	return arr;
};

const filter = (arr, callback) => {
	// Your code here
	// Create a filter() function that takes an array of items and a function that
	// returns an array with only the items that return true in the function.

	const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.forEach(items => {
		return items > 5;
	});
};

const some = (arr, callback) => {
	// Your code here

	const arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	const even = num => {
		return arr3 % 2 === 0;
	};
};
return false;

const everyThing = (arr, callback) => {
	// Your code here
	return arr % 2 === 0;
};
console.log([20, 21, 22, 23, 24, 25, 26].every(everyThing)); // returns false
console.log([2, 4, 12, 20, 18, 40, 22, 60].every(everyThing)); // returns true

if (typeof describe === 'function') {
	describe('#forEach()', () => {
		it('should call the callback the array.length number of times', () => {
			let count = 0;
			forEach([1, 2, 3], () => {
				count++;
			});
			assert.equal(count, 3);
		});
	});

	describe('#map()', () => {
		const arr = [1, 2, 3];
		const mapped = map(arr, num => {
			return num * num;
		});
		it('should return new array with mapped items', () => {
			assert.deepEqual(mapped, [1, 4, 9]);
		});
		it('should not affect the original array', () => {
			assert.deepEqual(arr, [1, 2, 3]);
		});
	});

	describe('#filter()', () => {
		it('should return an array of items that pass the predicate test', () => {
			const filtered = filter([1, 2, 3], num => {
				return num % 2 === 0;
			});
			assert.deepEqual(filtered, [2]);
		});
	});

	describe('#some()', () => {
		let count = 0;
		const somed = some([1, 2, 3, 4], num => {
			count++;
			return num % 2 === 0;
		});
		it('should return true if at least one item passes the predicate test', () => {
			assert.equal(somed, true);
		});
		it('should stop at the first item that passes the predicate test', () => {
			assert.equal(count, 2);
		});
		it('should return false if no items pass the predicate test', () => {
			const somed = some([1, 3, 5], num => {
				return num % 2 === 0;
			});
			assert.equal(somed, false);
		});
	});

	describe('#every()', () => {
		it('should return true if at all passes the predicate test', () => {
			const everied = every([2, 4, 6], num => {
				return num % 2 === 0;
			});
			assert.equal(everied, true);
		});
		let count = 0;
		const everied = every([2, 3, 4, 5], num => {
			count++;
			return num % 2 === 0;
		});
		it('should return false if any item fails the predicate test', () => {
			assert.equal(everied, false);
		});
		it('should stop at the first item that fails the predicate test', () => {
			assert.equal(count, 2);
		});
	});
} else {
	console.log('Only run the tests on this one!');
}
