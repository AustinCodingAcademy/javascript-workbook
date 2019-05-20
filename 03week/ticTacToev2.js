
let player = "X";
let canMove = true;

const box1 = document.getElementById("0,0");
const box2 = document.getElementById("0,1");
const box3 = document.getElementById("0,2");
const box4 = document.getElementById("1,0");
const box5 = document.getElementById("1,1");
const box6 = document.getElementById("1,2");
const box7 = document.getElementById("2,0");
const box8 = document.getElementById("2,1");
const box9 = document.getElementById("2,2");

// Your code

// checks all possibilities for horizontal win
const horizontalWin = () => {
  if (
    box1.innerText &&
    box1.innerText === box2.innerText &&
    box2.innerText === box3.innerText
  ) {
    return true;
  } else if (
    box4.innerText &&
    box4.innerText === box5.innerText &&
    box5.innerText === box6.innerText
  ) {
    return true;
  } else if (
    box7.innerText &&
    box7.innerText === box8.innerText &&
    box8.innerText === box9.innerText
  ) {
    return true;
  } else {
    return false;
  }
};
// Your code here

// checks all possibilities for vertical wins
const verticalWin = () => {
  if (
    box1.innerText &&
    box1.innerText === box4.innerText &&
    box4.innerText === box7.innerText
  ) {
    return true;
  } else if (
    box2.innerText &&
    box2.innerText === box5.innerText &&
    box5.innerText === box8.innerText
  ) {
    return true;
  } else if (
    box3.innerText &&
    box3.innerText === box6.innerText &&
    box6.innerText === box9.innerText
  ) {
    return true;
  } else {
    return false;
  }
};

// Your code here

// checks all possibilties for diagonal wins
const diagonlaWin = () => {
  if (
    box1.innerText &&
    box1.innerText === box5.innerText &&
    box5.innerText === box9.innerText
  ) {
    return true;
  } else if (
    box3.innerText &&
    box3.innerText === box5.innerText &&
    box5.innerText === box7.innerText
  ) {
    return true;
  } else {
    return false;
  }
};

const checkForWin = () => {
  const announceWinner = document.getElementById("announce-winner");
  if (diagonlaWin() || horizontalWin() || verticalWin()) {
    announceWinner.innerHTML = `Player ${player} won!`;
    return true;
  }
  return false;
};

function checkForDraw() {
  // evaluates if all boxes have been clicked on 
  if (
    box1.innerHTML &&
    box2.innerHTML &&
    box3.innerHTML &&
    box4.innerHTML &&
    box5.innerHTML &&
    box6.innerHTML &&
    box7.innerHTML &&
    box8.innerHTML &&
    box9.innerHTML 
  ) {
    const announceWinner = document.getElementById("announce-winner");
    announceWinner.innerHTML = "Draw!";
    return true;
  }

  return false;
}

// switches players after each move
const switchPlayer = () => {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
};

function ticTacToe(id) {
  if (!canMove) return;
  const square = document.getElementById(id);
  // if square has content do nothing
  if (square.innerHTML) return 
  square.innerHTML = player;
  if (checkForWin() || checkForDraw()) {
    gameOver();
  }
  switchPlayer(); 
}

function gameOver() {
  let player = "X";
  // stops player from picking another square
  canMove = false;
}

function startOver() {
  const announceWinner = document.getElementById("announce-winner");
  announceWinner.innerHTML = "";
  canMove = true;
  player = "X";
  clearBoard();
}

function clearBoard() {
  box1.innerHTML = box2.innerHTML = box3.innerHTML = box4.innerHTML = box5.innerHTML = box6.innerHTML = box7.innerHTML = box8.innerHTML = box9.innerHTML =
    "";
}
