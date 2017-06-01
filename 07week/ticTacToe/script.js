'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { //create your state
      0: '', //this each value will be either 'X' or 'O'
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      playerTurn: 'X', //set player Turn to X in the beginning
    };
  } //state ends

  clickCell = (event) => { //when a data-cell is clicked
    const obj = {}; //create an empty object in order to pass in attribute 'data-cell'
    obj[event.target.getAttribute('data-cell')] = this.state.playerTurn; //target data-cell
    obj['playerTurn'] = (this.state.playerTurn === 'X') ? 'O' : 'X'; //toggle player between X and O
    this.setState(obj); //pass in that object


  }//clickCell function ends

  render() {

    const winningCells = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; /*declare winning cells and
                                                                                              assign them to an array*/

    let playerWon = '';
    winningCells.some((combo) => { //go through each array and check whether the condition is true
      if (this.state[combo[0]] && //if first cell is not empty and
          this.state[combo[0]] === this.state[combo[1]] && //first cell is equal to second cell e.g. X===X and
          this.state[combo[0]] === this.state[combo[2]]) {  //first cell is equal to third cell e.g. X===X
            playerWon = this.state[combo[0]];
          }
    });//winningCells.some() function ends


    return (
      <div>
        <div>Player {this.state.playerTurn}'s Turn</div>
        <div>
          <div className="row">
            <div data-cell="0" onClick={this.clickCell}>{this.state[0]}</div>
            <div data-cell="1" onClick={this.clickCell}>{this.state[1]}</div>
            <div data-cell="2" onClick={this.clickCell}>{this.state[2]}</div>
          </div>
          <div className="row">
            <div data-cell="3" onClick={this.clickCell}>{this.state[3]}</div>
            <div data-cell="4" onClick={this.clickCell}>{this.state[4]}</div>
            <div data-cell="5" onClick={this.clickCell}>{this.state[5]}</div>
          </div>
          <div className="row">
            <div data-cell="6" onClick={this.clickCell}>{this.state[6]}</div>
            <div data-cell="7" onClick={this.clickCell}>{this.state[7]}</div>
            <div data-cell="8" onClick={this.clickCell}>{this.state[8]}</div>
          </div>
        </div>
        <br />
        <div>Player {playerWon} won!</div>
      </div>

    ); //return ends
  } //render ends
} //class ends

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
