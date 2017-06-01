'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        a: 'X',
        b: '',
        c: '',
        d: 'O',
        e: '',
        f: '',
        g: 'X',
        h: 'O',
        i: '',
        playerTurn: 'X',
        playerWon: ''
    };
  }

  clickCell = (event) => {
    const cellLetter = event.target.getAttribute('data-cell');
    const obj = {};
    const currentPlayer = this.state.playerTurn
    obj [cellLetter]: this.state.playerTurn;
    obj['playerTurn'] = (this.state.playerTurn === 'X') ? 'O' : 'X';
    // Ternary is equivalent to
    // if (this.state.playerTurn) === 'X') {
      // obj['playerTurn'] = 'O';
    // } else {
    //   obj['playerTurn'] = 'X';
    // }

    // After you click on a square, what does object look like?
    // {a: 'X', playerTurn; 'O'}
    this.setState(obj);

    if (this.checkWin()) {
      obj['playerWon'] = currentPlayer
    });

    // Above is the method of how you update the state. You just use it.
  }

checkWin = () => {
  const combos = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['a', 'd', 'g'],
    ['b', 'e', 'h'],
    ['c', 'f', 'i'],
    ['a', 'e', 'i'],
    ['c', 'e', 'g'],
  ];

  return combos.some((combo) => {
    if (
    this.state[combo[0]] &&
    this.state[combo[0]] === this.state.[combo[1]] &&
    this.state[combo[0]] === this.state.[combo[2]]
    ) {
    return true;
    }
  });
}



  render() {
    return (
      <div>
        <div> Player X's Turn</div>
        <div>
          <div className="row">
            <div data-cell="a" onClick={this.clickCell}>{this.state.a}</div>
            <div data-cell="b" onClick={this.clickCell}>{this.state.b}</div>
            <div data-cell="c" onClick={this.clickCell}>{this.state.c}</div>
            // You can use dot notation for a single string here.not numbers.
          </div>
          <div className="row">
            <div data-cell="d" onClick={this.clickCell}>{this.state.d}</div>
            <div data-cell="e" onClick={this.clickCell}>{this.state.e}</div>
            <div data-cell="f" onClick={this.clickCell}>{this.state.f}</div>
          </div>
          <div className="row">
            <div data-cell="g" onClick={this.clickCell}>{this.state[g]}</div>
            <div data-cell="h" onClick={this.clickCell}>{this.state[h]}</div>
            <div data-cell="i" onClick={this.clickCell}>{this.state[i]}</div>
          </div>
        </div>
        <div style={{display: this.state.won}}
      </div>


    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));





// 'use strict';
//
// class TicTacToe extends React.Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         0: 'X',
//         1: '',
//         2: 'X',
//         3: 'O',
//         4: 'O',
//         5: '',
//         6: 'X',
//         7: '',
//         8: '',
//       playerTurn:'X',
//       won: 'none'
//     };
//
//   }
//
// clickCell = (e) => {
//   const obj = {};
//   obj [e.target.getAttribute('data-cell')] = this.state.playerTurn;
//   obj['playerTurn'] = this.state.playerTurn === 'X' ? 'O': 'X';
//   this.setState(obj)
//
// }
//
//   render() {
//     return (
//       <div>
//         <div> Player {this.state.playerTurn} Turn</div>
//         <div>
//           <div className="row">
//             <div data-cell="0" onClick={this.clickCell}>{this.state[0]}</div>
//             <div data-cell="1" onClick={this.clickCell}>{this.state[1]}</div>
//             <div data-cell="2" onClick={this.clickCell}>{this.state[2]}</div>
//           </div>
//           <div className="row">
//             <div data-cell="3" onClick={this.clickCell}>{this.state[3]}</div>
//             <div data-cell="4" onClick={this.clickCell}>{this.state[4]}</div>
//             <div data-cell="5" onClick={this.clickCell}>{this.state[5]}</div>
//           </div>
//           <div className="row">
//             <div data-cell="6" onClick={this.clickCell}>{this.state[6]}</div>
//             <div data-cell="7" onClick={this.clickCell}>{this.state[7]}</div>
//             <div data-cell="8" onClick={this.clickCell}>{this.state[8]}</div>
//           </div>
//         </div>
//         <div style={{display: this.state.won}}
//       </div>
//
//
//     );
//   }
// }
//
// ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
