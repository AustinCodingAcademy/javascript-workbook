import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // need to keep track of player turn. default is "X" for player one. If empty place
    //player turn, then check for win.
    //if no win chnge player

    state = {
        playerTurn: "X",
       grid: {},
       boxes: [
          "", "", "","", "", "","", ""
       ]
    };
  handleClick(boxes){
// if(findWinner(boxes)){
//     return;
// }

//if nothing in box then refer to state.
if(!this.state.grid[boxes]){
    const newGrid= {...this.state.grid};
    newGrid[boxes] = this.state.playerTurn;
    const playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
    this.setState({grid: newGrid, playerTurn});

  }
}

  render() {
      // const status = findWinner(this.state.boxes);
      // if (status) {
      //     return  'Winner: ' + status;
      //
      // }console.log('winner');
      // } else {
      //     status = 'Next Players: ' + (this.state.playerTurn === 'X' ? 'O' : 'X')
      // }
      // let status;
      // if(this.state.grid[0] && this.state.grid[1] === this.state.playerTurn){
      // status = 'Winner:  ' + (this.state.playerTurn);
      // status = 'Next player is:  ' + (this.state.playerTurn);
      let status;
      if(this.state.grid[0] && this.state.grid[1] === this.state.playerTurn){
          status =  'Winner:  ' + (this.state.playerTurn);


          console.log('match')
      }




      return (
          <div>
              <div className="status">{status}</div>
              <div className="row">
                  <div className="boardBox" onClick={() => this.handleClick(0)}>{this.state.grid[0]}</div>
                  <div className="boardBox" onClick={() => this.handleClick(1)}>{this.state.grid[1]}</div>
                  <div className="boardBox" onClick={() => this.handleClick(2)}>{this.state.grid[2]}</div>
              </div>
              <div className="row">
                  <div className="boardBox" onClick={() => this.handleClick(3)}>{this.state.grid[3]}</div>
                  <div className="boardBox" onClick={() => this.handleClick(4)}>{this.state.grid[4]}</div>
                  <div className="boardBox" onClick={() => this.handleClick(5)}>{this.state.grid[5]}</div>
              </div>
              <div className="row">
                  <div className="boardBox" onClick={() => this.handleClick(6)}>{this.state.grid[6]}</div>
                  <div className="boardBox" onClick={() => this.handleClick(7)}>{this.state.grid[7]}</div>
                  <div className="boardBox" onClick={() => this.handleClick(8)}>{this.state.grid[8]}</div>
              </div>
          </div>
      );
  }
}


export default App;

function findWinner(boxes)  {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (boxes[a] && boxes[a]=== boxes[b] === boxes[a] === boxes[c]) {
            return boxes[a];
        }
    }
    return null;
}
