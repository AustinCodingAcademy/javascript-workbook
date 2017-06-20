'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      turn: "X",
      status: null,
      combos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    };
  }

  clickIt = (i) => {
    let board = this.state.board.slice();
    let turn = `${this.state.turn}`;
    board[i] = turn;
    turn = turn === "X" ? "O" : "X";
    this.setState({
      board: board,
      turn: turn
    });
  }

  checkWin = (board) => {
    for (var i = 0; i < this.state.combos.length; i++) {
      const [a, b, c] = this.state.combos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
      return null;
    }
  }

  clearBoard = () => {
    this.setState({
      board: Array(9).fill(null)
    });
  }

  render() {
    const board = this.state.board;
    const winner = this.checkWin(board);
    let status;
    if (winner) status = `Winner: ${winner}`
    else status = `Player turn: ${this.state.turn}`
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={() => {this.clickIt(0)}}>{this.state.board[0]}</div>
          <div data-cell="1" onClick={() => {this.clickIt(1)}}>{this.state.board[1]}</div>
          <div data-cell="2" onClick={() => {this.clickIt(2)}}>{this.state.board[2]}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => {this.clickIt(3)}}>{this.state.board[3]}</div>
          <div data-cell="4" onClick={() => {this.clickIt(4)}}>{this.state.board[4]}</div>
          <div data-cell="5" onClick={() => {this.clickIt(5)}}>{this.state.board[5]}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => {this.clickIt(6)}}>{this.state.board[6]}</div>
          <div data-cell="7" onClick={() => {this.clickIt(7)}}>{this.state.board[7]}</div>
          <div data-cell="8" onClick={() => {this.clickIt(8)}}>{this.state.board[8]}</div>
        </div>
        <button onClick={this.clearBoard} id="clear">Clear</button>
        <div id="announce-winner">{status}</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
