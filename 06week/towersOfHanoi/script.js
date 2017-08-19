'use strict';

document.addEventListener('DOMContentLoaded', () => {
let moved = {};
let myStack = document.querySelectorAll('.theStack'); // assign to a var for ease of access
let myBlock = document.querySelectorAll('.theBlock'); // assign to a var for ease of access

  Array.from(myBlock).forEach((block) => {
    block.addEventListener('click', (e) => {
      e.stopPropagation(); // Stops from access all elements below selected
      if (!moved.target) {
        moved = { target: e.target, size: e.target.attributes[0].value, parent: e.target.parentNode };
        e.target.parentNode.removeChild(e.target); // Have to go through parent node to remove child node
      }
    });
  });

  Array.from(myStack).forEach((stack) => {
    stack.addEventListener('click', (e) => {
      let last = e.target.children[e.target.children.length - 1];
      let lastBlock = last && parseInt(last.attributes[0].value, 10);
      if (!lastBlock || lastBlock.moved.value > last.moved.value) {
        e.target.appendChild(moved.target);
        moved.target = false;
        checkWinner();
      } else {
        moved.parent.appendChild(moved.target);
        moved.target = false;
      }
    });
  });
  function checkWinner () {
    if ((myStack[1].children.length === 4) || (myStack[2].children.length === 4)) {
      alert('A winner is you!');
    }
  }
});
