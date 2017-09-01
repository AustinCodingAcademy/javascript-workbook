import React, { Component } from 'react';
import './App.css';

export default class Timeline extends Component {

  renderList = () => {
    if(this.props.list && this.props.list.length > 0){
      return this.props.list.map((card, index) => {
        return(

          <div key={index}>

            <h2
              onClick={() => this.props.handleClick(card.id)}> {card.text} </h2>

            <input
              style={{ visibility: card.isEditable ? 'inherit' : 'hidden' }}
              onChange={(event) => this.props.handleChange(card.id, event.target.value)} />

            <p
              onClick={() => this.props.deleteStatus(card.id)}> X </p>

          </div>
        )
      });
    }
  }

  render() {
    return (
      <div className="">
        {this.renderList()}
      </div>
    );
  }
}
