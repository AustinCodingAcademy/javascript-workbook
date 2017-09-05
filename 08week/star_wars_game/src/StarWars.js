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
//     ships
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
      startGame: false,
      round: 1,
      currentPlayer: '',
      player: {
        Q: { name: 'Q', score: 0, attempted: 0, correct: 0 },
        B: { name: 'B', score: 0, attempted: 0, correct: 0 },
        P: { name: 'P', score: 0, attempted: 0, correct: 0 }
      },
      input: '',
      message: '',
      question: {
        planets:  'Where is',
        ships:    'What is',
        vehicles: 'What is',
        people:   'Who is',
        films:    'What is',
        species:  'Who are the'
      },
      board: {
        planets:  [],
        ships:    [],
        vehicles: [],
        people:   [],
        films:    [],
        species:  []
      },
      boardState: 'default',
      activeCategory: '',
      activeSquare: null
    };  // this.game object

    this.state = {
      round: this.game['round'],
      currentPlayer: this.game['currentPlayer'],
      input: '',
      message: '',
      board: {},
      boardState: this.game['boardState'],
      activeCategory: '',
      activeSquare: null,
    };  // this.state object
  }  //Constructor

  initState() {
    console.log('initialize');
    [0,1,2,3,4].forEach((id, index)=>{
      // Pulling the questions via Fetch.  Populating the planets category
      const planetSquare = new SquareClass(id);
      planetSquare.question = `1 + ${id}`;
      planetSquare.answer = 1 + id;
      planetSquare.answer = planetSquare.answer.toString();
      this.game['board']['planets'].push(planetSquare);

      // Pulling the questions via Fetch.  Populating the spaceships category
      const shipSquare = new SquareClass(id);
      this.game['board']['ships'].push(shipSquare);

      // Pulling the questions via Fetch.  Populating the vehicles category
      const vehicleSquare = new SquareClass(id);
      this.game['board']['vehicles'].push(vehicleSquare);

      // Pulling the questions via Fetch.  Populating the people category
      const peopleSquare = new SquareClass(id);
      this.game['board']['people'].push(peopleSquare);

      // Pulling the questions via Fetch.  Populating the films category
      const filmSquare = new SquareClass(id);
      this.game['board']['films'].push(filmSquare);

      // Pulling the questions via Fetch.  Populating the species category
      const speciesSquare = new SquareClass(id);
      this.game['board']['species'].push(speciesSquare);
    });
    console.log('this.game.board',this.game['board']);
    // console.log('planets[id]', this.game['board']['planets'][0]);

  }

  startClick = ()=> {
    console.log('startClick');
    this.initState()
    this.game['startGame'] = true;
    // console.log('this.game...planets again',this.game['board']['planets']);
    this.setState( { board : this.game['board'] } );
  }

  resetClick = ()=> {
    console.log('resetClick');
    this.game['startGame'] = true;
    this.game['round'] = 1;
    this.game['currentPlayer'] = '';
    this.game['player']['Q']['name'] = 'Q';
    this.game['player']['Q']['score'] = 0;
    this.game['player']['Q']['attempted'] = 0;
    this.game['player']['Q']['correct'] = 0;
    this.game['player']['B']['name'] = 'B';
    this.game['player']['B']['score'] = 0;
    this.game['player']['B']['attempted'] = 0;
    this.game['player']['B']['correct'] = 0;
    this.game['player']['P']['name'] = 'P';
    this.game['player']['P']['score'] = 0;
    this.game['player']['P']['attempted'] = 0;
    this.game['player']['P']['correct'] = 0;
    this.game['input'] = '';
    this.game['message'] = '';
    this.game['board']['planets'] = [];
    this.game['board']['ships'] = [];
    this.game['board']['vehicles'] = [];
    this.game['board']['people'] = [];
    this.game['board']['films'] = [];
    this.game['board']['species'] = [];
    this.game['boardState'] = 'default';
    this.game['activeCategory'] = '';
    this.game['activeSquare'] = null;
    this.initState()

    const resetState = {
      round: this.game['round'],
      currentPlayer: this.game['currentPlayer'],
      input: '',
      message: '',
      board: this.game['board'],
      boardState: this.game['boardState'],
      activeCategory: '',
      activeSquare: null,
    };  // reset object

    // console.log('this.game...planets again',this.game['board']['planets']);
    this.setState( resetState );
  }

  handleClick = (category, square)=> {
    console.log('handleClick');
    console.log('clicked square before', category, square, this.game['board'][category][square]['squareState']);

    this.game.activeCategory = category;
    this.game.activeSquare = square;
    switch (this.game['board'][category][square]['squareState']) {
      case 'pending':
        this.game['board'][category][square]['squareState'] = 'active';
        this.game['boardState'] = 'question';
        this.game['message'] = '';
        break;
      case 'active':
        this.game['board'][category][square]['squareState'] = 'steal';
        this.game['boardState'] = 'question';
        break;
      case 'steal':
        this.game['board'][category][square]['squareState'] = 'answer';
        this.game['boardState'] = 'default';
        break;
      default:
        this.game['board'][category][square]['squareState'] = 'answer';
        this.game['boardState'] = 'default';
        break;
    }

    console.log('after', category, square, this.game['board'][category][square]['squareState']);
    this.setState( {
      board : this.game['board'],
      boardState : this.game['boardState'],
      activeCategory : this.game['activeCategory'],
      activeSquare : this.game['activeSquare'],
      message : this.game['message']
     } );
  }  // handleClick

  handleKey = (event)=> {
    console.log('handleKey');
    /***** CODE HERE ****/
    // console.log('handleKey');
    this.game['currentPlayer'] = event.target.value.toUpperCase().slice(0,1);
    this.game['message'] = `${this.game['currentPlayer']} buzzed in first!  Question the answer ${this.game['currentPlayer']}.`

    this.setState( {
      currentPlayer : this.game['currentPlayer'],
      // currentPlayer : event.target.value.toUpperCase(),
      message : this.game['message'],

     } );

  }  // handleKey

  handleInputChange = (e)=> {
    console.log('handleInputChange');
    this.setState({input: e.target.value});
  }

  handleSubmit = ()=> {
    console.log('handleSubmit');
    const cat = this.state['activeCategory'];
    const sq = this.state['activeSquare'];
    const player = this.state['currentPlayer'];

    console.log('currentSquare',this.game['board'][cat][sq]);
    if (this.state.input === this.game['board'][cat][sq]['answer']) {
      this.game['message'] = `${this.state['currentPlayer']} answered correctly`;
      this.game['board'][cat][sq]['squareState'] = 'answer';  // square is used.
      this.game['boardState'] = 'default';
      this.game['activeCategory'] = '';
      this.game['activeSquare'] = null;
      this.game['player'][player]['score'] += this.game['board'][cat][sq]['r1Money'];
      this.game['player'][player]['attempted'] += 1;
      this.game['player'][player]['correct'] += 1;
      this.game['currentPlayer'] = '';
      this.game['input'] = '';

    } else if (this.game['board'][cat][sq]['squareState'] === 'steal') {
      this.game['message'] = `${this.state['currentPlayer']} got it wrong as well.  Just not Star Wars enough for this answer`;
      this.game['board'][cat][sq]['squareState'] = 'answer';  // square is used.
      this.game['boardState'] = 'default';
      this.game['activeCategory'] = '';
      this.game['activeSquare'] = null;
      this.game['player'][player]['score'] -= this.game['board'][cat][sq]['r1Money'];
      this.game['player'][player]['attempted'] += 1;
      this.game['currentPlayer'] = '';
      this.game['input'] = '';

    } else {  //current square is active state.  Allow another guess.
      this.game['message'] = `${this.state['currentPlayer']} got it wrong. Someone could steal`;
      this.game['board'][cat][sq]['squareState'] = 'steal';  // square is used.
      this.game['player'][player]['score'] -= this.game['board'][cat][sq]['r1Money'];
      this.game['player'][player]['attempted'] += 1;
      this.game['currentPlayer'] = '';
      this.game['input'] = '';
    }

    const resetState = {
      round: this.game['round'],
      currentPlayer: this.game['currentPlayer'],
      input: this.game['input'],
      message: this.game['message'],
      board: this.game['board'],
      boardState: this.game['boardState'],
      activeCategory: this.game['activeCategory'],
      activeSquare: this.game['activeSquare'],
    };  // reset object

    this.setState(resetState);

  }


  render() {
    console.log('board',this.state);

    return (
      <div>
        <Control
          startClick={this.startClick}
          resetClick={this.resetClick}
          handleKey={this.handleKey}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          startGame={this.game['startGame']}
          currentPlayer={this.state.currentPlayer}
          playerInfo={this.game['player']}
          classQ = "player"
          message = {this.state['message']}
          input = {this.state['input']}
        />

        <Board
          handleClick={this.handleClick}
          board = {this.state['board']}
          boardState = {this.state['boardState']}
          actCat = {this.state['activeCategory']}
          actSq = {this.state['activeSquare']}
        />

      </div>
    );
  }  // render

}  // class StarWars
export default StarWars;

// const newGame = new StarWars();
// newGame.fillBoard();
