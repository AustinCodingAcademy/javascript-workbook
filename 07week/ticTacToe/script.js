'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      turn: "X",
      winString: ["XXX", "OOO"],
      combos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      winTest: ""
    };
  }

  clickIt = (e) => {
    let idx = e.target.getAttribute('data-cell');
    let newBoard = this.state.board;
    newBoard[idx] = this.state.turn;
    let newTurn = (this.state.turn === "X" ? "O" : "X");
    this.setState({
      board: newBoard,
      turn: newTurn
    });
    this.checkWin();
  }

  checkWin = () => {
    let winString = (
      this.state.turn==="X"?this.state.winString[0]:this.state.winString[1]
    );
    let board = this.state.board;
    this.state.combos.forEach((combo) => {
      if (`${board[combo[0]]}${board[combo[1]]}${board[combo[2]]}` === winString) {
        this.setState({winText: `Player ${this.state.turn} wins!`});
      }
    });
  }

  clearBoard = () => {
    let newBoard = this.state.board.map(() => "");
    this.setState({
      board: newBoard,
      winText: ""
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.clickIt}>{this.state.board[0]}</div>
          <div data-cell="1" onClick={this.clickIt}>{this.state.board[1]}</div>
          <div data-cell="2" onClick={this.clickIt}>{this.state.board[2]}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.clickIt}>{this.state.board[3]}</div>
          <div data-cell="4" onClick={this.clickIt}>{this.state.board[4]}</div>
          <div data-cell="5" onClick={this.clickIt}>{this.state.board[5]}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.clickIt}>{this.state.board[6]}</div>
          <div data-cell="7" onClick={this.clickIt}>{this.state.board[7]}</div>
          <div data-cell="8" onClick={this.clickIt}>{this.state.board[8]}</div>
        </div>
        <button onClick={this.clearBoard} id="clear">Clear</button>
        <div id="announce-winner">{this.state.winText}</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
