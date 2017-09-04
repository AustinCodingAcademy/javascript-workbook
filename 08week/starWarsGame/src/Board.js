import React, { Component } from 'react';
import Category from './Category';

class Board extends Component {

  render() {
    // Planets, Spaceships, Vehicles, People, Films, Species
    /***** CODE HERE ****/
    return (
      <div className='black' id="board" onKeyPress={this.props.handleKey}>

        <Category id="Planets"/>
        <Category id="Ships"/>
        <Category id="Vehicles"/>
        <Category id="People"/>
        <Category id="Films"/>
        <Category id="Species"/>
      </div>
    );
  }  // return

}  // class Board

export default Board;
//<input type="text"></input>
