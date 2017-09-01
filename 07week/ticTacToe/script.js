'use strict';
class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          turn: 'X',
          win: '',
      };
  }
  handleClick=(cell)=>{
    const state = {...this.state};
    state[cell] = this.state.turn;
    state.turn = this.state.turn === 'X'? 'O' : 'X';
    this.setState(state)
  }
  checkForWin = () =>{
    

  }
  render() {
    return (
      <div>
        <div id='announce-winner'>
          <p>{this.state.win}</p>
        </div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));


/*class TicTacToe extends React.Component {
  render() {
    return(
      <div>
        <p id='announcement'> Hello World </p>
        <div>
          <div id='1' className="box"></div>
          <div id='2' className="box"></div>
          <div id='3' className="box"></div>
        </div>
        <div>
          <div id='4' className="box"></div>
          <div id='5' className="box"></div>
          <div id='6' className="box"></div>
        </div>
        <div>
          <div id='7' className="box"></div>
          <div id='8' className="box"></div>
          <div id='9' className="box"></div>
        </div>
      </div>
    );
  };
}
/*
constructor(props) {
   super(props);
     this.state = {
         turn: 'X',
         win:''
     };
 }


 handleClick=(cell)=>{
 const state = {...this.state};
 const lines = [
     ['0', '1', '2'],
     ['3', '4', '5'],
     ['6', '7', '8'],
     ['0', '3', '6'],
     ['1', '4', '7'],
     ['2', '5', '8'],
     ['0', '4', '8'],
     ['2', '4', '6']
   ]

 state[cell] = this.state.turn;
 //console.log("b:"+this.state.turn);
 state['turn'] = this.state.turn === 'X' ? 'O' : 'X'

 // playerTurn=(props)=>{
 //   const status = `Player ${this.state.turn} Turn`;
 //   return status;
 // }

 const testForWin=(arr) => {
   let counter = 0;
   for (var i = 0;i <arr.length;i++){
     if (arr[i] === 'X') {
     counter+=1;
   }else if(arr[i]==='O'){
     counter-=1;
     }
     else {
       return -1;
     }
   }
   if(counter==3)
     return 0;
   if(counter==-3)
    return 0;
   return -1;
 }

for(var i=0 ;i < lines.length; i++)
{
  if(testForWin([state['cell'+lines[i][0]],
                  state['cell'+lines[i][1]],
                  state['cell'+lines[i][2]]])==0)
                  state.win = `Congratulations Player ${this.state.turn}!`;
}

this.setState(state)
 };

  render() {
    return (
      <div>
        <div id="player-turn">Player {this.state.turn} Turn</div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
        </div>
        <div id="announce-winner">{this.state.win}</div>
      </div>
    );
  }
}
*/
ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
