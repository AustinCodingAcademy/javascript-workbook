'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  (function playGame() {
    const playerTurn = 1;
    let dataCells = document.querySelectorAll('div[data-cell]');
    console.log(dataCells);

    dataCells.forEach(function (cell) {
      cell.addEventListener('click', onGridClick);
    });

    function onGridClick(event) {
      console.log(`${event.type} got fired`);
    }

    (function playerActions() {
    })();
  })();
});
