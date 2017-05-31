'use strict';
function Square(props) {
          return (//this function initiates an event listener on squares
            <button className="square" onClick={props.onClick}>
              {props.value}
            </button>
          );
        }
      class Game extends React.Component {//class with constructor and state to build/maintain game and track which players turn it is
        constructor() {
          super();
          this.state = {
            squares: Array(9).fill(null),//9 unit array with all values beginning as null
            xIsNext: true,//setting xIsNext initially to true so it game starts with 'X'
          };
        }
        handleClick(i) {//handler for onClick event from Square function
          const squares = this.state.squares.slice();//copying squares as it exist here
          squares[i] = this.state.xIsNext ? 'X' : 'O';//condition to toggle 'X' and 'O'
          this.setState({squares: squares,//setting 'squares' state to value of local squares
          xIsNext: !this.state.xIsNext,//toggling boolean value of 'xIsNext' state in Board component
});
    }
        renderSquare(i) {//drawing out board as tracked by state in Board component
          return (<Square value={this.state.squares[i]}//returning values specified by state and passing in (i)
          onClick={() => this.handleClick(i)}/>//sending (i) to handleClick and ultimately updates the board adding value of (i)
  );
}

        render() {
          const winner = checkForWin(this.state.squares);//setting variable to hold the winning symbol
          //let status;
          if (winner){
            status = 'Winner ' + winner;
          } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
          }
        return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
        }
      }

      // class TicTacToe extends React.Component {
      //   render() {
      //     return (
      //       <div className="game">
      //         <div className="game-board">
      //           <Board />
      //         </div>
      //         <div className="game-info">
      //           <div>{/* status */}</div>
      //           <ol>{/* TODO */}</ol>
      //         </div>
      //       </div>
      //     );
      //   }
      // }

      function checkForWin(squares)  {//function taking in squares
        const winningCells = [//setting big array to index the possible win square matches
          [0, 1, 2],
          [3, 4, 5],//indexes that if matched would result in a win
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
for (var i=0; i<winningCells.length; i++) {//iterating through above array
  const [a,b,c] = winningCells[i]; //setting a variable to use as a way to test the matched-ness of the [i]
  if (squares[a] && squares[a] === squares[b] && squares[a]=== squares[c]) {//if there is a symbol at position a, and if the three squares all match within the index then returning below
    return squares[a]//returns the value at a as the winner--cannot use a semi-colon here or all the squares are logged.
}
}
    return null;//winner being returned the loop is ended
    }



ReactDOM.render(<Game/> , document.getElementById('tic-tac-toe'));
