'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      symbol: 'X',
      nextSymbol: 'O',
      status: 'active'
    }
    this.markBox = this.markBox.bind(this);
  }

//horizontalWin checks for all possible horizontal winning scenarios
  horizontalWin() {
    var hline = [[this.state.grid[0], this.state.grid[1], this.state.grid[2]], [this.state.grid[3], this.state.grid[4], this.state.grid[5]], [this.state.grid[6], this.state.grid[7], this.state.grid[8]]];
    for (var r = 0; r < 3; r++) {
      var line = hline[r];
      if (line[0] === line[1] && line[1] === line[2] && (line[0] === 'X' || line[0] === 'O')) {
        return true;
      }
    }
  };

//verticalWin checks for all possible vertical winning scenarios
  verticalWin() {
    var vline = [[this.state.grid[0], this.state.grid[3], this.state.grid[6]], [this.state.grid[1], this.state.grid[4], this.state.grid[7]], [this.state.grid[2], this.state.grid[5], this.state.grid[8]]];
    for (var c = 0; c < 3; c++) {
      var line = vline[c];
      if (line[0] === line[1] && line[1] === line[2] && (line[0] === 'X' || line[0] === 'O')) {
        return true;
      }
    }
  };

//diagonalWin checks for all possible diagonal winning scenarios
  diagonalWin() {
    var dline = [[this.state.grid[0], this.state.grid[4], this.state.grid[8]], [this.state.grid[2], this.state.grid[4], this.state.grid[6]]];
    for (var d = 0; d < 2; d++) {
      var line = dline[d];
      if (line[0] === line[1] && line[1] === line[2] && (line[0] === 'X' || line[0] === 'O')) {
        return true;
      }
    }
  };

//checkForWin checks for all possible winning scenarios
  checkForWin() {
    if (this.horizontalWin() == true) {
      return true;
    } else if (this.verticalWin() == true) {
      return true;
    } else if (this.diagonalWin() == true) {
      return true;
    }
  }

  // markBox is a function that marks the current symbol in the box that is clicked
  markBox(event) {
    console.log("The even object ", event);
    console.log("The element clicked ", event.target);
    console.log("The targeted box is ", event.target.getAttribute("data-cell"));
    let box = event.target.getAttribute("data-cell");
    let content = this.state.grid[box];
    let mark = this.state.symbol;
    let game = this.state.status;
    let newSymbol = this.state.nextSymbol;
    let row = event.target.getAttribute("data-row");
    let col = event.target.getAttribute("data-column");
// if the game is not already won and ongoing (active), the following code exectutes
    if (game === 'active'){
      if (mark === 'X'){
        if (content === ' ') {
          this.state.grid[box] = mark;
          newSymbol = 'O';
          // this.state.symbol = 'O';
        } else {
          alert('invalid move');
        }
      } else if (mark === 'O'){
        if (content === ' ') {
          this.state.grid[box] = mark;
          newSymbol = 'X';
          // this.state.symbol = 'X';
        } else {
          alert('invalid move');
        }
      } const newState = {
        symbol: newSymbol
      }
      this.setState(newState);
      let check = this.checkForWin();
      if (check === true) {
        alert("You win! Game over.")
        game = 'over';
      } const endState = {
        status: game
      }
      this.setState(endState);
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" data-row="1" data-column="1" onClick={this.markBox}>{this.state.grid[0]}</div>
          <div data-cell="1" data-row="1" data-column="2" onClick={this.markBox}>{this.state.grid[1]}</div>
          <div data-cell="2" data-row="1" data-column="3" onClick={this.markBox}>{this.state.grid[2]}</div>
        </div>
        <div className="row">
          <div data-cell="3" data-row="2" data-column="1" onClick={this.markBox}>{this.state.grid[3]}</div>
          <div data-cell="4" data-row="2" data-column="2" onClick={this.markBox}>{this.state.grid[4]}</div>
          <div data-cell="5" data-row="2" data-column="3" onClick={this.markBox}>{this.state.grid[5]}</div>
        </div>
        <div className="row">
          <div data-cell="6" data-row="3" data-column="1" onClick={this.markBox}>{this.state.grid[6]}</div>
          <div data-cell="7" data-row="3" data-column="2" onClick={this.markBox}>{this.state.grid[7]}</div>
          <div data-cell="8" data-row="3" data-column="3" onClick={this.markBox}>{this.state.grid[8]}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
