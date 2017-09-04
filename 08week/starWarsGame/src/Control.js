//Control Players
// input box
// scores

import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize'

class Control extends Component {




  render() {
    /***** CODE HERE ****/
    return (
      <div id="control">
        <h1>Star Wars Jeopardy</h1>

        <Button  className='blue accent-4 tooltipped' data-tooltip='May the force be with you!' waves='yellow'  onClick={this.props.startClick}>Start Game</Button>

      </div>
    );
  }  // return

}  // class Control

export default Control;


//<button type="button" onClick={this.props.startClick}>Start Game</button>
