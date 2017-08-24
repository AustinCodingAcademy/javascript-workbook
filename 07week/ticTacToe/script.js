'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          turn: 'X',
      };
  }
  // Clicking on cell and alternate 'X' and 'O'
  handleClick=(cell)=>{
      // Create variable to lock in current state; which we will use to update with '=' sign later
      const state = this.state;
      // Label each cell with a state, here being the turn
      state[cell] = this.state.turn;
      // Alternates player turn
      state['turn'] = this.state.turn === 'X' ? 'O' : 'X';
      // Grab the state ( 'X' or 'O' ), set it to 'this'
      this.setState(state)
  };

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}> {this.state.cell0} </div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}> {this.state.cell1} </div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}> {this.state.cell2} </div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}> {this.state.cell3} </div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}> {this.state.cell4} </div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}> {this.state.cell5} </div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}> {this.state.cell6} </div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}> {this.state.cell7} </div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}> {this.state.cell8} </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));


/*
'use strict';

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          turn: 'X',
      };
      this.message = '';
  }
  handleClick=(cell)=>{
      const state = {...this.state};
      const // this.state.turn? 'X' : 'O';
      if (!state[cell]) {
        state[cell] = this.state.turn;
        state['turn'] = this.state.turn === 'X'? 'O' : 'X';  // Switch between X and O
        this.message = '';

      } else {
        this.message = 'Square occupied.  Please select a different square';
      }
      // toggleTurn();
      // this.state.turn? 'X' : 'O';
      this.setState(state)
  };
  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
        </div>
        <div id='announce-winner'>{this.message}</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));

*/
