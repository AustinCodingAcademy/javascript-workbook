import React, { Component } from 'react';

import './App.css';
import Announcement from './Announcement';
import Tile from './Tile';
import ResetButton from './ResetButton'

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'x',
      winner:null
    }

  }
updateBoard(loc,player){
  if(this.state.gameBoard[loc] === 'x' || this.state.gameBoard === 'o' || this.state.winner){

    return;
  }
  const currentGameBoard = this.state.gameBoard;
  currentGameBoard.splice (loc, 1, this.state.turn);
  this.setState({gameBoard: currentGameBoard});


  const topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
  if (topRow.match (/xxx|ooo/)){
    this.setState({winner: this.state.turn});
    return;
  }
  const middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
  if (middleRow.match(/xxx|ooo/)){
    this.setState({winner: this.state.turn});
  }
  const bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
  if (bottomRow.match(/xxx|ooo/)){
    this.setState({winner: this.state.turn});
  }
  const leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
  if (leftCol.match(/xxx|ooo/)){
    this.setState({winner: this.state.turn});
  }
  const middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
  if (middleCol.match(/xxx|ooo/)){
    this.setState({winner: this.state.turn});
  }
  const rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
  if (rightCol.match(/xxx|ooo/)){
    this.setState({winner: this.state.turn});
  }
  const leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
  if (leftDiag.match(/xxx|ooo/)){
    this.setState({winner: this.state.turn});
  }
  const rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
  if (rightDiag.match(/xxx|ooo/)){
      this.setState({winner: this.state.turn});
  return;

}
const moves = this.state.gameBoard.join('').replace(/ /g, '');
if (moves.length === 9){
  this.setState({winner: 'd'});
}
this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x'});

}




resetBoard(){
  this.setState({
    gameBoard: [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ],
    turn: 'x',
    winner:null
  })
}

  render() {
    return (
      <div className="container">
      <div className="menu">
        <h1>Tic-Tac-Toe</h1>
        <Announcement winner={this.state.winner}/>
        <ResetButton reset={this.resetBoard.bind(this)}/>

      </div>
      {this.state.gameBoard.map(function(value, i){
        return(

        <Tile
          key={i}
          loc={i}
          value={value}
          updateBoard={this.updateBoard.bind(this)}
          turn = {this.state.turn}/>

    )
    }.bind(this))}
      </div>
    );
  }
}

export default App;
