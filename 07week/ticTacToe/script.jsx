'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: 'X'
    };

    this.makeMove = this.makeMove.bind(this);
    this.checkWin = this.checkForWin.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.clickHandler}></div>
          <div data-cell="1" onClick={this.clickHandler}></div>
          <div data-cell="2" onClick={this.clickHandler}></div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.clickHandler}></div>
          <div data-cell="4" onClick={this.clickHandler}></div>
          <div data-cell="5" onClick={this.clickHandler}></div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.clickHandler}></div>
          <div data-cell="7" onClick={this.clickHandler}></div>
          <div data-cell="8" onClick={this.clickHandler}></div>
        </div>
      </div>
    );
  }
    makeMove (e) {
    if (!e.target.innerHTML) {
      e.target.innerHTML = this.state.turn;
      this.state.turn = this.state.turn === 'X' ? 'O' : 'X';
    } else {
      alert('Please choose another square');
    }
  }
  checkForWin () {
    let square = document.querySelectorAll('[data-cell]');

    for (let i = 0; i < 9; i += 3) {
      if (square[i].innerHTML) {
        if((square[i].innerHTML === square[i + 1].innerHTML) && (square[i + 1].innerHTML === square[i + 2].innerHTML)) {
          alert(square[i].innerHTML + "You Win!");
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      if (square[i].innerHTML) {
        if((square[i].innerHTML === square[i + 3].innerHTML) && (square[i + 3].innerHTML === square[i + 6].innerHTML)) {
          alert(square[i].innerHTML + "You Win!");
        }
      }
    }
    if (square[4].innerHTML) {
     if (((square[0].innerHTML + square[4].innerHTML + square[8].innerHTML) === 'XXX') || ((square[0].innerHTML + square[4].innerHTML + square[8].innerHTML) === 'OOO')) {
       alert(qSelect[4].innerHTML + "You Win!");
     }
     if ((square[2].innerHTML === square[4].innerHTML) && (square[4].innerHTML === square[6].innerHTML)) {
       alert(square[4].innerHTML + "You Win!");
     }
   }
  }
  clickHandler (e) {
    this.makeMove(e);
    this.checkForWin();
  }
}
ReactDOM.render(<TicTacToe />, document.getElementById('container'));
