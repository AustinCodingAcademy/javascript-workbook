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
      playerTurn: 'X'
    }
  }

  click = (e) => {
    const dataCell = e.target.getAttribute('data-cell');
    const obj = {};
    obj[dataCell] = this.state.playerTurn;
    obj['playerTurn'] = (this.state.playerTurn === 'X' ? 'O' : 'X');
    this.setState(obj);
  }

  render() {
    const combos = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
      ];

    let playerWon = '';

    combos.forEach((combo) => {
      if (
        this.state[combo[0]] &&
        this.state[combo[0]] === this.state[combo[1]] &&
        this.state[combo[0]] === this.state[combo[2]]
      ) {
        playerWon = this.state[combo[0]];
      }
    });



    return (
      <div>

        <div>Player {this.state.playerTurn}s Turn</div>

        <div className="row">
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="1" onClick={this.click} >{this.state[1]}</div>
          <div data-cell="2" onClick={this.click} >{this.state[2]}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.click} >{this.state[3]}</div>
          <div data-cell="4" onClick={this.click} >{this.state[4]}</div>
          <div data-cell="5" onClick={this.click} >{this.state[5]}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.click} >{this.state[6]}</div>
          <div data-cell="7" onClick={this.click} >{this.state[7]}</div>
          <div data-cell="8" onClick={this.click} >{this.state[8]}</div>
        </div>

        <div>Player {playerWon} Won!</div>

      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
