'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    var change = function() {
        let playerTurn = "X";
        if (playerTurn === "X") {
            playerTurn = "O"
        } else {
            playerTurn = "X"
        }
    }

    document.querySelectorAll('[data-cell]').forEach(cell => {
        cell.onclick = function() { cell. }
    })

});
