// 'use strict';
//
// document.addEventListener('DOMContentLoaded', () => {
// let moved = {};
// let myStack = document.querySelectorAll('.theStack'); // assign to a var for ease of access
// let myBlock = document.querySelectorAll('.theBlock'); // assign to a var for ease of access
//
//   Array.from(myBlock).forEach((block) => {
//     block.addEventListener('click', (e) => {
//       e.stopPropagation(); // Stops from access all elements below selected
//       if (!moved.target) {
//         moved = { target: e.target, size: e.target.attributes[0].value, parent: e.target.parentNode };
//         e.target.parentNode.removeChild(e.target); // Have to go through parent node to remove child node
//       }
//     });
//   });
//
//   Array.from(myStack).forEach((stack) => {
//     stack.addEventListener('click', (e) => {
//       let last = e.target.children[e.target.children.length - 1];
//       let lastBlock = last && parseInt(last.attributes[0].value, 10);
//       let size = document.querySelectorAll('div .theBlock');
//       if (!lastBlock || size.dataset.block > last.moved.value) {
//         e.target.appendChild(moved.target);
//         moved.target = false;
//         checkWinner();
//       } else {
//         moved.parent.appendChild(moved.target);
//         moved.target = false;
//       }
//     });
//   });
//
//
//   function checkWinner () {
//     if ((myStack[1].children.length === 4) || (myStack[2].children.length === 4)) {
//       alert('A winner is you!');
//     }
//   }
// });

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let stack = document.querySelectorAll('[data-stack]');
 let block = document.querySelectorAll('[data-block]');
  let moved = {};

  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
      moved = { target: e.target, size: e.target.attributes[0].value , parent: e.target.parentNode };
      e.target.parentNode.removeChild(e.target);
    });
  });

 document.querySelectorAll('[data-stack]').forEach((stack) => {
  stack.addEventListener('click', (e) => {
    let last = e.target.children[e.target.children.length - 1];
    let lastSize = last && parseInt(last.attributes[0].value, 10); // value return a string, this turns the value into a number

    if (!lastSize || lastSize > moved.size) {
      e.target.appendChild(moved.target);
      moved.target = 0;
      checkForWin();
    } else {
      moved.parent.appendChild(moved.target);
      moved.target = 0;
    }
  });
});

function checkForWin () {
  // win function looks at the stack children and if there are 4 in any stack alert for the win
  if ((stack[1].children.length === 4) || (stack[2].children.length === 4)) {
    alert("You've won!");
  }
}
});
