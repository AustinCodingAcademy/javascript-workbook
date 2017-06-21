'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100,75,50,25],
      b: [],
      c: [],
      block: null
    }
  }

// this is where it will be checked if the block is smaller than the last on the stack
// to verify if it is valid for the game rules
  isLegal = function(stackArray, block) {
    console.log(stackArray[stackArray.length - 1]);
    console.log(block);
    if (stackArray[stackArray.length - 1] === undefined){
      return true;
    }
    if(stackArray[stackArray.length - 1] > block){
      return true;
    } else {
      return false;
    }
  }
  clickStack = (event) => {
    const letter = event.target.getAttribute('data-stack');
    const stack = this.state[letter].slice();
    const obj = {};

    if(!this.state.block){
      const block = stack.pop();
      obj['block'] = block;
    } else {
      // check if the move is legal
      // as explained in class??
      // after watching video
      if ( this.isLegal(stack, this.state.block) ) {

        stack.push(this.state.block);
        obj['block'] = null;
      }
    }
    obj[letter] = stack;
    this.setState(obj);
// ???

  }

// explained that a copy of each stack needed to be created
// map aBlocks, bBlocks, cBlocks
  render() {
    const aBlocks = this.state.a.map((size) => {
      return (<div key={size} data-block={size}></div>)
    });
    const bBlocks = this.state.b.map((size) => {
      return (<div key={size} data-block={size}></div>)
    });
    const cBlocks = this.state.c.map((size) => {
      return (<div key={size} data-block={size}></div>)
    });

    return (
      <div>
      <div data-stack="a" onClick={this.clickStack}>
      {aBlocks}
      </div>
      <div data-stack="b" onClick={this.clickStack}>
      {bBlocks}
      </div>
      <div data-stack="c" onClick={this.clickStack}>
      {cBlocks}
      </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
