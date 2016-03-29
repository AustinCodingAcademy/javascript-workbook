'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    
    var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
    
    
    function horizontalWin() {
    if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn ||
        board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn ||
        board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
        else {
            return false;
        }
    }

function verticalWin() {
    if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
        board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
        board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
        else {
            return false;
        }
    }

function diagonalWin() {
    if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn ||
        board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
        return true;
    }
        else {
            return false;
        }
    }

    
    function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        return true
        console.log('Player' + playerTurn + 'Won!');
    } else {
        return false
    }
}
    
    function isDraw() {
    if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn &&
        board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn &&
        board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true
        console.log('Its a Draw');
    } else {
        return false
    }
}
    
    function checkForDraw() {

    var emptySpots = 9;

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] != " ") {
                emptySpots--;
            }
        }
    }

    if (emptySpots === 0 && !checkForWin()) {
        console.log("\nCat's Game! Let's Reset...\n");
        resetBoard();
    }
}
    
    function ticTacToe(row, column) {
    if (board[row][column] == " ") {
        if (row == 0 && column == 0) {
            board[0][0] = playerTurn;
        }
        if (row == 0 && column == 1) {
            board[0][1] = playerTurn;
        }
        if (row == 0 && column == 2) {
            board[0][2] = playerTurn;
        }


        if (row == 1 && column == 0) {
            board[1][0] = playerTurn;
        }
        if (row == 1 && column == 1) {
            board[1][1] = playerTurn;
        }
        if (row == 1 && column == 2) {
            board[1][2] = playerTurn;
        }

        if (row == 2 && column == 0) {
            board[2][0] = playerTurn;
        }
        if (row == 2 && column == 1) {
            board[2][1] = playerTurn;
        }
        if (row == 2 && column == 2) {
            board[2][2] = playerTurn;
        }
    }

    if (checkForWin() == true) {
        $('#announce-winner').text("Player" + " " + playerTurn + " " + "Wins!");
        alert("Player" + " " + playerTurn + " " + "Wins!");
        $('[data-cell]').off()
    } else {
        console.log(isDraw());
    }

}
     var playerTurn = 'X';
    
     $('div[data-cell]').click(function(){
         $(this).text(playerTurn);
         
         var divDataCell = $(this).data('cell');
         
         console.log(divDataCell);
         
         if(divDataCell === 0) {
             ticTacToe(0,0);
         }else if(divDataCell === 1) {
             ticTacToe(0,1);
         }else if(divDataCell === 2) {
             ticTacToe(0,2);
         }else if(divDataCell === 3) {
             ticTacToe(1,0);
         }else if(divDataCell === 4) {
             ticTacToe(1,1);
         }else if(divDataCell === 5) {
             ticTacToe(1,2);
         }else if(divDataCell === 6) {
             ticTacToe(2,0);
         }else if(divDataCell === 7) {
             ticTacToe(2,1);
         }else if(divDataCell === 8) {
             ticTacToe(2,2);
         }
         
         
         playerTurn = (playerTurn == 'X') ? 'O' : 'X';
     })
     
     //hover effect
     $('div[data-cell]').hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "#f2f2f2");
     })
     
     $('#restart').click(function(){
         location.reload(true);
     })
      
});
