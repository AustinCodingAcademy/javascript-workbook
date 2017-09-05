import React, { Component } from 'react';
import { Button, CardPanel } from 'react-materialize'

class Control extends Component {

  render() {
    return (
      this.props.startGame? (
        <div id="control">
          <h1>Star Wars Jeopardy</h1>
          <Button
            className='blue accent-4 tooltipped'
            data-tooltip='May the force be with you!'
            waves='yellow'
            onClick={this.props.resetClick}
          >Restart Game</Button>
          <div id="playersFrame">
            <CardPanel className="black-text scoreCard">
              <h2>Player: {this.props.playerInfo['Q']['name']}</h2>
              <h3>$ {this.props.playerInfo['Q']['score']}</h3>
              <p>Attempted: {this.props.playerInfo['Q']['attempted']} Correct: {this.props.playerInfo['Q']['correct']}</p>
            </CardPanel>
            <CardPanel className="black-text scoreCard">
              <h2>Player: {this.props.playerInfo['B']['name']}</h2>
              <h3>$ {this.props.playerInfo['B']['score']}</h3>
              <p>Attempted: {this.props.playerInfo['B']['attempted']} Correct: {this.props.playerInfo['B']['correct']}</p>
            </CardPanel>
            <CardPanel className="black-text scoreCard">
              <h2>Player: {this.props.playerInfo['P']['name']}</h2>
              <h3>$ {this.props.playerInfo['P']['score']}</h3>
              <p>Attempted: {this.props.playerInfo['P']['attempted']} Correct: {this.props.playerInfo['P']['correct']}</p>
            </CardPanel>
          </div>
          <div id="inputFrame">
            <p className='inputPara'>User Selected:</p>
            <input
              type='text'
              id='keystrokeListener'
              value={this.props.currentPlayer}
              onChange={this.props.handleKey}
            />
            <p className='inputPara'>Sumbit Guess:</p>
            <input
              type='text'
              id='guessInput'
              value = {this.props.input}
              onChange={this.props.handleInputChange}
            />
            <input
              type='submit'
              id='submitGuess'
              onClick={this.props.handleSubmit}
            />
          </div>
          <div id="commentFrame">
            <h6>{this.props.message}</h6>
          </div>
        </div>
      ) : (
        <div id="control">
          <h1>Star Wars Jeopardy</h1>
          <Button
            className='blue accent-4 tooltipped'
            data-tooltip='May the force be with you!'
            waves='yellow'
            onClick={this.props.startClick}
          >Start Game</Button>
          <div id="playersFrame">
            <CardPanel className="black-text scoreCard">
              <h2>Player: {this.props.playerInfo['Q']['name']}</h2>
              <h3>$ {this.props.playerInfo['Q']['score']}</h3>
              <p>Attempted: {this.props.playerInfo['Q']['attempted']} Correct: {this.props.playerInfo['Q']['correct']}</p>
            </CardPanel>
            <CardPanel className="black-text scoreCard">
              <h2>Player: {this.props.playerInfo['B']['name']}</h2>
              <h3>$ {this.props.playerInfo['B']['score']}</h3>
              <p>Attempted: {this.props.playerInfo['B']['attempted']} Correct: {this.props.playerInfo['B']['correct']}</p>
            </CardPanel>
            <CardPanel className="black-text scoreCard">
              <h2>Player: {this.props.playerInfo['P']['name']}</h2>
              <h3>$ {this.props.playerInfo['P']['score']}</h3>
              <p>Attempted: {this.props.playerInfo['P']['attempted']} Correct: {this.props.playerInfo['P']['correct']}</p>
            </CardPanel>
          </div>
          <div id="inputFrame">
            <p className='inputPara'>User Selected:</p>
            <input
              type='text'
              id='keystrokeListener'
              value={this.props.currentPlayer}
              onChange={this.props.handleKey}
            />
            <p className='inputPara'>Sumbit Guess:</p>
              <input
                type='text'
                id='guessInput'
                value = {this.props.input}
                onChange={this.props.handleInputChange}
              />
              <input
                type='submit'
                id='submitGuess'
                onClick={this.props.handleSubmit}
              />
          </div>
          <div id="commentFrame">
            <h6>{this.props.message}</h6>
          </div>
        </div>
      )
    );
  }  // return

}  // class Control

export default Control;
// <button type="button" onClick={this.props.startClick}>Start Game</button>

// className='blue accent-4 tooltipped disabled'

/*<div className={this.props.classQ}>
  <h2>{this.props.playerInfo['Q']['name']}</h2>
  <h3>{this.props.playerInfo['Q']['score']}</h3>
  <h4>Attempted: {this.props.playerInfo['Q']['attempted']} Correct: {this.props.playerInfo['Q']['correct']}</h4>
</div>*/
