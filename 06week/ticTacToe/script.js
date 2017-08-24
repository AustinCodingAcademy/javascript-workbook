'use strict';

class TicTacToe extends React.Component {


  constructor(props) {
    super(props);
      this.state = {
          turn: 'X',
      };
      this.message = '';
  }
  handleClick=(cell)=>{
      const state = this.state;
        if (!state[cell]) {
          
         state[cell] = this.state.turn;

         state['turn'] = this.state.turn === 'X'? 'O' : 'X';
         this.message = '';

       } else {
         this.message = 'HEY! That space is taken. Play on a different square!';
       }

       this.setState(state)
   };



  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}></div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}></div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}></div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}></div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}></div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}></div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}></div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}></div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}></div>
          </div>
            <div id='announce-winner'>{this.message}</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
