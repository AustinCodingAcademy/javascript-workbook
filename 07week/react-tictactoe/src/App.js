import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // need to keep track of player turn. default is "X" for player one. If empty place
  //player turn, then check for win.
  //if no win chnge player

  state = {
    playerTurn: "X",
    grid: {},
    board: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ],
    // gameWone; false,
  };


  handleClick(boxes) {
    console.log('first line of handelClick')
    if (!this.state.grid[boxes]) {
      console.log(this.state);
      const playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
      console.log('after turnary')
      const newGrid = {...this.state.grid};
      this.setState({grid: newGrid, playerTurn});
      newGrid[boxes] = this.state.playerTurn;
    }
    // const currentGrid = this.state.grid;
    // if(this.state.playerTurn === currentGrid[0]) {
    //   console.log('if statement in handelClick')
    //   this.setState({gameWone: true})
    // }
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

  render() {
    console.log('render');
    console.log(this.state.grid)
    console.log(this.state.playerTurn)
    let games;
    const currentGrid = this.state.grid;
    if (this.state.playerTurn === currentGrid[0]) {
      console.log('here it is!')
      games = <h1> The winner is: {this.state.playerTurn}</h1>;
      console.log('match')
    }else {
      games = <h1> It is {this.state.playerTurn}'s turn</h1>

      console.log('else Statement')
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