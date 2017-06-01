document.addEventListener('DOMContentLoaded', (index.html) => {

  //Board setup
  var board = [['-','-','-'],['-','-','-'],['-','-','-']];

  //Potential player moves
  var playerX = 'playerX';
  var playerO = 'playerO';

  function notTaken(board,row,col) {
    return (board[row][col] == '-');
  }

  function playerX(board,row,col) {
    return (board[row][col] == 'X');
  }

  function playerO(board,row,col) {
    return (board[row][col] == 'O');
  }

  //Check for win
  function checkWinner() {
    for(i = 0; i < 10; i++); {
      console.log();
    }
    //horizontal win
    document.getElementsByClassName('row'), () => {
      if(playerX === [1, 2, 3] || [4, 5, 6] || [7, 8, 9]) {
        return alert "Player X wins!";
      }
      else{
        return alert "Player O wins!";
      }
    }
    //vertical win
    document.getElementsByTagName('column'), () => {
      if(playerX === [1, 4, 7] || [2, 5, 8] || [3, 6, 9]) {
        return alert "Player X wins!";
      }
      else{
        return alert "Player O wins!";
      }
    }
    //diagonal win
      if(playerX === [1, 5, 9] || [3, 5, 7]) {
        return alert "Player X wins!";
      }
      else{
        return alert "Player O wins!";
      }
    }
  }
});
