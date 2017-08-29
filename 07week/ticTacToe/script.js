'use strict';

// Create TTT Component
class TicTacToe extends React.Component {
  // Because we start with a this.state, we have a constructor
  constructor(props) {
    super(props);
    // Create properties to hold 'X' and 'O'
    this.state = {
      cell0: '',
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      // Starting turn of 'X'
      turn: 'X',
      // Declare local var to TTT class, to be filled in later
      message: ''
    };
  }
  // Click on cell and alternate 'X' and 'O'
  handleClick = (cell) => {
    // Create a local variable to lock in current state 0-8, turn, message
    const state = this.state;
    // Create a var to hold the turn
    const playerTurn = this.state.turn;
    // Label each cell with a state, here being the turn
    state[cell] = playerTurn;
    // Alternates player turn
    state.turn = playerTurn === 'X' ? 'O' : 'X';
    // set the new, altered properties to a more current version of this.state
    this.setState(state);
    // Call the checkForWin function, pass in the current turn
    this.checkForWin(playerTurn);
  };

  checkForWin = (playerTurn) => {
    // Create a local variable to lock in current state 0-8, turn, message
    const state = this.state;
    // Create arrays of winning positions, where each position is the same as the others
    const winningPositions = [
      // Horizontal wins
      ['cell0','cell1','cell2'],
      ['cell3','cell4','cell5'],
      ['cell6','cell7','cell8'],
      // Vertical wins
      ['cell0','cell3','cell6'],
      ['cell1','cell4','cell7'],
      ['cell2','cell5','cell8'],
      // Diagonal wins
      ['cell0','cell4','cell8'],
      ['cell2','cell4','cell6']
    ];
    // Set iterator to loop over all winning scenario arrays
    for (var i in winningPositions) {
      // Starting at the first winning array and ending at the last arrays
      // Check the first through thrid positions in the current array against the playerTurn
      // If all 3 elements in the current array are equal to playerTurn 'X' or 'O'
      if (state[winningPositions[i][0]] === playerTurn
      && state[winningPositions[i][1]] === playerTurn
      && state[winningPositions[i][2]] === playerTurn) {
        // Use playerTurn variable to create a variable to hold the winningMessage
        let winningMessage = `${playerTurn} is the winner!`
        // Set the current state's message to the winningMessage var
        this.setState({message: winningMessage});
      }
    }
    console.log('message', this.state.message);
  };

  resetBoard = (state) => {
    this.state = {
      cell0: '',
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      // Starting turn of 'X'
      turn: 'X',
      // Declare local var to TTT class, to be filled in later
      message: ''
    };
    // Reset the state with empty cells, turn = 'X', no message
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <section>
          <button type="button" onClick={this.resetBoard}> Reset Board | Play Again </button>
        </section>
        <section>
          <div className="row">
            <div data-cell="0" onClick={()=>this.handleClick('cell0')}> {this.state.cell0} </div>
            <div data-cell="1" onClick={()=>this.handleClick('cell1')}> {this.state.cell1} </div>
            <div data-cell="2" onClick={()=>this.handleClick('cell2')}> {this.state.cell2} </div>
          </div>
          <div className="row">
            <div data-cell="3" onClick={()=>this.handleClick('cell3')}> {this.state.cell3} </div>
            <div data-cell="4" onClick={()=>this.handleClick('cell4')}> {this.state.cell4} </div>
            <div data-cell="5" onClick={()=>this.handleClick('cell5')}> {this.state.cell5} </div>
          </div>
          <div className="row">
            <div data-cell="6" onClick={()=>this.handleClick('cell6')}> {this.state.cell6} </div>
            <div data-cell="7" onClick={()=>this.handleClick('cell7')}> {this.state.cell7} </div>
            <div data-cell="8" onClick={()=>this.handleClick('cell8')}> {this.state.cell8} </div>
          </div>
        </section>
      </div>
    );
  }
}
ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
