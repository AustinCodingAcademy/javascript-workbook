import React, { Component} from 'react';
import './Announcement.css';
export default class Announcement extends Component{
  render (){
    return (
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>WINNER, WINNER, CHICKEN DINNER</h2>
      </div>

    )
  }

}
