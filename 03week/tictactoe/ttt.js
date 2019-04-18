let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function horizontalWin() {
  if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
    printWinner();
  } else if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
    printWinner();
  } else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
    printWinner();
  } else if (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
    printWinner();
  } else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
    printWinner();
  } else if (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
    printWinner();
  }
  return true;
}

function verticalWin() {
  if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
    printWinner();
  } else if (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
    printWinner();
  } else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
    printWinner();
  } else if (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
    printWinner();
  } else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
    printWinner();
  } else if (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
    printWinner();
  }
  return true;
}

function diagonalWin() {
  if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
    printWinner();
  } else if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
    printWinner();
  } else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
    printWinner();
  } else if (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
    printWinner();
  }
  return true;
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  return true;
}

function printWinner() {
  let declareWinner = document.getElementById('container');
  let winText = document.getElementById('b11');
  winText.innerHTML = playerTurn + ' WINS';
  declareWinner.style.pointerEvents = 'none';
}

function ticTacToe(row, column) {
  // First we check to see if the box we selected is blank.
  if (board[row][column] === ' ') {
    // The Switch statement checks to see whether playerTurn is X or O
    switch (playerTurn) {
    // If it's X it does the following:
      case 'X':
        // First, it sets that box on the board to X
        board[row][column] = playerTurn;
        // Then, it declares a variable setX to the ID of the box in the HTML
          let setX = document.getElementById('b'+row+column);
        // Then it sets the inner HTML of that box as X
        // This will ensure the user sees an X show up in the browser
          setX.innerHTML = 'X';
        // Then it checks to see if the placement of that X created a win for X       
          checkForWin();
        // If there's no win, playerTurn is then set to O so it's O's turn
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
  } else {
    // If the box we selected is NOT blank, we ask the user to try again.
    ticTacToe();
  }
}