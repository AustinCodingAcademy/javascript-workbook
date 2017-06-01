'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
    playerTurn : 'X',
    won: 'none'
    };
  }

//the actual click....target is the thing that's clicked
  clickCell = (event) => {
    const obj = {};

    obj[event.target.getAttribute('data-cell')] = this.state.playerTurn;
    obj['playerTurn'] = this.state.playerTurn ==='X'? 'O': 'X';
    this.setState(obj);

    //
    // this.setState({
    //   playerTurn: this.state.playerTurn === 'X'?'O':'X'
    // })
  }

  function checkForWin(playerTurn) {
    const winningCells = [
      [a, b, c],
      [d, e, f],
      [g, h, i],
      [a, d, g],
      [b, e, h],
      [c, f, i],
      [a, e, i],
      [c, e, g]
    ]
    winningCells.forEach((combo) => {
      if{
        this.state[combo[0]]
      }
          return document.querySelector(`[data-cell="${idx}"]`).innerText === playerTurn;
      })
    })
  }



  render() {
    return (
      <div>
        <div> Player {this.state.playerTurn}""s Turn</div>
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
        <div> Player {this.state.playerTurn} Wins!</div>
      </div>
    );
  };
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
