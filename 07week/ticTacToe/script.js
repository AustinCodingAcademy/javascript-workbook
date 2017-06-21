'use strict';

class TicTacToe extends React.Component {  //Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
  constructor(props) {
    super(props); //passes props down to rest of components
    this.state = {    //creating the state -- the empty cells essentially.  Dictates the way component reacts/changes.  Anytime the state changes, the DOM is triggered.  Sees changes on your DOM and re-renders it in efficient way.
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      playerTurn: 'X'
    };
  }

  clickCell = (event) => {  //creating the event for when you click on a cell
    const cellLetter = event.target.getAttribute('data-cell');  //targeting an indivudal cell and putting it in a variable -- makes it easier to call it later
    const obj = {};  //creating the empty object
    obj[cellLetter] = this.state.playerTurn;  //when an empty object of a targeted cell is clicked on, an 'X' will be addded
    obj['playerTurn'] = (this.state.playerTurn === 'X') ? 'O' : 'X';  //everytime you click on something it'll alternate between X and O

    // if (this.state.playerTurn === 'X') {
    //   obj['playerTurn'] = 'O';
    // } else {
    //   obj['playerTurn'] = 'X';
    // }

    // { a: 'X', playerTurn: 'O' }

    this.setState(obj);  //setting the state to the new one

  }

  render() { //The render method returns the needed component markup, which can be a single child component or null or false (in case you don't want any rendering).
    const combos = [  // Whatever you return from your render() method represents how your view should look in the real browser DOM.
      ['a', 'b', 'c'],   //list of winning combos
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
      ['a', 'd', 'g'],
      ['b', 'e', 'h'],
      ['c', 'f', 'i'],
      ['a', 'e', 'i'],
      ['c', 'e', 'g']
    ];

    let playerWon = '';  //creates the playerWon

    combos.forEach((combo) => {  //runs through each of the combos using higher order function for each
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
        <div>Player {this.state.playerTurn}'s Turn</div>
        <div>
          <div className="row">
            <div data-cell="a" onClick={this.clickCell}>{this.state.a}</div>
            <div data-cell="b" onClick={this.clickCell}>{this.state.b}</div>
            <div data-cell="c" onClick={this.clickCell}>{this.state.c}</div>
          </div>
          <div className="row">
            <div data-cell="d" onClick={this.clickCell}>{this.state.d}</div>
            <div data-cell="e" onClick={this.clickCell}>{this.state.e}</div>
            <div data-cell="f" onClick={this.clickCell}>{this.state.f}</div>
          </div>
          <div className="row">
            <div data-cell="g" onClick={this.clickCell}>{this.state.g}</div>
            <div data-cell="h" onClick={this.clickCell}>{this.state.h}</div>
            <div data-cell="i" onClick={this.clickCell}>{this.state.i}</div>
          </div>
        </div>
        <div>Player {playerWon} Won!</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
//ReactDOM.render(component, where in the html you are going to be changing)
