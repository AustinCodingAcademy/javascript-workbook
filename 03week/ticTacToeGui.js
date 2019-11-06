console.log('Tic Tac Tow GUI here')

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function test (event) {
  console.log(event)
}

function changeDom(event) {
  event.target.textContent = playerTurn;
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;
  ticTacToe(row, col);
}

const squares = document.querySelectorAll('.board-square');

squares.forEach(item => {item.addEventListener('click', changeDom)});



function horizontalWin() {
  // Your code here

  for (let i = 0 ; i < board.length ; i++) {
    if (
      board[i][0] === playerTurn &&
      board[i][1] === playerTurn &&
      board[i][2] === playerTurn
      ) {
      return true
    } 
  }
}

function verticalWin() {
  // Your code here
  // board[0][1] board[1][1] board[2][1]
  for(let i = 0 ; i < board.length ; i++) {
    if (
      board[0][i] === playerTurn && 
      board[1][i] === playerTurn && 
      board[2][i] === playerTurn
    ) {
      return true;
    }
  }
}

function diagonalWin() {
  // Your code here
  if(
    board[0][0] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][2] === playerTurn
  ) {
    return true
  } else if (
    board[0][3] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][0] === playerTurn
  ) {
    return true;
  } else {
    return false;
  }

}

function checkForWin() {
  // Your code here
  if( verticalWin || horizontalWin || diagonalWin ) {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
  (playerTurn === 'X') ? playerTurn = 'O' : playerTurn = 'X';
}