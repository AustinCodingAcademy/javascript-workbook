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

  //places x or o on the board
  event.target.textContent = playerTurn;

  //removes event listener so same board piece can't be played:
  event.target.removeEventListener('click', changeDom);

  const row = event.target.dataset.row;
  const col = event.target.dataset.col;

  //function to change the board array:
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
  if( verticalWin() || horizontalWin() || diagonalWin() ) {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  //changes the board array:
  const turnTeller = document.querySelector('.turn-teller');
  board[row][column] = playerTurn;

  //checks for win:
  if(checkForWin()) {
    declareWinner();
  }

  if(playerTurn === 'X') {
    playerTurn = 'O';
    turnTeller.style.left = "630px";
    turnTeller.style.backgroundColor = "lightseagreen";
    //background-color: palevioletred;
  } else {
    playerTurn = 'X';
    turnTeller.style.left = "0px";
    turnTeller.style.backgroundColor = "palevioletred";
    //background-color: lightseagreen;
  }
  //left: 630px;
}

function declareWinner(){
  console.log(console.log(`Player ${playerTurn} Wins!`));
  //makes squares not clickable:
  squares.forEach(item => {item.removeEventListener('click', changeDom)});
  winnerText = document.createElement('p');
  winnerText.textContent = `Winner ${playerTurn} Wins!`;
  textContainer = document.querySelector('.winner-container');
  textContainer.appendChild(winnerText);
};