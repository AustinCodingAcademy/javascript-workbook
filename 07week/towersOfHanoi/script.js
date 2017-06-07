'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //declare state
      1: [100,75,50,25], //data-stack-1
      2: [], //data-stack-2
      3: [], //data-stack-3
      block: null, //declare block and assign to null in the beginning
      message: '' //declare message and don't assign any value
    };
  } //constructor ends

  moveBlock = (event) => { //when it's clicked
    const stack = event.target.getAttribute('data-stack'); //select the stack
    const newStack = this.state[stack].slice(); //make a copy of the array to remove items
    const obj = {}; //create an empty object to hold stack and block variables
    obj[stack] = newStack;
    if (!this.state.block) { //if there is a block on stack
      const block = newStack.pop(); //remove the last element and assign to block
      obj['block'] = block;
    } else if (newStack.length === 0 ||  this.state.block < this.state[stack][this.state[stack].length-1]) {
      newStack.push(this.state.block); //place the block on stack
      obj['block'] = null; //reset block value

    }
    this.setState(obj); //pass the object in
    this.checkForWin(); //check if the player wins the game
  }//moveBlock ends

  checkForWin() {
    if (this.state[2].length === 4 || this.state[3].length === 4) { //if there are 4 blocks on stack 2 or stack 3
      this.setState({
        message: 'Nice Work!' //display the message
      });
    }
  } //checkForWin ends

  render() {


    const block1 = this.state[1].map((block) => {
      return (<div key={block} data-block={block}></div>);
    });

    const block2 = this.state[2].map((block) => {
      return (<div key={block} data-block={block}></div>);
    });

    const block3 = this.state[3].map((block) => {
      return (<div key={block} data-block={block}></div>);
    });



    return (
      <div>
        <div data-stack="1" onClick={this.moveBlock}>
          {block1}
        </div>
        <div data-stack="2" onClick={this.moveBlock}>
          {block2}
        </div>
        <div data-stack="3" onClick={this.moveBlock}>
          {block3}
        </div>
        <div>{this.state.message}</div>
      </div>
    ); //return ends
  } //render ends
}//class ends

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
