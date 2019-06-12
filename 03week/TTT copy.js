    

    // 'use strict';

    // const assert = require('assert');
    // const readline = require('readline');
    // const rl = readline.createInterface({
    // input: process.stdin,
    // output: process.stdout
    // });
    
    // let plyr
    // let pPlayer

    // function selectX (){
    //     plyr = 'X'
    //     console.log('player:', plyr)
    // }
    // function selectO (){
    //     plyr = 'O'
    // }
    // function mark(el){
    //     if (!plyr) {
    //         alert('select player')
    //     } else if (pPlayer === plyr) {
    //         alert('Pick New Player')
    //     } else{   
    //     el.innerText = plyr
    //     pPlayer = plyr
    //     }
    // }
const plyr = 'X'
const comp = 'Y'

    let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
    ];

    document.getElementById('column').addEventListener("click", ticTacToe());
    const i = this.data('i');
    const j = this.data('j')
    grid[i][j] = plyr


    function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
    }




    function horizontalWin() {
        if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
        return true;
        } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") {
        return true;
        } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") {
        return true;
        }
        }


    function verticalWin() {
    if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
        return true;
        } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
        return true;
        } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
        return true;
        }}

    function diagonalWin() {
        if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
            return true;
        } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
            return true;
        }
    }

    function checkForWin() {
    if (verticalWin() || horizontalWin() || diagonalWin()) return true;
    return false;
    }

    function ticTacToe(row, column) {
        let playerTurn = 'X';
        board[row][column] = playerTurn;
        if(playerTurn === 'X')
        playerTurn === 'O';
        else(
        playerTurn = 'X');
    }

    function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
        ticTacToe(row, column);
        getPrompt();
        });
    });

    }
  

   