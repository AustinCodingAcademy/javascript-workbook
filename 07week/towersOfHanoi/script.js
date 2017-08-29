/*'use strict'
class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stacks: {
        1: [100,75,50,25],
        2: [],
        3: []
      },
      popped: {
        stack: null,
        block: null
      }
    }
  }  // Constructor

  popOffBlock(stacks, sKey, popped) {
    // popped
    console.log('in popOffBlock');
    popped['stack'] = sKey;
    popped['block'] = stacks[sKey][stacks[sKey].length-1];
    return popped;
  }

  handleClick(sKey) {
    // Creating an exact copy of stacks... one that is not by reference.
    const stacks = {1:[],2:[],3:[]};
    stacks[1] = this.state.stacks[1].slice();
    stacks[2] = this.state.stacks[2].slice();
    stacks[3] = this.state.stacks[3].slice();
    let popped = {stack:null,block:null};
    popped['stack'] = this.state.popped['stack'];
    popped['block'] = this.state.popped['block'];
    console.log('popped before change', popped);
    if (popped['block']) { //block was already popped.  Now I want to push block
      // if (sKey) {
      //   console.log('you clicked on me: '+ sKey);
      // }
      // else {
      //   console.log('you clicked on nothing');
      // }
      popped['stack'] = null;
      popped['block'] = null;

      // No block was popped.  Therefore, we are clicking stack to pop a
      // block off.  Let's make sure stack has blocks to pop off.
    } else if (stacks[sKey].length > 0) { // Ok, no block was popped
      console.log('stacks length', stacks[sKey].length);
      popped = this.popOffBlock(stacks, sKey, popped);
      console.log('popped after', popped);
      // No popped block.  User click empty stack.  Tell User
      // he is a complete dolt.
    } else {
      console.log('Please select a stack with blocks.');
    }
    this.setState({stacks: stacks, popped: popped,});
  }

  checkForWin() {
    console.log('in checkForWin');
  }

  render() {
    return (
      <div>
        <div data-stack="1" onClick={()=>this.handleClick(1)}>
          <div data-block="100"></div>
          <div data-block="75" ></div>
          <div data-block="50" ></div>
          <div data-block="25" ></div>
        </div>
        <div data-stack="2" onClick={()=>this.handleClick(2)}>
        </div>
        <div data-stack="3" onClick={()=>this.handleClick(3)}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
/***********************************************************
Given: the Board, stacks and blocks. Board is displayed.

Create an object with three arrays
/****************** WHITE BOARD NOTES **********************
// Given: the board, stacks and blocks.  Board Display.
//
// create object with 3 arrays?
//
// Click on a block (and stack)
// Test for popped block.
// If popped block then
//   If validMove() then
//     *** Comparing last block in current stack, test
//     movePiece()
//     if checkForWin() then
//       Announce winner!
//     else
//       Continue playing the game.
//   else
//     alert user, 'Cannot move larger block onto smaller one'
//   end if
// else
//   If !popOffBlock() then
//     alert user, 'select a stack with a block'
//   End if
//
// validMove(sourceStack, targetStack)  // the tests expect this function to take in 2 values.
//  if source stack array.last < target stack array.last then
//    return true
//  end if
//  return false
//
// movePiece()
//  target stack array.push(source stack array.pop)
//  return
//
// checkForWin()
//  if b.array.length === 4 || c.array.length === 4 then
//    return true
//  end if
//  return false
//
// popOffBlock(sourceStack)
//   if sourceStack > 0  // has blocks
//     Pop off top block.
//     return true;
//   else
//     return false;
//   end if

***********************************************************/

//WhiteBoarding
/*

The object of the game is to move all four pieces to another peg and they must
be in order.  We would do this by.

1. lifting the top peg off of the peg it is on and moving it to another peg.
  a. This would mean that we would have to setup an on click event for the
      click on the data stack.
  b. we must then remove the lastChild from the parent div and set it equal to
      a variable.
  c. So far we need to set the clickedStack to equal getElementById of data-stack
      We also need to set the id of the last child node to the piecePopped var.
  d. following that we must set the value of popped to true
  e. After that we must let the computer know that it is to push the stored
      child node onto another div.
  f. This will come with an if statement. If popped = true; push peicePopped
      else {pop the last child node and store it again.}

  g.  This section will also include a validMove section.
      i.  The value of the last child block must be less than that of the other
      blocks on the stack.

2. After each turn the system must checkForWin.
  a. This will be an if statement to determine how many child elements exist
      under either the second or third stack.  if there are four children,
      set this.message = 'You have won!'



*/

'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    const pieceValsStart = [100, 75, 50, 25];
    this.state = {
      popped: null,
      winGame: false,
      message: ''
    }
  }

  handleClick() {
    //const clickedStack = clickedId ;
    console.log('Stack Clicked');
    const poppedPiece = lastChild;
    console.log(poppedPiece)
    //console.log(clickedStack)

    //console.log(clickedStack);


  }

  render() {
    return (
      <div>
        <div id= '1' data-stack="1" onClick={this.handleClick.bind(this)}>
          <div id= '100' data-block="100"></div>
          <div id= '75' data-block="75"></div>
          <div id= '50' data-block="50"></div>
          <div id= '25' data-block="25"></div>
        </div>
        <div id= '2' data-stack="2" onClick={this.handleClick.bind(this)}>
        </div>
        <div id= '3' data-stack="3" onClick={this.handleClick.bind(this)}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
