//Entire game: Master object file
//Handle: DML. Anything that involes manipulating data.

import React, { Component } from 'react';
import Control from './Control';
import Board from './Board';
import SquareClass from './SquareClass';

/***************** WHITE BOARD NOTES **********************
// Need to create a master game object that stores...
//
// ************** Master Object *************
//   Game Control info
//     Round = 1, 2 (double jeopardy)
//     Players
//       Q
//         Name, Score, Attempted, Correct
//       B
/          Name, Score, Attempted, Correct
//       P
//         Name, Score, Attempted, Correct
//     playerTurn
//     inputQuestion
//     Message
//   Board.  Board is made up of... Categories, Squares
//       // Planets, Spaceships, Vehicles, People, Films, Species
//     planets
//       questionPrefix: "Where is"
//       squares[]  // 5 of them.
//     spaceships
//       questionPrefix: "What is"
//       squares[]
//     vehicles
//       questionPrefix: "What is"
//       squares[]
//     people
//       questionPrefix: "Who is"
//       squares[]
//     films
//       questionPrefix: "What is"
//       squares[]
//     species
//       questionPrefix: "Who are the"
//       squares[]
//
// ********** Square Object ********************
//   Squares Object
//     state: This will control behavior: pending, activeA, activeB, complete
//       - pending: Display: Money;  clickable
//       - active A: Display: Question, Money; not clicable; blue glow (1st attempt)
//       - active B: Display: Question, Money; not clicable; orange glow (2nd attempt)
//       - complete (Disabled): Display: Question, Answer, Player, Money; not clickable
//         - Correctly Answered: Green
//         - Wrongly answered: Red
//     Hover: Brightens when hovered over: yellow glow, slightly larger...
//     Click: Will move square to active A state
//     Question: from Star Wars JSON  (this is a statement)
//     Answer:   from Star Wars JSON  (this is the answer in the form of a question)
//     Attempt: 1st or 2nd attempt
//     gotCorrect: player or null if no one answered correctly
//     dailyDouble: True or False
//     r1Money: 100, 200, 300, 400, 500
//     r2Money: 200, 400, 600, 800, 1000
//
//
// ************ State object *******************
//   playerTurn
//   player Object
//   Square object
//   inputQuestion
//   Message
//
// render
//   -- gameControl
//   -- Board
//      -- Category
//         -- Square
//
// render empty board
// Fill category / squares with data
//   use random on Star Wars json data.
// Prompt for player names? or just call Q, B, P
// random select player to start
// Player clicks on square, reveals question.
// Listen for click (Q, B, P)
// Whoever buzzes in, gets to answer question.
// display answer Prompt.
// IF user is correct then
//   Alert players that player 'X' got it right.
//   update square as Disabled; gotCorrect = player
//   update player + Money
// ELSE IF ans incorrect and firstAttempt then
//   alert that answer is incorrect
//   update player  - Money
//   Allow another person to buzz in.
// ELSE incorrect answer and second attempt then
//   move on...
//   alert that answer is incorrect
//   update square as Disabled; gotCorrect = null
//   update player  - Money
// END IF

***********************************************************/
class StarWars extends Component {

  constructor() {
    super();
    this.game = {
      round: 1,
      currentPlayer: 'Q',
      player: {
        Q: { name: '', score: null, attempted: null, correct: null },
        B: { name: '', score: null, attempted: null, correct: null },
        P: { name: '', score: null, attempted: null, correct: null }
      },
      input: '',
      message: '',
      question: {
        planets:    'Where is',
        spaceships: 'What is',
        vehicles:   'What is',
        people:     'Who is',
        films:      'What is',
        species:    'Who are the'
      },
      board: {
        planets:    [],
        spaceships: [],
        vehicles:   [],
        people:     [],
        films:      [],
        species:    []
      }
    };  // this.game object

    this.state = {
      round: this.game['round'],
      currentPlayer: this.game['currentPlayer'],
      input: '',
      message: '',
      board: {}
      // planetsSquares: [],
      // spaceshipsSquares: [],
      // vehiclesSquares: [],
      // peopleSquares: [],
      // filmsSquares: [],
      // speciesSquares: []
    };  // this.state object
  }  //Constructor

  initState() {
    console.log('initialize');
    [1,2,3,4,5].forEach((id, index)=>{
      this.game['board']['planets'].push(new SquareClass(id));
      this.game['board']['spaceships'].push(new SquareClass(id));
      this.game['board']['vehicles'].push(new SquareClass(id));
      this.game['board']['people'].push(new SquareClass(id));
      this.game['board']['films'].push(new SquareClass(id));
      this.game['board']['species'].push(new SquareClass(id));
    });
    console.log('this.game.board',this.game['board']);

  }

  startClick = ()=> {
    console.log('startClick');
    this.initState()
    console.log('this.game...planets again',this.game['board']['planets']);
    /***************  LINE BELOW NOT WORKING.  NOT ABLE TO SET STATE ******/
    // this.setState({ planetsSquares : this.game['board']['planets']['squares'] });
    this.setState(
      { board : this.game['board']
      // planetsSquares : this.game['board']['planets']['squares'],
      // spaceshipsSquares : this.game['board']['spaceships']['squares'],
      // vehiclesSquares : this.game['board']['vehicles']['squares'],
      // peopleSquares : this.game['board']['people']['squares'],
      // filmsSquares : this.game['board']['films']['squares'],
      // speciesSquares : this.game['board']['species']['squares'],
      }
    );
  }

  handleClick = ()=> {
    console.log('handleClick');
    /***** CODE HERE ****/

  }  // handleClick

  handleKey = (event)=> {
    console.log('handleKey');
    /***** CODE HERE ****/
    // x = e.key;
    switch (event.key) {
      case 'q':
      case 'Q':
        console.log('you pressed the Q key');
        break;
      case 'b':
      case 'B':
        console.log('you pressed the B key');
        break;
      case 'p':
      case 'P':
        console.log('you pressed the P key');
        break;
      default:
        console.log('you pressed the some other key');
    }
    // if (x === 'q' || x=== 'Q') {
    //   console.log('you pressed the Q key');
    // } else if

  }  // handleKey

  // this.initState(); 
  render() {
    console.log('board',this.state);

    return (
      <div>
        <Control
          startClick={this.startClick}
        />

        <Board

          handleKey={this.handleKey}
          board = {this.state['board']}
        />

      </div>
    );
  }  // render

}  // class StarWars
export default StarWars;

// const newGame = new StarWars();
// newGame.fillBoard();
