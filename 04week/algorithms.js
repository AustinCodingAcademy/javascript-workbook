'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const arr = [];

for (let i = 0; i < 1000; i++) {
    arr.push(getRandomInt(0, 1000));
}

function bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
}
var a = [56, 23, 76, 5, 14, 3];

function mergeSort(arr) {

    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

console.log(mergeSort(a));


}

function binarySearch(arr, target) {
    var half = parseInt(this.length / 2);
    if (target === this[half]) {
        return half;
    }
    if (target > this[half]) {
        return half + this.slice(half, this.length).br_search(target);
    } else {
        return this.slice(0, half).br_search(target);
    }
};

l = [0, 1, 2, 3, 4, 5, 6];

console.log(l.br_search(5));

}

// Tests

if (typeof describe === 'function') {

    describe('#bubbleSort()', () => {
        it('should sort array', () => {
            const sorted = bubbleSort(arr);
            assert.deepEqual(sorted, arr.sort());
        });
    });

    describe('#mergeSort()', () => {
        it('should sort array', () => {
            const sorted = mergeSort(arr);
            assert.deepEqual(sorted, arr.sort());
        });
    });

    describe('#binarySearch()', () => {
        it('should return the index of given item if sorted array contains it', () => {
            const idx = binarySearch([2, 1, 4, 3], 3);
            assert.equal(idx, 2);
        });
        it('should return false if item not in sorted array', () => {
            const idx = binarySearch([1, 2, 3, 4], 5);
            assert.equal(idx, false);
        });
    });

} else {

    getPrompt();

}
