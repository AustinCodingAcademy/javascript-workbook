import React, { Component } from 'react';
import Category from './Category';

class Board extends Component {

  render() {
    if(this.props.boardState === 'question'){
      
    } else {

    }
    // Planets, Spaceships, Vehicles, People, Films, Species
    const categories = Object.keys(this.props.board);
    // console.log(categories);
    // console.log(this.props.board['vehicles']);
    return (
      <div
        className='black'
        id="board"
        onKeyPress={this.props.handleKey}
      >
      {
        categories.map((cat, idx) =>
          <Category
            id={cat}
            squares={this.props.board[cat]}
            key={idx}
            handleClick={this.props.handleClick}
          />
        )
      }
      </div>
    ); // return
  }  // render

}  // class Board

export default Board;
// <input type="text"></input>
// categories.map((cat, idx) => <Category id={cat} squares={this.props.board[cat]}/>);

// <Category id={categories[0]} squares={this.props.board[categories]}/>
// <Category id="spaceships"/>
// <Category id="vehicles"/>
// <Category id="people"/>
// <Category id="films"/>
// <Category id="species"/>

/*
if(this.props.board[props.category][props.square]['state'] === 'activeA') {
  return (
        <div className='answerDisplay'>
          <p>{this.props.board[props.category][props.square]['question']}</p>
          <input type='text'></input>
          <input type='text'></input>
          <input type='submit'></input>
        </div>
  )
} else if (this.props.board[props.category][props.square]['state'] === 'activeB') {
  return (
        <div className='answerDisplay'>
          <p>{this.props.board[props.category][props.square]['question']}</p>
          <input type='text'></input>
          <input type='submit'></input>
        </div>
  )
} else {

}

*/
