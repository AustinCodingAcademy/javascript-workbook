import React, { Component } from 'react';
import Category from './Category';

class Board extends Component {

  render() {
    // Planets, Spaceships, Vehicles, People, Films, Species
    const categories = Object.keys(this.props.board);
    // console.log(categories);
    // console.log(this.props.board['vehicles']);
    return (
      this.props.boardState === 'question'? (
        <div id='questionWrapper'>
          <div id='questionSection'>
            <h2 id='questionDisplay'>{this.props.board[this.props.actCat][this.props.actSq]['question']}</h2>
          </div>
        </div>
      ) : (
        <div
          className='black'
          id="board"
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
      )
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

// onKeyPress={this.props.handleKey}
