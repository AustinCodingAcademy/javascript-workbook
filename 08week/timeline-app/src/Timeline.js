import React, { Component } from 'react';
import './App.css';

class TimeLine extends Component {
    renderList(){
        if(this.props.list && this.props.list.length > 0){
            return this.props.list.map((card, index) =>{
                return(
                    <div key={index}>
                        <h2>{card.text}</h2>
                        <p onClick={() => this.props.deleteStatus(card.id)}>X</p>
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

export default TimeLine;
