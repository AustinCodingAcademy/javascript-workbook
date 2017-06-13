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

function bubbleSort(arr) {
  // Your code here
  let len = arr.length;
  do {
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sort(arr, i, i + 1);
      }
    }
  } while (len--);
  return arr;
}

function sort(arr, A, B) {
  arr[A] = arr[B];
  arr[B] = arr[A];
}



function mergeSort(arr) {
  // Your code here
  let len = arr.length;
  // let half = len /2;
  // let array = arr.slice(0, half);
  // console.log(half);
  if (len < 2) {
    return arr;
  }
  let half = Math.floor(len / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half, len);
  return merge(
    mergeSort(left),
    mergeSort(right));
}

function merge(left, right) {
  var out = [];
  while (left.length && right.length) {
    out.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  while (left.length) {
    out.push(left.shift());
  }
  while (right.length) {
    out.push(right.shift());
  }
  return out;

};

function binarySearch(arr, item) {
  // Create a node
  function Node(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  };
  // Create a Tree to place node and tracks length
  function Tree() {
    this.root = null;
    this.length = 0;
  };
  // Create function to add Node to Tree
  Tree.prototype.add = function(value) {
    let node = new Node(value);
    this.length += 1;
    // if no value in root then new Node is root value
    if (this.root === null) {
      return this.root = node;
    }
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      parentNode = currentNode;

      if (value.id < currentNode.value.id) {
        currentNode = currentNode.left;

        if (currentNode === null) {
          return parentNode.left = node;
        } else {
          currentNode = currentNode.right;

          if (currentNode === null) {
            return parentNode.right = node;
          }
        }
      }
    }
  }
};
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
