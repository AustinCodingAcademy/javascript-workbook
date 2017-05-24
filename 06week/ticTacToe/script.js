'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';

  document.querySelectorAll('[data-cell]').forEach((cell) => {
    cell.onclick = function() {
      this.innerText = playerTurn;
      if (playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X'
      }
    }
    var clear = document.getElementById("clear");

  })
})

function handleClearClick() {
  var pos = document.getElementById('[data-cell]');
  var clearId = document.getElementById("clear");
  var cell = document.querySelectorAll("[data-cell]");
  // document.onclick = function() {
  //   document.
  // }

  console.log(cell.dataset, 'cd', cell, );
  console.log(cell.innerText, cell, 'cdc');
  console.log('this is working', pos);
  console.log(clear);
}


// var article = document.getElementById('electriccars');
//
// article.dataset.columns // "3"
// article.dataset.indexNumber // "12314"
// article.dataset.parent // "cars"

/*  document.getElementById((clear) => {
      cell.onclick = function() {
        this.innerText.empty();

      }
    })
  })
})
/*function clearBoard() {
  document.getElementById('clear')  {
    cell.onclick.innerText.empty();
  };
}
*/
function horizontalWin() {
  if (document.querySelector('[data-cell= "0"]') === playerTurn && document.querySelector('[data-cell="1"]') === playerTurn && document.querySelector('[data-cell="2"]') === playerTurn ||
    document.querySelector('[data-cell="3"]') === playerTurn && document.querySelector('[data-cell="4"]') === playerTurn && document.querySelector('[data-cell="5"]') === playerTurn ||
    document.querySelector('[data-cell="6"]') === playerTurn && document.querySelector('[data-cell="7"]') === playerTurn && document.querySelector('[data-cell="8"]') === playerTurn) {
    console.log('horizontalWin pass');
    return true;
  } else {
    console.log('horizontalWin pass');

    return false;
  }
}

function verticalWin() {
  if (board[0][0] === 'playerTurn' && board[0][1] === 'playerTurn' && board[0][2] === 'playerTurn' ||
    board[1][0] === 'playerTurn' && board[1][1] === 'playerTurn' && board[1][2] === 'playerTurn' ||
    board[2][0] === 'playerTurn' && board[2][1] === 'playerTurn' && board[2][2] === 'playerTurn') {
    return true;
  } else {
    return false;
  }
}


function diagonalWin() {
  if (board[0][0] === 'playerTurn' && board[1][1] === 'playerTurn' && board[2][2] === 'playerTurn' ||
    board[2][0] === 'playerTurn' && board[1][1] === 'playerTurn' && board[0][2] === 'playerTurn') {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  }
}
// horizontalWin() || verticalWin() || diagonalWin() {
//   return true;
// }
