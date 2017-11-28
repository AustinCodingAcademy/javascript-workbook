'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 0,
      player: 'X',
      board: [null,null,null,null,null,null,null,null,null]
    }
    this.players = this.players.bind(this);
  }

  players(event){
    // console logs to to make sure my players fuction is doing working when called by the onClick. Also, console logging the state.object elements lets me see that they're actually being affected as I intended
    console.log("The event object ", event);
    console.log("The element clicked ", event.target);
    console.log("The value is ", event.target.getAttribute("data-cell"));
    console.log("The current player is ", this.state.player);
    console.log("The turn counter is at ", this.state.playerTurn);
    console.log("The current player is ", this.state.board);

    // putting the state object elements into variables, so I can use them later. Also, div's data-cell attribute will allow me to target the this.state.board array, because the numbers on the div corresponds with the placement on the array
    let turnCounter = this.state.playerTurn;
    let currentPlayer = this.state.player;
    let gridNumber = event.target.getAttribute("data-cell");
    let boardGrid = this.state.board;

    // simple if-statement to allow for turns. Whenever the turn counter is even, the click will place an 'O' in the div, otherwise it will place an 'X'
    if (turnCounter % 2){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X'; 
    }

    // another if-statement to determine if the move is valid or not. If I dont have this, players would be able to override another player's move (ie, switch their 'X' for an 'O'). The if-statment only allows the move is you click on an empty (null) div
    if (boardGrid[gridNumber] === null){
    boardGrid[gridNumber] = currentPlayer;
    turnCounter = turnCounter+1;
    } else {
      alert("Invalid selection!");
    }

    // since there are only 8 ways to win Tic Tac Toe, I created 8 variables, each of which keeps track of a possibel win in this.state.board
    let HorzWin1 = [boardGrid[0],boardGrid[1],boardGrid[2]];
    let HorzWin2 = [boardGrid[3],boardGrid[4],boardGrid[5]];
    let HorzWin3 = [boardGrid[6],boardGrid[7],boardGrid[8]];
    let VerWin1 = [boardGrid[0],boardGrid[3],boardGrid[6]];
    let VerWin2 = [boardGrid[1],boardGrid[4],boardGrid[7]];
    let VerWin3 = [boardGrid[2],boardGrid[5],boardGrid[8]];
    let DiagWin1 = [boardGrid[0],boardGrid[4],boardGrid[8]];
    let DiagWin2 = [boardGrid[2],boardGrid[4],boardGrid[6]];

    // I used the 'every' function on each of the variables above to check if every element in the array is the same as the current player's symbol. So this winnerArray is an array of boolean values. At the start of the game, it's an array of 8 'false' values. As soon as someone wins (they have 3 X's or 3 O's), the 'every' function will evaluate as true for that array element!
    let winnerArray =
    [HorzWin1.every(x => x === currentPlayer),
    HorzWin2.every(x => x === currentPlayer),
    HorzWin3.every(x => x === currentPlayer),
    VerWin1.every(x => x === currentPlayer),
    VerWin2.every(x => x === currentPlayer),
    VerWin3.every(x => x === currentPlayer),
    DiagWin1.every(x => x === currentPlayer),
    DiagWin2.every(x => x === currentPlayer)];

    // this if-statment runs through the winnerArray with the 'some' function. If at least one element evaluates as true, we know we have a winner and the function will run
    if (winnerArray.some(y => y === true)){
      //If there's a winner, the browser will throw up the alert below, annoucing the winner and reset the state elements
      alert("Player "+currentPlayer+" Wins!");
      boardGrid = [null,null,null,null,null,null,null,null,null];
      currentPlayer = 'X';
      turnCounter = 0;
    }

    // I realized I needed a way to reset a tied game. Once the turn counter reaches 9, every spot on the board should be full and this if-statement will run, reseting the board
    if (turnCounter === 9){
      alert("Tied Game! No One Wins!");
      boardGrid = [null,null,null,null,null,null,null,null,null];
      currentPlayer = 'X';
      turnCounter = 0;
    }

    const newState = {
      playerTurn: turnCounter,
      player: currentPlayer,
      board: boardGrid
    }
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.players}>{this.state.board[0]}</div>
          <div data-cell="1" onClick={this.players}>{this.state.board[1]}</div>
          <div data-cell="2" onClick={this.players}>{this.state.board[2]}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.players}>{this.state.board[3]}</div>
          <div data-cell="4" onClick={this.players}>{this.state.board[4]}</div>
          <div data-cell="5" onClick={this.players}>{this.state.board[5]}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.players}>{this.state.board[6]}</div>
          <div data-cell="7" onClick={this.players}>{this.state.board[7]}</div>
          <div data-cell="8" onClick={this.players}>{this.state.board[8]}</div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
