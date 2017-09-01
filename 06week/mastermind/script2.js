'use strict';
import React from 'react';
import reactDOM from 'react-dom';

class TicTacToe extends React.Component {
  render() {
    return (
      <div>
        <p> Hello World </p>
      </div>
    );
  };
}
/*class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          turn: 'X',
          board: ['','','','','','','','','']
      };
  }

    handleClick = (cell) => {
      return this.state.turn;
    }
  // handleClick=(cell)=>{
  //     const state = {...this.state};
  //     state[cell] = this.state.turn;
  //     this.setState(state)
  };
  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1"></div>
          <div data-cell="2"></div>
        </div>
        <div className="row">
          <div data-cell="3"></div>
          <div data-cell="4"></div>
          <div data-cell="5"></div>
        </div>
        <div className="row">
          <div data-cell="6"></div>
          <div data-cell="7"></div>
          <div data-cell="8"></div>
        </div>
      </div>
    );
  }
}
*/
ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
