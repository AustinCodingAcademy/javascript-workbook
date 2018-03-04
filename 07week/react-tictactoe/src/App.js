import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      playerTurn: 'X',
      board: [
        [[null],[null], [null] ],
        [[null],[null],[null]],
        [[null],[null],[null]]
      ]

    }
  }
  render() {
    const rowStyle = {
      backgroundColor: 'pink',
      color: 'red',
      height: '120px',
      fontSize: '40px',
      margin: '5px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    const boxStyle = {
      height: '110px',
      width: '110px',
      backgroundColor: 'pink',
      margin: 'auto 20px',
      border: '1px solid black'
    }


    return (

      <div>
        {this.state.board.map((row, index) => {
          return <div key = {index} style = {rowStyle}>

            {row.map((box,i)=>{
              return <div key = {i} style = {boxStyle}>{row[i]}</div>
            })}

          </div>

        })};



      </div>
    );
  }
}

export default App;
