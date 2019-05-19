var player;
var prevPlayer;

function selectX() {
  player = "X";
}

function selectO() {
  player = "O";
}

function horizontalWin() {
  // Your code here
  if (
    document.getElementById("0,0").innerText == document.getElementById("0,1").innerText &&
    document.getElementById("0,1").innerText == document.getElementById("0,2").innerText 
  ) {
    return true;
  } else if (
    document.getElementById("1,0").innerText == document.getElementById("1,1").innerText &&
    document.getElementById("1,1").innerText == document.getElementById("1,2").innerText
  ) {
    return true;
  } else if (
    document.getElementById("2,0").innerText == document.getElementById("2,1").innerText &&
    document.getElementById("2,1").innerText == document.getElementById("2,2").innerText
  ) {
    return true;
  } else return false;
}

function verticalWin() {
  // Your code here
  if (
    document.getElementById("0,0").innerText == document.getElementById("1,0").innerText &&
    document.getElementById("1,0").innerText == document.getElementById("2,0").innerText
  ) {
    return true;
  } else if (
    document.getElementById("0,1").innerText == document.getElementById("1,1").innerText &&
    document.getElementById("1,1").innerText == document.getElementById("2,1").innerText
  ) {
    return true;
  } else if (
    document.getElementById("0,2").innerText == document.getElementById("1,2").innerText &&
    document.getElementById("1,2").innerText == document.getElementById("2,2").innerText
  ) {
    return true;
  } else return false;
}

function diagonalWin() {
  // Your code here
  if (
    document.getElementById("0,0").innerText == document.getElementById("1,1").innerText &&
    document.getElementById("1,1").innerText == document.getElementById("2,2").innerText
  ) {
    return true;
  } else if (
    document.getElementById("0,2").innerText == document.getElementById("1,1").innerText &&
    document.getElementById("1,1").innerText == document.getElementById("2,0").innerText
  ) {
    return true;
  } else return false;
}

function checkForWin() {
  // Your code here
  if (diagonalWin() || horizontalWin() || verticalWin()) {
    //This displays that someone won
    console.log("You won!");
    //This is checking for win and stops game
    return true;
  }
  return false;
}

var counter = 0;

function ticTacToe(el) {
  counter ++;
  console.log(counter)
  if (!player) {
    alert("Select a player");
  } else if (prevPlayer === player) {
    alert("Please select different player!");
  } else {
    el.innerText = player;
    prevPlayer = player;
  }
  if (counter > 4){
    if (checkForWin()) {
      console.log("player " + player + " wins");
    } else {
      console.log("keep playing");
    }
  }
}

// function ticTacToe(event) {
//   let dom = document.getElementById("cell"+event.target.value)
//   console.log(dom)
//   arr = event.target.value.split(',')
//   let row=arr[0]
//   let col=arr[1]
//   console.log(arr)
// }
