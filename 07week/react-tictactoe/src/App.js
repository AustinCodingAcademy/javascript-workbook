//Create board.
//Keep track of player turn. default is "X" for player one. If empty place marker.
//Create check for win function that notifies the players at the correct time!
//If no win then change player
//Create a reset button that works at any time in the game.
//Style the game so it is freaking awesome :}.
//Style the code!
import React, {Component} from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

  state = {
    playerTurn: '1',
    grid: {},
    board: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ],
    gameWone: false,
    image: 'http://www.gifimagesdownload.com/wp-content/uploads/2016/02/background-gif-451.gif'
  };

  handleClick(boxes) {

    // console.log('first line of handelClick')
    if (!this.state.grid[boxes]) {
      console.log(this.state);
      const playerTurn = this.state.playerTurn === '1' ? '0' : '1';
      // console.log('after ternery')
      const newGrid = {...this.state.grid};
      this.setState({grid: newGrid, playerTurn});
      newGrid[boxes] = this.state.playerTurn;
    }
  }

  renderBoard() {
    // console.log('this is renderBoard')
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

  boardButton() {
    if (this.state.grid === '1' || '0') {
      window.location.reload();
      // this.setState({grid: {}});
      // this.setState({gamWone: false});
      // this.setState({playerTurn: 'X'});
    }
  }

  gameWon() {
    const newBoard = this.state.grid;
    //topRow
    if (newBoard[0] === '1' && newBoard[1] === '1' && newBoard[2] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[0] === '0' && newBoard[1] === '0' && newBoard[2] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    //middleRow
    if (newBoard[3] === '1' && newBoard[4] === '1' && newBoard[5] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[3] === '0' && newBoard[4] === '0' && newBoard[5] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    //bottomRow
    if (newBoard[6] === '1' && newBoard[7] === '1' && newBoard[8] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[6] === '0' && newBoard[7] === '0' && newBoard[8] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    //rightColumn
    if (newBoard[0] === '1' && newBoard[3] === '1' && newBoard[6] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[0] === '0' && newBoard[3] === '0' && newBoard[6] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    // middleColumn
    if (newBoard[1] === '1' && newBoard[4] === '1' && newBoard[7] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[1] === '0' && newBoard[4] === '0' && newBoard[7] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    // rightColumn
    if (newBoard[2] === '1' && newBoard[5] === '1' && newBoard[8] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[2] === '0' && newBoard[5] === '0' && newBoard[8] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    // forwardSlash
    if (newBoard[6] === '1' && newBoard[4] === '1' && newBoard[2] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[6] === '0' && newBoard[4] === '0' && newBoard[2] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
    // backSlash
    if (newBoard[0] === '1' && newBoard[4] === '1' && newBoard[8] === '1') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '1'})
    } else if (newBoard[0] === '0' && newBoard[4] === '0' && newBoard[8] === '0') {
      this.setState({gameWone: true});
      this.setState({playerTurn: '0'})
    }
  }

  render() {
    let games;
    if (this.state.gameWone === true) {
      games = <h1> The winner is: {this.state.playerTurn}</h1>;
      setInterval(function(){window.location.reload()}, 3000);
      // console.log('here it is!')
      // console.log('match')

    } else if (this.state.gameWone === false) {
      games = <h1> It is {this.state.playerTurn}'s turn</h1>
      // console.log('else Statement of render')
      this.gameWon()
    }

    return (
      <div className="game" style={{backgroundImage: `url(${this.state.image})`}}>
        <div className="status">{games}</div>
        <div className="outerBoard">
          <div className="gameBoard">{this.renderBoard()}</div>
        </div>
        <div className="outerButton">
          <RaisedButton className="boardButton" onClick={() => this.boardButton()} label="Clear Board" primary={true}/>
        </div>
      </div>
    );
  }
}

export default App;


