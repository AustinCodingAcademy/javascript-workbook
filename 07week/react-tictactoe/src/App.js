import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // need to keep track of player turn. default is "X" for player one. If empty place
  //player turn, then check for win.
  //if no win chnge player

  state = {
    playerTurn: 'X',
    grid: {},
    board: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ],
    gameWone: false,
  };

  handleClick(boxes) {

    console.log('first line of handelClick')
    if (!this.state.grid[boxes]) {
      console.log(this.state);
      const playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
      // const playerTurn = this.state.playerTurn;

      console.log('after turnary')
      const newGrid = {...this.state.grid};
      this.setState({grid: newGrid, playerTurn});
      newGrid[boxes] = this.state.playerTurn;

    }
    // console.log('right before if in handleClick')
  }

  renderBoard() {

    console.log('this is renderBoard')
    return this.state.board.map((row, key) => {
      return (
        <div className="row" key={key}>
          {row.map((num, index) => {
            return <div key={index} className="boardBox"
                        onClick={() => this.handleClick(num)}>{this.state.grid[num]}</div>
          })}
        </div>
      )
    })

  }

  gameWon () {
    console.log('render');
    console.log(this.state.grid)
    console.log(this.state.playerTurn)
    const topRow = this.state.grid[0] && this.state.grid[1] && this.state.grid[2];
    const middleRow = this.state.grid[3] && this.state.grid[4] && this.state.grid[5];
    const bottomRow = this.state.grid[6] && this.state.grid[7] && this.state.grid[8];
    const leftColumn = this.state.grid[0] && this.state.grid[3] && this.state.grid[6];
    const middleColumn = this.state.grid[1] && this.state.grid[4] && this.state.grid[7];
    const rightColumn = this.state.grid[2] && this.state.grid[5] && this.state.grid[8];
    const forwardSlash = this.state.grid[6] && this.state.grid[4] && this.state.grid[2];
    const backSlash = this.state.grid[0] && this.state.grid[4] && this.state.grid[8];
    if (('X' === topRow) || ('X' === middleRow) || ('X' === bottomRow) || ('X' === leftColumn)
    || ( 'X' === middleColumn) || ('X' === rightColumn) || ('X' === forwardSlash) || ('X' === backSlash)){
      this.setState({gameWone: true});
      this.setState({playerTurn: 'X'})
      console.log(this.state);
      console.log('if statement in handelClick')
      return
    }

  }

  render() {

    let games;

    if (this.state.gameWone === true) {

      games = <h1> The winner is: {this.state.playerTurn}</h1>;
      console.log('here it is!')

      console.log('match')

    } else if (this.state.gameWone === false) {
       games = <h1> It is {this.state.playerTurn}'s turn</h1>
      console.log('else Statement of render')
      this.gameWon()
    }
    return (
      <div>
        <div className="status">{games}</div>
        {this.renderBoard()}
      </div>
    );
  }
}

export default App;


// console.log(this.state.playerTurn)
// let games;
// const winner = [...this.state.wins];
// winner.map((item, index) => {
//   if(this.state.grid[item, index] === "X"){
//     console.log('match')
//     console.log(this.state.grid[item])
//     games = <h1> The winner is: {this.state.playerTurn}</h1>;
//   }
// })
// console.log(this.state.grid)
//111