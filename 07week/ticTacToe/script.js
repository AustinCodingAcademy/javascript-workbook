'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    turn: 'X'
  };
}

handleClick=(cell)=>{
// const cellEvent = event.target.getAttribute('data-cell');
  const state = {...this.state};
    state[cell] = this.state.turn;
    state['turn'] = this.state.turn === "X" ? "O" : "X";
    this.setState(state)
    this.checkWin();
};

  render() {
    // const cellEvent = event.target.getAttribute('data-cell');
    const combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

    const playerWon = '';


    return (
      <div>
        <div>Player {this.state.turn} Turn</div>
        <div className="row">
          <div data-cell="0"onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1"onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
          <div data-cell="2"onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3"onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
          <div data-cell="4"onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
          <div data-cell="5"onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6"onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
          <div data-cell="7"onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
          <div data-cell="8"onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
        </div>
        <div>Player {playerWon} Won!</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
