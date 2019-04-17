let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function horizontalWin() {
  if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
    console.log("X WINS TOP ROW");
  } else if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
    console.log("O WINS TOP ROW");
  } else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
    console.log("X WINS MIDDLE ROW");
  } else if (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
    console.log("O WINS MIDDLE ROW");
  } else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
    console.log("X WINS BOTTOM ROW");
  } else if (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
    console.log("O WINS BOTTOM ROW");
  }
  return true;
}

function verticalWin() {
  if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
    console.log("X WINS LEFT ROW");
  } else if (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
    console.log("O WINS LEFT ROW");
  } else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
    console.log("X WINS MIDDLE ROW");
  } else if (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
    console.log("O WINS MIDDLE ROW");
  } else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
    console.log("X WINS RIGHT ROW");
  } else if (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
    console.log("O WINS RIGHT ROW");
  }
  return true;
}

function diagonalWin() {
  if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
    console.log("X WINS DIAGONAL");
  } else if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
    console.log("O WINS DIAGONAL");
  } else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
    console.log("X WINS DIAGONAL");
  } else if (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
    console.log("O WINS DIAGONAL");
  }
  return true;
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  return true;
}

function ticTacToe(row, column) {
    switch (playerTurn) {
        case 'X':
            board[row][column] = playerTurn;
            let setX = document.getElementById('b'+row+column);
            setX.innerHTML = 'X';            
            checkForWin();
            playerTurn = 'O';
            break;
        case 'O':
            board[row][column] = playerTurn;
            let setO = document.getElementById('b'+row+column);
            setO.innerHTML = 'O';
            checkForWin();
            playerTurn = 'X';
            break;
    }
}